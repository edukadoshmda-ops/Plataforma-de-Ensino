import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import {
  obterAnotacaoLocal,
  salvarAnotacaoDisciplina,
  listarTodasAnotacoesLocais,
} from "../services/supabaseClient";
import {
  NotebookPen,
  Save,
  Download,
  Tag,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FileDown,
} from "lucide-react";

const TAGS_ESTUDO = [
  "Ideia de Sermão",
  "Versículo-Chave",
  "Exegese & Contexto",
  "Revisar para Prova",
  "Aplicação Pastoral",
];

interface CadernoAnotacoesProps {
  disciplinaId: string;
  disciplinaTitulo: string;
  codigoDisciplina?: string;
}

export default function CadernoAnotacoes({
  disciplinaId,
  disciplinaTitulo,
  codigoDisciplina,
}: CadernoAnotacoesProps) {
  const { usuario } = useAuth();
  const [aberto, setAberto] = useState(false);
  const [texto, setTexto] = useState("");
  const [tagsSelecionadas, setTagsSelecionadas] = useState<string[]>([]);
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState("");
  const [salvoMsg, setSalvoMsg] = useState("");

  useEffect(() => {
    if (!disciplinaId) return;
    const existente = obterAnotacaoLocal(disciplinaId);
    if (existente) {
      setTexto(existente.texto || "");
      setTagsSelecionadas(existente.tags || []);
      setUltimaAtualizacao(existente.atualizadoEm || "");
    } else {
      setTexto("");
      setTagsSelecionadas([]);
      setUltimaAtualizacao("");
    }
  }, [disciplinaId]);

  const alternarTag = (tag: string) => {
    setTagsSelecionadas((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSalvar = async () => {
    const salvo = await salvarAnotacaoDisciplina(
      usuario?.id,
      disciplinaId,
      disciplinaTitulo,
      texto,
      tagsSelecionadas
    );
    setUltimaAtualizacao(salvo.atualizadoEm);
    setSalvoMsg("Anotações salvas no seu caderno!");
    setTimeout(() => setSalvoMsg(""), 3000);
  };

  const handleBaixarDisciplina = () => {
    const cabecalho = [
      "==============================================================",
      "TEOLOGIA ACESSÍVEL • CADERNO DE FICHAMENTO ACADÊMICO",
      `Aluno(a): ${usuario?.nome || "Estudante"}`,
      `Disciplina: ${codigoDisciplina ? `${codigoDisciplina} - ` : ""}${disciplinaTitulo}`,
      `Etiquetas: ${tagsSelecionadas.join(", ") || "Geral"}`,
      `Atualizado em: ${ultimaAtualizacao || new Date().toLocaleString("pt-BR")}`,
      "==============================================================",
      "",
      texto || "(Sem anotações registradas nesta disciplina.)",
    ].join("\n");

    const blob = new Blob([cabecalho], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `fichamento-${disciplinaId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleBaixarCadernoCompleto = () => {
    const todas = listarTodasAnotacoesLocais();
    const entradas = Object.values(todas).filter((item) => item.texto?.trim());
    if (entradas.length === 0 && !texto.trim()) {
      window.alert("Você ainda não possui anotações salvas no caderno.");
      return;
    }

    const blocos = entradas.map((e) =>
      [
        `--------------------------------------------------------------`,
        `DISCIPLINA: ${e.disciplinaTitulo}`,
        `TAGS: ${(e.tags || []).join(", ") || "-"}`,
        `DATA: ${e.atualizadoEm}`,
        `--------------------------------------------------------------`,
        e.texto,
        "",
      ].join("\n")
    );

    const doc = [
      "==============================================================",
      "CADERNO COMPLETO DE ESTUDOS • TEOLOGIA ACESSÍVEL",
      `Aluno(a): ${usuario?.nome || "Estudante"} (${usuario?.email || ""})`,
      `Exportado em: ${new Date().toLocaleString("pt-BR")}`,
      "==============================================================",
      "",
      ...blocos,
    ].join("\n");

    const blob = new Blob([doc], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `caderno-completo-teologia-acessivel.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="card no-print"
      style={{
        marginTop: 16,
        marginBottom: 20,
        border: "1px solid #d7b34a",
        background: "linear-gradient(180deg, #fffdf7 0%, #ffffff 100%)",
      }}
    >
      <div
        onClick={() => setAberto((v) => !v)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setAberto((v) => !v)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: "#fef3c7",
              color: "#92400e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #fde68a",
            }}
          >
            <NotebookPen size={20} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: "1.02rem", color: "#0f2a43" }}>
              📝 Meu Caderno de Anotações & Fichamento — {disciplinaTitulo}
            </h3>
            <span style={{ fontSize: "0.82rem", color: "#64748b" }}>
              {texto.trim()
                ? `Anotação salva (${texto.trim().split(/\s+/).length} palavras)${ultimaAtualizacao ? ` • Última edição: ${ultimaAtualizacao}` : ""}`
                : "Clique para registrar insights, versículos, esboços de sermão e resumos desta aula"}
            </span>
          </div>
        </div>

        <button type="button" className="btn btn-contorno btn-com-icone" style={{ padding: "6px 12px", fontSize: "0.85rem" }}>
          <span>{aberto ? "Recolher Caderno" : "Abrir Caderno"}</span>
          {aberto ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {aberto && (
        <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #f1e4bc" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569", display: "inline-flex", alignItems: "center", gap: 4 }}>
              <Tag size={13} /> Marcadores:
            </span>
            {TAGS_ESTUDO.map((tag) => {
              const ativa = tagsSelecionadas.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => alternarTag(tag)}
                  style={{
                    padding: "4px 10px",
                    borderRadius: 999,
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: ativa ? "1px solid #1e40af" : "1px solid #cbd5e1",
                    background: ativa ? "#dbeafe" : "#f8fafc",
                    color: ativa ? "#1e3a8a" : "#475569",
                  }}
                >
                  {ativa ? "✓ " : "+ "}
                  {tag}
                </button>
              );
            })}
          </div>

          <textarea
            rows={5}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder={`Escreva aqui seu fichamento, versículos-chave e anotações de estudo sobre ${disciplinaTitulo}...`}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 10,
              border: "1px solid #cbd5e1",
              fontSize: "0.95rem",
              fontFamily: "inherit",
              lineHeight: 1.6,
              resize: "vertical",
              background: "#ffffff",
            }}
          />

          {salvoMsg && (
            <div
              style={{
                marginTop: 10,
                padding: "8px 12px",
                borderRadius: 8,
                background: "#dcfce7",
                color: "#166534",
                fontSize: "0.86rem",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <CheckCircle2 size={16} /> {salvoMsg}
            </div>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 10,
              marginTop: 12,
            }}
          >
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button
                type="button"
                className="btn btn-contorno btn-com-icone"
                style={{ fontSize: "0.84rem", padding: "7px 12px" }}
                onClick={handleBaixarDisciplina}
              >
                <Download size={15} />
                <span>Baixar Fichamento (.TXT)</span>
              </button>
              <button
                type="button"
                className="btn btn-contorno btn-com-icone"
                style={{ fontSize: "0.84rem", padding: "7px 12px" }}
                onClick={handleBaixarCadernoCompleto}
              >
                <FileDown size={15} />
                <span>Exportar Caderno Completo</span>
              </button>
            </div>

            <button
              type="button"
              className="btn btn-primario btn-com-icone"
              style={{ padding: "8px 18px" }}
              onClick={handleSalvar}
            >
              <Save size={16} />
              <span>Salvar no Caderno</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
