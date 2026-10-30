import { useEffect, useMemo, useState } from "react";
import { pdfs } from "../data/content";
import { revisoesNotebookLM } from "../data/revisoesNotebookLM";
import { useAuth } from "../context/AuthContext";
import { obterRevisoesNotebookLM, salvarRevisaoNotebookLM } from "../services/supabaseClient";
import {
  RefreshCcw,
  ExternalLink,
  Search,
  Sparkles,
  Clock,
  Pencil,
  Save,
  X,
  Loader2,
} from "lucide-react";

export default function Revisao() {
  const { usuario } = useAuth();
  const podeEditar = usuario?.role === "superadmin" || usuario?.role === "professor";

  const [pesquisa, setPesquisa] = useState("");
  const [links, setLinks] = useState<Record<string, string>>(revisoesNotebookLM);
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [rascunho, setRascunho] = useState("");
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    obterRevisoesNotebookLM()
      .then((doBanco) => setLinks((atual) => ({ ...atual, ...doBanco })))
      .catch((e) => console.warn("Não foi possível carregar revisões do Supabase:", e));
  }, []);

  const modulos = useMemo(() => {
    const termo = pesquisa.toLowerCase();
    const filtradas = pdfs.filter(
      (d) => d.titulo.toLowerCase().includes(termo) || d.modulo.toLowerCase().includes(termo)
    );
    const grupos: Record<string, typeof pdfs> = {};
    filtradas.forEach((d) => {
      (grupos[d.modulo] ||= []).push(d);
    });
    return Object.entries(grupos);
  }, [pesquisa]);

  const totalDisponiveis = pdfs.filter((d) => links[d.disciplinaId]).length;

  const iniciarEdicao = (disciplinaId: string) => {
    setEditandoId(disciplinaId);
    setRascunho(links[disciplinaId] || "");
    setErro("");
  };

  const salvar = async (disciplinaId: string) => {
    const link = rascunho.trim();
    if (link && !link.startsWith("https://")) {
      setErro("O link precisa começar com https://");
      return;
    }
    setSalvando(true);
    setErro("");
    try {
      await salvarRevisaoNotebookLM(disciplinaId, link);
      setLinks((atual) => ({ ...atual, [disciplinaId]: link }));
      setEditandoId(null);
    } catch (e) {
      const msg =
        e && typeof e === "object" && "message" in e ? String((e as { message: unknown }).message) : "";
      setErro(msg ? `Erro ao salvar: ${msg}` : "Erro ao salvar o link.");
    } finally {
      setSalvando(false);
    }
  };

  return (
    <div className="revisao-pagina">
      <div className="pagina-titulo-area">
        <div className="badge-topo-sebitan">
          <Sparkles size={14} /> Teologia Acessível • Revisão com NotebookLM
        </div>
        <h1>
          <RefreshCcw size={28} className="icone-titulo" /> Revisão das Disciplinas
        </h1>
        <p className="pagina-sub">
          Revise cada disciplina com o NotebookLM: resumos, perguntas e áudio de revisão.
          {" "}{totalDisponiveis} de {pdfs.length} revisões disponíveis.
        </p>
        {podeEditar && (
          <p className="pagina-sub" style={{ color: "#b45309" }}>
            Modo admin: clique em <strong>"Colar link"</strong> em cada disciplina para adicionar o link do NotebookLM.
          </p>
        )}
      </div>

      <div className="pesquisa-disciplinas-box" style={{ margin: "16px 0 24px", maxWidth: 420 }}>
        <Search size={16} className="icone-pesquisa" />
        <input
          type="text"
          placeholder="Buscar por título ou módulo..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          className="input-pesquisa-disciplinas"
        />
      </div>

      {modulos.map(([modulo, disciplinas]) => (
        <section key={modulo} style={{ marginBottom: 28 }}>
          <h3 style={{ marginBottom: 12 }}>{modulo}</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            {disciplinas.map((d) => {
              const link = links[d.disciplinaId];
              const editando = editandoId === d.disciplinaId;
              return (
                <div
                  key={d.id}
                  className="card"
                  style={{ display: "flex", flexDirection: "column", gap: 10, padding: 18 }}
                >
                  <span className="tag-modulo-disciplina" style={{ alignSelf: "flex-start" }}>
                    {d.codigo}
                  </span>
                  <h4 style={{ margin: 0 }}>{d.titulo}</h4>

                  {editando ? (
                    <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
                      <input
                        type="url"
                        autoFocus
                        placeholder="https://notebooklm.google.com/notebook/..."
                        value={rascunho}
                        onChange={(e) => setRascunho(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") salvar(d.disciplinaId);
                          if (e.key === "Escape") setEditandoId(null);
                        }}
                        style={{
                          width: "100%",
                          padding: "8px 10px",
                          borderRadius: 8,
                          border: "1px solid #cbd5e1",
                          fontSize: "0.85rem",
                        }}
                      />
                      {erro && <span style={{ color: "#dc2626", fontSize: "0.8rem" }}>{erro}</span>}
                      <div style={{ display: "flex", gap: 8 }}>
                        <button
                          className="btn btn-primario btn-sm btn-com-icone"
                          disabled={salvando}
                          onClick={() => salvar(d.disciplinaId)}
                        >
                          {salvando ? <Loader2 size={14} className="spin" /> : <Save size={14} />}
                          <span>Salvar</span>
                        </button>
                        <button
                          className="btn btn-contorno btn-sm btn-com-icone"
                          disabled={salvando}
                          onClick={() => setEditandoId(null)}
                        >
                          <X size={14} />
                          <span>Cancelar</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ marginTop: "auto", display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {link ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primario btn-sm btn-com-icone"
                        >
                          <ExternalLink size={14} />
                          <span>Abrir revisão no NotebookLM</span>
                        </a>
                      ) : (
                        !podeEditar && (
                          <span
                            className="btn btn-contorno btn-sm btn-com-icone"
                            style={{ opacity: 0.6, cursor: "default" }}
                          >
                            <Clock size={14} />
                            <span>Em breve</span>
                          </span>
                        )
                      )}
                      {podeEditar && (
                        <button
                          className="btn btn-contorno btn-sm btn-com-icone"
                          onClick={() => iniciarEdicao(d.disciplinaId)}
                        >
                          <Pencil size={14} />
                          <span>{link ? "Editar link" : "Colar link"}</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {modulos.length === 0 && (
        <p className="vazio">Nenhuma disciplina encontrada para "{pesquisa}".</p>
      )}
    </div>
  );
}
