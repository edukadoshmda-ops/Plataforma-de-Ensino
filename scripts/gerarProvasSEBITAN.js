
import fs from "fs";
import { GRADE_CURRICULAR } from "../src/data/gradeCurricular.js";
import { provasDisciplinas as provasAntigas } from "../src/data/provasData.js";
import { apostilasTextoCompleto } from "../src/data/apostilasTextoCompleto.js";

console.log("Iniciando geração de 60 Provas Oficiais (P1 e P2 com 20 questões cada) para as 30 disciplinas...");

const mapaAntigas = {};
provasAntigas.forEach(p => {
  mapaAntigas[p.id] = p;
});

const mapaApostilas = {};
apostilasTextoCompleto.forEach(a => {
  // Procura por ID ou correspondência de título
  mapaApostilas[a.id] = a;
});

// Função para gerar questões adicionais de teologia baseadas nos conceitos acadêmicos da matéria
function gerarQuestoesComplementares(disc, offset = 10, prefixo = "P1") {
  const qList = [];

  // 5 Certo/Errado adicionais
  const afirmacoesCE = [
    {
      certo: true,
      enunciado: `No âmbito de ${disc.titulo}, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.`,
      explicacao: `Correto! O princípio fundamental ensinado no SEBITAN em ${disc.titulo} estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica).`
    },
    {
      certo: false,
      enunciado: `Em ${disc.titulo}, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.`,
      explicacao: `Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações.`
    },
    {
      certo: true,
      enunciado: `O estudo aprofundado de ${disc.titulo} visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.`,
      explicacao: `Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade.`
    },
    {
      certo: false,
      enunciado: `Segundo o compêndio do SEBITAN em ${disc.titulo}, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.`,
      explicacao: `Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico.`
    },
    {
      certo: true,
      enunciado: `A disciplina de ${disc.titulo} (${disc.codigo}) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.`,
      explicacao: `Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão.`
    }
  ];

  afirmacoesCE.forEach((item, idx) => {
    qList.push({
      id: offset + idx + 1,
      tipo: "certo_errado",
      enunciado: item.enunciado,
      respostaCorreta: item.certo ? "Certo" : "Errado",
      explicacao: item.explicacao
    });
  });

  // 5 Múltipla Escolha adicionais
  const questoesME = [
    {
      enunciado: `Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de ${disc.titulo} no currículo do SEBITAN?`,
      opcoes: [
        `Dominar os fundamentos doutrinários e exegéticos para edificar o Corpo de Cristo com fidelidade às Escrituras.`,
        `Apenas obter um diploma sem aplicação no ministério da igreja local.`,
        `Substituir a oração e a dependência do Espírito Santo por teorias puramente humanas.`,
        `Promover debates infindáveis que geram contendas doutrinárias sem edificação espiritual.`
      ],
      respostaCorreta: 0,
      explicacao: `O propósito do SEBITAN é capacitar o ministro para manejar bem a Palavra da verdade com profunda reverência, temor e fidelidade.`
    },
    {
      enunciado: `Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em ${disc.titulo} resguarda a saúde da igreja?`,
      opcoes: [
        `Adotando o relativismo teológico para agradar a todos os ouvintes sem distinção.`,
        `Fundamentando o estudante na sã doutrina bíblica e na autoridade inerrante da Bíblia Sagrada.`,
        `Ignorando os erros doutrinários e permitindo qualquer tipo de ensinamento nos cultos.`,
        `Isolando a congregação do contato com a sociedade e impedindo o evangelismo.`
      ],
      respostaCorreta: 1,
      explicacao: `A sã doutrina bíblica atua como vacina contra o veneno do erro doutrinário, garantindo ortodoxia e preservação do evangelho autêntico.`
    },
    {
      enunciado: `No que diz respeito à aplicação prática de ${disc.titulo}, qual atitude deve caracterizar o obreiro ou líder aprovado?`,
      opcoes: [
        `Orgulho intelectual e desprezo pelos fiéis que possuem menor instrução acadêmica.`,
        `Humildade cristã, espírito servil, compromisso irrevogável com a oração e amor pelas almas.`,
        `Cobrança de valores abusivos para compartilhar os conhecimentos bíblicos adquiridos.`,
        `Abandono das responsabilidades pastorais para dedicar-se unicamente ao debate teórico.`
      ],
      respostaCorreta: 1,
      explicacao: `O verdadeiro teólogo e ministro cristão reflete o caráter de Cristo: manso, humilde de coração e dedicado a servir o próximo com amor.`
    },
    {
      enunciado: `Como a disciplina de ${disc.titulo} dialoga com o contexto de liderança eclesiástica e maturidade cristã?`,
      opcoes: [
        `Ensinando que a estrutura administrativa dispensa a operação dos dons do Espírito Santo.`,
        `Equilibrando a ordem, a organização e o preparo intelectual com o fervor espiritual e a dependência de Deus.`,
        `Determinando que apenas as leis civis devem governar a comunhão dos santos.`,
        `Eliminando a necessidade de prestação de contas financeira e ética no ministério.`
      ],
      respostaCorreta: 1,
      explicacao: `O SEBITAN ensina o equilíbrio bíblico: mente instruída na verdade divina e coração em chamas pelo poder do Espírito Santo.`
    },
    {
      enunciado: `Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de ${disc.titulo}?`,
      opcoes: [
        `Um texto nunca pode significar aquilo que nunca significou para o seu autor original e seus primeiros destinatários.`,
        `Cada leitor tem o direito de atribuir o significado que melhor lhe convém no momento.`,
        `O sentido literal deve ser sempre descartado em favor de interpretações místicas alegóricas.`,
        `A Bíblia contém erros morais que necessitam ser corrigidos pela cultura moderna pós-moderna.`
      ],
      respostaCorreta: 0,
      explicacao: `Este é o axioma hermenêutico fundamental: o significado primário determinado pelo Espírito Santo ao autor original é a base de toda exegese legítima.`
    }
  ];

  questoesME.forEach((item, idx) => {
    qList.push({
      id: offset + 5 + idx + 1,
      tipo: "multipla_escolha",
      enunciado: item.enunciado,
      opcoes: item.opcoes,
      respostaCorreta: item.respostaCorreta,
      explicacao: item.explicacao
    });
  });

  return qList;
}

// Gera Prova 2 completa (20 questões: 10 Certo/Errado + 10 Múltipla Escolha) com enfoque Exegético e Prático
function gerarProva2(disc) {
  const qList = [];

  const enunciadosP2_CE = [
    {
      certo: true,
      enunciado: `[Exegese & Prática] Na aplicação ministerial de ${disc.titulo}, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.`,
      explicacao: `Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã.`
    },
    {
      certo: false,
      enunciado: `[Exegese & Prática] A pregação e o ensino de ${disc.titulo} podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.`,
      explicacao: `Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN.`
    },
    {
      certo: true,
      enunciado: `[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre ${disc.titulo}, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.`,
      explicacao: `Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje.`
    },
    {
      certo: false,
      enunciado: `[Exegese & Prática] A suficiência das Escrituras ensinada em ${disc.titulo} significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.`,
      explicacao: `Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17).`
    },
    {
      certo: true,
      enunciado: `[Exegese & Prática] O ministro do Evangelho que compreende ${disc.titulo} sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.`,
      explicacao: `Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28).`
    },
    {
      certo: true,
      enunciado: `[Exegese & Prática] Ao ministrar sobre os temas de ${disc.titulo}, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.`,
      explicacao: `Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino.`
    },
    {
      certo: false,
      enunciado: `[Exegese & Prática] Para o SEBITAN, o aprendizado de ${disc.titulo} autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.`,
      explicacao: `Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius).`
    },
    {
      certo: true,
      enunciado: `[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em ${disc.titulo}, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.`,
      explicacao: `Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus.`
    },
    {
      certo: false,
      enunciado: `[Exegese & Prática] Os resultados obtidos em ${disc.titulo} dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.`,
      explicacao: `Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder.`
    },
    {
      certo: true,
      enunciado: `[Exegese & Prática] A perseverança no estudo continuado de ${disc.titulo} capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).`,
      explicacao: `Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente.`
    }
  ];

  enunciadosP2_CE.forEach((item, idx) => {
    qList.push({
      id: idx + 1,
      tipo: "certo_errado",
      enunciado: item.enunciado,
      respostaCorreta: item.certo ? "Certo" : "Errado",
      explicacao: item.explicacao
    });
  });

  const enunciadosP2_ME = [
    {
      enunciado: `[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a ${disc.titulo}. Qual deve ser sua conduta bíblica imediata?`,
      opcoes: [
        `Buscar a orientação do Espírito Santo em oração e examinar meticulosamente as Escrituras para orientar o rebanho com mansidão e firmeza doutrinária.`,
        `Expulsar sumariamente todos os envolvidos sem ouvir suas dúvidas ou explicar as passagens bíblicas pertinentes.`,
        `Omitir-se e fingir que nada está acontecendo para não perder prestígio pessoal.`,
        `Fazer uma votação na rede social e adotar a opinião da maioria dos internautas.`
      ],
      respostaCorreta: 0,
      explicacao: `O modelo bíblico ensinado aos pastores e líderes pelo SEBITAN exige aconselhamento bíblico fundamentado na Palavra de Deus, paciência e instrução.`
    },
    {
      enunciado: `Na ótica da Teologia Prática e da Missiologia, de que maneira ${disc.titulo} contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?`,
      opcoes: [
        `Impedindo que novos convertidos tenham acesso a materiais bíblicos aprofundados.`,
        `Formando discípulos biblicamente maduros, capazes de ensinar a outros tudo quanto Cristo ordenou.`,
        `Restringindo a mensagem da salvação unicamente aos membros fundadores da comunidade.`,
        `Substituindo a pregação de arrependimento e remissão de pecados por entretenimento de auditório.`
      ],
      respostaCorreta: 1,
      explicacao: `A Grande Comissão inclui ensinar a guardar todas as coisas que Jesus ensinou, exigindo sólida formação doutrinária e discipular contínua.`
    },
    {
      enunciado: `Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em ${disc.titulo} do literalismo ingênuo ou do alegorismo desmedido?`,
      opcoes: [
        `A consideração honesta dos gêneros literários bíblicos (poesia, narrativa, profecia, epístola) e o sentido gramático-histórico pretendido pelo autor sagrado.`,
        `A interpretação de que todas as frases da Bíblia são metáforas sem valor histórico real.`,
        `A obrigatoriedade de interpretar textos poéticos com a mesma rigidez de tratados matemáticos.`,
        `A rejeição sumária de qualquer ferramenta de linguística ou dicionário hebraico e grego.`
      ],
      respostaCorreta: 0,
      explicacao: `Cada livro e trecho bíblico deve ser lido conforme o seu gênero literário sob a regra gramático-histórica para não distorcer a intenção do Espírito Santo.`
    },
    {
      enunciado: `Em ${disc.titulo}, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?`,
      opcoes: [
        `Afirmando que Deus não tem controle algum sobre a história humana e depende das decisões dos homens.`,
        `Reconhecendo que a soberania divina e a responsabilidade humana são verdades bíblicas que coexistem harmoniosamente sob os mistérios insondáveis da graça de Deus.`,
        `Ensinando o fatalismo absoluto que elimina a necessidade de evangelizar ou orar por conversões.`,
        `Descartando qualquer menção ao pecado humano e à justiça retributiva de Deus.`
      ],
      respostaCorreta: 1,
      explicacao: `O equilíbrio bíblico do SEBITAN rejeita extremos fatalistas e mantém tanto a soberania do Criador quanto o dever de pregar o Evangelho a toda criatura.`
    },
    {
      enunciado: `De acordo com as ênfases pedagógicas do SEBITAN em ${disc.titulo}, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?`,
      opcoes: [
        `Arrogância teológica e discussões infrutíferas no seio do lar.`,
        `Um testemunho irrepreensível de santidade, paciência, retidão financeira e amor ao próximo.`,
        `Isolamento social e desdém pelas pessoas que não frequentam seminários.`,
        `Uso do conhecimento bíblico como arma para humilhar novos convertidos.`
      ],
      respostaCorreta: 1,
      explicacao: `A verdadeira teologia cristã produz o fruto do Espírito (Gl 5.22-23) e manifesta o testemunho de vida que glorifica o Pai que está nos céus.`
    },
    {
      enunciado: `Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de ${disc.titulo}?`,
      opcoes: [
        `Servir como guia estruturado de estudo complementar, estimulando o aluno a aprofundar suas raízes diretamente na Bíblia Sagrada.`,
        `Substituir a leitura direta dos textos do Antigo e Novo Testamento.`,
        `Impedir que o aluno pense de forma reflexiva ou faça anotações pessoais.`,
        `Fornecer textos com opiniões puramente políticas sem valor espiritual.`
      ],
      respostaCorreta: 0,
      explicacao: `O compêndio do SEBITAN atua como mapa e bússola, conduzindo o estudante ao tesouro inesgotável das Escrituras Sagradas.`
    },
    {
      enunciado: `Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de ${disc.titulo} orienta o conselho pastoral?`,
      opcoes: [
        `Capitulando diante das pressões ideológicas mundanas para evitar desaprovação pública.`,
        `Mantendo fidelidade aos princípios eternos da Lei Moral de Deus, acolhendo as pessoas com graça e verdade.`,
        `Recusando qualquer diálogo com pessoas em sofrimento moral ou espiritual.`,
        `Inventando regras humanas severas não respaldadas pelo ensinamento bíblico.`
      ],
      respostaCorreta: 1,
      explicacao: `O ministério exemplar de Jesus combinava graça e verdade (Jo 1.14): amor incondicional ao pecador e compromisso inegociável com a santidade e a verdade divina.`
    },
    {
      enunciado: `Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de ${disc.titulo}?`,
      opcoes: [
        `Apenas decorar termos técnicos sem capacidade de transmiti-los numa escola dominical ou sermão.`,
        `A capacidade de explicar com clareza a mensagem aos outros, defender com mansidão a fé e viver de acordo com a verdade aprendida.`,
        `Concluir as leituras na maior velocidade possível sem absorção reflexiva.`,
        `Preencher os questionários sem compreender o significado dos conceitos.`
      ],
      respostaCorreta: 1,
      explicacao: `2 Timóteo 2.2: O que de mim ouviste, transmite-o a homens fiéis que sejam idôneos para também ensinarem a outros.`
    },
    {
      enunciado: `Ao concluir com êxito a Prova 2 de ${disc.titulo}, que marco acadêmico o aluno atinge no seu histórico escolar?`,
      opcoes: [
        `A integralização da carga horária de 50 horas com nota oficial e progresso registrado no sistema para expedição do Diploma oficial.`,
        `A anulação de todas as matérias anteriores para recomeçar o curso do zero.`,
        `A perda imediata do acesso à plataforma de estudos.`,
        `A obrigatoriedade de prestar serviço civil não eclesiástico.`
      ],
      respostaCorreta: 0,
      explicacao: `A conclusão das duas provas com média igual ou superior a 7,0 confere a aprovação acadêmica na disciplina rumo ao Grau Teológico.`
    },
    {
      enunciado: `Qual a importância de conciliar o estudo do PDF, a audição do Áudio e a visualização do Vídeo antes de realizar esta avaliação?`,
      opcoes: [
        `Uma mera burocracia sem qualquer impacto pedagógico ou fixação de conteúdo.`,
        `Uma metodologia ativa multissensorial comprovada que maximiza a retenção, desenvolve raciocínio crítico e prepara com solidez o futuro teólogo.`,
        `Um método punitivo para dificultar a aprovação dos estudantes.`,
        `Uma forma de prolongar desnecessariamente o tempo de estudo sem agregar valor.`
      ],
      respostaCorreta: 1,
      explicacao: `A aprendizagem multimídia (leitura reflexiva, audição narrada e suporte visual) estimula múltiplos canais cognitivos, garantindo domínio duradouro.`
    }
  ];

  enunciadosP2_ME.forEach((item, idx) => {
    qList.push({
      id: 10 + idx + 1,
      tipo: "multipla_escolha",
      enunciado: item.enunciado,
      opcoes: item.opcoes,
      respostaCorreta: item.respostaCorreta,
      explicacao: item.explicacao
    });
  });

  return {
    id: `${disc.id}_p2`,
    titulo: `${disc.titulo} — Prova 2 (Exegética & Prática)`,
    tipo: "p2",
    codigo: `${disc.codigo}-P2`,
    duracaoMinutos: 60,
    questoes: qList
  };
}

// Gera Prova 1 completa (20 questões: pega as 10 da prova antiga + 10 complementares)
function gerarProva1(disc) {
  const antiga = mapaAntigas[disc.id] || { questoes: [] };
  const questoesBase = antiga.questoes ? [...antiga.questoes] : [];

  // Se tem menos de 10, completa até 10 primeiro
  while (questoesBase.length < 10) {
    questoesBase.push({
      id: questoesBase.length + 1,
      tipo: questoesBase.length < 5 ? "certo_errado" : "multipla_escolha",
      enunciado: `Questão fundamental de ${disc.titulo} (${disc.codigo}): A doutrina revelada nas Escrituras Sagradas possui autoridade divina suprema para a fé e prática da Igreja.`,
      respostaCorreta: questoesBase.length < 5 ? "Certo" : 0,
      opcoes: questoesBase.length < 5 ? undefined : [
        "Autoridade divina suprema e inerrante nas Escrituras Sagradas.",
        "Autoridade apenas humana e temporal sem valor eterno.",
        "Autoridade subjetiva que depende do sentimento individual de cada fiel.",
        "Subordinação aos costumes passageiros da sociedade secular contemporânea."
      ],
      explicacao: "Conforme ensinado em todo o compêndio do SEBITAN, as Escrituras são divinamente inspiradas e constituem o cânon imutável da fé cristã."
    });
  }

  // Agora adiciona mais 10 questões para totalizar exatamente 20 questões em P1!
  const complementares = gerarQuestoesComplementares(disc, 10, "P1");
  const todasQuestoes = [...questoesBase.slice(0, 10), ...complementares];

  // Garante IDs de 1 a 20 sequenciais
  todasQuestoes.forEach((q, i) => {
    q.id = i + 1;
  });

  return {
    id: `${disc.id}_p1`,
    titulo: `${disc.titulo} — Prova 1 (Teórica & Conceitual)`,
    tipo: "p1",
    codigo: `${disc.codigo}-P1`,
    duracaoMinutos: 60,
    questoes: todasQuestoes
  };
}

// Organizar em 5 módulos
const modulosAgrupados = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: []
};

GRADE_CURRICULAR.forEach((disc) => {
  const p1 = gerarProva1(disc);
  const p2 = gerarProva2(disc);

  const disciplinaCompleta = {
    id: disc.id,
    ordem: disc.ordem,
    codigo: disc.codigo,
    moduloId: disc.moduloId,
    modulo: disc.modulo,
    titulo: disc.titulo,
    subtitulo: disc.subtitulo,
    cargaHoraria: disc.cargaHoraria,
    descricao: disc.descricao,
    duracaoMinutos: 60,
    prova1: p1,
    prova2: p2,
    // questoes padrão aponta para prova1.questoes para total retrocompatibilidade
    questoes: p1.questoes
  };

  modulosAgrupados[disc.moduloId].push(disciplinaCompleta);
});

// Escreve cada módulo em seu arquivo correspondente
for (let m = 1; m <= 5; m++) {
  const lista = modulosAgrupados[m];
  const moduloCode = `// Banco de Provas Oficiais SEBITAN — MÓDULO ${m}
// 20 Questões por Prova (Prova 1: Teórica • Prova 2: Exegética & Prática)
// Total por disciplina: 40 Questões com gabarito e fundamentação teológica.

export const provasModulo${m} = ${JSON.stringify(lista, null, 2)};
`;
  fs.writeFileSync(`./src/data/provas/modulo${m}.js`, moduloCode, "utf8");
  console.log(`Módulo ${m} gravado com ${lista.length} disciplinas (${lista.length * 40} questões)!`);
}

// Escreve o provasData.js agregador
const agregadorCode = `// Banco Oficial de Provas Acadêmicas SEBITAN — Grade Curricular Coordenada
// Estrutura Oficial: 30 Disciplinas organizadas em 5 Módulos Pedagógicos
// Cada Disciplina contém 2 Provas Oficiais (Prova 1 e Prova 2) com 20 Questões cada (Total: 1.200 questões).
// Nota de aprovação mínima: 7,0. Limite: 2 tentativas por dia para cada prova.

import { provasModulo1 } from "./provas/modulo1.js";
import { provasModulo2 } from "./provas/modulo2.js";
import { provasModulo3 } from "./provas/modulo3.js";
import { provasModulo4 } from "./provas/modulo4.js";
import { provasModulo5 } from "./provas/modulo5.js";

export const provasDisciplinas = [
  ...provasModulo1,
  ...provasModulo2,
  ...provasModulo3,
  ...provasModulo4,
  ...provasModulo5,
];

export default provasDisciplinas;
`;
fs.writeFileSync("./src/data/provasData.js", agregadorCode, "utf8");
console.log("provasData.js atualizado com sucesso com as 30 disciplinas coordenadas e 1.200 questões!");
