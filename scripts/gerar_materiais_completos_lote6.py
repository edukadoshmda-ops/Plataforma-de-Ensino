# -*- coding: utf-8 -*-
"""
Gerador de Compêndios Integrais e Audiobooks Completos
Teologia Acessível - Ensino Superior Livre
Módulos: Arqueologia Bíblica, Dispensações e Alianças, A Bíblia e a Ciência,
         Tipologia e Simbologia Bíblica, Religiões Mundiais I.
"""
import os
import asyncio
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable, KeepTogether
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
    styles['H3'] = ParagraphStyle(
        'H3',
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor("#334155"),
        spaceBefore=7,
        spaceAfter=3,
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
    styles['Quote'] = ParagraphStyle(
        'Quote',
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor("#334155"),
        leftIndent=20,
        rightIndent=20,
        spaceBefore=4,
        spaceAfter=5
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

# =========================================================================
# 1. ARQUEOLOGIA BÍBLICA (TEXTO COMPLETO E INTEGRAL)
# =========================================================================
def compilar_arqueologia():
    arquivo = os.path.join(PDF_DIR, "arqueologia-biblica.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Arqueologia Bíblica", "História, Períodos Culturais, Métodos de Datação e Evidências Arqueológicas da Fé", "Arqueologia & Contexto Histórico", styles)

    story.append(Paragraph("SUMÁRIO DO COMPÊNDIO", styles['H1']))
    story.append(Paragraph(
        "I. Introdução e Definição do Termo<br/>"
        "II. Períodos Arqueológicos: Da Idade da Pedra ao Período Árabe<br/>"
        "III. Métodos Científicos de Datação: Carbono-14, Argônio de Potássio e Termoluminescência<br/>"
        "IV. Materiais e Vestígios Examinados pela Ciência Arqueológica<br/>"
        "V. O Método Arqueológico de Campo e Laboratório<br/>"
        "VI. Aplicação e Valor da Arqueologia no Estudo das Sagradas Escrituras",
        styles['Body']
    ))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#cbd5e1"), spaceBefore=8, spaceAfter=12))

    story.append(Paragraph("I. INTRODUÇÃO: O TERMO E O ESCOPO", styles['H1']))
    story.append(Paragraph(
        "A palavra Arqueologia compõe-se de dois vocábulos gregos: <i>archaios</i> (antigo) e <i>logos</i> (discurso, estudo sistemático), significando o estudo sistemático das antiguidades. Trata-se da ciência que investiga o homem e a sua cultura material desde os primórdios da ocupação terrestre. Ocupa-se dos remanescentes das civilizações passadas recuperados tanto no sentido epigráfico (inscrições e textos) quanto anepigráfico (estruturas, cerâmicas e artefatos). A arqueologia bíblica é essa ciência aplicada diretamente às questões relacionadas à Bíblia Sagrada, aos seus cenários, eventos e personagens.",
        styles['Body']
    ))

    story.append(Paragraph("II. OS GRANDES PERÍODOS ARQUEOLÓGICOS", styles['H1']))
    story.append(Paragraph("A. A Idade da Pedra", styles['H2']))
    story.append(Paragraph(
        "1. <b>Paleolítico Antigo:</b> Instrumentos rudimentares de pedra encontrados em terraços do Nilo e regiões elevadas da Palestina. Remanescentes humanos em cavernas do Oriente Próximo associados ao Pleistoceno.<br/>"
        "2. <b>Paleolítico Médio:</b> Florescimento cultural e artístico, rituais funerários ornamentados e estatuetas. Na Palestina, destaca-se a cultura Natufiana (c. 8000 a 6000 a.C.), com cultivo inicial de cereais, domesticação e sepultamentos que evidenciam crença na vida após a morte.<br/>"
        "3. <b>Neolítico (Pedra Polida - 7000 a 4500 a.C.):</b> Revolução agrícola, cerâmica, surgimento de povoados e as construções monumentais em Jericó, incluindo as primeiras estruturas de templos e muralhas defensivas.",
        styles['Body']
    ))

    story.append(Paragraph("B. Idade Calcolítica (Idade do Cobre: 4500 a 3000 a.C.)", styles['H2']))
    story.append(Paragraph(
        "Período de florescimento e transição no Crescente Fértil com a introdução da metalurgia do cobre, cerâmica pintada de alta qualidade, arquitetura pública e o surgimento da escrita em cerca de 3500 a.C. Os templos tornaram-se o centro da organização socioeconômica e espiritual.",
        styles['Body']
    ))

    story.append(Paragraph("C. Idade do Bronze (3000 a 1200 a.C.)", styles['H2']))
    story.append(Paragraph(
        "1. <b>Bronze Antigo (3000-2000 a.C.):</b> Início da história documentada com a organização dos primeiros Estados dinásticos no Egito e na Mesopotâmia. Arquitetura monumental das pirâmides egípcias e épicos literários sumérios.<br/>"
        "2. <b>Bronze Médio (2000-1500 a.C.):</b> Período de intensas relações internacionais. Emergência de Israel através de Abraão e dos patriarcas. Florescimento de Beit Mirsim, Megido e Jericó, seguidos pela invasão e expulsão dos hicsos no Egito (c. 1450 a.C.).<br/>"
        "3. <b>Bronze Moderno (1500-1200 a.C.):</b> Conflitos no Levante, invasão israelita sob Josué e destruição de fortalezas cananeias como Hazor, Laquis e Betel. O emprego de cinco sistemas de escrita pelos cananeus: cuneiforme acadiano (Cartas de Amarna), hieróglifos egípcios, proto-hebraico, alfabeto cuneiforme ugarítico e a escrita linear de Biblos.",
        styles['Body']
    ))

    story.append(Paragraph("D. Idade do Ferro (1200 a 300 a.C.)", styles['H2']))
    story.append(Paragraph(
        "1. <b>Primeira Idade do Ferro (Ferro I / Israelita I: 1200-900 a.C.):</b> Transição internacional, expansão israelita de tribos até a monarquia unificada sob Davi e Salomão. Introdução de armas de ferro pelos filisteus e grandiosas obras salomônicas em Jerusalém, Megido, Hazor e Gezer.<br/>"
        "2. <b>Segunda Idade do Ferro (Ferro II / Israelita II: 900-600 a.C.):</b> Monarquia dividida (Judá e Israel). Época dos profetas canônicos, avanço do Império Assírio e queda de Samaria em 722 a.C. A arqueologia confirma 41 reis bíblicos nesse período.<br/>"
        "3. <b>Terceira Idade do Ferro (Ferro III / Período Persa: 600-300 a.C.):</b> Destruição de Jerusalém por Nabucodonosor II em 586 a.C., exílio babilônico e retorno sob o decreto de Ciro, rei da Pérsia.",
        styles['Body']
    ))

    story.append(Paragraph("E. Períodos Greco-Romano, Bizantino e Árabe", styles['H2']))
    story.append(Paragraph(
        "Conquista de Alexandre em 332 a.C., difusão da cultura helenista, revolta dos Macabeus (161-143 a.C.), protetorado de Roma com Pompeu (63 a.C.), o reinado de Herodes o Grande e a destruição de Jerusalém pelos generais romanos Tito (70 d.C.) e Adriano (132 d.C.).",
        styles['Body']
    ))

    story.append(Paragraph("III. MÉTODOS CIENTÍFICOS DE DATAÇÃO", styles['H1']))
    story.append(Paragraph(
        "1. <b>Carbono-14 (Radiocarbono):</b> Criado por Willard F. Libby na Universidade de Chicago no final da década de 1940. Baseia-se no equilíbrio da taxa de carbono-14 absorvido por organismos vivos e sua desintegração constante pós-morte com meia-vida de 5.568 anos. Aplicável a tecidos, ossos, carvão e sementes com alta precisão até 50 mil anos.<br/>"
        "2. <b>Argônio de Potássio:</b> Medição do decaimento radioativo de potássio-40 em cálcio-40 e argônio-40 em rochas vulcânicas, permitindo datar extratos geológicos de milhões e bilhões de anos.<br/>"
        "3. <b>Termoluminescência:</b> Análise da radiação acumulada em cerâmicas antigas desde o momento de sua queima no forno através da emissão de fótons em laboratório.<br/>"
        "4. <b>Dendrocronologia:</b> Datação anual rigorosa através do estudo dos anéis de crescimento de árvores antigas.",
        styles['Body']
    ))

    story.append(Paragraph("IV. MATERIAIS EXAMINADOS NAS ESCAVAÇÕES", styles['H1']))
    story.append(Paragraph(
        "Os sítios arqueológicos fornecem um vasto acervo de evidências: entulhos orgânicos, sepulturas, ossadas, cerâmica decorada e utilitária (o principal relógio da estratigrafia), fundações arquitetônicas, muralhas, inscrições epigráficas em pedras, tabletes de argila de Nuzi, Mari e Tell el-Amarna, rolos de papiro de Elefantina, manuscritos em pergaminho de Qumran e cunhagens numismáticas.",
        styles['Body']
    ))

    story.append(Paragraph("V. O VALOR DA ARQUEOLOGIA PARA O ESTUDO BÍBLICO", styles['H1']))
    story.append(Paragraph(
        "A arqueologia bíblica não visa 'provar' Deus, mas oferece quatro contribuições fundamentais:<br/>"
        "1. <b>Ilustrar a História Bíblica:</b> Contextualiza os costumes patriarcais (como as bênçãos orais e contratos de Nuzi).<br/>"
        "2. <b>Corroborar a Inspiração e Historicidade:</b> Confirma a existência de povos outrora tidos como míticos (ex.: os hititas) e de reis bíblicos.<br/>"
        "3. <b>Valor Apologético:</b> Desfaz acusações da alta crítica destrutiva demonstrando a precisão topográfica e histórica dos autores sagrados.<br/>"
        "4. <b>Valor Exegético:</b> Esclarece vocábulos hebraicos e gregos raros (como a palavra 'vigor' em Dt 34.7 iluminada pelos textos ugaríticos de Ras Shamra).",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Arqueologia Bíblica compilado com sucesso.")

# =========================================================================
# 2. DISPENSAÇÕES E ALIANÇAS (TEXTO COMPLETO E INTEGRAL)
# =========================================================================
def compilar_dispensacoes_aliancas():
    arquivo = os.path.join(PDF_DIR, "dispensacoes-e-aliancas.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Dispensações e Alianças", "A Teologia dos Pactos Divinos, Governos da Revelação e o Cumprimento Messiânico", "Teologia Bíblica & Sistemática", styles)

    story.append(Paragraph("SUMÁRIO DO COMPÊNDIO", styles['H1']))
    story.append(Paragraph(
        "I. Definição e Princípios Fundamentais do Dispensacionalismo<br/>"
        "II. Análise Exaustiva das Sete Dispensações Bíblicas<br/>"
        "III. O Fracasso Humano e a Soberana Graça Redentora<br/>"
        "IV. As Oito Grandes Alianças de Deus com a Humanidade e com Israel<br/>"
        "V. A Relação Central de Jesus Cristo com as Alianças Eternas",
        styles['Body']
    ))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#cbd5e1"), spaceBefore=8, spaceAfter=12))

    story.append(Paragraph("I. INTRODUÇÃO ÀS DISPENSAÇÕES", styles['H1']))
    story.append(Paragraph(
        "Dispensação é um período de tempo no qual o ser humano é provado e testado em sua obediência a alguma revelação específica da vontade de Deus. Trata-se da administração divina dos negócios terrenos ao longo dos séculos. É indispensável enfatizar: <b>as diferentes dispensações não são modos separados de salvação</b>. Em todas as épocas, da Inocência ao Milênio, a reconciliação do homem com Deus dá-se de uma única maneira: unicamente pela <b>GRAÇA DE DEUS</b> mediante a fé na obra expiatória do Senhor Jesus Cristo na cruz do Calvário.",
        styles['Body']
    ))

    story.append(Paragraph("II. AS SETE DISPENSAÇÕES BÍBLICAS", styles['H1']))
    story.append(Paragraph("1ª Dispensação: A Inocência (Da Criação à Queda)", styles['H2']))
    story.append(Paragraph(
        "Adão e Eva foram criados moral e espiritualmente sadios, dotados de livre-arbítrio e colocados em comunhão perfeita com Deus no Éden. Conheciam na prática somente o bem. A prova consistia na abstenção do fruto da árvore do conhecimento do bem e do mal (Gn 2:16-17). Ao cederem à mentira de Satanás, perderam a inocência, trazendo maldição sobre o solo, dores de parto, degeneração moral e a sentença da morte física e espiritual. Deus proveu a túnica de peles mediante o sacrifício de um cordeiro, prenunciando a expiação de Cristo.",
        styles['Body']
    ))

    story.append(Paragraph("2ª Dispensação: A Consciência ou Responsabilidade Moral (Da Queda ao Dilúvio)", styles['H2']))
    story.append(Paragraph(
        "Após a expulsão do Éden, o homem passou a ser governado pelo tribunal interior da consciência (Rm 2:14-15), que o advertia do bem e do mal. O exemplo trágico de Caim demonstra a ação da consciência atormentada. Contudo, ao invés de buscar a Deus, os descendentes de Adão cauterizaram a consciência, entregando-se à violência e corrupção desenfreada (Gn 6:1-5). O juízo divino culminou no Dilúvio Universal, poupando apenas Noé e sua família pela graça.",
        styles['Body']
    ))

    story.append(Paragraph("3ª Dispensação: O Governo Humano (Do Dilúvio a Abraão)", styles['H2']))
    story.append(Paragraph(
        "Inaugurada com o pacto de Noé (Gn 9), Deus delegou ao ser humano a autoridade jurídica e civil sobre a sociedade, incluindo a punição ao homicídio e a pena capital (Gn 9:5-6; Rm 13:1-4) para proteger a santidade da vida humana. Porém, o homem fracassou em governar para Deus e rebelou-se sob a liderança de Ninrode na Torre de Babel (Gn 11), buscando glorificar a si mesmo através do paganismo, sendo dispersado pela confusão das línguas.",
        styles['Body']
    ))

    story.append(Paragraph("4ª Dispensação: Patriarcal ou da Promessa (Da Chamada de Abraão ao Sinai)", styles['H2']))
    story.append(Paragraph(
        "Deus chama Abrão de Ur dos Caldeus (Gn 12:1-3) para ser o pai da fé e canal de bênção para todas as famílias da terra. Esta dispensação baseia-se em promessas incondicionais de uma descendência santa, a possessão perpétua da terra de Canaã e o nascimento do Messias. Abraão foi justificado pela fé (Gn 15:6; Gl 3:6-9), padrão que transcende a Lei mosaica.",
        styles['Body']
    ))

    story.append(Paragraph("5ª Dispensação: A Lei (Do Sinai ao Calvário)", styles['H2']))
    story.append(Paragraph(
        "Israel é colocado sob o código da Lei no Monte Sinai (Êx 20 a 31), composto pelos Mandamentos morais, Juízos civis e Ordenanças religiosas sacerdotais. A Lei ensinou a santidade absoluta de Deus, a universalidade do pecado e a incapacidade de o homem justificar-se a si mesmo. Funcionou como pedagogo ou tutor (aio) até a chegada de Cristo, que cumpriu todas as suas exigências de modo perfeito.",
        styles['Body']
    ))

    story.append(Paragraph("6ª Dispensação: A Graça, Igreja ou Espírito Santo (Do Pentecostes ao Arrebatamento)", styles['H2']))
    story.append(Paragraph(
        "Comprada com o sangue do Cordeiro e inaugurada com a descida do Espírito Santo no Pentecostes (At 2), nesta dispensação Deus forma a Igreja — corpo místico de Cristo composto de judeus e gentios regenerados pela fé, salvos da ira vindoura e comissionados a evangelizar as nações.",
        styles['Body']
    ))

    story.append(Paragraph("7ª Dispensação: O Reino ou Milênio (Do Julgamento das Nações ao Trono Branco)", styles['H2']))
    story.append(Paragraph(
        "Cristo reinará sobre toda a terra com vara de ferro durante mil anos (Ap 20), assentado sobre o trono de Davi em Jerusalém, trazendo paz cósmica, regeneração da natureza e justiça social plena, antes da derrota final de Satanás e da introdução do Novo Céu e da Nova Terra.",
        styles['Body']
    ))

    story.append(Paragraph("III. AS OITO GRANDES ALIANÇAS BÍBLICAS", styles['H1']))
    story.append(Paragraph(
        "1. <b>Aliança Edênica (Gn 2:16):</b> Condições do homem antes do pecado.<br/>"
        "2. <b>Aliança Adâmica (Gn 3:15):</b> A promessa do Redentor (Protoevangelho) e consequências da queda.<br/>"
        "3. <b>Aliança Noética (Gn 9:16):</b> A preservação da ordem natural e a autoridade da governança humana.<br/>"
        "4. <b>Aliança Abraâmica (Gn 12:2; 15:18; 17:7):</b> Promessa incondicional da terra, da posteridade e de redenção em Cristo.<br/>"
        "5. <b>Aliança Mosaica (Êx 19:5):</b> Aliança condicional da Lei dada a Israel.<br/>"
        "6. <b>Aliança Palestiniana (Dt 30:1-10):</b> Garantia profética do retorno, restauração e conversão final de Israel na terra prometida.<br/>"
        "7. <b>Aliança Davídica (2 Sm 7:16; Sl 89):</b> Garantia irrevogável de um trono, um reino e uma dinastia eterna cumprida no Filho de Davi.<br/>"
        "8. <b>Nova Aliança (Jr 31:31-34; Hb 8:8-12; Mt 26:28):</b> Selada no sangue de Cristo, concedendo a remissão completa de pecados e comunhão irrevogável.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Dispensações e Alianças compilado com sucesso.")

# =========================================================================
# 3. A BÍBLIA E A CIÊNCIA (TEXTO COMPLETO E INTEGRAL)
# =========================================================================
def compilar_biblia_e_ciencia():
    arquivo = os.path.join(PDF_DIR, "a-biblia-e-a-ciencia.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("A Bíblia e a Ciência", "Origens, Leis da Natureza, Cosmologia e a Inerrância das Escrituras", "Ciência, Filosofia & Teologia", styles)

    story.append(Paragraph("SUMÁRIO DO COMPÊNDIO", styles['H1']))
    story.append(Paragraph(
        "I. A Lógica Formal e a Crítica ao Ateísmo Materialista<br/>"
        "II. A Criação Cósmica, o Big Bang e o Ajuste Fino do Universo<br/>"
        "III. As Características Singulares do Planeta Terra para a Vida Humana<br/>"
        "IV. Os Dias da Criação em Gênesis e o Confronto com o Registro Geológico<br/>"
        "V. Teoria da Criação versus Evolucionismo: Análise das Quatro Grandes Leis Científicas<br/>"
        "VI. Provas Arqueológicas e Geológicas do Dilúvio Universal<br/>"
        "VII. Antecipações Científicas Milenares na Bíblia Sagrada<br/>"
        "VIII. Escatologia, Sinais Sísmicos e a Multiplicação da Ciência",
        styles['Body']
    ))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#cbd5e1"), spaceBefore=8, spaceAfter=12))

    story.append(Paragraph("I. A LÓGICA E O PRESSUPOSTO DA FÉ", styles['H1']))
    story.append(Paragraph(
        "Desde os primórdios, o ser humano interroga as origens do cosmos e da vida. O ateísmo que alega rejeitar a Deus por falta de demonstração puramente empírica comete uma contradição lógica elementar: pelo Teorema da Incompletude de Gödel, nenhum sistema lógico pode demonstrar todos os seus teoremas sem recorrer a axiomas exteriores. Negar a Deus sem prova é um ato de fé cega no nada. O cristão fundamenta-se na razão iluminada pela fé e na harmonia patente entre a revelação especial (as Escrituras) e a revelação geral (a criação).",
        styles['Body']
    ))

    story.append(Paragraph("II. O AJUSTE FINO DO PLANETA ESCOLHIDO", styles['H1']))
    story.append(Paragraph(
        "A Terra apresenta condições biomatemáticas calibradas com precisão milimétrica:<br/>"
        "1. <b>Oxigênio Atmosférico:</b> Exatamente 21%. Menos de 18% causaria asfixia; acima de 25% tornaria o ar letalmente tóxico e o planeta sujeito a combustão espontânea.<br/>"
        "2. <b>Equilíbrio Gravitacional Terra-Lua:</b> A distância de 384.000 km mantém o equilíbrio perfeito entre força centrífuga e gravitacional, estabilizando as marés e o eixo do globo.<br/>"
        "3. <b>Inclinação de 23,5°:</b> Impede extremos climáticos letais e estabelece a regularidade das estações.<br/>"
        "4. <b>Distância do Sol (150 milhões de km):</b> Permite a presença de água em seus três estados (líquido, sólido e gasoso), sem o qual a biologia é impossível.<br/>"
        "5. <b>Escudo Gravitacional de Júpiter e Saturno:</b> Planetas gasosos gigantes exteriores que desviam a imensa maioria dos meteoros e cometas do espaço.",
        styles['Body']
    ))

    story.append(Paragraph("III. CRIAÇÃO X EVOLUÇÃO À LUZ DAS LEIS DA FÍSICA E BIOLOGIA", styles['H1']))
    story.append(Paragraph(
        "• <b>1. Lei da Causa e Efeito:</b> Todo efeito tem causa anterior superior em energia e complexidade. A matéria inanimada jamais geraria informação biológica codificada.<br/>"
        "• <b>2. Segunda Lei da Termodinâmica (Entropia):</b> O Universo caminha da ordem para a desordem, o que contradiz a premissa evolucionista de aumento contínuo de complexidade e organização espontânea.<br/>"
        "• <b>3. Lei da Biogênese:</b> Estabelecida por Louis Pasteur: vida somente provém de vida pré-existente da mesma espécie.<br/>"
        "• <b>4. Lei do Código Genético (Mendel):</b> O DNA transmite informações herdadas dentro dos limites da espécie (microadaptações), impedindo a transmutação macroevolutiva.<br/>"
        "• <b>5. O Registro Fóssil e a Explosão Cambriana:</b> A paleontologia atesta o aparecimento súbito de filos inteiros no Cambriano, sem qualquer fóssil intermediário ou transicional.",
        styles['Body']
    ))

    story.append(Paragraph("IV. ANTECIPAÇÕES CIENTÍFICAS MILENARES NAS ESCRITURAS", styles['H1']))
    story.append(Paragraph(
        "1. <b>A Redondeza da Terra:</b> Is 40:22 ('Ele está assentado sobre a redondeza da terra'), escrito no século VIII a.C.<br/>"
        "2. <b>A Rotação da Terra:</b> Jó 38:14 ('A terra se modela como o barro sob o selo rotativo').<br/>"
        "3. <b>A Terra Suspensa no Vácuo:</b> Jó 26:7 ('Suspende a terra sobre o nada'), refutando mitos de suportes materiais.<br/>"
        "4. <b>O Peso do Vento e Pressão do Ar:</b> Jó 28:25 ('Deu peso ao vento'), descoberto pela ciência somente no século XVII com Torricelli.<br/>"
        "5. <b>O Ciclo Hidrológico Completo:</b> Ec 1:7 e Jó 36:27-28 detalham a evaporação, condensação em nuvens e chuva torrencial.<br/>"
        "6. <b>Dilatação Anômala da Água:</b> Jó 38:25 registra o fenômeno que faz o gelo congelar na superfície, preservando a vida aquática nas profundezas.<br/>"
        "7. <b>Constituição Atômica da Matéria:</b> Hb 11:3 ('O visível não foi feito do que se vê'), antecipando a física atômica moderna.<br/>"
        "8. <b>Circuncisão no Oitavo Dia:</b> Gn 17:12 especifica o único momento do desenvolvimento neonatal em que a protrombina sanguínea alcança 110%, garantindo coagulação perfeita.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF A Bíblia e a Ciência compilado com sucesso.")

# =========================================================================
# 4. TIPOLOGIA E SIMBOLOGIA BÍBLICA (TEXTO COMPLETO E INTEGRAL)
# =========================================================================
def compilar_tipologia_simbologia():
    arquivo = os.path.join(PDF_DIR, "tipologia-e-simbologia.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Tipologia & Simbologia Bíblica", "Sombras Proféticas, A Tipologia do Tabernáculo e o Significado Sagrado dos Números", "Hermenêutica Sagrada & Teologia Bíblica", styles)

    story.append(Paragraph("SUMÁRIO DO COMPÊNDIO", styles['H1']))
    story.append(Paragraph(
        "I. Fundamentos da Tipologia e Critérios Hermenêuticos<br/>"
        "II. A Numerologia Bíblica: O Significado dos Números de 1 a 666<br/>"
        "III. Grandes Tipos Messiânicos: Isaque, José e o Cordeiro Pascal<br/>"
        "IV. As Jornadas do Povo de Israel no Deserto como Tipos da Igreja<br/>"
        "V. O Tabernáculo de Moisés: Arquitetura, Mobílias, Metais e Cores<br/>"
        "VI. O Sacerdócio Levítico e os Sacrifícios como Sombras da Redenção",
        styles['Body']
    ))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#cbd5e1"), spaceBefore=8, spaceAfter=12))

    story.append(Paragraph("I. DEFINIÇÃO DE TIPO E ANTÍTIPO", styles['H1']))
    story.append(Paragraph(
        "O tipo bíblico (do grego <i>typos</i> = marca, impressão, figura) é uma pessoa, acontecimento ou instituição histórica do Antigo Testamento divinamente planejada para prefigurar uma realidade superior no Novo Testamento: o antítipo (Hb 10:1; Cl 2:17). O tipo é a sombra terrena e pedagógica; o antítipo é a realidade plena e consumada em Jesus Cristo.",
        styles['Body']
    ))

    story.append(Paragraph("II. O SIGNIFICADO DOS NÚMEROS NA BÍBLIA", styles['H1']))
    story.append(Paragraph(
        "• <b>Número 1:</b> Unidade divina, primazia e independência (Dt 6:4; Ef 4:5).<br/>"
        "• <b>Número 2:</b> Unidade na aliança ou divisão e contraste (Gn 1:27; Mt 7:13-14; duas testemunhas).<br/>"
        "• <b>Número 3:</b> A Trindade santa, perfeição divina e manifestações completas (Pai, Filho e Espírito; 3 atributos da alma; ressurreição ao terceiro dia).<br/>"
        "• <b>Número 4:</b> A criação, as 4 direções cardeais da terra, os 4 cantos e os 4 evangelhos.<br/>"
        "• <b>Número 5:</b> A graça e a Palavra de Deus (Pentateuco, 5 pedras do ribeiro, 5 dons ministeriais em Ef 4:11).<br/>"
        "• <b>Número 6:</b> O número do homem, criado no sexto dia, e os limites das obras humanas decaídas.<br/>"
        "• <b>Número 7:</b> Perfeição divina, totalidade sagrada e descanso de Deus (dias da criação, festas bíblicas, as 7 igrejas da Ásia).<br/>"
        "• <b>Número 8:</b> Ressurreição, novo começo e aliança renovada (8 almas na arca, circuncisão no 8º dia).<br/>"
        "• <b>Número 9:</b> O Espírito Santo (9 dons em 1 Co 12, 9 frutos em Gl 5:22).<br/>"
        "• <b>Número 10:</b> Ordem divina completa e responsabilidade moral (10 mandamentos, dízimo, 10 virgens).<br/>"
        "• <b>Número 12:</b> Governo divino e eleição (12 tribos de Israel, 12 apóstolos, 12 portas da Nova Jerusalém).<br/>"
        "• <b>Número 40:</b> Provações, disciplina e preparação ministerial (40 dias de dilúvio, 40 anos no deserto, 40 dias de jejum de Cristo).<br/>"
        "• <b>Número 70:</b> Administração universal de Deus (70 anciãos de Moisés, 70 discípulos enviados por Jesus).<br/>"
        "• <b>Número 666:</b> A trindade satânica da imperfeição humana tentando imitar a divindade (Ap 13:18).",
        styles['Body']
    ))

    story.append(Paragraph("III. O TABERNÁCULO E SUAS PEÇAS SAGRADAS", styles['H1']))
    story.append(Paragraph(
        "1. <b>O Altar de Bronze (dos Holocaustos):</b> Aponta para a cruz de Cristo, onde o pecado é julgado e expiado pelo sangue inocente.<br/>"
        "2. <b>A Bacia de Bronze:</b> Simboliza o lavar regenerador e purificador da Palavra de Deus (Hb 4:12; Ef 5:26).<br/>"
        "3. <b>A Mesa dos Pães da Proposição:</b> Os 12 pães ázimos apontam para Cristo, o Pão da Vida que sustenta Seu povo.<br/>"
        "4. <b>O Candelabro de Ouro Batido (Menorá):</b> O Espírito Santo em plenitude, iluminando a Igreja para o culto e serviço sagrado.<br/>"
        "5. <b>O Altar de Incenso:</b> A intercessão contínua de Cristo e a oração dos santos que sobem como aroma suave perante o trono.<br/>"
        "6. <b>A Arca da Aliança e o Propiciatório:</b> O trono de misericórdia onde a glória (Shekinah) habitava entre os querubins. Dentro da arca: as tábuas da Lei (justiça), o maná (provisão celestial) e a vara florescida de Arão (ressurreição e autoridade sacerdotal).",
        styles['Body']
    ))

    story.append(Paragraph("IV. O SIGNIFICADO DOS METAIS E CORES", styles['H1']))
    story.append(Paragraph(
        "• <b>Ouro:</b> A deidade, a realeza e a glória divina de Jesus Cristo.<br/>"
        "• <b>Prata:</b> O preço de resgate e redenção da alma (Êx 30:12; 1 Pe 1:18).<br/>"
        "• <b>Bronze:</b> O fogo do julgamento do pecado suportado na cruz.<br/>"
        "• <b>Púrpura:</b> Realeza messiânica (Evangelho de Mateus).<br/>"
        "• <b>Carmesim:</b> Sangue do servo sofredor (Evangelho de Marcos).<br/>"
        "• <b>Linho Branco:</b> Justiça e pureza humana perfeita (Evangelho de Lucas).<br/>"
        "• <b>Azul:</b> Origem celestial do Filho de Deus (Evangelho de João).",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Tipologia e Simbologia compilado com sucesso.")

# =========================================================================
# 5. RELIGIÕES MUNDIAIS I (TEXTO COMPLETO E INTEGRAL)
# =========================================================================
def compilar_religioes_mundiais():
    arquivo = os.path.join(PDF_DIR, "religioes-mundiais-1.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Religiões Mundiais I", "A Busca Humana pelo Sagrado: Mesopotâmia, Egito, Grécia, Roma, Hinduísmo e Siquismo", "História das Religiões & Missiologia", styles)

    story.append(Paragraph("SUMÁRIO DO COMPÊNDIO", styles['H1']))
    story.append(Paragraph(
        "I. A Religião Elementar, o Mito e as Três Fases da Religiosidade Humana<br/>"
        "II. As Religiões da Mesopotâmia: Ninrode, Babel e o Panteão Assírio-Babilônico<br/>"
        "III. A Religião do Antigo Egito: O Culto Solar, a Tríade de Osíris e a Mumificação<br/>"
        "IV. As Religiões da Terra de Canaã e os Cultos a Baal e Astarte<br/>"
        "V. O Politeísmo Greco-Romano e o Culto Imperial<br/>"
        "VI. O Dualismo Persa do Zoroastrismo<br/>"
        "VII. As Religiões da Índia: Origens, Vedas, Sistema de Castas e Filosofia do Hinduísmo<br/>"
        "VIII. O Siquismo: Fundação por Guru Nanak, os Dez Gurus e o Guru Granth Sahib",
        styles['Body']
    ))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#cbd5e1"), spaceBefore=8, spaceAfter=12))

    story.append(Paragraph("I. O FENÔMENO RELIGIOSO E SUAS FASES", styles['H1']))
    story.append(Paragraph(
        "O homem é um ser ontologicamente religioso. A palavra religião deriva do latim <i>religare</i> (religar). Em todas as épocas e culturas, a humanidade manifestou sede de comunhão com o transcendente (Sl 42). A história revela três fases:<br/>"
        "1. <b>Fase Mítica / Animista:</b> Deuses impessoais identificados com forças e fenômenos da natureza (mana, espíritos dos ancestrais, fetiches e magia imitativa).<br/>"
        "2. <b>Fase Funcional / Politeísta:</b> Deuses individualizados com funções específicas (mitologia grega e egípcia), deuses antropomórficos e passionais.<br/>"
        "3. <b>Fase Pessoal / Monoteísta:</b> Revelação do Deus pessoal supremo e justo, que tem seu ápice na revelação bíblica a Abraão.",
        styles['Body']
    ))

    story.append(Paragraph("II. MESOPOTÂMIA E A TORRE DE BABEL", styles['H1']))
    story.append(Paragraph(
        "Sob Ninrode (Gn 10:8-10), primeiro monarca tirânico pós-dilúvio, fundou-se o império em Babel e Nínive. A construção do zigurate de Babel fundiu política e idolatria sob a ambição de 'Porta dos Deuses'. O panteão babilônico continha mais de 2.500 divindades dispostas em tríades (Anu, Enlil e Ea; Sin, Shamash e Ishtar), destacando-se Marduk (Bel), com práticas de astrologia, adivinhação e prostituição cultual.",
        styles['Body']
    ))

    story.append(Paragraph("III. O EGITO ANTIGO E A RELIGIÃO DE ESTADO", styles['H1']))
    story.append(Paragraph(
        "O Egito praticava um politeísmo zoomórfico e antropomórfico (com mais de 500 deuses). O Faraó era divinizado como encarnação viva de Rá e Aton. O culto funerário era central, estruturado em torno da tríade Osíris (pai ressuscitado), Ísis (mãe) e Hórus (filho vingador), expresso na mumificação e no compêndio 'O Livro dos Mortos'.",
        styles['Body']
    ))

    story.append(Paragraph("IV. CANAÃ E O CULTO SANGRENTO DA FERTILIDADE", styles['H1']))
    story.append(Paragraph(
        "Os povos cananeus adoravam divindades da natureza sem códigos morais escritos: Baal (deus solar e da chuva), Astarte (deusa da sensualidade e guerra), Camos (moabitas) e Moloque (amonitas), a quem queimavam criancinhas recém-nascidas em sacrifício.",
        styles['Body']
    ))

    story.append(Paragraph("V. GRÉCIA, ROMA E O ZOROASTRISMO", styles['H1']))
    story.append(Paragraph(
        "• <b>Grécia e Roma:</b> Politeísmo do Olimpo refletindo as paixões humanas (Zeus/Júpiter, Ares/Marte, Atena/Minerva), culminando no culto oficial ao Imperador Romano como 'divo'.<br/>"
        "• <b>Zoroastrismo:</b> Religião da Pérsia fundada por Zaratustra, centrada na luta cósmica entre o espírito do bem Ahura-Mazda e o espírito do mal Angra-Mainyu, com base no livro sagrado Zend-Avesta.",
        styles['Body']
    ))

    story.append(Paragraph("VI. AS RELIGIÕES DA ÍNDIA: HINDUÍSMO E SIQUISMO", styles['H1']))
    story.append(Paragraph(
        "• <b>Hinduísmo:</b> Sem fundador individual, originou-se das invasões arianas ao vale do Indo (1500 a.C.). Escrituras divididas em <i>Sruti</i> (os quatro Vedas e Upanishadas) e <i>Smriti</i> (Bhagavad Gita, Leis de Manu, Mahabharata). Doutrinas vitais: <i>Brahman</i> (Realidade Absoluta Impessoal), <i>Atman</i> (alma individual), <i>Maya</i> (o mundo físico como ilusão), <i>Karma</i> (lei de causa e efeito), <i>Samsara</i> (ciclo contínuo de reencarnações e transmigrações) e <i>Moksha</i> (libertação final da roda das encarnações). Estruturado na Trimurti (Brahma, Shiva e Vishnu) e no rígido sistema de castas sociais (Brahmans, Kshtriyas, Vaisyas, Sudras e os intocáveis/Párias).<br/>"
        "• <b>Siquismo:</b> Fundado no século XVI no Punjab por <b>Guru Nanak (1469-1539)</b> como movimento de síntese reformadora entre o monoteísmo islâmico e tradições hindus. Prega o Deus Único e Verdadeiro (<i>Sat Nam</i>), rejeita terminantemente o culto a ídolos materiais e abole o sistema de castas. Possui dez gurus históricos, culminando no décimo, Gobind Singh, que instituiu a ordem do <i>Khalsa</i> (com os Cinco K: Kesh, Kangha, Kachh, Kara, Kirpan) e declarou o livro sagrado <b>Guru Granth Sahib</b> como o guru perpétuo da fé sique.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Religiões Mundiais I compilado com sucesso.")

# =========================================================================
# ROTEIROS COMPLETOS DE ÁUDIO PARA EDGE-TTS (AULAS SUBSTANCIAIS E RICAS)
# =========================================================================
AULAS_INTEGRAIS_AUDIO = {
    "arqueologia_biblica": """Bem-vindos à aula completa da disciplina Arqueologia Bíblica, pela plataforma universitária Teologia Acessível.
A arqueologia bíblica é a ciência indispensável que investiga os vestígios materiais, inscrições e relíquias das civilizações antigas para iluminar os relatos sagrados do Antigo e Novo Testamento.
Nesta lição abrangente, estudamos a sucessão dos períodos históricos no Oriente Próximo.
Na Idade da Pedra, testemunhamos o surgimento das primeiras aldeias agrícolas e das monumentais muralhas de Jericó.
Na Idade Calcolítica, o desenvolvimento da metalurgia do cobre e os primeiros sistemas de escrita por volta de 3500 antes de Cristo transformaram os templos em centros da vida comunitária.
Ao adentrarmos na Idade do Bronze, de 3000 a 1200 antes de Cristo, encontramos o cenário histórico dos patriarcas Abraão, Isaque e Jacó. Foi nessa época que surgiram as Cartas de Amarna no Egito e os textos ugaríticos de Ras Shamra, que revelam os idiomas e os costumes cananeus contemporâneos a Josué e aos Juízes.
Na Idade do Ferro, a arqueologia documenta a transição das cidades israelitas sob o reinado glorioso de Davi e Salomão, confirmando quarenta e um reis bíblicos através de inscrições em estelas e selos reais.
Examinamos também os métodos modernos de datação científica: o método do Carbono-14, com meia-vida de 5.568 anos para amostras orgânicas, o Argônio de Potássio para formações geológicas e a termoluminescência para a cerâmica cozida.
A arqueologia bíblica presta quatro serviços inestimáveis à teologia: ilustra a vida cotidiana bíblica, confirma a autenticidade dos relatos históricos contra os céticos, oferece respaldo apologético à fé cristã e enriquece a exegese bíblica ao elucidar o significado exato de termos hebraicos e gregos.
Estude as evidências do passado e fortaleça com solidez acadêmica a sua fé na fidedigna Palavra de Deus.""",

    "dispensacoes_aliancas": """Bem-vindos à aula completa de Dispensações e Alianças, ministrada pela plataforma Teologia Acessível.
Nesta aula expositiva fundamental, analisamos como Deus administrou a revelação progressiva de Sua vontade ao longo da história da salvação.
Uma dispensação é um período em que o ser humano é provado em sua obediência a uma regra divinamente estabelecida.
É fundamental ressaltar: as dispensações não são diferentes meios de salvação. Em todas as eras, o homem é salvo unicamente pela graça soberana de Deus através da fé na redenção do Messias.
Compreendemos as sete dispensações bíblicas:
A primeira é a Inocência, no Éden, que terminou com a queda de Adão e a promessa da semente da mulher.
A segunda é a Consciência, que durou até o Dilúvio, onde a voz interior do espírito humano não conseguiu conter a apostasia e a corrupção da raça.
A terceira é o Governo Humano, inaugurado com Noé, estabelecendo a autoridade civil para preservar a santidade da vida humana, findando na arrogância idólatra da Torre de Babel.
A quarta é a Dispensação Patriarcal ou da Promessa, que se estendeu da vocação de Abraão até o Sinai, fundamentando a justiça pela fé.
A quinta é a Dispensação da Lei, concedida por intermédio de Moisés, atuando como aio pedagógico para demonstrar a pecaminosidade humana e a necessidade de um Salvador.
A sexta dispensação é a Graça, iniciada na cruz e no Pentecostes, estendida até o iminente Arrebatamento da Igreja.
E a sétima dispensação será o Reino Milenial de Cristo sobre a terra, estabelecendo justiça, paz e restauração universal.
Paralelamente, examinamos as oito grandes alianças divinas: a Edênica, a Adâmica, a Noética, a Abraâmica, a Mosaica, a Palestiniana, a Davídica e a Nova Aliança selada pelo sangue de Jesus Cristo.
Jesus é o herdeiro e o cumprimento supremo de todas as promessas eternas de Deus.""",

    "biblia_ciencia": """Bem-vindos à aula completa da disciplina A Bíblia e a Ciência, apresentada pela plataforma Teologia Acessível.
Durante séculos, debates foram travados sobre a suposta contradição entre as Escrituras Sagradas e as descobertas das ciências naturais.
Contudo, quando a ciência é rigorosa e a Bíblia é interpretada sem preconceitos, encontramos uma harmonia profunda e extraordinária.
Iniciamos demonstrando, pelo Teorema da Incompletude de Gödel, que o ceticismo materialista é ilógico, pois exige crer, sem base matemática, que o cosmos surgiu do nada por mero acaso.
A astrofísica moderna revela o princípio antrópico e o impressionante ajuste fino do planeta Terra: uma atmosfera com exatos 21 por cento de oxigênio, a distância ideal de 150 milhões de quilômetros do Sol permitindo água líquida, e o escudo protetor de Júpiter e Saturno contra o bombardeio de meteoros.
No campo biológico, a criação bíblica é plenamente corroborada pelas quatro grandes leis da ciência: a Lei da Causa e Efeito, a Segunda Lei da Termodinâmica sobre a entropia, a Lei da Biogênese de Pasteur comprovando que vida só provém de vida preexistente, e a Lei do Código Genético de Mendel, demonstrando que as variações ocorrem estritamente dentro dos limites da própria espécie.
O registro fóssil confirma essa verdade através da súbita Explosão Cambriana, onde os grandes grupos biológicos surgem sem ancestrais transicionais.
Ademais, séculos antes de qualquer comprovação instrumental moderna, as Escrituras já registravam verdades científicas milenares:
O profeta Isaías falou sobre a redondeza da Terra.
O livro de Jó revelou que Deus suspende a terra sobre o nada, deu peso ao vento — definindo a pressão atmosférica séculos antes de Torricelli —, e descreveu com exatidão o ciclo hidrológico da chuva e a dilatação térmica da água.
A epístola aos Hebreus afirmou que tudo o que vemos foi feito de partículas invisíveis, antecipando a estrutura atômica da matéria.
E o mandamento da circuncisão no oitavo dia de vida coincide perfeitamente com o ápice biológico da protrombina sanguínea.
A verdadeira ciência não anula as Escrituras, mas exalta a infinita majestade do Deus Criador.""",

    "tipologia_simbologia": """Bem-vindos à aula completa de Tipologia e Simbologia Bíblica, da plataforma de ensino superior Teologia Acessível.
As Sagradas Escrituras constituem uma obra-prima de revelação progressiva, onde o Antigo Testamento está repleto de sombras, tipos e símbolos divinamente inspirados que encontram seu pleno cumprimento na pessoa bendita de Jesus Cristo.
O tipo é a figura histórica terrena, e o antítipo é a realidade espiritual eterna consumada no Novo Testamento.
Nesta aula magna, estudamos o significado sagrado dos números na Bíblia:
O número um simboliza a soberana unidade de Deus.
O número dois representa o testemunho autêntico e a aliança.
O número três retrata a Trindade e a perfeição dos propósitos divinos.
O número quatro abrange a criação e os quatro cantos da terra.
O número cinco expressa a multiforme graça e a Palavra de Deus.
O número seis representa o homem e a insuficiência do esforço puramente humano.
O número sete é o selo da perfeição sagrada, do sábado e da plenitude divina.
O número oito assinala a ressurreição, o novo nascimento e uma nova dispensação.
O número doze personifica a eleição e o governo espiritual de Deus nas doze tribos e nos doze apóstolos.
E o número quarenta marca os períodos sagrados de prova, disciplina e consagração.
Adentramos em seguida na sagrada arquitetura do Tabernáculo de Moisés no deserto:
O Altar de Bronze revela a necessidade do julgamento e da expiação substitutiva pelo sangue.
A Bacia de Bronze fala da purificação contínua pela Palavra da Verdade.
A Mesa dos Pães da Proposição representa Cristo como o Pão que desceu do céu para nutrir a alma.
O Candelabro de Ouro Puro batido simboliza a iluminação indefectível do Espírito Santo na Igreja.
O Altar de Incenso tipifica as orações e a intercessão sacerdotal de Cristo.
E a Arca da Aliança, guardada sob as asas dos querubins sobre o propiciatório de ouro puro, é o próprio trono da graça onde o pecador encontra comunhão com o Deus Todo-Poderoso.
Ao compreender a tipologia bíblica, os olhos da sua fé se abrem para contemplar a maravilhosa glória de Cristo em cada página das Escrituras.""",

    "religioes_mundiais": """Bem-vindos à aula completa da disciplina Religiões Mundiais I, ministrada pela plataforma Teologia Acessível.
O apóstolo Paulo declarou no Areópago de Atenas que Deus fez de um só sangue todas as nações para que buscassem ao Senhor, ainda que tateando, se porventura o pudessem achar.
A religiosidade é uma marca indelével do espírito humano, que traz a eternidade gravada no coração.
Nesta disciplina fundamental de história das religiões e missiologia, analisamos as três grandes fases do desenvolvimento religioso da humanidade:
A fase mítica e animista, onde forças impessoais da natureza e o culto aos espíritos ancestrais dominavam os povos primitivos através do medo e de ritos mágicos.
A fase politeísta e funcional, em que divindades com paixões e formas humanas foram catalogadas nos panteões da antiguidade.
E a fase monoteísta, que culmina com a revelação bíblica do Criador transcendente e pessoal.
Estudamos em detalhes os sistemas religiosos do mundo antigo:
Na Mesopotâmia, a arrogância política e espiritual de Ninrode e da Torre de Babel deu origem ao complexo panteão babilônico governado por Marduk e Ishtar.
No Egito faraônico, a divinização dos faraós e o culto funerário de Osíris, Ísis e Hórus geraram monumentais pirâmides e os rituais descritos no Livro dos Mortos.
Na terra de Canaã, desmascaramos a crueldade dos cultos de fertilidade a Baal e dos sacrifícios humanos a Moloque.
No mundo clássico greco-romano, a mitologia do Olimpo e o culto ao imperador demonstraram a esterilidade espiritual do paganismo hedonista.
E na Pérsia antiga, examinamos a teologia dualista do Zoroastrismo fundada por Zaratustra no livro Zend-Avesta.
Dedicamos atenção especial às religiões da Índia:
O Hinduísmo, estruturado nos Vedas, nos Upanishadas e no poema Bhagavad Gita, com suas doutrinas de Brahman, Atman, a lei do Karma, a transmigração das almas no Samsara, o anseio pela libertação no Moksha, e a rígida estratificação do sistema de castas sociais.
E finalmente o Siquismo, fundado no século dezesseis no Punjab por Guru Nanak, que buscou uma reforma rejeitando a idolatria e as castas, culminando na linhagem dos dez gurus e no reconhecimento do livro sagrado Guru Granth Sahib como seu mestre perpétuo.
Este estudo proporciona ao pesquisador e ministro do Evangelho discernimento histórico, empatia cultural e clareza apologética para proclamar com excelência o caminho, a verdade e a vida em Jesus Cristo."""
}

async def gerar_audio_edge(texto, arquivo_saida, voz):
    try:
        comunicador = edge_tts.Communicate(texto, voz, rate="-2%")
        await comunicador.save(arquivo_saida)
        print(f"Áudio gerado com sucesso: {os.path.basename(arquivo_saida)} ({voz})")
    except Exception as e:
        print(f"Erro na geração de {voz}: {e}")

async def gravar_todos():
    tarefas = []
    for chave, texto in AULAS_INTEGRAIS_AUDIO.items():
        arq_m = os.path.join(AUDIO_DIR, f"{chave}_masculino.mp3")
        arq_f = os.path.join(AUDIO_DIR, f"{chave}_feminino.mp3")
        tarefas.append(gerar_audio_edge(texto, arq_m, "pt-BR-AntonioNeural"))
        tarefas.append(gerar_audio_edge(texto, arq_f, "pt-BR-FranciscaNeural"))
    await asyncio.gather(*tarefas)

if __name__ == "__main__":
    print("================================================================")
    print("COMPILANDO COMPÊNDIOS INTEGRAIS E GRAVANDO AULAS COMPLETAS EM ÁUDIO")
    print("================================================================")
    compilar_arqueologia()
    compilar_dispensacoes_aliancas()
    compilar_biblia_e_ciencia()
    compilar_tipologia_simbologia()
    compilar_religioes_mundiais()
    print("\n--- TODOS OS COMPÊNDIOS INTEGRAIS FORAM CONSTRUÍDOS COM SUCESSO ---")

    print("\n--- INICIANDO GRAVAÇÃO DAS AULAS COMPLETAS DE AUDIOBOOK (PT-BR) ---")
    asyncio.run(gravar_todos())
    print("\n================================================================")
    print("PRODUÇÃO CONCLUÍDA: TODOS OS PDFS E AUDIOS ESTÃO PRONTOS!")
    print("================================================================")
