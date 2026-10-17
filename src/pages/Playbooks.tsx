import { useState, useRef, useEffect, useMemo } from "react";
import { pdfs, audiobooks } from "../data/content";
import { marcarProgresso } from "../services/progressoEstudoService.js";
import {
  BookOpen,
  FileText,
  Download,
  Search,
  Layers,
  Sparkles,
  ExternalLink,
  GraduationCap,
  Headphones,
  Volume2,
  FastForward,
  User,
  Play,
} from "lucide-react";
import CadernoAnotacoes from "../components/CadernoAnotacoes";

export default function Playbooks() {
  const [selecionado, setSelecionado] = useState(pdfs[0] || null);
  const [pesquisa, setPesquisa] = useState("");
  const [vozEstudio, setVozEstudio] = useState<"masculino" | "feminino">("masculino");
  const [velocidade, setVelocidade] = useState(1.0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const leitorRef = useRef<HTMLDivElement | null>(null);

  const audiobookAtual = useMemo(() => {
    return audiobooks.find((a) => a.id === selecionado?.id) || audiobooks[0];
  }, [selecionado]);

  const arquivoMp3 = audiobookAtual
    ? vozEstudio === "masculino"
      ? audiobookAtual.arquivoMasculino
      : audiobookAtual.arquivoFeminino
    : null;

  useEffect(() => {
    if (selecionado?.disciplinaId) {
      marcarProgresso(selecionado.disciplinaId, "pdf", true);
    }
  }, [selecionado]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = velocidade;
    }
  }, [velocidade, selecionado, vozEstudio]);

  const selecionar = (pdf: typeof pdfs[0]) => {
    setSelecionado(pdf);
    if (pdf?.disciplinaId) {
      marcarProgresso(pdf.disciplinaId, "pdf", true);
    }
    leitorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const mudarVelocidade = (taxa: number) => {
    setVelocidade(taxa);
    if (audioRef.current) {
      audioRef.current.playbackRate = taxa;
    }
  };

  const filtrados = pdfs.filter((p) => {
    const t = pesquisa.toLowerCase();
    return (
      p.titulo.toLowerCase().includes(t) ||
      p.modulo.toLowerCase().includes(t) ||
      p.descricao.toLowerCase().includes(t)
    );
  });

  return (
    <div className="playbooks-pagina">
      {/* Cabeçalho */}
      <div className="pagina-titulo-area">
        <div className="badge-topo-sebitan">
          <Sparkles size={14} /> Teologia Acessível • Acervo Bibliográfico & Audioteca
        </div>
        <h1>
          <BookOpen size={28} className="icone-titulo" /> Playbooks & Compêndios Teológicos
        </h1>
        <p className="pagina-sub">
          Consulte o <strong>acervo oficial de 30 compêndios</strong> em PDF com reprodução integrada de áudio oficial, narração com alternância de vozes e download.
        </p>
      </div>

      {/* 1. LEITOR DE PDF E ÁUDIO INTEGRADO EM CIMA */}
      <div className="player-topo-secao" ref={leitorRef}>
        <div className="card card-player-destaque">
          <div className="player-cabecalho-disciplina">
            <div className="player-tags-info">
              <span className="tag-modulo-ativo">
                <Layers size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} />
                {selecionado?.modulo}
              </span>
              <span className="tag-paginas-ativo">
                <FileText size={13} /> {selecionado?.paginas}
              </span>
              <span className="tag-tempo-ativo">
                <Headphones size={13} /> {audiobookAtual?.duracao || "~45 min"} de áudio
              </span>
              <span className="badge-integral-sucesso">
                <GraduationCap size={13} /> Teologia Acessível • PDF & Áudio Oficial
              </span>
            </div>
            <h2 className="player-disciplina-titulo">{selecionado?.titulo}</h2>
            <p className="pagina-sub" style={{ margin: 0, fontSize: "0.92rem" }}>
              {selecionado?.descricao}
            </p>
          </div>

          {/* Painel do Reprodutor de Áudio MP3 */}
          <div className="painel-audio-estudio" style={{ marginTop: "14px", marginBottom: "16px" }}>
            <div className="seletor-voz-box">
              <span className="seletor-voz-rotulo">
                <User size={15} className="icone-inline" /> Narrador Oficial:
              </span>
              <div className="botoes-voz-grupo">
                <button
                  className={`btn-voz ${vozEstudio === "masculino" ? "btn-voz-ativo" : ""}`}
                  onClick={() => setVozEstudio("masculino")}
                >
                  <span className="voz-indicador">♂</span>
                  <span>Voz Masculina (Antônio • PT-BR)</span>
                </button>
                <button
                  className={`btn-voz ${vozEstudio === "feminino" ? "btn-voz-ativo" : ""}`}
                  onClick={() => setVozEstudio("feminino")}
                >
                  <span className="voz-indicador">♀</span>
                  <span>Voz Feminina (Francisca • PT-BR)</span>
                </button>
              </div>
            </div>

            <div className="player-container">
              <audio
                ref={audioRef}
                controls
                src={arquivoMp3 || undefined}
                className="audio-player-custom"
                onPlay={() => {
                  if (selecionado?.disciplinaId) {
                    marcarProgresso(selecionado.disciplinaId, "audio", true);
                  }
                }}
                onLoadedData={(e) => {
                  (e.target as HTMLAudioElement).playbackRate = velocidade;
                }}
              >
                Seu navegador não suporta reprodução de áudio.
              </audio>

              <div className="player-controles-extras">
                <div className="velocidades-grupo">
                  <span className="velocidade-label">
                    <FastForward size={14} /> Velocidade:
                  </span>
                  {[0.8, 1.0, 1.25, 1.5, 2.0].map((taxa) => (
                    <button
                      key={taxa}
                      className={`btn-taxa ${velocidade === taxa ? "btn-taxa-ativo" : ""}`}
                      onClick={() => mudarVelocidade(taxa)}
                    >
                      {taxa}x
                    </button>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  {arquivoMp3 && (
                    <a
                      className="btn btn-contorno btn-sm btn-com-icone"
                      href={arquivoMp3}
                      download
                      title="Baixar MP3 oficial da disciplina"
                    >
                      <Download size={14} />
                      <span>Baixar MP3</span>
                    </a>
                  )}
                  <a
                    className="btn btn-contorno btn-sm btn-com-icone"
                    href={selecionado?.arquivo}
                    target="_blank"
                    rel="noreferrer"
                    title="Abrir PDF em nova aba"
                  >
                    <ExternalLink size={14} />
                    <span>Abrir PDF</span>
                  </a>
                  <a
                    className="btn btn-contorno btn-sm btn-com-icone"
                    href={selecionado?.arquivo}
                    download
                    style={{ background: "#f4b400", color: "#0f2a43", borderColor: "#f4b400", fontWeight: 600 }}
                    title="Baixar PDF original"
                  >
                    <Download size={14} />
                    <span>Baixar PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Visualizador do PDF */}
          <div className="visualizador-pdf-destaque">
            {selecionado ? (
              <iframe
                key={selecionado.arquivo}
                src={selecionado.arquivo}
                title={selecionado.titulo}
                className="pdf-frame pdf-frame-destaque"
              />
            ) : (
              <div className="vazio-com-icone" style={{ minHeight: 320 }}>
                <BookOpen size={42} strokeWidth={1.5} className="vazio-icone" />
                <p className="vazio">Selecione um compêndio abaixo para leitura imediata.</p>
              </div>
            )}
          </div>
        </div>
        {selecionado && (
          <CadernoAnotacoes
            disciplinaId={selecionado.disciplinaId}
            disciplinaTitulo={selecionado.titulo}
            codigoDisciplina={selecionado.codigo}
          />
        )}
      </div>

      {/* 2. GRADE DE DISCIPLINAS EMBAIXO (lista vertical completa de 30) */}
      <div className="secao-disciplinas-inferior">
        <div className="secao-disciplinas-cabecalho">
          <div>
            <h3>
              <BookOpen size={22} className="icone-inline" /> Grade Completa ({filtrados.length} Compêndios)
            </h3>
            <p className="secao-disciplinas-sub">
              Clique em qualquer matéria para abrir o PDF e seu respectivo áudio oficial no reprodutor acima.
            </p>
          </div>
          <div className="pesquisa-disciplinas-box">
            <Search size={16} className="icone-pesquisa" />
            <input
              type="text"
              placeholder="Buscar por título ou módulo..."
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
              className="input-pesquisa-disciplinas"
            />
          </div>
        </div>

        <div className="lista-disciplinas-vertical">
          {filtrados.map((pdf, idx) => {
            const ativo = selecionado?.id === pdf.id;
            return (
              <div
                key={pdf.id}
                className={`card item-disciplina-horizontal ${ativo ? "item-disciplina-ativo" : ""}`}
                onClick={() => selecionar(pdf)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && selecionar(pdf)}
              >
                <div className="disciplina-numero-col">
                  <span className="numero-badge">{idx + 1}</span>
                  <div className={`icone-som-status ${ativo ? "som-tocando" : ""}`}>
                    <Volume2 size={18} />
                  </div>
                </div>
                <div className="disciplina-detalhes-col">
                  <div className="disciplina-metas-topo">
                    <span className="tag-modulo-disciplina">{pdf.modulo}</span>
                    <span className="tag-paginas-disciplina">
                      <FileText size={12} /> {pdf.paginas}
                    </span>
                    <span className="tag-duracao-disciplina">
                      <Headphones size={12} /> Áudio Oficial MP3
                    </span>
                  </div>
                  <h4 className="disciplina-titulo-texto">{pdf.titulo}</h4>
                  <p className="disciplina-previa-texto">{pdf.descricao}</p>
                </div>
                <div className="disciplina-acao-col">
                  <button
                    className={`btn-selecionar-audio ${ativo ? "btn-selecionar-ativo" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      selecionar(pdf);
                    }}
                  >
                    {ativo ? (
                      <>
                        <Headphones size={15} />
                        <span>Em Reprodução</span>
                      </>
                    ) : (
                      <>
                        <Play size={15} />
                        <span>Ler & Ouvir</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
          {filtrados.length === 0 && (
            <div className="vazio-com-icone">
              <p className="vazio">Nenhum compêndio encontrado para “{pesquisa}”.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
