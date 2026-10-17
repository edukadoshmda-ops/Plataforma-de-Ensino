import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { consultarCertificadoPublico } from "../services/supabaseClient";
import {
  ShieldCheck,
  Search,
  Award,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Calendar,
  User,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

interface ResultadoCertificado {
  valido: boolean;
  nome: string;
  email: string;
  matricula: string;
  curso: string;
  cargaHoraria: string;
  mediaFinal: number;
  statusPagamento: string;
  dataEmissao: string;
  instituicao: string;
}

export default function VerificarCertificado() {
  const [searchParams] = useSearchParams();
  const codigoUrl = searchParams.get("codigo") || "";

  const [busca, setBusca] = useState(codigoUrl || "SEB-SUPERADMIN");
  const [resultado, setResultado] = useState<ResultadoCertificado | null>(null);
  const [buscou, setBuscou] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const executarConsulta = async (termo: string) => {
    if (!termo.trim()) return;
    setCarregando(true);
    setBuscou(true);
    try {
      const dados = await consultarCertificadoPublico(termo);
      setResultado(dados);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    if (codigoUrl) {
      executarConsulta(codigoUrl);
    } else {
      executarConsulta("SEB-SUPERADMIN");
    }
  }, [codigoUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executarConsulta(busca);
  };

  return (
    <div>
      <div className="pagina-titulo-area">
        <div className="badge-topo-sebitan">
          <Sparkles size={14} /> Teologia Acessível • Autenticidade Pública
        </div>
        <h1>
          <ShieldCheck size={28} className="icone-titulo" /> Validador Oficial de Diploma & Credencial
        </h1>
        <p className="pagina-sub">
          Consulte a autenticidade de certificados, diplomas e credenciais ministeriais emitidos pela Secretaria Geral da Teologia Acessível.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="card"
        style={{
          marginBottom: 24,
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          alignItems: "center",
          border: "1px solid #cbd5e1",
        }}
      >
        <div style={{ flex: "1 1 280px", position: "relative" }}>
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Digite o Código da Matrícula (ex: SEB-SUPERADMIN ou SEB-2026-10421), Nome ou E-mail..."
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid #cbd5e1",
              fontSize: "0.98rem",
            }}
          />
        </div>
        <button type="submit" className="btn btn-primario btn-com-icone" disabled={carregando} style={{ padding: "12px 22px" }}>
          <Search size={18} />
          <span>{carregando ? "Consultando..." : "Verificar Certificado"}</span>
        </button>
      </form>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20, alignItems: "center", fontSize: "0.84rem", color: "#64748b" }}>
        <span>Exemplos rápidos para testar:</span>
        {["SEB-SUPERADMIN", "SEB-2026-10421", "SEB-2026-20845"].map((cod) => (
          <button
            key={cod}
            type="button"
            onClick={() => {
              setBusca(cod);
              executarConsulta(cod);
            }}
            style={{
              padding: "4px 10px",
              borderRadius: 999,
              border: "1px solid #cbd5e1",
              background: "#fff",
              cursor: "pointer",
              fontWeight: 600,
              color: "#0f2a43",
            }}
          >
            {cod}
          </button>
        ))}
      </div>

      {buscou && resultado && (
        <div
          className="card"
          style={{
            border: resultado.valido ? "2px solid #16a34a" : "2px solid #f59e0b",
            background: resultado.valido ? "linear-gradient(180deg, #f0fdf4 0%, #ffffff 35%)" : "#fffbeb",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, paddingBottom: 16, borderBottom: "1px solid #e2e8f0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: resultado.valido ? "#dcfce7" : "#fef3c7",
                  color: resultado.valido ? "#15803d" : "#b45309",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {resultado.valido ? <CheckCircle2 size={28} /> : <AlertCircle size={28} />}
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: resultado.valido ? "#15803d" : "#b45309",
                  }}
                >
                  {resultado.valido
                    ? "DOCUMENTO OFICIAL AUTÊNTICO & ATIVO"
                    : "MATRÍCULA LOCALIZADA • AGUARDANDO LIBERAÇÃO FINANCEIRA"}
                </span>
                <h2 style={{ margin: "2px 0 0", color: "#0f2a43" }}>{resultado.nome}</h2>
              </div>
            </div>

            <div
              style={{
                padding: "8px 14px",
                borderRadius: 10,
                background: "#0f2a43",
                color: "#f4b400",
                fontWeight: 800,
                fontSize: "0.92rem",
              }}
            >
              Registro: {resultado.matricula}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              marginTop: 18,
            }}
          >
            <div style={{ padding: 14, borderRadius: 10, background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "0.78rem", color: "#64748b", display: "flex", alignItems: "center", gap: 5 }}>
                <BookOpen size={14} /> Curso de Formação
              </div>
              <strong style={{ color: "#0f2a43", fontSize: "0.96rem" }}>{resultado.curso}</strong>
            </div>

            <div style={{ padding: 14, borderRadius: 10, background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "0.78rem", color: "#64748b", display: "flex", alignItems: "center", gap: 5 }}>
                <Award size={14} /> Carga Horária & Rendimento
              </div>
              <strong style={{ color: "#0f2a43", fontSize: "0.96rem" }}>
                {resultado.cargaHoraria} • Média {Number(resultado.mediaFinal).toFixed(1)}
              </strong>
            </div>

            <div style={{ padding: 14, borderRadius: 10, background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "0.78rem", color: "#64748b", display: "flex", alignItems: "center", gap: 5 }}>
                <Calendar size={14} /> Data de Registro / Emissão
              </div>
              <strong style={{ color: "#0f2a43", fontSize: "0.96rem" }}>{resultado.dataEmissao}</strong>
            </div>

            <div style={{ padding: 14, borderRadius: 10, background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "0.78rem", color: "#64748b", display: "flex", alignItems: "center", gap: 5 }}>
                <User size={14} /> Instituição Certificadora
              </div>
              <strong style={{ color: "#0f2a43", fontSize: "0.92rem" }}>{resultado.instituicao}</strong>
            </div>
          </div>

          <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
            <small style={{ color: "#475569" }}>
              Verificação pública amparada pela Lei Federal nº 9.394/96 (Cursos Livres de Capacitação Teológica e Ministerial).
            </small>
            <Link to="/testes?tab=historico" className="btn btn-contorno btn-com-icone" style={{ fontSize: "0.85rem" }}>
              <ArrowLeft size={15} />
              <span>Ir para Histórico & Diploma</span>
            </Link>
          </div>
        </div>
      )}

      {buscou && !resultado && !carregando && (
        <div className="card" style={{ border: "1px solid #fca5a5", background: "#fef2f2", color: "#991b1b" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <AlertCircle size={22} />
            <div>
              <strong>Nenhum certificado localizado para “{busca}”.</strong>
              <p style={{ margin: "4px 0 0", fontSize: "0.9rem" }}>
                Verifique se o código da matrícula (ex: SEB-2026-XXXXX) ou o nome/e-mail do aluno foram digitados corretamente.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
