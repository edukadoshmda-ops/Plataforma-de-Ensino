// Banco de Provas Oficiais SEBITAN — MÓDULO 1
// 20 Questões por Prova (Prova 1: Teórica • Prova 2: Exegética & Prática)
// Total por disciplina: 40 Questões com gabarito e fundamentação teológica.

export const provasModulo1 = [
  {
    "id": "metodologia",
    "ordem": 1,
    "codigo": "MET-101",
    "moduloId": 1,
    "modulo": "MÓDULO I: Fundamentação Acadêmica & Ferramentas",
    "titulo": "Metodologia da Pesquisa Científica",
    "subtitulo": "Normas de estudo, produção acadêmica e fichamentos",
    "cargaHoraria": 50,
    "descricao": "Normas ABNT, tipos de conhecimento (empírico, filosófico, teológico, científico), técnicas de leitura crítica e elaboração de projetos.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "metodologia_p1",
      "titulo": "Metodologia da Pesquisa Científica — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "MET-101-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "O conhecimento empírico (ou vulgar) é aquele adquirido no cotidiano por meio de experiências práticas casuais e ações não planejadas, por tentativa e erro.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O texto conceitua o conhecimento empírico como o obtido ao acaso após inúmeras tentativas do dia a dia, sem metodologia científica prévia."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "O conhecimento teológico baseia-se na revelação pela fé ou crença religiosa e, por sua natureza e origem, não pode ser empiricamente refutado ou confirmado por testes de laboratório.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila aponta que o conhecimento teológico 'não pode, por sua origem, ser confirmado ou negado' por critérios experimentais da ciência formal, pois fundamenta-se na fé e convicção moral."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "Em um projeto de pesquisa acadêmica, a regra metodológica básica para a redação dos Objetivos é iniciá-los sempre com verbos conjugados no pretérito perfeito.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A apostila ensina expressamente: 'Um macete para se definir os Objetivos é colocá-los começando com o verbo no infinitivo: esclarecer tal coisa; definir tal assunto; demonstrar alguma coisa etc.'."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "A Hipótese de uma pesquisa consiste em uma pré-solução ou suposição afirmativa que busca responder preliminarmente ao Problema levantado, devendo ser confirmada ou negada ao longo da investigação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila define a Hipótese como uma afirmação categórica que serve de pré-solução para o problema levantado pelo pesquisador."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "A Justificativa do projeto tem por finalidade antecipar os resultados conclusivos da pesquisa e provar de antemão que a hipótese é irrefutável.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A apostila adverte expressamente: 'Deve-se tomar o cuidado, na elaboração da Justificativa, de não se tentar justificar a Hipótese levantada, ou seja, tentar responder ou concluir o que vai ser buscado... A Justificativa exalta a importância do tema a ser estudado'."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Segundo a evolução histórica da inteligência humana apresentada no material do SEBITAN, quais são os três níveis sucessivos vivenciados pela humanidade?",
          "opcoes": [
            "O medo, o misticismo e a ciência.",
            "A ignorância, a política e a tecnologia digital.",
            "O politeísmo, o monoteísmo e o ateísmo.",
            "O empirismo, a escolástica e o existencialismo."
          ],
          "respostaCorreta": 0,
          "explicacao": "O texto define três níveis de desenvolvimento da inteligência: o medo (reação primitiva diante dos fenômenos naturais), o misticismo (tentativa mágica de explicar o mundo) e a ciência (busca lógica e comprovável de respostas)."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Conforme a classificação do consagrado metodólogo Antonio Carlos Gil, as pesquisas classificadas com base em seus objetivos agrupam-se em:",
          "opcoes": [
            "Monográficas, dissertativas e teses doutorais.",
            "Pesquisas exploratórias, pesquisas descritivas e pesquisas explicativas.",
            "Pesquisas de campo, laboratoriais e teóricas puras.",
            "Pesquisas históricas, arqueológicas e exegéticas."
          ],
          "respostaCorreta": 1,
          "explicacao": "Antonio Carlos Gil (2001) divide as pesquisas com base nos objetivos em três grandes grupos: exploratórias, descritivas e explicativas."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "No processo de coleta de dados e análise documental, qual é a distinção correta entre fontes primárias e fontes secundárias?",
          "opcoes": [
            "Fontes primárias são livros de autores renomados; fontes secundárias são artigos de jornais.",
            "Fontes primárias são documentos originais que gerarão análises (cartas, decretos, dados brutos); fontes secundárias são obras onde as informações já foram elaboradas e interpretadas (livros, teses, monografias).",
            "Fontes primárias são achados arqueológicos do Oriente; fontes secundárias são sites da internet.",
            "Fontes primárias são dados estatísticos quantitativos; fontes secundárias são entrevistas qualitativas."
          ],
          "respostaCorreta": 1,
          "explicacao": "A apostila esclarece: 'Fontes primárias são os documentos que gerarão análises para posterior criação de informações (decretos oficiais, fotos, cartas). Fontes secundárias são as obras nas quais as informações já foram elaboradas (livros, apostilas, monografias)'."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é a característica essencial da 'Ficha de Citações' na técnica de fichamento para trabalhos acadêmicos?",
          "opcoes": [
            "Apresentar uma síntese livre das ideias do autor escrita com as próprias palavras do estudante.",
            "A reprodução fiel e exata das frases que se pretende usar entre aspas na redação do trabalho, acompanhada de sua indicação bibliográfica e página.",
            "Uma relação detalhada apenas das instituições e bibliotecas visitadas.",
            "Um resumo biográfico da vida do autor da obra pesquisada."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 17 da apostila: 'Ficha de Citações: é a reprodução fiel das frases que se pretende usar como citação na redação do trabalho', preservando a literalidade e a página da fonte."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Na estrutura de um trabalho científico segundo os preceitos metodológicos e normas técnicas vigentes, qual dos seguintes elementos é de inclusão estritamente opcional?",
          "opcoes": [
            "Folha de rosto.",
            "Sumário.",
            "Referências bibliográficas.",
            "Glossário e Anexos."
          ],
          "respostaCorreta": 3,
          "explicacao": "Conforme a tabela estrutural da apostila: Capa, folha de rosto, sumário e referências são obrigatórios. Glossário, anexos e apêndices são elementos opcionais, incluídos conforme a necessidade do pesquisador."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Metodologia da Pesquisa Científica, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Metodologia da Pesquisa Científica estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Metodologia da Pesquisa Científica, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Metodologia da Pesquisa Científica visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Metodologia da Pesquisa Científica, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Metodologia da Pesquisa Científica (MET-101) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Metodologia da Pesquisa Científica no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Metodologia da Pesquisa Científica resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Metodologia da Pesquisa Científica, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Metodologia da Pesquisa Científica dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Metodologia da Pesquisa Científica?",
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
      "id": "metodologia_p2",
      "titulo": "Metodologia da Pesquisa Científica — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "MET-101-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Metodologia da Pesquisa Científica, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Metodologia da Pesquisa Científica podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Metodologia da Pesquisa Científica, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Metodologia da Pesquisa Científica significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Metodologia da Pesquisa Científica sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Metodologia da Pesquisa Científica, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Metodologia da Pesquisa Científica autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Metodologia da Pesquisa Científica, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Metodologia da Pesquisa Científica dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Metodologia da Pesquisa Científica capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Metodologia da Pesquisa Científica. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Metodologia da Pesquisa Científica contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Metodologia da Pesquisa Científica do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Metodologia da Pesquisa Científica, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Metodologia da Pesquisa Científica, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Metodologia da Pesquisa Científica?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Metodologia da Pesquisa Científica orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Metodologia da Pesquisa Científica?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Metodologia da Pesquisa Científica, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "portugues",
    "ordem": 2,
    "codigo": "POR-102",
    "moduloId": 1,
    "modulo": "MÓDULO I: Fundamentação Acadêmica & Ferramentas",
    "titulo": "Português Instrumental para Pregadores",
    "subtitulo": "Linguística aplicada, dicção e vocabulário no púlpito",
    "cargaHoraria": 50,
    "descricao": "Dicção, respiração diafragmática, correção de vícios de linguagem comuns no púlpito, clareza retórica e análise sintática.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "portugues_p1",
      "titulo": "Português Instrumental para Pregadores — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "POR-102-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "A frase dita no púlpito 'Vamos cantarmos o hino da harpa' está correta na norma culta, pois em locuções verbais tanto o verbo auxiliar quanto o verbo principal devem concordar no plural.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A apostila aponta expressamente: 'Errada: vamos cantarmos... Certa: vamos cantar... Nota: na combinação do verbo auxiliar com o principal só varia o auxiliar'."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "O termo 'membro', quando aplicado a homens ou mulheres na congregação da igreja, é gramaticalmente invariável: deve-se dizer 'A irmã Maria é membro desta igreja'.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila adverte que a forma 'membra' é equivocada; a forma correta e culta é 'a irmã Maria é membro desta igreja'."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "A expressão 'ao invés de' possui o mesmo significado de 'em vez de', podendo ambas serem utilizadas indistintamente em qualquer contexto.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A apostila ensina com rigor: 'Nota: ao invés de é o mesmo que ao contrário; em vez de é o mesmo que em lugar de'."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "O substantivo 'dó' (no sentido de sentimento de piedade e compaixão) é uma palavra masculina na língua portuguesa, sendo correto dizer 'tenho muito dó' e errôneo 'muita dó'.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila orienta: 'Evite dizer: Tenho muita dó; dó é palavra masculina, portanto deve-se dizer tenho muito dó'."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "Na comunicação oral eficaz ensinada aos obreiros, os quatro elementos fundamentais são: o transmissor (quem diz), o código (como se diz), a mensagem (o que se diz) e o receptor (quem ouve).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila define com exatidão esses quatro componentes basilares de qualquer processo comunicativo."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Ao saudar a congregação ou abrir a pregação cristã, qual é a pronúncia e grafia correta indicada pela apostila para evitar o erro vulgar 'saldo'?",
          "opcoes": [
            "\"Eu saldo os irmãos com a paz do Senhor.\"",
            "\"Eu saúdo os irmãos com a paz do Senhor.\"",
            "\"Eu comprimento os irmãos com a paz do Senhor.\"",
            "\"Eu saudo sem acento os irmãos com a paz do Senhor.\""
          ],
          "respostaCorreta": 1,
          "explicacao": "A apostila destaca: 'Errada: eu saldo... Certa: eu saúdo os irmãos com a paz do Senhor. Nota: saldo significa resto, sobra, conta comercial'."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Assinale a alternativa que apresenta o parônimo correto com seu exato significado segundo o vocabulário da apostila:",
          "opcoes": [
            "Ratificar significa corrigir erros; Retificar significa confirmar um documento.",
            "Ratificar significa confirmar/reafirmar; Retificar significa corrigir/emendar.",
            "Conserto com 's' refere-se à apresentação musical; Concerto com 'c' refere-se ao reparo.",
            "Desapercebido significa invisível que não se viu; Despercebido significa descuidado."
          ],
          "respostaCorreta": 1,
          "explicacao": "Na lista de homônimos e parônimos da apostila: Ratificar = confirmar, reafirmar; Retificar = corrigir, emendar."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "No vocabulário de palavras difíceis da Bíblia da Tradução Revista e Corrigida (ARC), o que significa a palavra 'GAVELA' encontrada em Rute 2:7,15?",
          "opcoes": [
            "Uma rede de pescaria usada pelos apóstolos.",
            "Um vaso de alabastro para azeite perfumado.",
            "Um feixe de espigas colhidas pelos segadores no campo de cultivo.",
            "Uma couraça protetora feita de bronze."
          ],
          "respostaCorreta": 2,
          "explicacao": "Página 7 da apostila: 'Gavela (feixe) - Rute 2.7; 2.15; Jeremias 9.22'. Deixar espigas entre as gavelas era permitir que os necessitados colhessem o sustento."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Na crônica literária 'Um Sonho Insolente' (baseada em Gênesis 11:4 - Torre de Babel), qual é a lição central sobre o perfil dos verdadeiros servos de Deus?",
          "opcoes": [
            "Que os grandes homens devem sempre buscar fama, notoriedade pública e manchetes de jornais.",
            "Que Nimrode foi um líder digno de louvor por sua capacidade de unificar os povos pela ambição pessoal.",
            "Que a busca por renome e autoexaltação é fruto da vaidade humana; as grandes almas preferem o anonimato e ficar à sombra para que Deus apareça.",
            "Que a edificação de torres altas na antiguidade agradava plenamente ao Criador."
          ],
          "respostaCorreta": 2,
          "explicacao": "O texto conclui: 'As grandes almas que já passaram pela terra desejaram, sempre, ficar à sombra, deixando Deus aparecer em primeiro plano... Convém que Ele cresça e que eu diminua'."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Qual figura de linguagem está empregada na expressão 'o teatro da vida' citada na interpretação da crônica da apostila?",
          "opcoes": [
            "Metáfora (comparação implícita entre o palco cênico e a existência humana).",
            "Pleonasmo vicioso redundante.",
            "Hipérbole descabida.",
            "Eufemismo atenuador."
          ],
          "respostaCorreta": 0,
          "explicacao": "A expressão 'teatro da vida' é uma metáfora que atribui as características do palco e dos bastidores teatrais às escolhas e atuações dos seres humanos no mundo."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Português Instrumental para Pregadores, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Português Instrumental para Pregadores estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Português Instrumental para Pregadores, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Português Instrumental para Pregadores visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Português Instrumental para Pregadores, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Português Instrumental para Pregadores (POR-102) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Português Instrumental para Pregadores no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Português Instrumental para Pregadores resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Português Instrumental para Pregadores, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Português Instrumental para Pregadores dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Português Instrumental para Pregadores?",
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
      "id": "portugues_p2",
      "titulo": "Português Instrumental para Pregadores — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "POR-102-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Português Instrumental para Pregadores, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Português Instrumental para Pregadores podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Português Instrumental para Pregadores, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Português Instrumental para Pregadores significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Português Instrumental para Pregadores sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Português Instrumental para Pregadores, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Português Instrumental para Pregadores autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Português Instrumental para Pregadores, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Português Instrumental para Pregadores dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Português Instrumental para Pregadores capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Português Instrumental para Pregadores. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Português Instrumental para Pregadores contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Português Instrumental para Pregadores do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Português Instrumental para Pregadores, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Português Instrumental para Pregadores, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Português Instrumental para Pregadores?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Português Instrumental para Pregadores orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Português Instrumental para Pregadores?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Português Instrumental para Pregadores, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "bibliologia",
    "ordem": 3,
    "codigo": "BIB-103",
    "moduloId": 1,
    "modulo": "MÓDULO I: Fundamentação Acadêmica & Ferramentas",
    "titulo": "Bibliologia: A Doutrina das Escrituras",
    "subtitulo": "Inspiração divina, canonicidade e autoridade bíblica",
    "cargaHoraria": 50,
    "descricao": "A revelação divina, inspiração verbal e plenária, inerrância bíblica, formação do cânon judaico e cristão, e a preservação dos textos.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "bibliologia_p1",
      "titulo": "Bibliologia: A Doutrina das Escrituras — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "BIB-103-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "A Bibliologia é a ciência teológica integrante da Teologia Sistemática dedicada ao estudo analítico e aprofundado das Sagradas Escrituras quanto à sua origem, inspiração divina, autoridade, canonicidade e preservação textual.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila define a Bibliologia como a disciplina que se preocupa em estudar os pontos fundamentais acerca da Bíblia e ensinar como usá-la corretamente."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "A teoria correta da inspiração bíblica é a Teoria da Inspiração Plenária ou Verbal, a qual ensina que todas as partes da Bíblia são inspiradas por Deus, preservando a cooperação vital e o estilo pessoal dos escritores humanos.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 6 da apostila: 'A Teoria correta é a Teoria da Inspiração Plenária ou Verbal. Ela ensina que todas as partes da Bíblia são igualmente inspiradas... houve cooperação vital e contínua entre os escritores e o Espírito de Deus'."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "O termo 'Cânon' deriva do grego significando 'vara reta de medir' e, no âmbito religioso, designa a coleção dos livros divinamente inspirados reconhecidos como a única regra e norma de fé e prática.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila explica que 'Cânon significa literalmente vara de medir; no sentido religioso, é a norma, regra de fé e prática dada por Deus'."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "O cânon hebraico do Antigo Testamento agrupava os livros sagrados em 24 rolos (divididos em Lei, Profetas e Escritos), cujo conteúdo corresponde com exatidão aos 39 livros do nosso Antigo Testamento.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O cânon hebraico conta 24 livros porque combina livros duplos (Samuel, Reis, Crônicas, Esdras-Neemias e os 12 Profetas Menores em rolos únicos)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "A Igreja Católica Romana sempre possuiu exatamente o mesmo número de livros do cânon protestante, nunca tendo incluído acréscimos apócrifos no Antigo Testamento.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A Igreja Romana aprovou oficialmente 7 livros apócrifos e 4 acréscimos somente em 18 de abril de 1546 no Concílio de Trento, em resposta à Reforma Protestante (pág. 8)."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Como a apostila de Bibliologia do SEBITAN diferencia 'Inspiração Divina' de 'Revelação Divina'?",
          "opcoes": [
            "Inspiração é a oração pessoal do crente; Revelação é a dedução científica em laboratório.",
            "Revelação é o ato pelo qual Deus desvenda verdades desconhecidas que o homem jamais saberia por si só; Inspiração é a influência do Espírito Santo capacitando o escritor a transmitir a mensagem sem mistura de erro.",
            "Inspiração é exclusiva de Salomão; Revelação é exclusiva do livro de Apocalipse.",
            "Não há qualquer diferença, tratando-se de palavras sinônimas e intercambiáveis."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 6 da apostila: 'Inspiração Divina é a influência sobrenatural do Espírito Santo capacitando os escritores a transmitir a mensagem sem erro; Revelação Divina é a ação pela qual Deus dá a conhecer coisas que o homem não podia saber'."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "Em qual importante concílio histórico da Igreja Primitiva foi oficialmente fixado e reconhecido o Cânon dos 27 livros do Novo Testamento?",
          "opcoes": [
            "No Concílio de Nicéia em 325 d.C.",
            "No III Concílio de Cartago no ano 397 d.C.",
            "No Concílio de Trento em 1546 d.C.",
            "No Concílio de Jâmnia em 90 d.C."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 8 da apostila: 'Reconhecimento e fixação do Cânon do N.T. ocorreu no III Concílio de Cartago, no ano 397 d.C.'."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "No cânon judaico, quais são os chamados 'Cinco Rolos' (Meguiloth) que eram lidos solenemente nas festas anuais de Israel?",
          "opcoes": [
            "Gênesis, Êxodo, Levítico, Números e Deuteronômio.",
            "Cantares de Salomão (na Páscoa), Rute (no Pentecostes), Eclesiastes (nos Tabernáculos), Lamentações (relembrando a destruição de Jerusalém) e Ester (no Purim).",
            "Isaías, Jeremias, Ezequiel, Daniel e Oséias.",
            "Mateus, Marcos, Lucas, João e Atos dos Apóstolos."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 7 da apostila: Os Cinco Rolos eram separados para leitura anual em festas distintas: Cantares (Páscoa), Rute (Pentecostes), Eclesiastes (Tabernáculos), Lamentações (Abibe/Templo) e Ester (Purim)."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Quais foram as línguas originais utilizadas pelo Espírito Santo para a redação dos 66 livros da Bíblia Sagrada?",
          "opcoes": [
            "O latim clássico para o Antigo Testamento e o hebraico moderno para o Novo Testamento.",
            "O hebraico e pequenas porções em aramaico para o Antigo Testamento, e o grego koiné para o Novo Testamento.",
            "Exclusivamente o grego clássico ateniense para toda a Bíblia.",
            "O árabe pré-islâmico e o copta egípcio."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 9 da apostila: 'As línguas originais da Bíblia são o hebraico e o aramaico para o A.T., e o grego para o N.T.'."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o erro central da Teoria do 'Ditado Verbal' (apontada pela apostila do SEBITAN como uma falsa teoria da inspiração)?",
          "opcoes": [
            "Afirmar que os escritores bíblicos eram homens sem instrução alguma.",
            "Ensinar a inspiração apenas quanto às palavras mecânicas, não deixando lugar para a atividade pensante, estilo e personalidade do escritor humano.",
            "Dizer que a Bíblia contém erros e mitos científicos da Idade Média.",
            "Acreditar que apenas o Pentateuco possui autoridade normativa."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 6 da apostila: 'A Teoria do Ditado Verbal ensina a inspiração da Bíblia só quanto às palavras, não deixando lugar para a atividade e estilo do escritor'. A Bíblia preservou os estilos e personalidades dos profetas."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Bibliologia: A Doutrina das Escrituras, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Bibliologia: A Doutrina das Escrituras estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Bibliologia: A Doutrina das Escrituras, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Bibliologia: A Doutrina das Escrituras visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Bibliologia: A Doutrina das Escrituras, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Bibliologia: A Doutrina das Escrituras (BIB-103) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Bibliologia: A Doutrina das Escrituras no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Bibliologia: A Doutrina das Escrituras resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Bibliologia: A Doutrina das Escrituras, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Bibliologia: A Doutrina das Escrituras dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Bibliologia: A Doutrina das Escrituras?",
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
      "id": "bibliologia_p2",
      "titulo": "Bibliologia: A Doutrina das Escrituras — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "BIB-103-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Bibliologia: A Doutrina das Escrituras, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Bibliologia: A Doutrina das Escrituras podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Bibliologia: A Doutrina das Escrituras, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Bibliologia: A Doutrina das Escrituras significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Bibliologia: A Doutrina das Escrituras sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Bibliologia: A Doutrina das Escrituras, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Bibliologia: A Doutrina das Escrituras autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Bibliologia: A Doutrina das Escrituras, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Bibliologia: A Doutrina das Escrituras dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Bibliologia: A Doutrina das Escrituras capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Bibliologia: A Doutrina das Escrituras. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Bibliologia: A Doutrina das Escrituras contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Bibliologia: A Doutrina das Escrituras do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Bibliologia: A Doutrina das Escrituras, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Bibliologia: A Doutrina das Escrituras, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Bibliologia: A Doutrina das Escrituras?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Bibliologia: A Doutrina das Escrituras orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Bibliologia: A Doutrina das Escrituras?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Bibliologia: A Doutrina das Escrituras, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "manuscritos",
    "ordem": 4,
    "codigo": "BIB-104",
    "moduloId": 1,
    "modulo": "MÓDULO I: Fundamentação Acadêmica & Ferramentas",
    "titulo": "Manuscritos do A.T. & Crítica Textual",
    "subtitulo": "Texto massorético, Septuaginta e Rolos do Mar Morto",
    "cargaHoraria": 50,
    "descricao": "Texto massorético, Septuaginta (LXX), códices unciais, manuscritos de Qumran, variantes textuais e a fidelidade da transmissão manuscrita.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "manuscritos_p1",
      "titulo": "Manuscritos do A.T. & Crítica Textual — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "BIB-104-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "Os manuscritos bíblicos do Antigo Testamento chegaram até nós escritos em dois materiais principais: papiro (de origem vegetal e perecível) e pergaminho (feito de peles preparadas de animais como ovelhas, cabras e antílopes).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila do SEBITAN ensina que os manuscritos eram copiados à mão em papiro e pergaminho (unciais e minúsculos cursivos)."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "Os massoretas (700 a 1000 d.C.) foram escribas judeus eruditos que acrescentaram os sinais vocálicos (acríticos) ao texto consonantal hebraico e, após prepararem os textos oficiais com extrema fidelidade, queimavam os manuscritos antigos desgastados.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Página 3 da apostila: Os massoretas criaram as vogais no hebraico, o sistema do 'escrito e o lido' (Kethiv/Qere) e queimavam os manuscritos antigos para evitar profanação ou erros."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "O texto dos Targuns é uma tradução formal e estritamente literal do hebraico para a língua latina, encomendada pelo imperador Júlio César.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Os Targuns (100 a.C.) são traduções e paráfrases do texto hebraico para o aramaico, servindo como comentários explicativos para o povo judaico pós-exílio."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "O Códice Efrém (450 d.C.) é classificado como um palimpsesto porque o texto bíblico original havia sido apagado e raspado para que outro documento fosse escrito por cima, tendo sido modernamente recuperado com raios-X.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila explica que cerca de 60% do Novo Testamento contido no Códice de Efrém foi reconstituído através de raios-X sobre as páginas raspadas."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "A divisão de toda a Bíblia no atual sistema padrão de capítulos foi elaborada por volta de 1227 d.C. por Estêvão Langton, professor da Universidade de Paris e arcebispo de Cantuária.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila destaca Estêvão Langton (cerca de 1227 AD) como o autor do sistema moderno de divisão em capítulos adotado em todas as Bíblias."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Na história dos materiais de escrita, o que era o 'Óstrafo' (ou óstraco), encontrado em abundância nas escavações arqueológicas do Egito e da Palestina?",
          "opcoes": [
            "Uma folha de ouro batido utilizada exclusivamente pelos sumos sacerdotes.",
            "Um fragmento de cerâmica esmaltada ou caco de louça bastante usado pelo povo comum para anotações e mensagens cotidianas.",
            "Um tipo de junco aquático colhido nas profundezas do rio Jordão.",
            "Uma placa de madeira encerada gravada com estilete triangular."
          ],
          "respostaCorreta": 1,
          "explicacao": "A apostila ensina: 'Óstraco: fragmento de cerâmica esmaltada, bastante usado entre o povo em geral, encontrado em abundância no Egito e Palestina'."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "De acordo com a apostila SEBITAN, qual é a origem histórica do termo 'Pergaminho'?",
          "opcoes": [
            "Vem do porto sírio de Biblos onde se despachavam juncos aquáticos.",
            "Origina-se da cidade de Pérgamo, na Ásia Menor, cuja produção e beneficiamento de peles de animais esteve associada à localidade.",
            "Vem do nome do primeiro escriba copista babilônico chamado Pergamus.",
            "Deriva da palavra grega para tinta indelével feita de carvão e cola."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 7 da apostila: 'A palavra pergaminho tem origem no nome da cidade de Pérgamo, na Ásia Menor, pois a produção desse material para escrita esteve, numa certa época, especialmente associada ao local'."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Como se denomina tecnicamente um rolo de papiro antigo que recebia escrita em ambas as faces (frente e verso), conforme mencionado no livro de Apocalipse 5:1?",
          "opcoes": [
            "Palimpsesto.",
            "Opistógrafo (ou opstograto).",
            "Códice uncial.",
            "Pentateuco samaritano."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 8 da apostila: 'Geralmente se escrevia só de um lado. Um rolo escrito dos dois lados tem o nome de opstograto (opistógrafo) - Ap 5:1'."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Qual tradução das Escrituras Sagradas foi a primeira a incorporar harmoniosamente tanto a divisão de capítulos quanto a divisão padronizada de versículos em toda a Bíblia?",
          "opcoes": [
            "A Septuaginta Grega (LXX).",
            "O Pentateuco Samaritano.",
            "A Vulgata Latina.",
            "O Texto Massorético de Alepo."
          ],
          "respostaCorreta": 2,
          "explicacao": "A apostila conclui na página 12: 'A Vulgata Latina foi a primeira Bíblia a incorporar tanto a divisão de versículos como a de capítulos, tanto no Antigo como no Novo Testamento'."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é a distinção cronológica e formal entre a escrita Uncial e a escrita Minúscula (Cursiva Carolina) nos manuscritos gregos?",
          "opcoes": [
            "Unciais eram letras maiúsculas desenhadas cuidadosamente (séculos IV a VIII d.C.); minúsculas surgiram a partir do século IX d.C. com letras menores e encadeadas para produção mais rápida de livros.",
            "Unciais eram gravadas apenas em pedras e minúsculas eram traçadas em tabletes de argila fresca.",
            "Unciais pertenciam aos séculos medievais do século XV e minúsculas à era patriarcal de Moisés.",
            "Não há diferença formal, tratando-se apenas de dialetos regionais de Alexandria e Bizâncio."
          ],
          "respostaCorreta": 0,
          "explicacao": "A apostila define: Unciais com letras maiúsculas do 4º ao 8º século d.C. (Códice Sinático e Vaticano); Minúsculas ou Cursivas Carolina do 9º ao 15º século d.C."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Manuscritos do A.T. & Crítica Textual, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Manuscritos do A.T. & Crítica Textual estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Manuscritos do A.T. & Crítica Textual, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Manuscritos do A.T. & Crítica Textual visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Manuscritos do A.T. & Crítica Textual, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Manuscritos do A.T. & Crítica Textual (BIB-104) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Manuscritos do A.T. & Crítica Textual no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Manuscritos do A.T. & Crítica Textual resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Manuscritos do A.T. & Crítica Textual, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Manuscritos do A.T. & Crítica Textual dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Manuscritos do A.T. & Crítica Textual?",
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
      "id": "manuscritos_p2",
      "titulo": "Manuscritos do A.T. & Crítica Textual — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "BIB-104-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Manuscritos do A.T. & Crítica Textual, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Manuscritos do A.T. & Crítica Textual podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Manuscritos do A.T. & Crítica Textual, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Manuscritos do A.T. & Crítica Textual significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Manuscritos do A.T. & Crítica Textual sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Manuscritos do A.T. & Crítica Textual, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Manuscritos do A.T. & Crítica Textual autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Manuscritos do A.T. & Crítica Textual, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Manuscritos do A.T. & Crítica Textual dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Manuscritos do A.T. & Crítica Textual capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Manuscritos do A.T. & Crítica Textual. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Manuscritos do A.T. & Crítica Textual contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Manuscritos do A.T. & Crítica Textual do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Manuscritos do A.T. & Crítica Textual, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Manuscritos do A.T. & Crítica Textual, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Manuscritos do A.T. & Crítica Textual?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Manuscritos do A.T. & Crítica Textual orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Manuscritos do A.T. & Crítica Textual?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Manuscritos do A.T. & Crítica Textual, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
    "id": "hermeneutica",
    "ordem": 5,
    "codigo": "HER-105",
    "moduloId": 1,
    "modulo": "MÓDULO I: Fundamentação Acadêmica & Ferramentas",
    "titulo": "Hermenêutica Sagrada",
    "subtitulo": "A ciência e arte da correta interpretação bíblica",
    "cargaHoraria": 50,
    "descricao": "Regras de ouro de interpretação, contexto histórico e gramatical, figuras de retórica bíblica, história da exegese e perigos do alegorismo.",
    "duracaoMinutos": 60,
    "prova1": {
      "id": "hermeneutica_p1",
      "titulo": "Hermenêutica Sagrada — Prova 1 (Teórica & Conceitual)",
      "tipo": "p1",
      "codigo": "HER-105-P1",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "Enquanto a Hermenêutica é a ciência e a arte que formula os princípios e regras de interpretação das Escrituras, a Exegese é a aplicação prática dessas regras para determinar o sentido original do texto bíblico.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila define: Hermenêutica é a ciência e arte de interpretar; Exegese é a aplicação dos princípios e regras estabelecidos pela Hermenêutica para extrair o exato sentido do texto."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "Na hermenêutica bíblica ortodoxa, afirma-se que um texto bíblico possui tantos significados válidos quantos forem os sentimentos e opiniões individuais de cada leitor contemporâneo.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A apostila enfatiza expressamente como regra certa: 'Um texto tem apenas um significado, aquele pretendido pelo autor original/Deus', embora suas aplicações práticas na vida possam ser variadas."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "A tradição judaica considera o sacerdote e escriba Esdras (Ne 8:8) como o primeiro exegeta formal documentado, ao ler a Lei em hebraico e explicá-la claramente em aramaico ao povo no pós-exílio.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila cita Neemias 8:8 e afirma que Esdras iniciou formalmente a prática exegética, traduzindo e interpretando o texto sagrado para a língua acessível ao povo."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "A célebre Escola Catequética de Alexandria, representada por Clemente e Orígenes, caracterizou-se pelo método literal e histórico-gramatical, rechaçando totalmente o uso de alegorias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Alexandria foi o berço do método alegórico cristão. Foi a Escola de Antioquia da Síria (Doroteu e Luciano) que combateu a alegorização excessiva e defendeu o método histórico-gramatical."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "O conceito de 'Sensus Plenior' refere-se ao significado mais profundo intencionado por Deus em uma passagem do Antigo Testamento, que se evidencia quando o texto é citado e iluminado no Novo Testamento.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A apostila define Sensus Plenior como o sentido mais amplo e profundo planejado por Deus, reconhecido especialmente pelas citações e cumprimentos tipológicos do Novo Testamento."
        },
        {
          "id": 6,
          "tipo": "multipla_escolha",
          "enunciado": "Quando as Escrituras atribuem a Deus membros do corpo humano (olhos, mãos, braço forte) ou faculdades humanas para tornar compreensíveis Suas ações aos homens, estamos diante de qual figura?",
          "opcoes": [
            "Sinédoque de espécie.",
            "Metonímia de causa pelo efeito.",
            "Antropomorfismo.",
            "Clímax ascendente."
          ],
          "respostaCorreta": 2,
          "explicacao": "Antropomorfismo é a linguagem figurada que atribui a Deus membros, órgãos corporais ou ações humanas a fim de comunicar verdades espirituais ao entendimento humano."
        },
        {
          "id": 7,
          "tipo": "multipla_escolha",
          "enunciado": "No estudo das verdades bíblicas, como a hermenêutica diferencia uma 'Verdade Prescritiva' de uma 'Verdade Descritiva'?",
          "opcoes": [
            "Prescritiva é uma narrativa poética; Descritiva é uma profecia do fim dos tempos.",
            "Prescritiva expressa um mandamento normativo e permanente para a fé e prática; Descritiva relata costumes ou acontecimentos históricos da época sem caráter mandamental eterno.",
            "Prescritiva aplica-se somente ao Antigo Testamento e Descritiva somente às epístolas paulinas.",
            "Não há qualquer distinção teológica entre elas segundo os reformadores."
          ],
          "respostaCorreta": 1,
          "explicacao": "Página 22 da apostila: Verdade Prescritiva é aquela que nos diz o que devemos fazer (norma de vida explícita e contínua); Verdade Descritiva são relatos de costumes da época que não constituem normas perpétuas (ex: uso de véu cultural, costumes de saudação antiga)."
        },
        {
          "id": 8,
          "tipo": "multipla_escolha",
          "enunciado": "Na simbologia bíblica dos números apresentada na apostila de Hermenêutica Sagrada, o que representam teologicamente os números SETE (7) e DOZE (12)?",
          "opcoes": [
            "Sete representa limitação humana e Doze representa juízo destrutivo.",
            "Sete simboliza fraqueza e Doze representa apostasia das nações.",
            "Sete simboliza plenitude, perfeição e repouso; Doze simboliza o governo soberano de Deus manifesto no mundo.",
            "Sete e Doze são apenas marcadores cronológicos sem qualquer significado espiritual."
          ],
          "respostaCorreta": 2,
          "explicacao": "Na classificação dos símbolos numéricos: Sete = plenitude, perfeição, repouso; Doze = o governo de Deus manifesto no mundo (4 vezes 3)."
        },
        {
          "id": 9,
          "tipo": "multipla_escolha",
          "enunciado": "Qual princípio hermenêutico fundamental Martinho Lutero resgatou na Reforma Protestante para combater o alegorismo medieval e direcionar a compreensão bíblica?",
          "opcoes": [
            "A leitura mística baseada na Cabala judaica espanhola.",
            "A centralidade cristológica e a distinção clara entre Lei (que condena o pecado) e Evangelho (que concede a graça em Cristo).",
            "A total rejeição de qualquer estudo das línguas hebraica e grega.",
            "A adoção exclusiva dos cinco sentidos alegóricos propostos por Clemente de Alexandria."
          ],
          "respostaCorreta": 1,
          "explicacao": "Lutero rompeu com o método alegórico valendo-se do método cristológico e da distinção basilar entre a Lei (que aponta a miséria do pecador) e o Evangelho (que salva pela graça mediante a fé no sangue de Cristo)."
        },
        {
          "id": 10,
          "tipo": "multipla_escolha",
          "enunciado": "Quanto à inspiração e inerrância da Bíblia, qual síntese reflete o ensino bíblico-teológico equilibrado apresentado no módulo do SEBITAN?",
          "opcoes": [
            "A Bíblia foi transmitida por ditado mecânico, suprimindo o vocabulário e a personalidade dos escritores humanos.",
            "A Bíblia é um livro puramente humano e racional, sem revelação divina sobrenatural.",
            "A mensagem salvífica da Bíblia é divina, perfeita e santa, transmitida por meio de instrumentos humanos cuja personalidade, vocabulário e estilo histórico foram preservados pelo Espírito Santo.",
            "Apenas as seções poéticas são inspiradas, enquanto os livros históricos contêm fraudes."
          ],
          "respostaCorreta": 2,
          "explicacao": "A apostila ensina que a Bíblia tem dupla natureza (divina e humana): sua mensagem moral e salvífica é perfeita e santa, comunicada pelo Espírito Santo através da linguagem e estilo particulares de homens reais."
        },
        {
          "id": 11,
          "tipo": "certo_errado",
          "enunciado": "No âmbito de Hermenêutica Sagrada, a hermenêutica canônica e a fidelidade ao texto bíblico exigem que os postulados doutrinários sejam interpretados em harmonia com toda a revelação das Escrituras.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O princípio fundamental ensinado no SEBITAN em Hermenêutica Sagrada estabelece que a Escritura interpreta a própria Escritura (regra áurea analógica)."
        },
        {
          "id": 12,
          "tipo": "certo_errado",
          "enunciado": "Em Hermenêutica Sagrada, afirma-se que o contexto histórico-cultural e os idiomas originais são secundários ou dispensáveis para a compreensão exata dos textos teológicos.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Conforme a apostila do SEBITAN, a análise contextual, linguística e histórica é indispensável para evitar anacronismos e falsas interpretações."
        },
        {
          "id": 13,
          "tipo": "certo_errado",
          "enunciado": "O estudo aprofundado de Hermenêutica Sagrada visa não apenas o acúmulo de erudição intelectual, mas primordialmente a santificação pessoal, a edificação da Igreja e a glória de Deus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A teologia bíblica do SEBITAN é viva e prática: a doutrina ortodoxa conduz inevitavelmente à ortopraxia (prática correta) e piedade."
        },
        {
          "id": 14,
          "tipo": "certo_errado",
          "enunciado": "Segundo o compêndio do SEBITAN em Hermenêutica Sagrada, o estudante deve priorizar experiências subjetivas ou revelações extrabíblicas em detrimento da autoridade final da Palavra de Deus.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! As Escrituras Sagradas são a única regra infalível de fé e conduta. Nenhuma experiência pessoal pode se sobrepor ao texto canônico."
        },
        {
          "id": 15,
          "tipo": "certo_errado",
          "enunciado": "A disciplina de Hermenêutica Sagrada (HER-105) cumpre um papel integrador na formação do ministro, conectando as bases exegéticas com a proclamação fiel no ministério pastoral contemporâneo.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A grade curricular do SEBITAN foi estruturada para que cada disciplina forneça subsídios práticos e espirituais ao ministério cristão."
        },
        {
          "id": 16,
          "tipo": "multipla_escolha",
          "enunciado": "Qual é o principal objetivo acadêmico e espiritual ao estudar a disciplina de Hermenêutica Sagrada no currículo do SEBITAN?",
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
          "enunciado": "Diante de correntes heréticas contemporâneas, de que forma o conteúdo ministrado em Hermenêutica Sagrada resguarda a saúde da igreja?",
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
          "enunciado": "No que diz respeito à aplicação prática de Hermenêutica Sagrada, qual atitude deve caracterizar o obreiro ou líder aprovado?",
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
          "enunciado": "Como a disciplina de Hermenêutica Sagrada dialoga com o contexto de liderança eclesiástica e maturidade cristã?",
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
          "enunciado": "Qual das alternativas abaixo expressa a regra áurea de exegese aplicada ao compêndio de Hermenêutica Sagrada?",
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
      "id": "hermeneutica_p2",
      "titulo": "Hermenêutica Sagrada — Prova 2 (Exegética & Prática)",
      "tipo": "p2",
      "codigo": "HER-105-P2",
      "duracaoMinutos": 60,
      "questoes": [
        {
          "id": 1,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Na aplicação ministerial de Hermenêutica Sagrada, o discernimento espiritual e a análise das passagens bíblicas devem preceder qualquer tomada de decisão pastoral.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A sabedoria divina revelada nas Escrituras é o guia infalível para o pastoreio e a liderança cristã."
        },
        {
          "id": 2,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A pregação e o ensino de Hermenêutica Sagrada podem ser formulados com base em versículos isolados, sem consideração do contexto imediato e do livro bíblico.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! O texto fora de contexto torna-se pretexto para heresias. A análise contextual é regra imperativa na teologia do SEBITAN."
        },
        {
          "id": 3,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] No desenvolvimento de sermões e estudos bíblicos sobre Hermenêutica Sagrada, o expositor deve apresentar ilustrações claras e aplicações práticas para o cotidiano da congregação.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A boa comunicação da Palavra conecta o significado do texto sagrado com os desafios e dilemas do ouvinte hoje."
        },
        {
          "id": 4,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A suficiência das Escrituras ensinada em Hermenêutica Sagrada significa que a Bíblia é insuficiente para orientar a conduta moral e ética da Igreja contemporânea.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! A doutrina da suficiência ensina que a Bíblia contém tudo o que é necessário para a salvação, a fé e a vida de piedade cristã (2Tm 3.16-17)."
        },
        {
          "id": 5,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] O ministro do Evangelho que compreende Hermenêutica Sagrada sabe que a autoridade pastoral provém do serviço, da integridade do testemunho e da fidelidade ao Senhor Jesus.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! Jesus ensinou que o maior no Reino é o que serve a todos (Mt 20.26-28)."
        },
        {
          "id": 6,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Ao ministrar sobre os temas de Hermenêutica Sagrada, o ensinador deve priorizar a clareza didática e a simplicidade, sem abrir mão da precisão teológica.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O maior modelo pedagógico é o de Jesus, que utilizava parábolas e linguagem acessível para revelar as mais profundas verdades do Reino."
        },
        {
          "id": 7,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Para o SEBITAN, o aprendizado de Hermenêutica Sagrada autoriza o aluno a ser contencioso e a julgar com arrogância igrejas irmãs que possuem peculiaridades litúrgicas secundárias.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Em questões secundárias deve haver liberdade; nas essenciais, unidade; e em todas as coisas, o amor cristão (regra de Agostinho / Rupertus Meldenius)."
        },
        {
          "id": 8,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A oração fervorosa é parceira inseparável do estudo teológico em Hermenêutica Sagrada, pois o mesmo Espírito que inspirou os autores bíblicos ilumina o coração do leitor regenerado.",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! A iluminação do Espírito Santo é indispensável para que a mente humana assimile espiritualmente a revelação de Deus."
        },
        {
          "id": 9,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] Os resultados obtidos em Hermenêutica Sagrada dependem exclusivamente da eloquência humana e da oratória persuasiva do pregador, sem necessidade da graça divina.",
          "respostaCorreta": "Errado",
          "explicacao": "Errado! Paulo afirma em 1Co 2.4-5 que sua palavra não consistiu em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder."
        },
        {
          "id": 10,
          "tipo": "certo_errado",
          "enunciado": "[Exegese & Prática] A perseverança no estudo continuado de Hermenêutica Sagrada capacita o cristão a dar a razão da sua esperança a qualquer um que lhe pedir com mansidão e temor (1Pe 3.15).",
          "respostaCorreta": "Certo",
          "explicacao": "Correto! O dever bíblico da apologética e do testemunho cristão exige preparo intelectual e postura reverente."
        },
        {
          "id": 11,
          "tipo": "multipla_escolha",
          "enunciado": "[Estudo de Caso Ministerial] Um líder eclesiástico se depara com uma controvérsia teológica complexa na sua congregação ligada a Hermenêutica Sagrada. Qual deve ser sua conduta bíblica imediata?",
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
          "enunciado": "Na ótica da Teologia Prática e da Missiologia, de que maneira Hermenêutica Sagrada contribui para a Grande Comissão ordenada por Jesus em Mateus 28.19-20?",
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
          "enunciado": "Qual critério hermenêutico distingue a abordagem acadêmica do SEBITAN em Hermenêutica Sagrada do literalismo ingênuo ou do alegorismo desmedido?",
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
          "enunciado": "Em Hermenêutica Sagrada, como se deve tratar a relação entre a soberania absoluta de Deus e a responsabilidade moral do homem no plano da salvação?",
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
          "enunciado": "De acordo com as ênfases pedagógicas do SEBITAN em Hermenêutica Sagrada, qual deve ser o fruto visível na vida familiar e social do aluno aprovado nesta matéria?",
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
          "enunciado": "Qual é a função da bibliografia e do compêndio didático fornecido na disciplina de Hermenêutica Sagrada?",
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
          "enunciado": "Em face de questionamentos éticos e morais contemporâneos, como o conteúdo de Hermenêutica Sagrada orienta o conselho pastoral?",
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
          "enunciado": "Qual é o critério de avaliação contínua preconizado pelo SEBITAN para que o aluno considere dominada a disciplina de Hermenêutica Sagrada?",
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
          "enunciado": "Ao concluir com êxito a Prova 2 de Hermenêutica Sagrada, que marco acadêmico o aluno atinge no seu histórico escolar?",
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
