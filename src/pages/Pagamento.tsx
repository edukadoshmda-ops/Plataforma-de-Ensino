import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  CreditCard,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
  Lock,
  RefreshCw,
  ExternalLink,
  Crown,
  Sparkles,
  Truck,
  Package,
  Copy,
  Check,
  MapPin,
  QrCode,
  Tag,
  Infinity,
} from "lucide-react";
import { obterMatricula } from "../services/supabaseClient";

export type TipoPlano = "digital" | "fisico";

interface PlanoConfig {
  id: TipoPlano;
  nome: string;
  subtitulo: string;
  badge: string;
  valorOriginal: number;
  valorTotal: number;
  valorParcela: number;
  parcelas: number;
  checkoutUrl: string;
  itens: string[];
}

const PLANOS: Record<TipoPlano, PlanoConfig> = {
  digital: {
    id: "digital",
    nome: "Plano Digital Completo",
    subtitulo: "Acesso VITALÍCIO total online + Certificado, Histórico e Credencial Digital em PDF de Alta Resolução",
    badge: "♾️ Acesso Vitalício",
    valorOriginal: 497.0,
    valorTotal: 179.88,
    valorParcela: 14.99,
    parcelas: 12,
    checkoutUrl:
      import.meta.env.VITE_ASAAS_CHECKOUT_URL || "https://www.asaas.com/c/g59srloma9xotu29",
    itens: [
      "Acesso VITALÍCIO irrestrito às 30 Disciplinas Teológicas (sem mensalidades)",
      "Biblioteca Digital com +100 Obras Raras em PDF",
      "Audiobooks com voz profissional e Preleções em Estúdio",
      "Tutor IA Teológico 24h para exegese e dúvidas bíblicas",
      "Provas modulares com gabarito comentado",
      "Diploma & Certificado Digital com QR Code de Autenticidade",
      "Histórico Escolar Oficial Digital (1.500 horas)",
      "Credencial Digital de Teólogo para celular com foto e QR Code",
    ],
  },
  fisico: {
    id: "fisico",
    nome: "Plano Físico Ministerial (Kit de Formatura)",
    subtitulo: "Acesso VITALÍCIO + Credencial em PVC Rígido e Diploma em Papel Especial com Selo Dourado",
    badge: "👑 Vitalício + Kit Físico",
    valorOriginal: 890.0,
    valorTotal: 297.0,
    valorParcela: 29.7,
    parcelas: 12,
    checkoutUrl:
      import.meta.env.VITE_ASAAS_CHECKOUT_URL_FISICO ||
      import.meta.env.VITE_ASAAS_CHECKOUT_URL ||
      "https://www.asaas.com/c/g59srloma9xotu29",
    itens: [
      "Acesso VITALÍCIO irrestrito a toda a plataforma online",
      "TUDO o que está incluso no Plano Digital Completo",
      "Credencial Oficial em Cartão PVC Rígido com foto e QR Code",
      "Diploma de Bacharel Livre em Papel Alta Gramatura com Selo Metalizado em Relevo Dourado",
      "Histórico Escolar Oficial Impresso e Autenticado pela Reitoria",
      "Porta-Credencial Executivo & Cordão Oficial Institucional",
      "Frete Grátis com Seguro e Código de Rastreio dos Correios para todo o Brasil",
      "Embalagem especial de segurança para proteção dos documentos",
    ],
  },
};

const CHAVE_PIX_PADRAO = "financeiro@teologiaacessivel.com.br";

export default function Pagamento() {
  const { usuario, matricula, setMatricula, pagamentoConfirmado } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [searchParams] = useSearchParams();

  const dados = state || matricula;

  const planoInicial: TipoPlano =
    dados?.plano === "digital" || searchParams.get("plano") === "digital" ? "digital" : "fisico";

  const [planoSelecionado, setPlanoSelecionado] = useState<TipoPlano>(planoInicial);
  const [processando, setProcessando] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [pixCopiado, setPixCopiado] = useState(false);
  const [buscandoCep, setBuscandoCep] = useState(false);

  const [endereco, setEndereco] = useState({
    cep: dados?.endereco?.cep || "",
    logradouro: dados?.endereco?.logradouro || "",
    numero: dados?.endereco?.numero || "",
    complemento: dados?.endereco?.complemento || "",
    bairro: dados?.endereco?.bairro || "",
    cidade: dados?.endereco?.cidade || "",
    uf: dados?.endereco?.uf || "",
  });

  useEffect(() => {
    if (pagamentoConfirmado || matricula?.status_pagamento === "pago") {
      navigate("/", { replace: true });
    }
  }, [pagamentoConfirmado, matricula?.status_pagamento, navigate]);

  if (!dados) {
    return (
      <div className="card" style={{ textAlign: "center", padding: 32 }}>
        <p>Faça sua matrícula antes do pagamento.</p>
        <button className="btn btn-primario" onClick={() => navigate("/matricula")}>
          Ir para Matrícula
        </button>
      </div>
    );
  }

  const planoAtivo = PLANOS[planoSelecionado];
  const numeroMatricula = dados?.matricula || dados?.numero_matricula || "TA-2026-NOVO";
  const nomeAluno = dados?.nomeCompleto || usuario?.nome;
  const emailAluno = dados?.email || usuario?.email;
  const economia = planoAtivo.valorOriginal - planoAtivo.valorTotal;

  const handleCepChange = async (valor: string) => {
    const cepLimpo = valor.replace(/\D/g, "").slice(0, 8);
    const cepFormatado =
      cepLimpo.length > 5 ? `${cepLimpo.slice(0, 5)}-${cepLimpo.slice(5)}` : cepLimpo;

    setEndereco((e) => ({ ...e, cep: cepFormatado }));

    if (cepLimpo.length === 8) {
      setBuscandoCep(true);
      try {
        const resp = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        const json = await resp.json();
        if (!json.erro) {
          setEndereco((ant) => ({
            ...ant,
            cep: cepFormatado,
            logradouro: json.logradouro || ant.logradouro,
            bairro: json.bairro || ant.bairro,
            cidade: json.localidade || ant.cidade,
            uf: json.uf || ant.uf,
          }));
        }
      } catch (err) {
        console.warn("Consulta ViaCEP:", err);
      } finally {
        setBuscandoCep(false);
      }
    }
  };

  const salvarDadosComPlano = async () => {
    const dadosAtualizados = {
      ...dados,
      plano: planoSelecionado,
      valorTotal: planoAtivo.valorTotal,
      valorParcela: planoAtivo.valorParcela,
      endereco: planoSelecionado === "fisico" ? endereco : undefined,
    };
    try {
      await setMatricula(dadosAtualizados, false);
    } catch {
      // Local fallback
    }
  };

  const abrirCheckout = async () => {
    await salvarDadosComPlano();
    if (!planoAtivo.checkoutUrl) {
      setMensagem("O checkout Asaas ainda não foi configurado.");
      return;
    }
    const url = new URL(planoAtivo.checkoutUrl);
    if (numeroMatricula) url.searchParams.set("externalReference", String(numeroMatricula));
    if (emailAluno) url.searchParams.set("email", String(emailAluno));
    url.searchParams.set("plan", planoSelecionado);
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  const copiarChavePix = () => {
    navigator.clipboard.writeText(CHAVE_PIX_PADRAO);
    setPixCopiado(true);
    setTimeout(() => setPixCopiado(false), 3000);
  };

  const verificarPagamento = async () => {
    setProcessando(true);
    setMensagem("");
    try {
      if (!usuario?.id) return;
      const atualizado = await obterMatricula(usuario.id, true);
      if (atualizado?.status_pagamento === "pago" || atualizado?.pagamento === "pago") {
        await setMatricula(
          { ...dados, ...atualizado, plano: planoSelecionado, status_pagamento: "pago", pagamento: "pago" },
          false
        );
        navigate("/", { replace: true });
      } else {
        setMensagem(
          "Pagamento ainda não confirmado. Assim que o Asaas ou o banco confirmar sua transação (PIX, Boleto ou Cartão), clique novamente para liberar seu acesso."
        );
      }
    } catch (error) {
      console.error("Erro ao confirmar pagamento:", error);
      setMensagem("Não foi possível consultar o status agora. Tente novamente em instantes.");
    } finally {
      setProcessando(false);
    }
  };

  // Liberação direta para demonstração ou Superadmin
  const liberarAcessoTeste = async () => {
    setProcessando(true);
    try {
      const dadosLiberados = {
        ...dados,
        plano: planoSelecionado,
        status_pagamento: "pago",
        pagamento: "pago",
        endereco: planoSelecionado === "fisico" ? endereco : undefined,
      };
      await setMatricula(dadosLiberados, true);
      navigate("/", { replace: true });
    } finally {
      setProcessando(false);
    }
  };

  return (
    <div className="pagamento-pagina">
      <div className="pagina-titulo-area">
        <div className="badge-topo-sebitan">
          <Lock size={14} /> Pagamento Seguro • Teologia Acessível
        </div>
        <h1>
          <CreditCard size={26} className="icone-titulo" /> Pagamento da Matrícula
        </h1>
        <p className="pagina-sub">
          Matrícula <strong>{numeroMatricula}</strong> para <strong>{nomeAluno}</strong>. Escolha o
          seu plano e conclua para ter seu acesso liberado imediatamente.
        </p>
      </div>

      {/* SELETOR INTERATIVO DE PLANOS NO CHECKOUT */}
      <div style={{ maxWidth: 1000, margin: "0 auto 20px" }}>
        <div className="pagamento-planos-seletor">
          <div
            className={`pagamento-plano-opcao ${planoSelecionado === "digital" ? "ativo" : ""}`}
            onClick={() => setPlanoSelecionado("digital")}
            role="button"
            tabIndex={0}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <strong style={{ fontSize: "1.05rem", color: "#0f2a43" }}>Plano Digital Completo</strong>
              <span className="badge-status status-concluído">♾️ Acesso Vitalício</span>
            </div>
            <p style={{ margin: "0 0 8px", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.4 }}>
              Acesso vitalício às 30 disciplinas + Biblioteca Digital + Diploma e Credencial Digital em PDF de Alta Resolução.
            </p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontSize: "0.88rem", textDecoration: "line-through", color: "#94a3b8" }}>De R$ 497,00</span>
              <strong style={{ fontSize: "1.45rem", color: "#0f2a43" }}>12x R$ 14,99</strong>
              <small style={{ color: "#166534", fontWeight: 700, fontSize: "0.85rem" }}>
                (ou R$ 179,88 à vista)
              </small>
            </div>
          </div>

          <div
            className={`pagamento-plano-opcao ${planoSelecionado === "fisico" ? "ativo" : ""}`}
            onClick={() => setPlanoSelecionado("fisico")}
            role="button"
            tabIndex={0}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <strong style={{ fontSize: "1.05rem", color: "#0f2a43", display: "flex", alignItems: "center", gap: 6 }}>
                <Crown size={16} color="#d97706" /> Formação + Kit Físico Ministerial
              </strong>
              <span className="badge-status" style={{ background: "#fef3c7", color: "#92400e", fontWeight: 700 }}>
                👑 Vitalício + Físico
              </span>
            </div>
            <p style={{ margin: "0 0 8px", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.4 }}>
              Acesso vitalício digital + Credencial PVC Rígido + Diploma Papel Alta Gramatura com Selo Dourado (Frete Grátis).
            </p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontSize: "0.88rem", textDecoration: "line-through", color: "#94a3b8" }}>De R$ 890,00</span>
              <strong style={{ fontSize: "1.45rem", color: "#0f2a43" }}>12x R$ 29,70</strong>
              <small style={{ color: "#166534", fontWeight: 700, fontSize: "0.85rem" }}>
                (ou R$ 297,00 à vista)
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-player-destaque" style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {/* COLUNA ESQUERDA: RESUMO DO PEDIDO E BENEFÍCIOS */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h3 style={{ margin: 0, fontSize: "1.15rem", color: "#0f2a43" }}>Resumo do Pedido</h3>
              <span className="badge-topo-sebitan" style={{ margin: 0 }}>
                {planoAtivo.badge}
              </span>
            </div>

            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <span style={{ color: "#64748b", fontSize: "0.92rem" }}>Valor de tabela original</span>
                <span style={{ textDecoration: "line-through", color: "#94a3b8", fontWeight: 600 }}>
                  R$ {planoAtivo.valorOriginal.toFixed(2).replace(".", ",")}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontWeight: 800 }}>
                <span style={{ fontSize: "1.05rem", color: "#0f2a43" }}>Parcelado no Cartão</span>
                <span style={{ fontSize: "1.5rem", color: "#0f2a43" }}>
                  {planoAtivo.parcelas}x de R$ {planoAtivo.valorParcela.toFixed(2).replace(".", ",")}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", color: "#166534", fontWeight: 700, marginTop: 4 }}>
                <span>À vista via PIX</span>
                <span>R$ {planoAtivo.valorTotal.toFixed(2).replace(".", ",")}</span>
              </div>
              <div
                style={{
                  marginTop: 10,
                  padding: "6px 10px",
                  background: "#dcfce7",
                  color: "#166534",
                  borderRadius: 6,
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Tag size={14} />
                <span>
                  Você economiza R$ {economia.toFixed(2).replace(".", ",")} • Pagamento Único com Acesso Vitalício!
                </span>
              </div>
            </div>

            {/* ITENS INCLUSOS NO PLANO */}
            <div>
              <h4 style={{ margin: "0 0 10px", fontSize: "0.95rem", color: "#0f2a43" }}>
                Itens e Documentos Inclusos:
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
                {planoAtivo.itens.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      fontSize: "0.88rem",
                      color: "#334155",
                      lineHeight: 1.4,
                    }}
                  >
                    {planoSelecionado === "fisico" && idx >= 1 && idx <= 5 ? (
                      <Crown size={15} color="#d97706" style={{ flexShrink: 0, marginTop: 2 }} />
                    ) : (
                      <CheckCircle size={15} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }} />
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SE FOR PLANO FÍSICO: FORMULÁRIO DE ENDEREÇO DE ENTREGA */}
            {planoSelecionado === "fisico" && (
              <div className="pagamento-endereco-box">
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <MapPin size={18} color="#0f2a43" />
                  <strong style={{ fontSize: "0.96rem", color: "#0f2a43" }}>
                    Endereço de Envio do Kit Físico (Frete Grátis)
                  </strong>
                </div>
                <p style={{ margin: "0 0 12px", fontSize: "0.82rem", color: "#64748b" }}>
                  Informe o local onde deseja receber a sua Credencial em PVC e o Diploma com Selo Dourado.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 10, marginBottom: 10 }}>
                  <div className="form-grupo-campo" style={{ margin: 0 }}>
                    <label style={{ fontSize: "0.8rem" }}>CEP *</label>
                    <input
                      placeholder="00000-000"
                      value={endereco.cep}
                      onChange={(e) => handleCepChange(e.target.value)}
                      maxLength={9}
                      style={{ padding: "8px 10px", fontSize: "0.9rem" }}
                    />
                    {buscandoCep && <small style={{ color: "#2563eb", fontSize: "0.75rem" }}>Buscando...</small>}
                  </div>
                  <div className="form-grupo-campo" style={{ margin: 0 }}>
                    <label style={{ fontSize: "0.8rem" }}>Rua / Avenida *</label>
                    <input
                      placeholder="Nome do logradouro"
                      value={endereco.logradouro}
                      onChange={(e) => setEndereco({ ...endereco, logradouro: e.target.value })}
                      style={{ padding: "8px 10px", fontSize: "0.9rem" }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 10 }}>
                  <div className="form-grupo-campo" style={{ margin: 0 }}>
                    <label style={{ fontSize: "0.8rem" }}>Número *</label>
                    <input
                      placeholder="123"
                      value={endereco.numero}
                      onChange={(e) => setEndereco({ ...endereco, numero: e.target.value })}
                      style={{ padding: "8px 10px", fontSize: "0.9rem" }}
                    />
                  </div>
                  <div className="form-grupo-campo" style={{ margin: 0 }}>
                    <label style={{ fontSize: "0.8rem" }}>Complemento</label>
                    <input
                      placeholder="Apto, Bloco..."
                      value={endereco.complemento}
                      onChange={(e) => setEndereco({ ...endereco, complemento: e.target.value })}
                      style={{ padding: "8px 10px", fontSize: "0.9rem" }}
                    />
                  </div>
                  <div className="form-grupo-campo" style={{ margin: 0 }}>
                    <label style={{ fontSize: "0.8rem" }}>Bairro *</label>
                    <input
                      placeholder="Bairro"
                      value={endereco.bairro}
                      onChange={(e) => setEndereco({ ...endereco, bairro: e.target.value })}
                      style={{ padding: "8px 10px", fontSize: "0.9rem" }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: 10 }}>
                  <div className="form-grupo-campo" style={{ margin: 0 }}>
                    <label style={{ fontSize: "0.8rem" }}>Cidade *</label>
                    <input
                      placeholder="Cidade"
                      value={endereco.cidade}
                      onChange={(e) => setEndereco({ ...endereco, cidade: e.target.value })}
                      style={{ padding: "8px 10px", fontSize: "0.9rem" }}
                    />
                  </div>
                  <div className="form-grupo-campo" style={{ margin: 0 }}>
                    <label style={{ fontSize: "0.8rem" }}>UF *</label>
                    <input
                      placeholder="UF"
                      value={endereco.uf}
                      onChange={(e) => setEndereco({ ...endereco, uf: e.target.value.toUpperCase() })}
                      maxLength={2}
                      style={{ padding: "8px 10px", fontSize: "0.9rem" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="alerta-sucesso" style={{ fontSize: "0.86rem", margin: 0 }}>
              <ShieldCheck size={16} className="icone-inline" />{" "}
              <strong>Garantia de 7 Dias:</strong> se você não ficar 100% satisfeito com o material didático, devolvemos integralmente o valor investido.
            </div>
          </div>

          {/* COLUNA DIREITA: CHECKOUT E PAGAMENTO */}
          <div className="card" style={{ padding: 20, alignSelf: "start" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <Lock size={18} color="#0f2a43" />
              <strong style={{ fontSize: "1rem" }}>Checkout Seguro</strong>
              <span className="badge-status status-concluído" style={{ marginLeft: "auto" }}>
                Oficial
              </span>
            </div>

            <div
              style={{
                fontSize: "0.9rem",
                color: "#334155",
                background: "#f8fafc",
                padding: 12,
                borderRadius: 8,
                marginBottom: 14,
                border: "1px solid #e2e8f0",
              }}
            >
              <div>
                Aluno: <strong>{nomeAluno}</strong>
              </div>
              <div>E-mail: {emailAluno}</div>
              {dados.telefone && <div>Telefone: {dados.telefone}</div>}
              <div style={{ marginTop: 6, paddingTop: 6, borderTop: "1px solid #e2e8f0", color: "#0f2a43" }}>
                Plano: <strong>{planoAtivo.nome}</strong>
              </div>
              <div style={{ color: "#166534", fontWeight: 700 }}>
                Total: R$ {planoAtivo.valorTotal.toFixed(2).replace(".", ",")} à vista ou 12x de R${" "}
                {planoAtivo.valorParcela.toFixed(2).replace(".", ",")}
              </div>
            </div>

            {mensagem && (
              <p className="alerta" role="status" style={{ fontSize: "0.84rem", marginBottom: 12 }}>
                {mensagem}
              </p>
            )}

            {/* BOTÃO ASAAS */}
            <button
              type="button"
              disabled={processando || !planoAtivo.checkoutUrl}
              onClick={abrirCheckout}
              className="btn btn-primario"
              style={{
                width: "100%",
                padding: 14,
                fontSize: "1.05rem",
                fontWeight: 800,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 4px 12px rgba(244, 180, 0, 0.35)",
              }}
            >
              <ExternalLink size={18} />
              <span>Ir para o Checkout Seguro (Asaas)</span>
            </button>
            <small style={{ display: "block", textAlign: "center", color: "#64748b", margin: "6px 0 14px", fontSize: "0.78rem" }}>
              Cartão de Crédito em até 12x, PIX imediato ou Boleto Bancário.
            </small>

            {/* OPÇÃO PIX DIRETO / COPIA E COLA */}
            <div
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: 10,
                padding: 12,
                marginBottom: 12,
                background: "#fafafa",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <QrCode size={16} color="#166534" />
                <strong style={{ fontSize: "0.88rem", color: "#0f2a43" }}>Pagar com PIX Direto</strong>
              </div>
              <p style={{ margin: "0 0 8px", fontSize: "0.8rem", color: "#64748b" }}>
                Chave PIX Oficial (E-mail): <strong>{CHAVE_PIX_PADRAO}</strong>
              </p>
              <button
                type="button"
                onClick={copiarChavePix}
                className="btn btn-contorno"
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  fontSize: "0.86rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {pixCopiado ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
                <span>{pixCopiado ? "Chave PIX Copiada!" : "Copiar Chave PIX"}</span>
              </button>
            </div>

            <button
              type="button"
              disabled={processando}
              onClick={verificarPagamento}
              className="btn btn-contorno"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              <RefreshCw size={14} className={processando ? "anim-girar" : ""} />
              <span>{processando ? "Consultando..." : "Já realizei o pagamento — verificar status"}</span>
            </button>

            {/* Atalho de teste para Superadmin / Demonstração */}
            {(usuario?.role === "superadmin" || !import.meta.env.PROD) && (
              <button
                type="button"
                onClick={liberarAcessoTeste}
                disabled={processando}
                className="btn btn-contorno"
                style={{
                  width: "100%",
                  marginTop: 8,
                  fontSize: "0.8rem",
                  borderColor: "#cbd5e1",
                  color: "#64748b",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 6,
                }}
                title="Atalho de demonstração / testes para validação imediata"
              >
                <Sparkles size={13} color="#f4b400" />
                <span>Simular Aprovação Imediata (Ambiente de Testes)</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => navigate("/matricula")}
              className="btn btn-contorno"
              style={{
                width: "100%",
                marginTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              <ArrowLeft size={14} /> <span>Voltar para Matrícula</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
