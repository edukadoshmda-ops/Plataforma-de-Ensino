# Webhook Asaas

Esta Edge Function recebe eventos do Asaas e atualiza `matriculas.status_pagamento`.

## Segredos necessários

Configure no Supabase Edge Functions:

- `SUPABASE_SERVICE_ROLE_KEY`: chave service role do projeto Supabase.
- `ASAAS_WEBHOOK_TOKEN`: o mesmo token informado no campo "Token de autenticação" do webhook Asaas.

Nunca coloque esses valores no frontend ou em variáveis `VITE_`.

## Referência da cobrança

Ao criar a cobrança no Asaas, use o número da matrícula em `externalReference`.
Assim, o webhook localiza a matrícula sem depender de e-mail ou dados enviados pelo navegador.
