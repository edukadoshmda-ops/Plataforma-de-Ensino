import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const webhookToken = Deno.env.get("ASAAS_WEBHOOK_TOKEN") ?? "";
const asaasApiKey = Deno.env.get("ASAAS_API_KEY") ?? "";
const asaasApiBaseUrl = Deno.env.get("ASAAS_API_BASE_URL") ?? "https://api.asaas.com/v3";

const supabase = createClient(supabaseUrl, serviceRoleKey);

const paidStatuses = new Set(["CONFIRMED", "RECEIVED", "RECEIVED_IN_CASH"]);
const refundedStatuses = new Set(["REFUNDED", "CHARGEBACK_REQUESTED"]);
const refusedStatuses = new Set(["OVERDUE", "DELETED", "REFUND_REQUESTED"]);

async function obterEmailClienteAsaas(customerId?: string): Promise<string | null> {
  if (!customerId || !asaasApiKey) return null;
  try {
    const res = await fetch(`${asaasApiBaseUrl}/customers/${customerId}`, {
      headers: {
        access_token: asaasApiKey,
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data?.email === "string" ? data.email.trim().toLowerCase() : null;
  } catch {
    return null;
  }
}

Deno.serve(async (request) => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  if (!webhookToken || request.headers.get("asaas-access-token") !== webhookToken) {
    return new Response("Unauthorized", { status: 401 });
  }

  let payload: {
    event?: string;
    payment?: {
      id?: string;
      status?: string;
      externalReference?: string | null;
      customer?: string;
      customerEmail?: string;
      email?: string;
    };
  };

  try {
    payload = await request.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const payment = payload.payment;
  const status = payment?.status;
  const reference = payment?.externalReference?.trim() || null;

  if (!payment?.id || !status) {
    return new Response("Ignored: payment data is incomplete", { status: 200 });
  }

  let statusPagamento: "pago" | "reembolsado" | "recusado" | null = null;
  if (paidStatuses.has(status)) statusPagamento = "pago";
  if (refundedStatuses.has(status)) statusPagamento = "reembolsado";
  if (refusedStatuses.has(status)) statusPagamento = "recusado";

  if (!statusPagamento) {
    return new Response("Ignored: event does not change access", { status: 200 });
  }

  const updateFields = {
    status_pagamento: statusPagamento,
    metodo_pagamento: "ASAAS",
    transacao_id: payment.id,
    data_confirmacao: statusPagamento === "pago" ? new Date().toISOString() : null,
    atualizado_em: new Date().toISOString(),
  };

  // 1. Tenta atualizar pelo externalReference (numero_matricula ou email)
  if (reference) {
    if (reference.includes("@")) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("id")
        .ilike("email", reference)
        .maybeSingle();

      if (profile?.id) {
        const { error } = await supabase
          .from("matriculas")
          .update(updateFields)
          .eq("user_id", profile.id);
        if (!error) return new Response("OK (by email reference)", { status: 200 });
      }
    } else {
      const { error } = await supabase
        .from("matriculas")
        .update(updateFields)
        .eq("numero_matricula", reference);
      if (!error) return new Response("OK (by numero_matricula)", { status: 200 });
    }
  }

  // 2. Fallback: busca por e-mail do cliente (no payload ou consultando a API do Asaas)
  const emailCliente =
    payment.customerEmail?.trim().toLowerCase() ||
    payment.email?.trim().toLowerCase() ||
    (await obterEmailClienteAsaas(payment.customer));

  if (emailCliente) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("id")
      .ilike("email", emailCliente)
      .maybeSingle();

    if (profile?.id) {
      const { error } = await supabase
        .from("matriculas")
        .update(updateFields)
        .eq("user_id", profile.id);

      if (!error) {
        return new Response("OK (by customer email)", { status: 200 });
      }
    }
  }

  return new Response("Ignored: could not match student by externalReference or customer email", {
    status: 200,
  });
});
