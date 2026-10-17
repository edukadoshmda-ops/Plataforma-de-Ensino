// src/services/progressoEstudoService.js
// Gestão de Progresso de Estudos, Travas Pedagógicas e Limite de Tentativas Diárias

const STORAGE_PROGRESSO_KEY = "teologia_progresso_estudos_v2";
const STORAGE_TENTATIVAS_KEY = "teologia_tentativas_provas_v2";
const STORAGE_AVALIACOES_KEY = "teologia_avaliacoes_p1_p2_v2";

/**
 * Carrega o mapa geral de progresso do aluno (PDF, Áudio, Vídeo por disciplina)
 */
export function carregarProgressoGeral() {
  try {
    const raw = localStorage.getItem(STORAGE_PROGRESSO_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error("Erro ao carregar progresso:", e);
    return {};
  }
}

/**
 * Obtém o progresso individual de uma disciplina
 */
export function getProgressoDisciplina(disciplinaId) {
  const geral = carregarProgressoGeral();
  const disc = geral[disciplinaId] || { pdf: false, audio: false, video: false };
  const liberada = Boolean(disc.pdf && disc.audio && disc.video);
  return {
    pdf: Boolean(disc.pdf),
    audio: Boolean(disc.audio),
    video: Boolean(disc.video),
    liberada,
    dataPdf: disc.dataPdf || null,
    dataAudio: disc.dataAudio || null,
    dataVideo: disc.dataVideo || null,
  };
}

/**
 * Marca uma das etapas pedagógicas como concluída
 * @param {string} disciplinaId 
 * @param {"pdf" | "audio" | "video"} tipo 
 * @param {boolean} valor 
 */
export function marcarProgresso(disciplinaId, tipo, valor = true) {
  const geral = carregarProgressoGeral();
  const atual = geral[disciplinaId] || { pdf: false, audio: false, video: false };

  const dataIso = new Date().toISOString();
  atual[tipo] = valor;
  if (tipo === "pdf") atual.dataPdf = valor ? dataIso : null;
  if (tipo === "audio") atual.dataAudio = valor ? dataIso : null;
  if (tipo === "video") atual.dataVideo = valor ? dataIso : null;

  geral[disciplinaId] = atual;
  localStorage.setItem(STORAGE_PROGRESSO_KEY, JSON.stringify(geral));

  // Dispara evento customizado para reatividade imediata no app
  window.dispatchEvent(new CustomEvent("sebitan_progresso_atualizado", { detail: { disciplinaId, tipo, valor } }));
  return getProgressoDisciplina(disciplinaId);
}

/**
 * Obtém as tentativas da data de hoje para uma prova específica (P1 ou P2)
 */
export function getTentativasHoje(disciplinaId, tipoProva = "p1") {
  try {
    const raw = localStorage.getItem(STORAGE_TENTATIVAS_KEY);
    const mapa = raw ? JSON.parse(raw) : {};
    const chave = `${disciplinaId}_${tipoProva}`;
    const tentativas = mapa[chave] || [];

    const hoje = new Date().toDateString();
    const tentativasHoje = tentativas.filter((t) => {
      const d = new Date(typeof t === "string" ? t : t.data);
      return d.toDateString() === hoje;
    });

    return tentativasHoje;
  } catch (e) {
    console.error("Erro ao verificar tentativas:", e);
    return [];
  }
}

/**
 * Obtém o histórico de notas de P1 e P2 para uma disciplina
 */
export function getNotasDisciplina(disciplinaId) {
  try {
    const raw = localStorage.getItem(STORAGE_AVALIACOES_KEY);
    const mapa = raw ? JSON.parse(raw) : {};
    return mapa[disciplinaId] || {
      p1: null,
      p2: null,
      mediaFinal: null,
      situacao: "Pendente",
    };
  } catch (e) {
    return { p1: null, p2: null, mediaFinal: null, situacao: "Pendente" };
  }
}

/**
 * Validação rigorosa para autorização de prova:
 * 1. Todos os 3 passos pedagógicos devem estar concluídos (PDF + Áudio + Vídeo).
 * 2. Máximo de 2 tentativas no mesmo dia caso ainda não tenha atingido a média (7,0).
 */
export function validarPermissaoProva(disciplinaId, tipoProva = "p1") {
  const progresso = getProgressoDisciplina(disciplinaId);

  // 1. Pré-requisito de estudo
  if (!progresso.liberada) {
    const pendentes = [];
    if (!progresso.pdf) pendentes.push("Leitura do PDF Oficial");
    if (!progresso.audio) pendentes.push("Audição da Aula em Áudio");
    if (!progresso.video) pendentes.push("Visualização da Videoaula");

    return {
      permitido: false,
      bloqueio: "pre_requisito",
      tituloBloqueio: "Estudo Pré-requisito Incompleto",
      mensagem: `Para liberar a avaliação, conclua as etapas obrigatórias: ${pendentes.join(", ")}.`,
      progresso,
    };
  }

  // 2. Verificar tentativas de hoje
  const tentativasHoje = getTentativasHoje(disciplinaId, tipoProva);
  const notas = getNotasDisciplina(disciplinaId);
  const notaAtual = notas[tipoProva]?.nota;

  // Se já foi aprovado com nota >= 7.0, pode consultar ou refazer como reforço
  const jaAprovado = notaAtual !== undefined && notaAtual !== null && notaAtual >= 7.0;

  if (tentativasHoje.length >= 2 && !jaAprovado) {
    return {
      permitido: false,
      bloqueio: "limite_diario",
      tituloBloqueio: "Limite de 2 Tentativas Diárias Atingido",
      mensagem: "Você realizou 2 tentativas hoje para esta prova e ainda não atingiu a média 7,0. Para fixar bem os conceitos, revise a apostila e a videoaula. A prova será liberada novamente amanhã.",
      tentativasHoje: tentativasHoje.length,
      tentativasRestantes: 0,
      progresso,
    };
  }

  return {
    permitido: true,
    bloqueio: null,
    jaAprovado,
    notaAtual,
    tentativasHoje: tentativasHoje.length,
    tentativasRestantes: Math.max(0, 2 - tentativasHoje.length),
    progresso,
  };
}

/**
 * Registra a realização de uma prova (P1 ou P2)
 */
export function registrarResultadoProva(disciplinaId, tipoProva, resultado) {
  // 1. Salva a tentativa
  try {
    const rawTentativas = localStorage.getItem(STORAGE_TENTATIVAS_KEY);
    const mapaTentativas = rawTentativas ? JSON.parse(rawTentativas) : {};
    const chave = `${disciplinaId}_${tipoProva}`;
    if (!mapaTentativas[chave]) mapaTentativas[chave] = [];
    mapaTentativas[chave].push({
      data: new Date().toISOString(),
      nota: resultado.nota,
      acertos: resultado.acertos,
      total: resultado.total,
    });
    localStorage.setItem(STORAGE_TENTATIVAS_KEY, JSON.stringify(mapaTentativas));
  } catch (e) {
    console.error("Erro ao registrar tentativa:", e);
  }

  // 2. Salva e atualiza o histórico de P1 / P2 e calcula a Média Final
  try {
    const rawAvaliacoes = localStorage.getItem(STORAGE_AVALIACOES_KEY);
    const mapaAvaliacoes = rawAvaliacoes ? JSON.parse(rawAvaliacoes) : {};
    const disc = mapaAvaliacoes[disciplinaId] || { p1: null, p2: null };

    disc[tipoProva] = {
      nota: resultado.nota,
      acertos: resultado.acertos,
      total: resultado.total,
      data: resultado.data || new Date().toLocaleDateString("pt-BR"),
      situacao: resultado.nota >= 7.0 ? "Aprovado" : "Recuperação",
    };

    // Se possui as duas notas, calcula a média
    if (disc.p1?.nota !== undefined && disc.p2?.nota !== undefined) {
      const media = Number(((disc.p1.nota + disc.p2.nota) / 2).toFixed(1));
      disc.mediaFinal = media;
      disc.situacaoFinal = media >= 7.0 ? "Aprovado" : "Recuperação";
    } else if (disc.p1?.nota !== undefined) {
      disc.mediaFinal = disc.p1.nota;
      disc.situacaoFinal = "Cursando P2";
    }

    mapaAvaliacoes[disciplinaId] = disc;
    localStorage.setItem(STORAGE_AVALIACOES_KEY, JSON.stringify(mapaAvaliacoes));

    window.dispatchEvent(new CustomEvent("sebitan_avaliacao_atualizada", { detail: { disciplinaId, tipoProva, disc } }));
    return disc;
  } catch (e) {
    console.error("Erro ao atualizar avaliação P1/P2:", e);
    return null;
  }
}
