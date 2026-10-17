import { useState, useEffect } from "react";
import { artigos as artigosIniciais } from "../data/content";
import { useAuth } from "../context/AuthContext";
import { salvarArtigoNaNuvem, sincronizarArtigosSupabase } from "../services/supabaseClient";
import {
  ScrollText,
  ChevronDown,
  ChevronUp,
  Clock,
  BookOpen,
  PlusCircle,
  Send,
  User,
  Calendar,
  Tag,
  Trash2,
  Edit3,
  CheckCircle2,
  X,
} from "lucide-react";

export interface ArtigoItem {
  id: number | string;
  titulo: string;
  subtitulo?: string;
  categoria?: string;
  autor: string;
  data: string;
  tempoLeitura?: string;
  conteudo: string;
  autoral?: boolean;
}

const STORAGE_KEY_ARTIGOS = "ta_artigos_publicados_v1";

const CATEGORIAS_TEOLOGICAS = [
  "Teologia Sistemática",
  "Exegese & Hermenêutica",
  "Teologia Pastoral",
  "História da Igreja",
  "Apologética Cristã",
  "Panorama Bíblico",
  "Vida Devocional & Ministério",
];

export default function Artigos() {
  const { usuario } = useAuth();

  const [listaArtigos, setListaArtigos] = useState<ArtigoItem[]>(() => {
    try {
      const salvos = localStorage.getItem(STORAGE_KEY_ARTIGOS);
      if (salvos) {
        const parsed = JSON.parse(salvos);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item: ArtigoItem) => ({
            ...item,
            autor: item.autor ? item.autor.replace(/SEBITAN/gi, "Teologia Acessível") : "Corpo Docente Teologia Acessível",
          }));
        }
      }
    } catch (e) {
      console.error("Erro ao carregar artigos:", e);
    }
    return artigosIniciais.map((a) => ({
      ...a,
      categoria: "Teologia Sistemática",
      tempoLeitura: "8 min",
    }));
  });

  const [aberto, setAberto] = useState<number | string | null>(() =>
    listaArtigos.length > 0 ? listaArtigos[0].id : null
  );
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [editandoId, setEditandoId] = useState<number | string | null>(null);

  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [categoria, setCategoria] = useState(CATEGORIAS_TEOLOGICAS[0]);
  const [autor, setAutor] = useState(usuario?.nome || "Corpo Docente Teologia Acessível");
  const [tempoLeitura, setTempoLeitura] = useState("8 min");
  const [conteudo, setConteudo] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [erroForm, setErroForm] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ARTIGOS, JSON.stringify(listaArtigos));
    } catch (e) {
      console.error("Erro ao salvar artigos:", e);
    }
  }, [listaArtigos]);

  useEffect(() => {
    sincronizarArtigosSupabase(listaArtigos as unknown as Record<string, unknown>[]).then((remotos) => {
      if (Array.isArray(remotos) && remotos.length > listaArtigos.length) {
        setListaArtigos(remotos as unknown as ArtigoItem[]);
      }
    });
  }, []);

  const limparFormulario = () => {
    setTitulo("");
    setSubtitulo("");
    setCategoria(CATEGORIAS_TEOLOGICAS[0]);
    setAutor(usuario?.nome || "Corpo Docente Teologia Acessível");
    setTempoLeitura("8 min");
    setConteudo("");
    setEditandoId(null);
    setErroForm("");
  };

  const handlePublicar = (e: React.FormEvent) => {
    e.preventDefault();
    setErroForm("");

    if (!titulo.trim()) {
      setErroForm("Informe o título do artigo.");
      return;
    }
    if (!conteudo.trim()) {
      setErroForm("Escreva o conteúdo do artigo antes de publicar.");
      return;
    }

    const palavras = conteudo.trim().split(/\s+/).length;
    const tempoCalculado =
      tempoLeitura.trim() || `${Math.max(3, Math.ceil(palavras / 180))} min`;

    if (editandoId !== null) {
      const atualizado = {
        id: editandoId,
        titulo: titulo.trim(),
        subtitulo: subtitulo.trim(),
        categoria,
        autor: autor.trim() || "Corpo Docente Teologia Acessível",
        data: new Date().toLocaleDateString("pt-BR"),
        tempoLeitura: tempoCalculado,
        conteudo: conteudo.trim(),
      };
      setListaArtigos((prev) =>
        prev.map((item) => (item.id === editandoId ? { ...item, ...atualizado } : item))
      );
      salvarArtigoNaNuvem(atualizado);
      setAberto(editandoId);
      setMensagemSucesso("Artigo atualizado com sucesso!");
    } else {
      const novoArtigo: ArtigoItem = {
        id: `art-${Date.now()}`,
        titulo: titulo.trim(),
        subtitulo: subtitulo.trim(),
        categoria,
        autor: autor.trim() || usuario?.nome || "Corpo Docente Teologia Acessível",
        data: new Date().toLocaleDateString("pt-BR"),
        tempoLeitura: tempoCalculado,
        conteudo: conteudo.trim(),
        autoral: true,
      };
      setListaArtigos((prev) => [novoArtigo, ...prev]);
      salvarArtigoNaNuvem(novoArtigo);
      setAberto(novoArtigo.id);
      setMensagemSucesso("Artigo publicado com sucesso!");
    }

    limparFormulario();
    setTimeout(() => setMensagemSucesso(""), 4000);
  };

  const handleEditar = (artigo: ArtigoItem) => {
    setEditandoId(artigo.id);
    setTitulo(artigo.titulo);
    setSubtitulo(artigo.subtitulo || "");
    setCategoria(artigo.categoria || CATEGORIAS_TEOLOGICAS[0]);
    setAutor(artigo.autor || usuario?.nome || "Corpo Docente Teologia Acessível");
    setTempoLeitura(artigo.tempoLeitura || "8 min");
    setConteudo(artigo.conteudo);
    setMostrarFormulario(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExcluir = (id: number | string) => {
    if (!window.confirm("Deseja realmente excluir este artigo?")) return;
    setListaArtigos((prev) => prev.filter((a) => a.id !== id));
    if (aberto === id) setAberto(null);
  };

  return (
    <div>
      <div
        className="pagina-titulo-area"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <h1>
            <ScrollText size={28} className="icone-titulo" /> Artigos & Tratados Teológicos
          </h1>
          <p className="pagina-sub">
            Estudos doutrinários, exegéticos e históricos preparados com rigor pedagógico.
          </p>
        </div>

        <button
          type="button"
          className="btn btn-primario btn-com-icone"
          onClick={() => {
            if (mostrarFormulario && editandoId !== null) {
              limparFormulario();
            } else {
              setMostrarFormulario((v) => !v);
            }
          }}
        >
          {mostrarFormulario ? <X size={18} /> : <PlusCircle size={18} />}
          <span>{mostrarFormulario ? "Fechar Formulário" : "Novo Artigo"}</span>
        </button>
      </div>

      {mensagemSucesso && (
        <div
          className="alerta-sucesso"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 20,
            padding: "12px 16px",
            borderRadius: 10,
            background: "#dcfce7",
            color: "#166534",
            border: "1px solid #86efac",
            fontWeight: 600,
          }}
        >
          <CheckCircle2 size={18} />
          <span>{mensagemSucesso}</span>
        </div>
      )}

      {mostrarFormulario && (
        <form
          onSubmit={handlePublicar}
          className="card"
          style={{
            marginBottom: 24,
            border: "1px solid #cbd5e1",
            background: "#ffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 16,
              paddingBottom: 12,
              borderBottom: "1px solid #e2e8f0",
            }}
          >
            <h2
              style={{
                fontSize: "1.2rem",
                color: "#0f2a43",
                display: "flex",
                alignItems: "center",
                gap: 8,
                margin: 0,
              }}
            >
              <PlusCircle size={20} color="#1e3a8a" />
              {editandoId !== null ? "Editar Artigo Teológico" : "Publicar Novo Artigo ou Tratado"}
            </h2>
            {editandoId !== null && (
              <button
                type="button"
                className="btn btn-contorno"
                style={{ padding: "6px 12px", fontSize: "0.85rem" }}
                onClick={limparFormulario}
              >
                Cancelar Edição
              </button>
            )}
          </div>

          {erroForm && (
            <div className="alerta" role="alert" style={{ marginBottom: 14 }}>
              {erroForm}
            </div>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 14,
              marginBottom: 14,
            }}
          >
            <div className="form-grupo-campo">
              <label htmlFor="artigo-titulo" style={{ fontWeight: 600, display: "block", marginBottom: 6 }}>
                Título do Artigo *
              </label>
              <input
                id="artigo-titulo"
                type="text"
                required
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ex: A Soberania de Deus e a Responsabilidade Humana"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid #cbd5e1",
                  fontSize: "0.95rem",
                }}
              />
            </div>

            <div className="form-grupo-campo">
              <label htmlFor="artigo-categoria" style={{ fontWeight: 600, display: "block", marginBottom: 6 }}>
                Área / Categoria Teológica
              </label>
              <select
                id="artigo-categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid #cbd5e1",
                  fontSize: "0.95rem",
                  background: "#fff",
                }}
              >
                {CATEGORIAS_TEOLOGICAS.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
              marginBottom: 14,
            }}
          >
            <div className="form-grupo-campo">
              <label htmlFor="artigo-subtitulo" style={{ fontWeight: 600, display: "block", marginBottom: 6 }}>
                Subtítulo ou Resumo Breve (opcional)
              </label>
              <input
                id="artigo-subtitulo"
                type="text"
                value={subtitulo}
                onChange={(e) => setSubtitulo(e.target.value)}
                placeholder="Breve síntese sobre o tema abordado..."
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid #cbd5e1",
                  fontSize: "0.95rem",
                }}
              />
            </div>

            <div className="form-grupo-campo">
              <label htmlFor="artigo-autor" style={{ fontWeight: 600, display: "block", marginBottom: 6 }}>
                Autor / Preletor
              </label>
              <input
                id="artigo-autor"
                type="text"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
                placeholder="Nome do autor"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid #cbd5e1",
                  fontSize: "0.95rem",
                }}
              />
            </div>

            <div className="form-grupo-campo">
              <label htmlFor="artigo-tempo" style={{ fontWeight: 600, display: "block", marginBottom: 6 }}>
                Tempo de Estudo
              </label>
              <input
                id="artigo-tempo"
                type="text"
                value={tempoLeitura}
                onChange={(e) => setTempoLeitura(e.target.value)}
                placeholder="Ex: 10 min"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid #cbd5e1",
                  fontSize: "0.95rem",
                }}
              />
            </div>
          </div>

          <div className="form-grupo-campo" style={{ marginBottom: 16 }}>
            <label htmlFor="artigo-conteudo" style={{ fontWeight: 600, display: "block", marginBottom: 6 }}>
              Conteúdo Completo do Artigo *
            </label>
            <textarea
              id="artigo-conteudo"
              rows={7}
              required
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
              placeholder="Redija ou cole aqui o texto completo do artigo, estudo bíblico ou tratado doutrinário..."
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: 8,
                border: "1px solid #cbd5e1",
                fontSize: "0.96rem",
                fontFamily: "inherit",
                lineHeight: 1.6,
                resize: "vertical",
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
            <button
              type="button"
              className="btn btn-contorno"
              onClick={limparFormulario}
            >
              Limpar Campos
            </button>
            <button type="submit" className="btn btn-primario btn-com-icone">
              <Send size={16} />
              <span>{editandoId !== null ? "Salvar Alterações" : "Publicar Artigo"}</span>
            </button>
          </div>
        </form>
      )}

      <div className="artigos-container">
        {listaArtigos.map((a) => (
          <article key={a.id} className="card artigo">
            <button
              className="cabecalho-artigo"
              onClick={() => setAberto(aberto === a.id ? null : a.id)}
              aria-expanded={aberto === a.id}
            >
              <div className="artigo-titulo-grupo" style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", textAlign: "left" }}>
                <BookOpen size={18} className="artigo-icone-item" />
                <h2 style={{ margin: 0 }}>{a.titulo}</h2>
                {a.categoria && (
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "2px 10px",
                      borderRadius: 999,
                      background: "#eff6ff",
                      color: "#1e40af",
                      border: "1px solid #bfdbfe",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <Tag size={11} /> {a.categoria}
                  </span>
                )}
              </div>
              <span className="artigo-seta">
                {aberto === a.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </button>

            {a.subtitulo && <p className="artigo-sub">{a.subtitulo}</p>}

            {aberto === a.id && (
              <div className="artigo-corpo-wrapper">
                <div
                  className="artigo-corpo"
                  style={{ whiteSpace: "pre-line", lineHeight: 1.75, color: "#1e293b" }}
                >
                  {a.conteudo}
                </div>
                <div
                  className="artigo-rodape-meta"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 12,
                    marginTop: 14,
                    paddingTop: 12,
                    borderTop: "1px solid #e2e8f0",
                    color: "#64748b",
                    fontSize: "0.86rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                      <Clock size={14} /> Tempo estimado de estudo: {a.tempoLeitura || "8 min"}
                    </span>
                    {a.autor && (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                        <User size={14} /> {a.autor}
                      </span>
                    )}
                    {a.data && (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                        <Calendar size={14} /> {a.data}
                      </span>
                    )}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button
                      type="button"
                      className="btn btn-contorno"
                      style={{ padding: "5px 10px", fontSize: "0.8rem", display: "inline-flex", alignItems: "center", gap: 5 }}
                      onClick={() => handleEditar(a)}
                    >
                      <Edit3 size={13} /> Editar
                    </button>
                    <button
                      type="button"
                      className="btn btn-contorno"
                      style={{
                        padding: "5px 10px",
                        fontSize: "0.8rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        color: "#dc2626",
                        borderColor: "#fca5a5",
                      }}
                      onClick={() => handleExcluir(a.id)}
                    >
                      <Trash2 size={13} /> Excluir
                    </button>
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
