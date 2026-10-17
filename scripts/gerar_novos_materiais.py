# -*- coding: utf-8 -*-
"""
Gerador da Segunda Remessa de PDFs e Audiobooks Oficiais
Teologia Acessível - Ensino Superior Livre
Módulos: Apologética, Síntese do Antigo Testamento, Período Interbíblico,
Manuscritos do A.T. e Síntese do Novo Testamento.
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
        self.drawRightString(558, 752, "Compêndio Acadêmico Oficial")
        
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.75)
        self.line(54, 744, 558, 744)
        
        self.line(54, 48, 558, 48)
        self.drawString(54, 36, "Teologia Acessível para Todos — Estudo Teológico Aberto & Gratuito")
        page_str = f"Página {self._pageNumber} de {page_count}"
        self.drawRightString(558, 36, page_str)
        self.restoreState()

def get_styles():
    base = getSampleStyleSheet()
    styles = {}

    styles['CapaTitulo'] = ParagraphStyle(
        'CapaTitulo',
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=30,
        textColor=colors.HexColor("#0f2a43"),
        alignment=TA_CENTER,
        spaceAfter=14
    )
    styles['CapaSub'] = ParagraphStyle(
        'CapaSub',
        fontName='Helvetica',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor("#1c538e"),
        alignment=TA_CENTER,
        spaceAfter=20
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
        fontSize=14,
        leading=18,
        textColor=colors.HexColor("#0f2a43"),
        spaceBefore=12,
        spaceAfter=6,
        keepWithNext=True
    )
    styles['H2'] = ParagraphStyle(
        'H2',
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=colors.HexColor("#1c538e"),
        spaceBefore=8,
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
    styles['TabelaH'] = ParagraphStyle(
        'TabelaH',
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.white,
        alignment=TA_CENTER
    )
    styles['TabelaC'] = ParagraphStyle(
        'TabelaC',
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=colors.HexColor("#1e293b")
    )
    return styles

def criar_capa(titulo, subtitulo, disciplina, styles):
    story = []
    story.append(Spacer(1, 90))
    
    box = [[
        Paragraph("TEOLOGIA ACESSÍVEL", ParagraphStyle('B1', fontName='Helvetica-Bold', fontSize=13, leading=16, textColor=colors.HexColor("#0f2a43"), alignment=TA_CENTER)),
    ], [
        Paragraph("PLATAFORMA UNIVERSITÁRIA DE ESTUDOS TEOLÓGICOS LIVRES", ParagraphStyle('B2', fontName='Helvetica-Bold', fontSize=8, leading=10, textColor=colors.HexColor("#d97706"), alignment=TA_CENTER)),
    ]]
    t = Table(box, colWidths=[380])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#f8fafc")),
        ('BOX', (0,0), (-1,-1), 1.5, colors.HexColor("#0f2a43")),
        ('PADDING', (0,0), (-1,-1), 12),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
    ]))
    story.append(t)
    story.append(Spacer(1, 50))
    
    story.append(Paragraph(titulo.upper(), styles['CapaTitulo']))
    story.append(HRFlowable(width="60%", thickness=2.5, color=colors.HexColor("#d97706"), spaceBefore=5, spaceAfter=18))
    story.append(Paragraph(subtitulo, styles['CapaSub']))
    story.append(Paragraph(f"Área Acadêmica: <b>{disciplina}</b>", styles['CapaChancela']))
    
    story.append(Spacer(1, 120))
    story.append(Paragraph(
        "Material didático oficial para estudantes, líderes e pesquisadores.<br/>Publicado pela plataforma <b>Teologia Acessível</b> — Acesso livre e gratuito a todos.<br/>Edição Acadêmica Revisada • 2026",
        ParagraphStyle('R1', fontName='Helvetica', fontSize=8.5, leading=12, textColor=colors.HexColor("#64748b"), alignment=TA_CENTER)
    ))
    story.append(PageBreak())
    return story

# ==========================================
# 1. APOLOGÉTICA CRISTÃ
# ==========================================
def gerar_pdf_apologetica():
    arquivo = os.path.join(PDF_DIR, "apologetica.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Apologética Cristã", "Fundamentação Racional, Defesa da Fé e Diálogo Filosófico", "Filosofia da Religião & Teologia Sistemática", styles)

    story.append(Paragraph("1. O Que é Apologética?", styles['H1']))
    story.append(Paragraph(
        "A Apologética (do grego <i>apologia</i>, 'resposta ou defesa perante tribunal', At 26:1; 1 Pe 3:15) é a disciplina teológica e racional que se esforça por apresentar uma defesa articulada da fé cristã diante das objeções do mundo contemporâneo. Distingue-se da polêmica interna, pois visa dialogar com o pensamento filosófico, científico e cultural secular.",
        styles['Body']
    ))

    story.append(Paragraph("2. Base Bíblica do Pensamento Apologético", styles['H1']))
    story.append(Paragraph(
        "• <b>1 Pedro 3:15:</b> <i>'Estai sempre preparados para responder com mansidão e temor a qualquer que vos pedir a razão da esperança que há em vós.'</i> Exige que a resposta contenha argumentos lógicos e raciocínios consistentes, não meras evasivas.<br/>"
        "• <b>Atos 17:</b> O apóstolo Paulo no Areópago de Atenas dialoga com epicureus e estóicos, partindo da teologia natural e dos poetas gregos para proclamar a ressurreição.<br/>"
        "• <b>Lucas 1:1-4:</b> O evangelista expõe o método de acurada investigação histórica para produzir <i>plena certeza</i> aos instruídos.",
        styles['Body']
    ))

    story.append(Paragraph("3. As Quatro Fontes do Conhecimento", styles['H1']))
    story.append(Paragraph("1. <b>Observação Empírica:</b> Apreensão do mundo através dos sentidos e da investigação factual.", styles['Bullet']))
    story.append(Paragraph("2. <b>Intuição:</b> Consciência inata implantada no ser humano sobre o transcendente e o senso moral.", styles['Bullet']))
    story.append(Paragraph("3. <b>Razão:</b> Capacidade analítica e dedutiva de relacionar causas e efeitos e desvendar coerências.", styles['Bullet']))
    story.append(Paragraph("4. <b>Revelação Divina:</b> A auto-comunicação soberana de Deus na história e nas Sagradas Escrituras.", styles['Bullet']))

    story.append(Paragraph("4. Panorama dos Grandes Apologistas da História", styles['H1']))
    story.append(Paragraph(
        "• <b>Tertuliano (160-220 d.C.):</b> Confrontou as filosofias pagãs utilizando vigorosa retórica jurídica.<br/>"
        "• <b>Pais Alexandrinos (Clemente e Orígenes):</b> Integraram o pensamento filosófico platônico e estóico para expressar a profundidade da fé.<br/>"
        "• <b>Santo Agostinho:</b> Proclamou que <i>'a filosofia é serva útil da teologia'</i> e que <i>'crer é pensar com assentimento'</i>.<br/>"
        "• <b>Tomás de Aquino:</b> Autor da monumental <i>Suma Contra os Gentios</i>, elaborou as célebres cinco vias racionais para demonstrar a existência de Deus.<br/>"
        "• <b>Joseph Butler & C. S. Lewis:</b> Apologistas modernos que defenderam a coerência moral e a plausibilidade do cristianismo.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Apologética gerado com sucesso.")

# ==========================================
# 2. SÍNTESE DO ANTIGO TESTAMENTO
# ==========================================
def gerar_pdf_sintese_at():
    arquivo = os.path.join(PDF_DIR, "sintese-antigo-testamento.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Síntese do Antigo Testamento", "Panorama Histórico, Teológico e Estrutural dos 39 Livros Canônicos", "Teologia Bíblica do Antigo Testamento", styles)

    story.append(Paragraph("1. O Pentateuco (A Lei - Torá)", styles['H1']))
    story.append(Paragraph(
        "• <b>Gênesis:</b> O livro dos começos (criação, queda, dilúvio, nações e os patriarcas Abraão, Isaque, Jacó e José).<br/>"
        "• <b>Êxodo:</b> A libertação do Egito pelo poder do sangue pascal, a outorga da Lei no Sinai e a construção do Tabernáculo.<br/>"
        "• <b>Levítico:</b> O manual sacerdotal da santidade: sacrifícios, pureza de vida e o solene Dia da Expiação (Yom Kippur).<br/>"
        "• <b>Números:</b> A peregrinação no deserto, os censos do povo e as advertências contra a incredulidade e a murmuração.<br/>"
        "• <b>Deuteronômio:</b> O magnífico discurso de despedida de Moisés na planície de Moabe, reiterando o amor de Deus e a fidelidade ao pacto.",
        styles['Body']
    ))

    story.append(Paragraph("2. Os Livros Históricos", styles['H1']))
    story.append(Paragraph(
        "• <b>Josué:</b> A conquista vitoriosa de Canaã e a partilha da herança entre as doze tribos.<br/>"
        "• <b>Juízes:</b> O ciclo repetitivo de apostasia, opressão gentílica, clamor e livramento sob doze líderes inspirados.<br/>"
        "• <b>Rute:</b> Um idílio de redenção que prefigura Cristo através do ministério de Boaz como Parente-Remidor.<br/>"
        "• <b>1 e 2 Samuel:</b> A transição da teocracia dos juízes para a monarquia sob Saul e o reino teocrático de Davi.<br/>"
        "• <b>1 e 2 Reis:</b> O apogeu sob Salomão, o cisma das tribos, os ministérios de Elias e Eliseu e os cativeiros de Samaria e Judá.<br/>"
        "• <b>1 e 2 Crônicas:</b> A história sob o prisma sacerdotal, destacando o Templo, a adoração pública e a aliança davídica.<br/>"
        "• <b>Esdras, Neemias e Ester:</b> A restauração do Templo, a reconstrução das muralhas de Jerusalém e o cuidado providencial de Deus no exílio persa.",
        styles['Body']
    ))

    story.append(Paragraph("3. Os Livros Poéticos e Sapienciais", styles['H1']))
    story.append(Paragraph(
        "• <b>Jó:</b> O mistério do sofrimento dos justos e a soberania incomparável de Deus.<br/>"
        "• <b>Salmos:</b> O saltério de adoração de Israel que ecoa todas as emoções da alma perante o Senhor.<br/>"
        "• <b>Provérbios:</b> A sabedoria prática e ética fundada no temor do Senhor.<br/>"
        "• <b>Eclesiastes:</b> O exame honesto da vacuidade da vida sem a perspectiva da eternidade ('debaixo do sol').<br/>"
        "• <b>Cantares de Salomão:</b> O louvor ao amor conjugal e a metáfora do vínculo esponsal de Deus com o Seu povo.",
        styles['Body']
    ))

    story.append(Paragraph("4. Os Livros Proféticos", styles['H1']))
    story.append(Paragraph(
        "• <b>Profetas Maiores:</b> Isaías (o profeta messiânico e da redenção), Jeremias e Lamentações (o arauto do juízo e da Nova Aliança), Ezequiel (o profeta do Espírito e do templo restaurado) e Daniel (o estadista dos impérios mundiais e do Reino eterno de Cristo).<br/>"
        "• <b>Profetas Menores:</b> Os doze livros proféticos (de Oséias a Malaquias) que denunciaram o pecado nacional, anteciparam a dispersão e anunciaram o despontar do Sol da Justiça com salvação em Suas asas.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Síntese AT gerado com sucesso.")

# ==========================================
# 3. PERÍODO INTERBÍBLICO
# ==========================================
def gerar_pdf_periodo_interbiblico():
    arquivo = os.path.join(PDF_DIR, "periodo-interbiblico.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Período Interbíblico", "Os 400 Anos entre os Testamentos: Do Silêncio Profético ao Advento de Cristo", "História Bíblica & Judaísmo do Segundo Templo", styles)

    story.append(Paragraph("1. O Que Aconteceu nos 400 Anos entre Malaquias e Mateus?", styles['H1']))
    story.append(Paragraph(
        "Os quatrocentos anos que separam o fim do Antigo Testamento do nascimento de Jesus são frequentemente denominados 'séculos de silêncio profético'. Embora não tenham surgido profetas canônicos, foi um dos períodos mais dinâmicos e decisivos da história judaica, preparando o cenário geopolítico, linguístico e teológico para a plenitude dos tempos (Gl 4:4).",
        styles['Body']
    ))

    story.append(Paragraph("2. Os Quatro Grandes Domínios Imperiais", styles['H1']))
    story.append(Paragraph(
        "1. <b>Domínio Persa (até 332 a.C.):</b> Judá sob administração autônoma de governadores e sumos-sacerdotes fiéis à Lei.<br/>"
        "2. <b>Império Greco-Macedônico (332-323 a.C.):</b> Alexandre, o Grande, derrota os persas e difunde a cultura helenística (o grego koiné, teatros, ginásios e comércio). Os judeus obtêm liberdade religiosa.<br/>"
        "3. <b>Ptolomeus do Egito (323-198 a.C.):</b> Período de prosperidade em que as Escrituras hebraicas são traduzidas para o grego em Alexandria: a famosa <b>Septuaginta (LXX)</b>.<br/>"
        "4. <b>Selêucidas da Síria (198-167 a.C.):</b> Antíoco IV Epifânio tenta erradicar o judaísmo, profana o Templo de Jerusalém erguendo uma estátua de Júpiter e oferecendo porcos sobre o altar sagrado.",
        styles['Body']
    ))

    story.append(Paragraph("3. A Revolta dos Macabeus & Dinastia Asmoneana", styles['H1']))
    story.append(Paragraph(
        "Em 167 a.C., o idoso sacerdote Matatias de Modin recusa sacrificar a deuses pagãos e inicia a luta armada com seus cinco filhos. Sob o comando de <b>Judas Macabeu</b> ('o Martelo'), os judeus reconquistam Jerusalém, purificam o santuário e instituem a <b>Festa da Dedicação (Hanukkah)</b> em 164 a.C. A dinastia dos Asmoneus rege a nação até a intervenção do general romano Pompeu em 63 a.C.",
        styles['Body']
    ))

    story.append(Paragraph("4. As Facções Religiosas na Época de Cristo", styles['H1']))
    story.append(Paragraph(
        "• <b>Fariseus ('os separados'):</b> Ortodoxos, devotos da Torá escrita e da tradição oral dos anciãos, defensores da ressurreição dos mortos e do messianismo.<br/>"
        "• <b>Saduceus:</b> Aristocratas e elite sacerdotal colaboracionista de Roma; aceitavam apenas a Torá escrita e negavam anjos, espíritos e a ressurreição.<br/>"
        "• <b>Essênios:</b> Comunidade ascética monástica que se retirou para as cavernas de Qumrã no Mar Morto para preservar a pureza sacerdotal.<br/>"
        "• <b>Zelotes:</b> Revolucionários patriotas que pregavam a insurreição armada contra o jugo tributário de Roma.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Período Interbíblico gerado com sucesso.")

# ==========================================
# 4. MANUSCRITOS DO ANTIGO TESTAMENTO
# ==========================================
def gerar_pdf_manuscritos():
    arquivo = os.path.join(PDF_DIR, "manuscritos-antigo-testamento.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Manuscritos do Antigo Testamento", "Crítica Textual, Materiais de Escrita, Transmissão Massorética e Rolos de Qumrã", "Bibliologia & Crítica Textual Bíblica", styles)

    story.append(Paragraph("1. A Transmissão dos Textos Sagrados", styles['H1']))
    story.append(Paragraph(
        "Os autógrafos originais dos escritores bíblicos desapareceram devido ao desgaste dos materiais perecíveis da Antiguidade. No entanto, a fidelidade sublime da Bíblia foi preservada através de uma copiosa tradição manuscrita meticulosamente supervisionada pelos escribas (Soferins) e eruditos massoretas.",
        styles['Body']
    ))

    story.append(Paragraph("2. Principais Testemunhos Textuais do Antigo Testamento", styles['H1']))
    story.append(Paragraph(
        "• <b>Texto Massorético (800 d.C.):</b> Obra dos massoretas ('transmissores') que adicionaram os pontos vocálicos (acríticos) ao hebraico consonantal e contaram minuciosamente cada letra para garantir exatidão absoluta.<br/>"
        "• <b>Rolos do Mar Morto (Qumrã, descobertos em 1947):</b> Manuscritos do século II a.C. que comprovaram que o Texto Massorético preservou as Escrituras com quase 100% de exatidão por mais de um milênio.<br/>"
        "• <b>Septuaginta (LXX, séc. III a.C.):</b> A tradução grega do Antigo Testamento mais citada pelos apóstolos no Novo Testamento.<br/>"
        "• <b>Pentateuco Samaritano:</b> Versão hebraica preservada pelos samaritanos desde os tempos persas.<br/>"
        "• <b>Targuns Aramaicos:</b> Paráfrases explicativas em aramaico produzidas após o cativeiro na Babilônia.",
        styles['Body']
    ))

    story.append(Paragraph("3. Materiais e Instrumentos de Escrita", styles['H1']))
    story.append(Paragraph(
        "• <b>Papiro:</b> Folhas prensadas da cana do Nilo, exportadas pelo porto fenício de Biblos.<br/>"
        "• <b>Pergaminho e Velino:</b> Peles raspadas de ovelhas, cabras ou antílopes, criadas na cidade de Pérgamo.<br/>"
        "• <b>Instrumentos:</b> Estiletes triangulares de ferro para tabletes de cera e argila, cinzel para inscrições em rocha e penas de junco preparadas para uso com tinta preta de carvão vegetal e goma arábica.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Manuscritos AT gerado com sucesso.")

# ==========================================
# 5. SÍNTESE DO NOVO TESTAMENTO
# ==========================================
def gerar_pdf_sintese_nt():
    arquivo = os.path.join(PDF_DIR, "sintese-novo-testamento.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Síntese do Novo Testamento", "Estrutura, Temas Centrais e Análise dos 27 Livros Apostólicos", "Teologia Bíblica do Novo Testamento", styles)

    story.append(Paragraph("1. Os Quatro Evangelhos & o Livro de Atos", styles['H1']))
    story.append(Paragraph(
        "• <b>Mateus:</b> Cristo como o Rei prometido a Israel, Filho de Davi e cumprimento messiânico das profecias.<br/>"
        "• <b>Marcos:</b> Cristo como o Servo de Jeová, repleto de poder, dinamismo e ação redentora imediata.<br/>"
        "• <b>Lucas:</b> Cristo como o Filho do Homem ideal, perfeito em Sua compaixão universal pela humanidade.<br/>"
        "• <b>João:</b> Cristo como o Verbo Eterno e Filho de Deus pré-existente que se fez carne para conceder a vida eterna.<br/>"
        "• <b>Atos dos Apóstolos:</b> O avanço imparável do Evangelho de Jerusalém aos confins da Terra pelo poder do Espírito Santo.",
        styles['Body']
    ))

    story.append(Paragraph("2. As Epístolas Paulinas", styles['H1']))
    story.append(Paragraph(
        "• <b>Romanos e Gálatas:</b> As colunas mestras da doutrina da justificação somente pela fé na graça de Deus.<br/>"
        "• <b>1 e 2 Coríntios:</b> Ordem na igreja, conduta moral, dons do Espírito Santo e a gloriosa vitória da ressurreição.<br/>"
        "• <b>Epístolas da Prisão (Efésios, Filipenses, Colossenses, Filemom):</b> A glória do Corpo de Cristo, a alegria no sofrimento e a reconciliação cristã.<br/>"
        "• <b>Epístolas Pastorais (1 e 2 Timóteo, Tito):</b> Organização eclesiástica, doutrina pura e a transmissão do depósito da fé.",
        styles['Body']
    ))

    story.append(Paragraph("3. Epístolas Gerais e o Apocalipse", styles['H1']))
    story.append(Paragraph(
        "• <b>Hebreus:</b> A absoluta superioridade de Cristo como nosso eterno Sumo Sacerdote sobre os ritos do Antigo Pacto.<br/>"
        "• <b>Tiago:</b> A autenticidade da fé cristã demonstrada em obras práticas e retidão ética cotidiana.<br/>"
        "• <b>1 e 2 Pedro:</b> Esperança viva em tempos de sofrimento e advertência severa contra os falsos mestres da apostasia.<br/>"
        "• <b>1, 2 e 3 João:</b> O teste do amor fraternal, comunhão com o Pai e a certeza da vida eterna em Cristo.<br/>"
        "• <b>Judas:</b> O solene chamado para combater zelosamente pela fé que de uma vez para sempre foi entregue aos santos.<br/>"
        "• <b>Apocalipse:</b> O grandioso clímax de toda a revelação: a vitória cósmica de Cristo, o Cordeiro que venceu!",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Síntese NT gerado com sucesso.")

# ==========================================
# GERAÇÃO DE ÁUDIOS NEURAIS PT-BR (NOVOS)
# ==========================================
NOVOS_AUDIO_TEXTS = {
    "apologetica": """Módulo Apologética Cristã, pela plataforma Teologia Acessível.
A apologética é a ciência racional e o ministério dedicado à defesa da fé bíblica no mundo moderno.
O apóstolo Pedro ordenou: estai sempre preparados para responder com mansidão a todo aquele que vos pedir a razão da esperança que há em vós.
Defendemos o Evangelho não com soberba, mas articulando a verdade revelada com honestidade intelectual, integrando fé, razão e coerência moral para convencer e consolar mentes que buscam a Deus.""",

    "sintese_at": """Módulo Síntese do Antigo Testamento, apresentado pela Teologia Acessível.
Percorremos a majestosa história da redenção através dos trinta e nove livros do cânon hebraico.
Desde o relato dos começos em Gênesis, a libertação de Êxodo e os estatutos de santidade em Levítico, até as poesias dos Salmos e as solenes advertências dos profetas maiores e menores.
O Antigo Testamento é a fundação sólida que aponta confiantemente para a vinda de Jesus Cristo, o Messias Redentor.""",

    "periodo_interbiblico": """Módulo Período Interbíblico, da plataforma Teologia Acessível.
Durante os quatrocentos anos que separam o profeta Malaquias do nascimento de Cristo, o mundo antigo passou por profundas transformações.
Sob o império persa, grego, a revolta libertadora dos Macabeus e o domínio de Roma, floresceram as principais facções do judaísmo: fariseus, saduceus e essênios.
Estudar este período ilumina os Evangelhos e revela a providência de Deus na preparação da plenitude dos tempos.""",

    "manuscritos_at": """Módulo Manuscritos do Antigo Testamento e Crítica Textual, pela Teologia Acessível.
A preservação da Bíblia através dos milênios é um dos maiores milagres da história literária humana.
Conheça os rolos de papiro e pergaminhos antigos, a meticulosa obra dos massoretas na fixação do texto hebraico e a espetacular descoberta dos Rolos do Mar Morto em Qumrã.
A confiabilidade documental das Escrituras Sagradas repousa sobre bases sólidas e cientificamente verificadas.""",

    "sintese_nt": """Módulo Síntese do Novo Testamento, pela plataforma Teologia Acessível.
O Novo Testamento reúne vinte e sete livros inspirados pelo Espírito Santo que proclamam a chegada do Reino de Deus.
Nos quatro Evangelhos, contemplamos a vida, morte e ressurreição gloriosa de Jesus. Em Atos, a expansão pioneira da Igreja. Nas Epístolas, a profundidade teológica da graça e da santificação. E no Apocalipse, a consumação vitoriosa do plano eterno de Deus."""
}

async def gerar_audio_edge(texto, arquivo_saida, voz):
    try:
        comunicador = edge_tts.Communicate(texto, voz, rate="-2%")
        await comunicador.save(arquivo_saida)
        print(f"Áudio gerado: {os.path.basename(arquivo_saida)} ({voz})")
    except Exception as e:
        print(f"Erro gerando áudio ({voz}): {e}")

async def gravar_todos():
    tarefas = []
    for chave, texto in NOVOS_AUDIO_TEXTS.items():
        arq_m = os.path.join(AUDIO_DIR, f"{chave}_masculino.mp3")
        arq_f = os.path.join(AUDIO_DIR, f"{chave}_feminino.mp3")
        tarefas.append(gerar_audio_edge(texto, arq_m, "pt-BR-AntonioNeural"))
        tarefas.append(gerar_audio_edge(texto, arq_f, "pt-BR-FranciscaNeural"))
    await asyncio.gather(*tarefas)

if __name__ == "__main__":
    print("--- INICIANDO COMPILAÇÃO DOS NOVOS 5 PDFS ---")
    gerar_pdf_apologetica()
    gerar_pdf_sintese_at()
    gerar_pdf_periodo_interbiblico()
    gerar_pdf_manuscritos()
    gerar_pdf_sintese_nt()
    print("--- COMPILAÇÃO DOS PDFS CONCLUÍDA ---")

    print("--- GRAVANDO NOVOS AUDIOBOOKS MASCULINO E FEMININO PT-BR ---")
    asyncio.run(gravar_todos())
    print("--- PROCESSAMENTO COMPLETO ---")
