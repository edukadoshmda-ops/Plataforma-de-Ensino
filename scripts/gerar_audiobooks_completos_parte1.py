# -*- coding: utf-8 -*-
"""
Gerador de Audiobooks Integrais e Aprofundados - Parte 1 (Módulos 1 a 10)
Teologia Acessível - Ensino Superior Livre
Vozes: pt-BR-AntonioNeural (Masculina) e pt-BR-FranciscaNeural (Feminina)
"""
import os
import asyncio
import edge_tts

AUDIO_DIR = r"d:/Users/Users/eduka/Desktop/teologia-acessivel/public/audio"
os.makedirs(AUDIO_DIR, exist_ok=True)

AULAS = {
    "maneiras_costumes": """Bem-vindos à aula magna da disciplina Maneiras e Costumes da Bíblia, pela plataforma universitária Teologia Acessível.
Compreender os costumes, a vida social e o cotidiano dos povos bíblicos é a chave fundamental para interpretar com precisão as narrativas e ensinamentos do Antigo e Novo Testamento.
Nesta aula abrangente, analisamos as habitações e o ambiente urbano da Palestina antiga.
As cidades eram cercadas por espessas muralhas de proteção, e as portas da cidade funcionavam como o verdadeiro centro cívico, judicial e comercial. Era junto às portas que os anciãos se reuniam, julgamentos públicos eram lavrados, alianças eram seladas e os negócios eram celebrados, como vemos no livro de Rute e em Provérbios.
As casas populares eram construídas com tijolos de barro cozidos ao sol ou pedras calcárias, com terraços planos sustentados por vigas de madeira. Esse terraço tinha papel vital: servia como local de vigília, descanso no frescor da tarde, e espaço de oração e comunhão silenciosa com Deus, como testemunhado pelo apóstolo Pedro em Jope.
A mobília era sóbria e funcional: esteiras de junco, candeias azeiteiras colocadas sobre veladores para iluminar toda a casa, e jarros de barro para conservação de água e azeite.
No vestuário bíblico, destacavam-se duas vestimentas principais: a túnica interior, vestida junto ao corpo, e o manto exterior, indispensável para o abrigo noturno e símbolo de dignidade social.
Por mandamento mosaico, as vestes dos hebreus continham franjas nos cantos unidas por um cordão de azul celeste, como perpétuo memorial da santidade e dos mandamentos do Senhor.
A dieta diária fundamentava-se na tríade palestina: o pão de trigo e cevada, o azeite de oliva e o fruto da videira, acrescidos de leite de cabra, queijo, figos secos e peixe do Mar da Galileia.
O partir do pão transcendia a nutrição física: era um pacto sagrado de hospitalidade e comunhão mútua.
Estudamos também as divisões do tempo e o calendário judaico: o ano religioso iniciando no mês de Nisã, pontuado pelas três festas de peregrinação — a Páscoa, o Pentecostes e a Festa dos Tabernáculos —, além do solene Dia da Expiação.
A estrutura familiar era patriarcal, onde o pai exercia o sacerdócio do lar e os filhos eram instruídos diligentemente na Torá desde a mais tenra infância.
Conhecer estes costumes enriquece a exegese bíblica e nos aproxima do mundo real em que os profetas, apóstolos e o próprio Senhor Jesus viveram e pregaram.""",

    "portugues_instrumental": """Bem-vindos à aula expositiva da disciplina Português Instrumental para Pregadores e Líderes, apresentada pela plataforma Teologia Acessível.
A comunicação clara, culta e correta é o veículo indispensável para a proclamação nobre da verdade divina.
Como ministros do Evangelho e expositores das Sagradas Escrituras, temos o dever ético e espiritual de manejar a língua portuguesa com zelo, precisão e excelência acadêmica.
Nesta aula magna, estudamos os fundamentos da oratória sagrada e as técnicas de dicção vocal.
A fonação de qualidade depende da respiração diafragmática: inspirar pelo nariz, expandindo a base dos pulmões sem elevar os ombros, e controlar a expiração suave para sustentar frases longas com firmeza, clareza e autoridade, evitando a fadiga precoce das pregas vocais.
A articulação precisa exige o treinamento dos músculos faciais e da língua, pronunciando integralmente todas as sílabas, sem cortar as terminações verbais em erre ou suprimir os plurais.
Analisamos as falhas gramaticais e estilísticas mais frequentes no púlpito:
Primeiro, os vícios de linguagem e pleonasmos viciosos, como 'subir para cima', 'elo de ligação', 'duplo sentido ambíguo' ou 'certeza absoluta'.
Segundo, o emprego inadequado da regência verbal e nominal: saber diferenciar 'assistir ao culto' no sentido de presenciar, de 'assistir o enfermo' no sentido de socorrer; o uso correto do verbo 'obedecer à Palavra' exigindo preposição; e a distinção exata entre 'saudar os irmãos' com a paz do Senhor e 'saldar dívidas financeiras'.
Terceiro, o combate aos cacoetes oratórios como 'né', 'tá entendendo', 'amém irmãos' repetidos de modo automático, que poluem a mensagem e distraem os ouvintes.
O expositor cristão deve enriquecer constantemente seu vocabulário mediante a leitura sistemática dos clássicos e das Escrituras em boas traduções, variando a modulação, o ritmo e o volume vocal para enfatizar os pontos cruciais do sermão.
Uma exposição límpida e gramaticalmente escorreita não diminui o poder do Espírito Santo; antes, fornece um canal digno e reverente através do qual a eterna Palavra de Deus alcança os corações.""",

    "metodologia_pesquisa": """Bem-vindos à aula completa de Metodologia da Pesquisa Científica em Teologia, pela plataforma universitária Teologia Acessível.
O estudo teológico de nível superior exige disciplina intelectual, método sistemático e rigor acadêmico para fundamentar a defesa da fé com honestidade e excelência.
Nesta aula, distinguimos os quatro níveis do conhecimento humano:
O conhecimento empírico ou do senso comum, nascido da observação cotidiana sem método formal;
O conhecimento filosófico, baseado na reflexão crítica e lógica sobre as causas primeiras;
O conhecimento teológico, alicerçado na fé e na revelação especial das Escrituras divinamente inspiradas;
E o conhecimento científico, caracterizado pelo método investigativo, falseabilidade, análise de fontes e sistematização rigorosa.
Ao elaborar uma monografia, artigo científico ou dissertação teológica, o pesquisador deve dominar a estrutura padronizada da pesquisa acadêmica.
Tudo se inicia com a escolha e delimitação precisa do tema, formulando o problema de pesquisa — uma pergunta clara e objetiva que o trabalho pretende responder.
Em seguida, definem-se as hipóteses explicativas provisórias e os objetivos gerais e específicos, redigidos obrigatoriamente com verbos no infinitivo, tais como: analisar, demonstrar, comparar, elucidar e fundamentar.
A fundamentação teórica exige uma rigorosa revisão bibliográfica, dialogando tanto com teólogos históricos quanto com pesquisadores contemporâneos, confrontando diferentes correntes interpretativas.
Dominar as normas técnicas de citação é imperativo: diferenciar a citação direta curta (inserida no próprio parágrafo entre aspas) da citação direta longa com mais de três linhas (destacada em bloco próprio com recuo de quatro centímetros e fonte reduzida), citando com exatidão autor, ano e página para preservar a honestidade acadêmica e repudiar todo e qualquer plágio.
Por fim, a redação deve ser impessoal, coerente e analítica, conduzindo a uma conclusão que responda cabalmente ao problema inicial.
A pesquisa teológica feita com rigor metodológico glorifica ao Deus da verdade e fornece à Igreja defesas inabaláveis do Evangelho.""",

    "hermeneutica_sagrada": """Bem-vindos à aula magna de Hermenêutica Sagrada e Exegese Bíblica, da plataforma de ensino superior Teologia Acessível.
A hermenêutica é a ciência e a arte da correta interpretação dos textos sagrados. Seu objetivo supremo é transpor a distância temporal, histórica, linguística e cultural entre os escritores inspirados e o leitor contemporâneo, descobrindo o significado original que o autor quis comunicar à sua audiência primária.
Nesta aula abrangente, estabelecemos os princípios fundamentais da hermenêutica bíblica ortodoxa.
A regra de ouro da hermenêutica reformada afirma: a Escritura é a sua própria intérprete. Diante de uma passagem de difícil compreensão, devemos sempre recorrer aos textos bíblicos mais claros que tratam do mesmo assunto, jamais formulando doutrinas sobre versículos isolados ou ambíguos.
Analisamos a distinção vital entre exegese e eisegese: a exegese é a extração legítima do sentido contido dentro do texto a partir da gramática, do léxico e do contexto histórico; a eisegese é o erro grave de projetar ideias preconcebidas e opiniões pessoais para dentro do texto.
Estudamos o contexto em três círculos concêntricos:
Primeiro, o contexto imediato: os versículos que antecedem e sucedem diretamente a passagem.
Segundo, o contexto do livro: o propósito histórico, a audiência e o argumento teológico geral daquele livro bíblico.
Terceiro, o contexto canônico amplo: a harmonia de todo o conselho de Deus manifestado nos sessenta e seis livros inspirados.
Examinamos as regras práticas de interpretação: interpretar as palavras em seu sentido literal e ordinário, a menos que o contexto exija linguagem figurada; levar em conta os diferentes gêneros literários — a narrativa histórica, a poesia hebraica marcada pelo paralelismo, a profecia, as parábolas dos Evangelhos, as epístolas doutrinárias e o gênero apocalíptico com sua rica simbologia.
Aprenda a manejar com retidão e fidelidade a Palavra da Verdade para alimentar o rebanho do Senhor com a sã doutrina.""",

    "homiletica_oratoria": """Bem-vindos à aula completa da disciplina Homilética: A Arte e a Teologia da Pregação Bíblica, ministrada pela Teologia Acessível.
A homilética é o ramo da teologia prática que se ocupa da preparação e proclamação eficaz da mensagem bíblica ao coração e à mente dos ouvintes.
O apóstolo Paulo exortou a Timóteo: 'Prega a palavra, insta a tempo e fora de tempo, redargue, repreende, exorta com toda a longanimidade e doutrina'.
Nesta aula expositiva, exploramos a preparação espiritual do pregador e a arquitetura do sermão.
O sermão nasce primeiro no santuário da oração e da comunhão íntima com Deus. Antes de pregar ao povo, o pregador deve permitir que a passagem bíblica examine, cure e transforme a sua própria alma.
A estrutura clássica do sermão bíblico compõe-se de cinco elementos harmônicos:
Primeiro, o Título: atraente, bíblico e condizente com a ideia central da mensagem.
Segundo, a Introdução: o momento crucial de capturar a atenção benevolente do auditório, despertar o interesse e apresentar a proposição temática.
Terceiro, a Proposição: a tese central declarada em uma única frase clara que sintetiza o propósito do sermão.
Quarto, a Divisão do Corpo em Tópicos: os pontos principais, ordenados de forma lógica e progressiva, cada qual sustentado pela exegese do texto bíblico e enriquecido com ilustrações apropriadas.
E quinto, a Conclusão com Apelo: o clímax da pregação, onde a verdade é aplicada à vida prática dos ouvintes, desafiando-os ao arrependimento, à fé, à santificação e à obediência.
Estudamos os três métodos principais de sermão: o sermão temático (cujo roteiro deriva do tema geral e recorre a diversos textos), o sermão textual (onde as divisões nascem de um único versículo-chave) e o sermão expositivo — considerado o método supremo da pregação cristã, pois expõe sequencialmente o fluxo de pensamento de um parágrafo ou capítulo bíblico.
Pregue com unção do Espírito Santo, fidelidade ao texto e fervor pelas almas.""",

    "apologetica": """Bem-vindos à aula magna da disciplina Apologética Cristã, apresentada pela plataforma universitária Teologia Acessível.
A apologética é a disciplina teológica dedicada à defesa racional e fundamentada da fé cristã diante dos questionamentos e objeções do mundo contemporâneo.
O apóstolo Pedro estabeleceu o lema apologético em sua primeira carta, capítulo três, verso quinze: 'Estai sempre preparados para responder com mansidão e temor a qualquer que vos pedir a razão da esperança que há em vós'.
Nesta aula completa, estudamos os grandes argumentos racionais em favor da existência de Deus e da veracidade da revelação bíblica.
Examinamos o Argumento Cosmológico: tudo o que começa a existir possui uma causa anterior; o Universo teve um início comprovado no tempo e espaço, logo, o Universo possui uma causa transcendente, imaterial, atemporal e infinitamente poderosa.
Estudamos o Argumento Teleológico ou do Design Inteligente: a extraordinária ordem matemática, o ajuste fino das leis do cosmos e a complexidade biológica do código genético apontam irrefutavelmente para uma Mente criadora e inteligente.
Analisamos o Argumento Moral: a existência de leis morais objetivas universais — o reconhecimento do bem e da justiça em todas as culturas — pressupõe um Legislador Moral supremo.
Refutamos os principais sistemas filosóficos opositores ao cristianismo: o naturalismo reducionista, o relativismo pós-moderno e o ceticismo cego.
Abordamos a historicidade da ressurreição corporal de Jesus Cristo como a rocha inabalável da fé cristã, confirmada por mais de quinhentas testemunhas oculares e pela transformação radical dos discípulos que preferiram o martírio à negação da verdade.
A verdadeira apologética não se apoia em discussões vazias ou orgulho intelectual, mas no anúncio fiel da verdade com mansidão, integridade moral e amor pelas almas que buscam a Deus.""",

    "sintese_at": """Bem-vindos à aula magna da disciplina Síntese do Antigo Testamento, da plataforma superior Teologia Acessível.
O Antigo Testamento abrange os trinta e nove livros sagrados que narram a aliança de Deus com Israel e preparam o palco glorioso para a vinda do Messias redentor.
Nesta aula panorâmica e profunda, percorremos as quatro grandes divisões do cânon veterotestamentário.
Primeiro, o Pentateuco ou Torá, composto por Gênesis, Êxodo, Levítico, Números e Deuteronômio: desde a Criação perfeita, a queda de Adão e o pacto abraâmico em Gênesis, passando pela redenção do cativeiro do Egito e a outorga da Lei no Sinai em Êxodo, as leis de santidade e sacrifícios em Levítico, as peregrinações no deserto em Números, até os solenes discursos de renovação da aliança proferidos por Moisés nas planícies de Moabe em Deuteronômio.
Segundo, os doze Livros Históricos, de Josué a Ester: a conquista corajosa de Canaã, o ciclo trágico de desobediência e livramento no período dos Juízes, o estabelecimento da monarquia unificada sob Saul, Davi e Salomão, a divisão trágica nos reinos de Judá e Israel, os cativeiros assírio e babilônico, e a restauração pós-exílica sob Esdras e Neemias com a preservação providencial sob a rainha Ester.
Terceiro, os cinco Livros Poéticos e de Sabedoria: o mistério do sofrimento do justo em Jó, os louvores, orações e cânticos messiânicos dos Salmos, a sabedoria prática cotidiana de Provérbios, as reflexões existenciais sobre a vaidade humana em Eclesiastes e a celebração do amor conjugal em Cantares de Salomão.
Quarto, os dezessete Livros Proféticos, divididos entre os cinco Profetas Maiores — Isaías, Jeremias, Lamentações, Ezequiel e Daniel — e os doze Profetas Menores, de Oséias a Malaquias: arautos que convocavam a nação ao arrependimento, denunciavam a idolatria e proclamavam com riqueza de detalhes as promessas da vinda do Rei Messiânico.
O Antigo Testamento é o alicerce indispensável para a plena compreensão do Evangelho da Graça.""",

    "periodo_interbiblico": """Bem-vindos à aula completa sobre o Período Interbíblico, ministrada pela plataforma Teologia Acessível.
O Período Interbíblico abrange aproximadamente quatrocentos anos de história, estendendo-se do profeta Malaquias, ao final do Antigo Testamento, até o surgimento de João Batista nas margens do Rio Jordão anunciando o Reino dos Céus.
Muitas vezes chamado equivocadamente de 'séculos de silêncio' por causa da ausência de novos profetas canônicos, foi na realidade uma época de intensas convulsões políticas, sociais e religiosas fundamentais que prepararam 'a plenitude dos tempos' para a chegada do Messias.
Nesta aula, examinamos a sucessão dos quatro grandes impérios que dominaram a Palestina:
Primeiro, o Império Persa, que manteve governo tolerante permitindo a reconstrução do Templo em Jerusalém.
Segundo, a conquista fulminante de Alexandre o Grande em 332 antes de Cristo, inaugurando o Império Grego e a difusão mundial do helenismo, da filosofia e da língua grega comum (koiné), que se tornaria o idioma universal do Novo Testamento.
Após a morte prematura de Alexandre, a Palestina tornou-se campo de batalha entre os generais Ptolomeu do Egito e Seleuco da Síria.
A crise atingiu o ápice com o tirano Antíoco Quarto Epifânio, que profanou o Santo Templo de Jerusalém oferecendo sacrifícios de porcos e impondo a idolatria pagã.
Essa abominação provocou a heroica Revolta dos Macabeus, liderada pelo sacerdote Matatias e seu filho Judas Macabeu, restaurando o culto sagrado e conquistando um século de independência judaica sob a dinastia dos Asmoneus.
Por fim, no ano 63 antes de Cristo, o general romano Pompeu invadiu Jerusalém, estabelecendo o domínio de Roma e entronizando Herodes o Grande.
Foi durante este período que surgiram as seitas dos fariseus, saduceus, essênios e zelotes, a instituição da sinagoga em todas as aldeias e a célebre tradução das Escrituras Hebraicas para o grego na versão Septuaginta.
Estude a providência soberana de Deus guiando a história para receber o Salvador do mundo.""",

    "manuscritos_at": """Bem-vindos à aula completa de Manuscritos e Transmissão do Antigo Testamento, da plataforma universitária Teologia Acessível.
Como os trinta e nove livros do Antigo Testamento foram preservados ao longo dos milênios até chegarem às nossas mãos hoje com precisão e fidelidade inquestionáveis?
Nesta disciplina de crítica textual bíblica, investigamos os materiais de escrita, as famílias de manuscritos e o labor dos copistas antigos.
Nos tempos bíblicos, os textos sagrados eram registrados sobre peles de animais preparadas (o pergaminho), tabuinhas de argila e folhas prensadas de papiro.
Os copistas judeus, conhecidos como escribas (soferim) e posteriormente os mestres Massoretas entre os séculos sexto e décimo depois de Cristo na cidade de Tiberíades, desenvolveram um método de reverência e rigor quase inacreditável:
Eles contavam rigorosamente o número total de palavras e letras de cada livro, identificavam a letra central de cada obra e descartavam e enterravam qualquer rolo que contivesse um único erro de cópia.
Foram os Massoretas que inventaram o sistema de pontos vocálicos para garantir que a pronúncia sagrada das palavras hebraicas não se perdesse.
Os manuscritos hebraicos mais antigos completos conhecidos até a metade do século vinte eram o Códice de Alepo e o Códice de Leningrado, datados por volta do ano mil da era cristã.
Muitos críticos céticos alegavam que, por terem passado tantos séculos, o texto bíblico certamente teria sido alterado por erros de copistas.
Contudo, em 1947 ocorreu a mais espetacular descoberta da arqueologia moderna: os Rolos do Mar Morto nas cavernas de Qumran.
Centenas de manuscritos bíblicos hebraicos foram desenterrados, incluindo o rolo completo do profeta Isaías, datado de mais de cem anos antes do nascimento de Cristo.
Ao confrontar o rolo de Qumran com o texto massorético copiado mil anos depois, os pesquisadores constataram uma concordância textual de mais de noventa e cinco por cento, demonstrando que as pequenas variações eram meras grafias de palavras que não alteravam nenhuma doutrina da fé.
A Palavra do nosso Deus permanece eternamente inabalável e digna de total confiança.""",

    "sintese_nt": """Bem-vindos à aula magna da disciplina Síntese do Novo Testamento, apresentada pela plataforma universitária Teologia Acessível.
O Novo Testamento reúne os vinte e sete livros inspirados pelo Espírito Santo que revelam a consumação da promessa messiânica na encarnação, morte vicária, ressurreição e ascensão de nosso Senhor e Salvador Jesus Cristo, e o nascimento triunfante de Sua Igreja.
Nesta aula completa, estudamos a harmonia e o propósito teológico de cada seção canônica.
Iniciamos pelos Quatro Evangelhos:
Mateus apresenta Jesus como o Rei de Israel e o Filho de Davi prometido aos judeus;
Marcos retrata o Salvador como o Servo Obediente que não veio para ser servido, mas para servir e dar a Sua vida em resgate de muitos;
Lucas revela a compaixão do Filho do Homem em busca do pecador perdido e marginalizado;
E o Evangelho de João alça voo como a águia, proclamando a deidade absoluta do Verbo Eterno que se fez carne e habitou entre nós cheio de graça e de verdade.
Em seguida, o Livro Histórico de Atos dos Apóstolos registra o avanço irresistível do Evangelho pelo poder do Espírito Santo, partindo de Jerusalém, atravessando a Judeia e Samaria e conquistando os confins da terra no coração de Roma.
Estudamos as vinte e uma Epístolas:
As cartas paulinas — desde os monumentais tratados teológicos de Romanos e Gálatas sobre a justificação pela fé, às cartas pastorais a Timóteo e Tito e as cartas da prisão em Efésios, Filipenses e Colossenses — que ensinam a eclesiologia e o discipulado prático;
As cartas gerais de Hebreus, Tiago, Pedro, João e Judas, que edificam o crente na perseverança, na santidade moral e na defesa intransigente da fé.
E coroando a revelação, o Livro de Apocalipse descortina a vitória triunfante do Cordeiro de Deus sobre o dragão, a destruição do mal, o glorioso Milênio e a descida da Nova Jerusalém, onde os redimidos reinarão com Cristo por toda a eternidade.
Mergulhe nas riquezas inesgotáveis do Novo Testamento e viva a plenitude da graça de Deus."""
}

async def gerar_audio_edge(texto, arquivo_saida, voz):
    try:
        comunicador = edge_tts.Communicate(texto, voz, rate="-2%")
        await comunicador.save(arquivo_saida)
        print(f"[OK] Áudio gerado: {os.path.basename(arquivo_saida)} ({voz})")
    except Exception as e:
        print(f"[ERRO] {voz}: {e}")

async def gravar_todos():
    tarefas = []
    for chave, texto in AULAS.items():
        arq_m = os.path.join(AUDIO_DIR, f"{chave}_masculino.mp3")
        arq_f = os.path.join(AUDIO_DIR, f"{chave}_feminino.mp3")
        tarefas.append(gerar_audio_edge(texto, arq_m, "pt-BR-AntonioNeural"))
        tarefas.append(gerar_audio_edge(texto, arq_f, "pt-BR-FranciscaNeural"))
    await asyncio.gather(*tarefas)

if __name__ == "__main__":
    print("Iniciando gravação de 20 faixas de áudio completo (Módulos 1 a 10)...")
    asyncio.run(gravar_todos())
    print("Gravação de Módulos 1 a 10 concluída com sucesso!")
