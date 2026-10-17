import { useState, useMemo, useEffect, useRef } from "react";
import { GRADE_CURRICULAR, MODULOS_SEBITAN } from "../data/gradeCurricular";
import { marcarProgresso } from "../services/progressoEstudoService.js";
import {
  Video,
  PlayCircle,
  Play,
  Clock,
  BookOpen,
  ExternalLink,
  Search,
  Sparkles,
  Layers,
  AlertCircle,
  CheckCircle2,
  Tv,
  Download,
  Copy,
  Check,
  X,
  Music,
  Film,
  Image,
  PlusCircle,
  Edit3,
  RotateCcw,
  Trash2,
} from "lucide-react";
import CadernoAnotacoes from "../components/CadernoAnotacoes";

// Extrai o código ID de 11 caracteres de qualquer link do YouTube
function extrairYoutubeId(urlOuId: string): string {
  if (!urlOuId) return "";
  const texto = urlOuId.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(texto)) {
    return texto;
  }
  const regex =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?|live|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  const match = texto.match(regex);
  return match ? match[1] : "";
}

const STORAGE_KEY_CUSTOM_VIDEOS = "ta_videoaulas_customizadas_v2";

interface CustomizacaoVideo {
  youtubeId: string;
  tituloCanal?: string;
  duracao?: string;
}

function carregarCustomizacoes(): Record<string, CustomizacaoVideo> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_VIDEOS);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Erro ao carregar vídeos customizados:", e);
  }
  return {};
}

function salvarCustomizacoes(dados: Record<string, CustomizacaoVideo>) {
  try {
    localStorage.setItem(STORAGE_KEY_CUSTOM_VIDEOS, JSON.stringify(dados));
  } catch (e) {
    console.error("Erro ao salvar vídeos customizados:", e);
  }
}

// Ícone oficial do YouTube em SVG
function YoutubeIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ verticalAlign: "middle" }}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// Metadados dos vídeos do canal oficial de Luiz Eduardo mapeados para as 30 disciplinas
const METADADOS_CANAL_LUIZ_EDUARDO: Record<
  string,
  {
    youtubeId: string;
    tituloCanal: string;
    duracao: string;
    temVideoCanal: boolean;
  }
> = {
  metodologia: {
    youtubeId: "x9TiBpRYMTk",
    tituloCanal: "A VERDADE Oculta Sobre: Metodologia Cientifica!! 😱",
    duracao: "8:07",
    temVideoCanal: true,
  },
  portugues: {
    youtubeId: "xKPt4TfAju4",
    tituloCanal: "A VERDADE Oculta Sobre: Português Instrumental! 😱",
    duracao: "7:17",
    temVideoCanal: true,
  },
  bibliologia: {
    youtubeId: "9TEeTuYAJq0",
    tituloCanal: "BIBLIOLOGIA: Do Papiro ao Cânone",
    duracao: "8:10",
    temVideoCanal: true,
  },
  manuscritos: {
    youtubeId: "a4m8QFgzTvE",
    tituloCanal: "Por Que Ninguém Te Contou Isso Sobre Manuscritos Bíblicos?! 😱",
    duracao: "8:54",
    temVideoCanal: true,
  },
  hermeneutica: {
    youtubeId: "fSUl1TUNYzk",
    tituloCanal: "Hermenêutica Sagrada.",
    duracao: "8:01",
    temVideoCanal: true,
  },
  costumes: {
    youtubeId: "ofAtXaJCjS8",
    tituloCanal: "A Vida nas Tendas Bíblicas.",
    duracao: "8:13",
    temVideoCanal: true,
  },
  geografia_biblica: {
    youtubeId: "AIbMtZEREjg",
    tituloCanal: "Verdades sobre Geografia Bíblica Que Vão Explodir Sua Mente 🤯",
    duracao: "8:48",
    temVideoCanal: true,
  },
  arqueologia_biblica: {
    youtubeId: "A_P8xtz5qPI",
    tituloCanal: "A VERDADE Oculta Sobre: Arqueologia Bíblica, Vai Explodir Sua Mente",
    duracao: "7:07",
    temVideoCanal: true,
  },
  sintese_at: {
    youtubeId: "kJQP7kiw5Fk",
    tituloCanal: "Síntese do Antigo Testamento (Aula Geral)",
    duracao: "35 min",
    temVideoCanal: false,
  },
  interbiblico: {
    youtubeId: "lv4ZRvPmPkc",
    tituloCanal: "Os Segredos Ocultos de Os 400 Anos de Silêncio!! 😱",
    duracao: "11:04",
    temVideoCanal: true,
  },
  sintese_nt: {
    youtubeId: "5B1iPZQdV4A",
    tituloCanal: "Síntese Novo Testamento",
    duracao: "7:41",
    temVideoCanal: true,
  },
  tipologia_simbologia: {
    youtubeId: "kJQP7kiw5Fk",
    tituloCanal: "Tipologia & Simbologia Bíblica (Aula Geral)",
    duracao: "35 min",
    temVideoCanal: false,
  },
  dispensacoes_e_aliancas: {
    youtubeId: "PEoeVihT3fc",
    tituloCanal: "Dispensações e Alianças",
    duracao: "8:41",
    temVideoCanal: true,
  },
  teontologia: {
    youtubeId: "kJQP7kiw5Fk",
    tituloCanal: "Teontologia: A Doutrina de Deus Pai (Aula Geral)",
    duracao: "35 min",
    temVideoCanal: false,
  },
  angelologia: {
    youtubeId: "Se2qWigx-dY",
    tituloCanal: "ANGELOLOGIA: A VERDADE Oculta Sobre a Hierarquia Invisível!! 😱",
    duracao: "9:18",
    temVideoCanal: true,
  },
  antropologia: {
    youtubeId: "LCfkELVmBew",
    tituloCanal: "A VERDADE Oculta Sobre: O Mistério da Alma! 😱",
    duracao: "8:13",
    temVideoCanal: true,
  },
  hamartiologia: {
    youtubeId: "kb-AiO6mmG0",
    tituloCanal: "O que é Hamartiologia? 😱",
    duracao: "8:28",
    temVideoCanal: true,
  },
  cristologia: {
    youtubeId: "YfF1JWuyTyQ",
    tituloCanal: "A Toda a VERDADE sobre CRISTOLOGIA: A Anatomia Teológica! 😱",
    duracao: "7:06",
    temVideoCanal: true,
  },
  pneumatologia: {
    youtubeId: "lS6Yci73EsU",
    tituloCanal: "PNEUMATOLOGIA: Doutrina do Espírito Santo",
    duracao: "7:37",
    temVideoCanal: true,
  },
  soteriologia: {
    youtubeId: "WOae73racyc",
    tituloCanal: "A Doutrina da Salvação.",
    duracao: "7:25",
    temVideoCanal: true,
  },
  eclesiologia: {
    youtubeId: "pwLMSFNBH30",
    tituloCanal: "Eclesiologia - Resumo Visual! 😱",
    duracao: "7:51",
    temVideoCanal: true,
  },
  escatologia: {
    youtubeId: "kJQP7kiw5Fk",
    tituloCanal: "Escatologia Bíblica: Últimas Coisas (Aula Geral)",
    duracao: "35 min",
    temVideoCanal: false,
  },
  apologetica: {
    youtubeId: "IBmrsGj_yYM",
    tituloCanal: "APOLOGÉTICA: O Palácio do Conhecimento, Porque ninguém te contou?",
    duracao: "9:13",
    temVideoCanal: true,
  },
  biblia_e_ciencia: {
    youtubeId: "kJQP7kiw5Fk",
    tituloCanal: "A Bíblia e a Ciência: Harmonia das Origens (Aula Geral)",
    duracao: "35 min",
    temVideoCanal: false,
  },
  heresiologia: {
    youtubeId: "bikvQtP_pvQ",
    tituloCanal: "Currículo de Heresiologia! 😱",
    duracao: "8:50",
    temVideoCanal: true,
  },
  religioes_mundiais_1: {
    youtubeId: "wpYQ5l4Wv-s",
    tituloCanal: "Por que ESCONDERAM de você a Verdadeira Origem das Religiões?",
    duracao: "9:40",
    temVideoCanal: true,
  },
  discipulado: {
    youtubeId: "cRTTnSjEIxk",
    tituloCanal: "Por Que Ninguém Te Contou Isso Sobre O Caminho do Discipulado ??",
    duracao: "7:47",
    temVideoCanal: true,
  },
  homiletica: {
    youtubeId: "vSTg9kl7IPo",
    tituloCanal: "Desmistificando o Púlpito?! 😱",
    duracao: "7:46",
    temVideoCanal: true,
  },
  evangelismo: {
    youtubeId: "6K24f2Rn-Ck",
    tituloCanal: "O Dever da Evangelização! 😱",
    duracao: "9:43",
    temVideoCanal: true,
  },
  administracao_eclesiastica: {
    youtubeId: "E2_6tHr0yAc",
    tituloCanal: "Administração Eclesiástica!! 😱",
    duracao: "7:30",
    temVideoCanal: true,
  },
};

// Constrói os 30 itens oficiais sincronizados 1 a 1 com a Grade Curricular
export const VIDEOAULAS_OFICIAIS = GRADE_CURRICULAR.map((disc) => {
  const metaCanal = METADADOS_CANAL_LUIZ_EDUARDO[disc.id] || {
    youtubeId: disc.youtubeIdPadrao || "kJQP7kiw5Fk",
    tituloCanal: `Preleção Oficial: ${disc.titulo}`,
    duracao: "35 min",
    temVideoCanal: false,
  };

  return {
    id: `videoaula-${disc.id}`,
    ordem: disc.ordem,
    disciplinaId: disc.id,
    codigo: disc.codigo,
    moduloId: disc.moduloId,
    modulo: disc.modulo,
    titulo: disc.titulo,
    subtitulo: disc.subtitulo,
    cargaHoraria: disc.cargaHoraria,
    descricao: disc.descricao,
    youtubeId: metaCanal.youtubeId,
    tituloCanal: metaCanal.tituloCanal,
    duracao: metaCanal.duracao,
    temVideoCanal: metaCanal.temVideoCanal,
  };
});

export default function Videos() {
  const [customizacoes, setCustomizacoes] = useState(() => carregarCustomizacoes());

  // Constrói a lista combinando a grade oficial com as customizações salvas pelo usuário
  const listaAulas = useMemo(() => {
    return VIDEOAULAS_OFICIAIS.map((aula) => {
      const custom = customizacoes[aula.disciplinaId];
      if (custom && custom.youtubeId) {
        return {
          ...aula,
          youtubeId: custom.youtubeId,
          tituloCanal: custom.tituloCanal || aula.tituloCanal,
          duracao: custom.duracao || aula.duracao,
          temVideoCanal: true,
          personalizado: true,
        };
      }
      return aula;
    });
  }, [customizacoes]);

  const [selecionado, setSelecionado] = useState(() => listaAulas[0]);
  const [pesquisa, setPesquisa] = useState("");
  const [moduloFiltro, setModuloFiltro] = useState<number | 0>(0);
  const leitorRef = useRef<HTMLDivElement>(null);

  // Estados do Modal / Formulário de Download de Vídeos
  const [modalDownloadAberto, setModalDownloadAberto] = useState(false);
  const [linkDownload, setLinkDownload] = useState("");
  const [formatoDownload, setFormatoDownload] = useState<"mp4" | "mp3" | "capa">("mp4");
  const [comandoCopiado, setComandoCopiado] = useState(false);

  // Estados do Modal / Formulário de Adicionar / Vincular Videoaula
  const [modalCadastrarAberto, setModalCadastrarAberto] = useState(false);
  const [disciplinaAlvo, setDisciplinaAlvo] = useState("metodologia");
  const [linkCadastrar, setLinkCadastrar] = useState("");
  const [tituloCadastrar, setTituloCadastrar] = useState("");
  const [duracaoCadastrar, setDuracaoCadastrar] = useState("");
  const [erroCadastrar, setErroCadastrar] = useState("");
  const [sucessoCadastrar, setSucessoCadastrar] = useState("");

  const abrirModalDownload = (idOuUrl?: string) => {
    const id = idOuUrl || selecionado?.youtubeId || "";
    setLinkDownload(id ? `https://www.youtube.com/watch?v=${id}` : "");
    setModalDownloadAberto(true);
    setComandoCopiado(false);
  };

  const abrirModalCadastrar = (disciplinaId?: string) => {
    const discId = disciplinaId || selecionado?.disciplinaId || "metodologia";
    setDisciplinaAlvo(discId);
    const aulaExistente = listaAulas.find((a) => a.disciplinaId === discId);
    if (aulaExistente) {
      setLinkCadastrar(aulaExistente.temVideoCanal ? `https://www.youtube.com/watch?v=${aulaExistente.youtubeId}` : "");
      setTituloCadastrar(aulaExistente.temVideoCanal ? aulaExistente.tituloCanal : `Aula: ${aulaExistente.titulo}`);
      setDuracaoCadastrar(aulaExistente.temVideoCanal ? aulaExistente.duracao : "8:00");
    } else {
      setLinkCadastrar("");
      setTituloCadastrar("");
      setDuracaoCadastrar("");
    }
    setErroCadastrar("");
    setSucessoCadastrar("");
    setModalCadastrarAberto(true);
  };

  const idDetectado = useMemo(() => extrairYoutubeId(linkDownload), [linkDownload]);
  const idCadastrarDetectado = useMemo(() => extrairYoutubeId(linkCadastrar), [linkCadastrar]);

  const aulaDetectada = useMemo(() => {
    if (!idDetectado) return null;
    return listaAulas.find((a) => a.youtubeId === idDetectado);
  }, [idDetectado, listaAulas]);

  const copiarComandoYtDlp = (yId: string) => {
    const cmd = `yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" "https://www.youtube.com/watch?v=${yId}"`;
    navigator.clipboard.writeText(cmd);
    setComandoCopiado(true);
    setTimeout(() => setComandoCopiado(false), 2200);
  };

  const handleSalvarVideo = (e: React.FormEvent) => {
    e.preventDefault();
    setErroCadastrar("");

    const yId = extrairYoutubeId(linkCadastrar);
    if (!yId) {
      setErroCadastrar("Link do YouTube inválido. Cole a URL completa ou o código ID de 11 caracteres.");
      return;
    }

    const novasCustom = {
      ...customizacoes,
      [disciplinaAlvo]: {
        youtubeId: yId,
        tituloCanal: tituloCadastrar.trim() || `Aula: ${disciplinaAlvo}`,
        duracao: duracaoCadastrar.trim() || "YouTube",
      },
    };

    setCustomizacoes(novasCustom);
    salvarCustomizacoes(novasCustom);
    setSucessoCadastrar("Videoaula vinculada com sucesso!");

    // Atualiza selecionado se for a aula alterada
    const alterada = listaAulas.find((a) => a.disciplinaId === disciplinaAlvo);
    if (alterada) {
      setSelecionado({
        ...alterada,
        youtubeId: yId,
        tituloCanal: tituloCadastrar.trim() || `Aula: ${disciplinaAlvo}`,
        duracao: duracaoCadastrar.trim() || "YouTube",
        temVideoCanal: true,
      });
    }

    setTimeout(() => {
      setSucessoCadastrar("");
      setModalCadastrarAberto(false);
    }, 1200);
  };

  const handleRestaurarPadrao = () => {
    if (window.confirm("Deseja restaurar as videoaulas para o padrão original da plataforma?")) {
      setCustomizacoes({});
      salvarCustomizacoes({});
      setSelecionado(VIDEOAULAS_OFICIAIS[0]);
    }
  };

  // Registrar progresso quando uma videoaula for selecionada
  useEffect(() => {
    if (selecionado?.disciplinaId) {
      marcarProgresso(selecionado.disciplinaId, "video", true);
    }
  }, [selecionado]);

  const selecionar = (aula: typeof VIDEOAULAS_OFICIAIS[0]) => {
    setSelecionado(aula);
    if (aula?.disciplinaId) {
      marcarProgresso(aula.disciplinaId, "video", true);
    }
    leitorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Filtragem dos vídeos por busca e por módulo
  const filtrados = useMemo(() => {
    const t = pesquisa.toLowerCase().trim();
    return listaAulas.filter((aula) => {
      const matchModulo = moduloFiltro === 0 || aula.moduloId === moduloFiltro;
      const matchBusca =
        !t ||
        aula.titulo.toLowerCase().includes(t) ||
        aula.codigo.toLowerCase().includes(t) ||
        aula.modulo.toLowerCase().includes(t) ||
        aula.tituloCanal.toLowerCase().includes(t) ||
        aula.descricao.toLowerCase().includes(t);
      return matchModulo && matchBusca;
    });
  }, [pesquisa, moduloFiltro, listaAulas]);

  const contagemCanal = useMemo(() => {
    return listaAulas.filter((v) => v.temVideoCanal).length;
  }, [listaAulas]);

  const contagemPersonalizados = useMemo(() => {
    return Object.keys(customizacoes).length;
  }, [customizacoes]);

  return (
    <div className="videos-pagina-container">
      {/* Cabeçalho da Página */}
      <div className="pagina-titulo-area topo-com-acao">
        <div>
          <div className="badge-topo-sebitan">
            <Sparkles size={14} /> Teologia Acessível • Acervo Audiovisual Acadêmico
          </div>
          <h1>
            <Video size={28} className="icone-titulo" /> Videoaulas & Preleções Expositivas
          </h1>
          <p className="pagina-sub">
            Consulte e assista às <strong>30 videoaulas oficiais</strong> correspondentes aos compêndios do currículo da Teologia Acessível.
          </p>
        </div>

        <div className="pagina-acoes">
          <a
            className="btn btn-contorno btn-com-icone"
            href="https://www.youtube.com/@Luiz-Eduardo-Top"
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir canal no YouTube"
          >
            <YoutubeIcon size={18} />
            <span>Canal Luiz Eduardo</span>
          </a>
          <button
            type="button"
            className="btn btn-com-icone btn-vincular-video-topo"
            onClick={() => abrirModalCadastrar(selecionado?.disciplinaId)}
            title="Adicionar ou vincular vídeo do YouTube para qualquer disciplina"
          >
            <PlusCircle size={18} />
            <span>Adicionar Vídeo</span>
          </button>
          <button
            type="button"
            className="btn btn-com-icone btn-baixar-video-topo"
            onClick={() => abrirModalDownload(selecionado?.youtubeId)}
            title="Baixar qualquer vídeo ou áudio do YouTube"
          >
            <Download size={18} />
            <span>Baixar Vídeo</span>
          </button>
        </div>
      </div>

      {/* 1. PLAYER DE VÍDEO EM DESTAQUE NO TOPO (igual Playbooks e Audiobooks) */}
      <div className="player-topo-secao" ref={leitorRef}>
        <section className="card visualizador visualizador-video-card">
          {selecionado ? (
            <div className="visualizador-conteudo-wrapper">
              <div className="visualizador-cabecalho-aula">
                <div className="visualizador-tags-topo">
                  <span className="tag-modulo-disciplina">
                    <Layers size={13} /> {selecionado.modulo}
                  </span>
                  <span className="tag-disciplina tag-disciplina-destaque">
                    <BookOpen size={13} /> {selecionado.codigo} • {selecionado.titulo}
                  </span>
                  <span className="tag-duracao tag-duracao-destaque">
                    <Clock size={13} /> {selecionado.duracao}
                  </span>
                  {selecionado.temVideoCanal ? (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        padding: "3px 9px",
                        borderRadius: "12px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        background: "#fee2e2",
                        color: "#dc2626",
                        border: "1px solid #fca5a5",
                      }}
                    >
                      <YoutubeIcon size={14} /> Vídeo do Canal Luiz Eduardo
                    </span>
                  ) : (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        padding: "3px 9px",
                        borderRadius: "12px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        background: "#fef3c7",
                        color: "#b45309",
                        border: "1px solid #fde68a",
                      }}
                    >
                      <AlertCircle size={13} /> Aguardando gravação no Canal
                    </span>
                  )}
                </div>

                <h2 className="visualizador-aula-titulo">
                  {selecionado.ordem}. {selecionado.titulo}
                </h2>
                {selecionado.temVideoCanal && (
                  <p
                    style={{
                      marginTop: 4,
                      fontSize: "0.92rem",
                      color: "var(--texto-mutado)",
                      fontStyle: "italic",
                    }}
                  >
                    Tema no canal: “{selecionado.tituloCanal}”
                  </p>
                )}
              </div>

              {/* Player Iframe do YouTube */}
              <div className="video-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${selecionado.youtubeId}?rel=0`}
                  title={selecionado.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Rodapé da Aula em Destaque */}
              <div className="visualizador-rodape-aula">
                <div className="visualizador-descricao-bloco">
                  <h3>Sobre esta Preleção Teológica</h3>
                  <p>{selecionado.descricao}</p>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  <button
                    type="button"
                    className="btn btn-contorno btn-com-icone"
                    onClick={() => abrirModalCadastrar(selecionado.disciplinaId)}
                    title="Adicionar ou alterar o link do YouTube desta disciplina"
                  >
                    <Edit3 size={15} /> Vincular Vídeo
                  </button>
                  <button
                    type="button"
                    className="btn btn-contorno btn-com-icone"
                    onClick={() => abrirModalDownload(selecionado.youtubeId)}
                    style={{ borderColor: "#dc2626", color: "#dc2626", background: "#fef2f2" }}
                    title="Baixar esta videoaula em MP4, MP3 ou Capa HD"
                  >
                    <Download size={15} /> Baixar esta aula
                  </button>
                  <a
                    href={`https://www.youtube.com/watch?v=${selecionado.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-abrir-youtube-externo"
                  >
                    <ExternalLink size={15} /> Assistir no YouTube
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="vazio-com-icone">
              <Tv size={44} strokeWidth={1.5} className="vazio-icone" />
              <p className="vazio">Selecione uma videoaula abaixo para assistir.</p>
            </div>
          )}
        </section>
        {selecionado && (
          <CadernoAnotacoes
            disciplinaId={selecionado.disciplinaId}
            disciplinaTitulo={selecionado.titulo}
            codigoDisciplina={selecionado.codigo}
          />
        )}
      </div>

      {/* 2. ÁREA DA GRADE DE VÍDEOS (30 DISCIPLINAS ALINHADAS) */}
      <div className="secao-disciplinas-inferior" style={{ marginTop: 24 }}>
        <div className="secao-disciplinas-cabecalho">
          <div>
            <h3 className="secao-disciplinas-titulo">
              <Video size={20} className="icone-titulo" /> Grade Oficial de Videoaulas ({filtrados.length} de {VIDEOAULAS_OFICIAIS.length})
            </h3>
            <p className="secao-disciplinas-sub">
              {contagemCanal} aulas com gravação do canal Luiz Eduardo • {VIDEOAULAS_OFICIAIS.length - contagemCanal} aguardando gravação.
            </p>
          </div>

          <div className="pesquisa-disciplinas-box">
            <Search size={16} className="icone-pesquisa" />
            <input
              type="text"
              placeholder="Buscar por disciplina, código ou tema..."
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
              className="input-pesquisa-disciplinas"
            />
          </div>
        </div>

        {/* Abas de Filtro por Módulo */}
        <div className="filtro-modulos-pills">
          <button
            type="button"
            className={`btn ${moduloFiltro === 0 ? "btn-primario" : "btn-contorno"}`}
            onClick={() => setModuloFiltro(0)}
          >
            Todos ({VIDEOAULAS_OFICIAIS.length})
          </button>
          {MODULOS_SEBITAN.map((mod) => (
            <button
              key={mod.id}
              type="button"
              className={`btn ${moduloFiltro === mod.id ? "btn-primario" : "btn-contorno"}`}
              onClick={() => setModuloFiltro(mod.id)}
            >
              Módulo {mod.id} ({VIDEOAULAS_OFICIAIS.filter((v) => v.moduloId === mod.id).length})
            </button>
          ))}
        </div>

        {/* 3. LISTA VERTICAL DE 30 VIDEOAULAS (Igual Playbooks e Audiobooks) */}
        <div className="lista-disciplinas-vertical">
          {filtrados.map((aula) => {
            const ativo = selecionado?.id === aula.id;
            return (
              <div
                key={aula.id}
                className={`card item-disciplina-horizontal ${ativo ? "item-disciplina-ativo" : ""}`}
                onClick={() => selecionar(aula)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && selecionar(aula)}
              >
                {/* Coluna 1: Número Badge */}
                <div className="disciplina-numero-col">
                  <span className="numero-badge">{aula.ordem}</span>
                  <div className={`icone-som-status ${ativo ? "som-tocando" : ""}`}>
                    {aula.temVideoCanal ? <YoutubeIcon size={18} /> : <PlayCircle size={18} />}
                  </div>
                </div>

                {/* Coluna 2: Detalhes da Disciplina */}
                <div className="disciplina-detalhes-col">
                  <div className="disciplina-metas-topo">
                    <span className="tag-modulo-disciplina">{aula.modulo}</span>
                    <span className="tag-duracao-disciplina">
                      <Clock size={12} /> {aula.duracao}
                    </span>
                    {aula.temVideoCanal ? (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "10px",
                          background: "#fee2e2",
                          color: "#dc2626",
                        }}
                      >
                        <YoutubeIcon size={12} /> Canal Luiz Eduardo
                      </span>
                    ) : (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "10px",
                          background: "#fef3c7",
                          color: "#b45309",
                        }}
                      >
                        <AlertCircle size={12} /> Aguardando no Canal
                      </span>
                    )}
                  </div>

                  <h4 className="disciplina-titulo-texto">
                    {aula.codigo} • {aula.titulo}
                  </h4>

                  {aula.temVideoCanal && (
                    <div
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "var(--azul-800)",
                        marginBottom: 4,
                      }}
                    >
                      Tema: {aula.tituloCanal}
                    </div>
                  )}

                  <p className="disciplina-previa-texto">{aula.descricao}</p>
                </div>

                {/* Coluna 3: Botão de Ação */}
                <div className="disciplina-acao-col">
                  <button
                    className={`btn-selecionar-audio ${ativo ? "btn-selecionar-ativo" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      selecionar(aula);
                    }}
                  >
                    {ativo ? (
                      <>
                        <CheckCircle2 size={15} />
                        <span>Assistindo</span>
                      </>
                    ) : (
                      <>
                        <Play size={15} />
                        <span>Assistir Aula</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    className="btn-icone-editar-lista"
                    title={`Vincular / Trocar vídeo de ${aula.titulo}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      abrirModalCadastrar(aula.disciplinaId);
                    }}
                  >
                    <Edit3 size={15} />
                  </button>

                  <button
                    type="button"
                    className="btn-icone-download-lista"
                    title={`Baixar ${aula.titulo} (MP4 / MP3)`}
                    onClick={(e) => {
                      e.stopPropagation();
                      abrirModalDownload(aula.youtubeId);
                    }}
                  >
                    <Download size={15} />
                  </button>
                </div>
              </div>
            );
          })}

          {filtrados.length === 0 && (
            <div className="vazio-com-icone">
              <p className="vazio">Nenhuma videoaula encontrada para “{pesquisa}”.</p>
            </div>
          )}
        </div>
      </div>

      {/* 4. MODAL / FORMULÁRIO DE DOWNLOAD DE VÍDEOS DO YOUTUBE */}
      {modalDownloadAberto && (
        <div
          className="modal-download-overlay"
          onClick={() => setModalDownloadAberto(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-download-card" onClick={(e) => e.stopPropagation()}>
            {/* Cabeçalho do Modal */}
            <div className="modal-download-header">
              <h3>
                <YoutubeIcon size={20} /> Baixar Vídeo ou Áudio do YouTube
              </h3>
              <button
                type="button"
                className="btn-fechar-modal"
                onClick={() => setModalDownloadAberto(false)}
                title="Fechar (Esc)"
              >
                <X size={18} />
              </button>
            </div>

            {/* Corpo do Formulário */}
            <div className="modal-download-body">
              {/* Campo de Link do YouTube */}
              <div className="modal-download-campo-grupo">
                <label>
                  <span>Link do Vídeo ou ID do YouTube:</span>
                  {selecionado && (
                    <button
                      type="button"
                      onClick={() => setLinkDownload(`https://www.youtube.com/watch?v=${selecionado.youtubeId}`)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#2563eb",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      Usar aula atual ({selecionado.codigo})
                    </button>
                  )}
                </label>
                <div className="modal-download-input-container">
                  <input
                    type="text"
                    className="modal-download-input"
                    placeholder="Cole aqui o link do YouTube (ex: https://youtube.com/watch?v=...)"
                    value={linkDownload}
                    onChange={(e) => setLinkDownload(e.target.value)}
                    autoFocus
                  />
                  {linkDownload && (
                    <button
                      type="button"
                      className="btn btn-contorno"
                      style={{ padding: "0 12px", fontSize: "0.82rem" }}
                      onClick={() => setLinkDownload("")}
                    >
                      Limpar
                    </button>
                  )}
                </div>
              </div>

              {/* Preview do Vídeo Identificado */}
              {idDetectado ? (
                <div className="download-preview-card">
                  <div className="download-preview-thumb-box">
                    <img
                      src={`https://img.youtube.com/vi/${idDetectado}/mqdefault.jpg`}
                      alt="Thumbnail do vídeo"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${idDetectado}/hqdefault.jpg`;
                      }}
                    />
                    <span className="download-preview-thumb-badge">HD</span>
                  </div>
                  <div className="download-preview-info">
                    <h4 className="download-preview-titulo">
                      {aulaDetectada ? `${aulaDetectada.codigo} • ${aulaDetectada.titulo}` : "Vídeo do YouTube Detectado"}
                    </h4>
                    {aulaDetectada?.temVideoCanal && (
                      <p className="download-preview-sub" style={{ fontWeight: 600, color: "#b91c1c" }}>
                        Canal Luiz Eduardo: “{aulaDetectada.tituloCanal}”
                      </p>
                    )}
                    <p className="download-preview-sub">
                      ID: <code>{idDetectado}</code> • Pronto para download
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    padding: "16px",
                    background: "#f8fafc",
                    border: "1px dashed #cbd5e1",
                    borderRadius: "10px",
                    textAlign: "center",
                    color: "#64748b",
                    fontSize: "0.85rem",
                  }}
                >
                  Cole uma URL do YouTube acima para pré-visualizar e liberar os formatos de download.
                </div>
              )}

              {/* Seletor de Formato: MP4, MP3 ou Capa */}
              {idDetectado && (
                <>
                  <div className="modal-download-campo-grupo">
                    <label>Escolha o formato desejado:</label>
                    <div className="download-tabs-formato">
                      <button
                        type="button"
                        className={`download-tab-btn ${formatoDownload === "mp4" ? "ativo tab-vermelho" : ""}`}
                        onClick={() => setFormatoDownload("mp4")}
                      >
                        <Film size={16} /> Vídeo (MP4)
                      </button>
                      <button
                        type="button"
                        className={`download-tab-btn ${formatoDownload === "mp3" ? "ativo tab-vermelho" : ""}`}
                        onClick={() => setFormatoDownload("mp3")}
                      >
                        <Music size={16} /> Áudio (MP3)
                      </button>
                      <button
                        type="button"
                        className={`download-tab-btn ${formatoDownload === "capa" ? "ativo tab-vermelho" : ""}`}
                        onClick={() => setFormatoDownload("capa")}
                      >
                        <Image size={16} /> Capa HD (JPG)
                      </button>
                    </div>
                  </div>

                  {/* Opções de Download por Formato */}
                  <div className="download-opcoes-lista">
                    {formatoDownload === "mp4" && (
                      <>
                        <a
                          href={`https://en.savefrom.net/#url=https://youtube.com/watch?v=${idDetectado}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="download-opcao-item opcao-destaque"
                        >
                          <div className="download-opcao-icone-titulo">
                            <div className="download-opcao-icone-circulo" style={{ color: "#dc2626" }}>
                              <Download size={18} />
                            </div>
                            <div className="download-opcao-titulos">
                              <h4>Baixar Vídeo MP4 (SaveFrom)</h4>
                              <p>Opção recomendada • Alta resolução (1080p / 720p)</p>
                            </div>
                          </div>
                          <ExternalLink size={16} />
                        </a>

                        <a
                          href={`https://www.ssyoutube.com/watch?v=${idDetectado}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="download-opcao-item"
                        >
                          <div className="download-opcao-icone-titulo">
                            <div className="download-opcao-icone-circulo" style={{ color: "#2563eb" }}>
                              <Film size={18} />
                            </div>
                            <div className="download-opcao-titulos">
                              <h4>Servidor Alternativo (SSYouTube)</h4>
                              <p>Atalho direto sem anúncios • Download rápido</p>
                            </div>
                          </div>
                          <ExternalLink size={16} />
                        </a>

                        <a
                          href={`https://www.y2mate.com/youtube/${idDetectado}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="download-opcao-item"
                        >
                          <div className="download-opcao-icone-titulo">
                            <div className="download-opcao-icone-circulo" style={{ color: "#059669" }}>
                              <Download size={18} />
                            </div>
                            <div className="download-opcao-titulos">
                              <h4>Servidor Y2Mate (Escolha de Qualidade)</h4>
                              <p>Permite selecionar resolução personalizada (360p até 1080p)</p>
                            </div>
                          </div>
                          <ExternalLink size={16} />
                        </a>
                      </>
                    )}

                    {formatoDownload === "mp3" && (
                      <>
                        <a
                          href={`https://www.y2mate.com/youtube-mp3/${idDetectado}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="download-opcao-item opcao-destaque"
                        >
                          <div className="download-opcao-icone-titulo">
                            <div className="download-opcao-icone-circulo" style={{ color: "#dc2626" }}>
                              <Music size={18} />
                            </div>
                            <div className="download-opcao-titulos">
                              <h4>Converter e Baixar Áudio MP3 (Y2Mate)</h4>
                              <p>Ideal para ouvir no celular • Qualidade até 320 kbps</p>
                            </div>
                          </div>
                          <ExternalLink size={16} />
                        </a>

                        <a
                          href={`https://en.savefrom.net/#url=https://youtube.com/watch?v=${idDetectado}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="download-opcao-item"
                        >
                          <div className="download-opcao-icone-titulo">
                            <div className="download-opcao-icone-circulo" style={{ color: "#2563eb" }}>
                              <Download size={18} />
                            </div>
                            <div className="download-opcao-titulos">
                              <h4>Servidor SaveFrom Áudio</h4>
                              <p>Extração rápida de áudio estéreo</p>
                            </div>
                          </div>
                          <ExternalLink size={16} />
                        </a>
                      </>
                    )}

                    {formatoDownload === "capa" && (
                      <>
                        <a
                          href={`https://img.youtube.com/vi/${idDetectado}/maxresdefault.jpg`}
                          target="_blank"
                          rel="noopener noreferrer"
                          download={`capa-youtube-${idDetectado}.jpg`}
                          className="download-opcao-item opcao-destaque"
                        >
                          <div className="download-opcao-icone-titulo">
                            <div className="download-opcao-icone-circulo" style={{ color: "#dc2626" }}>
                              <Image size={18} />
                            </div>
                            <div className="download-opcao-titulos">
                              <h4>Baixar Capa em Resolução Máxima (1280x720)</h4>
                              <p>Download direto da imagem original HD oficial do YouTube</p>
                            </div>
                          </div>
                          <Download size={16} />
                        </a>

                        <a
                          href={`https://img.youtube.com/vi/${idDetectado}/hqdefault.jpg`}
                          target="_blank"
                          rel="noopener noreferrer"
                          download={`capa-hq-${idDetectado}.jpg`}
                          className="download-opcao-item"
                        >
                          <div className="download-opcao-icone-titulo">
                            <div className="download-opcao-icone-circulo" style={{ color: "#64748b" }}>
                              <Image size={18} />
                            </div>
                            <div className="download-opcao-titulos">
                              <h4>Baixar Capa em Resolução Média (HQ)</h4>
                              <p>Tamanho reduzido para uso em miniaturas</p>
                            </div>
                          </div>
                          <Download size={16} />
                        </a>
                      </>
                    )}
                  </div>

                  {/* Comando yt-dlp para terminal */}
                  <div className="modal-download-campo-grupo" style={{ marginTop: 6 }}>
                    <label style={{ fontSize: "0.8rem", color: "#64748b" }}>
                      Ou baixe via terminal (yt-dlp):
                    </label>
                    <div className="download-terminal-box">
                      <span className="download-terminal-codigo">
                        yt-dlp -f best "https://youtu.be/{idDetectado}"
                      </span>
                      <button
                        type="button"
                        className="btn-copiar-comando"
                        onClick={() => copiarComandoYtDlp(idDetectado)}
                        title="Copiar comando completo para o terminal"
                      >
                        {comandoCopiado ? (
                          <>
                            <Check size={14} style={{ color: "#4ade80" }} /> Copiado!
                          </>
                        ) : (
                          <>
                            <Copy size={14} /> Copiar
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 5. MODAL / FORMULÁRIO DE VINCULAR / ADICIONAR VÍDEO DO YOUTUBE */}
      {modalCadastrarAberto && (
        <div
          className="modal-download-overlay"
          onClick={() => setModalCadastrarAberto(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-download-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-download-header">
              <h3>
                <PlusCircle size={20} /> Vincular / Adicionar Vídeo do YouTube
              </h3>
              <button
                type="button"
                className="btn-fechar-modal"
                onClick={() => setModalCadastrarAberto(false)}
                title="Fechar (Esc)"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSalvarVideo} className="modal-download-body">
              {erroCadastrar && (
                <div style={{ padding: "8px 12px", background: "#fee2e2", color: "#dc2626", borderRadius: 8, fontSize: "0.85rem", fontWeight: 600 }}>
                  {erroCadastrar}
                </div>
              )}
              {sucessoCadastrar && (
                <div style={{ padding: "8px 12px", background: "#dcfce7", color: "#166534", borderRadius: 8, fontSize: "0.85rem", fontWeight: 600 }}>
                  {sucessoCadastrar}
                </div>
              )}

              {/* Selecionar Disciplina */}
              <div className="modal-download-campo-grupo">
                <label htmlFor="select-disciplina">Selecione a Disciplina ({GRADE_CURRICULAR.length} do currículo):</label>
                <select
                  id="select-disciplina"
                  className="input-download-youtube"
                  value={disciplinaAlvo}
                  onChange={(e) => {
                    const novoId = e.target.value;
                    setDisciplinaAlvo(novoId);
                    const a = listaAulas.find((x) => x.disciplinaId === novoId);
                    if (a) {
                      setLinkCadastrar(a.temVideoCanal ? `https://www.youtube.com/watch?v=${a.youtubeId}` : "");
                      setTituloCadastrar(a.temVideoCanal ? a.tituloCanal : `Aula: ${a.titulo}`);
                      setDuracaoCadastrar(a.temVideoCanal ? a.duracao : "8:00");
                    }
                  }}
                  style={{ cursor: "pointer", background: "#fff" }}
                >
                  {GRADE_CURRICULAR.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.ordem}. {d.codigo} - {d.titulo} ({d.modulo})
                    </option>
                  ))}
                </select>
              </div>

              {/* Link do YouTube */}
              <div className="modal-download-campo-grupo">
                <label htmlFor="input-link-youtube">Cole o Link do Vídeo ou ID do YouTube:</label>
                <input
                  id="input-link-youtube"
                  type="text"
                  placeholder="Ex: https://www.youtube.com/watch?v=... ou https://youtu.be/..."
                  value={linkCadastrar}
                  onChange={(e) => setLinkCadastrar(e.target.value)}
                  className="input-download-youtube"
                  required
                />
                <span style={{ fontSize: "0.76rem", color: "#64748b" }}>
                  Suporta qualquer formato de link do YouTube (watch, youtu.be, shorts ou ID).
                </span>
              </div>

              {/* Preview da miniatura se detectado */}
              {idCadastrarDetectado && (
                <div className="download-previa-video" style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <img
                    src={`https://img.youtube.com/vi/${idCadastrarDetectado}/mqdefault.jpg`}
                    alt="Miniatura detectada"
                    className="download-previa-thumb"
                    style={{ width: 110, height: 62, objectFit: "cover", borderRadius: 6 }}
                  />
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "#16a34a", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
                      <Check size={14} /> Vídeo detectado (ID: {idCadastrarDetectado})
                    </span>
                    <a
                      href={`https://www.youtube.com/watch?v=${idCadastrarDetectado}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.78rem", color: "#2563eb", textDecoration: "underline", display: "inline-flex", alignItems: "center", gap: 3, marginTop: 2 }}
                    >
                      Testar no YouTube <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              )}

              {/* Título / Tema do Vídeo */}
              <div className="modal-download-campo-grupo">
                <label htmlFor="input-titulo-canal">Título / Tema da Aula:</label>
                <input
                  id="input-titulo-canal"
                  type="text"
                  placeholder="Ex: Introdução à Bibliologia e Cânon"
                  value={tituloCadastrar}
                  onChange={(e) => setTituloCadastrar(e.target.value)}
                  className="input-download-youtube"
                />
              </div>

              {/* Duração aproximada */}
              <div className="modal-download-campo-grupo">
                <label htmlFor="input-duracao">Duração aproximada:</label>
                <input
                  id="input-duracao"
                  type="text"
                  placeholder="Ex: 8:45 ou 15 min"
                  value={duracaoCadastrar}
                  onChange={(e) => setDuracaoCadastrar(e.target.value)}
                  className="input-download-youtube"
                />
              </div>

              {/* Botões de Ação */}
              <div style={{ display: "flex", gap: 10, justifyContent: "space-between", marginTop: 8, flexWrap: "wrap" }}>
                {contagemPersonalizados > 0 && (
                  <button
                    type="button"
                    onClick={handleRestaurarPadrao}
                    className="btn btn-contorno"
                    style={{ fontSize: "0.8rem", color: "#dc2626", borderColor: "#fca5a5" }}
                    title="Restaura todos os vídeos para a configuração original"
                  >
                    <RotateCcw size={14} /> Restaurar Padrão
                  </button>
                )}
                <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
                  <button
                    type="button"
                    className="btn btn-contorno"
                    onClick={() => setModalCadastrarAberto(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primario"
                    style={{ background: "#dc2626", borderColor: "#dc2626" }}
                  >
                    <CheckCircle2 size={16} /> Salvar e Vincular
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
