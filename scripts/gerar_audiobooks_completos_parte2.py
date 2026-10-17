# -*- coding: utf-8 -*-
"""
Gerador de Audiobooks Integrais e Aprofundados - Parte 2 (Módulos 11 a 20)
Teologia Acessível - Ensino Superior Livre
Vozes: pt-BR-AntonioNeural (Masculina) e pt-BR-FranciscaNeural (Feminina)
"""
import os
import asyncio
import edge_tts

AUDIO_DIR = r"d:/Users/Users/eduka/Desktop/teologia-acessivel/public/audio"
os.makedirs(AUDIO_DIR, exist_ok=True)

AULAS = {
    "teontologia": """Bem-vindos à aula magna da disciplina Teontologia: A Doutrina Sistemática de Deus, ministrada pela plataforma Teologia Acessível.
O estudo do ser, da essência, dos atributos e das obras do Deus Todo-Poderoso é o fundamento inabalável de toda a teologia cristã.
Como afirmou o reformador João Calvino, quase toda a sabedoria que possuímos consiste em duas partes: o conhecimento de Deus e o conhecimento de nós mesmos.
Nesta aula expositiva profunda, analisamos as provas da existência de Deus sob a perspectiva bíblica e filosófica:
Examinamos o Argumento Ontológico da ideia do Ser Perfeito que não pode existir apenas na mente; o Argumento Cosmológico da Primeira Causa Incriada; o Argumento Teleológico do deslumbrante planejamento do cosmos; e o Argumento Moral da consciência gravada no espírito humano.
Estudamos os Atributos Divinos em suas duas naturezas clássicas:
Os Atributos Incomunicáveis, exclusivos da deidade soberana, que não têm paralelo na criatura: a Sua Asseidade (Deus existe por Si mesmo e não depende de nada para ser), a Sua Eternidade (sem princípio nem fim), a Sua Imutabilidade (perfeito em Sua essência e propósitos eternos), a Sua Onipresença (preenche todos os espaços sem ser contido por eles), a Sua Onisciência (conhecimento absoluto de todas as coisas passadas, presentes e futuras) e a Sua Onipotência soberana para realizar tudo quanto Lhe apraz.
E os Atributos Comunicáveis, que Deus graciosamente reflete em Seus filhos regenerados: a Sua Santidade imaculada, a Sua Justiça inegociável, a Sua Infinita Misericórdia, o Seu Amor Ágape compassivo, a Sua Verdade e a Sua Graça salvadora.
Mergulhamos no mistério insondável e glorioso da Santíssima Trindade: um só Deus verdadeiro que subsiste eternamente em três Pessoas distintas, consubstanciais, coeternas e coiguais em poder e majestade: o Pai, o Filho e o Espírito Santo.
Contemplar a Deus nos conduz à adoração mais profunda, à humildade reverente e à plena confiança na Sua providência paternal.""",

    "bibliologia": """Bem-vindos à aula completa da disciplina Bibliologia: A Doutrina das Sagradas Escrituras, da plataforma universitária Teologia Acessível.
A Bíblia Sagrada é a lâmpada para os nossos pés e a luz para o nosso caminho; é a Palavra de Deus inspirada, inerrante, infalível e suficiente para a salvação e a edificação de Sua Igreja.
Nesta aula magna, estudamos os pilares teológicos das Escrituras:
Primeiro, a Inspiração Divina Plenária e Verbal: o apóstolo Paulo afirma em Segunda Timóteo três dezesseis que toda a Escritura é divinamente inspirada — no grego, theopneustos, ou seja, soprada pela boca de Deus. Homens santos de Deus falaram e escreveram movidos soberanamente pelo Espírito Santo, sem anular suas personalidades, vocabulários e contextos históricos, mas garantindo que o texto final fosse a própria verdade de Deus sem qualquer mistura de erro nos manuscritos originais.
Segundo, a Inerrância e Autoridade: as Escrituras são absolutamente fidedignas em tudo o que afirmam, sejam assuntos de fé, doutrina, história ou ética.
Terceiro, a Canonicidade das Escrituras: compreendemos o processo histórico pelo qual os sessenta e seis livros sagrados — trinta e nove no Antigo Testamento e vinte e sete no Novo Testamento — foram reconhecidos pelo povo de Deus como possuidores da chancela divina da autoridade, rejeitando com rigor hermenêutico os escritos apócrifos não inspirados.
Quarto, a Suficiência e Iluminação: a Bíblia contém tudo o que é necessário para a nossa salvação, fé e prática de vida piedosa. O mesmo Espírito Santo que inspirou os profetas e apóstolos no passado ilumina hoje o entendimento do crente humilde para compreender e obedecer à mensagem revelada.
Ame as Sagradas Escrituras, medite nelas dia e noite e fundamente toda a sua vida ministerial sobre este alicerce eterno.""",

    "angelologia": """Bem-vindos à aula magna da disciplina Angelologia e Demonologia Bíblica, pela plataforma de ensino superior Teologia Acessível.
O mundo espiritual invisível é uma realidade objetiva ensinada com riqueza de detalhes pelas Sagradas Escrituras.
Nesta aula abrangente, investigamos a criação, as ordens e o ministério das hostes celestes, bem como a origem e a derrota do reino das trevas.
Os anjos de Deus são seres espirituais criados, dotados de intelecto, vontade, emoção e grande poder, porém subordinados inteiramente à soberania do Criador.
Estudamos as diferentes categorias angélicas reveladas na Bíblia:
Os Querubins, guardiões da santidade e majestade da presença de Deus, associados ao propiciatório da Arca e ao trono celestial;
Os Serafins, seres ardentes de adoração contínua que proclamam a santidade do Senhor em Isaías capítulo seis;
O Arcanjo Miguel, o príncipe guerreiro que combate as forças demoníacas e protege o povo de Deus;
E o anjo Gabriel, o mensageiro celestial de revelações e anúncios proféticos, como nas visões de Daniel e no anúncio do nascimento de Jesus a Maria.
A Escritura afirma em Hebreus um catorze que os anjos são espíritos ministradores enviados para servir a favor daqueles que hão de herdar a salvação.
Paralelamente, examinamos a tragédia da queda de Lúcifer narrada pelos profetas Isaías e Ezequiel: o antigo querubim ungido que se encheu de orgulho, rebelou-se contra Deus e arrastou consigo uma terça parte das hostes rebeldes, transformando-se em Satanás e demônios.
Contudo, a autoridade do crente em Jesus Cristo é absoluta: na cruz do Calvário, Cristo despojou os principados e potestades e os expôs ao desprezo público.
Revestido de toda a armadura de Deus em Efésios seis, o cristão vive em vitória incontestável pelo sangue do Cordeiro.""",

    "antropologia": """Bem-vindos à aula completa de Antropologia Teológica: A Doutrina Bíblica do Homem, ministrada pela Teologia Acessível.
O que é o ser humano? De onde viemos, qual é o nosso propósito eterno e qual é o diagnóstico da nossa atual condição moral?
Nesta disciplina fundamental, exploramos a origem e a dignidade humana à luz do relato da Criação.
O homem não é o fruto cego do acaso ou da evolução materialista, mas a coroa da criação de Deus, formado do pó da terra e vivificado pelo sopro direto do Todo-Poderoso, criado à Sua imagem e conforme a Sua semelhança (a Imago Dei).
Essa imagem divina outorga ao ser humano dignidade sagrada intrínseca, racionalidade reflexiva, capacidade moral, capacidade de comunhão espiritual e autoridade para governar e cuidar da criação como mordomo fiel de Deus.
Examinamos a constituição antropológica em corpo físico, alma consciente e espírito com capacidade de relacionar-se com o Altíssimo.
Estudamos em seguida a tragédia da queda no Jardim do Éden: pela desobediência voluntária à voz de Deus, o pecado original rompeu a comunhão com o Criador, corrompeu a natureza moral do homem, sujeitou o corpo à mortalidade biológica e provocou a morte espiritual — a separação eterna de Deus.
A doutrina da depravação total ensina que nenhuma faculdade humana permaneceu intacta: a mente, a vontade e os afetos foram infectados pelo pecado.
Porém, no Evangelho encontramos a resposta gloriosa: Jesus Cristo é o Segundo Adão. O que o primeiro Adão perdeu no Éden, Cristo reconquistou na cruz e na ressurreição, regenerando a nossa alma e restaurando a imagem de Deus em santidade, justiça e verdade.""",

    "cristologia": """Bem-vindos à aula magna da disciplina Cristologia: A Pessoa e a Obra de Jesus Cristo, pela plataforma universitária Teologia Acessível.
Jesus Cristo é o coração palpitante, a consumação profética e o centro exclusivo de toda a Escritura Sagrada.
Sem Cristo, não há salvação, não há cristianismo e não há esperança para a raça humana.
Nesta aula profunda e expositiva, estudamos a pessoa do Redentor através das doutrinas históricas da Igreja cristã:
Primeiro, a Sua Pré-existência e Divindade Eterna: Jesus não começou a existir na manjedoura de Belém; Ele é o Verbo Eterno que no princípio estava com Deus e era Deus, pelo qual todas as coisas foram criadas e sem o qual nada do que foi feito se fez.
Segundo, a Sua Encarnação e Nascimento Virginal: concebido pelo poder sobrenatural do Espírito Santo no ventre da virgem Maria, o Filho eterno assumiu a natureza humana real e completa, exceto o pecado.
Terceiro, a União Hipostática das duas naturezas: no Concílio de Calcedônia em quatrocentos e cinquenta e um, a Igreja formulou com precisão bíblica que em Jesus Cristo coexistem a plena divindade e a perfeita humanidade em uma só Pessoa, sem confusão, sem mudança, sem divisão e sem separação.
Quarto, os Três Ofícios Messiânicos de Cristo: Ele é o Profeta supremo que nos revela a plenitude da vontade de Deus; Ele é o Sumo Sacerdote misericordioso que ofereceu a Si mesmo em sacrifício vicário e intercede eternamente por nós; e Ele é o Rei dos reis soberano que governa a Igreja e em breve reinará sobre todo o cosmos.
Pela Sua morte substitutiva na cruz, Ele satisfez a justiça divina; pela Sua ressurreição corporal triunfante, Ele esmagou a cabeça da serpente e venceu o império da morte; e pela Sua gloriosa ascensão aos céus, está assentado à destra da Majestade nas alturas.
Ao nome de Jesus, todo joelho se dobrará nos céus, na terra e debaixo da terra, e toda língua confessará que Jesus Cristo é o Senhor para a glória de Deus Pai.""",

    "soteriologia": """Bem-vindos à aula magna da disciplina Soteriologia: A Doutrina Bíblica da Salvação, ministrada pela plataforma Teologia Acessível.
A soteriologia, do grego soteria (salvação) e logos (estudo), é o estudo sistemático da soberana iniciativa de Deus em resgatar o pecador da perdição eterna mediante a obra perfeita de Cristo Jesus.
Nesta aula completa, estudamos as etapas da Ordem da Salvação (a Ordo Salutis):
A Graça Preveniente e o Chamado Eficaz: Deus busca o pecador e desperta seu coração através da proclamação do Evangelho e da iluminação do Espírito Santo.
O Arrependimento e a Fé Salvadora: o ser humano reconhece sua culpa, abandona a prática pecaminosa e confia inteiramente na suficiência de Cristo.
A Justificação pela Fé: ato judicial declarativo de Deus pelo qual Ele perdoa todos os pecados do crente e lhe imputa a justiça perfeita de Seu Filho Jesus, declarando-o justo diante do Seu santo tribunal.
A Regeneração ou Novo Nascimento: o milagre da ressurreição espiritual da alma operado pelo Espírito Santo, que nos concede um novo coração e nos liberta da escravidão do pecado.
A Adoção: a concessão de todos os direitos, herança e privilégios da família celestial, tornando-nos filhos e herdeiros de Deus e coerdeiros com Cristo.
A Santificação Contínua: a obra da graça na renovação progressiva do caráter cristão rumo à santidade de vida.
E a Glorificação Final: a coroação da salvação no dia da volta de Cristo com a redenção do nosso corpo mortal em corpo imortal e incorruptível.
Compreendemos também a salvação em seus três tempos bíblicos: no passado, fomos salvos da condenação da culpa do pecado; no presente, estamos sendo salvos do poder do pecado; e no futuro, seremos salvos da própria presença do pecado na eternidade.
A salvação pertence ao Senhor do início ao fim, unicamente pela Sua imerecida graça.""",

    "eclesiologia": """Bem-vindos à aula completa de Eclesiologia: A Doutrina da Igreja, da plataforma universitária Teologia Acessível.
A palavra grega ekklesia significa literalmente 'os chamados para fora': a assembleia santa dos redimidos chamada para fora das trevas para a maravilhosa luz de Cristo.
A Igreja não é uma construção física de alvenaria ou um clube social, mas um organismo espiritual vivo, o corpo místico do qual Jesus Cristo é a única Cabeça soberana.
Nesta aula expositiva, analisamos as metáforas bíblicas da Igreja:
O Corpo de Cristo, onde cada crente é um membro integrado com dons e funções distintas;
O Edifício e Templo Santo de Deus, construído sobre o fundamento dos apóstolos e profetas, sendo Cristo a pedra angular;
A Noiva do Cordeiro, purificada pela Palavra para ser apresentada santa e irrepreensível no dia das bodas eternas;
E o Rebanho do Bom Pastor, que ouve a Sua voz e o segue com alegria.
Estudamos os modelos históricos de governo eclesiástico — episcopal, presbiteriano e congregacional — e as qualificações morais e espirituais exigidas dos pastores, presbíteros e diáconos nas epístolas pastorais.
Examinamos as duas Ordenanças sagradas deixadas por Cristo à Sua Igreja:
O Batismo bíblico, testemunho público de nossa identificação com a morte e ressurreição do Senhor;
E a Santa Ceia, memorial sagrado do corpo partido e do sangue derramado de Cristo na cruz, proclamando a Sua morte até que Ele venha.
A missão suprema da Igreja é tripla: a adoração fervente a Deus no Santo dos Santos, a edificação mútua dos santos no amor fraternal, e a evangelização mundial com poder pentecostal.""",

    "hamartiologia": """Bem-vindos à aula magna da disciplina Hamartiologia: O Estudo Sistemático do Pecado, pela plataforma Teologia Acessível.
Para compreender a grandeza incalculável da salvação em Cristo, é imperativo entender a gravidade devastadora do mal que nos separou de Deus: o pecado.
Do grego hamartia (errar o alvo divino), o pecado é qualquer desobediência, rebeldia moral, transgressão ou transgressão da santa lei de Deus.
Nesta aula profunda, investigamos a origem do pecado no cosmos e na história humana:
A sua origem primária deu-se no mundo angélico através da soberba de Lúcifer, que desejou ser igual a Deus.
Sua entrada na esfera humana ocorreu no Jardim do Éden com a queda deliberada de Adão e Eva, que preferiram acreditar nas artimanhas da serpente a confiar na palavra fiel do Criador.
Estudamos os termos bíblicos para descrever o pecado: transgressão (ultrapassar os limites de Deus), iniquidade (a torpeza interior e perversão moral), impiedade (a falta de reverência a Deus) e rebelião voluntária.
Analisamos as terríveis consequências do pecado: a corrupção da natureza humana, a escravidão espiritual, a culpa judicial, a condenação sob a ira de Deus e a separação eterna no inferno.
Contudo, a teologia do pecado nos conduz irresistivelmente aos pés da cruz: onde abundou o pecado humano, superabundou a graça infinita de Deus.
Pelo sangue purificador de Jesus, somos inteiramente lavados de toda a iniquidade e restituídos à perfeita comunhão com o Pai.""",

    "pneumatologia": """Bem-vindos à aula magna da disciplina Pneumatologia: A Doutrina Bíblica do Espírito Santo, da plataforma universitária Teologia Acessível.
O Espírito Santo é a Terceira Pessoa bendita da Trindade Santa, plenamente Deus, coeterno e consubstancial com o Pai e o Filho.
Ele não é uma energia impessoal, uma força cega ou mera influência cósmica, mas uma Pessoa divina dotada de intelecto, vontade soberana, amor infinito e capacidade de Se entristecer.
Nesta aula expositiva profunda, analisamos as operações soberanas do Espírito Santo ao longo da história da redenção:
No Antigo Testamento, Ele operava na Criação do cosmos, sustentava a vida e vinha pontualmente sobre juízes, reis e profetas para capacitá-los a tarefas extraordinárias.
No ministério de Jesus Cristo, o Espírito Santo ungiu o Filho de Deus desde o Seu batismo no Jordão, conduzindo-o no deserto e capacitando-o em todos os Seus milagres e ensinamentos.
No dia de Pentecostes, cumpriu-se a promessa profética de Joel: o Espírito Santo desceu com poder para habitar permanentemente no coração de cada crente e inaugurar a dispensação da Igreja.
Examinamos os símbolos bíblicos de Suas operações: o Vento impetuoso que sopra com liberdade e regenera a alma, o Fogo que purifica e queima as impurezas, a Água viva que sacia a sede da alma, o Azeite da santa unção que consagra o ministério, e o Selo da promessa que garante a segurança eterna do salvo.
Estudamos os dons espirituais concedidos soberanamente para a edificação da Igreja e o precioso Fruto do Espírito detalhado em Gálatas cinco verso vinte e dois: amor, alegria, paz, longanimidade, benignidade, bondade, fidelidade, mansidão e domínio próprio.
Busque diariamente ser cheio do Espírito Santo e deixe a Sua presença transformar o seu viver.""",

    "escatologia": """Bem-vindos à aula magna da disciplina Estudos de Escatologia Bíblica: A Doutrina dos Últimos Acontecimentos, apresentada pela plataforma universitária Teologia Acessível.
A escatologia, do grego eschatos (último) e logos (estudo), descortina a revelação profética das Escrituras Sagradas sobre a consumação triunfal do plano soberano de Deus na história humana.
A esperança do cristão não reside neste mundo decadente e passageiro, mas na gloriosa promessa do retorno triunfal de nosso Senhor e Salvador Jesus Cristo.
Nesta aula completa, analisamos a sequência cronológica dos eventos proféticos finais:
Primeiro, os Sinais Precursores da Volta de Jesus descritos em Mateus vinte e quatro e Daniel doze: a multiplicação da apostasia, a intensificação de guerras, fomes, pestes e abalos sísmicos como dores de parto, o avanço vertiginoso do conhecimento científico e a evangelização de todas as nações.
Segundo, o Arrebatamento Iminente da Igreja: o momento secreto e glorioso em que os mortos em Cristo ressuscitarão primeiro e os crentes vivos serão transformados em um abrir e fechar de olhos, sendo arrebatados juntamente nos ares para encontrar com o Senhor.
Terceiro, o Tribunal de Cristo no céu para galardoamento das obras dos santos e as celebrações celestes das Bodas do Cordeiro.
Quarto, a Septuagésima Semana de Daniel ou a Grande Tribulação sobre a terra: um período de sete anos de juízos apocalípticos com o surgimento do Anticristo e do Falso Profeta.
Quinto, a Segunda Vinda de Cristo em Glória com Seus santos: todo olho o verá descendo sobre o Monte das Oliveiras para destruir o império das trevas na Batalha do Armagedom.
Sexto, o Milênio: o reinado terreno de Cristo por mil anos de paz absoluta, harmonia na natureza e justiça perfeita sobre toda a terra a partir de Jerusalém.
Sétimo, a rebelião final de Satanás e sua condenação eterna no Lago de Fogo, seguida pelo Juízo do Grande Trono Branco para os ímpios de todos os tempos.
E por fim, a criação do Novo Céu e da Nova Terra com a descida da radiante Nova Jerusalém, onde Deus habitará para sempre com os Seus remidos em eterna glória.
Maranata! Ora vem, Senhor Jesus!"""
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
    print("Iniciando gravação de 20 faixas de áudio completo (Módulos 11 a 20)...")
    asyncio.run(gravar_todos())
    print("Gravação de Módulos 11 a 20 concluída com sucesso!")
