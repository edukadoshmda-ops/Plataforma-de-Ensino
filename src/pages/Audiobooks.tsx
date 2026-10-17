import { useState, useRef, useEffect, useMemo } from "react";
import { audiobooks } from "../data/content";
import { apostilasTextoCompleto } from "../data/apostilasTextoCompleto";
import { marcarProgresso } from "../services/progressoEstudoService.js";
import {
  Headphones,
  Volume2,
  Play,
  Download,
  BookOpen,
  FastForward,
  CheckCircle,
  FileText,
  Search,
  Sparkles,
  User,
  ListMusic,
} from "lucide-react";
import CadernoAnotacoes from "../components/CadernoAnotacoes";

export default function Audiobooks() {
  const [atualId, setAtualId] = useState(1);
  const [vozEstudio, setVozEstudio] = useState<"masculino" | "feminino">("masculino");
  const [velocidade, setVelocidade] = useState(1.0);
  const [pesquisa, setPesquisa] = useState("");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playerTopoRef = useRef<HTMLDivElement | null>(null);

  // Disciplina selecionada
  const apostilaAtual = useMemo(() => {
    return apostilasTextoCompleto.find((a) => a.id === atualId) || apostilasTextoCompleto[0];
  }, [atualId]);

  const audiobookAtual = useMemo(() => {
    return audiobooks.find((a) => a.id === atualId) || audiobooks[0];
  }, [atualId]);

  // Aplicar velocidade no player MP3
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = velocidade;
    }
  }, [velocidade, atualId, vozEstudio]);

  const selecionarDisciplina = (id: number) => {
    setAtualId(id);
    if (playerTopoRef.current) {
      playerTopoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const mudarVelocidade = (taxa: number) => {
    setVelocidade(taxa);
    if (audioRef.current) {
      audioRef.current.playbackRate = taxa;
    }
  };

  const arquivoMp3 = audiobookAtual
    ? vozEstudio === "masculino"
      ? audiobookAtual.arquivoMasculino
      : audiobookAtual.arquivoFeminino
    : null;

  const disciplinasFiltradas = audiobooks.filter((disc) => {
    const termo = pesquisa.toLowerCase();
    return (
      disc.titulo.toLowerCase().includes(termo) ||
      disc.modulo.toLowerCase().includes(termo)
    );
  });

  return (
    <div className="audiobooks-pagina">
      {/* Cabeçalho da Página */}
      <div className="pagina-titulo-area" ref={playerTopoRef}>
        <div className="badge-topo-sebitan">
          <Sparkles size={14} /> Teologia Acessível • Centro de Estudos e Áudio Acadêmico
        </div>
        <h1>
          <Headphones size={28} className="icone-titulo" /> Audiobooks & Preleções em Áudio
        </h1>
        <p className="pagina-sub">
          Ouça as gravações e preleções oficiais em áudio de todas as {audiobooks.length} disciplinas do curso teológico.
        </p>
      </div>

      {/* =========================================================
          1. REPRODUTOR DE ÁUDIO EM CIMA (DESTAQUE NO TOPO)
          ========================================================= */}
      <div className="player-topo-secao">
        <div className="card card-player-destaque">
          {/* Header da Disciplina Ativa */}
          <div className="player-cabecalho-disciplina">
            <div className="player-tags-info">
              <span className="tag-modulo-ativo">{audiobookAtual?.modulo}</span>
              {apostilaAtual?.totalPaginas && (
                <span className="tag-paginas-ativo">
                  <FileText size={13} /> {apostilaAtual.totalPaginas} páginas no PDF
                </span>
              )}
              <span className="tag-tempo-ativo">
                <BookOpen size={13} /> {audiobookAtual?.duracao || "~45 min"} de áudio
              </span>
              <span className="badge-integral-sucesso">
                <CheckCircle size={13} /> Gravação Oficial em Estúdio
              </span>
            </div>
            <h2 className="player-disciplina-titulo">{audiobookAtual?.titulo}</h2>
            {audiobookAtual?.descricao && (
              <p style={{ color: "#64748b", marginTop: "8px", fontSize: "0.95rem", lineHeight: 1.5 }}>
                {audiobookAtual.descricao}
              </p>
            )}
          </div>

          {/* Painel do Áudio em Estúdio */}
          <div className="painel-audio-estudio" style={{ marginTop: "12px" }}>
            <div className="seletor-voz-box">
              <span className="seletor-voz-rotulo">
                <User size={15} className="icone-inline" /> Escolha o Narrador / Voz Oficial:
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

            {/* Player Nativo */}
            <div className="player-container">
              <audio
                ref={audioRef}
                controls
                src={arquivoMp3 || undefined}
                className="audio-player-custom"
                onPlay={() => {
                  if (audiobookAtual?.disciplinaId) {
                    marcarProgresso(audiobookAtual.disciplinaId, "audio", true);
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

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
                  {arquivoMp3 && (
                    <a
                      href={arquivoMp3}
                      download
                      className="btn btn-contorno btn-sm btn-com-icone"
                      title="Baixar MP3 para ouvir offline"
                    >
                      <Download size={14} />
                      <span>Baixar MP3 Oficial</span>
                    </a>
                  )}

                  {apostilaAtual?.pdfFilename && (
                    <a
                      href={`/pdfs/${apostilaAtual.pdfFilename}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-contorno btn-sm btn-com-icone"
                      title="Abrir PDF original da matéria"
                    >
                      <FileText size={14} />
                      <span>Ver PDF</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {audiobookAtual?.transcricao && (
              <div className="transcricao-box">
                <div className="transcricao-titulo">
                  <BookOpen size={16} className="icone-inline" />
                  <strong>Síntese da Aula em Estúdio:</strong>
                </div>
                <p className="transcricao-texto">{audiobookAtual.transcricao}</p>
              </div>
            )}
          </div>
        </div>
        {audiobookAtual && (
          <CadernoAnotacoes
            disciplinaId={audiobookAtual.disciplinaId}
            disciplinaTitulo={audiobookAtual.titulo}
          />
        )}
      </div>

      {/* =========================================================
          2. GRADE DE DISCIPLINAS EMBAIXO (FORMATO DE LISTA VERTICAL)
          ========================================================= */}
      <div className="secao-disciplinas-inferior">
        <div className="secao-disciplinas-cabecalho">
          <div>
            <h3>
              <ListMusic size={22} className="icone-inline" /> Grade Completa de Disciplinas ({disciplinasFiltradas.length} Áudios)
            </h3>
            <p className="secao-disciplinas-sub">
              Selecione qualquer matéria da lista abaixo para carregar sua gravação oficial no reprodutor acima.
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
          {disciplinasFiltradas.map((disc, index) => {
            const isAtiva = disc.id === atualId;
            const apostila = apostilasTextoCompleto.find((a) => a.id === disc.id);
            return (
              <div
                key={disc.id}
                className={`card item-disciplina-horizontal ${isAtiva ? "item-disciplina-ativo" : ""}`}
                onClick={() => selecionarDisciplina(disc.id)}
              >
                <div className="disciplina-numero-col">
                  <span className="numero-badge">{index + 1}</span>
                  <div className={`icone-som-status ${isAtiva ? "som-tocando" : ""}`}>
                    <Volume2 size={18} />
                  </div>
                </div>

                <div className="disciplina-detalhes-col">
                  <div className="disciplina-metas-topo">
                    <span className="tag-modulo-disciplina">{disc.modulo}</span>
                    {apostila?.totalPaginas && (
                      <span className="tag-paginas-disciplina">
                        <FileText size={12} /> {apostila.totalPaginas} páginas
                      </span>
                    )}
                    <span className="tag-duracao-disciplina">
                      <Headphones size={12} /> {disc.duracao || "~45 min"}
                    </span>
                  </div>
                  <h4 className="disciplina-titulo-texto">{disc.titulo}</h4>
                  <p className="disciplina-previa-texto">
                    {disc.descricao || "Gravação oficial da aula em estúdio..."}
                  </p>
                </div>

                <div className="disciplina-acao-col">
                  <button
                    className={`btn-selecionar-audio ${isAtiva ? "btn-selecionar-ativo" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      selecionarDisciplina(disc.id);
                    }}
                  >
                    {isAtiva ? (
                      <>
                        <Headphones size={15} />
                        <span>Em Reprodução</span>
                      </>
                    ) : (
                      <>
                        <Play size={15} />
                        <span>Ouvir Áudio</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}

          {disciplinasFiltradas.length === 0 && (
            <div className="vazio-com-icone">
              <p className="vazio">Nenhuma disciplina encontrada para "{pesquisa}".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
