// Banco de Provas Oficiais SEBITAN — MÓDULO 2
// 20 Questões por Prova (Prova 1: Teórica • Prova 2: Exegética & Prática)
// Total por disciplina: 40 Questões com gabarito e fundamentação teológica.

export const provasModulo2 = [
  {
    "id": "costumes",
    "ordem": 6,
    "codigo": "MAN-201",
    "moduloId": 2,
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "titulo": "Maneiras e Costumes dos Tempos Bíblicos",
    "subtitulo": "Cultura doméstica, vestuário, pesos e moedas no Oriente Antigo",
    "cargaHoraria": 50,
    "descricao": "Vida cotidiana em Canaã, habitações, vestimentas judaicas, alimentação, calendário hebreu, sistema de pesos, medidas e moeda dos tempos bíblicos.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "costumes_p1",
      "titulo": "Maneiras e Costumes dos Tempos Bíblicos — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "MAN-201-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "Nas cidades da Palestina bíblica, as portas das muralhas eram o principal centro cívico e comercial onde eram julgadas causas e tratados os negócios públicos.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila aponta que as portas da cidade eram o local onde os anciãos e juízes tratavam praticamente todos os negócios públicos e judiciais (Gn 19:1; Rt 4:1)."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "As tendas primitivas do povo nômade hebreu eram cobertas exclusivamente com folhas de palmeira secas, pois os hebreus desconheciam a tecelagem de pelos de animais.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A maior parte das tendas mencionadas na Bíblia eram cobertas com pelos de cabras fiados e tecidos pelas mulheres israelitas, de onde provinha sua cor negra característica (Ct 1:5)."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "No calendário judaico, o ano religioso ou sagrado iniciava-se no mês de Nisã (ou Abibe), na primavera, comemorando a libertação do povo de Israel do cativeiro no Egito.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O ano sagrado começava no primeiro mês, Nisã/Abibe (março-abril), enquanto o ano civil começava no sétimo mês, Tisri (setembro-outubro)."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "Nos tempos bíblicos, desatar ou carregar as correias das sandálias de alguém era considerado uma das maiores honrarias concedidas a nobres e príncipes visitantes.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Era um serviço estritamente servil desempenhado pelos criados e escravos de nível mais humilde, demonstrando extrema submissão (Mc 1:7; Jo 1:27)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "O ato de rasgar as vestes e cobrir a cabeça com cinzas ou pó era uma demonstração cultural comum de luto profundo, dor extrema ou arrependimento nos tempos bíblicos.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Na Bíblia, rasgar as vestes e lançar pó sobre a cabeça simbolizava profundo desgosto, como na morte de entes queridos ou clamor de humilhação perante Deus."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Nas residências orientais dos tempos bíblicos, qual era o papel do terraço plano da casa?",
          "opcoes": [
            "Servia apenas como depósito inútil onde ninguém subia.",
            "Era um espaço multiuso vital: local de descanso, comunhão, oração, vigília e onde se dormia nas noites quentes de verão.",
            "Destinava-se exclusivamente à criação de animais bovinos e cavalos.",
            "Era proibido a qualquer morador subir nele pelas leis levíticas."
          ],
          "respostaCorreta": 1,
          "explicacao": "O terraço cercado por parapeito era um dos locais mais importantes da casa judaica, usado para orações (At 10:9), vigília e descanso fresco nas noites de verão."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "A respeito da divisão judaica do dia natural e da noite no tempo de Jesus, quantas vigílias noturnas existiam por influência do modelo romano?",
          "opcoes": [
            "Apenas duas vigílias de doze horas cada.",
            "Três vigílias de quatro horas.",
            "Quatro vigílias noturnas de três horas cada (sendo a terceira chamada 'o cantar do galo').",
            "Sete vigílias de uma hora cada."
          ],
          "respostaCorreta": 2,
          "explicacao": "No tempo de Jesus, a noite dividia-se em quatro vigílias romanas de três horas cada: primeira vigília (18h às 21h), segunda vigília (21h às 24h), terceira vigília ('cantar do galo', 00h às 03h) e quarta vigília (03h às 06h)."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "De acordo com as leis alimentares hebraicas (Levítico 11), quais eram os critérios para que um animal terrestre fosse considerado limpo para consumo?",
          "opcoes": [
            "Ser carnívoro e ter presas afiadas.",
            "Ruminar e possuir a unha fendida (dividida em duas partes).",
            "Alimentar-se apenas de insetos aquáticos.",
            "Ter asas e nadar nas correntes marinhas."
          ],
          "respostaCorreta": 1,
          "explicacao": "Os animais limpos para consumo eram aqueles que ruminavam e simultaneamente tinham o casco fendido (dividido). Animais sem essas duas condições eram imundos."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Qual moeda do Novo Testamento correspondia ao pagamento de uma diária de trabalho de um trabalhador comum?",
          "opcoes": [
            "O Denário romano.",
            "O Talento de ouro.",
            "O Siclo do santuário.",
            "O Lepton de bronze."
          ],
          "respostaCorreta": 0,
          "explicacao": "O Denário (equivalente à dracma de prata grega) era a moeda padrão estipulada para a remuneração de um dia de trabalho (Mateus 20:2)."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Nas três festas anuais de peregrinação obrigatória para os varões judeus em Jerusalém, quais celebrações faziam parte dessa convocação solene?",
          "opcoes": [
            "Festa das Luzes (Hanucá), Purim e Jubileu.",
            "Páscoa (Pães Asmos), Pentecostes (Semanas/Primícias) e Tabernáculos (Colheita).",
            "Festa de Dedicação, Banquete Real e Páscoa Menor.",
            "Apenas o Dia da Expiação (Yom Kippur)."
          ],
          "respostaCorreta": 1,
          "explicacao": "As três grandes festas de convocação sagrada do calendário bíblico eram: a Páscoa (primavera), Pentecostes (50 dias depois) e a Festa dos Tabernáculos (no sétimo mês)."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Maneiras e Costumes dos Tempos Bíblicos, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Maneiras e Costumes dos Tempos Bíblicos estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Maneiras e Costumes dos Tempos Bíblicos, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Maneiras e Costumes dos Tempos Bíblicos visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Maneiras e Costumes dos Tempos Bíblicos, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Maneiras e Costumes dos Tempos Bíblicos (MAN-201) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Maneiras e Costumes dos Tempos Bíblicos no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Maneiras e Costumes dos Tempos Bíblicos resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Maneiras e Costumes dos Tempos Bíblicos, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Maneiras e Costumes dos Tempos Bíblicos dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Maneiras e Costumes dos Tempos Bíblicos?",
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
      "id": "costumes_p2",
      "titulo": "Maneiras e Costumes dos Tempos Bíblicos — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "MAN-201-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Maneiras e Costumes dos Tempos Bíblicos, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Maneiras e Costumes dos Tempos Bíblicos podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Maneiras e Costumes dos Tempos Bíblicos, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Maneiras e Costumes dos Tempos Bíblicos significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Maneiras e Costumes dos Tempos Bíblicos sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Maneiras e Costumes dos Tempos Bíblicos, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Maneiras e Costumes dos Tempos Bíblicos autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Maneiras e Costumes dos Tempos Bíblicos, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Maneiras e Costumes dos Tempos Bíblicos dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Maneiras e Costumes dos Tempos Bíblicos capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Maneiras e Costumes dos Tempos Bíblicos. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Maneiras e Costumes dos Tempos Bíblicos contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Maneiras e Costumes dos Tempos Bíblicos do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Maneiras e Costumes dos Tempos Bíblicos, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Maneiras e Costumes dos Tempos Bíblicos, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Maneiras e Costumes dos Tempos Bíblicos?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Maneiras e Costumes dos Tempos Bíblicos orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Maneiras e Costumes dos Tempos Bíblicos?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Maneiras e Costumes dos Tempos Bíblicos, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "geografia_biblica",
    "ordem": 7,
    "codigo": "GEO-202",
    "moduloId": 2,
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "titulo": "Geografia Bíblica & Cenário Histórico",
    "subtitulo": "As terras da Bíblia, relevo, vales e rotas do Antigo e Novo Testamento",
    "cargaHoraria": 50,
    "descricao": "O Crescente Fértil, topografia da Palestina, mares, rios e desertos, viagens patriarcais, êxodo e rotas missionárias dos apóstolos.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "geografia_biblica_p1",
      "titulo": "Geografia Bíblica & Cenário Histórico — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "GEO-202-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "A Mesopotâmia significa 'terra entre rios', situando-se entre os rios Tigre e Eufrates, sendo o berço das civilizações pré e pós-diluviana e abrangendo territórios modernos de países como Iraque, Kuwait, Irã e Síria.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 2 da apostila: 'Mesopotâmia significa terra entre rios, faixa de terra entre os rios Tigre e Eufrates, berço das civilizações onde hoje temos o Iraque, Kuwait, Irã, Síria e Arábia Saudita'."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "O Mar Morto, também denominado na Bíblia como Mar de Arabá ou Mar Salgado, possui uma taxa de salinidade de aproximadamente 26%, o que impede a existência de fauna e flora aquática em suas águas.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 7 da apostila: 'Mar Morto: conhecido como mar de Arabá ou mar salgado, possui salinidade fora do comum com 26% de sal em suas águas, impedindo a sobrevivência animal e vegetal nele'."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "O Monte Hermom localiza-se no extremo sul da Palestina, junto ao deserto de Parã, tendo menos de 300 metros de altitude e clima estritamente desértico e sem nuvens.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O Monte Hermom fica no nordeste da Palestina, possui 2.800 metros de altitude, é quase sempre coroado de neve e nuvens, e de suas vertentes vertem as águas que formam o Rio Jordão."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "O Rio Jordão significa 'o que desce', nasce na região do Monte Hermom, atravessa o Lago de Merom e o Mar da Galiléia e deságua no Mar Morto após um trajeto sinuoso de cerca de 240 km.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 8 da apostila: 'Jordão significa o que desce; nasce no monte Hermom, faz um percurso sinuoso de 240 km e deságua no mar Morto, passando pelo lago de Merom e mar da Galiléia'."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "A cidade de Cafarnaum era uma pequena aldeia situada no topo do Monte Hermom, onde Jesus nunca esteve e onde não foi realizado nenhum milagre apostólico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Cafarnaum era uma cidade situada na costa noroeste do Mar da Galiléia, onde Jesus residiu por 18 meses, efetuou inúmeros milagres e de onde partia para suas jornadas missionárias."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o núcleo do sistema montanhoso do Antigo Testamento localizado na Armênia, de onde emanam rios fundamentais como o Tigre e o Eufrates e onde repousou a arca de Noé (Gn 8.4)?",
          "opcoes": [
            "Cordilheira do Ararate.",
            "Serra do Zagro.",
            "Montes Urais.",
            "Serra dos Tauros."
          ],
          "respostaCorreta": 0,
          "explicacao": "Página 7 da apostila: 'Cordilheira do Ararate: é o núcleo de todo sistema montanhoso do A.T., fica na região norte (Armênia), dela emanam rios como Tigre e Eufrates e no Monte Ararate a arca descansou'."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Quais eram as cinco cidades principais que formavam a confederação da Filístia na costa mediterrânea da Palestina antiga?",
          "opcoes": [
            "Tiro, Sidom, Biblos, Beirute e Trípoli.",
            "Gaza, Ascalom, Asdode, Gate e Ecrom.",
            "Damasco, Harã, Nínive, Ur e Babilônia.",
            "Hebrom, Belém, Siquém, Jericó e Betel."
          ],
          "respostaCorreta": 1,
          "explicacao": "Páginas 5 e 11 da apostila: 'A Filístia era dividida em cinco regiões/cidades principais: Gaza, Ascalom, Asdode, Gate e Ecrom'."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "No contexto geográfico e histórico da Bíblia, por qual acontecimento o Monte Carmelo se tornou mundialmente conhecido (1 Reis 18)?",
          "opcoes": [
            "Foi onde Moisés recebeu as tábuas da Lei.",
            "Foi o monte onde Elias confrontou os 450 profetas de Baal e fez descer fogo do céu perante todo o povo de Israel.",
            "Foi o local da tentação de Jesus por quarenta dias.",
            "Foi a montanha onde a arca da aliança permaneceu durante o reinado de Saul."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 10 da apostila: 'Monte Carmelo: a oeste do mar da Galiléia... foi nesse lugar que Elias venceu os profetas idólatras de baal fazendo descer fogo do céu (1 Rs 18)'."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Qual vale bíblico localizado a noroeste de Jerusalém separa a cidade sagrada do Monte das Oliveiras e serviu de passagem de fuga para Davi durante a conspiração de Absalão?",
          "opcoes": [
            "Vale do Cedrom (ou de Josafá).",
            "Vale de Escol.",
            "Vale de Acor.",
            "Vale de Aijalom."
          ],
          "respostaCorreta": 0,
          "explicacao": "Página 12 e 13 da apostila: 'Vale de Cedrom (negro ou sombrio), chamado vale de Josafá em Jl 3... separa Jerusalém do monte das oliveiras; nele Davi passou fugindo de Absalão (2 Sm 15.23)'."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Na geografia do Novo Testamento e nas viagens missionárias de Paulo, em qual cidade da Macedônia (Europa) o apóstolo pregou após a visão do homem macedônio, resultando na conversão de Lídia e no milagre da prisão que estremeceu com louvores?",
          "opcoes": [
            "Filipos.",
            "Atenas.",
            "Éfeso.",
            "Antioquia da Pisídia."
          ],
          "respostaCorreta": 0,
          "explicacao": "Página 22 da apostila: Na segunda viagem missionária, Paulo recebeu a visão em Trôade, atravessou o mar e chegou a Filipos (conversão de Lídia e libertação milagrosa de Paulo e Silas na prisão)."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Geografia Bíblica & Cenário Histórico, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Geografia Bíblica & Cenário Histórico estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Geografia Bíblica & Cenário Histórico, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Geografia Bíblica & Cenário Histórico visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Geografia Bíblica & Cenário Histórico, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Geografia Bíblica & Cenário Histórico (GEO-202) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Geografia Bíblica & Cenário Histórico no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Geografia Bíblica & Cenário Histórico resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Geografia Bíblica & Cenário Histórico, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Geografia Bíblica & Cenário Histórico dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Geografia Bíblica & Cenário Histórico?",
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
      "id": "geografia_biblica_p2",
      "titulo": "Geografia Bíblica & Cenário Histórico — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "GEO-202-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Geografia Bíblica & Cenário Histórico, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Geografia Bíblica & Cenário Histórico podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Geografia Bíblica & Cenário Histórico, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Geografia Bíblica & Cenário Histórico significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Geografia Bíblica & Cenário Histórico sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Geografia Bíblica & Cenário Histórico, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Geografia Bíblica & Cenário Histórico autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Geografia Bíblica & Cenário Histórico, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Geografia Bíblica & Cenário Histórico dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Geografia Bíblica & Cenário Histórico capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Geografia Bíblica & Cenário Histórico. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Geografia Bíblica & Cenário Histórico contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Geografia Bíblica & Cenário Histórico do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Geografia Bíblica & Cenário Histórico, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Geografia Bíblica & Cenário Histórico, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Geografia Bíblica & Cenário Histórico?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Geografia Bíblica & Cenário Histórico orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Geografia Bíblica & Cenário Histórico?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Geografia Bíblica & Cenário Histórico, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "arqueologia_biblica",
    "ordem": 8,
    "codigo": "ARQ-203",
    "moduloId": 2,
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "titulo": "Arqueologia Bíblica: Evidências e Descobertas",
    "subtitulo": "Escavações, estelas e artefatos que confirmam o texto bíblico",
    "cargaHoraria": 50,
    "descricao": "Pedra da Roseta, Prisma de Senaqueribe, Estela de Tel Dã, Cilindro de Ciro, Túmulo de Herodes e as evidências científicas dos relatos bíblicos.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "arqueologia_biblica_p1",
      "titulo": "Arqueologia Bíblica: Evidências e Descobertas — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "ARQ-203-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "A palavra arqueologia compõe-se de dois vocábulos gregos: 'archaios' (antigo) e 'logos' (estudo/discurso), sendo a arqueologia bíblica a aplicação dessa ciência às questões, lugares, povos e eventos direta ou indiretamente associados ao registro das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 2 da apostila: 'Essa palavra compõe-se de dois vocábulos gregos, archaios (antigo) e logos (estudo), ou seja, estudo sistemático das antiguidades... aplicada às questões relacionadas à Bíblia'."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "Na Idade do Ferro II (900 a 600 a.C.), correspondente à monarquia dividida de Judá e Israel, as descobertas arqueológicas já confirmaram nominalmente quarenta e um (41) reis citados na Bíblia Sagrada.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 5 da apostila: 'Quarenta e um reis mencionados na Bíblia são confirmados pelas descobertas arqueológicas, o que mostra a abundância de evidências recolhidas'."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "O método de datação por Carbono-14 foi desenvolvido por Willard F. Libby na Universidade de Chicago, possuindo uma meia-vida de 5.568 anos e aplicando-se a materiais orgânicos que outrora tiveram vida.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Páginas 6-7 da apostila: 'A meia-vida do carbono-14 é de 5.568 anos... desenvolvido no final da década de 1940 por Willard F. Libby na Universidade de Chicago, aplicando-se a matéria que antes vivia'."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "Em escavações na antiga Palestina, a cerâmica não possui nenhuma utilidade cronológica para os arqueólogos, visto que todos os povos de todas as épocas utilizaram o mesmo formato e técnica indistintamente.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Página 8 da apostila: A cerâmica é um dos materiais mais valiosos para os arqueólogos: como seu estilo, forma e acabamento mudavam com as épocas e culturas, fragmentos de cerâmica proveem datas e sequências cronológicas com alta precisão."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "Os tabletes de Nuzi e de Mari esclarecem e autenticam juridicamente os costumes da era patriarcal descritos em Gênesis, demonstrando que as bênçãos orais de pais e avós tinham força legal irrevogável de tribunal na época de Abraão e Isaque.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 10 da apostila: 'Muitos itens da Bíblia tornam-se mais claros por meio das descobertas arqueológicas: os tabletes de Nuzi mostram que naquele tempo as bênçãos orais eram obrigatórias, tanto quanto as decisões de um tribunal'."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Quais foram os cinco sistemas de escrita encontrados na Palestina durante a Idade do Bronze Moderna (1500 a 1200 a.C.) destacados na apostila?",
          "opcoes": [
            "Latim arcaico, grego jônico, cirílico, árabe e persa.",
            "Mesopotâmio (cuneiforme acadiano), hieróglifos egípcios, proto-hebraico (Laquis e Hazor), cuneiforme ugarítico (Bete-Semes) e a escrita de Biblos.",
            "Apenas hieróglifos fenícios e escrita fenícia clássica.",
            "Runas nórdicas, sânscrito, mandarim, hebraico massorético e etíope."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 4 da apostila: 'Os cananeus na Idade do Bronze Moderna empregavam cinco sistemas de escrita: a) Mesopotâmio acadiano; b) Hieróglifos egípcios; c) Proto-hebraico; d) Alfabeto cuneiforme ugarítico; e) Escrita de Biblos'."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Em 1947, beduínos fizeram uma das maiores descobertas arqueológicas de todos os tempos em cavernas próximas ao Mar Morto. A que descoberta se refere a apostila?",
          "opcoes": [
            "À arca da aliança de ouro em Jerusalém.",
            "Aos Manuscritos do Mar Morto em Khirbet Qumran, com pergaminhos e cópias bíblicas de mais de 2.000 anos, incluindo o rolo completo de Isaías.",
            "Ao palácio de inverno de Nabucodonosor com os jardins suspensos.",
            "Às placas de ouro do monte Cumorah."
          ],
          "respostaCorreta": 1,
          "explicacao": "Páginas 9 e 11 da apostila: Os Manuscritos do Mar Morto encontrados em 1947 em Qumran confirmaram a preservação e exatidão dos textos do Antigo Testamento copiados ao longo dos séculos."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "No exame dos materiais arqueológicos, qual ciência estuda as moedas antigas que auxiliam os pesquisadores a traçar a história política e econômica de imperadores como Alexandre e os césares romanos?",
          "opcoes": [
            "Dendrocronologia.",
            "Etnografia.",
            "Numismática.",
            "Epigrafia."
          ],
          "respostaCorreta": 2,
          "explicacao": "Página 9 da apostila: 'A numismática é uma ciência em si mesma. Cobre muitos séculos e é importantíssima nessa questão de medição do tempo através do estudo das moedas'."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Quais são os cinco grandes valores e utilidades da Arqueologia Bíblica destacados na Unidade V da apostila do SEBITAN?",
          "opcoes": [
            "Monetário, Comercial, Artístico, Museológico e Turístico.",
            "Ilustrar a história bíblica, Sublinhar a realidade da inspiração divina, Emprestar interesse e vivacidade ao texto, Valor apologético (defesa da historicidade) e Valor exegético (esclarecer palavras e passagens difíceis).",
            "Criar novos dogmas, substituir a fé, canonizar apócrifos, abolir tradições e fundar novas seitas.",
            "Provar a evolução dos primatas, desmentir os profetas, invalidar a Lei e desacreditar os milagres."
          ],
          "respostaCorreta": 1,
          "explicacao": "Páginas 10-12 da apostila: Os cinco valores descritos detalhadamente são: 1. Ilustrar a história da Bíblia; 2. Sublinhar a realidade da inspiração divina; 3. Emprestar interesse; 4. Valor apologético; 5. Valor exegético."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "De acordo com a apostila, como as descobertas dos tabletes de Ras Shamra forneceram um exemplo marcante do valor exegético da arqueologia em relação a Deuteronômio 34:7 sobre Moisés?",
          "opcoes": [
            "Provaram que Moisés nunca viveu em Midiã.",
            "Mostraram que a palavra hebraica traduzida por 'vigor' na Vulgata Latina referia-se a dentes, mas nos tabletes de Ras Shamra esclareceu-se seu sentido exato de vigor natural ou forças físicas intactas aos 120 anos.",
            "Demonstraram que Moisés utilizava escrita grega koiné.",
            "Substituíram o livro de Deuteronômio pelas tábuas de Hamurabi."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 12 da apostila: Em Dt 34.7 ('não se lhe abateu o vigor'), a Vulgata interpretava como dentes, mas os textos de Ras Shamra elucidaram que o termo significa vigor e força física plena."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Arqueologia Bíblica: Evidências e Descobertas, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Arqueologia Bíblica: Evidências e Descobertas estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Arqueologia Bíblica: Evidências e Descobertas, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Arqueologia Bíblica: Evidências e Descobertas visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Arqueologia Bíblica: Evidências e Descobertas, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Arqueologia Bíblica: Evidências e Descobertas (ARQ-203) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Arqueologia Bíblica: Evidências e Descobertas no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Arqueologia Bíblica: Evidências e Descobertas resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Arqueologia Bíblica: Evidências e Descobertas, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Arqueologia Bíblica: Evidências e Descobertas dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Arqueologia Bíblica: Evidências e Descobertas?",
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
      "id": "arqueologia_biblica_p2",
      "titulo": "Arqueologia Bíblica: Evidências e Descobertas — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "ARQ-203-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Arqueologia Bíblica: Evidências e Descobertas, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Arqueologia Bíblica: Evidências e Descobertas podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Arqueologia Bíblica: Evidências e Descobertas, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Arqueologia Bíblica: Evidências e Descobertas significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Arqueologia Bíblica: Evidências e Descobertas sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Arqueologia Bíblica: Evidências e Descobertas, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Arqueologia Bíblica: Evidências e Descobertas autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Arqueologia Bíblica: Evidências e Descobertas, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Arqueologia Bíblica: Evidências e Descobertas dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Arqueologia Bíblica: Evidências e Descobertas capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Arqueologia Bíblica: Evidências e Descobertas. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Arqueologia Bíblica: Evidências e Descobertas contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Arqueologia Bíblica: Evidências e Descobertas do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Arqueologia Bíblica: Evidências e Descobertas, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Arqueologia Bíblica: Evidências e Descobertas, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Arqueologia Bíblica: Evidências e Descobertas?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Arqueologia Bíblica: Evidências e Descobertas orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Arqueologia Bíblica: Evidências e Descobertas?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Arqueologia Bíblica: Evidências e Descobertas, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "sintese_at",
    "ordem": 9,
    "codigo": "BIB-204",
    "moduloId": 2,
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "titulo": "Síntese do Antigo Testamento",
    "subtitulo": "Panorama dos 39 livros da Antiga Aliança: Lei, História, Poesia e Profetas",
    "cargaHoraria": 50,
    "descricao": "Estudo panorâmico do Pentateuco, Livros Históricos, Livros Poéticos, Profetas Maiores e Menores, temas messiânicos e cronologia redentiva.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "sintese_at_p1",
      "titulo": "Síntese do Antigo Testamento — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "BIB-204-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "O livro de Gênesis ('começos' ou 'origens'), escrito por Moisés, cobre mais de 2.500 anos da história humana e refuta já em seu primeiro versículo o ateísmo, o politeísmo, o panteísmo e o materialismo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila aponta que Gênesis 1:1 ('No princípio criou Deus os céus e a terra') refuta completamente as visões ateístas, panteístas e materialistas da existência."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "No livro de Levítico, o ponto culminante anual das leis cerimoniais era o Dia da Expiação (cap. 16), quando o sumo sacerdote entrava no Santo dos Santos para aspergir o sangue propiciatório pelos pecados do povo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O Dia da Expiação (Yom Kippur) era o grande dia sagrado em que a reconciliação e purificação nacional eram consumadas pelo sangue sacrificial."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "O período retratado no livro de Juízes caracterizou-se pela fidelidade contínua e exemplar de Israel a Deus, sem qualquer registro de apostasia ou idolatria durante três séculos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Juízes é apelidado de 'a idade negra de Israel', marcado pelo ciclo de sete apostasias, opressões por nações vizinhas, arrependimento e livramentos por juízes."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "A história da jovem moabita Rute constitui uma bela demonstração da graça de Deus, que superou a maldição da lei e a inseriu como bisavó de Davi na linhagem do Salvador, apresentando Boaz como tipo do Parente-Remidor.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Boaz exerceu a lei do Parente-Remidor (Goel), tipificando Cristo que resgatou os pecadores pagando inteiramente o preço da redenção."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "O profeta Isaías predisse a concepção virginal do Messias Emanuel (Is 7:14) e indicou nominalmente o rei Ciro como libertador do cativeiro cerca de dois séculos antes do seu nascimento.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Isaías 44:28 e 45:1 profetizaram com incrível exatidão histórica sobre Ciro, o persa, libertando o povo judeu para reconstruir Jerusalém."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "No livro de Êxodo, qual memorial solene estabelecido por Deus foi a condição necessária para poupar os primogênitos hebreus e garantir a saída triunfal do Egito?",
          "opcoes": [
            "O levantamento de altares com doze pedras do rio Nilo.",
            "A ordenança da Páscoa com o sangue do cordeiro imaculado aspergido nos umbrais das portas.",
            "O voto perpétuo de nazireado coletivo em Gósen.",
            "O pagamento de uma indenização de 500 talentos de ouro aos feiticeiros de Faraó."
          ],
          "respostaCorreta": 1,
          "explicacao": "Os israelitas só puderam ser libertados passando por 'sob o sangue' da Páscoa (Êxodo 12), prefigurando o sacrifício redentor de Jesus Cristo."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Por qual motivo central a geração que saiu do Egito foi condenada a vaguear por quase 40 anos no deserto até perecer (Livro de Números)?",
          "opcoes": [
            "Por terem esquecido as receitas dos pães asmos.",
            "Pela incredulidade obstinada e murmuração constante diante do relatório dos espias em Cades-Barnéia, recusando-se a confiar na promessa divina.",
            "Por não possuírem armaduras de ferro semelhantes às dos filisteus.",
            "Por intervenção de um tratado diplomático com o rei de Edom."
          ],
          "respostaCorreta": 1,
          "explicacao": "A causa da peregrinação inútil de 38 anos foi a incredulidade e rebelião de Israel ao rejeitar a entrada na terra em Cades, sendo preservados apenas Josué e Calebe."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o versículo-chave e o fundamento supremo de toda a sabedoria prática ensinada no livro de Provérbios (Pv 9:10)?",
          "opcoes": [
            "A habilidade militar para subjugar os povos circunvizinhos.",
            "O acúmulo de riquezas no comércio com os fenícios de Tiro.",
            "O temor do Senhor é o princípio da sabedoria, e o conhecimento do Santo a prudência.",
            "O silêncio absoluto diante de qualquer governante injusto."
          ],
          "respostaCorreta": 2,
          "explicacao": "Provérbios ensina que a verdadeira sabedoria não é mera erudição humana, mas o santo temor, reverência e obediência aos mandamentos de Deus."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Na profecia de Daniel (capítulo 9), o que representa a revelação das 'Setenta Semanas' de anos (heptads) comunicada pelo anjo Gabriel?",
          "opcoes": [
            "O tempo que Nabucodonosor passaria pastando como animal no campo.",
            "O cronograma profético para a vinda do Messias, Sua morte sacrificial e os eventos da consumação dos tempos.",
            "A quantidade de sacerdotes que ministrariam no segundo templo de Zorobabel.",
            "O número de dias em que Daniel esteve na cova dos leões famintos."
          ],
          "respostaCorreta": 1,
          "explicacao": "A profecia das 70 semanas determina o tempo desde a ordem de reedificar Jerusalém até o corte do Messias e o período final da Grande Tribulação."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "O livro de Malaquias conclui o cânon do Antigo Testamento repreendendo a negligência no culto e a retenção de dízimos e ofertas. Qual promessa encerra o livro no capítulo 4?",
          "opcoes": [
            "A reconstrução dos estábulos de Salomão em Megido.",
            "O envio do profeta Elias antes da vinda do grande e terrível Dia do Senhor.",
            "A proibição definitiva de qualquer tradução das Escrituras para o grego.",
            "A aliança política com o imperador da Pérsia Artaxerxes."
          ],
          "respostaCorreta": 1,
          "explicacao": "Malaquias 4:5 profetiza o envio de Elias para converter o coração dos pais aos filhos, profecia que encontrou cumprimento no ministério de João Batista (Mt 11:14)."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Síntese do Antigo Testamento, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Síntese do Antigo Testamento estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Síntese do Antigo Testamento, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Síntese do Antigo Testamento visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Síntese do Antigo Testamento, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Síntese do Antigo Testamento (BIB-204) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Síntese do Antigo Testamento no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Síntese do Antigo Testamento resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Síntese do Antigo Testamento, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Síntese do Antigo Testamento dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Síntese do Antigo Testamento?",
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
      "id": "sintese_at_p2",
      "titulo": "Síntese do Antigo Testamento — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "BIB-204-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Síntese do Antigo Testamento, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Síntese do Antigo Testamento podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Síntese do Antigo Testamento, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Síntese do Antigo Testamento significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Síntese do Antigo Testamento sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Síntese do Antigo Testamento, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Síntese do Antigo Testamento autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Síntese do Antigo Testamento, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Síntese do Antigo Testamento dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Síntese do Antigo Testamento capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Síntese do Antigo Testamento. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Síntese do Antigo Testamento contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Síntese do Antigo Testamento do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Síntese do Antigo Testamento, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Síntese do Antigo Testamento, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Síntese do Antigo Testamento?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Síntese do Antigo Testamento orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Síntese do Antigo Testamento?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Síntese do Antigo Testamento, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "interbiblico",
    "ordem": 10,
    "codigo": "HIS-205",
    "moduloId": 2,
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "titulo": "Período Interbíblico: Os 400 Anos",
    "subtitulo": "O silêncio profético, impérios mundiais e o surgimento das seitas judaicas",
    "cargaHoraria": 50,
    "descricao": "Transição do Império Persa ao Grego e Romano, Revolta dos Macabeus, Helenismo, sinagogas, fariseus, saduceus, zelotes e essênios.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "interbiblico_p1",
      "titulo": "Período Interbíblico: Os 400 Anos — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "HIS-205-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "Os quatrocentos anos entre o encerramento do ministério de Malaquias e o nascimento de Cristo são conhecidos como 'anos silenciosos' porque nenhum profeta bíblico canônico escreveu em Israel nesse intervalo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila aponta que, embora chamados de silenciosos quanto a novos livros canônicos inspirados, foram séculos repletos de acontecimentos cruciais que prepararam o mundo para a vinda de Cristo."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "Alexandre da Macedônia (o Grande), discípulo de Aristóteles, promoveu a difusão da cultura e padrões de vida gregos (Helenismo), incentivando cidades-modelo com ginásios, teatros e o uso do idioma grego em todo o império conquistado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Alexandre deixou como legado não apenas o domínio bélico, mas a civilização helenística com a língua grega que posteriormente facilitou a proclamação universal do Evangelho."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "O governante selêucida Antíoco IV Epifânio apoiou a ortodoxia judaica e proibiu a instalação de deuses pagãos ou sacrifícios de porcos no Templo de Jerusalém.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Antíoco Epifânio cometeu terríveis atrocidades: baniu a religião judaica, proibiu a circuncisão e a guarda do sábado sob pena de morte, profanou o Templo com a estátua de Júpiter e sacrificou porcos sobre o altar."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "A Revolta dos Macabeus foi deflagrada na vila de Modin quando o idoso sacerdote Matatias recusou-se a oferecer um sacrifício pagão, matou o judeu apóstata e o emissário sírio e fugiu para as colinas com seus filhos.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Matatias e seus cinco filhos iniciaram a resistência armada de guerrilhas contra a tirania selêucida para defender a Lei de Deus."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "Após a retomada do Templo em 164 a.C. por Judas Macabeu ('o martelo'), o santuário foi purificado dos ídolos pagãos e foi instituída a Festa de Hanukkah (Dedicação ou Festival das Luzes), celebrada durante 8 dias a partir de 25 de Kislev.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Hanukkah comemora os 8 dias da rededicação do Templo purificado do paganismo imposto por Antíoco."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Durante o domínio dos Ptolomeus no Egito, que ilustre tradução do Antigo Testamento hebraico para o idioma grego foi realizada em Alexandria sob o patrocínio de Ptolomeu II Filadelfo?",
          "opcoes": [
            "O Talmude de Jerusalém.",
            "A Septuaginta (LXX), produzida por cerca de 72 sábios judeus.",
            "A Vulgata Latina de Jerônimo.",
            "O Pentateuco Samaritano do Monte Gerizim."
          ],
          "respostaCorreta": 1,
          "explicacao": "A Septuaginta (versão dos setenta) foi a primeira e mais célebre tradução das Escrituras Hebraicas para o grego koiné, amplamente utilizada por Jesus e pela Igreja Primitiva."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "No cenário das facções judaicas do período interbíblico, qual alternativa descreve com precisão o perfil dos Saduceus em contraste com os Fariseus?",
          "opcoes": [
            "Eram monges reclusos que viviam no deserto e recusavam o casamento.",
            "Formavam a aristocracia sacerdotal rica e governista, aceitavam somente a autoridade da Torá escrita e negavam a ressurreição, anjos e espíritos.",
            "Eram guerrilheiros extremistas armados de adagas dedicados a expulsar os romanos pela força militar.",
            "Eram partidários leais da monarquia persa de Ciro, o Grande."
          ],
          "respostaCorreta": 1,
          "explicacao": "Os Saduceus compunham a elite sacerdotal aliada ao poder político, rejeitavam as tradições orais dos fariseus e negavam o sobrenatural (ressurreição e anjos)."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Quem eram os Essênios e qual legado arqueológico de imenso valor para o estudo bíblico moderno foi encontrado nas cavernas da sua comunidade em Qumrã no século XX?",
          "opcoes": [
            "Escribas helenistas de Roma que catalogaram as bibliotecas de César.",
            "Um grupo monástico judaico rigoroso e ascético que preservou os célebres 'Manuscritos do Mar Morto'.",
            "Coletores de impostos a serviço da casa de Tobias.",
            "Sacerdotes samaritanos do santuário destruído do Monte Gerizim."
          ],
          "respostaCorreta": 1,
          "explicacao": "Os Essênios retiraram-se para o deserto em protesto contra as corrupções de Jerusalém e guardaram em jarros de barro os preciosos Manuscritos do Mar Morto descobertos em Qumrã em 1947."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "No ano de 63 a.C., qual general romano conquistou Jerusalém após sitiar a cidade, invadiu o Santo dos Santos do Templo e colocou a Judéia sob o domínio e tributação de Roma?",
          "opcoes": [
            "Júlio César.",
            "Pompeu.",
            "Cássio.",
            "Imperador Augusto."
          ],
          "respostaCorreta": 1,
          "explicacao": "O general romano Pompeu aproveitou a disputa dinástica entre os irmãos Hircano II e Aristóbulo II, rompeu as defesas de Jerusalém em 63 a.C. e inaugurou o domínio romano sobre a Judéia."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Como Herodes, filho de Antipas da Iduméia, conseguiu consolidar seu reinado de 37 a.C. a 4 d.C. e receber oficialmente de Roma o título de 'Rei dos Judeus'?",
          "opcoes": [
            "Por ser o primogênito levita da linhagem de Davi.",
            "Através de astúcia política, vultosos subornos e alianças estratégicas com o senado e generais romanos (Antônio e Otávio Augusto), governando com mão de ferro.",
            "Por aclamação pacífica e unânime de todos os mestres fariseus do Sinédrio.",
            "Vencendo uma disputa teológica sobre os festivais anuais no Monte Gerizim."
          ],
          "respostaCorreta": 1,
          "explicacao": "Herodes utilizou sua aliança com os triúnviros romanos Antônio e Augusto para ser nomeado rei, expulsar os partos e governar a Judéia com apoio militar e programa grandioso de construções, incluindo o Templo."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Período Interbíblico: Os 400 Anos, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Período Interbíblico: Os 400 Anos estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Período Interbíblico: Os 400 Anos, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Período Interbíblico: Os 400 Anos visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Período Interbíblico: Os 400 Anos, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Período Interbíblico: Os 400 Anos (HIS-205) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Período Interbíblico: Os 400 Anos no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Período Interbíblico: Os 400 Anos resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Período Interbíblico: Os 400 Anos, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Período Interbíblico: Os 400 Anos dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Período Interbíblico: Os 400 Anos?",
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
      "id": "interbiblico_p2",
      "titulo": "Período Interbíblico: Os 400 Anos — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "HIS-205-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Período Interbíblico: Os 400 Anos, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Período Interbíblico: Os 400 Anos podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Período Interbíblico: Os 400 Anos, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Período Interbíblico: Os 400 Anos significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Período Interbíblico: Os 400 Anos sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Período Interbíblico: Os 400 Anos, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Período Interbíblico: Os 400 Anos autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Período Interbíblico: Os 400 Anos, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Período Interbíblico: Os 400 Anos dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Período Interbíblico: Os 400 Anos capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Período Interbíblico: Os 400 Anos. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Período Interbíblico: Os 400 Anos contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Período Interbíblico: Os 400 Anos do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Período Interbíblico: Os 400 Anos, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Período Interbíblico: Os 400 Anos, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Período Interbíblico: Os 400 Anos?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Período Interbíblico: Os 400 Anos orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Período Interbíblico: Os 400 Anos?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Período Interbíblico: Os 400 Anos, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
  },
  {
    "id": "sintese_nt",
    "ordem": 11,
    "codigo": "BIB-206",
    "moduloId": 2,
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "titulo": "Síntese do Novo Testamento",
    "subtitulo": "Os 27 livros: Evangelhos, Atos, Epístolas Paulinas, Gerais e Apocalipse",
    "cargaHoraria": 50,
    "descricao": "Os quatro Evangelhos sinóticos e Joanino, expansão da Igreja primitiva em Atos, teologia apostólica paulina e a vitória final no Apocalipse.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "sintese_nt_p1",
      "titulo": "Síntese do Novo Testamento — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "BIB-206-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "O Evangelho de Mateus atua como a 'porta de vai-vem' ou transição entre o Antigo e o Novo Testamento, apresentando Jesus como o Rei prometido e empregando frequentemente a expressão profética 'para que se cumprisse'.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila aponta Mateus como o livro de transição, com mais de 60 referências ao A.T. e 40 citações literais, enfatizando Cristo como o Messias-Rei."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "O Evangelho de Marcos abre sua narrativa com uma minuciosa genealogia de Jesus que remonta até Adão, a fim de provar sua linhagem nobre aos senadores e generais de Roma.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Marcos não apresenta nenhuma genealogia, pois apresenta Jesus como o Servo de Jeová, 'pois quem está interessado nas origens de um servo?'. O evangelista que estende a genealogia até Adão é Lucas."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "O médico Lucas dedicou seu Evangelho e o livro de Atos a um nobre grego chamado Teófilo, apresentando a Cristo como o 'Filho do Homem' e o Salvador compassivo e universal de toda a humanidade.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Lucas escreve com olhar meticuloso e compassivo, dedicando suas duas obras a Teófilo e destacando a perfeição humana e divina de Jesus."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "Na Epístola aos Gálatas, Paulo inicia sua mensagem parabenizando com calorosos elogios os crentes da Galácia por terem aceitado a circuncisão e a guarda da lei mosaica ensinada pelos mestres judaizantes.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A carta aos Gálatas possui tom enérgico e severo. Paulo não faz nenhuma recomendação aos gálatas e condena a mistura da lei com a graça como um 'outro evangelho' merecedor de anátema."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "Na Epístola aos Hebreus, a palavra 'Superior' é empregada 13 vezes para demonstrar que Jesus Cristo é infinitamente superior aos anjos, a Moisés, a Josué e a todo o sacerdócio levítico.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O grande tema de Hebreus é a supremacia absoluta de Cristo como nosso eterno Sumo Sacerdote da Nova Aliança."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é a grande premissa teológica que move todo o Evangelho de João (João 20:30-31) e que o diferencia dos Evangelhos Sinóticos?",
          "opcoes": [
            "Demonstrar que Cristo pretendia liderar uma rebelião armada contra o Império Romano.",
            "Afirmar e provar de modo categórico a Divindade pré-existente e eterna de Jesus Cristo: 'Cristo é Deus'.",
            "Registrar apenas parábolas agrárias sem milagres sobrenaturais.",
            "Apresentar Jesus como um simples filósofo moral no padrão de Sócrates."
          ],
          "respostaCorreta": 1,
          "explicacao": "A apostila de Síntese do N.T. afirma: 'A divindade de Cristo é mais persistentemente afirmada e definidamente provada em João: Cristo é Deus, o Filho eterno do Deus eterno'."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Segundo os registros do livro de Atos dos Apóstolos, qual data solene marca a vinda do Espírito Santo e o nascimento histórico da Igreja de Cristo?",
          "opcoes": [
            "A Páscoa no Calvário.",
            "O Concílio de Nicéia.",
            "O Dia de Pentecostes (Atos 2).",
            "A libertação de Pedro da prisão por um anjo."
          ],
          "respostaCorreta": 2,
          "explicacao": "A apostila ensina: 'O dia de Pentecoste é o do nascimento da Igreja... O livro pulsa com uma nova vida, a do Espírito Santo'."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Doutrinariamente, qual é o tema supremo da Epístola aos Romanos (versículo-chave 1:16-17)?",
          "opcoes": [
            "A salvação obtida pelo esforço meritório da caridade humana.",
            "A justiça de Deus outorgada gratuitamente pela fé em Jesus Cristo à parte das obras da lei.",
            "A restauração política imediata da monarquia terrena de Davi em Jerusalém.",
            "A condenação sumária de todos os gentios sem oportunidade de redenção."
          ],
          "respostaCorreta": 1,
          "explicacao": "Romanos é o coração da revelação do Evangelho: a justiça de Deus imputada a todo aquele que crê, demonstrando que o homem é justificado pela fé sem as obras da lei."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Em 1 Tessalonicenses 4:13-18, que doutrina consoladora o apóstolo Paulo expõe com detalhes divinos para confortar os irmãos que haviam perdido entes queridos?",
          "opcoes": [
            "A transmigração das almas para outros corpos terrenos.",
            "A ressurreição dos mortos em Cristo e o glorioso Arrebatamento da Igreja nos ares.",
            "O sono eterno e a aniquilação definitiva da consciência humana.",
            "O julgamento militar das legiões romanas no vale do Jordão."
          ],
          "respostaCorreta": 1,
          "explicacao": "Paulo ensina em 1 Ts 4:13-18 que na vinda do Senhor os que morreram em Cristo ressuscitarão primeiro e os vivos serão transformados e arrebatados para encontrar o Senhor nos ares."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Como é estruturada a parte profética central do livro de Apocalipse (capítulos 4 a 19) segundo o esboço da apostila do SEBITAN?",
          "opcoes": [
            "Na estrutura dos 'Seis Setes': 7 Selos, 7 Personagens, 7 Maldições, 7 Trombetas, 7 Taças e 7 Novas Coisas.",
            "Em dezesseis capítulos de poesia lírica sem visões apocalípticas.",
            "Exclusivamente nas advertências às sete congregações da Ásia Menor.",
            "Em três visões históricas referentes apenas ao reinado do imperador Nero."
          ],
          "respostaCorreta": 0,
          "explicacao": "O esboço de Apocalipse no material SEBITAN organiza os juízos da Tribulação em 'Seis Setes': 7 Selos, 7 Personagens, 7 Maldições, 7 Trombetas, 7 Taças e 7 Novas Coisas."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Síntese do Novo Testamento, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Síntese do Novo Testamento estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Síntese do Novo Testamento, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Síntese do Novo Testamento visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Síntese do Novo Testamento, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Síntese do Novo Testamento (BIB-206) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Síntese do Novo Testamento no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Síntese do Novo Testamento resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Síntese do Novo Testamento, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Síntese do Novo Testamento dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Síntese do Novo Testamento?",
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
      "id": "sintese_nt_p2",
      "titulo": "Síntese do Novo Testamento — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "BIB-206-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Síntese do Novo Testamento, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Síntese do Novo Testamento podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Síntese do Novo Testamento, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Síntese do Novo Testamento significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Síntese do Novo Testamento sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Síntese do Novo Testamento, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Síntese do Novo Testamento autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Síntese do Novo Testamento, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Síntese do Novo Testamento dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Síntese do Novo Testamento capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Síntese do Novo Testamento. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Síntese do Novo Testamento contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Síntese do Novo Testamento do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Síntese do Novo Testamento, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Síntese do Novo Testamento, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Síntese do Novo Testamento?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Síntese do Novo Testamento orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Síntese do Novo Testamento?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Síntese do Novo Testamento, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
  },
  {
    "id": "tipologia_simbologia",
    "ordem": 12,
    "codigo": "TIP-207",
    "moduloId": 2,
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "titulo": "Tipologia & Simbologia Bíblica",
    "subtitulo": "Sombras, figuras proféticas e tipos messiânicos do Antigo Testamento",
    "cargaHoraria": 50,
    "descricao": "O Tabernáculo no deserto, os sacrifícios levíticos, ofícios de profeta, sacerdote e rei, personagens típicos e seu cumprimento em Cristo Jesus.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "tipologia_simbologia_p1",
      "titulo": "Tipologia & Simbologia Bíblica — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "TIP-207-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "Na hermenêutica bíblica, o 'Tipo' é uma figura ou sombra terrestre do Antigo Testamento pré-ordenada por Deus, enquanto o 'Antítipo' é a realidade cumprida e manifesta no Novo Testamento em Cristo ou nas coisas celestiais.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Páginas 14-15 da apostila: 'Tipo é a figura do Antigo Testamento (sombra dos bens vindouros); Antítipo é a pessoa ou o objeto no qual se cumpre o tipo no Novo Testamento'."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "Na numerologia bíblica da apostila do SEBITAN, o número 7 representa a fraqueza e imperfeição do homem natural caído, enquanto o número 6 representa a perfeição absoluta e o repouso de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Página 9 da apostila: O número SEIS (6) é o número do homem (criado no 6º dia, 6 dias de trabalho, imperfeição humana, 666); enquanto o número SETE (7) é o número de Deus, representando perfeição, cumprimento, repouso e totalidade divina."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "Ao ofertar Isaque no Monte Moriá (Gênesis 22), Abraão tipifica Deus Pai entregando Seu Filho amado, e a declaração 'Deus proverá para si o cordeiro' apontava profeticamente para o Calvário, onde Cristo foi o sacrifício perfeito substitutivo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Páginas 17-18 da apostila: Isaque obedeceu ao pai, carregou a lenha subindo o Moriá, e o carneiro substituiu Isaque; no Calvário, Deus entregou Jesus como nosso verdadeiro e supremo substituto."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "No Tabernáculo do deserto, as quatro cores dos véus da entrada (Púrpura, Carmesim, Linho Branco e Azul) apontam diretamente para os quatro Evangelhos e os retratos de Jesus: Mateus (Rei/Púrpura), Marcos (Servo sofredor/Carmesim), Lucas (Homem perfeito/Linho Branco) e João (Filho de Deus celeste/Azul).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Páginas 23-24 da apostila: As quatro cores representam perfeitamente os quatro Evangelhos: a Púrpura (Mateus, o Rei), o Carmesim (Marcos, o Servo sofredor), o Linho Branco (Lucas, o Filho do Homem perfeito) e o Azul (João, o Filho de Deus celeste)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "No simbolismo dos metais sagrados do Tabernáculo, o bronze tipifica a glória de Deus e a divindade de Cristo, enquanto o ouro tipifica o julgamento do pecado na cruz do Calvário.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Páginas 25-26 da apostila: O BRONZE simboliza julgamento e juízo do pecado (presente no Altar do Holocausto e nos cravos da cruz), a PRATA simboliza resgate e redenção expiatória, e o OURO simboliza a glória divina e a majestade celestial de Cristo."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "De acordo com a apostila, por que José do Egito é considerado o mais perfeito tipo veterotestamentário do Senhor Jesus Cristo?",
          "opcoes": [
            "Porque ele foi o primeiro sacerdote da ordem de Arão a ungir os reis hebreus.",
            "Porque era amado intensamente por seu pai, foi odiado e vendido por seus próprios irmãos, humilhado como escravo e injustiçado, mas exaltado à destra do trono para se tornar o salvador de pão do mundo e perdoar seus irmãos.",
            "Porque construiu o templo de Jerusalém e ordenou os turnos sacerdotais.",
            "Porque liderou a travessia armada do Mar Vermelho montado em carros de ferro."
          ],
          "respostaCorreta": 1,
          "explicacao": "Páginas 18-19 da apostila: O amor do pai por José, o ódio invejoso dos irmãos que o venderam (como os judeus rejeitaram Jesus), sua humilhação e sua posterior exaltação ao trono do Egito como salvador refletem com sublime fidelidade a trajetória de Jesus Cristo."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Na tipologia do casamento de Isaque com Rebeca (Gênesis 24), quais personagens tipificam as três pessoas da Trindade e a Igreja?",
          "opcoes": [
            "Moisés (o Pai), Josué (o Filho), Arão (o Espírito) e Miriã (a Igreja).",
            "Abraão tipifica o Pai Celestial, Isaque tipifica Jesus Cristo (o Noivo herdeiro), Eliezer tipifica o Espírito Santo (enviado com dons para preparar e buscar a noiva), e Rebeca tipifica a Igreja de Cristo.",
            "Jacó (o Pai), Judá (o Filho), José (o Espírito) e Raquel (a Igreja).",
            "Faraó (o Pai), José (o Filho), Potifar (o Espírito) e Asenate (a Igreja)."
          ],
          "respostaCorreta": 1,
          "explicacao": "Páginas 17-18 da apostila: 'No casamento de Isaque deparamo-nos com tipos de toda a Trindade: Abraão (o Pai), Isaque (o Filho), Eliezer que tinha toda a fazenda do senhor tipifica o Espírito Santo enviado para buscar a noiva santa, a Igreja (Rebeca)'."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "O que continha a Arca da Aliança dentro do Santo dos Santos do Tabernáculo e qual o significado tipológico de cada elemento conforme a apostila?",
          "opcoes": [
            "Apenas incenso e azeite perfumado.",
            "As Tábuas da Lei (a vontade e justiça de Deus cumprida no coração de Jesus), a Vara de Arão que floresceu (a ressurreição de Cristo e ministério aprovado frutífero) e o Vaso com Maná (Cristo como a provisão e Pão da Vida descido do céu).",
            "A adaga de ferro de Golias e as trombetas de prata.",
            "Sete lâmpadas de azeite e os doze pães da proposição."
          ],
          "respostaCorreta": 1,
          "explicacao": "Páginas 28-29 da apostila: O conteúdo da Arca continha as Tábuas da Lei (justiça e coração de Cristo), a Vara de Arão florescida (ressurreição e frutos do ministério) e o Maná oculto no vaso de ouro (a provisão celestial eterna de Deus)."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Na numerologia bíblica, o que simbolizam especificamente os números 8 e 12?",
          "opcoes": [
            "O número 8 representa o juízo final e o 12 a idolatria das nações.",
            "O número 8 significa novo começo, ressurreição e regeneração em contraste com o velho (8 na arca, circuncisão no 8º dia); o número 12 está ligado à escolha, eleição soberana e ao governo de Deus (12 tribos, 12 apóstolos).",
            "O número 8 representa a maldição de Caim e o 12 a divisão do reino de Salomão.",
            "O número 8 representa o sistema monetário romano e o 12 as legiões de anjos caídos."
          ],
          "respostaCorreta": 1,
          "explicacao": "Páginas 10-12 da apostila: O número 8 simboliza o começo e o novo em contraste com o velho (oito pessoas salvas no dilúvio, circuncisão ao 8º dia); o número 12 simboliza eleição, governo divino e integridade representativa do povo de Deus."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Na consagração cerimonial dos sacerdotes hebreus (Êxodo 29), onde o sangue do bezerro sacrificado era aspergido no corpo dos sacerdotes e qual o seu significado espiritual?",
          "opcoes": [
            "Na testa, no peito e nos joelhos.",
            "Na orelha direita (aptos para ouvir a voz de Deus), no polegar da mão direita (mãos santas e consagradas para o trabalho) e no dedão do pé direito (caminhar irrepreensível na verdade).",
            "Nas vestes talares e no turbante de linho fino.",
            "Nas palmas das duas mãos e na fronte."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 31 da apostila: 'Passavam sangue na orelha direita (aptos para ouvir), dedo polegar da mão (mãos honestas e consagradas) e no dedão do pé (caminhar na verdade de Deus)'."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Tipologia & Simbologia Bíblica, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Tipologia & Simbologia Bíblica estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Tipologia & Simbologia Bíblica, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Tipologia & Simbologia Bíblica visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Tipologia & Simbologia Bíblica, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Tipologia & Simbologia Bíblica (TIP-207) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Tipologia & Simbologia Bíblica no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Tipologia & Simbologia Bíblica resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Tipologia & Simbologia Bíblica, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Tipologia & Simbologia Bíblica dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Tipologia & Simbologia Bíblica?",
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
      "id": "tipologia_simbologia_p2",
      "titulo": "Tipologia & Simbologia Bíblica — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "TIP-207-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Tipologia & Simbologia Bíblica, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Tipologia & Simbologia Bíblica podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Tipologia & Simbologia Bíblica, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Tipologia & Simbologia Bíblica significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Tipologia & Simbologia Bíblica sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Tipologia & Simbologia Bíblica, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Tipologia & Simbologia Bíblica autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Tipologia & Simbologia Bíblica, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Tipologia & Simbologia Bíblica dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Tipologia & Simbologia Bíblica capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Tipologia & Simbologia Bíblica. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Tipologia & Simbologia Bíblica contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Tipologia & Simbologia Bíblica do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Tipologia & Simbologia Bíblica, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Tipologia & Simbologia Bíblica, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Tipologia & Simbologia Bíblica?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Tipologia & Simbologia Bíblica orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Tipologia & Simbologia Bíblica?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Tipologia & Simbologia Bíblica, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
  },
  {
    "id": "dispensacoes_e_aliancas",
    "ordem": 13,
    "codigo": "DIS-208",
    "moduloId": 2,
    "modulo": "MÓDULO II: Panorama Bíblico & Contexto Histórico",
    "titulo": "Dispensações e Alianças Bíblicas",
    "subtitulo": "As eras de revelação e os pactos de Deus com a humanidade",
    "cargaHoraria": 50,
    "descricao": "As 7 dispensações clássicas e as grandes alianças (Adâmica, Noética, Abraâmica, Mosaica, Davídica e a Nova Aliança no Sangue de Cristo).",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "dispensacoes_e_aliancas_p1",
      "titulo": "Dispensações e Alianças Bíblicas — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "DIS-208-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "Dispensação é definida na apostila do SEBITAN como um período de tempo no qual o homem é provado em sua obediência a alguma revelação específica da vontade de Deus, não sendo modos separados de salvação, pois a salvação em todas as dispensações sempre foi e continua sendo unicamente pela graça de Deus através da fé em Jesus Cristo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 2 da apostila: 'Dispensação é um período de tempo no qual o homem é testado na sua obediência... As diferentes dispensações NÃO são modos separados de salvação; o homem é reconciliado com Deus de uma única maneira: somente pela GRAÇA de Deus através de Jesus Cristo'."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "Na 3ª Dispensação (Governo Humano), instituída com Noé após o Dilúvio, Deus entregou ao homem a responsabilidade judicial da ordem terrena e estabeleceu a autoridade da pena de morte contra homicidas para proteger a santidade da vida humana (Gn 9.5,6).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Páginas 8-10 da apostila: No governo humano Deus entregou a responsabilidade judicial e a punição externa do homicídio com a pena capital ao governo civil (Gn 9.5-6; Rm 13.1-7)."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "A 5ª Dispensação (a Lei de Moisés) foi concedida por Deus como um meio de justificação moral pelo qual o homem atinge a perfeição espiritual sem necessitar do sacrifício de Cristo.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Páginas 15-16 da apostila: A Lei não foi dada como meio de salvação ou justificação (Gl 2.16; Rm 3.20), mas como um 'aio' (professor ou tutor) disciplinar que evidenciou a universalidade do pecado e conduziu o homem à necessidade de Cristo."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "A Aliança Davídica (2 Sm 7.8-17) prometeu a Davi uma posteridade, um trono real e um reino terreno que subsistirão para sempre, cumprindo-se de modo supremo e eterno na pessoa do Messias Jesus Cristo, o Filho de Davi.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Páginas 24-25 da apostila: A Aliança Davídica estabeleceu que o trono e o reinado de Davi serão eternos, cumprindo-se literalmente quando Jesus reinar sobre o trono de Davi no Milênio e na eternidade (Lc 1.31-33)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "A 8ª Aliança (a Nova Aliança em Hb 8.8) é condicionada às obras meramente humanas de cada crente, dependendo da obediência da carne para não ser cancelada por Deus a qualquer momento.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Página 25 da apostila: A Nova Aliança é superior e incondicional porque repousa inteiramente sobre a declaração soberana de Deus ('Eu farei...') e sobre o sangue eterno derramado por Cristo no Calvário, assegurando perdão e esquecimento perpétuo dos pecados."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Quais são as Sete Dispensações bíblicas em sua ordem cronológica correta conforme ensinadas na apostila do SEBITAN?",
          "opcoes": [
            "Inocência, Consciência, Governo Humano, Promessa (Patriarcal), Lei, Graça (Igreja) e Reino (Milênio).",
            "Criação, Dilúvio, Êxodo, Cativeiro, Apóstolos, Reforma e Céu.",
            "Infância, Mocidade, Maturidade, Velhice, Morte, Ressurreição e Juízo.",
            "Tribal, Monárquica, Profética, Exílica, Helenista, Romana e Cristã."
          ],
          "respostaCorreta": 0,
          "explicacao": "Página 2 da apostila: 'São sete, as dispensações: 1ª Inocência, 2ª Consciência, 3ª Governo Humano, 4ª Patriarcal ou da Promessa, 5ª Lei, 6ª Graça (da Igreja ou do Espírito Santo), 7ª Reino ou Milênio'."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "O que caracterizou o trágico fracasso da 2ª Dispensação (da Consciência ou Responsabilidade Moral), que culminou no juízo do Dilúvio de Noé?",
          "opcoes": [
            "Os homens obedeceram a Deus e construíram grandes catedrais no deserto.",
            "Fazendo-se surdos à voz da própria consciência, a humanidade corrompeu-se, a consciência foi cauterizada e a maldade multiplicou-se com extrema violência na terra (Gn 6.1-7).",
            "Os homens recusaram-se a comer carnes e tornaram-se idólatras da lua.",
            "Israel recusou os dez mandamentos no monte Sinai."
          ],
          "respostaCorreta": 1,
          "explicacao": "Páginas 6-7 da apostila: A consciência humana enfraqueceu e cauterizou-se pelo pecado deliberado, levando à corrupção moral universal e à destruição da civilização antediluviana pelo Dilúvio."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Na 4ª Aliança (Aliança Abraâmica - Gn 12:1-3), quais são os três grandes grupos de promessas divinas estabelecidas por Deus?",
          "opcoes": [
            "Promessas a Adão, a Eva e à serpente.",
            "Promessas de uma grande nação (Israel e a posse da terra), promessas pessoais a Abraão (engrandecimento do nome e bênçãos) e promessas universais aos gentios ('em ti serão benditas todas as famílias da terra' através de Cristo).",
            "Promessas de riquezas materiais para os reis babilônicos.",
            "Promessas de sacrifícios diários na ordem de Melquisedeque."
          ],
          "respostaCorreta": 1,
          "explicacao": "Páginas 22-23 da apostila: A Aliança Abraâmica abrange: 1. A promessa de uma grande nação (Israel e a terra); 2. Quatro promessas pessoais a Abraão; 3. Promessas aos gentios cumpridas plenamente em Cristo (Gl 3.16)."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Quais são as três divisões essenciais que compunham a Aliança Mosaica (a Lei) entregue no Monte Sinai?",
          "opcoes": [
            "Gênesis, Êxodo e Levítico.",
            "Os Mandamentos (expressando a justa vontade santa de Deus), os Juízos (regulando a vida civil e social) e as Ordenanças (governando a vida religiosa, o sacerdócio e os sacrifícios).",
            "A circuncisão, as ofertas de animais e o dízimo da colheita.",
            "O sábado, as luas novas e as festas dos pães asmos."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 23 da apostila: 'A Aliança Mosaica foi dada a Israel em três divisões: os Mandamentos (Êx 20), os Juízos (Êx 21-24) e as Ordenanças (Êx 24-31)'."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é a relação teológica suprema de Jesus Cristo com as Oito Alianças descritas no encerramento da apostila do SEBITAN?",
          "opcoes": [
            "Cristo revogou todas as alianças e proibiu a leitura do Antigo Testamento.",
            "Cristo é o 'segundo Adão' que retoma o perdido no Éden; a Semente da mulher na Aliança Adâmica; o Filho supremo de Sem na Noética; a Semente de Abraão na Abraâmica; Aquele que cumpriu sem pecado a Mosaica; o Herdeiro eterno da Davídica; e Seu sangue sacrificial é o fundamento eterno da Nova Aliança.",
            "Cristo foi apenas um profeta da Aliança Palestiniana sem ligação com Davi.",
            "As alianças são independentes e não possuem relação com a pessoa de Cristo."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 26 da apostila: O resumo final demonstra como todas as oito alianças da Bíblia convergem e encontram seu cumprimento e significado perfeito na pessoa, obra, obediência e sangue do Senhor Jesus Cristo."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Dispensações e Alianças Bíblicas, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Dispensações e Alianças Bíblicas estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Dispensações e Alianças Bíblicas, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Dispensações e Alianças Bíblicas visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Dispensações e Alianças Bíblicas, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Dispensações e Alianças Bíblicas (DIS-208) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Dispensações e Alianças Bíblicas no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Dispensações e Alianças Bíblicas resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Dispensações e Alianças Bíblicas, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Dispensações e Alianças Bíblicas dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Dispensações e Alianças Bíblicas?",
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
      "id": "dispensacoes_e_aliancas_p2",
      "titulo": "Dispensações e Alianças Bíblicas — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "DIS-208-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Dispensações e Alianças Bíblicas, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Dispensações e Alianças Bíblicas podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Dispensações e Alianças Bíblicas, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Dispensações e Alianças Bíblicas significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Dispensações e Alianças Bíblicas sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Dispensações e Alianças Bíblicas, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Dispensações e Alianças Bíblicas autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Dispensações e Alianças Bíblicas, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Dispensações e Alianças Bíblicas dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Dispensações e Alianças Bíblicas capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Dispensações e Alianças Bíblicas. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Dispensações e Alianças Bíblicas contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Dispensações e Alianças Bíblicas do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Dispensações e Alianças Bíblicas, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Dispensações e Alianças Bíblicas, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Dispensações e Alianças Bíblicas?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Dispensações e Alianças Bíblicas orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Dispensações e Alianças Bíblicas?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Dispensações e Alianças Bíblicas, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
