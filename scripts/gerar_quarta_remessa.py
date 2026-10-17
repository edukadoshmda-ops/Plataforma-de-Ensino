# -*- coding: utf-8 -*-
"""
Gerador da Quarta Remessa de PDFs e Audiobooks Oficiais
Teologia Acessível - Ensino Superior Livre
Módulos: Soteriologia, Eclesiologia, Hamartiologia, Pneumatologia e Escatologia.
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
# 1. SOTERIOLOGIA (A DOUTRINA DA SALVAÇÃO)
# ==========================================
def gerar_pdf_soteriologia():
    arquivo = os.path.join(PDF_DIR, "soteriologia.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Soteriologia", "A Doutrina da Salvação: Redenção, Justificação, Regeneração e Adoção", "Teologia Sistemática III", styles)

    story.append(Paragraph("1. O Que é Soteriologia?", styles['H1']))
    story.append(Paragraph(
        "A Soteriologia (do grego <i>soteria</i> = salvação, e <i>logos</i> = estudo) é o estudo sistemático dos processos divinos e humanos da redenção. Trata da iniciativa soberana de Deus em resgatar a humanidade caída da condenação do pecado mediante o sacrifício perfeito de Cristo.",
        styles['Body']
    ))

    story.append(Paragraph("2. A Salvação em Três Tempos Bíblicos", styles['H1']))
    story.append(Paragraph("• <b>Tempo Passado:</b> Fomos salvos da culpa e da penalidade judicial do pecado (Lc 7:50; 2 Tm 1:9).", styles['Bullet']))
    story.append(Paragraph("• <b>Tempo Presente:</b> Estamos sendo salvos do poder, do hábito e do domínio cotidiano do pecado (Rm 6:14; 2 Co 3:18; Fp 2:12-13).", styles['Bullet']))
    story.append(Paragraph("• <b>Tempo Futuro:</b> Seremos salvos da própria presença do pecado na glorificação e redenção do nosso corpo (Rm 8:23; 1 Co 15:51-54).", styles['Bullet']))

    story.append(Paragraph("3. As Etapas do Processo Salvífico (Ordo Salutis)", styles['H1']))
    story.append(Paragraph(
        "• <b>Fé Salvadora & Arrependimento:</b> Resposta humana impulsionada pela graça; o crente confia plenamente em Cristo e abandona voluntariamente a prática do pecado (At 3:19).<br/>"
        "• <b>Regeneração:</b> O novo nascimento operado sobrenaturalmente pelo Espírito Santo na alma humana (Jo 3:3-5; Tt 3:5).<br/>"
        "• <b>Justificação:</b> Ato judicial declarativo de Deus pelo qual Ele perdoa todos os pecados e imputa ao crente a justiça perfeita de Cristo recebida pela fé (Rm 3:24-26; 5:1).<br/>"
        "• <b>Santificação:</b> Obra contínua da graça na renovação do homem interior segundo a imagem de Deus (1 Pe 1:15-16).<br/>"
        "• <b>Adoção (<i>Huiothesia</i>):</b> Concessão de todos os direitos e privilégios legais da família divina aos que creem (Jo 1:12; Rm 8:15).<br/>"
        "• <b>Glorificação:</b> A consumação final da salvação com a concessão de um corpo imortal incorruptível na volta de Cristo (Rm 8:30).",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Soteriologia gerado com sucesso.")

# ==========================================
# 2. ECLESIOLOGIA (A DOUTRINA DA IGREJA)
# ==========================================
def gerar_pdf_eclesiologia():
    arquivo = os.path.join(PDF_DIR, "eclesiologia.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Eclesiologia", "A Doutrina da Igreja: Organismo Vivo, Governo, Ordenanças e Missão Global", "Teologia Sistemática IV", styles)

    story.append(Paragraph("1. O Significado Bíblico de Igreja", styles['H1']))
    story.append(Paragraph(
        "O termo bíblico <i>Ekklesia</i> (do grego <i>ek</i> = para fora, e <i>klesis</i> = chamados) significa literalmente 'a assembleia dos chamados para fora'. No Novo Testamento, a Igreja não é um templo de alvenaria nem uma denominação humana, mas o Corpo Vivo de Cristo do qual Ele é o Cabeça soberano (Ef 1:22-23; Cl 1:18).",
        styles['Body']
    ))

    story.append(Paragraph("2. As Quatro Metáforas da Igreja", styles['H1']))
    story.append(Paragraph("• <b>O Corpo:</b> Unidade orgânica, interdependência dos membros e diversidade de dons sob a liderança de Cristo (1 Co 12).", styles['Bullet']))
    story.append(Paragraph("• <b>O Edifício / Templo Espiritual:</b> Construído sobre o fundamento dos apóstolos e profetas, sendo Cristo a pedra angular (Ef 2:20-22).", styles['Bullet']))
    story.append(Paragraph("• <b>O Rebanho:</b> Sob os ternos cuidados de Jesus, o Bom e Supremo Pastor das almas (Jo 10:11-16; 1 Pe 5:4).", styles['Bullet']))
    story.append(Paragraph("• <b>A Esposa de Cristo:</b> Representa o vínculo de amor sacrificial, pureza e fidelidade com o Noivo celestial (2 Co 11:2; Ap 19:7).", styles['Bullet']))

    story.append(Paragraph("3. As Duas Ordenanças Sagradas & Formas de Governo", styles['H1']))
    story.append(Paragraph(
        "• <b>O Batismo nas Águas:</b> Imersão do crente consciente como confissão pública de fé, simbolizando sua morte para o pecado e ressurreição em novidade de vida (Mt 28:19; Rm 6:3-5).<br/>"
        "• <b>A Ceia do Senhor:</b> Memorial solene da morte vicária de Cristo, comunhão espiritual dos santos e proclamação profética de Sua segunda vinda (1 Co 11:23-26).<br/>"
        "• <b>Missão Tríplice da Igreja:</b> Adoração ao Deus Altíssimo, Edificação e discipulado dos santos, e Evangelização de todas as nações (Mt 28:18-20).",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Eclesiologia gerado com sucesso.")

# ==========================================
# 3. HAMARTIOLOGIA (A DOUTRINA DO PECADO)
# ==========================================
def gerar_pdf_hamartiologia():
    arquivo = os.path.join(PDF_DIR, "hamartiologia.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Hamartiologia", "A Doutrina do Pecado: Natureza, Origem, Universalidade e Consequências", "Teologia Sistemática II", styles)

    story.append(Paragraph("1. Conceito e Definição Bíblica do Pecado", styles['H1']))
    story.append(Paragraph(
        "Hamartiologia provém do grego <i>hamartia</i> ('errar o alvo divino') e <i>logos</i> ('estudo'). A Bíblia define o pecado como transgressão e rebeldia contra a lei moral de Deus (1 Jo 3:4), iniquidade interior e ruptura voluntária de comunhão com o Criador santo.",
        styles['Body']
    ))

    story.append(Paragraph("2. O Que o Pecado NÃO É vs. O Que o Pecado É", styles['H1']))
    story.append(Paragraph("• <b>Não é mero acidente:</b> Resultou de um ato consciente e responsável de desobediência (Rm 5:12).", styles['Bullet']))
    story.append(Paragraph("• <b>Não é mera fraqueza natural:</b> É culpabilidade moral e hostilidade ativa contra a vontade de Deus (Rm 8:7).", styles['Bullet']))
    story.append(Paragraph("• <b>Não é simples ausência do bem:</b> Possui existência maligna e força corruptora que contamina o coração (Jr 17:9).", styles['Bullet']))

    story.append(Paragraph("3. Origem, Queda e Consequências Universais", styles['H1']))
    story.append(Paragraph(
        "• <b>Origem:</b> O pecado iniciou-se no mundo angélico pelo orgulho de Lúcifer (Is 14; Ez 28) e entrou na humanidade pela desobediência de Adão no Éden (Gn 3).<br/>"
        "• <b>Consequências:</b> Depravação da natureza humana, perda da justiça original, vergonha moral, culpa perante a Lei e a sentença tríplice da morte (física, espiritual e eterna).<br/>"
        "• <b>A Solução Divina:</b> Nenhuma obra humana pode expiar a culpa; unicamente a graça de Deus manifestada no sangue do Cordeiro restaura o homem à comunhão e vida eterna (Rm 5:18-21; 2 Co 5:21).",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Hamartiologia gerado com sucesso.")

# ==========================================
# 4. PNEUMATOLOGIA (A DOUTRINA DO ESPÍRITO SANTO)
# ==========================================
def gerar_pdf_pneumatologia():
    arquivo = os.path.join(PDF_DIR, "pneumatologia.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Pneumatologia", "A Pessoa, Deidade, Dons e o Fruto do Espírito Santo", "Teologia Sistemática III", styles)

    story.append(Paragraph("1. A Pessoa & Deidade do Espírito Santo", styles['H1']))
    story.append(Paragraph(
        "Pneumatologia (do grego <i>pneuma</i> = espírito, vento, fôlego) é o ramo da teologia que estuda a Terceira Pessoa da Trindade. O Espírito Santo não é uma força cega ou energia cósmica, mas uma Pessoa divina auto-consciente, possuidora de intelecto (1 Co 2:10-11), vontade soberana (1 Co 12:11) e sentimentos de amor e afeto (Rm 15:30; Ef 4:30). As Escrituras O chamam explicitamente de Deus (At 5:3-4).",
        styles['Body']
    ))

    story.append(Paragraph("2. Os Símbolos das Operações do Espírito", styles['H1']))
    story.append(Paragraph("• <b>Fogo:</b> Limpeza, purificação moral, zelo celestial e poder transformador (Is 4:4; Mt 3:11; At 2:3).", styles['Bullet']))
    story.append(Paragraph("• <b>Vento:</b> Ação regeneradora soberana, invisível aos olhos mas poderosa em seus efeitos vitais (Jo 3:8; At 2:2).", styles['Bullet']))
    story.append(Paragraph("• <b>Água:</b> Saciedade, fertilidade espiritual no deserto e rios de água viva fluindo do íntimo do crente (Jo 7:37-39).", styles['Bullet']))
    story.append(Paragraph("• <b>Azeite / Óleo:</b> Consagração sacerdotal, capacitação para o ministério e cura das feridas da alma (Lc 4:18).", styles['Bullet']))
    story.append(Paragraph("• <b>Selo:</b> Marca indelével de posse divina, garantia de autoridade e penhor do resgate eterno (Ef 1:13; 4:30).", styles['Bullet']))
    story.append(Paragraph("• <b>Pomba:</b> Brandura, pureza imaculada e amabilidade de Cristo gerada no crente (Mt 3:16).", styles['Bullet']))

    story.append(Paragraph("3. Os Nove Dons Espirituais & o Fruto do Espírito", styles['H1']))
    story.append(Paragraph(
        "• <b>Dons de Revelação:</b> Palavra de Sabedoria, Palavra da Ciência e Discernimento de Espíritos (1 Co 12:8-10).<br/>"
        "• <b>Dons de Poder:</b> Fé miraculosa, Dons de Curas e Operação de Maravilhas.<br/>"
        "• <b>Dons de Inspiração:</b> Profecia, Variedade de Línguas e Interpretação de Línguas.<br/>"
        "• <b>O Fruto do Espírito (Gl 5:22-23):</b> Amor (<i>Ágape</i>), Alegria (<i>Chara</i>), Paz (<i>Eirene</i>), Longanimidade (<i>Makrothumia</i>), Benignidade (<i>Chrestotes</i>), Bondade (<i>Agathosune</i>), Fidelidade (<i>Pistis</i>), Mansidão (<i>Prautes</i>) e Domínio Próprio (<i>Enkrateia</i>).",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Pneumatologia gerado com sucesso.")

# ==========================================
# 5. ESTUDOS DE ESCATOLOGIA
# ==========================================
def gerar_pdf_escatologia():
    arquivo = os.path.join(PDF_DIR, "escatologia.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Estudos de Escatologia Bíblica", "Profecias Finais: Sinais dos Tempos, Arrebatamento, As 70 Semanas, Milênio e Nova Jerusalém", "Teologia Sistemática IV", styles)

    story.append(Paragraph("1. Hermenêutica Escatológica & Sinais da Volta de Cristo", styles['H1']))
    story.append(Paragraph(
        "A Escatologia (do grego <i>eschatos</i> = últimas coisas) estuda o plano consumador de Deus na história humana. Adota-se o método de interpretação literal-gramatical das profecias, distinguindo os propósitos de Deus com a nação de Israel e com a Igreja de Cristo.",
        styles['Body']
    ))
    story.append(Paragraph("Sinais Proféticos Precursores:", styles['H2']))
    story.append(Paragraph("• O renascimento de Israel num só dia em 14 de maio de 1948 (Is 66:8; a figueira brotando em Mt 24:32).", styles['Bullet']))
    story.append(Paragraph("• Aceleração de catástrofes climáticas, abalos na natureza e terremotos em cadeia (Mt 24:7; Lc 21:25).", styles['Bullet']))
    story.append(Paragraph("• Apostasia doutrinária generalizada, esfriamento do amor e multiplicação de falsos cristos (2 Tm 3:1-5; Mt 24:11).", styles['Bullet']))

    story.append(Paragraph("2. O Arrebatamento da Igreja & o Tribunal de Cristo", styles['H1']))
    story.append(Paragraph(
        "Num abrir e fechar de olhos, ao soar da trombeta de Deus, os mortos em Cristo ressuscitarão incorruptíveis e os salvos vivos serão transformados e arrebatados para encontrar o Senhor nos ares (1 Co 15:51-54; 1 Ts 4:16-17). A Igreja é preservada da Grande Tribulação (a 'Ira Futura', 1 Ts 1:10; Ap 3:10).<br/>"
        "No céu, a Igreja comparecerá diante do <b>Tribunal de Cristo (Bema)</b> para julgamento das obras e concessão de galardões, celebrando em júbilo as <b>Bodas do Cordeiro</b> (Ap 19:7).",
        styles['Body']
    ))

    story.append(Paragraph("3. As 70 Semanas de Daniel & A Grande Tribulação", styles['H1']))
    story.append(Paragraph(
        "A profecia de Daniel 9:24-27 estipula 70 semanas de anos (490 anos) para Israel e Jerusalém. As 69 primeiras semanas se cumpriram exatamente entre a ordem de Artaxerxes para reconstruir os muros e a morte de Cristo. A 70ª semana (7 anos de Grande Tribulação) ocorrerá sob o domínio do Anticristo, desdobrando-se os juízos dos 7 Selos, 7 Trombetas e 7 Taças da ira de Deus.",
        styles['Body']
    ))

    story.append(Paragraph("4. A Segunda Vinda em Glória, o Milênio e a Nova Jerusalém", styles['H1']))
    story.append(Paragraph(
        "No clímax da Batalha do Armagedom, Cristo desce visivelmente no Monte das Oliveiras com Sua Igreja e anjos para aniquilar a Besta e o Falso Profeta (Ap 19:11-21; Zc 14:4). Satanás é preso no abismo e Cristo inaugura Seu <b>Reinado Milenar literal</b> na Terra em justiça e paz universal.<br/>"
        "Após o Juízo Final do Trono Branco (Ap 20:11-15), Deus inaugura os Novos Céus e a Nova Terra, fazendo descer do céu a esplêndida <b>Nova Jerusalém</b>, onde o tabernáculo de Deus habitará para sempre com os homens (Ap 21-22).",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Escatologia gerado com sucesso.")

# ==========================================
# GERAÇÃO DE ÁUDIOS NEURAIS PT-BR (QUARTA REMESSA)
# ==========================================
QUARTA_AUDIO_TEXTS = {
    "soteriologia": """Módulo Soteriologia, a Doutrina da Salvação, pela plataforma Teologia Acessível.
A salvação é a manifestação máxima do amor soberano de Deus pelo pecador.
Estudamos a redenção comprada pelo precioso sangue de Jesus Cristo, o Justo morrendo pelos injustos para nos conduzir ao Pai.
Compreenda os três tempos da salvação: livres da culpa do pecado no passado, guardados de seu domínio no presente e livres de sua presença na glorificação futura.
Pela justificação somos declarados santos diante de Deus, e pela adoção nos tornamos co-herdeiros com Cristo por toda a eternidade.""",

    "eclesiologia": """Módulo Eclesiologia, a Doutrina da Igreja, apresentado pela Teologia Acessível.
A Igreja é o corpo místico de Cristo na terra, a assembleia dos redimidos chamada para fora das trevas para a sua maravilhosa luz.
Não se trata de quatro paredes de alvenaria, mas de um organismo espiritual vivo dotado de ministérios, dons e propósitos eternos.
Examinamos as formas históricas de governo eclesiástico, a santidade das duas ordenanças: o Batismo bíblico e a Ceia do Senhor, e a nobre missão de adoração, edificação mútua e evangelização mundial.""",

    "hamartiologia": """Módulo Hamartiologia, o Estudo Teológico do Pecado, pela Teologia Acessível.
O pecado é o grande drama e a enfermidade moral da humanidade caída, caracterizado como rebeldia deliberada e desobediência à lei santa do Criador.
Investigamos a sua origem no mundo angélico com a queda de Lúcifer e sua entrada na raça humana pela desobediência de Adão no Éden.
O pecado gera degradação espiritual e condenação, mas em Jesus Cristo temos o antídoto divino: onde abundou o pecado, superabundou a maravilhosa graça salvadora de Deus.""",

    "pneumatologia": """Módulo Pneumatologia, a Doutrina do Espírito Santo, da plataforma Teologia Acessível.
O Espírito Santo é a Terceira Pessoa bendita da Trindade divina, plenamente Deus, dotado de intelecto, vontade e afeto.
Ele habita no coração de cada crente regenerado, guiando, consolando e capacitando a Igreja com poder celestial.
Conheça os símbolos bíblicos de suas operações: o fogo, o vento, a água, o azeite da unção e o selo da promessa.
Busque a plenitude dos dons espirituais e permita que o doce fruto do Espírito resplandeça em amor, alegria, paz e santidade em seu viver.""",

    "escatologia": """Módulo Escatologia Bíblica, a Doutrina dos Últimos Acontecimentos, pela Teologia Acessível.
Acompanhamos a revelação profética das Escrituras sobre a consumação gloriosa do plano eterno de Deus.
Examinamos os sinais precursores da volta de Cristo, o arrebatamento iminente da Igreja, o Tribunal de Cristo e a grande tribulação descrita no livro de Apocalipse.
Ao final dos tempos, Cristo retornará triunfante com seus santos para estabelecer seu Reino de justiça no Milênio, culminando na descida da gloriosa Nova Jerusalém, onde não haverá mais dor, nem pranto, nem morte."""
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
    for chave, texto in QUARTA_AUDIO_TEXTS.items():
        arq_m = os.path.join(AUDIO_DIR, f"{chave}_masculino.mp3")
        arq_f = os.path.join(AUDIO_DIR, f"{chave}_feminino.mp3")
        tarefas.append(gerar_audio_edge(texto, arq_m, "pt-BR-AntonioNeural"))
        tarefas.append(gerar_audio_edge(texto, arq_f, "pt-BR-FranciscaNeural"))
    await asyncio.gather(*tarefas)

if __name__ == "__main__":
    print("--- INICIANDO COMPILAÇÃO DOS 5 NOVOS PDFS TEOLOGIA ACESSÍVEL ---")
    gerar_pdf_soteriologia()
    gerar_pdf_eclesiologia()
    gerar_pdf_hamartiologia()
    gerar_pdf_pneumatologia()
    gerar_pdf_escatologia()
    print("--- TODOS OS 5 PDFS COMPILADOS COM SUCESSO ---")

    print("--- GRAVANDO AUDIOBOOKS MASCULINO E FEMININO PT-BR ---")
    asyncio.run(gravar_todos())
    print("--- GRAVAÇÕES FINALIZADAS COM SUCESSO ---")
