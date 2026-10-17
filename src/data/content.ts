// src/data/content.js
// Acervo Bibliográfico e Multimídia Oficial do SEBITAN
import { GRADE_CURRICULAR, MODULOS_SEBITAN } from "./gradeCurricular.js";

export { GRADE_CURRICULAR, MODULOS_SEBITAN };

export const pdfs = [
  {
    "id": 1,
    "disciplinaId": "metodologia",
    "codigo": "MET-101",
    "moduloId": 1,
    "titulo": "Metodologia da Pesquisa Científica",
    "modulo": "MÓDULO I: Fundamentação Acadêmica & Ferramentas",
    "descricao": "Normas ABNT, tipos de conhecimento (empírico, filosófico, teológico, científico), técnicas de leitura crítica e elaboração de projetos.",
    "arquivo": "/pdfs/metodologia-da-pesquisa.pdf",
    "paginas": "22 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "x9TiBpRYMTk"
  },
  {
    "id": 2,
    "disciplinaId": "portugues",
    "codigo": "POR-102",
    "moduloId": 1,
    "titulo": "Português Instrumental para Pregadores",
    "modulo": "MÓDULO I: Fundamentação Acadêmica & Ferramentas",
    "descricao": "Dicção, respiração diafragmática, correção de vícios de linguagem comuns no púlpito, clareza retórica e análise sintática.",
    "arquivo": "/pdfs/portugues-instrumental.pdf",
    "paginas": "12 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "xKPt4TfAju4"
  },
  {
    "id": 3,
    "disciplinaId": "bibliologia",
    "codigo": "BIB-103",
    "moduloId": 1,
    "titulo": "Bibliologia: A Doutrina das Escrituras",
    "modulo": "MÓDULO I: Fundamentação Acadêmica & Ferramentas",
    "descricao": "A revelação divina, inspiração verbal e plenária, inerrância bíblica, formação do cânon judaico e cristão, e a preservação dos textos.",
    "arquivo": "/pdfs/bibliologia.pdf",
    "paginas": "15 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "9TEeTuYAJq0"
  },
  {
    "id": 4,
    "disciplinaId": "manuscritos",
    "codigo": "BIB-104",
    "moduloId": 1,
    "titulo": "Manuscritos do A.T. & Crítica Textual",
    "modulo": "MÓDULO I: Fundamentação Acadêmica & Ferramentas",
    "descricao": "Texto massorético, Septuaginta (LXX), códices unciais, manuscritos de Qumran, variantes textuais e a fidelidade da transmissão manuscrita.",
    "arquivo": "/pdfs/manuscritos-antigo-testamento.pdf",
    "paginas": "13 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "a4m8QFgzTvE"
  },
  {
    "id": 5,
    "disciplinaId": "hermeneutica",
    "codigo": "HER-105",
    "moduloId": 1,
    "titulo": "Hermenêutica Sagrada",
    "modulo": "MÓDULO I: Fundamentação Acadêmica & Ferramentas",
    "descricao": "Regras de ouro de interpretação, contexto histórico e gramatical, figuras de retórica bíblica, história da exegese e perigos do alegorismo.",
    "arquivo": "/pdfs/hermeneutica-sagrada.pdf",
    "paginas": "23 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "fSUl1TUNYzk"
  },
  {
    "id": 6,
    "disciplinaId": "costumes",
    "codigo": "MAN-201",
    "moduloId": 2,
    "titulo": "Maneiras e Costumes dos Tempos Bíblicos",
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "descricao": "Vida cotidiana em Canaã, habitações, vestimentas judaicas, alimentação, calendário hebreu, sistema de pesos, medidas e moeda dos tempos bíblicos.",
    "arquivo": "/pdfs/maneiras-e-costumes-da-biblia.pdf",
    "paginas": "11 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "ofAtXaJCjS8"
  },
  {
    "id": 7,
    "disciplinaId": "geografia_biblica",
    "codigo": "GEO-202",
    "moduloId": 2,
    "titulo": "Geografia Bíblica & Cenário Histórico",
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "descricao": "O Crescente Fértil, topografia da Palestina, mares, rios e desertos, viagens patriarcais, êxodo e rotas missionárias dos apóstolos.",
    "arquivo": "/pdfs/geografia-biblica.pdf",
    "paginas": "28 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "AIbMtZEREjg"
  },
  {
    "id": 8,
    "disciplinaId": "arqueologia_biblica",
    "codigo": "ARQ-203",
    "moduloId": 2,
    "titulo": "Arqueologia Bíblica: Evidências e Descobertas",
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "descricao": "Pedra da Roseta, Prisma de Senaqueribe, Estela de Tel Dã, Cilindro de Ciro, Túmulo de Herodes e as evidências científicas dos relatos bíblicos.",
    "arquivo": "/pdfs/arqueologia-biblica.pdf",
    "paginas": "24 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "A_P8xtz5qPI"
  },
  {
    "id": 9,
    "disciplinaId": "sintese_at",
    "codigo": "BIB-204",
    "moduloId": 2,
    "titulo": "Síntese do Antigo Testamento",
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "descricao": "Estudo panorâmico do Pentateuco, Livros Históricos, Livros Poéticos, Profetas Maiores e Menores, temas messiânicos e cronologia redentiva.",
    "arquivo": "/pdfs/sintese-antigo-testamento.pdf",
    "paginas": "88 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "kJQP7kiw5Fk"
  },
  {
    "id": 10,
    "disciplinaId": "interbiblico",
    "codigo": "HIS-205",
    "moduloId": 2,
    "titulo": "Período Interbíblico: Os 400 Anos",
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "descricao": "Transição do Império Persa ao Grego e Romano, Revolta dos Macabeus, Helenismo, sinagogas, fariseus, saduceus, zelotes e essênios.",
    "arquivo": "/pdfs/periodo-interbiblico.pdf",
    "paginas": "19 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "lv4ZRvPmPkc"
  },
  {
    "id": 11,
    "disciplinaId": "sintese_nt",
    "codigo": "BIB-206",
    "moduloId": 2,
    "titulo": "Síntese do Novo Testamento",
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "descricao": "Os quatro Evangelhos sinóticos e Joanino, expansão da Igreja primitiva em Atos, teologia apostólica paulina e a vitória final no Apocalipse.",
    "arquivo": "/pdfs/sintese-novo-testamento.pdf",
    "paginas": "40 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "5B1iPZQdV4A"
  },
  {
    "id": 12,
    "disciplinaId": "tipologia_simbologia",
    "codigo": "TIP-207",
    "moduloId": 2,
    "titulo": "Tipologia & Simbologia Bíblica",
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "descricao": "O Tabernáculo no deserto, os sacrifícios levíticos, ofícios de profeta, sacerdote e rei, personagens típicos e seu cumprimento em Cristo Jesus.",
    "arquivo": "/pdfs/tipologia-e-simbologia.pdf",
    "paginas": "20 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "kJQP7kiw5Fk"
  },
  {
    "id": 13,
    "disciplinaId": "dispensacoes_e_aliancas",
    "codigo": "DIS-208",
    "moduloId": 2,
    "titulo": "Dispensações e Alianças Bíblicas",
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "descricao": "As 7 dispensações clássicas e as grandes alianças (Adâmica, Noética, Abraâmica, Mosaica, Davídica e a Nova Aliança no Sangue de Cristo).",
    "arquivo": "/pdfs/dispensacoes-e-aliancas.pdf",
    "paginas": "26 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "PEoeVihT3fc"
  },
  {
    "id": 14,
    "disciplinaId": "teontologia",
    "codigo": "TEO-301",
    "moduloId": 3,
    "titulo": "Teontologia: A Doutrina de Deus Pai",
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "descricao": "Argumentos filosóficos e bíblicos da existência de Deus, atributos incomunicáveis e comunicáveis, soberania, presciência e a triunidade divina.",
    "arquivo": "/pdfs/teontologia.pdf",
    "paginas": "11 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "kJQP7kiw5Fk"
  },
  {
    "id": 15,
    "disciplinaId": "angelologia",
    "codigo": "ANG-302",
    "moduloId": 3,
    "titulo": "Angelologia Bíblica & Demonologia",
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "descricao": "Natureza, ministério e hierarquias angelicais (querubins, serafins, arcanjos), a rebelião cósmica de Satanás, principados, potestades e vitória em Cristo.",
    "arquivo": "/pdfs/angelologia.pdf",
    "paginas": "14 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "Se2qWigx-dY"
  },
  {
    "id": 16,
    "disciplinaId": "antropologia",
    "codigo": "ANT-303",
    "moduloId": 3,
    "titulo": "Antropologia Teológica: Doutrina do Homem",
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "descricao": "A criação original do ser humano, dignidade intrínseca, dicotomia e tricotomia (corpo, alma e espírito), liberdade moral e estado probatório.",
    "arquivo": "/pdfs/antropologia-teologica.pdf",
    "paginas": "12 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "LCfkELVmBew"
  },
  {
    "id": 17,
    "disciplinaId": "hamartiologia",
    "codigo": "HAM-304",
    "moduloId": 3,
    "titulo": "Hamartiologia: A Doutrina do Pecado",
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "descricao": "Definição bíblica de pecado (hamartia), a queda edênica, imputação da culpa, depravação humana, morte física, espiritual e a necessidade de redenção.",
    "arquivo": "/pdfs/hamartiologia.pdf",
    "paginas": "15 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "kb-AiO6mmG0"
  },
  {
    "id": 18,
    "disciplinaId": "cristologia",
    "codigo": "CRI-305",
    "moduloId": 3,
    "titulo": "Cristologia: A Pessoa e Obra de Jesus Cristo",
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "descricao": "Pré-existência de Cristo, encarnação pelo Espírito Santo, divindade e humanidade perfeitas, morte vicária na cruz, ressurreição corporal e exaltação.",
    "arquivo": "/pdfs/cristologia.pdf",
    "paginas": "18 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "YfF1JWuyTyQ"
  },
  {
    "id": 19,
    "disciplinaId": "pneumatologia",
    "codigo": "PNE-306",
    "moduloId": 3,
    "titulo": "Pneumatologia: A Doutrina do Espírito Santo",
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "descricao": "A divindade e personalidade do Paracleto, ministério no A.T. e N.T., regeneração, habitação no crente, batismo no Espírito Santo, dons carismáticos e fruto.",
    "arquivo": "/pdfs/pneumatologia.pdf",
    "paginas": "16 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "lS6Yci73EsU"
  },
  {
    "id": 20,
    "disciplinaId": "soteriologia",
    "codigo": "SOT-307",
    "moduloId": 3,
    "titulo": "Soteriologia: A Doutrina da Salvação",
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "descricao": "A ordem da salvação (ordo salutis): eleição, chamado eficaz, arrependimento e fé, justificação imputada, adoção de filhos, santificação contínua e perseverança.",
    "arquivo": "/pdfs/soteriologia.pdf",
    "paginas": "21 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "WOae73racyc"
  },
  {
    "id": 21,
    "disciplinaId": "eclesiologia",
    "codigo": "ECL-308",
    "moduloId": 3,
    "titulo": "Eclesiologia: A Doutrina da Igreja",
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "descricao": "Origem em Pentecostes, metáforas bíblicas (corpo, edifício, noiva), ordenanças da igreja, modelos de governo (episcopal, presbiteriano, congregacional) e missão.",
    "arquivo": "/pdfs/eclesiologia.pdf",
    "paginas": "17 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "pwLMSFNBH30"
  },
  {
    "id": 22,
    "disciplinaId": "escatologia",
    "codigo": "ESC-309",
    "moduloId": 3,
    "titulo": "Escatologia Bíblica: O Estudo das Últimas Coisas",
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "descricao": "Escatologia individual e cósmica, correntes milenares (pré, pós e amilenismo), sinais dos tempos, tribunal de Cristo, restauração de Israel e Nova Jerusalém.",
    "arquivo": "/pdfs/escatologia.pdf",
    "paginas": "25 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "kJQP7kiw5Fk"
  },
  {
    "id": 23,
    "disciplinaId": "apologetica",
    "codigo": "APO-401",
    "moduloId": 4,
    "titulo": "Apologética Cristã",
    "modulo": "MÓDULO IV: Apologética, Ciência & Cosmovisão",
    "descricao": "A defesa da fé (1Pe 3.15), respostas ao ceticismo, ateísmo e relativismo moral, ressurreição histórica de Jesus e a coerência da cosmovisão bíblica.",
    "arquivo": "/pdfs/apologetica.pdf",
    "paginas": "8 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "IBmrsGj_yYM"
  },
  {
    "id": 24,
    "disciplinaId": "biblia_e_ciencia",
    "codigo": "CIE-402",
    "moduloId": 4,
    "titulo": "A Bíblia e a Ciência: Harmonia das Origens",
    "modulo": "MÓDULO IV: Apologética, Ciência & Cosmovisão",
    "descricao": "Origem do universo, sintonia fina (fine-tuning), modelos criacionistas (terra jovem, terra antiga, design inteligente), bioética e integridade científica.",
    "arquivo": "/pdfs/a-biblia-e-a-ciencia.pdf",
    "paginas": "31 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "kJQP7kiw5Fk"
  },
  {
    "id": 25,
    "disciplinaId": "heresiologia",
    "codigo": "HER-403",
    "moduloId": 4,
    "titulo": "Heresiologia: O Discernimento das Seitas",
    "modulo": "MÓDULO IV: Apologética, Ciência & Cosmovisão",
    "descricao": "Características de movimentos sectários, desvios cristológicos e soteriológicos, testemunhas de jeová, mormonismo, espiritismo e refutação bíblica apologética.",
    "arquivo": "/pdfs/heresiologia.pdf",
    "paginas": "34 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "bikvQtP_pvQ"
  },
  {
    "id": 26,
    "disciplinaId": "religioes_mundiais_1",
    "codigo": "REL-404",
    "moduloId": 4,
    "titulo": "Religiões Mundiais I: Cultos e Tradições",
    "modulo": "MÓDULO IV: Apologética, Ciência & Cosmovisão",
    "descricao": "Estudo comparativo das grandes religiões do mundo, suas crenças centrais sobre Deus, alma e eternidade, e estratégias de diálogo e evangelização transcultural.",
    "arquivo": "/pdfs/religioes-mundiais-1.pdf",
    "paginas": "35 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "wpYQ5l4Wv-s"
  },
  {
    "id": 27,
    "disciplinaId": "discipulado",
    "codigo": "DIS-501",
    "moduloId": 5,
    "titulo": "Discipulado Bíblico & Formação Cristã",
    "modulo": "MÓDULO V: Teologia Prática & Ministério Pastoral",
    "descricao": "O mandamento da Grande Comissão (fazer discípulos), o modelo discipular de Jesus, acompanhamento individual, caráter cristão, santidade e mentoria na igreja.",
    "arquivo": "/pdfs/discipulado.pdf",
    "paginas": "27 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "cRTTnSjEIxk"
  },
  {
    "id": 28,
    "disciplinaId": "homiletica",
    "codigo": "HOM-502",
    "moduloId": 5,
    "titulo": "Homilética & Oratória Sagrada",
    "modulo": "MÓDULO V: Teologia Prática & Ministério Pastoral",
    "descricao": "Estrutura do sermão bíblico (introdução, proposição, divisões, ilustrações, aplicação e conclusão), técnicas de comunicação oral e postura ética no púlpito.",
    "arquivo": "/pdfs/homiletica.pdf",
    "paginas": "25 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "vSTg9kl7IPo"
  },
  {
    "id": 29,
    "disciplinaId": "evangelismo",
    "codigo": "EVA-503",
    "moduloId": 5,
    "titulo": "Evangelismo Prático & Ministério Pessoal",
    "modulo": "MÓDULO V: Teologia Prática & Ministério Pastoral",
    "descricao": "Métodos de abordagem evangelística, aconselhamento bíblico de novos convertidos, planos de ação para a igreja local e a urgência da colheita espiritual.",
    "arquivo": "/pdfs/evangelismo.pdf",
    "paginas": "20 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "6K24f2Rn-Ck"
  },
  {
    "id": 30,
    "disciplinaId": "administracao_eclesiastica",
    "codigo": "ADM-504",
    "moduloId": 5,
    "titulo": "Administração Eclesiástica & Legislação da Igreja",
    "modulo": "MÓDULO V: Teologia Prática & Ministério Pastoral",
    "descricao": "Organização administrativa da igreja, liderança servidora, planejamento estratégico, prestação de contas transparente, ata, estatutos e conformidade legal.",
    "arquivo": "/pdfs/administracao-eclesiastica.pdf",
    "paginas": "30 páginas",
    "autor": "Teologia Acessível Acadêmico",
    "youtubeIdPadrao": "E2_6tHr0yAc"
  }
];

export const audiobooks = pdfs.map((p, index) => {
  const base = [
    'metodologia_pesquisa', 'portugues_instrumental', 'bibliologia', 'manuscritos_at',
    'hermeneutica_sagrada', 'maneiras_costumes', 'geografia_biblica', 'arqueologia_biblica',
    'sintese_at', 'periodo_interbiblico', 'sintese_nt', 'tipologia_simbologia',
    'dispensacoes_aliancas', 'teontologia', 'angelologia', 'antropologia',
    'hamartiologia', 'cristologia', 'pneumatologia', 'soteriologia',
    'eclesiologia', 'escatologia', 'apologetica', 'biblia_ciencia',
    'heresiologia', 'religioes_mundiais', 'discipulado', 'homiletica_oratoria',
    'evangelismo', 'administracao_eclesiastica'
  ][index];
  return {
    id: p.id,
    disciplinaId: p.disciplinaId,
    titulo: p.titulo,
    modulo: p.modulo,
    moduloId: p.moduloId,
    duracao: "45 min",
    arquivo: p.arquivo,
    arquivoMasculino: `/audio/${base}_masculino.mp3`,
    arquivoFeminino: `/audio/${base}_feminino.mp3`,
    descricao: p.descricao,
    narrador: "Teologia Acessível Voz Oficial",
  };
});

export const videos = pdfs.map((p) => ({
  id: p.id,
  disciplinaId: p.disciplinaId,
  titulo: "Aula Oficial: " + p.titulo,
  modulo: p.modulo,
  moduloId: p.moduloId,
  duracao: "35 min",
  youtubeId: p.youtubeIdPadrao || "n2RNcPRt6cc",
  descricao: p.descricao,
}));

export const artigos = [
  {
    id: 1,
    titulo: "A Importância da Teologia Sistemática na Vida Pastoral",
    autor: "Corpo Docente Teologia Acessível",
    data: "15/09/2026",
    conteudo: "A teologia sistemática não é mero exercício intelectual, mas o alicerce pelo qual o pastor defende a sã doutrina e pastoreia as almas com discernimento bíblico.",
  }
];

export const testes = pdfs.map((p) => ({
  id: p.id,
  disciplinaId: p.disciplinaId,
  titulo: "Avaliação: " + p.titulo,
  questoes: 20,
}));

export const alunosAvaliacoesIniciais = [];
