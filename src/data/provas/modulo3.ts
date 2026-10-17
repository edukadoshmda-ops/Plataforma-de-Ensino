// Banco de Provas Oficiais SEBITAN — MÓDULO 3
// 20 Questões por Prova (Prova 1: Teórica • Prova 2: Exegética & Prática)
// Total por disciplina: 40 Questões com gabarito e fundamentação teológica.

export const provasModulo3 = [
  {
    "id": "teontologia",
    "ordem": 14,
    "codigo": "TEO-301",
    "moduloId": 3,
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "titulo": "Teontologia: A Doutrina de Deus Pai",
    "subtitulo": "Existência, argumentos teístas, atributos divinos e a Santíssima Trindade",
    "cargaHoraria": 50,
    "descricao": "Argumentos filosóficos e bíblicos da existência de Deus, atributos incomunicáveis e comunicáveis, soberania, presciência e a triunidade divina.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "teontologia_p1",
      "titulo": "Teontologia: A Doutrina de Deus Pai — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "TEO-301-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "O Argumento Cosmológico em favor da existência de Deus baseia-se na lei da causa e efeito, demonstrando que cada coisa existente no mundo exige uma causa adequada, sendo o universo originado por uma Causa Primária inteligente e infinita.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Louis Berkhof e David S. Clark ensinam que o universo exige uma causa adequada, provando a existência de uma Causa Primária inteligente e pessoal (Hb 3:4)."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "A palavra hebraica 'ELOHIM', utilizada no primeiro versículo da Bíblia para Deus, é um substantivo na forma singular absoluta que exclui categoricamente qualquer pluralidade de pessoas na Divindade.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A apostila ensina que Elohim é um substantivo na forma plural, e a palavra hebraica 'Achad' em Dt 6:4 indica uma unidade composta, apontando para a pluralidade de pessoas na Trindade divina."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "A teoria do Deísmo ensina que Deus criou o mundo, mas depois se afastou completamente dele, deixando-o entregue às leis mecânicas naturais sem revelação, milagres ou providência.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 4 da apostila: O deísmo admite um Deus pessoal que criou o mundo e lhe imprimiu leis, mas depois se afastou, não intervindo mais por milagres ou controle providencial."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "O nome revelado 'JEOVÁ JIRÉ' (Gn 22:14) expressa Deus como o Senhor que cura enfermidades, enquanto 'JEOVÁ RAFÁ' significa o Senhor é a nossa bandeira.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Na lista de nomes de Deus da apostila: Jeová Jiré significa 'O Senhor que provê', Jeová Rafá significa 'O Senhor que sara' e Jeová Nissi significa 'O Senhor é nossa bandeira'."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "Os Atributos Morais de Deus incluem a Santidade (pureza absoluta e separação do mal), a Retidão/Justiça, a Misericórdia/Bondade e o Amor e Fidelidade.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila divide os atributos em naturais (onisciência, onipotência, onipresença) e morais (santidade, justiça, misericórdia, bondade, amor e fidelidade)."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Qual argumento filosófico-teológico, formulado em sua forma mais clássica por Santo Anselmo e Renato Descartes, deduz a existência real de Deus a partir da própria ideia inata humana de um Ser absolutamente perfeito?",
          "opcoes": [
            "Argumento Teleológico.",
            "Argumento Ontológico.",
            "Argumento Histórico ou Etnológico.",
            "Argumento Moral de Kant."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 3 da apostila: 'Argumento Ontológico: Anselmo argumenta que o homem tem a ideia de um ser absolutamente perfeito; que existência é atributo de perfeição; e que, portanto, um ser absolutamente perfeito tem que existir'."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "No estudo dos atributos naturais divinos, como a apostila diferencia a 'Imensidade' da 'Onipresença' de Deus?",
          "opcoes": [
            "Imensidade é a presença de Deus nas igrejas; Onipresença é a Sua presença no céu.",
            "Imensidade é a presença de Deus em relação ao espaço infinito; Onipresença é a Sua presença considerada em relação ativa com todas as Suas criaturas.",
            "Imensidade refere-se ao corpo visível de Deus e Onipresença ao Seu espírito.",
            "Não há diferença conceitual na teologia sistemática."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 8 da apostila: 'Imensidade é a presença de Deus em relação ao espaço, enquanto onipresença é a sua presença considerada em relação às criaturas'."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "O que afirma a filosofia do 'Panteísmo' (Pan = tudo + Theos = Deus) a respeito da relação entre Deus e o universo?",
          "opcoes": [
            "Que Deus não existe e que a matéria se gerou por acaso.",
            "Que Deus é tudo e tudo é Deus, concebendo o universo como uma única substância com dois atributos: extensão e pensamento.",
            "Que Deus é uma criatura angélica finita em evolução.",
            "Que existem milhares de deuses locais em cada rio e montanha."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 4 da apostila: 'Panteísmo: afirma que Deus é tudo e tudo é Deus... concebe o universo sendo uma única substância com dois atributos: extensão e pensamentos'."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Como a Teologia Sistemática classifica os Decretos Divinos em relação à vontade soberana de Deus?",
          "opcoes": [
            "Decretos Militares e Decretos Civis.",
            "Decretos Temporários e Decretos Revogados.",
            "Decreto Positivo e Absoluto (o que Deus resolveu fazer e fará acontecer) e Decreto Permissivo e Relativo (o que Deus permite acontecer respeitando o livre-arbítrio humano).",
            "Decretos Angélicos e Decretos Terrenos."
          ],
          "respostaCorreta": 2,
          "explicacao": "Página 10 da apostila: Decretos se dividem em Positivo/Absoluto (tudo aquilo que Deus resolveu fazer) e Permissivo/Relativo (aquilo que Deus deixa acontecer devido ao livre-arbítrio do homem)."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Na revelação bíblica da Trindade, qual das seguintes afirmativas expressa com fidelidade a relação e cooperação das Três Pessoas divinas na obra da Criação?",
          "opcoes": [
            "O Pai criou tudo sozinho, sem a participação do Filho nem do Espírito Santo.",
            "O Pai planejou e criou todas as coisas pelo Filho (o Verbo eterno) no poder operante do Espírito Santo.",
            "O Filho criou os anjos e o Espírito Santo criou a matéria inanimada.",
            "As Três Pessoas atuam separadamente em épocas históricas distintas e isoladas."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 6 da apostila: 'A Bíblia menciona as três pessoas operando na mesma obra: O Pai criou pelo Filho no poder do Espírito Santo' (Gn 1:1,2; Jo 1:2; Sl 104:30)."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Teontologia: A Doutrina de Deus Pai, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Teontologia: A Doutrina de Deus Pai estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Teontologia: A Doutrina de Deus Pai, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Teontologia: A Doutrina de Deus Pai visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Teontologia: A Doutrina de Deus Pai, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Teontologia: A Doutrina de Deus Pai (TEO-301) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Teontologia: A Doutrina de Deus Pai no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Teontologia: A Doutrina de Deus Pai resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Teontologia: A Doutrina de Deus Pai, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Teontologia: A Doutrina de Deus Pai dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Teontologia: A Doutrina de Deus Pai?",
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
      "id": "teontologia_p2",
      "titulo": "Teontologia: A Doutrina de Deus Pai — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "TEO-301-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Teontologia: A Doutrina de Deus Pai, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Teontologia: A Doutrina de Deus Pai podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Teontologia: A Doutrina de Deus Pai, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Teontologia: A Doutrina de Deus Pai significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Teontologia: A Doutrina de Deus Pai sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Teontologia: A Doutrina de Deus Pai, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Teontologia: A Doutrina de Deus Pai autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Teontologia: A Doutrina de Deus Pai, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Teontologia: A Doutrina de Deus Pai dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Teontologia: A Doutrina de Deus Pai capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Teontologia: A Doutrina de Deus Pai. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Teontologia: A Doutrina de Deus Pai contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Teontologia: A Doutrina de Deus Pai do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Teontologia: A Doutrina de Deus Pai, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Teontologia: A Doutrina de Deus Pai, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Teontologia: A Doutrina de Deus Pai?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Teontologia: A Doutrina de Deus Pai orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Teontologia: A Doutrina de Deus Pai?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Teontologia: A Doutrina de Deus Pai, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "angelologia",
    "ordem": 15,
    "codigo": "ANG-302",
    "moduloId": 3,
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "titulo": "Angelologia Bíblica & Demonologia",
    "subtitulo": "Hostes celestes, anjos santos, queda de Lúcifer e discernimento da batalha espiritual",
    "cargaHoraria": 50,
    "descricao": "Natureza, ministério e hierarquias angelicais (querubins, serafins, arcanjos), a rebelião cósmica de Satanás, principados, potestades e vitória em Cristo.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "angelologia_p1",
      "titulo": "Angelologia Bíblica & Demonologia — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "ANG-302-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "Os anjos são seres espirituais, incorpóreos e imortais criados por Deus, não sendo seres humanos glorificados e nem possuindo capacidade de reprodução biológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila define: '1- Não são seres humanos glorificados; 2- São seres espirituais e incorpóreos; 3- São seres criados; 5- São imortais; 6- Não se reproduzem'."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "A doutrina bíblica ensina que a palavra 'anjo' (mal'ak no hebraico e angelos no grego) indica a essência ontológica da criatura (nomen naturae), e não a sua função de ofício ou mensageiro (nomen officii).",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Louis Berkhof esclarece: 'O nome anjo, com o qual designamos os espíritos superiores, não é um nomen naturae na Escritura, mas sim o nomen officii. A palavra hebraica mal'ak significa simplesmente mensageiro'."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "Os Serafins são mencionados por nome especificamente em Isaías 6 e desempenham um ministério voltado ao culto, à reverência e à purificação dos servos de Deus para a adoração aceitável.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Henry Clarence Thiessen destaca: 'Eles lideram os céus na adoração ao Deus todo poderoso e purificam os servos de Deus para o culto e serviços aceitáveis... preocupam-se com o culto e a santidade'."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "As Escrituras ensinam que os demônios são almas desencarnadas de homens ímpios da era pré-adâmica que vagam pela terra.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A apostila classifica essa ideia como falso ensino pagão grego; o verdadeiro ensino bíblico é que os demônios são anjos caídos que acompanharam Satanás em sua revolta contra Deus (Mt 25:41)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "O pecado original de Satanás foi o orgulho e a ambição de usurpar a adoração devida exclusivamente a Deus, tendo sua derrota definitiva decretada na cruz do Calvário.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila aponta que o pecado de Satanás foi de orgulho (1 Tm 3:6; Is 14:13-14), e sua condenação foi selada na cruz, sendo destinado ao lago de fogo (Ap 20:10)."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "No que concerne aos Querubins nas Escrituras Sagradas, qual é a sua principal função descrita por Louis Berkhof na apostila?",
          "opcoes": [
            "Cantar hinos em banquetes reais de reis gentios.",
            "Guardar a entrada do paraíso, observar o propiciatório e defender a santidade, o poder e a majestade de Deus.",
            "Transmitir cartas diplomáticas entre os reis de Israel.",
            "Cuidar exclusivamente da construção das muralhas de Jerusalém."
          ],
          "respostaCorreta": 1,
          "explicacao": "Louis Berkhof ensina: 'Eles guardam a entrada do paraíso (Gn 3.24), observam o propiciatório... Mais que outras criaturas eles foram destinados a revelar o poder, a majestade e a glória de Deus, e a defender a santidade de Deus'."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Quem é o único ser espiritual explicitamente identificado e designado com o título de 'Arcanjo' no cânon das Escrituras Sagradas?",
          "opcoes": [
            "Gabriel.",
            "Rafael.",
            "Miguel.",
            "Uriel."
          ],
          "respostaCorreta": 2,
          "explicacao": "Página 4 da apostila: 'O termo arcanjo só ocorre duas vezes nas Escrituras (1 Ts 4.16; Jd 9)... Miguel é o único a ser chamado de arcanjo, como príncipe do povo de Israel e comandante dos anjos (Ap 12.7)'."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é a distinção teológica e clínica apresentada no material entre 'Possessão Demoníaca' e 'Opressão Demoníaca'?",
          "opcoes": [
            "Possessão é uma febre comum; Opressão é um delírio passageiro.",
            "Possessão é a habitação do demônio numa pessoa, exercendo controle direto sobre suas funções mentais ou físicas; Opressão é a influência ou atividade demoníaca contra uma pessoa a partir de fora.",
            "Possessão atinge apenas animais; Opressão atinge apenas templos pagãos.",
            "Ambas são idênticas e não admitem qualquer diferenciação pastoral."
          ],
          "respostaCorreta": 1,
          "explicacao": "Definição oficial da página 7: 'Possessão: é a habitação de um ou mais demônios numa pessoa exercendo controle e influência diretos... Opressão: é a influência ou atividade demoníaca contra uma pessoa'."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Quanto ao ministério angelical, como a teologia sistemática diferencia o 'serviço comum' do 'serviço extraordinário' dos anjos?",
          "opcoes": [
            "Serviço comum é o louvor contínuo a Deus e proteção diária aos santos; Serviço extraordinário refere-se à revelação especial nos pontos de transição da salvação (entrega da lei, nascimento e ressurreição de Jesus).",
            "Serviço comum ocorre em sonhos; Serviço extraordinário ocorre por cartas proféticas.",
            "Serviço comum foi abolido após o dilúvio; Serviço extraordinário é restrito aos reis de Judá.",
            "Não há diferença, sendo ambas as atuações invisíveis e desprovidas de propósito redentor."
          ],
          "respostaCorreta": 0,
          "explicacao": "A apostila detalha que o serviço comum é o louvor e assistência aos herdeiros da salvação, enquanto o extraordinário marcou os grandes períodos de revelação especial de Deus na história da salvação."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Conforme Apocalipse 20:10 citado na apostila, qual é o destino final e irrevogável de Satanás e das hostes rebeldes de demônios no Juízo Final?",
          "opcoes": [
            "A conversão voluntária e reintegração às hostes celestes.",
            "O aniquilamento cósmico sem qualquer consciência futura.",
            "O lançamento no Lago de Fogo e Enxofre para condenação e castigo perpétuo.",
            "O isolamento permanente nas montanhas do Líbano."
          ],
          "respostaCorreta": 2,
          "explicacao": "A apostila conclui na página 8: 'No juízo final estes seres serão lançados no lago de fogo (Gr. Geená), onde estará a besta e o falso profeta (Ap 20.10-15)'."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Angelologia Bíblica & Demonologia, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Angelologia Bíblica & Demonologia estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Angelologia Bíblica & Demonologia, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Angelologia Bíblica & Demonologia visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Angelologia Bíblica & Demonologia, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Angelologia Bíblica & Demonologia (ANG-302) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Angelologia Bíblica & Demonologia no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Angelologia Bíblica & Demonologia resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Angelologia Bíblica & Demonologia, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Angelologia Bíblica & Demonologia dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Angelologia Bíblica & Demonologia?",
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
      "id": "angelologia_p2",
      "titulo": "Angelologia Bíblica & Demonologia — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "ANG-302-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Angelologia Bíblica & Demonologia, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Angelologia Bíblica & Demonologia podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Angelologia Bíblica & Demonologia, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Angelologia Bíblica & Demonologia significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Angelologia Bíblica & Demonologia sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Angelologia Bíblica & Demonologia, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Angelologia Bíblica & Demonologia autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Angelologia Bíblica & Demonologia, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Angelologia Bíblica & Demonologia dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Angelologia Bíblica & Demonologia capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Angelologia Bíblica & Demonologia. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Angelologia Bíblica & Demonologia contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Angelologia Bíblica & Demonologia do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Angelologia Bíblica & Demonologia, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Angelologia Bíblica & Demonologia, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Angelologia Bíblica & Demonologia?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Angelologia Bíblica & Demonologia orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Angelologia Bíblica & Demonologia?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Angelologia Bíblica & Demonologia, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "antropologia",
    "ordem": 16,
    "codigo": "ANT-303",
    "moduloId": 3,
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "titulo": "Antropologia Teológica: Doutrina do Homem",
    "subtitulo": "Criação, Imago Dei (Imagem e Semelhança), constituição e propósito humano",
    "cargaHoraria": 50,
    "descricao": "A criação original do ser humano, dignidade intrínseca, dicotomia e tricotomia (corpo, alma e espírito), liberdade moral e estado probatório.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "antropologia_p1",
      "titulo": "Antropologia Teológica: Doutrina do Homem — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "ANT-303-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "A antropologia teológica fundamenta-se unicamente nas Escrituras Sagradas e ensina que o ser humano não é produto da evolução nem da geração espontânea, mas foi criado por um decreto e conselho deliberado de Deus ('Façamos o homem à nossa imagem').",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila rejeita preexistência, emanação e evolução, demonstrando que a criação do homem foi precedida pelo conselho divino da Trindade (Gn 1:26; 2:6)."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "De acordo com a teoria do Traducionismo, defendida historicamente por Tertuliano e pela tradição luterana, as almas dos seres humanos são transmitidas pelos pais aos filhos juntamente com os corpos pela geração natural.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila aponta que o traducionismo ensina que corpo e alma são transmitidos na procriação natural, servindo de base clássica para explicar a transmissão da depravação hereditária."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "A corrente do Dicotomismo afirma que o homem é constituído essencialmente de três substâncias completamente separadas: o corpo material, a alma animal e o espírito racional divino.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O Dicotomismo ensina que o homem é composto de duas substâncias (corpo material e alma/espírito imaterial). A divisão em três partes (corpo, alma e espírito) é a tese do Tricotomismo."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "O conceito pelagiano sustenta que a culpa do pecado de Adão foi transmitida a todos os recém-nascidos, de forma que ninguém é capaz de viver sem cometer pecados sem a graça salvadora.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Pelágio ensinava o erro herético de que todas as pessoas nascem puras, sem o pecado de Adão e com livre-arbítrio intacto, sendo o pecado disseminado apenas pelo mau exemplo."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "Na teologia bíblica da aliança, Adão foi o 'cabeça federal' de sua raça porque representava toda a humanidade perante a lei de Deus, de modo que sua desobediência trouxe condenação e corrupção a todos os seus descendentes.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 10 da apostila: 'Adão era o cabeça federal de sua raça porque a representava e enfrentou a prova tanto por si mesmo como pelos seus descendentes'."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Conforme a distinção feita pelo teólogo Wiley citado na apostila do SEBITAN, como se diferenciam a 'Imagem Natural' e a 'Imagem Moral' de Deus no ser humano?",
          "opcoes": [
            "Imagem natural é o tamanho do esqueleto humano; Imagem moral são as leis civis do país.",
            "Imagem natural é a espiritualidade e imortalidade que distinguem o homem dos animais; Imagem moral consiste na capacidade moral de justiça e santidade, danificada pela queda e restaurada em Cristo.",
            "Imagem natural existe apenas após o batismo; Imagem moral existia apenas nos animais no Éden.",
            "Ambas são idênticas à aparência física do corpo humano."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 6 da apostila: A imagem natural é inerente à constituição do ser humano como pessoa espiritual; a imagem moral (verdadeira justiça e santidade) foi afetada pelo pecado e é renovada pelo novo nascimento."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o postulado central da teoria do Criacionismo a respeito da origem de cada alma humana individual?",
          "opcoes": [
            "A alma é gerada unicamente pela combinação genética dos cromossomos paternos.",
            "Cada alma individual deve ser considerada como uma criação imediata e direta de Deus, unida ao corpo pré-formado no ventre materno.",
            "A alma humana pré-existia em uma estrela antes de encarnar na terra.",
            "A alma do homem é uma fração desgarrada da substância cósmica divina."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 4 da apostila: 'Para esta teoria, cada alma individual deve ser considerada como uma imediata criação de Deus, devendo a sua origem a um ato criador direto'."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Na perspectiva tricotomista (1 Ts 5:23), qual célebre síntese das faculdades do homem foi formulada pelo Dr. Scofield?",
          "opcoes": [
            "O homem é corpo para trabalhar, alma para pecar e espírito para morrer.",
            "Sendo 'espírito' o homem tem comunhão com Deus; sendo 'alma' tem consciência de si próprio; sendo 'corpo' tem conhecimento do mundo através dos sentidos.",
            "O espírito pertence à razão grega, a alma aos sentimentos e o corpo à nutrição.",
            "O homem não possui alma imaterial, mas apenas impulsos cerebrais elétricos."
          ],
          "respostaCorreta": 1,
          "explicacao": "Scofield citado na página 5: 'Sendo o homem espírito é capaz de ter conhecimento de Deus e comunhão com Ele; sendo alma tem conhecimento de si próprio; sendo corpo tem conhecimento do mundo'."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é a definição teológica de pecado formulada na apostila de Antropologia do SEBITAN?",
          "opcoes": [
            "Uma ilusão transitória da mente que se desfaz com meditação oriental.",
            "Falta de conformidade com a lei moral de Deus, em ato, disposição ou estado, constituindo uma ativa oposição ao Criador.",
            "Um simples erro de cálculo financeiro ou ignorância cultural involuntária.",
            "Um defeito passivo pelo qual a criatura humana jamais poderá ser condenada."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 10 da apostila: 'O pecado é um mal moral... uma ativa oposição a Deus... falta de conformidade com a lei moral de Deus, em ato, disposição ou estado'."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Quais são os três aspectos da morte como consequências da queda de Adão e Eva explicados no material didático?",
          "opcoes": [
            "Morte celular, morte funcional e morte social.",
            "Morte física (separação do corpo e da alma), morte espiritual (separação entre o homem e Deus) e morte eterna (a segunda morte, separação definitiva no lago de fogo).",
            "Morte aparente, sono da alma e reencarnação progressiva.",
            "Morte moral temporária de 40 anos, morte jurídica e morte cerimonial."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 8 da apostila: A queda acarretou a morte física (Hb 9:27), a morte espiritual (Ef 2:1) e a morte eterna ou segunda morte (Ap 20:14) para os que rejeitam a salvação."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Antropologia Teológica: Doutrina do Homem, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Antropologia Teológica: Doutrina do Homem estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Antropologia Teológica: Doutrina do Homem, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Antropologia Teológica: Doutrina do Homem visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Antropologia Teológica: Doutrina do Homem, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Antropologia Teológica: Doutrina do Homem (ANT-303) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Antropologia Teológica: Doutrina do Homem no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Antropologia Teológica: Doutrina do Homem resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Antropologia Teológica: Doutrina do Homem, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Antropologia Teológica: Doutrina do Homem dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Antropologia Teológica: Doutrina do Homem?",
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
      "id": "antropologia_p2",
      "titulo": "Antropologia Teológica: Doutrina do Homem — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "ANT-303-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Antropologia Teológica: Doutrina do Homem, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Antropologia Teológica: Doutrina do Homem podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Antropologia Teológica: Doutrina do Homem, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Antropologia Teológica: Doutrina do Homem significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Antropologia Teológica: Doutrina do Homem sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Antropologia Teológica: Doutrina do Homem, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Antropologia Teológica: Doutrina do Homem autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Antropologia Teológica: Doutrina do Homem, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Antropologia Teológica: Doutrina do Homem dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Antropologia Teológica: Doutrina do Homem capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Antropologia Teológica: Doutrina do Homem. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Antropologia Teológica: Doutrina do Homem contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Antropologia Teológica: Doutrina do Homem do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Antropologia Teológica: Doutrina do Homem, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Antropologia Teológica: Doutrina do Homem, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Antropologia Teológica: Doutrina do Homem?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Antropologia Teológica: Doutrina do Homem orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Antropologia Teológica: Doutrina do Homem?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Antropologia Teológica: Doutrina do Homem, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "hamartiologia",
    "ordem": 17,
    "codigo": "HAM-304",
    "moduloId": 3,
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "titulo": "Hamartiologia: A Doutrina do Pecado",
    "subtitulo": "Origem da transgressão, pecado original e consequências cósmicas",
    "cargaHoraria": 50,
    "descricao": "Definição bíblica de pecado (hamartia), a queda edênica, imputação da culpa, depravação humana, morte física, espiritual e a necessidade de redenção.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "hamartiologia_p1",
      "titulo": "Hamartiologia: A Doutrina do Pecado — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "HAM-304-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "O termo Hamartiologia vem do grego Hamartia (pecado, pecaminosidade) e Logia (estudo), consistindo no estudo sistemático do mal que acometeu a humanidade a partir da transgressão no Éden.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila define Hamartiologia como o estudo do mal acometido a toda a humanidade como um legado deixado pelo progenitor de toda a raça humana."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "A teologia bíblica ensina que Deus é o autor e a causa primária do pecado no universo, tendo obrigado Lúcifer a pecar para cumprir Seus decretos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A apostila assevera expressamente: 'Não se pode considerar a Deus como autor do pecado... as Escrituras (Jó 34:10; Tg 1:13) afirmam que Deus não é causa do pecado'."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "O pecado humano começou no paraíso como um ato perfeitamente voluntário e responsável de Adão ao desobedecer ao mandamento explícito de Deus, tornando-se escravo do pecado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila ensina que a queda humana teve início com a transgressão voluntária de Adão no paraíso, trazendo corrupção a toda a sua posteridade."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "O pecado manifesta-se unicamente em ações externas violentas, não existindo pecado por omissão quando alguém deixa de fazer o bem que sabe que deveria fazer.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Tiago 4:17 e a apostila enfatizam que deixar de fazer o bem que sabemos que nos compete é pecado (pecado de omissão)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "A Bíblia ensina que a queda de Adão trouxe consequências que atingiram não apenas a raça humana, mas também o reino animal e o reino vegetal, os quais aguardam a redenção milenar de Cristo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 5 da apostila: A universalidade do pecado abrange o reino vegetal (Gn 3:17-18), o reino animal (Is 11:6-9) e toda a raça humana (Rm 3:23)."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é a definição teológica de pecado no sentido mais amplo e relacional formulada na apostila de Hamartiologia do SEBITAN?",
          "opcoes": [
            "Um simples equívoco intelectual curável por filosofia grega.",
            "Um estado mau da alma ou da personalidade que rompe a relação entre o pecador e o Deus pessoal, manifestando-se em atos e gerando a morte.",
            "Uma doença física provocada apenas por micróbios da atmosfera.",
            "Uma fraqueza involuntária pela qual a criatura jamais será responsabilizada."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 3 da apostila: 'Tanto no Antigo como no Novo Testamento, o pecado é considerado principalmente uma brecha ou rompimento de relação entre o pecador e o Deus pessoal... é um estado mau da alma'."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Ao investigar a origem do pecado na criação, onde ocorreu a primeira queda antes da história humana registrada em Gênesis 3?",
          "opcoes": [
            "Nas cavernas dos homens pré-históricos.",
            "No mundo angélico, quando Lúcifer e legiões de anjos caíram pelo pecado do orgulho, querendo ser iguais a Deus.",
            "No dilúvio de Noé."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 4 da apostila: 'O pecado originou-se no mundo angélico... pelo pecado do orgulho de desejar ser como Deus em poder e autoridade' (Is 14:12-14; 1 Tm 3:6)."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Como o apóstolo Paulo define a extensão universal do pecado humano em Romanos 3:23?",
          "opcoes": [
            "Apenas os criminosos declarados estão em falta com Deus.",
            "Todos pecaram e destituídos estão da glória de Deus.",
            "A humanidade nasce santa e pura sem necessidade de redenção.",
            "O pecado desapareceu após a dispensação da lei mosaica."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 5 da apostila: Romanos 3:23 declara categórica e universalmente que 'todos pecaram e destituídos estão da glória de Deus'."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Na psicologia bíblica das Escrituras, onde reside a sede do pecado humano e a raiz de onde procedem os pensamentos, a vontade e as ações?",
          "opcoes": [
            "Nos sentidos exteriores da audição e visão.",
            "No coração do homem, que é o órgão central da alma de onde estão as saídas da vida.",
            "Apenas nas roupas e costumes cerimoniais da sociedade.",
            "No cérebro puramente mecânico como matéria inerte."
          ],
          "respostaCorreta": 1,
          "explicacao": "A apostila ensina que o pecado tem sua sede no coração, centro moral da alma de onde brotam os maus desígnios e volições (Pv 4:23; Mt 15:19)."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é a única solução provida pelo Deus soberano para libertar o homem da culpa, domínio e condenação do pecado?",
          "opcoes": [
            "A autossuficiência moral e a evolução biológica progressiva.",
            "A obra redentora e o sacrifício expiatório vicário de Jesus Cristo na cruz do Calvário.",
            "A obediência irrestrita aos filósofos de Alexandria.",
            "A anulação dos Dez Mandamentos por decreto eclesiástico."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 6 da apostila: 'Portanto, a solução que Deus proveu está na obra redentiva de Cristo a favor da humanidade, tratada em Soteriologia'."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Hamartiologia: A Doutrina do Pecado, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Hamartiologia: A Doutrina do Pecado estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Hamartiologia: A Doutrina do Pecado, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Hamartiologia: A Doutrina do Pecado visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Hamartiologia: A Doutrina do Pecado, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Hamartiologia: A Doutrina do Pecado (HAM-304) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Hamartiologia: A Doutrina do Pecado no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Hamartiologia: A Doutrina do Pecado resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Hamartiologia: A Doutrina do Pecado, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Hamartiologia: A Doutrina do Pecado dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Hamartiologia: A Doutrina do Pecado?",
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
      "id": "hamartiologia_p2",
      "titulo": "Hamartiologia: A Doutrina do Pecado — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "HAM-304-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Hamartiologia: A Doutrina do Pecado, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Hamartiologia: A Doutrina do Pecado podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Hamartiologia: A Doutrina do Pecado, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Hamartiologia: A Doutrina do Pecado significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Hamartiologia: A Doutrina do Pecado sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Hamartiologia: A Doutrina do Pecado, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Hamartiologia: A Doutrina do Pecado autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Hamartiologia: A Doutrina do Pecado, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Hamartiologia: A Doutrina do Pecado dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Hamartiologia: A Doutrina do Pecado capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Hamartiologia: A Doutrina do Pecado. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Hamartiologia: A Doutrina do Pecado contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Hamartiologia: A Doutrina do Pecado do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Hamartiologia: A Doutrina do Pecado, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Hamartiologia: A Doutrina do Pecado, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Hamartiologia: A Doutrina do Pecado?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Hamartiologia: A Doutrina do Pecado orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Hamartiologia: A Doutrina do Pecado?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Hamartiologia: A Doutrina do Pecado, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "cristologia",
    "ordem": 18,
    "codigo": "CRI-305",
    "moduloId": 3,
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "titulo": "Cristologia: A Pessoa e Obra de Jesus Cristo",
    "subtitulo": "Dupla natureza (união hipostática), vida sem pecado, cruz e ressurreição",
    "cargaHoraria": 50,
    "descricao": "Pré-existência de Cristo, encarnação pelo Espírito Santo, divindade e humanidade perfeitas, morte vicária na cruz, ressurreição corporal e exaltação.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "cristologia_p1",
      "titulo": "Cristologia: A Pessoa e Obra de Jesus Cristo — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "CRI-305-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "A Cristologia ensina que Jesus Cristo é pré-existente desde a eternidade com o Pai, possuindo a mesma essência divina incriada e tendo participado ativamente no planejamento da criação e da redenção.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! João 1:1-3 e Colossenses 1:16-17 afirmam que 'tudo foi criado por Ele e para Ele; Ele é antes de todas as coisas e todas as coisas subsistem por Ele'."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "A verdadeira doutrina bíblica da Kenosis (Fp 2:7 - 'esvaziou-se a si mesmo') ensina que Jesus despiu-se de Sua divindade e deixou de ser Deus enquanto viveu sobre a terra.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A apostila adverte que essa é a doutrina falsa da Kenosis. A verdadeira Kenosis ensina o encobrimento de Sua glória pré-encarnada e o não-uso voluntário de atributos divinos, sem jamais deixar de ser plenamente Deus."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "Na união das duas naturezas em Cristo (união hipostática), a divindade e a humanidade acham-se unidas em Sua pessoa sem mistura, sem que Sua humanidade seja deificada nem Sua divindade humanizada, permanecendo distintas na pessoa indivisível do Deus-Homem.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 7 da apostila: 'A divindade e a humanidade se acham unidas Nele, ainda que não sejam misturadas... As duas naturezas terão de permanecer sempre distintas, ao mesmo tempo que a pessoa de Cristo é una e indivisível'."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "Jesus exerceu o Seu sacerdócio eterno segundo a linhagem tradicional da lei de Moisés e da família de Arão da tribo de Levi.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Jesus descendia da tribo de Judá e Seu sacerdócio é de uma nova aliança por juramento divino, eterno e segundo a ordem régia de Melquisedeque (Hb 7:14, 21)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "A ressurreição corporal de Jesus dentre os mortos é o grande fato singular e milagre supremo com o qual a fé cristã está em pé ou cai, autenticando a eficácia eterna de Sua morte expiatória.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! 1 Coríntios 15:14-17 ensina que se Cristo não ressuscitou, vã é a nossa pregação e vã a nossa fé; a ressurreição é a confirmação divina da vitória de Cristo sobre a morte e o pecado."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Quais são os três grandes ofícios messiânicos exercidos com perfeição por Jesus Cristo segundo a Teologia Bíblica?",
          "opcoes": [
            "Legislador civil, Historiador e Sacerdote de Roma.",
            "Profeta (revelando Deus aos homens), Sacerdote (oferecendo sacrifício perfeito e intercedendo pelos homens) e Rei (governante soberano e eterno).",
            "Juiz militar, Escriba da lei e Patriarca nômade.",
            "Doutor do Sinédrio, Cantor do templo e Conquistador gentílico."
          ],
          "respostaCorreta": 1,
          "explicacao": "A apostila detalha os três ofícios bíblicos de Cristo: Profeta (Mt 13:57), Sumo Sacerdote eterno segundo a ordem de Melquisedeque (Hb 6:20) e Rei dos Reis (Jo 18:37; Ap 19:16)."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Na soteriologia da cruz, qual é o sentido teológico exato do vocábulo 'Propiciação' (1 Jo 2:2; 4:10; Rm 3:25)?",
          "opcoes": [
            "Um adiantamento financeiro para os custos do santuário terrestre.",
            "Aquilo que torna Deus propício e favorável ao pecador, afastando a santa ira divina mediante a remissão dos pecados pelo sangue de Jesus.",
            "A cópia fiel dos mandamentos morais nas pedras de Êxodo.",
            "A substituição de homens idosos por sacerdotes jovens."
          ],
          "respostaCorreta": 1,
          "explicacao": "A apostila define: 'Propiciação significa aquilo que torna propício, favorável. O pecado separava o homem de Deus, mas por causa da propiciação de Jesus no Calvário, a ira de Deus se retirou e temos paz com Deus'."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Como o profeta messiânico Isaías descreve o sofrimento vicário de Cristo no célebre capítulo 53:4-5?",
          "opcoes": [
            "Como uma derrota militar inevitável frente aos reis babilônicos.",
            "Verdadeiramente ele tomou sobre si as nossas enfermidades e levou as nossas dores; o castigo que nos traz a paz estava sobre ele e pelas suas pisaduras fomos sarados.",
            "Como uma fábula alegórica para incentivar a agricultura de Israel.",
            "Como uma vingança celestial contra as nações circunvizinhas."
          ],
          "respostaCorreta": 1,
          "explicacao": "Isaías 53 revela que a morte do Servo Sofredor foi em substituição a nós, pagando a nossa condenação para nos reconciliar com o Pai."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Por que a Ascensão corporal de Jesus ao céu (Atos 1:9-11) é considerada uma linha divisória fundamental no Seu ministério salvífico?",
          "opcoes": [
            "Porque encerrou Sua presença terrena e inaugurou o Seu sacerdócio celestial permanente de intercessão e atuação soberana junto ao Pai através do Espírito Santo.",
            "Porque marcou a extinção das igrejas locais na Galiléia.",
            "Porque significou que Cristo perdeu o contato com os homens na terra.",
            "Porque limitou a obra de salvação aos apóstolos que viram a partida."
          ],
          "respostaCorreta": 0,
          "explicacao": "A apostila ensina: 'A ascensão vem a ser a linha divisória entre dois períodos: de Seu nascimento até a ressurreição, viveu sob condições terrenas; desde a ascensão, é o Cristo glorificado que vive no céu e intercede permanentemente por nós'."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Por que Melquisedeque (Gn 14:18-20; Sl 110:4; Hb 7) prefigurou com precisão insuperável o ofício messiânico de Jesus?",
          "opcoes": [
            "Porque era um rei guerreiro que expulsou os egípcios de Jerusalém.",
            "Porque reuniu na mesma pessoa os ofícios de Rei de Salém (Rei de Justiça e Paz) e Sacerdote do Deus Altíssimo, ofícios que a lei mosaica separava rigorosamente.",
            "Porque era bisneto de Jacó e conhecedor da lei levítica.",
            "Porque presidiu o primeiro concílio em Antioquia da Síria."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 11 da apostila: Melquisedeque era tanto rei como sacerdote de Deus, exatamente como Jesus é o Messias-Rei e o Eterno Sumo Sacerdote no trono de Deus."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Cristologia: A Pessoa e Obra de Jesus Cristo, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Cristologia: A Pessoa e Obra de Jesus Cristo estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Cristologia: A Pessoa e Obra de Jesus Cristo, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Cristologia: A Pessoa e Obra de Jesus Cristo visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Cristologia: A Pessoa e Obra de Jesus Cristo, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Cristologia: A Pessoa e Obra de Jesus Cristo (CRI-305) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Cristologia: A Pessoa e Obra de Jesus Cristo no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Cristologia: A Pessoa e Obra de Jesus Cristo resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Cristologia: A Pessoa e Obra de Jesus Cristo, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Cristologia: A Pessoa e Obra de Jesus Cristo dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Cristologia: A Pessoa e Obra de Jesus Cristo?",
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
      "id": "cristologia_p2",
      "titulo": "Cristologia: A Pessoa e Obra de Jesus Cristo — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "CRI-305-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Cristologia: A Pessoa e Obra de Jesus Cristo, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Cristologia: A Pessoa e Obra de Jesus Cristo podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Cristologia: A Pessoa e Obra de Jesus Cristo, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Cristologia: A Pessoa e Obra de Jesus Cristo significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Cristologia: A Pessoa e Obra de Jesus Cristo sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Cristologia: A Pessoa e Obra de Jesus Cristo, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Cristologia: A Pessoa e Obra de Jesus Cristo autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Cristologia: A Pessoa e Obra de Jesus Cristo, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Cristologia: A Pessoa e Obra de Jesus Cristo dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Cristologia: A Pessoa e Obra de Jesus Cristo capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Cristologia: A Pessoa e Obra de Jesus Cristo. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Cristologia: A Pessoa e Obra de Jesus Cristo contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Cristologia: A Pessoa e Obra de Jesus Cristo do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Cristologia: A Pessoa e Obra de Jesus Cristo, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Cristologia: A Pessoa e Obra de Jesus Cristo, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Cristologia: A Pessoa e Obra de Jesus Cristo?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Cristologia: A Pessoa e Obra de Jesus Cristo orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Cristologia: A Pessoa e Obra de Jesus Cristo?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Cristologia: A Pessoa e Obra de Jesus Cristo, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "pneumatologia",
    "ordem": 19,
    "codigo": "PNE-306",
    "moduloId": 3,
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "titulo": "Pneumatologia: A Doutrina do Espírito Santo",
    "subtitulo": "Personalidade, divindade, dons espirituais, fruto e batismo no Espírito",
    "cargaHoraria": 50,
    "descricao": "A divindade e personalidade do Paracleto, ministério no A.T. e N.T., regeneração, habitação no crente, batismo no Espírito Santo, dons carismáticos e fruto.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "pneumatologia_p1",
      "titulo": "Pneumatologia: A Doutrina do Espírito Santo — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "PNE-306-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "A Pneumatologia bíblica ensina que o Espírito Santo não é uma influência impessoal ou mera força positiva, mas uma Pessoa Divina real com inteligência, vontade, sentimentos próprios e atributos divinos absolutos.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 2 da apostila: 'O Espírito Santo não é uma influência positiva ou um poder impessoal meramente. É uma Pessoa, é divino, possui existência real e ações peculiares'."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "A Bíblia mostra que o Espírito Santo pode ser entristecido (Ef 4:30), pode-se mentir contra Ele (At 5:3) e pode-se resistir à Sua operação (At 7:51), fatos que comprovam categoricamente a Sua personalidade.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Apenas um ser pessoal consciente e dotado de sentimentos e dignidade pode ser entristecido, resistido ou alvo de mentira e blasfêmia."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "O símbolo do 'Fogo' associado ao Espírito Santo (Mt 3:11; At 2:3) representa limpeza, purificação de escórias, zelo divino e iluminação dos corações crentes.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 4 da apostila: O fogo consome o que é combustível, limpa a escória, amolece corações endurecidos, esquenta, inflama e ilumina."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "O dom espiritual de Interpretação de Línguas (1 Co 12:10) é independente e pode operar no culto público mesmo sem que haja previamente a manifestação de línguas espirituais.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Página 10 da apostila: 'Interpretação de Línguas: Este é o único Dom cuja função ou existência depende de outro Dom (1 Co 14:5)'."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "O fruto do Espírito em Gálatas 5:22-23 expressa as características da vida de Cristo reproduzidas no crente, encabeçado pelo amor divino (Ágape) que perdoa, é incondicional e altruísta.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Páginas 10-12 da apostila: O fruto do Espírito manifesta o caráter de Cristo em nós: Ágape, alegria, paz, longanimidade, benignidade, bondade, fidelidade, mansidão e domínio próprio."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Como os nove dons espirituais concedidos pelo Espírito Santo à Igreja em 1 Coríntios 12 são organizados didaticamente na apostila do SEBITAN?",
          "opcoes": [
            "Dons do Sinai, Dons da Galileia e Dons do Templo.",
            "Dons de Revelação (Palavra de Sabedoria, Conhecimento, Discernimento), Dons de Poder (Fé, Curas, Milagres) e Dons de Inspiração (Línguas, Interpretação, Profecia).",
            "Dons Naturais da Infância e Talentos Vocacionais Artísticos.",
            "Dons Episcopais e Dons Diaconais."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 9 da apostila classifica os 9 dons em três grupos harmônicos: Revelação (sabedoria, ciência, discernimento), Poder (fé, curas, milagres) e Inspiração (línguas, interpretação, profecia)."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Dentre os quatro termos gregos que descrevem o amor, qual vocábulo designa o amor supremo de Deus, volitivo, incondicional e redentor demonstrado no Calvário e na parábola do Bom Samaritano?",
          "opcoes": [
            "Eros (amor físico e sensual).",
            "Storge (afeto social familiar).",
            "Philia (afeto emocional de amizade).",
            "Ágape (amor nobre, devocional, racional e sacrificial)."
          ],
          "respostaCorreta": 3,
          "explicacao": "Página 10 da apostila: Ágape é o amor divino incondicional, que envolve a razão, uma escolha e sacrifício altruístico sem esperar retorno, ilustrado no Bom Samaritano e na cruz."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "O que significa etimológica e praticamente a virtude do fruto do Espírito 'Domínio Próprio ou Temperança' (grego Enkrateia)?",
          "opcoes": [
            "Um poder dominador interior (EN = dentro + KRATOS = força) sob a direção do Espírito Santo, que governa o ego, os apetites e os impulsos carnais.",
            "A rigidez militar para impor decretos sobre outras pessoas.",
            "A fraqueza passiva diante de todas as tentações do mundo.",
            "O isolamento recluso sem falar com o próximo."
          ],
          "respostaCorreta": 0,
          "explicacao": "Página 12 da apostila: 'ENKRATEIA: EN significa DENTRO e KRATOS significa FORÇA. Refere-se a um poder de controle interior, disciplina do ego, moderação nos desejos e vitória sobre o eu'."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o simbolismo bíblico do 'Azeite da Santa Unção' (Êx 30:22-33) com suas especiarias sagradas (mirra, cinamomo, cálamo e cássia)?",
          "opcoes": [
            "Um produto de perfumaria de livre comércio no deserto.",
            "A consagração irrevogável e a capacitação especial do Espírito Santo para os sacerdotes e o Tabernáculo, com rigorosa proibição de imitação profana.",
            "Um óleo de iluminação comum das casas dos egípcios.",
            "Um azeite medicinal exclusivo para lavagem de pés."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 6 da apostila: O óleo sagrado continha especiarias em proporções certas, era reservado para consagração sacerdotal e do Tabernáculo, e qualquer imitação era estritamente proibida."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Segundo as palavras de Jesus em João 16:7-11, qual é a missão indispensável do Consolador em relação à humanidade pecadora?",
          "opcoes": [
            "Anunciar a prosperidade financeira dos imperadores romanos.",
            "Convencer o mundo do pecado (da incredulidade), da justiça (de Cristo no Pai) e do juízo (de Satanás julgado).",
            "Distribuir riquezas materiais em Jerusalém.",
            "Abolir os ensinamentos dos profetas do Antigo Testamento."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 7 da apostila: O ministério do Espírito Santo para com a humanidade é de convencer do pecado, da justiça e do juízo (Jo 16:7-11), operando o novo nascimento."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Pneumatologia: A Doutrina do Espírito Santo, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Pneumatologia: A Doutrina do Espírito Santo estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Pneumatologia: A Doutrina do Espírito Santo, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Pneumatologia: A Doutrina do Espírito Santo visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Pneumatologia: A Doutrina do Espírito Santo, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Pneumatologia: A Doutrina do Espírito Santo (PNE-306) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Pneumatologia: A Doutrina do Espírito Santo no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Pneumatologia: A Doutrina do Espírito Santo resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Pneumatologia: A Doutrina do Espírito Santo, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Pneumatologia: A Doutrina do Espírito Santo dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Pneumatologia: A Doutrina do Espírito Santo?",
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
      "id": "pneumatologia_p2",
      "titulo": "Pneumatologia: A Doutrina do Espírito Santo — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "PNE-306-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Pneumatologia: A Doutrina do Espírito Santo, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Pneumatologia: A Doutrina do Espírito Santo podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Pneumatologia: A Doutrina do Espírito Santo, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Pneumatologia: A Doutrina do Espírito Santo significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Pneumatologia: A Doutrina do Espírito Santo sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Pneumatologia: A Doutrina do Espírito Santo, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Pneumatologia: A Doutrina do Espírito Santo autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Pneumatologia: A Doutrina do Espírito Santo, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Pneumatologia: A Doutrina do Espírito Santo dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Pneumatologia: A Doutrina do Espírito Santo capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Pneumatologia: A Doutrina do Espírito Santo. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Pneumatologia: A Doutrina do Espírito Santo contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Pneumatologia: A Doutrina do Espírito Santo do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Pneumatologia: A Doutrina do Espírito Santo, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Pneumatologia: A Doutrina do Espírito Santo, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Pneumatologia: A Doutrina do Espírito Santo?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Pneumatologia: A Doutrina do Espírito Santo orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Pneumatologia: A Doutrina do Espírito Santo?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Pneumatologia: A Doutrina do Espírito Santo, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "soteriologia",
    "ordem": 20,
    "codigo": "SOT-307",
    "moduloId": 3,
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "titulo": "Soteriologia: A Doutrina da Salvação",
    "subtitulo": "Graça soberana, expiação, justificação pela fé, santificação e glorificação",
    "cargaHoraria": 50,
    "descricao": "A ordem da salvação (ordo salutis): eleição, chamado eficaz, arrependimento e fé, justificação imputada, adoção de filhos, santificação contínua e perseverança.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "soteriologia_p1",
      "titulo": "Soteriologia: A Doutrina da Salvação — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "SOT-307-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "A palavra Soteriologia deriva do grego Soteria (salvação) e Logia (estudo), constituindo o estudo sistemático de todos os processos divinos e humanos que envolvem a salvação da alma.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila define Soteriologia como o estudo sistemático dos processos que envolvem a salvação."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "A soberania de Deus na salvação significa que a iniciativa primária pertence a Deus em virtude de Seu grande amor; se Deus não tomasse a iniciativa, nenhum ser humano seria salvo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 3 da apostila: 'A iniciativa está com Deus e não com o homem. Se Deus não tomasse a iniciativa na salvação da criatura, ninguém seria salvo'."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "A salvação bíblica ocorre em três tempos: passado (salvo da culpa e penalidade do pecado), presente (salvo do hábito e domínio do pecado) e futuro (salvo da fraqueza física e presença do pecado na ressurreição).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 3 da apostila detalha os três tempos: 1- Passado (Lc 7:50); 2- Presente (Rm 6:14); 3- Futuro (Rm 8:18-23; 1 Co 15:42-44)."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "A Regeneração é um esforço puramente humano de melhora de comportamento social e disciplina moral, que independe do milagre criador do Espírito Santo.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Página 4 da apostila: 'A regeneração é uma mudança radical operada pelo Espírito Santo na alma humana por meio do Evangelho... é um ato poderoso e criador de Deus'."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "A Adoção (huiothesia) é o ato da graça soberana pelo qual Deus concede todos os direitos, privilégios e obrigações da afiliação divina àqueles que recebem a Cristo, tornando-os herdeiros de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 4 da apostila: Huiothesia aparece em Paulo e expressa a recepção nos direitos de filho e na família de Deus através de Cristo (Rm 8:15, 23)."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Como a teologia bíblica define o ato gracioso da 'Justificação' pela fé (Rm 3:24; 5:1)?",
          "opcoes": [
            "Um processo gradual no qual o homem paga por suas próprias faltas através de boas obras.",
            "Um ato declarativo da livre graça de Deus no qual Ele perdoa todos os pecados e nos aceita como justos diante de Si, imputando-nos a justiça perfeita de Cristo recebida pela fé.",
            "Uma licença moral para cometer pecados sem culpa.",
            "Uma cerimônia pública celebrada anualmente pelos sacerdotes do templo."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 4 da apostila: 'Justificação: É um ato da livre graça de Deus no qual Ele perdoa todos os pecados e nos aceita como justos diante de Si, somente por causa da justiça de Cristo a nós imputada e recebida pela fé'."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "O que é o verdadeiro 'Arrependimento' bíblico que conduz à conversão?",
          "opcoes": [
            "O mero medo das punições civis sem mudança de coração.",
            "O ato de entristecer-se com dor sincera pelos pecados cometidos contra Deus e tomar a decisão firme de não mais desejá-los nem praticá-los.",
            "Uma penitência física imposta por um tribunal.",
            "A repetição mecânica de fórmulas religiosas decoradas."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 3 da apostila: 'Arrependimento: é o ato de entristecer-se pelos pecados cometidos e não desejá-los... possibilita o homem sentir profunda tristeza e tomar a decisão de não querer mais praticá-los'."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o significado e a natureza da 'Santificação' na experiência contínua do crente?",
          "opcoes": [
            "Um isolamento ascético obrigatório em mosteiros medievais.",
            "Uma obra experimental da livre graça divina pela qual somos renovados no homem interior segundo a imagem de Deus, morrendo dia a dia para o pecado e vivendo para a retidão.",
            "Um estado de apatia total onde o cristão perde todas as suas emoções humanas.",
            "Um rito realizado uma única vez no nascimento da criança."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 4 da apostila: 'Santificação: É a obra da livre graça divina pela qual somos renovados no homem interior segundo a imagem de Deus, habilitados a morrer cada vez mais para o pecado e a viver para retidão'."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o preço insubstituível da Redenção exigido pela justiça divina e pago na cruz segundo 1 Pedro 1:18-19?",
          "opcoes": [
            "Ouro e prata recolhidos pelos templos de Jerusalém.",
            "O precioso sangue de Cristo, como de um cordeiro imaculado e incontaminado.",
            "Ofertas de animais sacrificados no deserto de Sinai.",
            "Contratos mercantis firmados com reis gentios."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 3 da apostila: Fomos resgatados não por coisas corruptíveis como ouro ou prata, mas pelo precioso sangue de Cristo derramado na cruz."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "O que representa a 'Glorificação', estágio final da salvação do crente (Rm 8:30; 1 Co 15:51-54)?",
          "opcoes": [
            "A conquista de riquezas e títulos de nobreza na presente dispensação.",
            "A consumação final da obra divina quando o crente recebe um corpo ressurreto incorruptível e imortal, participando da glória eterna de Deus.",
            "A reencarnação da alma em novos corpos biológicos.",
            "O retorno permanente ao paraíso terreno do Éden sob a lei de Moisés."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 5 da apostila: 'Glorificação: É o ato final da salvação... no hebraico traz a ideia de ceifa, especialmente a alegria de ceifar... quando o mortal se revestir da imortalidade'."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Soteriologia: A Doutrina da Salvação, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Soteriologia: A Doutrina da Salvação estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Soteriologia: A Doutrina da Salvação, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Soteriologia: A Doutrina da Salvação visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Soteriologia: A Doutrina da Salvação, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Soteriologia: A Doutrina da Salvação (SOT-307) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Soteriologia: A Doutrina da Salvação no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Soteriologia: A Doutrina da Salvação resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Soteriologia: A Doutrina da Salvação, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Soteriologia: A Doutrina da Salvação dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Soteriologia: A Doutrina da Salvação?",
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
      "id": "soteriologia_p2",
      "titulo": "Soteriologia: A Doutrina da Salvação — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "SOT-307-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Soteriologia: A Doutrina da Salvação, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Soteriologia: A Doutrina da Salvação podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Soteriologia: A Doutrina da Salvação, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Soteriologia: A Doutrina da Salvação significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Soteriologia: A Doutrina da Salvação sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Soteriologia: A Doutrina da Salvação, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Soteriologia: A Doutrina da Salvação autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Soteriologia: A Doutrina da Salvação, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Soteriologia: A Doutrina da Salvação dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Soteriologia: A Doutrina da Salvação capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Soteriologia: A Doutrina da Salvação. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Soteriologia: A Doutrina da Salvação contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Soteriologia: A Doutrina da Salvação do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Soteriologia: A Doutrina da Salvação, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Soteriologia: A Doutrina da Salvação, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Soteriologia: A Doutrina da Salvação?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Soteriologia: A Doutrina da Salvação orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Soteriologia: A Doutrina da Salvação?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Soteriologia: A Doutrina da Salvação, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "eclesiologia",
    "ordem": 21,
    "codigo": "ECL-308",
    "moduloId": 3,
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "titulo": "Eclesiologia: A Doutrina da Igreja",
    "subtitulo": "O Corpo de Cristo, ordenanças (Batismo e Ceia) e estrutura congregacional",
    "cargaHoraria": 50,
    "descricao": "Origem em Pentecostes, metáforas bíblicas (corpo, edifício, noiva), ordenanças da igreja, modelos de governo (episcopal, presbiteriano, congregacional) e missão.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "eclesiologia_p1",
      "titulo": "Eclesiologia: A Doutrina da Igreja — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "ECL-308-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "A palavra 'Igreja' vem do termo grego Ekklesia (Ek = para fora + Klesis = chamados), significando literalmente uma assembleia de pessoas chamadas para fora do mundo para pertencer a Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 2 da apostila: 'Etimologicamente, EK-KLESIS significa chamados para fora, isto é, um povo tirado para fora'."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "A Igreja possui uma dupla dimensão essencial: como Organismo espiritual (o corpo místico vivo de Cristo formado por todos os crentes regenerados) e como Organização local (com ordem, liderança e preceitos bíblicos).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila detalha o aspecto espiritual como organismo (At 15:14; 1 Co 12) e a estrutura visível como organização local em assembleia congregada."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "O Batismo nas águas tem o poder intrínseco e mágico de salvar o ser humano e perdoar pecados mesmo sem a necessidade de arrependimento e fé pessoal em Cristo.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A apostila aponta que a concepção de que o rito transmite graça automática é errônea; o batismo é um símbolo visível da morte, sepultamento e ressurreição com Cristo para quem já crê e se arrependeu (Mc 16:16)."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "A Ceia do Senhor é tanto um memorial histórico dos sofrimentos e sangue de Cristo na cruz quanto uma profecia de esperança que aponta para o banquete das Bodas do Cordeiro até que Ele venha.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Goodchild citado na página 6: 'A Ceia contempla não só o passado mas também o futuro. É uma comemoração e uma profecia. Demonstra a morte do Senhor até que venha'."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "A disciplina na igreja tem caráter estritamente positivo e terapêutico, visando corrigir a má situação e restaurar em amor o crente caído, sem espírito de revanche ou perseguição pessoal.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 7 da apostila: 'Não se deve considerar a disciplina com caráter negativo, castigo... A disciplina visa corrigir, manter o bom testemunho e restaurar o caído com espírito de humildade e amor (Gl 6:1)'."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Quais são as três formas principais de governo eclesiástico praticadas pelas igrejas cristãs através dos séculos segundo a apostila?",
          "opcoes": [
            "Governo Monárquico, Parlamentarista e Ditatorial.",
            "Episcopal ou Prelática (governo centrado nos bispos e clero superior), Presbiteriana ou Oligárquica (governo por sínodos e presbitérios) e Congregacional ou Independente (autogoverno pela assembleia dos membros).",
            "Governo Feudal, Teocrático patriarcal e Coletivista secular.",
            "Governo de Juízes, Monarquia davídica e Sinédrio dos escribas."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 4 da apostila define os três modelos históricos: 1- Episcopal ou Prelática (Católica, Anglicana); 2- Presbiteriana (Presbiteriana, Luterana); 3- Congregacional (Batistas, Congregacionais)."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "No vocabulário neotestamentário, qual é a relação entre os títulos Pastor, Presbítero, Bispo e Ancião na igreja primitiva?",
          "opcoes": [
            "Designavam cargos civis remunerados pelo imperador de Roma.",
            "Designam oficialmente o mesmo ofício e ministério pastoral de liderança espiritual do rebanho.",
            "Bispo era um título militar e presbítero era um sacerdote levita.",
            "Representavam ordens hierárquicas incompatíveis entre si."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 4 da apostila: 'No Novo Testamento esses vocábulos são empregados para designar oficiais eclesiásticos, entretanto, todos designam o mesmo ofício; porque significam oficialmente o mesmo' (At 20:17,28; Tt 1:5-7)."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é a missão tríplice para a qual Deus estabeleceu e mantém a Sua Igreja sobre a terra?",
          "opcoes": [
            "Cobrar tributos, criar milícias e organizar festas populares.",
            "Adoração (glorificação ao nome de Deus), Edificação (crescimento e maturidade dos santos) e Evangelização (proclamação do Evangelho aos perdidos).",
            "Isolar-se em cavernas sem prestar socorro aos necessitados.",
            "Transformar-se em partido político partidário para assumir o governo do país."
          ],
          "respostaCorreta": 1,
          "explicacao": "Páginas 8-9 da apostila detalham a missão tríplice da Igreja: 1- Adoração (precioso tesouro de Deus em espírito e verdade); 2- Edificação (fortalecimento mútuo); 3- Evangelização (ganhar almas e formar discípulos)."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Quais são as duas únicas ordenanças formais deixadas por Jesus Cristo para a observância perpétua de Sua Igreja?",
          "opcoes": [
            "A circuncisão e os sacrifícios de animais no templo.",
            "O Batismo em águas e a Ceia do Senhor.",
            "A consagração de roupas talares e a guarda do sábado mosaico.",
            "A cobrança de indulgências e o voto de pobreza perpétua."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 5 da apostila: 'A palavra Ordenança significa aquilo que foi mandado. Esse termo descreve as duas instituições, o batismo e a ceia do Senhor, que Cristo deixou para as Igrejas observarem'."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "De acordo com o método de procedimento de disciplina ensinado por Jesus em Mateus 18:15-17, qual é a primeira atitude que o ofendido deve adotar?",
          "opcoes": [
            "Expor o ofensor perante a congregação inteira no culto de domingo.",
            "Procurar o irmão a sós e tratar o problema em particular na medida do possível com mansidão.",
            "Contratar imediatamente um advogado na justiça secular.",
            "Proibir o ofensor de entrar nas dependências da igreja."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 7 da apostila: Jesus ensinou em Mt 18:15: 'Vai e repreende-o entre ti e ele só; se te ouvir, ganhaste a teu irmão'. O primeiro passo é sempre o diálogo particular e amoroso."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Eclesiologia: A Doutrina da Igreja, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Eclesiologia: A Doutrina da Igreja estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Eclesiologia: A Doutrina da Igreja, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Eclesiologia: A Doutrina da Igreja visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Eclesiologia: A Doutrina da Igreja, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Eclesiologia: A Doutrina da Igreja (ECL-308) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Eclesiologia: A Doutrina da Igreja no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Eclesiologia: A Doutrina da Igreja resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Eclesiologia: A Doutrina da Igreja, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Eclesiologia: A Doutrina da Igreja dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Eclesiologia: A Doutrina da Igreja?",
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
      "id": "eclesiologia_p2",
      "titulo": "Eclesiologia: A Doutrina da Igreja — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "ECL-308-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Eclesiologia: A Doutrina da Igreja, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Eclesiologia: A Doutrina da Igreja podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Eclesiologia: A Doutrina da Igreja, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Eclesiologia: A Doutrina da Igreja significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Eclesiologia: A Doutrina da Igreja sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Eclesiologia: A Doutrina da Igreja, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Eclesiologia: A Doutrina da Igreja autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Eclesiologia: A Doutrina da Igreja, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Eclesiologia: A Doutrina da Igreja dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Eclesiologia: A Doutrina da Igreja capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Eclesiologia: A Doutrina da Igreja. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Eclesiologia: A Doutrina da Igreja contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Eclesiologia: A Doutrina da Igreja do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Eclesiologia: A Doutrina da Igreja, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Eclesiologia: A Doutrina da Igreja, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Eclesiologia: A Doutrina da Igreja?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Eclesiologia: A Doutrina da Igreja orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Eclesiologia: A Doutrina da Igreja?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Eclesiologia: A Doutrina da Igreja, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "escatologia",
    "ordem": 22,
    "codigo": "ESC-309",
    "moduloId": 3,
    "modulo": "MÓDULO III: Teologia Sistemática Integral",
    "titulo": "Escatologia Bíblica: O Estudo das Últimas Coisas",
    "subtitulo": "Arrebatamento, Grande Tribulação, Milênio, Juízo Final e Novos Céus",
    "cargaHoraria": 50,
    "descricao": "Escatologia individual e cósmica, correntes milenares (pré, pós e amilenismo), sinais dos tempos, tribunal de Cristo, restauração de Israel e Nova Jerusalém.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "escatologia_p1",
      "titulo": "Escatologia Bíblica: O Estudo das Últimas Coisas — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "ESC-309-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "A Escatologia bíblica do SEBITAN adota o método de interpretação Literal e a doutrina Pré-Tribulacionista, ensinando que a Igreja de Cristo será arrebatada antes do início dos sete anos da Grande Tribulação (a 70ª semana de Daniel).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila demonstra que a Igreja será arrebatada para ser preservada da 'ira futura' (1 Ts 1:10; 5:9), enquanto a Grande Tribulação é a dispensação da angústia de Jacó destinada a Israel e aos ímpios."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "As Setenta Semanas da profecia de Daniel 9:24-27 referem-se a semanas de dias comuns (490 dias), tendo se encerrado historicamente antes da reconstrução dos muros por Neemias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A apostila comprova com base no Antigo Testamento que se tratam de semanas de anos (490 anos). As 69 semanas foram da ordem de reconstrução até a morte do Messias (483 anos), restando a 70ª semana (7 anos) futura."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "O Tribunal de Cristo (2 Co 5:10; 1 Co 3:11-15), que ocorrerá nos céus após o arrebatamento, tem por finalidade avaliar e recompensar as obras dos crentes através de galardões e coroas, e não julgar sua salvação eterna.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 10 da apostila: No Tribunal de Cristo os santos terão suas obras provadas pelo fogo, recebendo galardões pelas obras de ouro, prata e pedras preciosas feitas por amor a Deus."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "Na estátua de Nabucodonosor (Daniel 2) e na visão dos quatro animais de Daniel 7, os quatro grandes impérios mundiais dos gentios são: Babilônia (ouro/leão), Medo-Pérsia (prata/urso), Grécia (cobre/leopardo) e Roma (ferro/quarto animal terrível).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Páginas 25-27 da apostila: Os quatro impérios mundiais que se sucederam na história bíblica culminam no retorno de Cristo, a Pedra cortada sem mãos que encherá toda a terra."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "A Bíblia ensina que a Nova Jerusalém permanecerá para sempre no espaço cósmico distante, nunca descendo para a terra com os redimidos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Páginas 34-35 da apostila: Apocalipse 21:2-3 afirma que a Nova Jerusalém descerá do céu da parte de Deus para a Nova Terra: 'o tabernáculo de Deus está com os homens e Deus habitará com eles'."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Qual acontecimento histórico de cumprimento profético fundamental é comparado à figueira que brota (Mt 24:32), citado na apostila como o renascimento de Israel num só dia (Is 66:8)?",
          "opcoes": [
            "A queda da muralha de Berlim em 1989.",
            "O decreto da ONU e a proclamação do Estado de Israel em 14 de maio de 1948, permitindo o retorno dos judeus à sua pátria ancestral.",
            "A descoberta de petróleo no mar do Norte.",
            "A construção do canal do Panamá."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 5 da apostila: A figueira que brota simboliza a nação de Israel, cujo renascimento nacional em 14/05/1948 cumpriu Isaías 66:8 e aponta a proximidade do retorno do Messias."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Quem são as Duas Testemunhas proféticas que ministrarão em Jerusalém durante a primeira metade da Grande Tribulação conforme Apocalipse 11 e Malaquias 4:5?",
          "opcoes": [
            "Dois generais do exército romano de César.",
            "Profetas literais investidos com o poder e missão de Elias (e Moisés ou Enoque) que proclamarão o Evangelho do Reino com milagres de juízo.",
            "Uma metáfora que representa os satélites de telecomunicação.",
            "Dois reis dos tigres asiáticos do Oriente."
          ],
          "respostaCorreta": 1,
          "explicacao": "Páginas 19-20 da apostila: A Bíblia deixa claro que uma das testemunhas é o profeta Elias (Ml 4:5; Mt 17:11), acompanhado de Moisés ou Enoque, pregando literalmente o Reino de Deus."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "No desenrolar dos juízos do Apocalipse, qual é a diferença entre as Sete Trombetas (Ap 8-9) e as Sete Taças da Ira de Deus (Ap 16)?",
          "opcoes": [
            "As trombetas ferem apenas a cidade de Roma e as taças o Egito.",
            "Nas trombetas os juízos de Deus são parciais (atingindo a terça parte das águas, vegetação e astros); nas taças a ira de Deus derrama-se plenamente e de forma generalizada sobre o império da besta.",
            "As trombetas já aconteceram no reinado de Davi e as taças em Babilônia.",
            "Não há diferença, sendo ambas as séries parábolas morais idênticas."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 22 da apostila: 'No caso das sete trombetas, os males eram limitados afetando a terça parte; porém agora nas taças a ira de Deus toca diretamente no corpo dos homens que aceitaram a marca da besta'."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "O que acontecerá no clímax da Batalha do Armagedom (Megido) ao final dos sete anos da Grande Tribulação?",
          "opcoes": [
            "O anticristo vencerá as nações e governará perpetuamente.",
            "Todas as nações coligadas contra Israel serão derrotadas de modo sobrenatural pela gloriosa volta visível do Rei Jesus Cristo com os Seus exércitos celestiais (Ap 19:11-21; Zc 14).",
            "O mundo entrará em um acordo diplomático com os líderes religiosos de Babilônia.",
            "Os judeus migrarão permanentemente para a Europa."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 29 da apostila: Quando as nações cercarem Israel no Armagedom, Cristo voltará em glória, Seus pés tocarão o Monte das Oliveiras, Ele aniquilará a besta com o sopro de Sua boca e lançará o anticristo no lago de fogo."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é a doutrina bíblica do Milênio defendida com veemência na apostila do SEBITAN (Apocalipse 20)?",
          "opcoes": [
            "O Amilenismo, que nega qualquer reinado literal milenar de Cristo sobre a terra.",
            "O Pós-Milenismo, que afirma que a sociedade secular atingirá a perfeição antes da volta de Cristo.",
            "O Pré-Milenismo literal: Jesus Cristo retornará corporalmente e estabelecerá o Seu reinado visível de paz, justiça e prosperidade durante mil anos sobre a terra a partir de Jerusalém com a Sua Igreja.",
            "Uma alegoria sem relação com o cumprimento profético das alianças bíblicas."
          ],
          "respostaCorreta": 2,
          "explicacao": "Páginas 30-31 da apostila: O Pré-Milenismo literal ensina que Cristo reinará corporalmente sobre a terra por 1.000 anos a partir do trono de Davi em Jerusalém, cumprindo todas as alianças de paz e justiça prometidas a Israel e à Igreja."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Escatologia Bíblica: O Estudo das Últimas Coisas, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Escatologia Bíblica: O Estudo das Últimas Coisas estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Escatologia Bíblica: O Estudo das Últimas Coisas, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Escatologia Bíblica: O Estudo das Últimas Coisas visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Escatologia Bíblica: O Estudo das Últimas Coisas, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Escatologia Bíblica: O Estudo das Últimas Coisas (ESC-309) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Escatologia Bíblica: O Estudo das Últimas Coisas no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Escatologia Bíblica: O Estudo das Últimas Coisas resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Escatologia Bíblica: O Estudo das Últimas Coisas, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Escatologia Bíblica: O Estudo das Últimas Coisas dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Escatologia Bíblica: O Estudo das Últimas Coisas?",
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
      "id": "escatologia_p2",
      "titulo": "Escatologia Bíblica: O Estudo das Últimas Coisas — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "ESC-309-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Escatologia Bíblica: O Estudo das Últimas Coisas, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Escatologia Bíblica: O Estudo das Últimas Coisas podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Escatologia Bíblica: O Estudo das Últimas Coisas, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Escatologia Bíblica: O Estudo das Últimas Coisas significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Escatologia Bíblica: O Estudo das Últimas Coisas sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Escatologia Bíblica: O Estudo das Últimas Coisas, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Escatologia Bíblica: O Estudo das Últimas Coisas autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Escatologia Bíblica: O Estudo das Últimas Coisas, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Escatologia Bíblica: O Estudo das Últimas Coisas dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Escatologia Bíblica: O Estudo das Últimas Coisas capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Escatologia Bíblica: O Estudo das Últimas Coisas. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Escatologia Bíblica: O Estudo das Últimas Coisas contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Escatologia Bíblica: O Estudo das Últimas Coisas do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Escatologia Bíblica: O Estudo das Últimas Coisas, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Escatologia Bíblica: O Estudo das Últimas Coisas, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Escatologia Bíblica: O Estudo das Últimas Coisas?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Escatologia Bíblica: O Estudo das Últimas Coisas orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Escatologia Bíblica: O Estudo das Últimas Coisas?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Escatologia Bíblica: O Estudo das Últimas Coisas, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
