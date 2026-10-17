// Banco de Provas Oficiais SEBITAN — MÓDULO 4
// 20 Questões por Prova (Prova 1: Teórica • Prova 2: Exegética & Prática)
// Total por disciplina: 40 Questões com gabarito e fundamentação teológica.

export const provasModulo4 = [
  {
    "id": "apologetica",
    "ordem": 23,
    "codigo": "APO-401",
    "moduloId": 4,
    "modulo": "MÓDULO IV: Apologética, Ciência & Cosmovisão",
    "titulo": "Apologética Cristã",
    "subtitulo": "Fundamentação racional do cristianismo e diálogo com pensadores contemporâneos",
    "cargaHoraria": 50,
    "descricao": "A defesa da fé (1Pe 3.15), respostas ao ceticismo, ateísmo e relativismo moral, ressurreição histórica de Jesus e a coerência da cosmovisão bíblica.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "apologetica_p1",
      "titulo": "Apologética Cristã — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "APO-401-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "O termo apologética vem do grego 'apologia', que significa defesa ou resposta a um ataque, como usado em Atos 26.1 e 1 Pedro 3.16.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila define: 'O termo vem do grego, apologia, defesa, uma resposta ao ataque (At 26.1; 1 Pe 3.16)'. O diálogo Apologia de Platão expõe a defesa de Sócrates."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "De acordo com a apostila, apologética e polêmica são sinônimos perfeitos, ambas tratam do debate interno entre cristãos sobre doutrina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A apostila distingue: 'Apologética é a defesa da fé diante dos incrédulos; polêmica é o debate efetuado entre cristãos para determinar a verdadeira posição cristã'."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "O texto-base bíblico direto da apologética é 1 Pedro 3.15: 'estando sempre preparados para responder a todo aquele que vos pedir razão da esperança que há em vós'.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila apresenta 1 Pe 3.15 como a declaração direta que fundamenta a apologética, exigindo raciocínios além de textos-prova isolados."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "Segundo a apostila, Tertuliano considerava a filosofia produto da mente pagã e, por isso, inútil para defender a fé cristã.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! 'Tertuliano supunha que a filosofia é produto da mente pagã e consequentemente inútil para defender a fé', posição seguida por Arnóbio e Lactâncio."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "A apostila ensina que a revelação divina ocorre exclusivamente por visões ditadas a homens santos, sem qualquer participação de história, poesia ou ensino racional nos Livros Sagrados.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A apostila afirma que os Livros Sagrados contêm história, poesia, ensino racional e discernimento intuitivo, além de visões; a revelação chega por muitos meios."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Quais são as quatro fontes/meios pelos quais o conhecimento chega ao homem, segundo a apostila de Apologética?",
          "opcoes": [
            "Apenas revelação e tradição eclesiástica.",
            "Observação empírica (sentidos), intuição, razão e revelação (dom de Deus por visões, sonhos, profecias).",
            "Filosofia, sociologia, psicologia e política.",
            "Meditação oriental, astrologia, numerologia e misticismo."
          ],
          "respostaCorreta": 1,
          "explicacao": "A apostila lista: 1) observação empírica pelos sentidos; 2) intuição; 3) razão que penetra enigmas; 4) revelação como dom de Deus (visões, profecias, sonhos reduzidos a Livro Sagrado)."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Como os pais alexandrinos (Clemente, Orígenes) viam o uso da filosofia platônica e estoica?",
          "opcoes": [
            "Rejeitavam toda filosofia como demoníaca e inútil.",
            "Usavam-na proposital e habilidosamente para dar à fé cristã uma expressão filosófica mais clara e aguçada.",
            "Usavam-na apenas para atacar o cristianismo.",
            "Consideravam-na superior à revelação bíblica."
          ],
          "respostaCorreta": 1,
          "explicacao": "A apostila: 'Os pais alexandrinos usavam a filosofia platônica e estoica para dar à fé cristã uma expressão filosófica. A filosofia pode aguçar os conceitos teológicos'."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Qual era a posição de Agostinho sobre a filosofia em relação à fé?",
          "opcoes": [
            "Que a filosofia deve ser totalmente abandonada.",
            "Que a filosofia é uma criada útil que pode esclarecer e defender a fé religiosa.",
            "Que a fé não precisa de qualquer defesa racional.",
            "Que apenas a ciência experimental vale."
          ],
          "respostaCorreta": 1,
          "explicacao": "A apostila registra: 'Agostinho ensinava que a filosofia é uma criada útil que pode ser empregada em favor da fé religiosa, esclarecendo-a e defendendo-a'."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Qual obra de Tomás de Aquino defendeu a fé cristã contra o uso materialista de Aristóteles por filósofos árabes como Averróis?",
          "opcoes": [
            "Analogia da Religião.",
            "Suma contra os Gentios (Suma contra Gentiles).",
            "Institutas da Religião Cristã.",
            "Apologia de Sócrates."
          ],
          "respostaCorreta": 1,
          "explicacao": "A apostila: 'Tomás de Aquino foi um apologeta refinado. Sua obra Suma contra Gentiles defendeu a fé contra a maneira materialista como Averróis usava Aristóteles'."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Segundo o capítulo final da apostila, como o cristão deve entender os milagres?",
          "opcoes": [
            "Negar todos os milagres como mitos impossíveis.",
            "Definir milagre como manifestação de lei natural superior desconhecida ou novo ato criador que a ciência não explica; o esforço apologético deve explicar o propósito, não negar o fato.",
            "Atribuir todos os milagres a truques de mágica.",
            "Dizer que milagres contradizem toda ciência e por isso são falsos."
          ],
          "respostaCorreta": 1,
          "explicacao": "A apostila conclui que milagre pode ser lei natural superior ou novo ato criador inexplicável pela ciência; 'praticamente nada sabemos' e o esforço deve ser aprender o propósito, não desmitologizar."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Apologética Cristã, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Apologética Cristã estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Apologética Cristã, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Apologética Cristã visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Apologética Cristã, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Apologética Cristã (APO-401) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Apologética Cristã no currículo do SEBITAN?",
          "opcoes": [
            "Dominar os fundamentos doutrinários e exegéticos para edificar o Corpo de Cristo com fidelidade às Escrituras.",
            "Apenas obter um diploma sem aplicação no ministério da igreja local.",
            "Substituir a oração e a dependência do Espírito Santo por teorias puramente humanas.",
            "Promover debates infindáveis que geram contendas doutrinárias sem edificação espiritual."
          ],
          "respostaCorreta": 0,
          "explicacao": "O propósito do SEBITAN é capacitar o ministro para manejar bem a Palavra da verdade com profunda reverência, temor e fidelidade."
        },
        {
          "id": 17,
          "tipo": "multipla_escolha",
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Apologética Cristã resguarda a saúde da igreja?",
          "opcoes": [
            "Adotando o relativismo teológico para agradar a todos os ouvintes sem distinção.",
            "Fundamentando o estudante na sã doutrina bíblica e na autoridade inerrante da Bíblia Sagrada.",
            "Ignorando os erros doutrinários e permitindo qualquer tipo de ensinamento nos cultos.",
            "Isolando a congregação do contato com a sociedade e impedindo o evangelismo."
          ],
          "respostaCorreta": 1,
          "explicacao": "A sã doutrina bíblica atua como vacina contra o veneno do erro doutrinário, garantindo ortodoxia e preservação do evangelho autêntico."
        },
        {
          "id": 18,
          "tipo": "multipla_escolha",
          "enunciado": "No que diz respeito à aplicação prática de Apologética Cristã, qual atitude deve caracterizar o obreiro ou líder aprovado?",
          "opcoes": [
            "Orgulho intelectual e desprezo pelos fiéis que possuem menor instrução acadêmica.",
            "Humildade cristã, espírito servil, compromisso irrevogável com a oração e amor pelas almas.",
            "Cobrança de valores abusivos para compartilhar os conhecimentos bíblicos adquiridos.",
            "Abandono das responsabilidades pastorais para dedicar-se unicamente ao debate teórico."
          ],
          "respostaCorreta": 1,
          "explicacao": "O verdadeiro teólogo e ministro cristão reflete o caráter de Cristo: manso, humilde de coração e dedicado a servir o próximo com amor."
        },
        {
          "id": 19,
          "tipo": "multipla_escolha",
          "enunciado": "Como a disciplina de Apologética Cristã dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
          "opcoes": [
            "Ensinando que a estrutura administrativa dispensa a operação dos dons do Espírito Santo.",
            "Equilibrando a ordem, a organização e o preparo intelectual com o fervor espiritual e a dependência de Deus.",
            "Determinando que apenas as leis civis devem governar a comunhão dos santos.",
            "Eliminando a necessidade de prestação de contas financeira e ética no ministério."
          ],
          "respostaCorreta": 1,
          "explicacao": "O SEBITAN ensina o equilíbrio bíblico: mente instruída na verdade divina e coração em chamas pelo poder do Espírito Santo."
        },
        {
          "id": 20,
          "tipo": "multipla_escolha",
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Apologética Cristã?",
          "opcoes": [
            "Um texto nunca pode significar aquilo que nunca significou para o seu autor original e seus primeiros destinatários.",
            "Cada leitor tem o direito de atribuir o significado que melhor lhe convém no momento.",
            "O sentido literal deve ser sempre descartado em favor de interpretações místicas alegóricas.",
            "A Bíblia contém erros morais que necessitam ser corrigidos pela cultura moderna pós-moderna."
          ],
          "respostaCorreta": 0,
          "explicacao": "Este é o axioma hermenêutico fundamental: o significado primário determinado pelo Espírito Santo ao autor original é a base de toda exegese legítima."
        }
      ]
    },
    "prova2": {
      "id": "apologetica_p2",
      "titulo": "Apologética Cristã — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "APO-401-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Apologética Cristã, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Apologética Cristã podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Apologética Cristã, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Apologética Cristã significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Apologética Cristã sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Apologética Cristã, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Apologética Cristã autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Apologética Cristã, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Apologética Cristã dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Apologética Cristã capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Apologética Cristã. Qual deve ser sua conduta bíblica imediata?",
          "opcoes": [
            "Buscar a orientação do Espírito Santo em oração e examinar meticulosamente as Escrituras para orientar o rebanho com mansidão e firmeza doutrinária.",
            "Expulsar sumariamente todos os envolvidos sem ouvir suas dúvidas ou explicar as passagens bíblicas pertinentes.",
            "Omitir-se e fingir que nada está acontecendo para não perder prestígio pessoal.",
            "Fazer uma votação na rede social e adotar a opinião da maioria dos internautas."
          ],
          "respostaCorreta": 0,
          "explicacao": "O modelo bíblico ensinado aos pastores e líderes pelo SEBITAN exige aconselhamento bíblico fundamentado na Palavra de Deus, paciência e instrução."
        },
        {
          "id": 12,
          "tipo": "multipla_escolha",
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Apologética Cristã contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
          "opcoes": [
            "Impedindo que novos convertidos tenham acesso a materiais bíblicos aprofundados.",
            "Formando discípulos biblicamente maduros, capazes de ensinar a outros tudo quanto Cristo ordenou.",
            "Restringindo a mensagem da salvação unicamente aos membros fundadores da comunidade.",
            "Substituindo a pregação de arrependimento e remissão de pecados por entretenimento de auditório."
          ],
          "respostaCorreta": 1,
          "explicacao": "A Grande Comissão inclui ensinar a guardar todas as coisas que Jesus ensinou, exigindo sólida formação doutrinária e discipular contínua."
        },
        {
          "id": 13,
          "tipo": "multipla_escolha",
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Apologética Cristã do literalismo ingênuo ou do alegorismo desmedido?",
          "opcoes": [
            "A consideração honesta dos gêneros literários bíblicos (poesia, narrativa, profecia, epístola) e o sentido gramático-histórico pretendido pelo autor sagrado.",
            "A interpretação de que todas as frases da Bíblia são metáforas sem valor histórico real.",
            "A obrigatoriedade de interpretar textos poéticos com a mesma rigidez de tratados matemáticos.",
            "A rejeição sumária de qualquer ferramenta de linguística ou dicionário hebraico e grego."
          ],
          "respostaCorreta": 0,
          "explicacao": "Cada livro e trecho bíblico deve ser lido conforme o seu gênero literário sob a regra gramático-histórica para não distorcer a intenção do Espírito Santo."
        },
        {
          "id": 14,
          "tipo": "multipla_escolha",
          "enunciado": "Em Apologética Cristã, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
          "opcoes": [
            "Afirmando que Deus não tem controle algum sobre a história humana e depende das decisões dos homens.",
            "Reconhecendo que a soberania divina e a responsabilidade humana são verdades bíblicas que coexistem harmoniosamente sob os mistérios insondáveis da graça de Deus.",
            "Ensinando o fatalismo absoluto que elimina a necessidade de evangelizar ou orar por conversões.",
            "Descartando qualquer menção ao pecado humano e à justiça retributiva de Deus."
          ],
          "respostaCorreta": 1,
          "explicacao": "O equilíbrio bíblico do SEBITAN rejeita extremos fatalistas e mantém tanto a soberania do Criador quanto o dever de pregar o Evangelho a toda criatura."
        },
        {
          "id": 15,
          "tipo": "multipla_escolha",
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Apologética Cristã, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
          "opcoes": [
            "Arrogância teológica e discussões infrutíferas no seio do lar.",
            "Um testemunho irrepreensível de santidade, paciência, retidão financeira e amor ao próximo.",
            "Isolamento social e desdém pelas pessoas que não frequentam seminários.",
            "Uso do conhecimento bíblico como arma para humilhar novos convertidos."
          ],
          "respostaCorreta": 1,
          "explicacao": "A verdadeira teologia cristã produz o fruto do Espírito (Gl 5.22-23) e manifesta o testemunho de vida que glorifica o Pai que está nos céus."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Apologética Cristã?",
          "opcoes": [
            "Servir como guia estruturado de estudo complementar, estimulando o aluno a aprofundar suas raízes diretamente na Bíblia Sagrada.",
            "Substituir a leitura direta dos textos do Antigo e Novo Testamento.",
            "Impedir que o aluno pense de forma reflexiva ou faça anotações pessoais.",
            "Fornecer textos com opiniões puramente políticas sem valor espiritual."
          ],
          "respostaCorreta": 0,
          "explicacao": "O compêndio do SEBITAN atua como mapa e bússola, conduzindo o estudante ao tesouro inesgotável das Escrituras Sagradas."
        },
        {
          "id": 17,
          "tipo": "multipla_escolha",
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Apologética Cristã orienta o conselho pastoral?",
          "opcoes": [
            "Capitulando diante das pressões ideológicas mundanas para evitar desaprovação pública.",
            "Mantendo fidelidade aos princípios eternos da Lei Moral de Deus, acolhendo as pessoas com graça e verdade.",
            "Recusando qualquer diálogo com pessoas em sofrimento moral ou espiritual.",
            "Inventando regras humanas severas não respaldadas pelo ensinamento bíblico."
          ],
          "respostaCorreta": 1,
          "explicacao": "O ministério exemplar de Jesus combinava graça e verdade (Jo 1.14): amor incondicional ao pecador e compromisso inegociável com a santidade e a verdade divina."
        },
        {
          "id": 18,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Apologética Cristã?",
          "opcoes": [
            "Apenas decorar termos técnicos sem capacidade de transmiti-los numa escola dominical ou sermão.",
            "A capacidade de explicar com clareza a mensagem aos outros, defender com mansidão a fé e viver de acordo com a verdade aprendida.",
            "Concluir as leituras na maior velocidade possível sem absorção reflexiva.",
            "Preencher os questionários sem compreender o significado dos conceitos."
          ],
          "respostaCorreta": 1,
          "explicacao": "2 Timóteo 2.2: O que de mim ouviste, transmite-o a homens fiéis que sejam idôneos para também ensinarem a outros."
        },
        {
          "id": 19,
          "tipo": "multipla_escolha",
          "enunciado": "Ao concluir com êxito a Prova 2 de Apologética Cristã, que marco acadêmico o aluno atinge no seu histórico escolar?",
          "opcoes": [
            "A integralização da carga horária de 50 horas com nota oficial e progresso registrado no sistema para expedição do Diploma oficial.",
            "A anulação de todas as matérias anteriores para recomeçar o curso do zero.",
            "A perda imediata do acesso à plataforma de estudos.",
            "A obrigatoriedade de prestar serviço civil não eclesiástico."
          ],
          "respostaCorreta": 0,
          "explicacao": "A conclusão das duas provas com média igual ou superior a 7,0 confere a aprovação acadêmica na disciplina rumo ao Grau Teológico."
        },
        {
          "id": 20,
          "tipo": "multipla_escolha",
          "enunciado": "Qual a importância de conciliar o estudo do PDF, a audição do Áudio e a visualização do Vídeo antes de realizar esta avaliação?",
          "opcoes": [
            "Uma mera burocracia sem qualquer impacto pedagógico ou fixação de conteúdo.",
            "Uma metodologia ativa multissensorial comprovada que maximiza a retenção, desenvolve raciocínio crítico e prepara com solidez o futuro teólogo.",
            "Um método punitivo para dificultar a aprovação dos estudantes.",
            "Uma forma de prolongar desnecessariamente o tempo de estudo sem agregar valor."
          ],
          "respostaCorreta": 1,
          "explicacao": "A aprendizagem multimídia (leitura reflexiva, audição narrada e suporte visual) estimula múltiplos canais cognitivos, garantindo domínio duradouro."
        }
      ]
    },
  },
  {
    "id": "biblia_e_ciencia",
    "ordem": 24,
    "codigo": "CIE-402",
    "moduloId": 4,
    "modulo": "MÓDULO IV: Apologética, Ciência & Cosmovisão",
    "titulo": "A Bíblia e a Ciência: Harmonia das Origens",
    "subtitulo": "Criacionismo bíblico, astronomia, idade da terra e o debate contemporâneo",
    "cargaHoraria": 50,
    "descricao": "Origem do universo, sintonia fina (fine-tuning), modelos criacionistas (terra jovem, terra antiga, design inteligente), bioética e integridade científica.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "biblia_e_ciencia_p1",
      "titulo": "A Bíblia e a Ciência: Harmonia das Origens — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "CIE-402-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "Conforme o capítulo 1 da apostila, o ateu que tenta negar a existência de Deus baseado unicamente na ausência de comprovação matemática comete uma falha lógica, pois segundo o próprio Teorema de Gödel a lógica formal é incompleta, de modo que negar a Deus sem provas é um ato de fé cega e ilógica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Páginas 2-3 da apostila: 'A razão sozinha jamais prova ou nega a existência de Deus. O ateu contraria sua própria base ao afirmar sem provas que Deus não existe, transformando sua descrença em um ato de fé irracional'."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "No estudo das condições da Terra para a vida, a atmosfera terrestre possui entre 18% e 25% de oxigênio livre (atualmente 21%), intervalo exato que sustenta a vida, pois uma porcentagem inferior impediria a respiração e uma porcentagem superior tornaria o ar tóxico e inflamável.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Páginas 5-6 da apostila: 'Nosso planeta tem quantidade de oxigênio exatamente entre o limite mínimo (18%) e máximo (25%), estando em 21%. Menos que 18% não sustenta vida e acima de 25% torna-se tóxico'."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "A palavra hebraica 'Yom' utilizada no relato da criação em Gênesis significa exclusivamente um período literal e inflexível de 24 horas solares, sendo impossível seu emprego na Bíblia para longos períodos ou eras de tempo.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Páginas 8-9 da apostila: A palavra 'Yom' é frequentemente usada nas Escrituras para períodos longos ou indefinidos (Gn 2.4; Sl 95.8; 2 Pe 3.8). Além disso, o sol e a lua só aparecem como luzeiros reguladores no quarto dia criativo."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "A Segunda Lei da Termodinâmica (lei da entropia) e a Lei da Biogênese de Pasteur (vida só provém de vida preexistente) refutam cientificamente a teoria da geração espontânea e da transmutação de espécies da evolução materialista.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Páginas 13-14 da apostila: A 2ª Lei da Termodinâmica estabelece que sistemas naturais caminham para a desorganização (não para auto-organização espontânea), e a Biogênese prova que matéria inanimada jamais gerou vida."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "A recomendação bíblica em Gênesis 17:12 para a circuncisão de recém-nascidos exatamente no 8º dia foi confirmada pela medicina moderna em 1946 pela Associação Médica Americana, pois é no oitavo dia que o elemento de coagulação (vitamina K/protrombina) atinge um pico único de 110% do normal.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 18 da apostila: Pesquisas médicas provaram que no 8º dia a taxa de protrombina atinge 110% do valor normal, evitando hemorragias no bebê. A Bíblia antecipou essa verdade com 3.600 anos de antecedência!"
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Segundo o cálculo da lei das probabilidades apresentado no capítulo 4 da apostila, qual é a probabilidade matemática de Moisés ter acertado a ordem cronológica exata dos 12 principais eventos da Criação por mero acaso?",
          "opcoes": [
            "Uma chance em 1.000.",
            "Uma chance em 439.901.600 (uma em mais de 439 milhões de possibilidades).",
            "Uma chance em 50.000.",
            "Cinquenta por cento (50%)."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 12 da apostila: O produto das probabilidades de ordenação de 12 eventos (1/12 x 1/11 x 1/10 ... x 1/1) resulta em 1 / 439.901.600, provando que Moisés foi inspirado pelo Deus Criador que estabeleceu a ordem."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Qual famosa descoberta arqueológica e geológica realizada pelo arqueólogo britânico Charles Leonard Woolley na antiga cidade de Ur dos Caldeus comprovou a veracidade do Dilúvio de Gênesis?",
          "opcoes": [
            "Uma inscrição em granito com a genealogia de Abraão.",
            "Uma camada contínua de limo de mais de três metros de espessura com conchas e restos marinhos em pleno deserto, cobrindo uma camada com vestígios de habitação humana anterior.",
            "O sarcófago intacto do rei Ninrode com vestígios de ouro.",
            "Um mapa estelar babilônico com o trajeto do cometa Halley."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 16 da apostila: Woolley escavou em Ur e encontrou uma camada maciça de limo de sedimentação aquática de 3 metros de profundidade com animais marinhos, separando o solo habitado primitivo das camadas posteriores."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Quais referências bíblicas contêm antecipações científicas impressionantes comprovadas pela ciência moderna muitos séculos após terem sido escritas?",
          "opcoes": [
            "Jó 26.7 (a Terra suspensa sobre o nada no espaço), Isaías 40.22 (a redondeza/esfericidade da Terra), Jó 28.25 (o peso do vento/pressão do ar) e Hebreus 11.3 (a matéria visível feita de partículas invisíveis/átomos).",
            "Apenas textos da tradição rabínica medieval.",
            "Descrições poéticas que defendiam a Terra sustentada nas costas de tartarugas gigantes.",
            "Textos que afirmavam que as estrelas eram lâmpadas fixas na abóbada celeste."
          ],
          "respostaCorreta": 0,
          "explicacao": "Páginas 20-23 da apostila: A Bíblia antecipou a gravidade e o vácuo espacial ('suspende a terra sobre o nada' - Jó 26.7), a redondeza terrestre ('redondeza da terra' - Is 40.22), a pressão atmosférica ('peso ao vento' - Jó 28.25) e a constituição atômica invisível (Hb 11.3)."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "De acordo com a apostila do SEBITAN, como a Bíblia e as ciências astronômicas explicam a ausência de vida inteligente em outros planetas do Universo?",
          "opcoes": [
            "A Bíblia afirma que existem milhares de civilizações que já foram salvas por apóstolos extraterrestres.",
            "O sacrifício expiatório único de Jesus Cristo ocorreu na Terra para a redenção de toda a criação; se houvesse outros seres inteligentes caídos pelo pecado, Cristo teria que morrer repetidamente em cada planeta, o que a Bíblia categoricamente descarta (Hb 9.26-28; Rm 8).",
            "A Bíblia não faz distinção entre o homem e as estrelas celestes.",
            "Os anjos habitam nos asteroides entre Marte e Júpiter."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 25 da apostila: A Terra foi o planeta singular escolhido por Deus para a criação de seres à Sua imagem e semelhança e para a encarnação do Filho de Deus, cujo sangue vertido na cruz é a redenção cósmica definitiva."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Em relação aos abalos sísmicos (terremotos) apontados por Jesus em Mateus 24:7 como sinal de Sua volta, qual é o paradoxo observado entre a ciência geológica e a realidade contemporânea?",
          "opcoes": [
            "Os terremotos foram totalmente erradicados pela engenharia moderna.",
            "Pela acomodação natural da crosta terrestre, era esperado que os terremotos destruidores diminuíssem ao longo dos séculos; no entanto, o número e a intensidade de abalos sísmicos crescem continuamente, cumprindo a profecia de 'dores de parto'.",
            "Os terremotos ocorrem apenas nos polos e não afetam cidades populosas.",
            "A Bíblia nunca mencionou terremotos nos discursos escatológicos de Cristo."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 27 da apostila: Cientificamente a acomodação tectônica deveria diminuir os abalos com o tempo, mas a multiplicação crescente de terremotos confirma as 'dores de parto' anunciadas por Cristo em Mateus 24.7."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de A Bíblia e a Ciência: Harmonia das Origens, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em A Bíblia e a Ciência: Harmonia das Origens estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em A Bíblia e a Ciência: Harmonia das Origens, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de A Bíblia e a Ciência: Harmonia das Origens visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em A Bíblia e a Ciência: Harmonia das Origens, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de A Bíblia e a Ciência: Harmonia das Origens (CIE-402) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de A Bíblia e a Ciência: Harmonia das Origens no currículo do SEBITAN?",
          "opcoes": [
            "Dominar os fundamentos doutrinários e exegéticos para edificar o Corpo de Cristo com fidelidade às Escrituras.",
            "Apenas obter um diploma sem aplicação no ministério da igreja local.",
            "Substituir a oração e a dependência do Espírito Santo por teorias puramente humanas.",
            "Promover debates infindáveis que geram contendas doutrinárias sem edificação espiritual."
          ],
          "respostaCorreta": 0,
          "explicacao": "O propósito do SEBITAN é capacitar o ministro para manejar bem a Palavra da verdade com profunda reverência, temor e fidelidade."
        },
        {
          "id": 17,
          "tipo": "multipla_escolha",
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em A Bíblia e a Ciência: Harmonia das Origens resguarda a saúde da igreja?",
          "opcoes": [
            "Adotando o relativismo teológico para agradar a todos os ouvintes sem distinção.",
            "Fundamentando o estudante na sã doutrina bíblica e na autoridade inerrante da Bíblia Sagrada.",
            "Ignorando os erros doutrinários e permitindo qualquer tipo de ensinamento nos cultos.",
            "Isolando a congregação do contato com a sociedade e impedindo o evangelismo."
          ],
          "respostaCorreta": 1,
          "explicacao": "A sã doutrina bíblica atua como vacina contra o veneno do erro doutrinário, garantindo ortodoxia e preservação do evangelho autêntico."
        },
        {
          "id": 18,
          "tipo": "multipla_escolha",
          "enunciado": "No que diz respeito à aplicação prática de A Bíblia e a Ciência: Harmonia das Origens, qual atitude deve caracterizar o obreiro ou líder aprovado?",
          "opcoes": [
            "Orgulho intelectual e desprezo pelos fiéis que possuem menor instrução acadêmica.",
            "Humildade cristã, espírito servil, compromisso irrevogável com a oração e amor pelas almas.",
            "Cobrança de valores abusivos para compartilhar os conhecimentos bíblicos adquiridos.",
            "Abandono das responsabilidades pastorais para dedicar-se unicamente ao debate teórico."
          ],
          "respostaCorreta": 1,
          "explicacao": "O verdadeiro teólogo e ministro cristão reflete o caráter de Cristo: manso, humilde de coração e dedicado a servir o próximo com amor."
        },
        {
          "id": 19,
          "tipo": "multipla_escolha",
          "enunciado": "Como a disciplina de A Bíblia e a Ciência: Harmonia das Origens dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
          "opcoes": [
            "Ensinando que a estrutura administrativa dispensa a operação dos dons do Espírito Santo.",
            "Equilibrando a ordem, a organização e o preparo intelectual com o fervor espiritual e a dependência de Deus.",
            "Determinando que apenas as leis civis devem governar a comunhão dos santos.",
            "Eliminando a necessidade de prestação de contas financeira e ética no ministério."
          ],
          "respostaCorreta": 1,
          "explicacao": "O SEBITAN ensina o equilíbrio bíblico: mente instruída na verdade divina e coração em chamas pelo poder do Espírito Santo."
        },
        {
          "id": 20,
          "tipo": "multipla_escolha",
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de A Bíblia e a Ciência: Harmonia das Origens?",
          "opcoes": [
            "Um texto nunca pode significar aquilo que nunca significou para o seu autor original e seus primeiros destinatários.",
            "Cada leitor tem o direito de atribuir o significado que melhor lhe convém no momento.",
            "O sentido literal deve ser sempre descartado em favor de interpretações místicas alegóricas.",
            "A Bíblia contém erros morais que necessitam ser corrigidos pela cultura moderna pós-moderna."
          ],
          "respostaCorreta": 0,
          "explicacao": "Este é o axioma hermenêutico fundamental: o significado primário determinado pelo Espírito Santo ao autor original é a base de toda exegese legítima."
        }
      ]
    },
    "prova2": {
      "id": "biblia_e_ciencia_p2",
      "titulo": "A Bíblia e a Ciência: Harmonia das Origens — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "CIE-402-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de A Bíblia e a Ciência: Harmonia das Origens, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de A Bíblia e a Ciência: Harmonia das Origens podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre A Bíblia e a Ciência: Harmonia das Origens, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em A Bíblia e a Ciência: Harmonia das Origens significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende A Bíblia e a Ciência: Harmonia das Origens sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de A Bíblia e a Ciência: Harmonia das Origens, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de A Bíblia e a Ciência: Harmonia das Origens autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em A Bíblia e a Ciência: Harmonia das Origens, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em A Bíblia e a Ciência: Harmonia das Origens dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de A Bíblia e a Ciência: Harmonia das Origens capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a A Bíblia e a Ciência: Harmonia das Origens. Qual deve ser sua conduta bíblica imediata?",
          "opcoes": [
            "Buscar a orientação do Espírito Santo em oração e examinar meticulosamente as Escrituras para orientar o rebanho com mansidão e firmeza doutrinária.",
            "Expulsar sumariamente todos os envolvidos sem ouvir suas dúvidas ou explicar as passagens bíblicas pertinentes.",
            "Omitir-se e fingir que nada está acontecendo para não perder prestígio pessoal.",
            "Fazer uma votação na rede social e adotar a opinião da maioria dos internautas."
          ],
          "respostaCorreta": 0,
          "explicacao": "O modelo bíblico ensinado aos pastores e líderes pelo SEBITAN exige aconselhamento bíblico fundamentado na Palavra de Deus, paciência e instrução."
        },
        {
          "id": 12,
          "tipo": "multipla_escolha",
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira A Bíblia e a Ciência: Harmonia das Origens contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
          "opcoes": [
            "Impedindo que novos convertidos tenham acesso a materiais bíblicos aprofundados.",
            "Formando discípulos biblicamente maduros, capazes de ensinar a outros tudo quanto Cristo ordenou.",
            "Restringindo a mensagem da salvação unicamente aos membros fundadores da comunidade.",
            "Substituindo a pregação de arrependimento e remissão de pecados por entretenimento de auditório."
          ],
          "respostaCorreta": 1,
          "explicacao": "A Grande Comissão inclui ensinar a guardar todas as coisas que Jesus ensinou, exigindo sólida formação doutrinária e discipular contínua."
        },
        {
          "id": 13,
          "tipo": "multipla_escolha",
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em A Bíblia e a Ciência: Harmonia das Origens do literalismo ingênuo ou do alegorismo desmedido?",
          "opcoes": [
            "A consideração honesta dos gêneros literários bíblicos (poesia, narrativa, profecia, epístola) e o sentido gramático-histórico pretendido pelo autor sagrado.",
            "A interpretação de que todas as frases da Bíblia são metáforas sem valor histórico real.",
            "A obrigatoriedade de interpretar textos poéticos com a mesma rigidez de tratados matemáticos.",
            "A rejeição sumária de qualquer ferramenta de linguística ou dicionário hebraico e grego."
          ],
          "respostaCorreta": 0,
          "explicacao": "Cada livro e trecho bíblico deve ser lido conforme o seu gênero literário sob a regra gramático-histórica para não distorcer a intenção do Espírito Santo."
        },
        {
          "id": 14,
          "tipo": "multipla_escolha",
          "enunciado": "Em A Bíblia e a Ciência: Harmonia das Origens, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
          "opcoes": [
            "Afirmando que Deus não tem controle algum sobre a história humana e depende das decisões dos homens.",
            "Reconhecendo que a soberania divina e a responsabilidade humana são verdades bíblicas que coexistem harmoniosamente sob os mistérios insondáveis da graça de Deus.",
            "Ensinando o fatalismo absoluto que elimina a necessidade de evangelizar ou orar por conversões.",
            "Descartando qualquer menção ao pecado humano e à justiça retributiva de Deus."
          ],
          "respostaCorreta": 1,
          "explicacao": "O equilíbrio bíblico do SEBITAN rejeita extremos fatalistas e mantém tanto a soberania do Criador quanto o dever de pregar o Evangelho a toda criatura."
        },
        {
          "id": 15,
          "tipo": "multipla_escolha",
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em A Bíblia e a Ciência: Harmonia das Origens, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
          "opcoes": [
            "Arrogância teológica e discussões infrutíferas no seio do lar.",
            "Um testemunho irrepreensível de santidade, paciência, retidão financeira e amor ao próximo.",
            "Isolamento social e desdém pelas pessoas que não frequentam seminários.",
            "Uso do conhecimento bíblico como arma para humilhar novos convertidos."
          ],
          "respostaCorreta": 1,
          "explicacao": "A verdadeira teologia cristã produz o fruto do Espírito (Gl 5.22-23) e manifesta o testemunho de vida que glorifica o Pai que está nos céus."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de A Bíblia e a Ciência: Harmonia das Origens?",
          "opcoes": [
            "Servir como guia estruturado de estudo complementar, estimulando o aluno a aprofundar suas raízes diretamente na Bíblia Sagrada.",
            "Substituir a leitura direta dos textos do Antigo e Novo Testamento.",
            "Impedir que o aluno pense de forma reflexiva ou faça anotações pessoais.",
            "Fornecer textos com opiniões puramente políticas sem valor espiritual."
          ],
          "respostaCorreta": 0,
          "explicacao": "O compêndio do SEBITAN atua como mapa e bússola, conduzindo o estudante ao tesouro inesgotável das Escrituras Sagradas."
        },
        {
          "id": 17,
          "tipo": "multipla_escolha",
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de A Bíblia e a Ciência: Harmonia das Origens orienta o conselho pastoral?",
          "opcoes": [
            "Capitulando diante das pressões ideológicas mundanas para evitar desaprovação pública.",
            "Mantendo fidelidade aos princípios eternos da Lei Moral de Deus, acolhendo as pessoas com graça e verdade.",
            "Recusando qualquer diálogo com pessoas em sofrimento moral ou espiritual.",
            "Inventando regras humanas severas não respaldadas pelo ensinamento bíblico."
          ],
          "respostaCorreta": 1,
          "explicacao": "O ministério exemplar de Jesus combinava graça e verdade (Jo 1.14): amor incondicional ao pecador e compromisso inegociável com a santidade e a verdade divina."
        },
        {
          "id": 18,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de A Bíblia e a Ciência: Harmonia das Origens?",
          "opcoes": [
            "Apenas decorar termos técnicos sem capacidade de transmiti-los numa escola dominical ou sermão.",
            "A capacidade de explicar com clareza a mensagem aos outros, defender com mansidão a fé e viver de acordo com a verdade aprendida.",
            "Concluir as leituras na maior velocidade possível sem absorção reflexiva.",
            "Preencher os questionários sem compreender o significado dos conceitos."
          ],
          "respostaCorreta": 1,
          "explicacao": "2 Timóteo 2.2: O que de mim ouviste, transmite-o a homens fiéis que sejam idôneos para também ensinarem a outros."
        },
        {
          "id": 19,
          "tipo": "multipla_escolha",
          "enunciado": "Ao concluir com êxito a Prova 2 de A Bíblia e a Ciência: Harmonia das Origens, que marco acadêmico o aluno atinge no seu histórico escolar?",
          "opcoes": [
            "A integralização da carga horária de 50 horas com nota oficial e progresso registrado no sistema para expedição do Diploma oficial.",
            "A anulação de todas as matérias anteriores para recomeçar o curso do zero.",
            "A perda imediata do acesso à plataforma de estudos.",
            "A obrigatoriedade de prestar serviço civil não eclesiástico."
          ],
          "respostaCorreta": 0,
          "explicacao": "A conclusão das duas provas com média igual ou superior a 7,0 confere a aprovação acadêmica na disciplina rumo ao Grau Teológico."
        },
        {
          "id": 20,
          "tipo": "multipla_escolha",
          "enunciado": "Qual a importância de conciliar o estudo do PDF, a audição do Áudio e a visualização do Vídeo antes de realizar esta avaliação?",
          "opcoes": [
            "Uma mera burocracia sem qualquer impacto pedagógico ou fixação de conteúdo.",
            "Uma metodologia ativa multissensorial comprovada que maximiza a retenção, desenvolve raciocínio crítico e prepara com solidez o futuro teólogo.",
            "Um método punitivo para dificultar a aprovação dos estudantes.",
            "Uma forma de prolongar desnecessariamente o tempo de estudo sem agregar valor."
          ],
          "respostaCorreta": 1,
          "explicacao": "A aprendizagem multimídia (leitura reflexiva, audição narrada e suporte visual) estimula múltiplos canais cognitivos, garantindo domínio duradouro."
        }
      ]
    },
  },
  {
    "id": "heresiologia",
    "ordem": 25,
    "codigo": "HER-403",
    "moduloId": 4,
    "modulo": "MÓDULO IV: Apologética, Ciência & Cosmovisão",
    "titulo": "Heresiologia: O Discernimento das Seitas",
    "subtitulo": "Desvios doutrinários, grupos pseudocristãos e preservação da ortodoxia bíblica",
    "cargaHoraria": 50,
    "descricao": "Características de movimentos sectários, desvios cristológicos e soteriológicos, testemunhas de jeová, mormonismo, espiritismo e refutação bíblica apologética.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "heresiologia_p1",
      "titulo": "Heresiologia: O Discernimento das Seitas — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "HER-403-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "Segundo a apostila do SEBITAN, enquanto 'apostasia' é o abandono premeditado e total da fé cristã, 'heresia' é a aceitação parcial e a deturpação das doutrinas fundamentais das Sagradas Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 3 da apostila: 'Apostasia é o abandono premeditado da fé... Heresia é a aceitação parcial da fé, torcendo e mudando o sentido da própria Palavra de Deus'."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "O modalismo (ou sabelianismo) ensina corretamente a doutrina bíblica da Santíssima Trindade, afirmando que o Pai, o Filho e o Espírito Santo são três Pessoas eternas, distintas e coexistentes em um só Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O modalismo é uma heresia que nega a distinção das três Pessoas, alegando que Pai, Filho e Espírito Santo são apenas 'modos' sucessivos de uma mesma Pessoa se manifestar ao longo da história."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "Os livros apócrifos (como Tobias, Judite, Sabedoria e Macabeus) foram incluídos na Bíblia Católica apenas em 1546 no Concílio de Trento, em meio a controvérsias, nunca tendo feito parte do cânon hebraico original reconhecido por Jesus e pelos apóstolos.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 7 da apostila: Os 11 acréscimos e livros apócrifos foram inseridos oficialmente pela Igreja Romana em 1546 no Concílio de Trento para justificar dogmas como purgatório e oração pelos mortos."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "As Testemunhas de Jeová ensinam a plena e absoluta divindade de Jesus Cristo como o Deus eterno Criador, aceitando com fidelidade a adoração ao Filho e a personalidade divina do Espírito Santo.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A apostila demonstra que as Testemunhas de Jeová negam a deidade de Cristo (afirmam que Ele é uma criatura, o arcanjo Miguel), negam a personalidade e divindade do Espírito Santo (reduzindo-o a uma 'força ativa') e proíbem a adoração a Jesus."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "A Maçonaria exige em seu juramento do 1º Grau (Aprendiz) que o candidato pronuncie juramentos de morte e mutilações corporais com risco de vida, práticas e juramentos que contrariam frontalmente as ordens de Jesus Cristo ('De modo nenhum jureis') e as Sagradas Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Páginas 33-34 da apostila: A Bíblia condena juramentos imprecadores (Mt 5:34; Ex 20:7; Lv 5:4). Um cristão não pode ligar-se por juramentos sangrentos a sociedades com ritos esotéricos e salvação por boas obras."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "De acordo com a classificação das seitas modernas na apostila do SEBITAN, qual das seguintes alternativas reúne exclusivamente seitas classificadas como 'Pseudocristãs'?",
          "opcoes": [
            "Testemunhas de Jeová, Mormonismo, Adventismo do Sétimo Dia e Igreja da Unificação (Rev. Moon).",
            "Kardecismo, Umbanda, Quimbanda e Candomblé.",
            "Arte Mahikari, Hare Krishna, Seicho-no-iê e Messiânica.",
            "Maçonaria, Ordem Rosacruz e Sociedade Teosófica."
          ],
          "respostaCorreta": 0,
          "explicacao": "Página 2 da apostila: 'São seitas PSEUDOCRISTÃS: Testemunhas de Jeová, Adventismo do Sétimo Dia, Mormonismo, Igreja da Unificação (Rev. Moon), Meninos de Deus, Só Jesus, etc.'."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Quais foram os fundadores e líderes sucessivos das Testemunhas de Jeová (movimento russelita) que formularam diversas profecias fracassadas sobre o Armagedom para os anos de 1914, 1918, 1925 e 1975?",
          "opcoes": [
            "Charles Taze Russell, Joseph Rutherford, Nathan Knorr e Fred Franz.",
            "Allan Kardec e Hipolyte Rivail.",
            "Joseph Smith Jr e Brigham Young.",
            "Sun Myung Moon e William Branham."
          ],
          "respostaCorreta": 0,
          "explicacao": "Páginas 10 e 11 da apostila: Charles T. Russell fundou o movimento e profetizou 1914 e 1918; Rutherford fixou 1925; e posteriormente Knorr e Franz apontaram a falsa profecia para 1975 no livro 'A Verdade vos tornará Livres'."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Na refutação bíblica apresentada na apostila contra o dogma católico do Papado de Pedro em Roma, quais evidências bíblicas desmontam essa tradição?",
          "opcoes": [
            "Pedro nunca presidiu o Concílio de Jerusalém (presidido por Tiago em Atos 15), era casado (Mt 8:14), recusou adoração aos seus pés (At 10:25,26) e Paulo não o cita nas saudações da epístola aos Romanos.",
            "Pedro renunciou publicamente à fé apostólica e viveu isolado no deserto de Patmos.",
            "Pedro aceitou grandes tributos de ouro e assumiu o governo militar de Roma.",
            "Não há registros de Pedro nos evangelhos canônicos."
          ],
          "respostaCorreta": 0,
          "explicacao": "Página 5 da apostila: A análise bíblica mostra que Tiago presidiu o Concílio em Atos 15, Pedro era casado, humilde, repreensível (Gl 2) e Paulo não mencionou Pedro em Romanos 16 nem quando chegou preso a Roma."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é a heresia central pregada pela Igreja da Unificação do Reverendo Moon categoricamente rejeitada pela Bíblia?",
          "opcoes": [
            "Afirma que a crucificação de Jesus no Calvário foi uma falha que não completou a salvação, e que Moon veio como o segundo Adão para casar-se e completar a redenção física da humanidade.",
            "Defende a guarda rigorosa do sábado judaico como único dia de culto aceitável.",
            "Prega que todos os crentes devem batizar-se exclusivamente nas águas do Rio Nilo.",
            "Nega a existência de anjos e seres espirituais."
          ],
          "respostaCorreta": 0,
          "explicacao": "Páginas 12-13 da apostila: Moon ensina que o sacrifício de Jesus não completou a redenção por causa da traição de João Batista e que Moon seria o messias enviado para completar a obra gerando uma nova família física."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Quais características fundamentais definem o movimento da Nova Era (Era Aquariana) desmascarado na Lição 7 da apostila do SEBITAN?",
          "opcoes": [
            "Panteísmo e monismo ('tudo é um; o homem é deus'), sincretismo de crenças orientais e espíritas, reencarnação, negação do pecado e salvação pelo autoconhecimento cósmico.",
            "Defesa exclusiva do monoteísmo bíblico e da inerrância das Escrituras Sagradas.",
            "Rejeição de qualquer prática de ioga, astrologia, vidência ou esoterismo.",
            "Obediência estrita aos dez mandamentos da Lei de Moisés."
          ],
          "respostaCorreta": 0,
          "explicacao": "Páginas 17-19 da apostila: A Nova Era promove o panteísmo, a deificação do homem (religião da serpente de Gn 3:5), reencarnação, esoterismo e salvação sem o sangue de Cristo, operando como uma roupagem moderna do espiritismo."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Heresiologia: O Discernimento das Seitas, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Heresiologia: O Discernimento das Seitas estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Heresiologia: O Discernimento das Seitas, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Heresiologia: O Discernimento das Seitas visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Heresiologia: O Discernimento das Seitas, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Heresiologia: O Discernimento das Seitas (HER-403) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Heresiologia: O Discernimento das Seitas no currículo do SEBITAN?",
          "opcoes": [
            "Dominar os fundamentos doutrinários e exegéticos para edificar o Corpo de Cristo com fidelidade às Escrituras.",
            "Apenas obter um diploma sem aplicação no ministério da igreja local.",
            "Substituir a oração e a dependência do Espírito Santo por teorias puramente humanas.",
            "Promover debates infindáveis que geram contendas doutrinárias sem edificação espiritual."
          ],
          "respostaCorreta": 0,
          "explicacao": "O propósito do SEBITAN é capacitar o ministro para manejar bem a Palavra da verdade com profunda reverência, temor e fidelidade."
        },
        {
          "id": 17,
          "tipo": "multipla_escolha",
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Heresiologia: O Discernimento das Seitas resguarda a saúde da igreja?",
          "opcoes": [
            "Adotando o relativismo teológico para agradar a todos os ouvintes sem distinção.",
            "Fundamentando o estudante na sã doutrina bíblica e na autoridade inerrante da Bíblia Sagrada.",
            "Ignorando os erros doutrinários e permitindo qualquer tipo de ensinamento nos cultos.",
            "Isolando a congregação do contato com a sociedade e impedindo o evangelismo."
          ],
          "respostaCorreta": 1,
          "explicacao": "A sã doutrina bíblica atua como vacina contra o veneno do erro doutrinário, garantindo ortodoxia e preservação do evangelho autêntico."
        },
        {
          "id": 18,
          "tipo": "multipla_escolha",
          "enunciado": "No que diz respeito à aplicação prática de Heresiologia: O Discernimento das Seitas, qual atitude deve caracterizar o obreiro ou líder aprovado?",
          "opcoes": [
            "Orgulho intelectual e desprezo pelos fiéis que possuem menor instrução acadêmica.",
            "Humildade cristã, espírito servil, compromisso irrevogável com a oração e amor pelas almas.",
            "Cobrança de valores abusivos para compartilhar os conhecimentos bíblicos adquiridos.",
            "Abandono das responsabilidades pastorais para dedicar-se unicamente ao debate teórico."
          ],
          "respostaCorreta": 1,
          "explicacao": "O verdadeiro teólogo e ministro cristão reflete o caráter de Cristo: manso, humilde de coração e dedicado a servir o próximo com amor."
        },
        {
          "id": 19,
          "tipo": "multipla_escolha",
          "enunciado": "Como a disciplina de Heresiologia: O Discernimento das Seitas dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
          "opcoes": [
            "Ensinando que a estrutura administrativa dispensa a operação dos dons do Espírito Santo.",
            "Equilibrando a ordem, a organização e o preparo intelectual com o fervor espiritual e a dependência de Deus.",
            "Determinando que apenas as leis civis devem governar a comunhão dos santos.",
            "Eliminando a necessidade de prestação de contas financeira e ética no ministério."
          ],
          "respostaCorreta": 1,
          "explicacao": "O SEBITAN ensina o equilíbrio bíblico: mente instruída na verdade divina e coração em chamas pelo poder do Espírito Santo."
        },
        {
          "id": 20,
          "tipo": "multipla_escolha",
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Heresiologia: O Discernimento das Seitas?",
          "opcoes": [
            "Um texto nunca pode significar aquilo que nunca significou para o seu autor original e seus primeiros destinatários.",
            "Cada leitor tem o direito de atribuir o significado que melhor lhe convém no momento.",
            "O sentido literal deve ser sempre descartado em favor de interpretações místicas alegóricas.",
            "A Bíblia contém erros morais que necessitam ser corrigidos pela cultura moderna pós-moderna."
          ],
          "respostaCorreta": 0,
          "explicacao": "Este é o axioma hermenêutico fundamental: o significado primário determinado pelo Espírito Santo ao autor original é a base de toda exegese legítima."
        }
      ]
    },
    "prova2": {
      "id": "heresiologia_p2",
      "titulo": "Heresiologia: O Discernimento das Seitas — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "HER-403-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Heresiologia: O Discernimento das Seitas, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Heresiologia: O Discernimento das Seitas podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Heresiologia: O Discernimento das Seitas, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Heresiologia: O Discernimento das Seitas significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Heresiologia: O Discernimento das Seitas sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Heresiologia: O Discernimento das Seitas, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Heresiologia: O Discernimento das Seitas autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Heresiologia: O Discernimento das Seitas, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Heresiologia: O Discernimento das Seitas dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Heresiologia: O Discernimento das Seitas capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Heresiologia: O Discernimento das Seitas. Qual deve ser sua conduta bíblica imediata?",
          "opcoes": [
            "Buscar a orientação do Espírito Santo em oração e examinar meticulosamente as Escrituras para orientar o rebanho com mansidão e firmeza doutrinária.",
            "Expulsar sumariamente todos os envolvidos sem ouvir suas dúvidas ou explicar as passagens bíblicas pertinentes.",
            "Omitir-se e fingir que nada está acontecendo para não perder prestígio pessoal.",
            "Fazer uma votação na rede social e adotar a opinião da maioria dos internautas."
          ],
          "respostaCorreta": 0,
          "explicacao": "O modelo bíblico ensinado aos pastores e líderes pelo SEBITAN exige aconselhamento bíblico fundamentado na Palavra de Deus, paciência e instrução."
        },
        {
          "id": 12,
          "tipo": "multipla_escolha",
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Heresiologia: O Discernimento das Seitas contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
          "opcoes": [
            "Impedindo que novos convertidos tenham acesso a materiais bíblicos aprofundados.",
            "Formando discípulos biblicamente maduros, capazes de ensinar a outros tudo quanto Cristo ordenou.",
            "Restringindo a mensagem da salvação unicamente aos membros fundadores da comunidade.",
            "Substituindo a pregação de arrependimento e remissão de pecados por entretenimento de auditório."
          ],
          "respostaCorreta": 1,
          "explicacao": "A Grande Comissão inclui ensinar a guardar todas as coisas que Jesus ensinou, exigindo sólida formação doutrinária e discipular contínua."
        },
        {
          "id": 13,
          "tipo": "multipla_escolha",
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Heresiologia: O Discernimento das Seitas do literalismo ingênuo ou do alegorismo desmedido?",
          "opcoes": [
            "A consideração honesta dos gêneros literários bíblicos (poesia, narrativa, profecia, epístola) e o sentido gramático-histórico pretendido pelo autor sagrado.",
            "A interpretação de que todas as frases da Bíblia são metáforas sem valor histórico real.",
            "A obrigatoriedade de interpretar textos poéticos com a mesma rigidez de tratados matemáticos.",
            "A rejeição sumária de qualquer ferramenta de linguística ou dicionário hebraico e grego."
          ],
          "respostaCorreta": 0,
          "explicacao": "Cada livro e trecho bíblico deve ser lido conforme o seu gênero literário sob a regra gramático-histórica para não distorcer a intenção do Espírito Santo."
        },
        {
          "id": 14,
          "tipo": "multipla_escolha",
          "enunciado": "Em Heresiologia: O Discernimento das Seitas, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
          "opcoes": [
            "Afirmando que Deus não tem controle algum sobre a história humana e depende das decisões dos homens.",
            "Reconhecendo que a soberania divina e a responsabilidade humana são verdades bíblicas que coexistem harmoniosamente sob os mistérios insondáveis da graça de Deus.",
            "Ensinando o fatalismo absoluto que elimina a necessidade de evangelizar ou orar por conversões.",
            "Descartando qualquer menção ao pecado humano e à justiça retributiva de Deus."
          ],
          "respostaCorreta": 1,
          "explicacao": "O equilíbrio bíblico do SEBITAN rejeita extremos fatalistas e mantém tanto a soberania do Criador quanto o dever de pregar o Evangelho a toda criatura."
        },
        {
          "id": 15,
          "tipo": "multipla_escolha",
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Heresiologia: O Discernimento das Seitas, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
          "opcoes": [
            "Arrogância teológica e discussões infrutíferas no seio do lar.",
            "Um testemunho irrepreensível de santidade, paciência, retidão financeira e amor ao próximo.",
            "Isolamento social e desdém pelas pessoas que não frequentam seminários.",
            "Uso do conhecimento bíblico como arma para humilhar novos convertidos."
          ],
          "respostaCorreta": 1,
          "explicacao": "A verdadeira teologia cristã produz o fruto do Espírito (Gl 5.22-23) e manifesta o testemunho de vida que glorifica o Pai que está nos céus."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Heresiologia: O Discernimento das Seitas?",
          "opcoes": [
            "Servir como guia estruturado de estudo complementar, estimulando o aluno a aprofundar suas raízes diretamente na Bíblia Sagrada.",
            "Substituir a leitura direta dos textos do Antigo e Novo Testamento.",
            "Impedir que o aluno pense de forma reflexiva ou faça anotações pessoais.",
            "Fornecer textos com opiniões puramente políticas sem valor espiritual."
          ],
          "respostaCorreta": 0,
          "explicacao": "O compêndio do SEBITAN atua como mapa e bússola, conduzindo o estudante ao tesouro inesgotável das Escrituras Sagradas."
        },
        {
          "id": 17,
          "tipo": "multipla_escolha",
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Heresiologia: O Discernimento das Seitas orienta o conselho pastoral?",
          "opcoes": [
            "Capitulando diante das pressões ideológicas mundanas para evitar desaprovação pública.",
            "Mantendo fidelidade aos princípios eternos da Lei Moral de Deus, acolhendo as pessoas com graça e verdade.",
            "Recusando qualquer diálogo com pessoas em sofrimento moral ou espiritual.",
            "Inventando regras humanas severas não respaldadas pelo ensinamento bíblico."
          ],
          "respostaCorreta": 1,
          "explicacao": "O ministério exemplar de Jesus combinava graça e verdade (Jo 1.14): amor incondicional ao pecador e compromisso inegociável com a santidade e a verdade divina."
        },
        {
          "id": 18,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Heresiologia: O Discernimento das Seitas?",
          "opcoes": [
            "Apenas decorar termos técnicos sem capacidade de transmiti-los numa escola dominical ou sermão.",
            "A capacidade de explicar com clareza a mensagem aos outros, defender com mansidão a fé e viver de acordo com a verdade aprendida.",
            "Concluir as leituras na maior velocidade possível sem absorção reflexiva.",
            "Preencher os questionários sem compreender o significado dos conceitos."
          ],
          "respostaCorreta": 1,
          "explicacao": "2 Timóteo 2.2: O que de mim ouviste, transmite-o a homens fiéis que sejam idôneos para também ensinarem a outros."
        },
        {
          "id": 19,
          "tipo": "multipla_escolha",
          "enunciado": "Ao concluir com êxito a Prova 2 de Heresiologia: O Discernimento das Seitas, que marco acadêmico o aluno atinge no seu histórico escolar?",
          "opcoes": [
            "A integralização da carga horária de 50 horas com nota oficial e progresso registrado no sistema para expedição do Diploma oficial.",
            "A anulação de todas as matérias anteriores para recomeçar o curso do zero.",
            "A perda imediata do acesso à plataforma de estudos.",
            "A obrigatoriedade de prestar serviço civil não eclesiástico."
          ],
          "respostaCorreta": 0,
          "explicacao": "A conclusão das duas provas com média igual ou superior a 7,0 confere a aprovação acadêmica na disciplina rumo ao Grau Teológico."
        },
        {
          "id": 20,
          "tipo": "multipla_escolha",
          "enunciado": "Qual a importância de conciliar o estudo do PDF, a audição do Áudio e a visualização do Vídeo antes de realizar esta avaliação?",
          "opcoes": [
            "Uma mera burocracia sem qualquer impacto pedagógico ou fixação de conteúdo.",
            "Uma metodologia ativa multissensorial comprovada que maximiza a retenção, desenvolve raciocínio crítico e prepara com solidez o futuro teólogo.",
            "Um método punitivo para dificultar a aprovação dos estudantes.",
            "Uma forma de prolongar desnecessariamente o tempo de estudo sem agregar valor."
          ],
          "respostaCorreta": 1,
          "explicacao": "A aprendizagem multimídia (leitura reflexiva, audição narrada e suporte visual) estimula múltiplos canais cognitivos, garantindo domínio duradouro."
        }
      ]
    },
  },
  {
    "id": "religioes_mundiais_1",
    "ordem": 26,
    "codigo": "REL-404",
    "moduloId": 4,
    "modulo": "MÓDULO IV: Apologética, Ciência & Cosmovisão",
    "titulo": "Religiões Mundiais I: Cultos e Tradições",
    "subtitulo": "História comparada: Judaísmo, Islamismo, Budismo, Hinduísmo e Tradições Orientais",
    "cargaHoraria": 50,
    "descricao": "Estudo comparativo das grandes religiões do mundo, suas crenças centrais sobre Deus, alma e eternidade, e estratégias de diálogo e evangelização transcultural.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "religioes_mundiais_1_p1",
      "titulo": "Religiões Mundiais I: Cultos e Tradições — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "REL-404-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "Segundo a Unidade 1 da apostila do SEBITAN, o desenvolvimento da religiosidade humana passou por três fases sucessivas: a 1ª fase mítica (multiplicidade de deuses e medo do desconhecido), a 2ª fase com deuses funcionais e rituais mágicos, e a 3ª fase com o aparecimento de um Deus pessoal, que culmina com as religiões monoteístas.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Páginas 3-4 da apostila: 'Podemos dividir em três fases o desenvolvimento da religiosidade humana: 1ª Fase mítica... 2ª Fase individualização dos elementos sagrados e deuses funcionais... 3ª Fase aparecimento de um Deus pessoal que culmina no monoteísmo'."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "No animismo como religião elementar, o conceito de 'mana' (originário da Melanésia) refere-se a uma pessoa divina cheia de amor que pune o pecado e recompensa a moralidade dos homens.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Página 8 da apostila: 'Esta força misteriosa conhecida como mana não é boa nem má, e também não é pessoal'. Trata-se de uma energia impessoal que supostamente habita na criação e manifesta-se nos seres mais velozes, fortes ou férteis."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "A religião persa do Zoroastrismo (fundada por Zoroastro) possui uma teologia estritamente dualista fundamentada na luta cósmica entre Ormuzd (Ahura-Mazda), o espírito do bem, e Ahrimã (Angra-Mainyu), o espírito do mal, com o livro sagrado Zend-Avesta.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 20 da apostila: 'O Zoroastrismo possui uma teologia dualista baseada na luta entre Ormuzd, o espírito do bem, e Ahrimã, o espírito do mal... O livro sagrado é o Zend-Avesta'."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "No Hinduísmo, o sistema de castas divide os seres humanos em quatro categorias principais originárias do corpo de Manu: Brahmans (sacerdotes), Kshtriyas (guerreiros e governantes), Vaisyas (agricultores e artesãos) e Sudras (trabalhadores braçais), além dos párias (sem casta ou intocáveis).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 23 da apostila: 'As quatro castas são: 1. Brahmans (cabeça de Manu), 2. Kshtriyas (mãos), 3. Vaisyas (coxa) e 4. Sudras (pés). Além dos párias ou intocáveis'."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "O Siquismo, fundado por Guru Nanak em 1469 no Punjab, defende rigorosamente a adoração politeísta de imagens de ídolos em madeira e pedra e exige a conservação do rígido sistema hindu de castas e o sacrifício de viúvas (sati).",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Páginas 32-33 da apostila: Guru Nanak pregava a unidade de Deus (Sat Nam, o Nome Verdadeiro), proibia terminantemente a adoração a ídolos, rejeitava o sistema de castas e combateu o sati (imolação de viúvas) e o infanticídio."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "De acordo com a apostila do SEBITAN, qual é a definição teológica e etimológica correta do termo 'Deísmo' em contraste com o 'Teísmo'?",
          "opcoes": [
            "Deísmo afirma que Deus é uma pessoa que habita no crente; o Teísmo afirma que o Universo é o próprio Deus.",
            "Deísmo é a crença de que Deus criou o mundo com suas leis, mas retirou-se e não se envolve pessoalmente com ele (como um relojoeiro que dá corda no relógio); o Teísmo crê no envolvimento pessoal e relacional de Deus com o homem.",
            "Deísmo é a crença na adoração de deuses com cabeças de animais; o Teísmo é o ateísmo filosófico ocidental.",
            "Deísmo prega que a alma humana é reencarnada em vegetais; o Teísmo prega o culto exclusivo à deusa mãe."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 7 da apostila: 'Deísmo é a crença de que Deus, embora criador, não se envolve pessoalmente com o mundo... comparado com o homem que dá corda no relógio e o deixa funcionando. O Teísmo diz que Deus está intimamente envolvido com os assuntos do homem'."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Na mitologia e religião assírio-babilônica estudada na Unidade II, qual era a principal divindade babilônica e quem foram os fundadores originais de Babel?",
          "opcoes": [
            "Ptah era o deus sol, fundado pelos sacerdotes de Alexandria.",
            "Marduk (Merodaque ou Bel) era o deus principal da guerra, e Ninrode foi o primeiro rei poderoso que iniciou a construção de Babel e de Nínive.",
            "Ahura-Mazda era o criador supremo, e Ciro, o Grande, foi o construtor da Torre de Babel.",
            "Dionísio era o deus do vinho, fundado pelos cananeus em Siquém."
          ],
          "respostaCorreta": 1,
          "explicacao": "Páginas 11-13 da apostila: 'Ninrode foi o primeiro potentado na terra que iniciou o reino de Babel... Marduk (Marduk/Bel) tornou-se a principal divindade babilônica sob Hamurabi'."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Quais eram as principais divindades do panteão cananeu que representavam grande laço de corrupção e idolatria para o povo de Israel no Antigo Testamento?",
          "opcoes": [
            "Júpiter, Vênus, Marte e Netuno.",
            "Baal (deus sol dos sidônios com cultos lascivos e sacrifício infantil), Aserá (bosques sagrados), Astarte, Camos (dos moabitas), Dagom (filisteus) e Moloque/Milcom (amonitas).",
            "Brahma, Vishnu e Shiva.",
            "Osíris, Ísis e Hórus com seus túmulos de crocodilos."
          ],
          "respostaCorreta": 1,
          "explicacao": "Páginas 16-17 da apostila: O panteão cananeu era dominado por Baal, Aserá, Astarte, Camos (deus dos moabitas), Dagom (deus dos filisteus) e Moloque (deus dos amonitas que recebia crianças no fogo)."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "No Hinduísmo Clássico e Popular, como se compõe a chamada 'Trimurti' (tríade divina das três manifestações de Deus)?",
          "opcoes": [
            "Varuna (o vento), Indra (a chuva) e Agni (o fogo).",
            "Brahma (o criador), Shiva (o destruidor/transformador) e Vishnu (o preservador).",
            "Zeus, Poseidon e Hades.",
            "Osíris, Ísis e Hórus."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 25 da apostila: 'Nesse período, Deus foi revelado no Trimurti (três formas): Brahma, o criador; Shiva, o destruidor; e Vishnu, o preservador'."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Qual o nome do livro sagrado compilado pelo 5º Guru Arjan em 1604, reverenciado no Siquismo como o corpo vivo e a autoridade visível de seu guru permanente?",
          "opcoes": [
            "O Livro dos Mortos.",
            "O Zend-Avesta.",
            "O Adi Granth (ou Guru Granth Sahib).",
            "O Bhagavad-Gita."
          ],
          "respostaCorreta": 2,
          "explicacao": "Páginas 35-36 da apostila: 'O livro sagrado dos siques é o Adi Granth, que significa livro original, compilado por Arjan em 1604. Ficou sendo chamado de Guru Granth Sahib após o décimo guru, Gobind Singh'."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Religiões Mundiais I: Cultos e Tradições, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Religiões Mundiais I: Cultos e Tradições estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Religiões Mundiais I: Cultos e Tradições, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Religiões Mundiais I: Cultos e Tradições visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Religiões Mundiais I: Cultos e Tradições, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Religiões Mundiais I: Cultos e Tradições (REL-404) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Religiões Mundiais I: Cultos e Tradições no currículo do SEBITAN?",
          "opcoes": [
            "Dominar os fundamentos doutrinários e exegéticos para edificar o Corpo de Cristo com fidelidade às Escrituras.",
            "Apenas obter um diploma sem aplicação no ministério da igreja local.",
            "Substituir a oração e a dependência do Espírito Santo por teorias puramente humanas.",
            "Promover debates infindáveis que geram contendas doutrinárias sem edificação espiritual."
          ],
          "respostaCorreta": 0,
          "explicacao": "O propósito do SEBITAN é capacitar o ministro para manejar bem a Palavra da verdade com profunda reverência, temor e fidelidade."
        },
        {
          "id": 17,
          "tipo": "multipla_escolha",
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Religiões Mundiais I: Cultos e Tradições resguarda a saúde da igreja?",
          "opcoes": [
            "Adotando o relativismo teológico para agradar a todos os ouvintes sem distinção.",
            "Fundamentando o estudante na sã doutrina bíblica e na autoridade inerrante da Bíblia Sagrada.",
            "Ignorando os erros doutrinários e permitindo qualquer tipo de ensinamento nos cultos.",
            "Isolando a congregação do contato com a sociedade e impedindo o evangelismo."
          ],
          "respostaCorreta": 1,
          "explicacao": "A sã doutrina bíblica atua como vacina contra o veneno do erro doutrinário, garantindo ortodoxia e preservação do evangelho autêntico."
        },
        {
          "id": 18,
          "tipo": "multipla_escolha",
          "enunciado": "No que diz respeito à aplicação prática de Religiões Mundiais I: Cultos e Tradições, qual atitude deve caracterizar o obreiro ou líder aprovado?",
          "opcoes": [
            "Orgulho intelectual e desprezo pelos fiéis que possuem menor instrução acadêmica.",
            "Humildade cristã, espírito servil, compromisso irrevogável com a oração e amor pelas almas.",
            "Cobrança de valores abusivos para compartilhar os conhecimentos bíblicos adquiridos.",
            "Abandono das responsabilidades pastorais para dedicar-se unicamente ao debate teórico."
          ],
          "respostaCorreta": 1,
          "explicacao": "O verdadeiro teólogo e ministro cristão reflete o caráter de Cristo: manso, humilde de coração e dedicado a servir o próximo com amor."
        },
        {
          "id": 19,
          "tipo": "multipla_escolha",
          "enunciado": "Como a disciplina de Religiões Mundiais I: Cultos e Tradições dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
          "opcoes": [
            "Ensinando que a estrutura administrativa dispensa a operação dos dons do Espírito Santo.",
            "Equilibrando a ordem, a organização e o preparo intelectual com o fervor espiritual e a dependência de Deus.",
            "Determinando que apenas as leis civis devem governar a comunhão dos santos.",
            "Eliminando a necessidade de prestação de contas financeira e ética no ministério."
          ],
          "respostaCorreta": 1,
          "explicacao": "O SEBITAN ensina o equilíbrio bíblico: mente instruída na verdade divina e coração em chamas pelo poder do Espírito Santo."
        },
        {
          "id": 20,
          "tipo": "multipla_escolha",
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Religiões Mundiais I: Cultos e Tradições?",
          "opcoes": [
            "Um texto nunca pode significar aquilo que nunca significou para o seu autor original e seus primeiros destinatários.",
            "Cada leitor tem o direito de atribuir o significado que melhor lhe convém no momento.",
            "O sentido literal deve ser sempre descartado em favor de interpretações místicas alegóricas.",
            "A Bíblia contém erros morais que necessitam ser corrigidos pela cultura moderna pós-moderna."
          ],
          "respostaCorreta": 0,
          "explicacao": "Este é o axioma hermenêutico fundamental: o significado primário determinado pelo Espírito Santo ao autor original é a base de toda exegese legítima."
        }
      ]
    },
    "prova2": {
      "id": "religioes_mundiais_1_p2",
      "titulo": "Religiões Mundiais I: Cultos e Tradições — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "REL-404-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Religiões Mundiais I: Cultos e Tradições, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Religiões Mundiais I: Cultos e Tradições podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Religiões Mundiais I: Cultos e Tradições, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Religiões Mundiais I: Cultos e Tradições significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Religiões Mundiais I: Cultos e Tradições sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Religiões Mundiais I: Cultos e Tradições, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Religiões Mundiais I: Cultos e Tradições autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Religiões Mundiais I: Cultos e Tradições, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Religiões Mundiais I: Cultos e Tradições dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Religiões Mundiais I: Cultos e Tradições capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Religiões Mundiais I: Cultos e Tradições. Qual deve ser sua conduta bíblica imediata?",
          "opcoes": [
            "Buscar a orientação do Espírito Santo em oração e examinar meticulosamente as Escrituras para orientar o rebanho com mansidão e firmeza doutrinária.",
            "Expulsar sumariamente todos os envolvidos sem ouvir suas dúvidas ou explicar as passagens bíblicas pertinentes.",
            "Omitir-se e fingir que nada está acontecendo para não perder prestígio pessoal.",
            "Fazer uma votação na rede social e adotar a opinião da maioria dos internautas."
          ],
          "respostaCorreta": 0,
          "explicacao": "O modelo bíblico ensinado aos pastores e líderes pelo SEBITAN exige aconselhamento bíblico fundamentado na Palavra de Deus, paciência e instrução."
        },
        {
          "id": 12,
          "tipo": "multipla_escolha",
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Religiões Mundiais I: Cultos e Tradições contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
          "opcoes": [
            "Impedindo que novos convertidos tenham acesso a materiais bíblicos aprofundados.",
            "Formando discípulos biblicamente maduros, capazes de ensinar a outros tudo quanto Cristo ordenou.",
            "Restringindo a mensagem da salvação unicamente aos membros fundadores da comunidade.",
            "Substituindo a pregação de arrependimento e remissão de pecados por entretenimento de auditório."
          ],
          "respostaCorreta": 1,
          "explicacao": "A Grande Comissão inclui ensinar a guardar todas as coisas que Jesus ensinou, exigindo sólida formação doutrinária e discipular contínua."
        },
        {
          "id": 13,
          "tipo": "multipla_escolha",
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Religiões Mundiais I: Cultos e Tradições do literalismo ingênuo ou do alegorismo desmedido?",
          "opcoes": [
            "A consideração honesta dos gêneros literários bíblicos (poesia, narrativa, profecia, epístola) e o sentido gramático-histórico pretendido pelo autor sagrado.",
            "A interpretação de que todas as frases da Bíblia são metáforas sem valor histórico real.",
            "A obrigatoriedade de interpretar textos poéticos com a mesma rigidez de tratados matemáticos.",
            "A rejeição sumária de qualquer ferramenta de linguística ou dicionário hebraico e grego."
          ],
          "respostaCorreta": 0,
          "explicacao": "Cada livro e trecho bíblico deve ser lido conforme o seu gênero literário sob a regra gramático-histórica para não distorcer a intenção do Espírito Santo."
        },
        {
          "id": 14,
          "tipo": "multipla_escolha",
          "enunciado": "Em Religiões Mundiais I: Cultos e Tradições, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
          "opcoes": [
            "Afirmando que Deus não tem controle algum sobre a história humana e depende das decisões dos homens.",
            "Reconhecendo que a soberania divina e a responsabilidade humana são verdades bíblicas que coexistem harmoniosamente sob os mistérios insondáveis da graça de Deus.",
            "Ensinando o fatalismo absoluto que elimina a necessidade de evangelizar ou orar por conversões.",
            "Descartando qualquer menção ao pecado humano e à justiça retributiva de Deus."
          ],
          "respostaCorreta": 1,
          "explicacao": "O equilíbrio bíblico do SEBITAN rejeita extremos fatalistas e mantém tanto a soberania do Criador quanto o dever de pregar o Evangelho a toda criatura."
        },
        {
          "id": 15,
          "tipo": "multipla_escolha",
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Religiões Mundiais I: Cultos e Tradições, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
          "opcoes": [
            "Arrogância teológica e discussões infrutíferas no seio do lar.",
            "Um testemunho irrepreensível de santidade, paciência, retidão financeira e amor ao próximo.",
            "Isolamento social e desdém pelas pessoas que não frequentam seminários.",
            "Uso do conhecimento bíblico como arma para humilhar novos convertidos."
          ],
          "respostaCorreta": 1,
          "explicacao": "A verdadeira teologia cristã produz o fruto do Espírito (Gl 5.22-23) e manifesta o testemunho de vida que glorifica o Pai que está nos céus."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Religiões Mundiais I: Cultos e Tradições?",
          "opcoes": [
            "Servir como guia estruturado de estudo complementar, estimulando o aluno a aprofundar suas raízes diretamente na Bíblia Sagrada.",
            "Substituir a leitura direta dos textos do Antigo e Novo Testamento.",
            "Impedir que o aluno pense de forma reflexiva ou faça anotações pessoais.",
            "Fornecer textos com opiniões puramente políticas sem valor espiritual."
          ],
          "respostaCorreta": 0,
          "explicacao": "O compêndio do SEBITAN atua como mapa e bússola, conduzindo o estudante ao tesouro inesgotável das Escrituras Sagradas."
        },
        {
          "id": 17,
          "tipo": "multipla_escolha",
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Religiões Mundiais I: Cultos e Tradições orienta o conselho pastoral?",
          "opcoes": [
            "Capitulando diante das pressões ideológicas mundanas para evitar desaprovação pública.",
            "Mantendo fidelidade aos princípios eternos da Lei Moral de Deus, acolhendo as pessoas com graça e verdade.",
            "Recusando qualquer diálogo com pessoas em sofrimento moral ou espiritual.",
            "Inventando regras humanas severas não respaldadas pelo ensinamento bíblico."
          ],
          "respostaCorreta": 1,
          "explicacao": "O ministério exemplar de Jesus combinava graça e verdade (Jo 1.14): amor incondicional ao pecador e compromisso inegociável com a santidade e a verdade divina."
        },
        {
          "id": 18,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Religiões Mundiais I: Cultos e Tradições?",
          "opcoes": [
            "Apenas decorar termos técnicos sem capacidade de transmiti-los numa escola dominical ou sermão.",
            "A capacidade de explicar com clareza a mensagem aos outros, defender com mansidão a fé e viver de acordo com a verdade aprendida.",
            "Concluir as leituras na maior velocidade possível sem absorção reflexiva.",
            "Preencher os questionários sem compreender o significado dos conceitos."
          ],
          "respostaCorreta": 1,
          "explicacao": "2 Timóteo 2.2: O que de mim ouviste, transmite-o a homens fiéis que sejam idôneos para também ensinarem a outros."
        },
        {
          "id": 19,
          "tipo": "multipla_escolha",
          "enunciado": "Ao concluir com êxito a Prova 2 de Religiões Mundiais I: Cultos e Tradições, que marco acadêmico o aluno atinge no seu histórico escolar?",
          "opcoes": [
            "A integralização da carga horária de 50 horas com nota oficial e progresso registrado no sistema para expedição do Diploma oficial.",
            "A anulação de todas as matérias anteriores para recomeçar o curso do zero.",
            "A perda imediata do acesso à plataforma de estudos.",
            "A obrigatoriedade de prestar serviço civil não eclesiástico."
          ],
          "respostaCorreta": 0,
          "explicacao": "A conclusão das duas provas com média igual ou superior a 7,0 confere a aprovação acadêmica na disciplina rumo ao Grau Teológico."
        },
        {
          "id": 20,
          "tipo": "multipla_escolha",
          "enunciado": "Qual a importância de conciliar o estudo do PDF, a audição do Áudio e a visualização do Vídeo antes de realizar esta avaliação?",
          "opcoes": [
            "Uma mera burocracia sem qualquer impacto pedagógico ou fixação de conteúdo.",
            "Uma metodologia ativa multissensorial comprovada que maximiza a retenção, desenvolve raciocínio crítico e prepara com solidez o futuro teólogo.",
            "Um método punitivo para dificultar a aprovação dos estudantes.",
            "Uma forma de prolongar desnecessariamente o tempo de estudo sem agregar valor."
          ],
          "respostaCorreta": 1,
          "explicacao": "A aprendizagem multimídia (leitura reflexiva, audição narrada e suporte visual) estimula múltiplos canais cognitivos, garantindo domínio duradouro."
        }
      ]
    }
  }
];
