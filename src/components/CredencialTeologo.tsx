import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Printer, ExternalLink, Award, CheckCircle2, Camera, User, Trash2 } from "lucide-react";
import { imprimirDocumento } from "../services/impressaoService";

interface CredencialTeologoProps {
  nome: string;
  email: string;
  matricula: string;
  telefone?: string;
  dataNascimento?: string;
  mediaGeral: number;
  role?: string;
  fotoUrl?: string;
}

export default function CredencialTeologo({
  nome,
  email,
  matricula,
  telefone,
  dataNascimento,
  mediaGeral,
  role,
  fotoUrl,
}: CredencialTeologoProps) {
  const cargoLabel =
    role === "superadmin"
      ? "Reitor / Chanceler & Teólogo"
      : role === "professor"
      ? "Docente & Bacharel Livre em Teologia"
      : "Teólogo & Obreiro Credenciado";

  const anoAtual = new Date().getFullYear();
  const inputFotoRef = useRef<HTMLInputElement | null>(null);
  const storageKey = `ta_foto_credencial_${matricula || "default"}`;

  const [foto, setFoto] = useState<string>(() => {
    if (fotoUrl) return fotoUrl;
    try {
      return localStorage.getItem(storageKey) || "";
    } catch {
      return "";
    }
  });

  useEffect(() => {
    if (fotoUrl) {
      setFoto(fotoUrl);
    } else {
      try {
        const salva = localStorage.getItem(storageKey);
        if (salva) setFoto(salva);
      } catch {}
    }
  }, [fotoUrl, storageKey]);

  const handleUploadFoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 300;
        canvas.height = 400; // Proporção oficial 3x4
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const imgAspect = img.width / img.height;
          const targetAspect = 300 / 400; // 0.75
          let sWidth = img.width;
          let sHeight = img.height;
          let sx = 0;
          let sy = 0;

          if (imgAspect > targetAspect) {
            sWidth = img.height * targetAspect;
            sx = (img.width - sWidth) / 2;
          } else {
            sHeight = img.width / targetAspect;
            sy = (img.height - sHeight) / 2;
          }

          ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, 300, 400);
          const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
          setFoto(dataUrl);
          try {
            localStorage.setItem(storageKey, dataUrl);
          } catch (err) {
            console.error("Erro ao salvar foto no localStorage", err);
          }
        }
      };
      if (typeof event.target?.result === "string") {
        img.src = event.target.result;
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemoverFoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFoto("");
    try {
      localStorage.removeItem(storageKey);
    } catch {}
    if (inputFotoRef.current) {
      inputFotoRef.current.value = "";
    }
  };

  return (
    <div style={{ marginTop: 32 }}>
      <div
        className="no-print"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 16,
        }}
      >
        <div>
          <h3 style={{ margin: 0, color: "#0f2a43", display: "flex", alignItems: "center", gap: 8 }}>
            <Award size={22} color="#b4860b" /> Carteirinha Estudantil & Credencial Oficial de Teólogo
          </h3>
          <p style={{ margin: "4px 0 0", fontSize: "0.9rem", color: "#64748b" }}>
            Documento de identificação ministerial e acadêmica (Frente e Verso) pronto para impressão com foto 3x4.
          </p>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <button
            type="button"
            className="btn btn-contorno btn-com-icone"
            onClick={() => inputFotoRef.current?.click()}
            title="Adicionar ou alterar a foto 3x4 do aluno"
          >
            <Camera size={16} />
            <span>{foto ? "Trocar Foto 3x4" : "Adicionar Foto 3x4"}</span>
          </button>

          {foto && (
            <button
              type="button"
              className="btn btn-contorno btn-sm"
              style={{ color: "#ef4444", borderColor: "rgba(239, 68, 68, 0.4)" }}
              onClick={handleRemoverFoto}
              title="Remover foto do aluno"
            >
              <Trash2 size={14} />
              <span>Remover Foto</span>
            </button>
          )}

          <Link
            to={`/verificar?codigo=${encodeURIComponent(matricula)}`}
            className="btn btn-contorno btn-com-icone"
          >
            <ExternalLink size={16} />
            <span>Validar Autenticidade</span>
          </Link>
          <button
            type="button"
            className="btn btn-primario btn-com-icone"
            onClick={() => imprimirDocumento("credencial")}
          >
            <Printer size={16} />
            <span>Imprimir Credencial</span>
          </button>
        </div>
      </div>

      {/* CARTÕES FRENTE E VERSO */}
      <div
        className="credencial-print-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
          gap: 20,
          WebkitPrintColorAdjust: "exact",
          printColorAdjust: "exact",
        }}
      >
        {/* FRENTE DA CREDENCIAL */}
        <div
          className="credencial-card-frente"
          style={{
            background: "linear-gradient(135deg, #0f2a43 0%, #1e3a8a 100%)",
            backgroundColor: "#0f2a43",
            color: "#ffffff",
            borderRadius: 16,
            padding: 20,
            border: "2px solid #f4b400",
            boxShadow: "0 12px 28px rgba(15, 42, 67, 0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 240,
            position: "relative",
            overflow: "hidden",
            WebkitPrintColorAdjust: "exact",
            printColorAdjust: "exact",
          }}
        >
          {/* TOPO: LOGO | TÍTULO | FRENTE */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: "1px solid rgba(244,180,0,0.4)",
              paddingBottom: 10,
              minHeight: 44,
            }}
          >
            <img
              src="/logo-teologia.png"
              alt="Teologia Acessível"
              style={{
                position: "absolute",
                left: 0,
                width: 42,
                height: 42,
                objectFit: "contain",
                borderRadius: 8,
                background: "#ffffff",
                padding: 3,
                WebkitPrintColorAdjust: "exact",
                printColorAdjust: "exact",
              }}
            />
            <div style={{ textAlign: "center", padding: "0 46px" }}>
              <div style={{ fontSize: "0.68rem", letterSpacing: "0.06em", color: "#f4b400", fontWeight: 800, textAlign: "center" }}>
                REPÚBLICA FEDERATIVA DO BRASIL • ENSINO LIVRE
              </div>
              <div style={{ fontSize: "0.96rem", fontWeight: 800, color: "#ffffff", textAlign: "center" }}>
                TEOLOGIA ACESSÍVEL
              </div>
            </div>
            <span
              style={{
                position: "absolute",
                right: 0,
                background: "#f4b400",
                color: "#0f2a43",
                fontSize: "0.68rem",
                fontWeight: 900,
                padding: "3px 8px",
                borderRadius: 6,
                textTransform: "uppercase",
                WebkitPrintColorAdjust: "exact",
                printColorAdjust: "exact",
              }}
            >
              FRENTE
            </span>
          </div>

          {/* MEIO: LOCAL PARA FOTO 3X4 E DADOS DO ALUNO */}
          <div
            className="credencial-corpo-central"
            style={{
              margin: "12px 0",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            {/* SLOT PARA FOTO 3X4 DO ALUNO */}
            <div
              className="credencial-foto-box"
              style={{
                position: "relative",
                width: 76,
                height: 100,
                minWidth: 76,
                borderRadius: 8,
                border: "2px solid #f4b400",
                backgroundColor: "rgba(10, 25, 47, 0.85)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                cursor: "pointer",
                WebkitPrintColorAdjust: "exact",
                printColorAdjust: "exact",
              }}
              onClick={() => inputFotoRef.current?.click()}
              title="Clique para adicionar ou trocar a foto 3x4 do aluno"
            >
              {foto ? (
                <img
                  src={foto}
                  alt={`Foto 3x4 de ${nome}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    WebkitPrintColorAdjust: "exact",
                    printColorAdjust: "exact",
                  }}
                />
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 4,
                    textAlign: "center",
                  }}
                >
                  <User size={30} color="#cbd5e1" strokeWidth={1.5} />
                  <span
                    style={{
                      fontSize: "0.62rem",
                      fontWeight: 800,
                      color: "#f4b400",
                      marginTop: 4,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Foto 3x4
                  </span>
                </div>
              )}

              {/* Overlay interativo ao passar o mouse (oculto na impressão) */}
              <div
                className="credencial-foto-overlay no-print"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(15, 42, 67, 0.85)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.2s ease",
                  color: "#ffffff",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  textAlign: "center",
                  padding: 2,
                  gap: 3,
                }}
              >
                <Camera size={18} color="#f4b400" />
                <span>{foto ? "Trocar" : "Adicionar"}</span>
              </div>
            </div>

            {/* DADOS DO ALUNO */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "#cbd5e1",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 2,
                }}
              >
                Portador(a) Credenciado(a)
              </div>
              <div
                style={{
                  fontSize: "1.18rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: 4,
                  lineHeight: 1.25,
                  wordBreak: "break-word",
                }}
              >
                {nome}
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: "0.82rem",
                  color: "#fef08a",
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                <CheckCircle2 size={14} color="#fef08a" />
                <span>{cargoLabel}</span>
              </div>
              <div
                style={{
                  fontSize: "0.66rem",
                  color: "#94a3b8",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Bacharelado Livre em Teologia Bíblica
              </div>
            </div>

            {/* Input oculto para selecionar foto */}
            <input
              ref={inputFotoRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleUploadFoto}
            />
          </div>

          {/* RODAPÉ DO CARTÃO: MATRÍCULA | CARGA HORÁRIA | VALIDADE */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 8,
              paddingTop: 10,
              borderTop: "1px solid rgba(255,255,255,0.16)",
              fontSize: "0.78rem",
              textAlign: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#94a3b8", fontSize: "0.68rem" }}>MATRÍCULA</div>
              <strong style={{ color: "#f4b400" }}>{matricula}</strong>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#94a3b8", fontSize: "0.68rem" }}>CARGA HORÁRIA</div>
              <strong style={{ color: "#ffffff" }}>1.500 Horas</strong>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#94a3b8", fontSize: "0.68rem" }}>VALIDADE</div>
              <strong style={{ color: "#ffffff" }}>12/{anoAtual + 2}</strong>
            </div>
          </div>
        </div>

        {/* VERSO DA CREDENCIAL */}
        <div
          className="credencial-card-verso"
          style={{
            background: "#ffffff",
            color: "#0f2a43",
            borderRadius: 16,
            padding: 20,
            border: "2px solid #0f2a43",
            boxShadow: "0 12px 28px rgba(15, 42, 67, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 240,
            WebkitPrintColorAdjust: "exact",
            printColorAdjust: "exact",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid #e2e8f0",
              paddingBottom: 8,
              minHeight: 26,
            }}
          >
            <strong
              style={{
                fontSize: "0.82rem",
                color: "#0f2a43",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                textAlign: "center",
                padding: "0 46px",
              }}
            >
              <ShieldCheck size={16} color="#16a34a" /> REGISTRO ACADÊMICO & AMPARO LEGAL
            </strong>
            <span
              style={{
                position: "absolute",
                right: 0,
                background: "#e2e8f0",
                color: "#334155",
                fontSize: "0.68rem",
                fontWeight: 800,
                padding: "2px 8px",
                borderRadius: 6,
              }}
            >
              VERSO
            </span>
          </div>

          <div style={{ fontSize: "0.78rem", color: "#334155", lineHeight: 1.45, margin: "8px 0", textAlign: "center" }}>
            <p style={{ margin: "0 auto 6px", textAlign: "center" }}>
              Credencial emitida pelo <strong>Departamento de Educação Teológica — Teologia Acessível</strong>, amparada pela Lei Federal nº 9.394/96 (LDB - Cursos Livres) e Decreto nº 5.154/04.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                marginTop: 6,
                textAlign: "center",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px 16px" }}>
                <span>
                  <strong>E-mail:</strong> {email || "edukadoshmda@gmail.com"}
                </span>
                <span>
                  <strong>Média Acadêmica:</strong> {mediaGeral ? mediaGeral.toFixed(1) : "9.5"}
                </span>
              </div>
              {((telefone && telefone !== "-") || (dataNascimento && dataNascimento !== "-")) && (
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px 16px" }}>
                  {telefone && telefone !== "-" && (
                    <span>
                      <strong>Contato:</strong> {telefone}
                    </span>
                  )}
                  {dataNascimento && dataNascimento !== "-" && (
                    <span>
                      <strong>Nascimento:</strong> {dataNascimento}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 8,
              borderTop: "1px dashed #cbd5e1",
              fontSize: "0.74rem",
              color: "#475569",
            }}
          >
            <div>
              <div>Código Verificador Público:</div>
              <strong style={{ color: "#0f2a43", fontSize: "0.85rem" }}>{matricula}</strong>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 2 }}>
                <img
                  src="/assinatura-coordenador.png"
                  alt="Assinatura Direção"
                  style={{ maxHeight: 32, maxWidth: 85, objectFit: "contain", display: "block" }}
                />
              </div>
              <div style={{ fontWeight: 700, fontSize: "0.80rem", color: "#0f2a43", textAlign: "center" }}>
                Luiz Eduardo • Diretoria Geral
              </div>
              <div style={{ fontSize: "0.66rem", textAlign: "center" }}>Assinatura Digital Autenticada</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
