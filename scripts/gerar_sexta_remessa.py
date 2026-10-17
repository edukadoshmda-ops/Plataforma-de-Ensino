# -*- coding: utf-8 -*-
"""
Gerador da Sexta Remessa de PDFs e Audiobooks Oficiais
Teologia Acessível - Ensino Superior Livre
Módulos: Arqueologia Bíblica, Dispensações e Alianças, A Bíblia e a Ciência,
         Tipologia e Simbologia Bíblica e Religiões Mundiais I.
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
        fontSize=13,
        leading=17,
        textColor=colors.HexColor("#0f2a43"),
        spaceBefore=12,
        spaceAfter=6,
        keepWithNext=True
    )
    styles['H2'] = ParagraphStyle(
        'H2',
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
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
# 1. ARQUEOLOGIA BÍBLICA
# ==========================================
def gerar_pdf_arqueologia_biblica():
    arquivo = os.path.join(PDF_DIR, "arqueologia-biblica.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Arqueologia Bíblica", "Períodos Históricos, Métodos de Datação, Escavações no Oriente Próximo e Corroboração Bíblica", "Arqueologia & História Bíblica", styles)

    story.append(Paragraph("1. Conceito e Escopo da Arqueologia Bíblica", styles['H1']))
    story.append(Paragraph(
        "A palavra Arqueologia provém do grego <i>archaios</i> (antigo) e <i>logos</i> (estudo sistemático). Consiste na ciência que estuda a história, civilizações e culturas humanas através de seus vestígios materiais recuperados do solo. A <b>Arqueologia Bíblica</b> dedica-se especificamente ao estudo, escavação e análise crítica dos registros, artefatos e monumentos associados aos relatos bíblicos e aos povos do Antigo e Novo Testamento.",
        styles['Body']
    ))

    story.append(Paragraph("2. Períodos Arqueológicos Principais", styles['H1']))
    story.append(Paragraph(
        "• <b>Idade da Pedra:</b> Paleolítico, Mesolítico e Neolítico (7000 a 4500 a.C.), com surgimento dos primeiros povoados agrícolas, cerâmica e estruturas megalíticas em Jericó.<br/>"
        "• <b>Idade Calcolítica (do Cobre - 4500 a 3000 a.C.):</b> Transição para a metalurgia, início da escrita cuneiforme e hieroglífica e grandes centros urbanos no Crescente Fértil.<br/>"
        "• <b>Idade do Bronze (3000 a 1200 a.C.):</b> Subdividida em Antiga, Média e Recente/Moderna. Florescimento do Egito, Babilônia, hititas, hicsos e cananeus. Época dos patriarcas de Israel (Abraão, Isaque, Jacó) e dos tabletes de Amarna e Ugarite.<br/>"
        "• <b>Idade do Ferro (1200 a 300 a.C.):</b> Ferro I (Monarquia de Davi e Salomão, 1200-900 a.C.), Ferro II (Reinos divididos de Judá e Israel, reformas proféticas, 900-600 a.C.) e Ferro III (Período do Exílio Babilônico e restauração persa, 600-300 a.C.).<br/>"
        "• <b>Período Greco-Romano (300 a.C. a 300 d.C.):</b> Helenismo sob Alexandre o Grande, revolta dos Macabeus, domínio de Roma e o cenário do ministério de Jesus e dos Apóstolos.",
        styles['Body']
    ))

    story.append(Paragraph("3. Métodos Científicos de Datação Arqueológica", styles['H1']))
    story.append(Paragraph(
        "A arqueologia moderna recorre a métodos físico-químicos rigorosos: o <b>Carbono-14</b> (baseado na desintegração radioativa do isótopo de carbono em matéria orgânica, com meia-vida de 5.568 anos), o método do <b>Argônio de Potássio</b> (para amostras geológicas milenares) e a <b>Termoluminescência</b> (que mede os elétrons aprisionados em cerâmicas cozidas ao forno).",
        styles['Body']
    ))

    story.append(Paragraph("4. Grandes Descobertas e Valor Teológico", styles['H1']))
    story.append(Paragraph(
        "Entre os achados mais célebres destacam-se a Pedra de Moabe (Inscrição de Mesa), o Código de Hamurabi (1901), as cartas de Tell el-Amarna, os tabletes de Nuzi e Mari (que explicam os costumes patriarcais de Gênesis), e os <b>Manuscritos do Mar Morto em Qumran (1947)</b>, que confirmaram a fidelidade milenar da transmissão dos textos bíblicos hebraicos.<br/>"
        "A arqueologia possui quádruplo valor: <i>ilustrativo</i> (torna vivos os cenários bíblicos), <i>confirmatório</i> (comprova a historicidade de reis, cidades e nações), <i>apologético</i> (refuta teorias céticas infundadas) e <i>exegético</i> (esclarece termos obscuros dos originais hebraicos e gregos).",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Arqueologia Bíblica gerado com sucesso.")

# ==========================================
# 2. DISPENSAÇÕES E ALIANÇAS
# ==========================================
def gerar_pdf_dispensacoes_aliancas():
    arquivo = os.path.join(PDF_DIR, "dispensacoes-e-aliancas.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Dispensações e Alianças", "Os Sete Períodos da Revelação Divina e as Oito Grandes Alianças Bíblicas em Cristo", "Teologia Sistemática & Bíblica", styles)

    story.append(Paragraph("1. O Conceito Bíblico de Dispensação", styles['H1']))
    story.append(Paragraph(
        "Dispensação (do grego <i>oikonomia</i> = administração de uma casa, mordomia) é um estágio específico na revelação progressiva de Deus em que o ser humano é provado quanto à sua obediência à vontade divina expressa. As dispensações não são diferentes modos de salvação: em todas as épocas o ser humano é justificado única e exclusivamente pela <b>graça soberana de Deus mediante a fé na redenção de Cristo</b>.",
        styles['Body']
    ))

    story.append(Paragraph("2. O Panorama das 7 Dispensações Bíblicas", styles['H1']))
    story.append(Paragraph(
        "1. <b>Inocência:</b> Da criação no Éden até a queda (Gn 1:28; 3:6). O homem vivia em pureza moral e comunhão íntima.<br/>"
        "2. <b>Consciência ou Responsabilidade Moral:</b> Da queda até o dilúvio (Gn 3:7 a 8:22). O homem é guiado pela voz interior do espírito.<br/>"
        "3. <b>Governo Humano:</b> Do dilúvio à torre de Babel e à chamada de Abraão (Gn 9:1 a 11:32). Instituição da autoridade judicial para preservar a santidade da vida humana.<br/>"
        "4. <b>Patriarcal ou da Promessa:</b> De Abraão até a entrega da Lei no Sinai (Gn 12:1 a Êx 19:8). Fundamentada na fé incondicional.<br/>"
        "5. <b>A Lei:</b> Do Sinai ao Calvário (Êx 20:1 a Mt 27:50). Funcionou como 'aio' para revelar a pecaminosidade e conduzir a Cristo.<br/>"
        "6. <b>A Graça, Igreja ou Espírito Santo:</b> Do Pentecostes ao Arrebatamento da Igreja (At 2:1 a 1 Ts 4:17). A salvação estendida a judeus e gentios.<br/>"
        "7. <b>O Reino ou Milênio:</b> Do julgamento das nações ao juízo final (Ap 20:1-15). O reino visível de Cristo de 1.000 anos sobre a terra.",
        styles['Body']
    ))

    story.append(Paragraph("3. As 8 Grandes Alianças das Escrituras", styles['H1']))
    story.append(Paragraph(
        "Uma aliança bíblica (<i>berith</i> no hebraico, <i>diatheke</i> no grego) é um pacto soberano estabelecido por Deus:<br/>"
        "• <b>Aliança Edênica (Gn 2:16):</b> Condições de vida do homem inocente no Éden.<br/>"
        "• <b>Aliança Adâmica (Gn 3:15):</b> Promessa da semente da mulher que esmagaria a cabeça da serpente (Protoevangelho).<br/>"
        "• <b>Aliança Noética (Gn 9:16):</b> Garantia de preservação da terra e governo da ordem civil.<br/>"
        "• <b>Aliança Abraâmica (Gn 12:1-3; 15:18):</b> Promessa da terra, da grande nação e bênção universal em Cristo.<br/>"
        "• <b>Aliança Mosaica (Êx 19:5; 20):</b> Aliança condicional reguladora da teocracia de Israel.<br/>"
        "• <b>Aliança Palestiniana (Dt 30:1-10):</b> Garantia do retorno, arrependimento e restauração da terra.<br/>"
        "• <b>Aliança Davídica (2 Sm 7:16):</b> Trono, posteridade e reino perpétuo garantidos na linhagem do Messias.<br/>"
        "• <b>Nova Aliança (Jr 31:31; Hb 8:8):</b> Selada no sangue de Jesus, outorgando perdão eterno e o Espírito no coração.",
        styles['Body']
    ))

    story.append(Paragraph("4. Cristo como o Centro de Todas as Alianças", styles['H1']))
    story.append(Paragraph(
        "Jesus é o último Adão da Aliança Edênica, a Semente prometida da Aliança Adâmica, o Filho maior de Sem na Aliança Noética, o Herdeiro da Aliança Abraâmica, Aquele que cumpriu plenamente a Lei Mosaica, o Rei Eterno da Aliança Davídica e o Mediador Supremo da Nova e Eterna Aliança.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Dispensações e Alianças gerado com sucesso.")

# ==========================================
# 3. A BÍBLIA E A CIÊNCIA
# ==========================================
def gerar_pdf_biblia_e_ciencia():
    arquivo = os.path.join(PDF_DIR, "a-biblia-e-a-ciencia.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("A Bíblia e a Ciência", "Cosmologia, Termodinâmica, Registro Fóssil e Antecipações Científicas das Escrituras", "Filosofia, Ciência & Fé Cristã", styles)

    story.append(Paragraph("1. A Relação Harmônica entre Ciência e Fé Bíblica", styles['H1']))
    story.append(Paragraph(
        "A Bíblia não é um tratado de ciências naturais, mas quando aborda realidades do cosmos e da biologia, manifesta perfeita precisão inspirada por Deus. Aparente conflito entre a ciência e a Bíblia surge exclusivamente de duas fontes: <i>ou a teoria científica proposta é ainda incompleta e hipotética, ou o intérprete da Bíblia distorceu o texto sagrado</i>. A lógica formal (como demonstrado pelo Teorema de Incompletude de Gödel) atesta que nenhum sistema axiomático fechado prova a si mesmo sem recorrer a pressupostos transcendentes.",
        styles['Body']
    ))

    story.append(Paragraph("2. O Ajuste Fino do Planeta Terra", styles['H1']))
    story.append(Paragraph(
        "A astrofísica moderna confirma o princípio antrópico e as condições matemáticas extraordinárias da Terra:<br/>"
        "• <b>Composição Atmosférica Ideal:</b> Exatamente 21% de oxigênio e 78% de nitrogênio (abaixo de 18% sufocaria e acima de 25% tornaria a atmosfera inflamável e tóxica).<br/>"
        "• <b>Estabilização da Órbita e da Lua:</b> A massa da Lua e sua distância média de 384.000 km exercem estabilização gravitacional contínua sobre a inclinação axial da Terra.<br/>"
        "• <b>Inclinação de 23,5° do Eixo Terrestre:</b> Proporciona as quatro estações regulares e equilíbrio térmico planetário.<br/>"
        "• <b>Escudo Cósmico contra Meteoros:</b> Os planetas gigantes exteriores (Júpiter e Saturno) atraem e desviam cometas e asteroides que destruiriam a biosfera terrestre.",
        styles['Body']
    ))

    story.append(Paragraph("3. As Leis da Natureza e o Confronto com o Evolucionismo", styles['H1']))
    story.append(Paragraph(
        "• <b>Lei da Causa e Efeito:</b> Nenhum efeito pode ser maior que sua causa em complexidade e informação. O Universo requer um Criador onipotente e inteligente.<br/>"
        "• <b>Segunda Lei da Termodinâmica (Entropia):</b> Os sistemas naturais tendem espontaneamente da ordem para a desordem, contrariando a tese de auto-organização ascendente espontânea da matéria inanimada.<br/>"
        "• <b>Lei da Biogênese (Pasteur):</b> A vida só provém de vida pré-existente da mesma espécie.<br/>"
        "• <b>Explosão Cambriana no Registro Fóssil:</b> O surgimento repentino e completo de todos os grandes filos animais sem formas transicionais intermediárias autentica a criação imediata descrita em Gênesis.",
        styles['Body']
    ))

    story.append(Paragraph("4. Antecipações Científicas Milenares na Bíblia", styles['H1']))
    story.append(Paragraph(
        "Séculos antes da moderna comprovação científica, as Escrituras registraram:<br/>"
        "• <b>A esfericidade da Terra:</b> Is 40:22 ('Ele está assentado sobre a redondeza da terra').<br/>"
        "• <b>A Terra suspensa no espaço vazio:</b> Jó 26:7 ('suspende a terra sobre o nada').<br/>"
        "• <b>O peso do ar e da pressão atmosférica:</b> Jó 28:25 ('quando deu peso ao vento').<br/>"
        "• <b>O ciclo hidrológico completo:</b> Ec 1:7 e Jó 36:27-28 (evaporação, condensação e precipitação).<br/>"
        "• <b>A matéria constituída de partículas invisíveis (átomos):</b> Hb 11:3 ('aquilo que vemos não foi feito do que é visível').<br/>"
        "• <b>A circuncisão no 8º dia:</b> Gn 17:12 (único dia da vida em que o nível de protrombina atinge 110%, prevenindo hemorragias neonatais).",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF A Bíblia e a Ciência gerado com sucesso.")

# ==========================================
# 4. TIPOLOGIA E SIMBOLOGIA BÍBLICA
# ==========================================
def gerar_pdf_tipologia_simbologia():
    arquivo = os.path.join(PDF_DIR, "tipologia-e-simbologia.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Tipologia & Simbologia Bíblica", "A Linguagem das Sombras Proféticas, o Tabernáculo e o Significado Teológico dos Números", "Hermenêutica Sagrada & Teologia Bíblica", styles)

    story.append(Paragraph("1. O Que é Tipo e Antítipo?", styles['H1']))
    story.append(Paragraph(
        "A Tipologia bíblica é a ciência hermenêutica que estuda as pessoas, instituições e eventos do Antigo Testamento designados por Deus para prefigurar profeticamente realidades redentoras do Novo Testamento. O <b>Tipo</b> é a sombra terrena histórica (<i>typos</i>), enquanto o <b>Antítipo</b> é o cumprimento espiritual consumado em Jesus Cristo e na Sua Igreja (Hb 10:1; Cl 2:17). Exemplos clássicos: o Cordeiro Pascal (1 Co 5:7), a Serpente de Bronze (Jo 3:14), o Maná do Céu (Jo 6:51) e Jonas no ventre do peixe (Mt 12:40).",
        styles['Body']
    ))

    story.append(Paragraph("2. O Significado Sagrado dos Números Bíblicos", styles['H1']))
    story.append(Paragraph(
        "• <b>1:</b> Unidade e soberania divina (Dt 6:4; Ef 4:5-6).<br/>"
        "• <b>2:</b> Testemunho competente ou distinção/aliança (Dt 19:15; Mt 18:20).<br/>"
        "• <b>3:</b> A Trindade santa, plenitude divina e perfeição nas realizações (Mt 28:19).<br/>"
        "• <b>4:</b> O mundo criado, a terra e as direções cardeais (Ap 7:1; 4 evangelhos).<br/>"
        "• <b>5:</b> A graça e a revelação divina (Pentateuco, 5 pedras de Davi, 5 dons ministeriais).<br/>"
        "• <b>6:</b> O número do ser humano e dos limites do esforço humano caído (Gn 1:27).<br/>"
        "• <b>7:</b> Perfeição sagrada, descanso divino e totalidade espiritual (Gn 2:2; Ap 1-3).<br/>"
        "• <b>8:</b> Novo começo, ressurreição e nova aliança (circuncisão ao 8º dia; 8 salvos na arca).<br/>"
        "• <b>10:</b> Ordem e completude na responsabilidade moral (10 mandamentos).<br/>"
        "• <b>12:</b> Governo divino e eleição (12 tribos de Israel e 12 apóstolos do Cordeiro).<br/>"
        "• <b>40:</b> Período probatório, disciplina e preparação espiritual (40 dias de jejum de Cristo).",
        styles['Body']
    ))

    story.append(Paragraph("3. A Tipologia do Tabernáculo e seus Metais", styles['H1']))
    story.append(Paragraph(
        "Cada detalhe do Tabernáculo no deserto aponta para o mistério da encarnação e expiação:<br/>"
        "• <b>O Altar de Bronze:</b> O julgamento do pecado na cruz do Calvário (Êx 27).<br/>"
        "• <b>A Bacia de Bronze:</b> A santificação diária e o lavar purificador da Palavra (Hb 4:12).<br/>"
        "• <b>A Mesa dos Pães da Proposição:</b> Cristo como o verdadeiro Pão da Vida (Jo 6:35).<br/>"
        "• <b>O Candelabro de Ouro Puro:</b> A iluminação contínua e perfeita do Espírito Santo.<br/>"
        "• <b>O Altar de Incenso:</b> A intercessão sacerdotal e as orações dos santos.<br/>"
        "• <b>A Arca da Aliança e o Propiciatório:</b> O trono da misericórdia divina onde a justiça e a graça se beijam pelo sangue expiatório.<br/>"
        "• <b>Os Metais e Cores:</b> Bronze = julgamento do pecado; Prata = resgate e redenção; Ouro = glória divina e deidade; Azul = origem celestial; Púrpura = realeza messiânica; Carmesim = sangue sacrifical; Linho branco = justiça e pureza imaculada.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Tipologia e Simbologia gerado com sucesso.")

# ==========================================
# 5. RELIGIÕES MUNDIAIS I
# ==========================================
def gerar_pdf_religioes_mundiais():
    arquivo = os.path.join(PDF_DIR, "religioes-mundiais-1.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Religiões Mundiais I", "A Busca Humana pelo Sagrado: Cultos Antigos, Mitologias Clássicas, Hinduísmo e Siquismo", "História das Religiões & Missiologia", styles)

    story.append(Paragraph("1. Origem e Fenomenologia da Religião", styles['H1']))
    story.append(Paragraph(
        "A palavra religião provém do latim <i>religare</i> ('religar', restabelecer a comunhão perdida entre a criatura e o Criador). O ser humano é essencialmente religioso e traz a eternidade no coração (Ec 3:11). Na história, a religiosidade evoluiu por três fases: a fase <i>mítica e animista</i> (adoração de forças impessoais da natureza e espíritos ancestrais), a fase <i>politeísta funcional</i> (panteões de deuses com formas antropomórficas e zoomórficas) e a fase <i>monoteísta</i> (busca pelo Deus Único e transcendente).",
        styles['Body']
    ))

    story.append(Paragraph("2. As Religiões da Antiguidade no Oriente e no Ocidente", styles['H1']))
    story.append(Paragraph(
        "• <b>Mesopotâmia (Suméria, Assíria e Babilônia):</b> Babel e os Zigurates construídos sob Ninrode; adoração astral e o panteão de mais de 2.500 divindades chefiado por Marduk (Bel) e Ishtar.<br/>"
        "• <b>Egito Antigo:</b> A divinização do Faraó como filho de Rá; culto a Osíris, Ísis e Hórus; preocupação com a vida além-túmulo e o ritual de mumificação exposto no 'Livro dos Mortos'.<br/>"
        "• <b>Canaã:</b> Cultos cruentos da fertilidade dedicados a Baal e Astarte, com práticas de prostituição ritual e sacrifício de crianças a Moloque.<br/>"
        "• <b>Grécia e Roma:</b> Politeísmo antropomórfico do Monte Olimpo (Zeus/Júpiter, Ares/Marte, Afrodite/Vênus), marcado por hedonismo e culminando no culto imperial romano.<br/>"
        "• <b>Zoroastrismo (Pérsia):</b> O dualismo cósmico entre Ahura-Mazda (o espírito do bem) e Angra-Mainyu (o espírito do mal), regido pelo livro sagrado Zend-Avesta.",
        styles['Body']
    ))

    story.append(Paragraph("3. O Hinduísmo e suas Correntes", styles['H1']))
    story.append(Paragraph(
        "Com raízes nas migrações arianas ao Vale do Indo (c. 1500 a.C.), o Hinduísmo desenvolveu-se a partir dos <b>Vedas</b> e dos <b>Upanishadas</b>. Destaca o conceito panteísta de <i>Brahman</i> (a Alma Suprema Universal) e <i>Atman</i> (a alma individual). Ensina a doutrina do <i>Karma</i> (lei de causa e efeito das ações), <i>Samsara</i> (o ciclo contínuo de reencarnações e transmigração da alma), <i>Maya</i> (o mundo como ilusão) e <i>Moksha</i> (libertação final da roda das encarnações). A adoração popular organiza-se na <b>Trimurti</b>: Brahma (criador), Vishnu (preservador) e Shiva (destruidor).",
        styles['Body']
    ))

    story.append(Paragraph("4. O Siquismo: Origem e Doutrina", styles['H1']))
    story.append(Paragraph(
        "Fundado por <b>Guru Nanak (1469-1539)</b> na região do Punjab (noroeste da Índia), o Siquismo nasceu como um movimento sincrético e reformador que reuniu elementos monoteístas do Islã com tradições espirituais indianas. Rejeita veementemente o sistema de castas e a adoração a ídolos materiais. Seu livro sagrado é o <b>Guru Granth Sahib</b> (considerado o guru vivo e perpétuo). Sob o décimo guru, Gobind Singh, foi formada a irmandade militar <i>Khalsa</i>, cujos membros usam os Cinco K (cabelos não cortados, pente, calção, bracelete de aço e espada).",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Religiões Mundiais I gerado com sucesso.")

# ==========================================
# ROTEIROS DE ÁUDIO PARA EDGE-TTS
# ==========================================
SEXTA_AUDIO_TEXTS = {
    "arqueologia_biblica": """Módulo Arqueologia Bíblica, apresentado pela plataforma Teologia Acessível.
A arqueologia é a ciência que investiga o passado através dos vestígios materiais e inscrições preservadas pelo tempo.
Nesta disciplina, percorremos os períodos da história bíblica, desde o Crescente Fértil até o Império Romano, examinando os métodos de datação pelo Carbono-14 e termoluminescência.
Descubra como os tabletes de Nuzi e Mari, a Pedra Moabita e os manuscritos do Mar Morto em Qumran confirmam a soberana fidelidade histórica da Palavra de Deus.""",

    "dispensacoes_aliancas": """Módulo Dispensações e Alianças, da plataforma universitária Teologia Acessível.
Compreenda o plano eterno de Deus desdobrado ao longo dos séculos.
Estudamos as sete dispensações bíblicas, desde a Inocência no Éden até o Reino Milenial de Cristo, e as oito grandes alianças seladas pelo Criador, culminando na Nova Aliança da graça.
Em cada período histórico, a humanidade falhou, mas a graça soberana de Deus revelou em Jesus Cristo o centro vivo de toda a redenção humana.""",

    "biblia_ciencia": """Módulo A Bíblia e a Ciência, apresentado pela Teologia Acessível.
Verdadeira ciência e fé bíblica caminham em perfeita harmonia.
Neste módulo, exploramos as evidências do ajuste fino do cosmos, a física das leis da termodinâmica e da biogênese em contraste com o evolucionismo, e as notáveis antecipações científicas das Escrituras.
Milhares de anos antes da comprovação científica moderna, a Bíblia já revelava a redondeza da Terra, o peso do ar, a matéria invisível e a ordem maravilhosa da criação divina.""",

    "tipologia_simbologia": """Módulo Tipologia e Simbologia Bíblica, pela plataforma Teologia Acessível.
As Escrituras Sagradas estão repletas de figuras, sombras proféticas e símbolos celestiais que apontam para a glória de Jesus Cristo.
Aprenda a decifrar a rica linguagem do Tabernáculo, o mistério expiatório dos seus metais e véus, e o significado teológico dos números sagrados na revelação divina.
Ao contemplar as sombras do Antigo Testamento cumpridas na luz do Novo Testamento, sua fé será ricamente fortalecida.""",

    "religioes_mundiais": """Módulo Religiões Mundiais I, da formação teológica superior Teologia Acessível.
Investigamos a incessante busca da humanidade por Deus ao longo das eras e culturas.
Analisamos as crenças da antiga Mesopotâmia, o culto egípcio aos mortos, os deuses da Grécia e Roma, e os grandes sistemas da Índia: o hinduísmo védico, a lei do karma, e o siquismo fundado por Guru Nanak.
Um estudo indispensável para compreender o coração humano e proclamar com sabedoria o Evangelho da verdade."""
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
    for chave, texto in SEXTA_AUDIO_TEXTS.items():
        arq_m = os.path.join(AUDIO_DIR, f"{chave}_masculino.mp3")
        arq_f = os.path.join(AUDIO_DIR, f"{chave}_feminino.mp3")
        tarefas.append(gerar_audio_edge(texto, arq_m, "pt-BR-AntonioNeural"))
        tarefas.append(gerar_audio_edge(texto, arq_f, "pt-BR-FranciscaNeural"))
    await asyncio.gather(*tarefas)

if __name__ == "__main__":
    print("--- INICIANDO COMPILAÇÃO DOS 5 NOVOS PDFS TEOLOGIA ACESSÍVEL ---")
    gerar_pdf_arqueologia_biblica()
    gerar_pdf_dispensacoes_aliancas()
    gerar_pdf_biblia_e_ciencia()
    gerar_pdf_tipologia_simbologia()
    gerar_pdf_religioes_mundiais()
    print("--- TODOS OS 5 PDFS COMPILADOS COM SUCESSO ---")

    print("--- GRAVANDO AUDIOBOOKS MASCULINO E FEMININO PT-BR ---")
    asyncio.run(gravar_todos())
    print("--- GRAVAÇÕES FINALIZADAS COM SUCESSO ---")
