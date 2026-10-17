// src/services/sebitanAgentService.js
// Motor de Inteligência e RAG do SEBITAN (Seminário Bíblico e Teológico de Ananindeua)
// Indexa e consulta as 30 apostilas integrais (+250k palavras), 300 questões de prova e dados da instituição.

import { apostilasTextoCompleto } from "../data/apostilasTextoCompleto.js";
import { provasDisciplinas } from "../data/provasData.js";
import { pdfs } from "../data/content.js";

// Normalizador de texto para pesquisa (sem acentos, minúsculas)
function normalizarTexto(texto) {
  if (!texto) return "";
  return texto
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Stop words comuns da língua portuguesa
const STOP_WORDS = new Set([
  "a", "as", "o", "os", "de", "do", "da", "dos", "das", "em", "no", "na",
  "nos", "nas", "por", "pelo", "pela", "pelos", "pelas", "com", "sem", "sob",
  "sobre", "e", "ou", "mas", "que", "se", "um", "uma", "uns", "umas", "para",
  "como", "qual", "quais", "quem", "quando", "onde", "porque", "por que",
  "eh", "era", "eram", "sao", "foi", "foram", "ser", "estar", "ter", "ha"
]);

// Distância de edição (Levenshtein) para tolerância a erros de digitação (ex: "biblologia", "bbliologia")
function distanciaLevenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const matrix = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[a.length][b.length];
}

// Vocabulário base das disciplinas e capítulos para correção ortográfica automática na busca
const VOCABULARIO_TEOLOGICO = (() => {
  const palavras = new Set();
  (apostilasTextoCompleto || []).forEach((a) => {
    normalizarTexto(a?.titulo)
      .split(/\s+/)
      .filter((w) => w.length >= 4 && !STOP_WORDS.has(w))
      .forEach((w) => palavras.add(w));
    (a?.capitulos || []).forEach((c) => {
      normalizarTexto(c?.titulo)
        .split(/\s+/)
        .filter((w) => w.length >= 5 && !STOP_WORDS.has(w))
        .forEach((w) => palavras.add(w));
    });
  });
  (provasDisciplinas || []).forEach((d) => {
    normalizarTexto(d?.titulo)
      .split(/\s+/)
      .filter((w) => w.length >= 4 && !STOP_WORDS.has(w))
      .forEach((w) => palavras.add(w));
  });
  return Array.from(palavras);
})();

function extrairTermos(texto) {
  const norm = normalizarTexto(texto);
  const baseTermos = norm
    .split(/\s+/)
    .filter((t) => t.length > 2 && !STOP_WORDS.has(t));

  const termosExpandidos = new Set(baseTermos);

  baseTermos.forEach((t) => {
    if (t.length >= 5 && !VOCABULARIO_TEOLOGICO.includes(t)) {
      const maxDist = t.length >= 8 ? 2 : 1;
      VOCABULARIO_TEOLOGICO.forEach((vocab) => {
        if (Math.abs(vocab.length - t.length) <= maxDist) {
          if (distanciaLevenshtein(t, vocab) <= maxDist) {
            termosExpandidos.add(vocab);
          }
        }
      });
    }
  });

  return Array.from(termosExpandidos);
}

// Respostas institucionais para perguntas sobre a plataforma SEBITAN
const FAQ_INSTITUCIONAL = [
  {
    termos: ["certificado", "diploma", "conclusao", "formar", "emissao"],
    titulo: "Certificados e Conclusão de Curso",
    resposta: `A **Teologia Acessível** emite certificado oficial de conclusão de Curso Teológico Livre.
    
Para ter direito ao certificado com a respectiva carga horária e chancela do seminário:
1. Conclua as avaliações oficiais na aba **Testes** da plataforma com média igual ou superior a 7,0.
2. Certifique-se de que sua matrícula e dados cadastrais estejam preenchidos corretamente na aba **Matrícula**.
3. O certificado é gerado com validade eclesiástica e de livre formação ministerial, reconhecido por convenções e igrejas parceiras.
Em caso de dúvidas sobre a via impressa ou validação eclesiástica, contate a Secretaria no WhatsApp: **(91) 99383-7093**.`
  },
  {
    termos: ["matricula", "pagamento", "inscricao", "custo", "mensalidade", "valor", "pix"],
    titulo: "Matrícula e Acesso à Plataforma",
    resposta: `O acesso à Teologia Acessível foi concebido para tornar a formação bíblica mais simples, profunda e acessível.
    
- O cadastro inicial dá acesso às matérias, playbooks e biblioteca teológica.
- Para liberar a realização das 30 provas oficiais com gabarito avaliativo e a emissão do certificado, o aluno formaliza a inscrição na aba **Matrícula / Pagamento**.
- O pagamento é processado com total segurança via PIX ou cartão de crédito.
- O suporte financeiro e confirmação manual pode ser feito com a secretaria: **(91) 99383-7093**.`
  },
  {
    termos: ["contato", "secretaria", "whatsapp", "telefone", "falar", "ajuda", "suporte", "pastor"],
    titulo: "Atendimento e Secretaria Acadêmica",
    resposta: `Você pode entrar em contato direto com a tutoria e secretaria da Teologia Acessível:
    
- **WhatsApp Oficial:** +55 (91) 99383-7093
- **Instituição:** Teologia Acessível
- **Atendimento:** Segunda a Sábado para esclarecimento de dúvidas acadêmicas, remessa de materiais e orientação ministerial.`
  },
  {
    termos: ["audiobook", "ouvir", "audio", "narrador", "voz"],
    titulo: "Audiobooks e Narração Inteligente",
    resposta: `A plataforma conta com a aba **Audiobooks**, onde todas as matérias contam com áudios didáticos e narradores integrados.
Você pode ouvir as aulas enquanto viaja, trabalha ou realiza atividades, além de acompanhar o texto integral sincronizado na tela do leitor inteligente.`
  }
];

function obterContextoAcademicoAluno() {
  try {
    const usuario = JSON.parse(sessionStorage.getItem("ta_usuario") || localStorage.getItem("ta_usuario_persistido") || "null");
    const matricula = JSON.parse(localStorage.getItem("ta_matricula") || "null");
    const progresso = JSON.parse(localStorage.getItem("teologia_progresso_estudos_v2") || "{}");
    const avaliacoes = JSON.parse(localStorage.getItem("teologia_avaliacoes_p1_p2_v2") || "{}");

    const etapasTotais = Object.keys(progresso).length;
    const etapasCompletas = Object.values(progresso).filter((disc) => disc && disc.pdf && disc.audio && disc.video).length;
    const avaliadas = Object.values(avaliacoes).filter((disc) => disc && ((disc.p1 && disc.p1.nota !== null) || (disc.p2 && disc.p2.nota !== null))).length;

    const medias = Object.values(avaliacoes)
      .map((disc) => disc?.mediaFinal)
      .filter((valor) => typeof valor === "number" && !Number.isNaN(valor));
    const mediaGeral = medias.length ? Number((medias.reduce((soma, valor) => soma + valor, 0) / medias.length).toFixed(1)) : null;

    return {
      nome: usuario?.nome || "Aluno",
      matricula: matricula?.matricula || "SEB-EM-ANDAMENTO",
      statusPagamento: matricula?.pagamento === "pago" || matricula?.status_pagamento === "pago" ? "pago" : "pendente",
      etapasTotais,
      etapasCompletas,
      avaliadas,
      mediaGeral,
      ativo: true,
    };
  } catch {
    return { ativo: false };
  }
}

// Extrai todas as questões de uma disciplina (compatível com prova1/prova2 e lista direta)
function obterQuestoesDaDisciplina(disciplina) {
  if (!disciplina) return [];
  const lista = [];
  if (Array.isArray(disciplina.questoes)) {
    lista.push(...disciplina.questoes);
  }
  if (Array.isArray(disciplina.prova1?.questoes)) {
    lista.push(...disciplina.prova1.questoes);
  }
  if (Array.isArray(disciplina.prova2?.questoes)) {
    lista.push(...disciplina.prova2.questoes);
  }
  return lista;
}

function formatarRespostaCorreta(q) {
  if (!q) return "";
  if (typeof q.respostaCorreta === "number" && Array.isArray(q.opcoes) && q.opcoes[q.respostaCorreta]) {
    const letra = String.fromCharCode(65 + q.respostaCorreta);
    return `${letra}) ${q.opcoes[q.respostaCorreta]}`;
  }
  return String(q.respostaCorreta ?? "");
}

// Função principal de busca RAG no compêndio do SEBITAN
export function pesquisarCompendioSebitan(pergunta, filtroModulo = null) {
  const termos = extrairTermos(pergunta);
  if (termos.length === 0) {
    return {
      topPassagens: [],
      topQuestoes: [],
      faqInstitucional: null
    };
  }

  // 1. Verificar FAQ Institucional
  let faqEncontrado = null;
  for (const faq of FAQ_INSTITUCIONAL) {
    const score = faq.termos.reduce((acc, t) => {
      return acc + (termos.some((termo) => termo.includes(t) || t.includes(termo)) ? 1 : 0);
    }, 0);
    if (score >= 1) {
      faqEncontrado = faq;
      break;
    }
  }

  // 2. Buscar em Questões de Provas (Gabaritos comentados do SEBITAN)
  const questoesScores = [];
  (provasDisciplinas || []).forEach((disciplina) => {
    if (filtroModulo && filtroModulo !== "todos" && disciplina?.modulo !== filtroModulo) {
      return;
    }
    const questoes = obterQuestoesDaDisciplina(disciplina);
    const tituloDiscNorm = normalizarTexto(disciplina?.titulo);

    questoes.forEach((q) => {
      let score = 0;
      const enunciadoNorm = normalizarTexto(q?.enunciado);
      const explicacaoNorm = normalizarTexto(q?.explicacao);

      termos.forEach((termo) => {
        if (tituloDiscNorm.includes(termo)) score += 8;
        if (enunciadoNorm.includes(termo)) score += 6;
        if (explicacaoNorm.includes(termo)) score += 4;
      });

      if (score > 0) {
        questoesScores.push({
          disciplina: disciplina.titulo,
          modulo: disciplina.modulo,
          questaoId: q.id,
          tipo: q.tipo,
          enunciado: q.enunciado,
          respostaCorreta: formatarRespostaCorreta(q),
          explicacao: q.explicacao,
          score
        });
      }
    });
  });

  questoesScores.sort((a, b) => b.score - a.score);
  const topQuestoes = questoesScores.slice(0, 4);

  // 3. Buscar no Texto Integral das Apostilas
  const passagensScores = [];
  (apostilasTextoCompleto || []).forEach((apostila) => {
    if (filtroModulo && filtroModulo !== "todos" && apostila?.modulo !== filtroModulo) {
      return;
    }

    const tituloNorm = normalizarTexto(apostila?.titulo);
    const moduloNorm = normalizarTexto(apostila?.modulo);

    let baseApostilaScore = 0;
    termos.forEach((t) => {
      if (tituloNorm.includes(t)) baseApostilaScore += 12;
      if (moduloNorm.includes(t)) baseApostilaScore += 5;
    });

    (apostila?.capitulos || []).forEach((cap) => {
      const capNorm = normalizarTexto(cap?.titulo);
      let baseCapScore = 0;
      termos.forEach((t) => {
        if (capNorm.includes(t)) baseCapScore += 8;
      });

      (cap?.paragrafos || []).forEach((paragrafo, pIdx) => {
        const pNorm = normalizarTexto(paragrafo);
        let pScore = baseApostilaScore + baseCapScore;

        let termosContidos = 0;
        termos.forEach((t) => {
          if (pNorm.includes(t)) {
            pScore += 5;
            termosContidos++;
          }
        });

        // Recompensa para parágrafos que contêm múltiplos termos da busca
        if (termosContidos >= 2) pScore += 10;
        if (termosContidos >= 3) pScore += 20;

        if (pScore > 10) {
          passagensScores.push({
            apostilaId: apostila.id,
            tituloApostila: apostila.titulo,
            modulo: apostila.modulo,
            capituloId: cap.id,
            tituloCapitulo: cap.titulo,
            paragrafoIdx: pIdx + 1,
            texto: paragrafo,
            score: pScore
          });
        }
      });
    });
  });

  passagensScores.sort((a, b) => b.score - a.score);
  const topPassagens = passagensScores.slice(0, 5);

  return {
    topPassagens,
    topQuestoes,
    faqInstitucional: faqEncontrado
  };
}

// Gerador de síntese teológica determinística (Offline-first de alta precisão)
function gerarRespostaLocal(pergunta, contextoRAG, contextoAluno = null) {
  const { topPassagens, topQuestoes, faqInstitucional } = contextoRAG;

  let contextoAlunoResumo = "";
  if (contextoAluno?.ativo) {
    const focoEstudo = contextoAluno.etapasCompletas >= 2 ? "você já iniciou bem a jornada" : "você está começando a caminhada acadêmica";
    contextoAlunoResumo = `\n### 🧭 Contexto do aluno\nOlá, ${contextoAluno.nome}! ${focoEstudo}. Sua matrícula está ${contextoAluno.statusPagamento === "pago" ? "ativa com pagamento confirmado" : "em andamento e precisa ser concluída"}. Você já concluiu ${contextoAluno.etapasCompletas} de ${contextoAluno.etapasTotais || 30} etapas de estudo e ${contextoAluno.avaliadas || 0} avaliações registradas.\n\n`;
  }

  // Se houver FAQ institucional prioritário
  if (faqInstitucional && topPassagens.length === 0) {
    return {
      texto: `${contextoAlunoResumo}Olá! Com base nas diretrizes oficiais da **Teologia Acessível**, segue a resposta:\n\n${faqInstitucional.resposta}`,
      fontes: [
        {
          titulo: faqInstitucional.titulo,
          modulo: "Regulamento Acadêmico",
          tipo: "Institucional"
        }
      ]
    };
  }

  // Se não encontrou dados com pontuação mínima
  if (topPassagens.length === 0 && topQuestoes.length === 0 && !faqInstitucional) {
    return {
      texto: `${contextoAlunoResumo}Paz do Senhor! Como Tutor Especialista da **Teologia Acessível**, pesquisei em todo o compêndio das 30 disciplinas e nas 300 questões de provas, mas não localizei uma correspondência exata para a expressão consultada.\n\n💡 **Dicas para uma busca teológica mais precisa:**\n- Experimente citar a doutrina ou matéria (ex: *Homilética, Hermenêutica, Teontologia, Cristologia, Pneumatologia, Escatologia, Soteriologia*).\n- Pergunte sobre temas específicos (ex: *\"Diferença entre sermão temático e expositivo\"*, *\"Argumentos para a existência de Deus\"*, *\"Regras de vestuário nos tempos bíblicos\"*, *\"Os 400 anos do período interbíblico\"*).\n- Você também pode filtrar pela disciplina ou consultar as questões de provas!`,
      fontes: []
    };
  }

  const fontes = [];
  const fontesMap = new Set();

  let respostaCorpo = "";

  // 1. Resposta Institucional mesclada se houver
  if (faqInstitucional) {
    respostaCorpo += `### 📌 Informação Oficial\n${faqInstitucional.resposta}\n\n---\n\n`;
    fontes.push({
      titulo: faqInstitucional.titulo,
      modulo: "Secretaria Acadêmica",
      tipo: "Institucional"
    });
  }

  // 2. Fundamentação Doutrinária com Base nas Apostilas Oficiais
  if (topPassagens.length > 0) {
    const melhorPassagem = topPassagens[0];
    const disciplinaPrincipal = melhorPassagem.tituloApostila;

    respostaCorpo += `### 📖 Fundamentação Oficial: ${disciplinaPrincipal}\n`;
    respostaCorpo += `De acordo com a apostila acadêmica de **${melhorPassagem.tituloApostila}** (${melhorPassagem.modulo}), no estudo sobre *${melhorPassagem.tituloCapitulo}*:\n\n`;

    // Citação destacada
    respostaCorpo += `> *\"${melhorPassagem.texto.length > 480 ? melhorPassagem.texto.substring(0, 480) + "..." : melhorPassagem.texto}\"*\n\n`;

    // Se houver passagens complementares da mesma disciplina ou relacionadas
    if (topPassagens.length > 1) {
      respostaCorpo += `#### 🔍 Aprofundamento do Compêndio:\n`;
      const passagensComplementares = topPassagens.slice(1, 3);
      passagensComplementares.forEach((p) => {
        respostaCorpo += `- **${p.tituloApostila}** (${p.tituloCapitulo}):\n  ${p.texto.length > 280 ? p.texto.substring(0, 280) + "..." : p.texto}\n\n`;
      });
    }

    topPassagens.forEach((p) => {
      const key = `${p.tituloApostila}-${p.tituloCapitulo}`;
      if (!fontesMap.has(key)) {
        fontesMap.add(key);
        fontes.push({
          titulo: p.tituloApostila,
          modulo: p.modulo,
          detalhe: p.tituloCapitulo,
          tipo: "Apostila Oficial"
        });
      }
    });
  }

  // 3. Questões de Provas Oficiais Relacionadas ao Tema
  if (topQuestoes.length > 0) {
    respostaCorpo += `\n---\n### 📝 Aplicação Avaliativa (Questões de Provas)\n`;
    respostaCorpo += `Este tema é cobrado oficialmente nas avaliações do curso. Veja como a banca examinadora aborda o assunto:\n\n`;

    topQuestoes.slice(0, 2).forEach((q, i) => {
      respostaCorpo += `**Questão ${i + 1} (${q.disciplina} - ${q.tipo === "certo_errado" ? "Certo ou Errado" : "Múltipla Escolha"}):**\n`;
      respostaCorpo += `*\"${q.enunciado}\"*\n\n`;
      respostaCorpo += `✅ **Gabarito Oficial:** **${q.respostaCorreta}**\n`;
      respostaCorpo += `💡 **Explicação Pedagógica:** ${q.explicacao}\n\n`;

      const qKey = `Prova: ${q.disciplina}`;
      if (!fontesMap.has(qKey)) {
        fontesMap.add(qKey);
        fontes.push({
          titulo: `Prova de ${q.disciplina}`,
          modulo: q.modulo,
          detalhe: `Questão ${q.questaoId} (${q.tipo})`,
          tipo: "Avaliação Oficial"
        });
      }
    });
  }

  respostaCorpo = `${contextoAlunoResumo}${respostaCorpo}`;
  respostaCorpo += `\n*Este conteúdo foi extraído e sintetizado a partir do compêndio oficial da Teologia Acessível.*`;

  return {
    texto: respostaCorpo,
    fontes
  };
}

// Chamada opcional à API Gemini se o usuário cadastrar sua própria chave
async function chamarGeminiComRAG(pergunta, contextoRAG, apiKey) {
  const { topPassagens, topQuestoes, faqInstitucional } = contextoRAG;

  let contextoFormatado = "COMPÊNDIO OFICIAL DA TEOLOGIA ACESSÍVEL:\n\n";

  if (faqInstitucional) {
    contextoFormatado += `[INFORMAÇÕES INSTITUCIONAIS]:\n${faqInstitucional.resposta}\n\n`;
  }

  topPassagens.forEach((p, idx) => {
    contextoFormatado += `[TRECHO DA APOSTILA ${idx + 1}]:\nDisciplina: ${p.tituloApostila} (${p.modulo})\nCapítulo: ${p.tituloCapitulo}\nTexto: ${p.texto}\n\n`;
  });

  topQuestoes.forEach((q, idx) => {
    contextoFormatado += `[QUESTÃO DE PROVA OFICIAL ${idx + 1}]:\nDisciplina: ${q.disciplina}\nEnunciado: ${q.enunciado}\nGabarito: ${q.respostaCorreta}\nExplicação Oficial: ${q.explicacao}\n\n`;
  });

  const contextoAluno = obterContextoAcademicoAluno();
  const promptFinal = `Você é o Agente Especialista e Tutor Teológico Oficial da Teologia Acessível.
Responda à dúvida do aluno de forma bíblica, acadêmica, pedagógica e pastoral, baseando-se estritamente no COMPÊNDIO OFICIAL fornecido abaixo.
Se o compêndio contiver o assunto, cite os nomes das matérias, capítulos, versículos e regras do seminário.
Se for uma questão de prova, ensine a lógica do gabarito.
Seja respeitoso, claro e encorajador.

CONTEXTO DO ALUNO: ${contextoAluno.ativo ? `Nome: ${contextoAluno.nome}; Matrícula: ${contextoAluno.matricula}; Status de pagamento: ${contextoAluno.statusPagamento}; Etapas concluídas: ${contextoAluno.etapasCompletas}/${contextoAluno.etapasTotais || 30}; Provas registradas: ${contextoAluno.avaliadas || 0}; Média geral: ${contextoAluno.mediaGeral ?? "em andamento"}.` : "Aluno sem contexto registrado ainda."}

DÚVIDA DO ALUNO: "${pergunta}"

---
${contextoFormatado}
---

Responda em linguagem clara com formatação Markdown:`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: promptFinal }] }],
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 1200
      }
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Erro HTTP ${response.status}`);
  }

  const data = await response.json();
  const textoGerado = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!textoGerado) {
    throw new Error("Resposta vazia da API");
  }

  // Montar fontes
  const fontes = [];
  const fontesMap = new Set();
  topPassagens.forEach((p) => {
    const key = `${p.tituloApostila}-${p.tituloCapitulo}`;
    if (!fontesMap.has(key)) {
      fontesMap.add(key);
      fontes.push({
        titulo: p.tituloApostila,
        modulo: p.modulo,
        detalhe: p.tituloCapitulo,
        tipo: "Apostila Oficial"
      });
    }
  });

  topQuestoes.forEach((q) => {
    const key = `Prova: ${q.disciplina}`;
    if (!fontesMap.has(key)) {
      fontesMap.add(key);
      fontes.push({
        titulo: `Prova de ${q.disciplina}`,
        modulo: q.modulo,
        detalhe: `Questão ${q.questaoId}`,
        tipo: "Avaliação Oficial"
      });
    }
  });

  return {
    texto: textoGerado,
    fontes
  };
}

// Função pública principal chamada pela UI
export async function responderPerguntaSebitan(pergunta, options = {}) {
  const { filtroModulo = null } = options;

  // 1. Executa a recuperação semântica sobre o compêndio
  const contextoRAG = pesquisarCompendioSebitan(pergunta, filtroModulo);

  // 2. Verifica se o usuário tem chave Gemini configurada no navegador
  const geminiApiKey = typeof window !== "undefined" ? localStorage.getItem("sebitan_gemini_api_key") : null;

  if (geminiApiKey && geminiApiKey.trim().length > 10) {
    try {
      const respostaIA = await chamarGeminiComRAG(pergunta, contextoRAG, geminiApiKey.trim());
      return {
        ...respostaIA,
        modo: "IA Gemini + Compêndio Teologia Acessível"
      };
    } catch (err) {
      console.warn("Falha ao consultar API Gemini, acionando motor autônomo local:", err);
      // Fallback imediato para o motor local
      const respostaLocal = gerarRespostaLocal(pergunta, contextoRAG);
      return {
        ...respostaLocal,
        modo: "Motor Especialista (Local Offline)",
        avisoIA: `Nota: A chamada à API Gemini falhou (${err.message}). A resposta foi gerada com sucesso pelo Motor Local do Compêndio.`
      };
    }
  }

  // 3. Resposta pelo Motor Especialista Nativo
  const contextoAluno = obterContextoAcademicoAluno();
  const respostaLocal = gerarRespostaLocal(pergunta, contextoRAG, contextoAluno);
  return {
    ...respostaLocal,
    modo: "Motor Especialista (Compêndio Integral)"
  };
}

// Lista de disciplinas para filtros no chat
export function obterModulosEDisciplinas() {
  const modulos = new Set();
  apostilasTextoCompleto.forEach((a) => {
    if (a.modulo) modulos.add(a.modulo);
  });
  return Array.from(modulos);
}

// Perguntas sugeridas para guiar o aluno
export const SUGESTOES_PERGUNTAS = [
  {
    categoria: "Homilética & Púlpito",
    pergunta: "Qual é o método de anotações do tipo Esqueleto e quais são as regras de ouro no púlpito?"
  },
  {
    categoria: "Teontologia & Filosofia",
    pergunta: "Quais são os argumentos racionais para a existência de Deus apresentados na Teontologia?"
  },
  {
    categoria: "Hermenêutica Sagrada",
    pergunta: "Quais os princípios e regras fundamentais para a correta interpretação bíblica?"
  },
  {
    categoria: "Simulado de Provas",
    pergunta: "Como a prova de Escatologia aborda a Grande Tribulação e o Milênio?"
  },
  {
    categoria: "Costumes Bíblicos",
    pergunta: "Como eram as habitações, mobílias e alimentação dos hebreus nos tempos bíblicos?"
  },
  {
    categoria: "Certificado & Secretaria",
    pergunta: "Como funciona a avaliação para emissão do certificado e qual a carga horária do curso?"
  }
];
