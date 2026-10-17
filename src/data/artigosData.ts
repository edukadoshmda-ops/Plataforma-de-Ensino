// src/data/artigosData.ts
// Coleção Oficial de 30 Artigos e Tratados Teológicos cobrindo todos os Módulos do Curso Livre de Teologia Bíblica
// Plataforma Teologia Acessível

export interface ArtigoTeologico {
  id: number;
  disciplinaId: string;
  codigo: string;
  moduloId: number;
  modulo: string;
  titulo: string;
  subtitulo: string;
  categoria: string;
  autor: string;
  data: string;
  tempoLeitura: string;
  conteudo: string;
}

export const artigosOficiais30: ArtigoTeologico[] = [
  // =========================================================================
  // MÓDULO I: Fundamentação Acadêmica & Ferramentas
  // =========================================================================
  {
    id: 1,
    disciplinaId: "metodologia",
    codigo: "MET-101",
    moduloId: 1,
    modulo: "MÓDULO I: Fundamentação Acadêmica & Ferramentas",
    titulo: "Metodologia Científica e Rigor no Estudo Teológico",
    subtitulo: "A articulação entre fé, razão e métodos de pesquisa acadêmica nas Sagradas Escrituras",
    categoria: "Exegese & Hermenêutica",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "9 min",
    conteudo: `O estudo sério da teologia não dispensa a disciplina metodológica. Longe de esfriar a devoção, o método científico oferece instrumentos para que o pesquisador bíblico evite o anacronismo, o subjetivismo arbitrário e as leituras descontextualizadas.

1. Tipos de Conhecimento e a Epistemologia Cristã
O conhecimento humano se desenvolve em diferentes esferas: o empírico (baseado na experiência cotidiana), o filosófico (reflexão lógica sobre o ser), o científico (sistemático, verificável e metodologicamente orientado) e o teológico (alicerçado na revelação de Deus). A teologia cristã integra o rigor crítico com a premissa de que Deus falou de modo inteligível na história.

2. A Leitura Crítica e o Fichamento Textual
Pesquisar as Escrituras e a literatura patrística exige fichamentos estruturados (bibliográfico, de citação e temático). Ao abordar um texto clássico ou um tratado exegético, o estudante deve identificar a tese do autor, os argumentos basilares, as evidências históricas empregadas e as conclusões práticas para a vida da Igreja.

3. Normas Acadêmicas a Serviço da Verdade
A citação ética de fontes e o respeito às normas de produção textual refletem a integridade cristã. O teólogo que honra a pesquisa não plagia ideias, reconhece as contribuições de mestres anteriores e comunica com clareza as descobertas da sã doutrina para a edificação do povo de Deus.`
  },
  {
    id: 2,
    disciplinaId: "portugues",
    codigo: "POR-102",
    moduloId: 1,
    modulo: "MÓDULO I: Fundamentação Acadêmica & Ferramentas",
    titulo: "Português Instrumental e Clareza Retórica no Púlpito",
    subtitulo: "A importância da comunicação verbal precisa e sem ruídos na proclamação do Evangelho",
    categoria: "Teologia Pastoral",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "8 min",
    conteudo: `A pregação da Palavra de Deus exige fidelidade teológica e excelência na comunicação. Um vocabulário empobrecido ou vícios de pronúncia podem criar barreiras desnecessárias entre a mensagem sagrada e a congregação.

1. O Dom da Palavra e a Responsabilidade do Pregador
Paulo orientou Timóteo a manejar bem a palavra da verdade (2Tm 2.15). Manejar bem envolve a compreensão exata da sintaxe, concordância e semântica. O uso correto da língua portuguesa não é questão de elitismo intelectual, mas de respeito à mensagem que recebemos por comissão divina.

2. Superação de Vícios de Linguagem no Altar
Expressões redundantes ("subir para cima", "elo de ligação"), bengalas oratórias excessivas ("né", "tá entendendo", "glória a Deus" usado como pausa mental) e desvios de regência prejudicam a dinâmica do sermão. A respiração diafragmática e a articulação clara das sílabas conferem solenidade e autoridade à exposição.

3. Vocabulário Acessível e Profundo
O verdadeiro mestre da Palavra simplifica o complexo sem baratear a essência. Jesus falava aos corações através de parábolas vivas, usando imagens concretas do cotidiano aliadas a uma elevação moral ímpar. O pregador deve cultivar a leitura contínua dos clássicos e das Escrituras para enriquecer seu repertório verbal.`
  },
  {
    id: 3,
    disciplinaId: "bibliologia",
    codigo: "BIB-103",
    moduloId: 1,
    modulo: "MÓDULO I: Fundamentação Acadêmica & Ferramentas",
    titulo: "Bibliologia: A Doutrina da Inspiração e Autoridade das Escrituras",
    subtitulo: "Revelação divina, inerrância verbal e plenária e a formação dos 66 livros canônicos",
    categoria: "Teologia Sistemática",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "10 min",
    conteudo: `A Bíblia Sagrada é o fundamento inegociável da fé cristã. Compreender como o Eterno se comunicou com a humanidade por meio de autores humanos inspirados é o primeiro passo para toda a teologia sistemática.

1. Revelação Geral e Especial
A Revelação Geral se manifesta na criação e na consciência humana (Sl 19.1; Rm 1.19-20), testemunhando o poder eterno e a divindade do Criador. Todavia, a salvação e o plano redentor foram desvelados na Revelação Especial, culminando na pessoa de Jesus Cristo e registrada de forma autoritativa nas Escrituras.

2. A Inspiração Verbal e Plenária
O termo grego 'theopneustos' em 2 Timóteo 3.16 significa literalmente "soprado por Deus". A inspiração não foi um mero transe mecânico que anulou a personalidade dos profetas e apóstolos, mas uma ação soberana do Espírito Santo que preservou as palavras originais de todo erro doutrinário ou moral.

3. A Formação do Cânon Sagrado
O cânon bíblico — 39 livros no Antigo Testamento e 27 no Novo Testamento — não foi inventado por concílios humanos, mas reconhecido pela Igreja como possuidor de autoridade intrínseca. O testemunho do Espírito Santo na comunidade dos santos validou os livros que traziam a marca da apostolicidade e da conformidade com a regra da fé.`
  },
  {
    id: 4,
    disciplinaId: "manuscritos",
    codigo: "BIB-104",
    moduloId: 1,
    modulo: "MÓDULO I: Fundamentação Acadêmica & Ferramentas",
    titulo: "Manuscritos Bíblicos e os Fundamentos da Crítica Textual",
    subtitulo: "Texto Massorético, Septuaginta e as evidências documentais dos Rolos de Qumran",
    categoria: "Exegese & Hermenêutica",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "9 min",
    conteudo: `Nenhum livro da antiguidade possui tamanha abundância e proximidade temporal de manuscritos quanto a Bíblia. A Crítica Textual não visa desmerecer a Escritura, mas recuperar com precisão cirúrgica o texto autógrafo original.

1. A Transmissão do Antigo Testamento e os Soferim
Os escribas hebreus e posteriormente os massoretas (séculos VI a X d.C.) desenvolveram um sistema rigoroso de contagem de letras, palavras e parágrafos para impedir qualquer alteração acidental no texto hebraico. O Texto Massorético (TM) permanece como a base fidedigna das traduções modernas.

2. A Descoberta dos Rolos do Mar Morto (1947)
Em Qumran, cavernas preservaram manuscritos bíblicos mil anos mais antigos que os códices massoréticos até então conhecidos (como o Grande Rolo de Isaías). A comparação revelou uma concordância textual superior a 95%, calando teses liberais que alegavam corrupção progressiva dos textos sagrados.

3. O Novo Testamento e os Grandes Códices
Com mais de 5.800 manuscritos gregos catalogados (Códice Sinaítico, Vaticano, Alexandrino e papiros de Oxirrinco), o Novo Testamento tem solidez incomparável se confrontado com obras de Platão, Aristóteles ou Júlio César. A providência divina garantiu a preservação indelével da revelação bíblica.`
  },
  {
    id: 5,
    disciplinaId: "hermeneutica",
    codigo: "HER-105",
    moduloId: 1,
    modulo: "MÓDULO I: Fundamentação Acadêmica & Ferramentas",
    titulo: "Hermenêutica Sagrada: Princípios para uma Exegese Fiel",
    subtitulo: "Regras gramático-históricas de interpretação contra o alegorismo desenfreado",
    categoria: "Exegese & Hermenêutica",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "9 min",
    conteudo: `A hermenêutica é a ciência e a arte de interpretar a revelação divina. O objetivo do exegeta não é extrair do texto o que ele gostaria que dissesse (eisegese), mas discernir o que o autor inspirado originalmente comunicou aos seus primeiros destinatários (exegese).

1. O Princípio Gramático-Histórico
Todo texto possui um contexto cultural, geográfico e linguístico. Ignorar a ocasião em que Paulo escreveu aos Gálatas ou o cenário da monarquia nos dias de Isaías produz distorções severas. O sentido pretendido pelo Espírito Santo está atrelado à gramática e à história.

2. A Escritura Interpreta a Própria Escritura (Analogia da Fé)
Passagens obscuras ou de difícil interpretação devem ser elucidadas à luz de textos claros e doutrinariamente diretos. Nenhuma doutrina de fé pode ser edificada sobre um versículo isolado ou fora da harmonia do conjunto canônico.

3. Distinção de Gêneros Literários
A Bíblia contém narrativa histórica, poesia lírica, sabedoria sapiencial, profecia apocalíptica e epístolas didáticas. Cada gênero exige chaves de leitura específicas: não se lê uma metáfora poética em Salmos com o mesmo literalismo científico aplicado a uma narrativa genealógica de Crônicas.`
  },

  // =========================================================================
  // MÓDULO II: Panorama Bíblico & Contexto Histórico
  // =========================================================================
  {
    id: 6,
    disciplinaId: "costumes",
    codigo: "MAN-201",
    moduloId: 2,
    modulo: "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    titulo: "Maneiras e Costumes dos Tempos Bíblicos",
    subtitulo: "O universo cultural do Antigo Oriente Próximo e a Palestina dos dias de Jesus",
    categoria: "Panorama Bíblico",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "8 min",
    conteudo: `Muitas passagens bíblicas ganham cores vívidas quando compreendidas dentro do quadro de hábitos diários do Oriente Médio antigo. Hábitos à mesa, pactos de hospitalidade e vestimentas carregavam profundos significados simbólicos.

1. O Valor Sagrado da Hospitalidade
No deserto semiarido, acolher o estrangeiro e oferecer-lhe água para lavar os pés e alimento era dever inviolável. Essa prática lança luz sobre o ato de Jesus ao lavar os pés dos discípulos (Jo 13) e a atitude da mulher pecadora que ungiu Seus pés na casa do fariseu Simão.

2. A Casa Judaica e a Vida Comunitária
As moradias de pedra com telhados planos serviam como locais de oração, descanso noturno e estocagem. Quando quatro homens destelharam uma casa em Cafarnaum para descer o paralítico até Jesus (Mc 2), retiraram a camada de argila, palha e galhos típica daquelas coberturas.

3. Moedas, Pesos e Casamentos Semíticos
O noivado judaico envolvia o pagamento do dote (mohar) e um período de preparação no qual o noivo preparava a habitação para buscar sua noiva à meia-noite com lâmpadas a óleo. Esse costume é a chave para compreender a parábola das dez virgens (Mt 25) e as bodas do Cordeiro.`
  },
  {
    id: 7,
    disciplinaId: "geografia_biblica",
    codigo: "GEO-202",
    moduloId: 2,
    modulo: "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    titulo: "Geografia Bíblica: Relevo, Rotas e o Palco da Redenção",
    subtitulo: "Do Crescente Fértil às rotas apostólicas pelo Mar Mediterrâneo",
    categoria: "Panorama Bíblico",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "9 min",
    conteudo: `A geografia não é mero pano de fundo, mas o cenário geofísico escolhido pela providência divina para a revelação dos Seus atos poderosos. A Terra Prometida situava-se estrategicamente na encruzilhada de três continentes: Ásia, África e Europa.

1. Canaã: A Ponte entre os Impérios
Israel localizava-se no corredor comercial que interligava o Egito à Mesopotâmia (via das rotas internacionais Via Maris e Caminho dos Reis). Por esse motivo, as nações vizinhas cobiçavam a região, transformando o solo de Israel em arena de fidelidade ou apostasia diante de Deus.

2. A Topografia da Terra Santa
Do Mar da Galileia, 210 metros abaixo do nível do mar, descendo pelo sinuoso Rio Jordão até o Mar Morto (o ponto mais baixo da Terra, a cerca de -430m), e subindo as colinas de Jerusalém (750m de altitude), o relevo palestino ensina verdades espirituais: "Como os montes estão ao redor de Jerusalém, assim o Senhor está em volta do seu povo" (Sl 125.2).

3. As Viagens Missionárias Paulinas
A expansão apostólica tirou proveito da malha viária romana (Pax Romana). De Antioquia até Roma, cruzando a Ásia Menor, Grécia e Ilírico, Paulo navegou e marchou sobre rotas planejadas, plantando igrejas nas principais metrópoles do mundo antigo.`
  },
  {
    id: 8,
    disciplinaId: "arqueologia_biblica",
    codigo: "ARQ-203",
    moduloId: 2,
    modulo: "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    titulo: "Arqueologia Bíblica: Pedras que Clamam a Verdade",
    subtitulo: "Descobertas epigráficas e monumentais que silenciam o ceticismo histórico",
    categoria: "Apologética Cristã",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "9 min",
    conteudo: `A arqueologia não tem a missão de "provar" a fé, mas oferece confirmação factual inestimável para a veracidade histórica dos eventos narrados na Bíblia Sagrada.

1. A Estela de Tel Dã e a Casa de Davi
Durante décadas, teólogos liberais sustentaram que o Rei Davi era um herói lendário similar ao Rei Arthur. Em 1993, uma inscrição aramaica do século IX a.C. desenterrada em Tel Dã registrou expressamente a expressão "Casa de Davi" (Beit David), confirmando a dinastia histórica descrita em Samuel e Reis.

2. O Prisma de Senaqueribe e o Cerco a Ezequias
Nos anais assírios guardados no Museu Britânico, o imperador Senaqueribe gaba-se de ter cercado Jerusalém e aprisionado Ezequias "como um pássaro na gaiola". Curiosamente, o monarca não relata a conquista da cidade — corroborando com precisão o livramento miraculoso operado pelo anjo do Senhor (2Rs 19.35).

3. O Cilindro de Ciro e a Pedra de Pilatos
O Cilindro de Ciro corrobora o decreto persa permitindo o retorno dos exilados às suas terras natais (Ed 1). Já a inscrição descoberta em Cesareia Marítima contendo o nome de "Pôncio Pilatos, Prefeito da Judeia" confirmou documentalmente o governador romano perante o qual Jesus foi julgado.`
  },
  {
    id: 9,
    disciplinaId: "sintese_at",
    codigo: "BIB-204",
    moduloId: 2,
    modulo: "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    titulo: "Síntese Teológica do Antigo Testamento",
    subtitulo: "A promessa da semente, a aliança mosaica e os anelos messiânicos dos profetas",
    categoria: "Panorama Bíblico",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "10 min",
    conteudo: `O Antigo Testamento não é um conjunto de narrativas arcaicas superadas, mas o alicerce essencial da promessa redentora de Deus que aponta ininterruptamente para Jesus Cristo.

1. O Pentateuco: As Origens e o Pacto
Em Gênesis, a protoevangelho de Gn 3.15 anuncia que a semente da mulher feriria a cabeça da serpente. Em Êxodo e Levítico, Deus redime Seu povo da escravidão, entrega a Lei moral no Sinai e institui o sacerdócio e os sacrifícios que ensinam a gravidade do pecado e a santidade do Senhor.

2. Os Livros Históricos e a Dinastia Real
De Josué a Ester, acompanhamos a fidelidade divina frente à infidelidade reiterada da nação. Na aliança davídica (2Sm 7), Deus promete um trono perpétuo a um descendente de Davi — promessa que encontra cumprimento final no Messias ressurreto.

3. Livros Sapienciais e os Profetas
Os salmos expressam o louvor e o lamento do coração redimido; Provérbios, Eclesiastes e Jó ensinam o temor do Senhor como princípio da sabedoria. Por fim, os profetas maiores e menores proclamam o juízo contra a injustiça social e descortinam o Servo Sofredor (Is 53) que haveria de carregar as nossas dores.`
  },
  {
    id: 10,
    disciplinaId: "interbiblico",
    codigo: "HIS-205",
    moduloId: 2,
    modulo: "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    titulo: "O Período Interbíblico: Os 400 Anos de Silêncio Profético",
    subtitulo: "Helenismo, revolta dos Macabeus e o surgimento das seitas judaicas",
    categoria: "História da Igreja",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "9 min",
    conteudo: `Entre a última profecia de Malaquias e a pregação estrondosa de João Batista no deserto da Judeia decorreram quatro séculos. Esse intervalo, longe de ser inerte, foi marcado por convulsões políticas e transformações religiosas que prepararam a plenitude dos tempos.

1. A Ascensão do Império Grego e o Helenismo
Alexandre, o Grande, conquistou o Oriente e disseminou a língua grega (Koiné), que se tornou o idioma universal de comunicação e comércio. Isso viabilizou a tradução do Antigo Testamento para o grego (a Septuaginta - LXX) e facilitou a posterior redação e rápida propagação dos Evangelhos e Epístolas.

2. A Tirania de Antíoco Epifânio e os Macabeus
No século II a.C., o governante selêucida profanou o Templo de Jerusalém oferecendo uma porca sobre o altar e proibindo a circuncisão e a guarda da Torá. A família sacerdotal dos Asmoneus (liderada por Judas Macabeu) deflagrou uma guerra de libertação nacional, evento celebrado na Festa da Dedicação (Hanukkah).

3. O Surgimento dos Grupos Religiosos
Durante esse período organizaram-se as principais correntes judaicas encontradas no Novo Testamento: os Fariseus (zelosos preservadores da tradição oral e da pureza legal), os Saduceus (aristocracia sacerdotal helenizada que rejeitava a ressurreição) e os Essênios (comunidade monástica do deserto).`
  },
  {
    id: 11,
    disciplinaId: "sintese_nt",
    codigo: "BIB-206",
    moduloId: 2,
    modulo: "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    titulo: "Síntese do Novo Testamento: A Chegada do Reino de Deus",
    subtitulo: "Dos quatro Evangelhos ao triunfo apocalíptico do Cordeiro de Deus",
    categoria: "Panorama Bíblico",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "10 min",
    conteudo: `O Novo Testamento registra a inauguração da Nova Aliança profetizada por Jeremias, selada no sangue imaculado de Jesus Cristo e estendida a todas as famílias da Terra pelo derramamento do Espírito Santo.

1. A Quádrupla Perspectiva dos Evangelhos
Mateus retrata Jesus como o Messias e Rei prometido aos judeus; Marcos destaca o Servo obediente e realizador de milagres; Lucas apresenta o Filho do Homem compassivo que veio buscar e salvar o perdido; João descortina a divindade eterna do Verbo encarnado.

2. O Livro de Atos e a Expansão Missionária
Escrito pelo médico Lucas, Atos dos Apóstolos documenta o nascimento da Igreja em Jerusalém no dia de Pentecostes, seu avanço sobre Samaria e sua chegada triunfante aos centros do poder gentílico sob a liderança de Pedro e Paulo.

3. As Epístolas e a Consumação no Apocalipse
As cartas paulinas e gerais sistematizam a teologia da justificação, santificação, ordem eclesiástica e maturidade cristã. O Apocalipse fecha o cânon sagrado descortinando a vitória cósmica de Cristo sobre a Besta, a morte e o Diabo, inaugurando os Novos Céus e a Nova Terra.`
  },
  {
    id: 12,
    disciplinaId: "tipologia_simbologia",
    codigo: "TIP-207",
    moduloId: 2,
    modulo: "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    titulo: "Tipologia e Simbologia Bíblica: Sombras e Realidades",
    subtitulo: "O Tabernáculo, sacrifícios levíticos e personagens que prefiguram a pessoa de Cristo",
    categoria: "Exegese & Hermenêutica",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "9 min",
    conteudo: `A tipologia é uma instituição divina em que pessoas, ofícios, objetos e ritos da Antiga Aliança atuam como sombras pedagógicas desenhadas pelo Espírito Santo para apontar para a substância definitiva, que é Cristo (Cl 2.17; Hb 10.1).

1. O Tabernáculo no Deserto
Cada detalhe do Tabernáculo proclamava o Evangelho: a porta única de entrada aponta para Jesus como o Caminho; o Altar de Bronze prenunciava a cruz do Calvário; a Pia de Bronze simbolizava a purificação pela Palavra; o Candelabro de Ouro revelava Cristo como a Luz do Mundo; a Mesa dos Pães tipificava o Pão da Vida; e a Arca da Aliança simbolizava a comunhão restaurada pela propiciação do sangue.

2. O Sistema Sacrificial Levítico
O holocausto ensinava a consagração total a Deus; a oferta de manjares representava a dedicação do fruto do trabalho; o sacrifício de paz celebrava a reconciliação; e as ofertas pelo pecado e pela culpa mostravam que sem derramamento de sangue não há remissão (Hb 9.22).

3. Tipos Pessoais nas Escrituras
Adão é tipo do segundo Adão (Rm 5.14); Melquisedeque prefigura o sacerdócio real e eterno de Cristo (Hb 7); Isaque sobre o altar do Monte Moriá retrata o sacrifício do Filho amado; e José do Egito, rejeitado por seus irmãos e exaltado para salvar o mundo da fome, ecoa a trajetória messiânica.`
  },
  {
    id: 13,
    disciplinaId: "dispensacoes_e_aliancas",
    codigo: "DIS-208",
    moduloId: 2,
    modulo: "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    titulo: "Alianças e Dispensações: A Economia do Propósito Eterno",
    subtitulo: "Compreendendo o desenvolvimento histórico dos pactos divinos com a humanidade",
    categoria: "Teologia Sistemática",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "9 min",
    conteudo: `Deus administra a história humana segundo desígnios soberanos de revelação progressiva. A compreensão das alianças bíblicas permite ao teólogo manter coesa a unidade orgânica das Escrituras.

1. A Aliança Adâmica e Noética
No Éden, Deus estabeleceu a comunhão com o homem e prometeu a vitória sobre a serpente. Com Noé, após o dilúvio, Deus selou um pacto cósmico de preservação das estações e da vida terrena, tendo o arco-íris como memorial perpétuo da graça comum.

2. A Aliança Abraâmica e Davídica
Em Abraão (Gn 12), o Senhor prometeu uma terra, uma descendência inumerável e bênção para todas as nações da terra. Na aliança davídica (2Sm 7), prometeu um Reino inabalável e um Rei que governaria eternamente com cetro de justiça.

3. A Nova Aliança e a Graça em Cristo
Em Jeremias 31.31-34 e consumada na Última Ceia (Lc 22.20), a Nova Aliança escreve a Lei divina no coração do homem mediante o Espírito Santo, operando a justificação eterna e o perdão pleno e irrevogável dos pecados.`
  },

  // =========================================================================
  // MÓDULO III: Teologia Sistemática Integral
  // =========================================================================
  {
    id: 14,
    disciplinaId: "teontologia",
    codigo: "TEO-301",
    moduloId: 3,
    modulo: "MÓDULO III: Teologia Sistemática Integral",
    titulo: "Teontologia: A Transcendência e os Atributos de Deus Pai",
    subtitulo: "A doutrina clássica da essência divina, perfeições eternas e a Santíssima Trindade",
    categoria: "Teologia Sistemática",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "10 min",
    conteudo: `A teontologia estuda o próprio Deus em Sua essência, decretos e obras. Conhecer a Deus é o sumo bem e a razão de ser de toda criatura humana (Jo 17.3; Jr 9.23-24).

1. Atributos Incomunicáveis de Deus
São perfeições divinas que pertencem unicamente a Ele, sem paralelo na criação: a asseidade (Deus tem vida em Si mesmo e independe do universo), a eternidade (além das limitações do tempo), a imutabilidade (Seu caráter e decretos não oscilam), a onipresença, a onisciência e a onipotência soberana.

2. Atributos Comunicáveis e o Caráter Santo
São qualidades morais que Deus outorga aos seres humanos como portadores de Sua imagem: santidade, justiça, amor, misericórdia, bondade e verdade. A santidade divina não é mera ausência de mal, mas a majestosa pureza transcendente que enche os serafins de temor reverente (Is 6.3).

3. O Mistério da Santíssima Trindade
Há um só Deus vivo e verdadeiro, subsistindo eternamente em três Pessoas coiguais e coeternas: Pai, Filho e Espírito Santo. O Pai não é o Filho, o Filho não é o Espírito, e o Espírito não é o Pai, todavia são de uma única substância divina (homoousios), operando em harmonia perfeita na criação, redenção e consumação.`
  },
  {
    id: 15,
    disciplinaId: "angelologia",
    codigo: "ANG-302",
    moduloId: 3,
    modulo: "MÓDULO III: Teologia Sistemática Integral",
    titulo: "Angelologia e Demonologia: O Mundo Espiritual e a Vitória da Cruz",
    subtitulo: "Serafins, querubins, a queda cósmica e a soberania de Cristo sobre os principados",
    categoria: "Teologia Sistemática",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "9 min",
    conteudo: `As Escrituras ensinam com total clareza a existência de seres espirituais criados, divididos entre anjos santos que servem ao trono de Deus e espíritos caídos liderados por Satanás.

1. A Natureza e Serviço dos Anjos Santos
Os anjos são seres espirituais criados, dotados de intelecto, vontade e poder superiores aos homens, embora nunca devam ser cultuados (Cl 2.18; Ap 22.9). Atuam como ministros de louvor diante de Deus e espíritos ministradores em favor dos herdeiros da salvação (Hb 1.14).

2. A Queda e a Origem do Mal Moral
Satanás, originalmente criado em formosura, encheu-se de orgulho e desejou a exaltação suprema que pertence somente ao Altíssimo (Is 14; Ez 28). Atraindo após si uma hoste de espíritos rebeldes, formou o império das trevas que busca cegar a mente dos incrédulos e afligir a Igreja.

3. O Desarmamento dos Principados no Calvário
A batalha espiritual do crente não é travada com medo ou técnicas supersticiosas. Na cruz do Calvário, Jesus despojou os principados e as potestades, expondo-os ao desprezo público e triunfando sobre eles (Cl 2.15). O cristão resiste ao diabo firme na fé e revestido com toda a armadura de Deus (Ef 6).`
  },
  {
    id: 16,
    disciplinaId: "antropologia",
    codigo: "ANT-303",
    moduloId: 3,
    modulo: "MÓDULO III: Teologia Sistemática Integral",
    titulo: "Antropologia Teológica: O Homem Criado à Imagem de Deus",
    subtitulo: "Imago Dei, dignidade humana ontológica e a constituição do ser (corpo, alma e espírito)",
    categoria: "Teologia Sistemática",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "9 min",
    conteudo: `Contra o materialismo reducionista que enxerga o homem como mero produto do acaso biológico, a teologia bíblica afirma que cada ser humano foi intencionalmente formado pelas mãos de Deus como ápice da criação terrena.

1. A Imago Dei e a Dignidade Humana
Criado à imagem e semelhança de Deus (Gn 1.26-27), o homem recebeu faculdades morais, racionais e volitivas para governar a criação em mordomia santa e ter comunhão viva com seu Criador. Essa dignidade é intrínseca e inalienável a todo ser humano, do ventre materno ao leito de morte.

2. A Constituição Humana: Dicotomia e Tricotomia
Os teólogos debatem se o ser humano é composto de duas partes (material e imaterial: corpo e alma/espírito) ou de três esferas funcionais distintas (corpo como contato físico, alma como sede dos sentimentos e intelecto, e espírito como capacidade de comunhão com o Deus vivo, cf. 1Ts 5.23; Hb 4.12). Em ambas as perspectivas, a unidade psico-somática é integral.

3. A Queda e a Corrupção da Imagem
Com o pecado, a imagem de Deus não foi totalmente destruída (Tg 3.9), mas foi profundamente manchada e desfigurada. Apenas pela regeneração em Cristo o crente é progressivamente renovado segundo a imagem dAquele que o criou (Cl 3.10).`
  },
  {
    id: 17,
    disciplinaId: "hamartiologia",
    codigo: "HAM-304",
    moduloId: 3,
    modulo: "MÓDULO III: Teologia Sistemática Integral",
    titulo: "Hamartiologia: A Gravidade do Pecado e a Corrupção Universal",
    subtitulo: "A queda no Éden, a depravação total e a impotência moral da humanidade caída",
    categoria: "Teologia Sistemática",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "9 min",
    conteudo: `A compreensão correta da graça salvadora depende diretamente da lucidez bíblica acerca do diagnóstico da condição caída do homem. Minimizar o pecado é baratear o sacrifício vicário da cruz.

1. Definições Bíblicas de Pecado
O vocabulário bíblico descreve o pecado com precisão multifacetada: 'hamartia' (errar o alvo divino), 'pesha' (rebelião ativa contra a soberania do Rei), 'anomia' (transgressão voluntária da Lei moral de Deus) e iniqüidade (perversão interior do coração). Pecar não é mero deslize, mas ofensa cósmica contra a santidade do Criador.

2. O Pecado Original e a Culpa Imputada
Como cabeça representativa de toda a raça humana, a transgressão de Adão trouxe condenação e morte a todos os seus descendentes (Rm 5.12). O ser humano não se torna pecador porque comete pecados; ele comete pecados porque já nasce portador de uma natureza caída e alienada da vida de Deus.

3. A Doutrina da Depravação Total
Depravação total não significa que todo homem seja tão vil e cruel quanto poderia ser em todos os atos, mas que nenhuma faculdade humana (intelecto, sentimentos, vontade e corpo) escapou dos efeitos nocivos do pecado. O homem não regenerado é moralmente incapaz de salvar a si mesmo ou de buscar a Deus com justiça própria.`
  },
  {
    id: 18,
    disciplinaId: "cristologia",
    codigo: "CRI-305",
    moduloId: 3,
    modulo: "MÓDULO III: Teologia Sistemática Integral",
    titulo: "Cristologia: A União Hipostática e a Obra Redentora de Cristo",
    subtitulo: "Verdadeiro Deus e verdadeiro Homem em uma só Pessoa indivisível para todo o sempre",
    categoria: "Teologia Sistemática",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "11 min",
    conteudo: `Jesus Cristo é o coração palpitante da fé cristã. A confissão de fé formulada no Concílio de Calcedônia (451 d.C.) permanece como baluarte inabalável contra todas as heresias cristológicas da história.

1. A Pré-Existência e Divindade do Logos
Em João 1.1 lemos: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus". Jesus não começou a existir na manjedoura de Belém; Ele é o Filho eterno de Deus, por meio de quem todas as coisas foram criadas e no qual subsiste toda a plenitude da divindade corpóreamente (Cl 2.9).

2. A Verdadeira Humanidade e a União Hipostática
Pela encarnação milagrosa no ventre da virgem Maria pelo poder do Espírito Santo, Cristo assumiu uma natureza humana completa (com corpo, alma humana e sentimentos), sem pecado (Hb 4.15). Duas naturezas inteiras — a divina e a humana — unem-se na única Pessoa do Filho sem confusão, sem mudança, sem divisão e sem separação.

3. O Tríplice Ofício de Cristo
Jesus é o Profeta supremo que revela plenamente o Pai; o Sacerdote fiel que ofereceu a Si mesmo em sacrifício vicário e intercede continuamente pelos Seus; e o Rei soberano que reina sobre o universo e retornará em glória para governar as nações com vara de ferro.`
  },
  {
    id: 19,
    disciplinaId: "pneumatologia",
    codigo: "PNE-306",
    moduloId: 3,
    modulo: "MÓDULO III: Teologia Sistemática Integral",
    titulo: "Pneumatologia: A Pessoa, os Dons e a Habitação do Espírito Santo",
    subtitulo: "A divindade do Consolador, a regeneração no crente e o poder para o testemunho apostólico",
    categoria: "Teologia Sistemática",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "10 min",
    conteudo: `O Espírito Santo não é uma força mística impessoal ou energia cósmica, mas a Terceira Pessoa da Santíssima Trindade, dotada de sentimentos, intelecto e volição soberana.

1. A Divindade e Personalidade do Espírito Santo
A Escritura chama o Espírito de Deus de forma explícita (At 5.3-4). Ele convence o mundo do pecado, da justiça e do juízo (Jo 16.8), ensina todas as coisas, glorifica o Filho, intercede pelos santos com gemidos inexprimíveis (Rm 8.26) e pode ser entristecido pelo pecado do crente (Ef 4.30).

2. Regeneração, Selo e Habitação
No momento da conversão genuína, o Espírito Santo opera o novo nascimento, inserindo o crente no Corpo de Cristo e passando a habitar nele como templo vivo (1Co 6.19). Ele é o penhor e selo inquebrantável da redenção prometida (Ef 1.13-14).

3. O Fruto e os Dons Espirituais
O fruto do Espírito (Gl 5.22-23) expressa o caráter santo de Jesus gerado no íntimo do discípulo. Concomitantemente, o Espírito concede dons espirituais (1Co 12; Rm 12) para a edificação mútua do Corpo e revestimento de poder para a proclamação destemida do Evangelho até os confins da terra.`
  },
  {
    id: 20,
    disciplinaId: "soteriologia",
    codigo: "SOT-307",
    moduloId: 3,
    modulo: "MÓDULO III: Teologia Sistemática Integral",
    titulo: "Soteriologia: A Doutrina da Salvação e a Justificação pela Fé",
    subtitulo: "A maravilhosa graça salvadora, expiação penal substitutiva e a segurança em Cristo",
    categoria: "Teologia Sistemática",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "10 min",
    conteudo: `A soteriologia explica a aplicação dos benefícios da cruz do Calvário aos pecadores eleitos pela graça de Deus. "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus" (Ef 2.8).

1. A Expiação Penal Substitutiva
Na cruz, Jesus tomou o lugar que era nosso por direito judicial. Ele bebeu o cálice da ira divina que pesava sobre os transgressores da Lei (propiciação), pagou o preço pelo resgate dos escravos do pecado (redenção) e reconciliou o homem com o Deus santo mediante Seu próprio sangue.

2. A Justificação pela Fé (Sola Fide)
A justificação é um ato legal e forense pelo qual Deus declara o pecador justo perante o tribunal divino. Essa absolvição não repousa em méritos do indivíduo, mas na dupla imputação: os nossos pecados foram lançados sobre Cristo na cruz, e a perfeita justiça ativa e passiva de Jesus é creditada na conta de quem crê.

3. Santificação e Glorificação (Ordo Salutis)
A salvação manifesta-se em três tempos: fomos salvos da penalidade da condenação (justificação); estamos sendo progressivamente salvos do poder do pecado (santificação cooperativa e contínua); e seremos salvos da própria presença do pecado na ressurreição dos mortos (glorificação final).`
  },
  {
    id: 21,
    disciplinaId: "eclesiologia",
    codigo: "ECL-308",
    moduloId: 3,
    modulo: "MÓDULO III: Teologia Sistemática Integral",
    titulo: "Eclesiologia: A Natureza, Ordenanças e Missão da Igreja de Cristo",
    subtitulo: "O Corpo vivo do Senhor, Batismo, Santa Ceia e o governo eclesiástico bíblico",
    categoria: "Teologia Sistemática",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "10 min",
    conteudo: `A Igreja não é um prédio de alvenaria ou um clube social, mas a assembleia dos santos chamados para fora das trevas para a maravilhosa luz de Cristo (a 'ekklesia' do Deus vivo).

1. Metáforas Bíblicas da Igreja
O Novo Testamento descreve a Igreja como o Corpo de Cristo (com membros interdependentes sob a autoridade da Cabeça), o Edifício e Templo Santo (edificado sobre o fundamento dos apóstolos e profetas, tendo Jesus como pedra de esquina), a Família da Fé e a Noiva Imaculada que aguarda as Bodas do Cordeiro.

2. As Duas Ordenanças Instituídas por Jesus
O Batismo em águas em nome do Pai, do Filho e do Espírito Santo constitui a confissão pública da morte para o pecado e ressurreição para uma nova vida em Cristo. A Santa Ceia memorial celebra a comunhão com o Senhor crucificado e ressurreto, proclamando Sua morte vicária até que Ele venha (1Co 11.26).

3. Governo Bíblico e a Grande Comissão
A liderança da igreja deve ser pautada pelo modelo serventuário de pastores/presbíteros e diáconos que atendem aos pré-requisitos morais descritos em 1 Timóteo 3 e Tito 1. A missão precípua da Igreja é a evangelização universal, a adoração trinitária e o discipulado transformador das nações.`
  },
  {
    id: 22,
    disciplinaId: "escatologia",
    codigo: "ESC-309",
    moduloId: 3,
    modulo: "MÓDULO III: Teologia Sistemática Integral",
    titulo: "Escatologia Bíblica: A Esperança da Segunda Vinda e os Finais dos Tempos",
    subtitulo: "Arrebatamento, Grande Tribulação, Milênio, Juízo Final e o Novo Céu e Nova Terra",
    categoria: "Teologia Sistemática",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "10 min",
    conteudo: `A escatologia não foi revelada para gerar especulações mórbidas ou cálculo de calendários secretos, mas para produzir vigilância santa, consolo nos sofrimentos e ardor missionário na Igreja.

1. A Bendita Esperança do Retorno de Cristo
Jesus voltará de maneira física, visível e gloriosa com poder e grande glória (At 1.11; Ap 1.7). Para os crentes fiéis, Sua vinda representa o momento sublime do arrebatamento, a redenção de nossos corpos e o encontro com o Senhor nos ares.

2. As Correntes de Interpretação do Milênio
Ao longo da história da Igreja, três vertentes interpretativas de Apocalipse 20 ganharam destaque: o Pré-milenismo (Cristo retorna antes do estabelecimento de um reino de mil anos de paz terrena com cumprimento profético a Israel), o Amilenismo (o milênio é a era presente da Igreja em que Cristo reina espiritualmente do Céu) e o Pós-milenismo (a expansão do Evangelho cristianizará as instituições antes da Parousia).

3. O Juízo Final e a Eternidade
Diante do Grande Trono Branco, os que rejeitaram o Cordeiro comparecerão para julgamento segundo suas obras e serão lançados no lago de fogo (segunda morte). Em contrapartida, os remidos pelo sangue de Cristo herdarão a Nova Jerusalém, onde Deus enxugará toda lágrima e a morte não mais existirá.`
  },

  // =========================================================================
  // MÓDULO IV: Apologética, Ciência & Cosmovisão
  // =========================================================================
  {
    id: 23,
    disciplinaId: "apologetica",
    codigo: "APO-401",
    moduloId: 4,
    modulo: "MÓDULO IV: Apologética, Ciência & Cosmovisão",
    titulo: "Apologética Cristã: Razões da Fé em uma Sociedade Cética",
    subtitulo: "Como defender com mansidão e clareza a veracidade do cristianismo histórico",
    categoria: "Apologética Cristã",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "9 min",
    conteudo: `O apóstolo Pedro ordenou: "Estai sempre preparados para responder com mansidão e temor a qualquer que vos pedir a razão da esperança que há em vós" (1Pe 3.15). A apologética é a resposta bíblica e lógica às dúvidas de um mundo pós-moderno.

1. A Razoabilidade do Teísmo Cristão
A existência de Deus é apoiada por argumentos de peso: o Cosmológico (o universo teve um começo no tempo e requer uma Causa Primeira incausada, transcendente e pessoal), o Teleológico (a assombrosa sintonia fina das leis físicas da natureza exige um Projetista Inteligente) e o Moral (a existência de valores morais objetivos requer um Legislador moral perfeito).

2. A Historicidade da Ressurreição de Jesus
O cristianismo não repousa em mitologias atemporais, mas em um fato histórico consumado no primeiro século. A tumba vazia de Jerusalém, as aparições pós-morte a mais de 500 testemunhas oculares (1Co 15) e a transformação radical de discípulos medrosos em mártires destemidos constituem a melhor explicação histórica para a origem da Igreja.

3. O Desafio da Apologética no Século XXI
A defesa da fé não pode ser agressiva ou arrogante. Deve aliar consistência argumentativa com amor genuíno e testemunho de integridade moral. Diante do relativismo moral e do niilismo existencial, o Evangelho se apresenta como a única cosmovisão que dá sentido pleno à realidade humana.`
  },
  {
    id: 24,
    disciplinaId: "biblia_e_ciencia",
    codigo: "CIE-402",
    moduloId: 4,
    modulo: "MÓDULO IV: Apologética, Ciência & Cosmovisão",
    titulo: "A Bíblia e a Ciência: A Harmonia nas Origens do Universo",
    subtitulo: "Desmistificando o suposto conflito entre fé bíblica e a investigação científica",
    categoria: "Apologética Cristã",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "9 min",
    conteudo: `A ideia de que a ciência moderna e a fé cristã são inimigas irreconciliáveis é um mito histórico. A própria ciência experimental moderna nasceu em berço cristão, cultivada por nomes como Isaac Newton, Johannes Kepler, Blaise Pascal e Robert Boyle, movidos pela certeza de que o universo é inteligível porque foi criado por um Deus de ordem.

1. Os Dois Livros de Deus: A Criação e a Escritura
Conforme dizia Agostinho e Galileu, Deus escreveu dois livros que não podem se contradizer: o Livro da Natureza e o Livro da Revelação Sagrada. Conflitos aparentes surgem quando se faz má teologia (leituras equivocadas do texto sagrado) ou má ciência (quando pressupostos filosóficos materialistas são confundidos com fatos comprovados).

2. A Sintonia Fina (Fine-Tuning) do Cosmos
A física contemporânea reconhece que dezenas de constantes cosmológicas — como a força gravitacional, a expansão do Big Bang e a carga do elétron — estão calibradas com precisão infinitesimal. Se qualquer uma dessas constantes variasse em uma fração de milímetro, a vida seria impossível em qualquer lugar do universo.

3. O Criacionismo e o Design Inteligente
A complexidade irredutível das máquinas moleculares biológicas (como o motor flagelar bacteriano e a codificação de informações no DNA) aponta inequivocamente para uma mente ordenadora. A matéria cega e o tempo não possuem capacidade de produzir código de linguagem informacional complexo.`
  },
  {
    id: 25,
    disciplinaId: "heresiologia",
    codigo: "HER-403",
    moduloId: 4,
    modulo: "MÓDULO IV: Apologética, Ciência & Cosmovisão",
    titulo: "Heresiologia: O Discernimento e a Refutação dos Desvios Doutrinários",
    subtitulo: "Como identificar grupos sectários e proteger o rebanho com a ortodoxia bíblica",
    categoria: "Apologética Cristã",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "10 min",
    conteudo: `O apóstolo Paulo advertiu os presbíteros de Éfeso que, após sua partida, entrariam no meio deles "lobos cruéis que não pouparão o rebanho" (At 20.29). O estudo das heresias é indispensável para a preservação da saúde doutrinária da congregação.

1. As Características Essenciais de uma Seita
Quase todos os movimentos sectários compartilham padrões comuns: possuem uma nova revelação alegada exclusiva por um líder central iluminado; distorcem ou negam a divindade eterna e a humanidade plena de Cristo; acrescentam obras humanas como requisito meritório da salvação; e reivindicam exclusivismo arrogante ("somente nós temos a verdade").

2. Heresias Cristológicas Clássicas e Modernas
O arianismo antigo (que dizia que Jesus era a primeira criatura feita por Deus) ressurge contemporaneamente nas Testemunhas de Jeová. O gnosticismo (que negava a bondade da matéria e a encarnação física real) reaparece nas filosofias da Nova Era e no espiritismo kardecista.

3. O Antídoto Bíblico: A Sã Doutrina
A melhor proteção contra a nota falsa é o conhecimento íntimo da cédula verdadeira. O obreiro não combate as heresias com escárnio ou intolerância agressiva, mas manejando com excelência as Escrituras, demonstrando a superioridade moral e a coerência insuperável do Evangelho de Cristo.`
  },
  {
    id: 26,
    disciplinaId: "religioes_mundiais_1",
    codigo: "REL-404",
    moduloId: 4,
    modulo: "MÓDULO IV: Apologética, Ciência & Cosmovisão",
    titulo: "Religiões Mundiais: Análise Comparativa e Missiologia Transcultural",
    subtitulo: "Judaísmo, Islamismo, Hinduísmo e Budismo confrontados com a singularidade de Jesus",
    categoria: "Apologética Cristã",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "10 min",
    conteudo: `Em um mundo globalizado, a Igreja precisa conhecer as grandes tradições religiosas mundiais para proclamar Cristo com inteligência cultural e fidelidade bíblica.

1. O Judaísmo Rabínico
Compartilha com o cristianismo as raízes do Antigo Testamento, mas rejeitou Jesus de Nazaré como o Messias prometido, focando na observância estrita da Torá e do Talmud. O diálogo apologético com os judeus deve demonstrar o cumprimento minucioso das profecias messiânicas na pessoa e sacrifício de Jesus.

2. O Islã e a Contradição Teológica
Fundado no século VII por Maomé, o Islã prega um monoteísmo estrito e unitário que nega veementemente a Trindade e a filiação divina de Cristo. O Alcorão sustenta falsamente que Jesus não morreu na cruz, destruindo a base da expiação redentora. O cristão deve testemunhar aos muçulmanos demonstrando que Deus é Amor relacional em Sua própria essência trinitária.

3. As Religiões Orientais: Hinduísmo e Budismo
Caracterizadas pelo panteísmo ou politeísmo (no caso hindu) e pelo não-teísmo introspectivo com foco na iluminação e no ciclo de reencarnações (samsara/karma). O Evangelho contrapõe a essas buscas cíclicas a esperança da ressurreição corporal dos mortos e a graça imerecida de Deus revelada na redenção pessoal de Cristo.`
  },

  // =========================================================================
  // MÓDULO V: Teologia Prática & Ministério Pastoral
  // =========================================================================
  {
    id: 27,
    disciplinaId: "discipulado",
    codigo: "DIS-501",
    moduloId: 5,
    modulo: "MÓDULO V: Teologia Prática & Ministério Pastoral",
    titulo: "Discipulado Bíblico e a Formação do Caráter Cristão",
    subtitulo: "O mandamento da Grande Comissão de reproduzir a vida de Cristo nos novos crentes",
    categoria: "Vida Devocional & Ministério",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "9 min",
    conteudo: `A ordem expressa do Senhor Jesus na Grande Comissão não foi apenas "fazer convertidos", mas "fazei discípulos de todas as nações, ensinando-os a guardar todas as coisas que vos tenho mandado" (Mt 28.19-20).

1. O Modelo Discipular de Jesus
Jesus investiu três anos de Sua vida intensamente na formação de doze homens. Ele não se limitou a ministrar pregações públicas para multidões; comeu com eles, caminhou com eles, ensinou-lhes a orar e demonstrou com Sua própria vida a humildade de lavar os pés dos discípulos.

2. A Multiplicação Espiritual (O Princípio de 2Tm 2.2)
Paulo ensinou o princípio da reprodução intergeracional: "O que de mim ouviste... transmite-o a homens fiéis que sejam idôneos para também ensinarem a outros". O discipulado genuíno gera mestres e pastores comprometidos que darão continuidade à obra com solidez moral e doutrinária.

3. Maturidade e Prestação de Contas
O discipulado bíblico aborda todas as dimensões da existência: a vida de oração, a santidade nos relacionamentos, a integridade financeira e a conduta familiar. Sem mentoria e discipulado pessoal, a igreja incha em membros nominais, mas mingua em gigantes espirituais.`
  },
  {
    id: 28,
    disciplinaId: "homiletica",
    codigo: "HOM-502",
    moduloId: 5,
    modulo: "MÓDULO V: Teologia Prática & Ministério Pastoral",
    titulo: "Homilética e Oratória Sagrada: A Arte de Pregar a Bíblia",
    subtitulo: "Estrutura do sermão expositivo, fidelidade ao texto e unção do Espírito no púlpito",
    categoria: "Teologia Pastoral",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "10 min",
    conteudo: `A homilética é a ciência da preparação e a arte da entrega da mensagem bíblica. Pregar não é compartilhar opiniões pessoais sobre fatos da semana, mas ser a voz audível de Deus proclamando o texto sagrado com autoridade espiritual.

1. A Primazia do Sermão Expositivo
Dentre as modalidades de pregação (temática, textual e expositiva), o sermão expositivo se destaca por extrair tanto a ideia central quanto as divisões do próprio texto bíblico em seu contexto original. O púlpito expositivo alimenta a congregação com todo o conselho de Deus e protege o pastor do risco de pregar apenas sobre seus temas favoritos.

2. A Estrutura Clássica do Sermão
Uma mensagem bem construída possui:
- Introdução: cativa a atenção do ouvinte e contextualiza a relevância da passagem;
- Proposição e Sentença de Transição: enuncia em uma frase memorável a verdade central;
- Divisões Principais: pontos estruturados que desdobram o texto com clareza lógica;
- Ilustrações: janelas pedagógicas que iluminam os conceitos bíblicos;
- Aplicação Pessoal: desafia a vontade do ouvinte à obediência prática no dia a dia;
- Conclusão: conduz o sermão ao clímax e apelo à decisão de fé.

3. A Dependência Absoluta da Unção do Espírito
A técnica oratória e a boa dicção são vasos úteis, mas se faltar o fogo do Espírito Santo, o sermão permanece como uma obra morta. O pregador deve preparar o sermão nos joelhos, orando para que a Palavra penetre até a divisão da alma e do espírito dos ouvintes.`
  },
  {
    id: 29,
    disciplinaId: "evangelismo",
    codigo: "EVA-503",
    moduloId: 5,
    modulo: "MÓDULO V: Teologia Prática & Ministério Pastoral",
    titulo: "Evangelismo Prático e a Proclamação Contemporânea",
    subtitulo: "Estratégias de conquista de almas, acolhimento de novos convertidos e zelo missionário",
    categoria: "Vida Devocional & Ministério",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "9 min",
    conteudo: `Uma igreja que não evangeliza logo se fossiliza. O chamado para testemunhar do Evangelho não é privilégio exclusivo de evangelistas profissionais de palco, mas dever solene de todo crente lavado e remido no sangue do Cordeiro.

1. A Motivação Bíblica para a Missão
Evangelizamos não para inflar estatísticas denominacionais, mas movidos por três razões irrevogáveis: a glória suprema de Deus entre os povos, a obediência apaixonada ao mandamento de Cristo e a compaixão pelas almas que caminham sem esperança para a perdição eterna.

2. Métodos Eficazes de Abordagem Pessoal
Do evangelismo pessoal de Jesus à beira do poço com a mulher samaritana (Jo 4) ao diálogo culto de Paulo no Areópago de Atenas (At 17), aprendemos que a abordagem evangelística deve respeitar a individualidade do ouvinte. Ouvir com empatia, fazer perguntas que toquem na sede existencial do coração e apresentar a cruz como remédio definitivo são marcas do ganhador de almas.

3. O Acompanhamento Pós-Decisão e Integração
O evangelismo não se encerra no momento em que alguém levanta as mãos no apelo. É imperativo colher dados, visitar o novo convertido, presenteá-lo com a Bíblia e integrá-lo em uma classe discipular da igreja local, assegurando sua consolidação e proteção contra as ciladas do maligno.`
  },
  {
    id: 30,
    disciplinaId: "administracao_eclesiastica",
    codigo: "ADM-504",
    moduloId: 5,
    modulo: "MÓDULO V: Teologia Prática & Ministério Pastoral",
    titulo: "Administração Eclesiástica, Gestão e Conformidade Legal da Igreja",
    subtitulo: "Princípios bíblicos de liderança servidora, transparência financeira e governança",
    categoria: "Teologia Pastoral",
    autor: "Corpo Docente Teologia Acessível",
    data: "16/10/2026",
    tempoLeitura: "10 min",
    conteudo: `A espiritualidade genuína não se opõe à ordem administrativa. O apóstolo Paulo orientou: "Tudo seja feito com decência e ordem" (1Co 14.40). A boa gestão da igreja local glorifica a Deus e protege o testemunho do ministério cristão diante da sociedade.

1. Liderança Bíblica: O Modelo do Pastor Servidor
A administração cristã difere radicalmente do modelo corporativo secular autoritário. Jesus ensinou que o maior no Reino deve ser aquele que serve a todos (Mc 10.43-44). O líder eclesiástico combina firmeza doutrinária com mansidão pastoral, descentralizando tarefas e capacitando outros irmãos para o ministério.

2. Transparência Financeira e Prestação de Contas
As ofertas e dízimos da Igreja são recursos sagrados confiados por Deus para a sustentação pastoral, manutenção do templo e avanço missionário e socorro aos pobres. Ter uma tesouraria organizada, conselho fiscal atuante, relatórios contábeis periódicos e contas bancárias regulares é obrigação ética de toda liderança piedosa.

3. Legislação, Estatutos e Proteção Jurídica
A igreja deve atender rigorosamente à legislação vigente: elaboração correta de estatutos sociais e atas de eleição devidamente registradas em cartório de pessoas jurídicas, conformidade tributária e patrimonial, e zelo pela segurança física dos fiéis em suas reuniões. A excelência administrativa é muralha de proteção para a honra do Evangelho.`
  }
];
