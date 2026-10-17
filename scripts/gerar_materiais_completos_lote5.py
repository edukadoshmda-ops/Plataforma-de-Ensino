# -*- coding: utf-8 -*-
"""
Gerador de Compêndios Integrais e Audiobooks Completos - Lote 5
Teologia Acessível - Ensino Superior Livre
Módulos: Evangelismo Prático, Geografia Bíblica, Heresiologia,
         Administração Eclesiástica, Discipulado Bíblico.
"""
import os
import asyncio
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.pdfgen import canvas
import edge_tts

BASE_DIR = r"d:/Users/Users/eduka/Desktop/teologia-acessivel"
PDF_DIR = os.path.join(BASE_DIR, "public", "pdfs")
AUDIO_DIR = os.path.join(BASE_DIR, "public", "audio")

os.makedirs(PDF_DIR, exist_ok=True)
os.makedirs(AUDIO_DIR, exist_ok=True)

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        if self._pageNumber == 1:
            return
        self.saveState()
        self.setFont("Helvetica-Bold", 8)
        self.setFillColor(colors.HexColor("#0f2a43"))
        self.drawString(54, 752, "TEOLOGIA ACESSÍVEL  •  FORMAÇÃO TEOLÓGICA SUPERIOR")
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748b"))
        self.drawRightString(558, 752, "Compêndio Acadêmico Integral")
        
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.75)
        self.line(54, 744, 558, 744)
        
        self.line(54, 48, 558, 48)
        self.drawString(54, 36, "Teologia Acessível para Todos — Ensino Aberto e Gratuito")
        page_str = f"Página {self._pageNumber} de {page_count}"
        self.drawRightString(558, 36, page_str)
        self.restoreState()

def get_styles():
    styles = {}
    styles['CapaTitulo'] = ParagraphStyle(
        'CapaTitulo',
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=colors.HexColor("#0f2a43"),
        alignment=TA_CENTER,
        spaceAfter=12
    )
    styles['CapaSub'] = ParagraphStyle(
        'CapaSub',
        fontName='Helvetica',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor("#1c538e"),
        alignment=TA_CENTER,
        spaceAfter=18
    )
    styles['CapaChancela'] = ParagraphStyle(
        'CapaChancela',
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor("#d97706"),
        alignment=TA_CENTER,
        spaceAfter=15
    )
    styles['H1'] = ParagraphStyle(
        'H1',
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=16,
        textColor=colors.HexColor("#0f2a43"),
        spaceBefore=14,
        spaceAfter=6,
        keepWithNext=True
    )
    styles['H2'] = ParagraphStyle(
        'H2',
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=colors.HexColor("#1c538e"),
        spaceBefore=10,
        spaceAfter=4,
        keepWithNext=True
    )
    styles['Body'] = ParagraphStyle(
        'Body',
        fontName='Helvetica',
        fontSize=8.5,
        leading=12.5,
        textColor=colors.HexColor("#1e293b"),
        alignment=TA_JUSTIFY,
        spaceAfter=5
    )
    styles['Bullet'] = ParagraphStyle(
        'Bullet',
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor("#1e293b"),
        leftIndent=15,
        spaceAfter=3
    )
    return styles

def criar_capa(titulo, subtitulo, disciplina, styles):
    story = []
    story.append(Spacer(1, 100))
    box = [[
        Paragraph("TEOLOGIA ACESSÍVEL", ParagraphStyle('B1', fontName='Helvetica-Bold', fontSize=14, leading=18, textColor=colors.HexColor("#0f2a43"), alignment=TA_CENTER)),
    ], [
        Paragraph("PLATAFORMA UNIVERSITÁRIA DE ESTUDOS TEOLÓGICOS LIVRES", ParagraphStyle('B2', fontName='Helvetica-Bold', fontSize=8, leading=10, textColor=colors.HexColor("#d97706"), alignment=TA_CENTER)),
    ]]
    t = Table(box, colWidths=[400])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#f8fafc")),
        ('BOX', (0,0), (-1,-1), 1.5, colors.HexColor("#0f2a43")),
        ('PADDING', (0,0), (-1,-1), 12),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
    ]))
    story.append(t)
    story.append(Spacer(1, 60))
    story.append(Paragraph(titulo.upper(), styles['CapaTitulo']))
    story.append(HRFlowable(width="60%", thickness=2.5, color=colors.HexColor("#d97706"), spaceBefore=5, spaceAfter=18))
    story.append(Paragraph(subtitulo, styles['CapaSub']))
    story.append(Paragraph(f"Área Acadêmica: <b>{disciplina}</b>", styles['CapaChancela']))
    story.append(Spacer(1, 130))
    story.append(Paragraph(
        "Compêndio Acadêmico Completo • Edição Oficial Teologia Acessível<br/>"
        "Material didático integral para formação ministerial e estudo sistemático das Escrituras.<br/>"
        "Ano Acadêmico 2026 • Distribuição Aberta e Gratuita",
        ParagraphStyle('R1', fontName='Helvetica', fontSize=8.5, leading=12, textColor=colors.HexColor("#64748b"), alignment=TA_CENTER)
    ))
    story.append(PageBreak())
    return story

# 1. EVANGELISMO PRÁTICO
def compilar_evangelismo():
    arquivo = os.path.join(PDF_DIR, "evangelismo.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Evangelismo Prático", "A Grande Comissão, Metodologia de Abordagem, As 5 Verdades da Salvação e Conquista de Almas", "Missiologia & Ministério Pastoral", styles)

    story.append(Paragraph("I. A GRANDE COMISSÃO E A NATUREZA DO EVANGELISMO", styles['H1']))
    story.append(Paragraph(
        "O evangelismo não é uma atividade secundária ou mero departamento institucional, mas a razão de existir da Igreja militante (Mt 28:18-20; Mc 16:15). Do grego <i>euangelion</i> (boas novas de grande alegria), consiste na proclamação do perdão dos pecados e reconciliação com o Pai celestial através da morte expiatória e gloriosa ressurreição de Jesus Cristo. Jesus olhava para as multidões com profunda compaixão, vendo-as aflitas e exaustas como ovelhas que não têm pastor (Mt 9:36). O crente regenerado é investido como embaixador celestial munido da palavra da reconciliação (2 Co 5:20).",
        styles['Body']
    ))

    story.append(Paragraph("II. QUALIFICAÇÕES ESPIRITUAIS E ÉTICAS DO EVANGELIZADOR", styles['H1']))
    story.append(Paragraph(
        "1. <b>Certeza Inabalável da Salvação:</b> Ninguém pode conduzir outrem por um caminho que não conhece experimentalmente (1 Jo 1:1-3).<br/>"
        "2. <b>Amor Genuíno e Compaixão pelas Almas:</b> A motivação deve ser o amor sacrificial de Cristo, despido de qualquer soberba ou mero proselitismo religioso.<br/>"
        "3. <b>Vida de Oração e Plenitude do Espírito:</b> O novo nascimento é um milagre operado pelo Espírito Santo (Jo 16:8); portanto, o evangelista depende da unção do alto e não de mera retórica humana.<br/>"
        "4. <b>Manejo Preciso da Palavra:</b> Conhecimento seguro dos textos bíblicos da salvação para refutar dúvidas e esclarecer a mente do ouvinte (2 Tm 2:15).<br/>"
        "5. <b>Conduta Ética Irrepreensível:</b> A integridade pessoal autentica a mensagem proclamada.",
        styles['Body']
    ))

    story.append(Paragraph("III. AS CINCO VERDADES BÁSICAS DO PLANO DE SALVAÇÃO", styles['H1']))
    story.append(Paragraph(
        "• <b>1. O Amor e o Propósito Soberano de Deus:</b> Deus amou o mundo de tal maneira que deu Seu Filho Unigênito para conceder vida eterna (Jo 3:16; Jr 29:11).<br/>"
        "• <b>2. A Universalidade do Pecado e Separação:</b> Todos pecaram e destituídos estão da glória de Deus (Rm 3:23). O salário do pecado é a morte física e espiritual (Rm 6:23; Is 59:2).<br/>"
        "• <b>3. Jesus Cristo é o Único Redentor e Substituto:</b> Na cruz, Ele carregou nossos pecados em Seu próprio corpo (1 Pe 2:24; Is 53:5). Não há outro mediador entre Deus e os homens (1 Tm 2:5; Jo 14:6).<br/>"
        "• <b>4. A Salvação é Dom Gratuito da Graça mediante a Fé:</b> Obras de justiça não podem justificar o homem diante de Deus (Ef 2:8-9; Tt 3:5).<br/>"
        "• <b>5. A Necessidade de Decisão e Confissão Pública:</b> É preciso acolher a Cristo de todo o coração e confessá-lo perante os homens (Jo 1:12; Rm 10:9-10; Ap 3:20).",
        styles['Body']
    ))

    story.append(Paragraph("IV. ABORDAGEM PESSOAL, OBJEÇÕES E CONSOLIDAÇÃO", styles['H1']))
    story.append(Paragraph(
        "Na evangelização individual, deve-se demonstrar cordialidade e respeito, construindo pontes de diálogo. Diante de desculpas frequentes — como a alegação de hipocrisia de outros religiosos, o problema do sofrimento humano ou a falsa ideia de que 'há tempo suficiente no futuro' —, o evangelizador responde com mansidão, paciência e autoridade bíblica. Conduzida a pessoa à decisão voluntária por Cristo através da oração de fé, inicia-se de pronto o acolhimento no discipulado e na comunhão da igreja local.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Evangelismo compilado.")

# 2. GEOGRAFIA BÍBLICA
def compilar_geografia():
    arquivo = os.path.join(PDF_DIR, "geografia-biblica.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Geografia Bíblica", "O Cenário Físico da Revelação: O Crescente Fértil, Canaã, Montes, Mares e Rotas Apostólicas", "Arqueologia & História Bíblica", styles)

    story.append(Paragraph("I. O PALCO DA REVELAÇÃO: O CRESCENTE FÉRTIL", styles['H1']))
    story.append(Paragraph(
        "A Geografia Bíblica estuda o cenário hidrográfico, climático e orográfico onde se desdobrou a história da salvação. O Crescente Fértil abrigou a Mesopotâmia (regada pelos rios Tigre e Eufrates), onde se ergueram os impérios Sumério, Assírio, Babilônico e Persa, e o vale do Rio Nilo no Egito. A terra de Canaã representava um estreito corredor estratégico e comercial unindo os continentes da Ásia e África.",
        styles['Body']
    ))

    story.append(Paragraph("II. TOPOGRAFIA E DIVISÃO GEOGRÁFICA DE CANAÃ", styles['H1']))
    story.append(Paragraph(
        "1. <b>A Planície Costeira:</b> Banhada pelo Mar Mediterrâneo (Grande Mar), abrangendo a Planície Filístia, a Planície de Sarom e a planície de Aco.<br/>"
        "2. <b>A Cordilheira Central ou Região Montanhosa:</b> Colinas da Galileia ao norte, os montes de Samaria (Gerizim e Ebal) no centro, e a região montanhosa de Judá ao sul (Jerusalém, Belém e Hebrom).<br/>"
        "3. <b>O Vale da Fenda do Jordão (Ghor):</b> A mais profunda depressão tectônica do planeta, alimentada pelo Rio Jordão que nasce no Monte Hermom, atravessa o Mar da Galileia (Lago de Genesaré) e deságua no Mar Morto, a 390 metros abaixo do nível do mar.<br/>"
        "4. <b>O Planalto Oriental (Transjordânia):</b> Áreas históricas de Basã, Gileade, Moabe e Edom.",
        styles['Body']
    ))

    story.append(Paragraph("III. MONTES SAGRADOS E MARISCOS BÍBLICOS", styles['H1']))
    story.append(Paragraph(
        "• <b>Monte Sinai (Horebe):</b> O monte da aliança e da entrega da Lei mosaica no deserto.<br/>"
        "• <b>Monte Carmelo:</b> Local do confronto histórico de Elias contra os profetas de Baal (1 Rs 18).<br/>"
        "• <b>Monte das Oliveiras:</b> Local da oração de agonia no Getsêmani, da ascensão gloriosa de Cristo e de Sua profetizada volta corporal (Zc 14:4; At 1:11).<br/>"
        "• <b>Mar da Galileia:</b> Palco das pregações de Jesus, da multiplicação dos pães e da pacificação da tempestade.",
        styles['Body']
    ))

    story.append(Paragraph("IV. A EXPANSÃO MISSIONÁRIA NO NOVO TESTAMENTO", styles['H1']))
    story.append(Paragraph(
        "Do ambiente rural da Galileia e urbano de Jerusalém, o Evangelho irradiou-se para as metrópoles do Império Romano: Antioquia da Síria, Éfeso, Filipos, Tessalônica, Corinto, Atenas e Roma. As três grandes viagens do apóstolo Paulo através do Mediterrâneo demonstram a vitória do Evangelho sobre distâncias geográficas e barreiras socioculturais.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Geografia Bíblica compilado.")

# 3. HERESIOLOGIA
def compilar_heresiologia():
    arquivo = os.path.join(PDF_DIR, "heresiologia.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Heresiologia Bíblica", "O Discernimento Crítico das Seitas e Movimentos Heterodoxos à Luz das Escrituras", "Teologia Sistemática & Apologética", styles)

    story.append(Paragraph("I. CONCEITO E ANATOMIA DAS HERESIAS", styles['H1']))
    story.append(Paragraph(
        "Heresiologia (do grego <i>hairesis</i> = escolha sectária, facção doutrinária) é a disciplina que analisa e refuta ensinamentos heterodoxos que se desviam do cânon sagrado. As seitas possuem quatro marcas constantes: acréscimo de supostas revelações superiores à Bíblia, depreciação da divindade ou da humanidade de Jesus Cristo, salvação por méritos e obras humanas, e exclusivismo sectário radical.",
        styles['Body']
    ))

    story.append(Paragraph("II. ANÁLISE DOS PRINCIPAIS MOVIMENTOS HETERODOXOS", styles['H1']))
    story.append(Paragraph(
        "• <b>Unicismo / Modalismo:</b> Negação da doutrina da Trindade; alega que Deus é uma única pessoa que troca de máscaras ou modos. Refutação: Mt 3:16-17; Jo 14:16; 17:1-5.<br/>"
        "• <b>Testemunhas de Jeová (Russellismo):</b> Reedição do arrianismo condenado em Niceia (325 d.C.); ensinam que Cristo é uma criatura angélica e negam a deidade e personalidade do Espírito Santo. Refutação: Jo 1:1; Cl 1:16-17; Hb 1:8.<br/>"
        "• <b>Mormonismo:</b> Ensina o politeísmo, divindades de carne e ossos, e acrescenta o Livro de Mórmon ao cânon. Refutação: Is 43:10; Gl 1:8.<br/>"
        "• <b>Espiritismo Kardecista:</b> Defende a reencarnação sucessiva, evolução pessoal e contato mediúnico com os mortos. Refutação inequívoca em Hb 9:27 ('ao homem está ordenado morrer uma só vez, vindo depois o juízo') e Dt 18:10-12.<br/>"
        "• <b>Movimento da Nova Era:</b> Panteísmo sincrético oriental afirmando que 'tudo é Deus', destruindo o conceito de pecado pessoal e a necessidade de arrependimento.",
        styles['Body']
    ))

    story.append(Paragraph("III. O DEVER APOLOGÉTICO DA IGREJA", styles['H1']))
    story.append(Paragraph(
        "O apóstolo Judas exorta: 'Batalhai pela fé que uma vez foi entregue aos santos' (Jd 3). O crente não odeia os adeptos de seitas, mas trata-os com compaixão e graça, usando a espada afiada da Palavra de Deus para desatar as algemas da mentira e conduzi-los à luz de Jesus Cristo.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Heresiologia compilado.")

# 4. ADMINISTRAÇÃO ECLESIÁSTICA
def compilar_administracao():
    arquivo = os.path.join(PDF_DIR, "administracao-eclesiastica.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Administração Eclesiástica", "Governança Bíblica, Gestão Ministerial, Estrutura Legal e Organização da Igreja Local", "Teologia Prática & Gestão", styles)

    story.append(Paragraph("I. A TRÍPLICE DIMENSÃO DA IGREJA", styles['H1']))
    story.append(Paragraph(
        "A Igreja do Senhor subsiste em três dimensões integradas: <b>Espiritual</b> (organismo vivo e corpo místico de Cristo), <b>Orgânica e Comunitária</b> (assembleia local reunida para comunhão e adoração) e <b>Jurídico-Administrativa</b> (instituição regulada pela ordem civil e legal vigente). O apóstolo Paulo exorta que todas as coisas sejam feitas com decência e ordem (1 Co 14:40) e zelando pelo que é honesto não só diante do Senhor, mas também perante os homens (2 Co 8:21).",
        styles['Body']
    ))

    story.append(Paragraph("II. O MODELO BÍBLICO DE JETRO E MOISÉS (ÊXODO 18)", styles['H1']))
    story.append(Paragraph(
        "A centralização absoluta de poder no líder gera sobrecarga, cansaço físico e lentidão nas respostas comunitárias. Em Êxodo 18, o sábio conselho de Jetro estabelece o princípio atemporal da liderança compartilhada e da delegação: escolha de homens honestos, tementes a Deus, inimigos da avareza, para governar sobre milhares, centenas, cinquentas e dezenas, reservando à liderança principal a oração, a doutrina e as causas maiores.",
        styles['Body']
    ))

    story.append(Paragraph("III. FUNÇÕES CLÁSSICAS DA GESTÃO APLICADAS AO MINISTÉRIO", styles['H1']))
    story.append(Paragraph(
        "• <b>Planejamento Estratégico:</b> Definição clara de metas espirituais, visão missionária, calendário anual e orçamentos balanceados.<br/>"
        "• <b>Organização Estrutural:</b> Organograma da igreja, departamentos ministeriais (ensino, louvor, ação social, missões) e atribuições sem duplicidade de tarefas.<br/>"
        "• <b>Liderança Servidora:</b> Conduzir a congregação pelo exemplo piedoso e não por imposição autoritária (1 Pe 5:2-3).<br/>"
        "• <b>Coordenação e Comunicação:</b> Alinhamento constante de propósitos entre liderança pastoral, presbitério, diáconos e voluntários.<br/>"
        "• <b>Controle e Transparência:</b> Prestação pública periódica de contas, auditoria interna e equilíbrio contábil.",
        styles['Body']
    ))

    story.append(Paragraph("IV. CONFORMIDADE JURÍDICA E REGISTROS OBRIGATÓRIOS", styles['H1']))
    story.append(Paragraph(
        "Toda igreja deve ter seu Estatuto Social e Ata de Fundação registrados no Cartório Civil de Pessoas Jurídicas, inscrição ativa no CNPJ, diretoria eleita em dia, livro de atas arquivado, livro de rol de membros atualizado e registros contábeis idôneos em conformidade com as exigências fiscais do país.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Administração Eclesiástica compilado.")

# 5. DISCIPULADO BÍBLICO
def compilar_discipulado():
    arquivo = os.path.join(PDF_DIR, "discipulado.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Discipulado Bíblico", "Maturidade em Cristo, Disciplinas Espirituais, Comunhão Bíblica e Vida Cristã Triunfante", "Teologia Prática & Vida Cristã", styles)

    story.append(Paragraph("I. A NATUREZA DO DISCIPULADO BÍBLICO", styles['H1']))
    story.append(Paragraph(
        "A ordem soberana de Jesus em Mateus 28:19 não foi apenas registrar conversões, mas 'fazer discípulos'. No original grego, <i>mathetes</i> designa o aprendiz dedicado que assume o estilo de vida, o caráter e a doutrina do seu mestre. O discipulado não é um curso teórico provisório, mas o processo permanente de transformação do homem interior segundo a estatura da plenitude de Cristo (Ef 4:13; Rm 8:29).",
        styles['Body']
    ))

    story.append(Paragraph("II. A COMUNHÃO CRISTÃ AUTÊNTICA (KOINONIA)", styles['H1']))
    story.append(Paragraph(
        "A fé cristã não se vive em isolamento. A Igreja primitiva perseverava unânime na doutrina dos apóstolos, na comunhão fraterna (<i>koinonia</i>), no partir do pão e nas orações diárias (At 2:42). A verdadeira comunidade proporciona apoio emocional mútuo, restauração de vidas, correção amorosa e edificação contínua pelos dons ministeriais.",
        styles['Body']
    ))

    story.append(Paragraph("III. AS DISCIPLINAS ESPIRITUAIS PARA A MATURIDADE", styles['H1']))
    story.append(Paragraph(
        "• <b>Vida Devocional e Oração Perseverante:</b> Oração constante como oxigênio espiritual e intimidade viva com o Pai (1 Ts 5:17).<br/>"
        "• <b>Meditação Sistemática na Palavra:</b> Guardar o ensinamento bíblico na mente e no coração para resistir à tentação (Sl 119:11).<br/>"
        "• <b>Jejum Bíblico:</b> A disciplina de subjugar apetites materiais para intensificar a sensibilidade espiritual e o foco na intercessão (Mt 6:16-18).<br/>"
        "• <b>Mordomia Cristã Fiel:</b> Reconhecimento de que o Senhor é dono de tudo; somos apenas mordomos dos nossos talentos, tempo e bens materiais (1 Co 4:2; Ml 3:10).<br/>"
        "• <b>Santificação Ética e Prática:</b> Renúncia aos padrões corrosivos do presente século e cultivo do fruto do Espírito em integridade moral (Rm 12:1-2; Gl 5:22).",
        styles['Body']
    ))

    story.append(Paragraph("IV. PERSEVERANÇA DIANTE DO SOFRIMENTO E ESPERANÇA ETERNA", styles['H1']))
    story.append(Paragraph(
        "O discípulo maduro compreende que as aflições temporais produzem peso eterno de glória (2 Co 4:17). Apoia-se nas promessas infalíveis da vitória em Cristo, mantendo os olhos fitos na Nova Jerusalém, onde não haverá mais dor, nem lágrimas, nem morte.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Discipulado compilado.")

# =========================================================================
# AULAS COMPLETAS DE AUDIOBOOK (LOTE 5)
# =========================================================================
AULAS_LOTE5_AUDIO = {
    "evangelismo": """Bem-vindos à aula magna da disciplina Evangelismo Prático, pela plataforma universitária Teologia Acessível.
O evangelismo é o pulsar indispensável da Igreja de Cristo na terra.
A Grande Comissão outorgada por Jesus em Mateus 28 e Marcos 16 é um mandamento soberano para que alcancemos todas as nações com as boas novas da salvação.
Nesta aula expositiva, estudamos os requisitos espirituais do evangelizador: a certeza absoluta de sua própria salvação, o amor fervoroso pelas almas perdidas a exemplo de Jesus ao olhar para as multidões aflitas, uma vida de oração regada pelo poder do Espírito Santo, o domínio doutrinário das Escrituras e um testemunho ético irrepreensível.
Dominamos os cinco pilares essenciais do plano divino de redenção: primeiro, o amor imensurável de Deus pelo ser humano; segundo, a realidade trágica do pecado que produz separação e condenação espiritual; terceiro, o sacrifício vicário de Cristo Jesus na cruz do Calvário como único mediador entre Deus e os homens; quarto, a justificação graciosa recebida pela fé sem o mérito das obras humanas; e quinto, a necessidade inegociável de uma decisão sincera e confissão pública de fé.
Aprenda a superar com mansidão e clareza apologética as dúvidas e desculpas frequentes no contato pessoal, conduzindo pessoas à oração de entrega e integrando-as de imediato na comunhão e no discipulado da igreja local.
Seja um embaixador zeloso do Reino dos Céus e cumpra com fidelidade a sua sublime vocação.""",

    "geografia_biblica": """Bem-vindos à aula completa de Geografia Bíblica e Contexto Histórico, apresentada pela Teologia Acessível.
Compreender o cenário geográfico das Escrituras é abrir uma janela luminosa sobre os episódios mais marcantes da revelação divina.
Iniciamos nossa jornada pelo Crescente Fértil, a faixa fértil estendida entre a Mesopotâmia dos rios Tigre e Eufrates e o delta do Rio Nilo no Egito.
A terra prometida de Canaã ocupava posição estratégica como ponte comercial e militar entre os impérios da antiguidade.
Examinamos a rica topografia da Palestina, estruturada em quatro zonas fundamentais: a Planície Costeira marítima, a Cordilheira Central das colinas de Samaria e da Judeia, o imenso Vale da Fenda do Rio Jordão que deságua no Mar Morto nas mais profundas depressões do planeta, e o planalto oriental da Transjordânia.
Contemple os montes santos: o Monte Sinai, onde a Lei foi entregue; o Monte Carmelo, onde o fogo de Deus desceu ao clamor de Elias; e o Monte das Oliveiras, santuário das orações de Cristo e local de Sua gloriosa ascensão e futuro retorno triunfal.
Acompanhe os passos terrenos do Messias pelas cidades da Galileia e as grandes viagens marítimas do apóstolo Paulo pelo Mar Mediterrâneo rumo à capital do Império Romano.
A história bíblica torna-se viva e palpável quando você conhece o solo sagrado onde Deus falou aos homens.""",

    "heresiologia": """Bem-vindos à aula expositiva da disciplina Heresiologia Bíblica, ministrada pela plataforma Teologia Acessível.
Desde os primórdios da fé cristã, o apóstolo Paulo e os discípulos advertiram a Igreja sobre o perigo iminente dos falsos mestres, lobos vorazes e heresias destruidoras que tentam desvirtuar o rebanho da verdade.
Heresia deriva do grego e expressa facção, escolha particular e separação da sã doutrina revelada.
Nesta aula magna, analisamos a anatomia universal das seitas heterodoxas, fundamentada em quatro pilares enganosos: o acréscimo de livros e supostas revelações superiores à Bíblia Sagrada, a distorção da divindade ou da perfeita humanidade de Jesus Cristo, a salvação adquirida por ritos e obras humanas, e o exclusivismo sectário de que apenas o seu pequeno círculo alcançará a salvação.
Examinamos e refutamos biblicamente os grandes desvios históricos: o Unicismo e Modalismo que negam a Trindade eterna; o antigo Arrianismo reeditado pelas Testemunhas de Jeová que reduzem o Verbo Eterno a uma criatura; o Mormonismo e seu politeísmo com livros suplementares; o Espiritismo Kardecista e sua crença na reencarnação, categoricamente refutada pela verdade de Hebreus capítulo 9 verso 27; e o misticismo relativista do Movimento Nova Era.
O ministro e pesquisador cristão não deve agir com desprezo aos enganados, mas batalhar pela fé com firmeza acadêmica, graça compassiva e autoridade bíblica incontestável.""",

    "administracao_eclesiastica": """Bem-vindos à aula completa de Administração Eclesiástica e Governança Ministerial, pela plataforma Teologia Acessível.
A Igreja do Deus Vivo é um organismo espiritual vivo e sobrenatural, mas é também uma instituição estabelecida na sociedade civil que exige integridade, planejamento e perfeita ordem administrativa.
Inspiramo-nos no conselho clássico de Jetro a Moisés no capítulo dezoito do livro de Êxodo, que estabeleceu o princípio milenar da liderança descentralizada e da escolha de homens idôneos, fiéis, tementes a Deus e avessos à avareza para gerir a comunidade.
Estudamos as funções vitais da administração aplicadas com sabedoria à vida ministerial: o planejamento orçamentário e espiritual, a estruturação de organogramas sem sobreposição de tarefas, a liderança servidora pautada no exemplo moral e não no domínio arbitrário, e o controle transparente das finanças sagradas por meio de relatórios claros e auditorias periódicas.
Abordamos também as obrigações jurídicas e estatutárias no ordenamento legal: o registro formal dos Estatutos Sociais em cartório civil de pessoas jurídicas, a regularidade da inscrição do CNPJ, as atas de eleição e posse de diretorias, e a guarda responsável do rol de membros e dos livros de registros.
Uma governança ministerial santa e transparente glorifica ao Senhor e assegura testemunho irrepreensível perante a congregação e a sociedade.""",

    "discipulado": """Bem-vindos à aula magna da disciplina Discipulado Bíblico e Vida Cristã, apresentada pela plataforma universitária Teologia Acessível.
Jesus Cristo não convocou Sua Igreja para simplesmente contabilizar adeptos formais, mas ordenou categoricamente: fazei discípulos de todas as nações.
O discípulo bíblico é o aprendiz apaixonado que se assenta aos pés do Mestre, renuncia a si mesmo e assume o Seu caráter e Seus mandamentos como bússola de vida.
Nesta aula abrangente, estudamos a dinâmica viva da Koinonia — a comunhão fraternal autêntica praticada pela Igreja Primitiva em Atos dos Apóstolos, com partilha de vida, oração mútua e restauração contínua.
Mergulhamos nas disciplinas espirituais indispensáveis para o amadurecimento cristão: a oração perseverante em secreto, o estudo e memorização profunda da Palavra de Deus, a prática bíblica do jejum que quebra a altivez da carne para aguçar os sentidos espirituais, a mordomia consagrada do tempo e das finanças, e a santificação prática no lar e na sociedade contemporânea.
Compreendemos também a teologia do sofrimento bíblico, sabendo que as provações temporais aperfeiçoam o nosso caráter para a eternidade.
Avance com determinação rumo à plena estatura de Cristo e seja um discípulo multiplicador da verdade de Deus."""
}

async def gerar_audio_edge(texto, arquivo_saida, voz):
    try:
        comunicador = edge_tts.Communicate(texto, voz, rate="-2%")
        await comunicador.save(arquivo_saida)
        print(f"Áudio gerado: {os.path.basename(arquivo_saida)} ({voz})")
    except Exception as e:
        print(f"Erro em {voz}: {e}")

async def gravar_todos():
    tarefas = []
    for chave, texto in AULAS_LOTE5_AUDIO.items():
        arq_m = os.path.join(AUDIO_DIR, f"{chave}_masculino.mp3")
        arq_f = os.path.join(AUDIO_DIR, f"{chave}_feminino.mp3")
        tarefas.append(gerar_audio_edge(texto, arq_m, "pt-BR-AntonioNeural"))
        tarefas.append(gerar_audio_edge(texto, arq_f, "pt-BR-FranciscaNeural"))
    await asyncio.gather(*tarefas)

if __name__ == "__main__":
    print("--- COMPILANDO LOTE 5: COMPÊNDIOS INTEGRAIS ---")
    compilar_evangelismo()
    compilar_geografia()
    compilar_heresiologia()
    compilar_administracao()
    compilar_discipulado()
    print("--- COMPÊNDIOS COMPILADOS COM SUCESSO ---")

    print("--- GRAVANDO AULAS COMPLETAS EM ÁUDIO (LOTE 5) ---")
    asyncio.run(gravar_todos())
    print("--- GRAVAÇÕES FINALIZADAS COM SUCESSO ---")
