import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ClipboardList, User, Phone, Mail, Calendar, CheckCircle, ArrowRight, Crown, Sparkles } from "lucide-react";

export default function Matricula() {
  const { usuario, setMatricula, pagamentoConfirmado } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const planoUrl = searchParams.get("plano") === "digital" ? "digital" : "fisico";
  const [plano, setPlano] = useState<"digital" | "fisico">(planoUrl);

  const [form, setForm] = useState({
    nomeCompleto: usuario?.nome || "",
    telefone: "",
    email: usuario?.email || "",
    dataNascimento: "",
  });
  const [erro, setErro] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validar = () => {
    if (!form.nomeCompleto.trim() || form.nomeCompleto.trim().split(/\s+/).length < 2) return "Informe o nome completo.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "E-mail inválido.";
    if (!form.telefone.replace(/\D/g, "").match(/^\d{10,11}$/)) return "Telefone deve ter 10 ou 11 dígitos.";
    if (!form.dataNascimento) return "Informe a data de nascimento.";
    const nasc = new Date(form.dataNascimento);
    if (isNaN(nasc.getTime()) || nasc >= new Date()) return "Data de nascimento inválida.";
    return "";
  };

  if (usuario && pagamentoConfirmado) {
    return (
      <div className="matricula-pagina">
        <div className="card card-player-destaque" style={{ textAlign: "center", padding: 32 }}>
          <h2 style={{ marginBottom: 12 }}>Sua matrícula já está ativa</h2>
          <p className="pagina-sub" style={{ marginBottom: 20 }}>
            Você já concluiu o processo de matrícula e acesso ao conteúdo da Teologia Acessível.
          </p>
          <button className="btn btn-primario" onClick={() => navigate("/")}>Ir para o painel</button>
        </div>
      </div>
    );
  }

  const confirmar = (e) => {
    e.preventDefault();
    const msg = validar();
    if (msg) { setErro(msg); return; }
    setErro("");
    const matriculaNumero = `TA-${new Date().getFullYear()}-${Math.floor(10000 + Math.random()*90000)}`;
    const dados = { ...form, matricula: matriculaNumero, plano, criadoEm: new Date().toISOString(), pagamento: "pendente" };
    setMatricula(dados);
    navigate("/pagamento", { state: dados });
  };

  return (
    <div className="matricula-pagina">
      <div className="pagina-titulo-area">
        <div className="badge-topo-sebitan"><ClipboardList size={14} /> Teologia Acessível • Matrícula Oficial</div>
        <h1><ClipboardList size={26} className="icone-titulo" /> Matrícula do Aluno</h1>
        <p className="pagina-sub">Preencha seus dados para gerar o <strong>Certificado</strong> e o <strong>Histórico Escolar Oficial</strong>. Após confirmar, você será levado ao pagamento.</p>
      </div>

      <form className="card card-player-destaque" onSubmit={confirmar}>
        {erro && <div className="alerta" role="alert">{erro}</div>}

        {/* Seletor do Plano na Matrícula */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", marginBottom: 8, fontWeight: 700, fontSize: "0.95rem", color: "#0f2a43" }}>
            Selecione o seu Plano de Formação:
          </label>
          <div className="pagamento-planos-seletor">
            <div
              className={`pagamento-plano-opcao ${plano === "digital" ? "ativo" : ""}`}
              onClick={() => setPlano("digital")}
              role="button"
              tabIndex={0}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <strong style={{ fontSize: "0.98rem", color: "#0f2a43" }}>Plano Digital Completo</strong>
                <span className="badge-status status-concluído">♾️ Acesso Vitalício</span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: 6 }}>
                Acesso Vitalício às 30 Disciplinas + Certificado & Credencial Digital imediata
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: "0.82rem", textDecoration: "line-through", color: "#94a3b8" }}>De R$ 497</span>
                <strong style={{ fontSize: "1.25rem", color: "#0f2a43" }}>12x R$ 14,99</strong>
                <small style={{ color: "#64748b", fontSize: "0.82rem" }}>(ou R$ 179,88 à vista)</small>
              </div>
            </div>

            <div
              className={`pagamento-plano-opcao ${plano === "fisico" ? "ativo" : ""}`}
              onClick={() => setPlano("fisico")}
              role="button"
              tabIndex={0}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <strong style={{ fontSize: "0.98rem", color: "#0f2a43", display: "flex", alignItems: "center", gap: 4 }}>
                  <Crown size={15} color="#d97706" /> Formação + Kit Físico
                </strong>
                <span className="badge-status" style={{ background: "#fef3c7", color: "#92400e", fontWeight: 700 }}>
                  👑 Vitalício + Físico
                </span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: 6 }}>
                Acesso Vitalício + Credencial PVC + Diploma Papel Especial (Frete Grátis)
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: "0.82rem", textDecoration: "line-through", color: "#94a3b8" }}>De R$ 890</span>
                <strong style={{ fontSize: "1.25rem", color: "#0f2a43" }}>12x R$ 29,70</strong>
                <small style={{ color: "#64748b", fontSize: "0.82rem" }}>(ou R$ 297,00 à vista)</small>
              </div>
            </div>
          </div>
        </div>
        <div className="form-linha-dupla">
          <div className="form-grupo-campo">
            <label htmlFor="nomeCompleto"><User size={14} className="icone-inline" /> Nome completo *</label>
            <input id="nomeCompleto" name="nomeCompleto" value={form.nomeCompleto} onChange={onChange} placeholder="Ex: João da Silva" required />
          </div>
          <div className="form-grupo-campo">
            <label htmlFor="telefone"><Phone size={14} className="icone-inline" /> Telefone / WhatsApp *</label>
            <input id="telefone" name="telefone" value={form.telefone} onChange={onChange} placeholder="(91) 99383-7093" required inputMode="numeric" />
          </div>
        </div>
        <div className="form-linha-dupla">
          <div className="form-grupo-campo">
            <label htmlFor="email"><Mail size={14} className="icone-inline" /> E-mail *</label>
            <input id="email" type="email" name="email" value={form.email} onChange={onChange} placeholder="voce@email.com" required />
          </div>
          <div className="form-grupo-campo">
            <label htmlFor="dataNascimento"><Calendar size={14} className="icone-inline" /> Data de nascimento *</label>
            <input id="dataNascimento" type="date" name="dataNascimento" value={form.dataNascimento} onChange={onChange} required />
          </div>
        </div>
        <div className="alerta-sucesso" style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <CheckCircle size={18} /> Dados serão usados no <strong>Certificado</strong> e no <strong>Histórico</strong>.
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
          <button type="submit" className="btn btn-primario btn-com-icone" style={{ padding: "12px 22px", fontSize: "1rem" }}>
            <span>Confirmar matrícula</span> <ArrowRight size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}
