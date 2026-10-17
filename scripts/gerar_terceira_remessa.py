# -*- coding: utf-8 -*-
"""
Gerador da Terceira Remessa de PDFs e Audiobooks Oficiais
Teologia Acessível - Ensino Superior Livre
Módulos: Teontologia, Bibliologia, Angelologia, Antropologia Teológica e Cristologia.
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
# 1. TEONTOLOGIA (A DOUTRINA DE DEUS)
# ==========================================
def gerar_pdf_teontologia():
    arquivo = os.path.join(PDF_DIR, "teontologia.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Teontologia", "A Doutrina do Deus Trino: Existência, Atributos, Decretos e Soberania", "Teologia Sistemática I", styles)

    story.append(Paragraph("1. O Que é Teontologia?", styles['H1']))
    story.append(Paragraph(
        "A Teontologia (do grego <i>Theos</i> = Deus, <i>Ontos</i> = Ente/Ser, e <i>Logos</i> = Estudo) é o ramo basilar da Teologia Sistemática que se ocupa da existência, essência, decretos, obras e atributos de Deus. Estabelece a distinção fundamental entre o Criador auto-existente e as Suas criaturas.",
        styles['Body']
    ))

    story.append(Paragraph("2. Provas Filosóficas & Argumentos Racionais da Existência de Deus", styles['H1']))
    story.append(Paragraph("• <b>Argumento Ontológico:</b> A ideia universal na mente humana de um Ser sumamente perfeito exige a Sua existência necessária (Santo Anselmo, Descartes).", styles['Bullet']))
    story.append(Paragraph("• <b>Argumento Cosmológico:</b> O universo contingente requer uma Causa Primeira inteligente, necessária e incausada para vir à existência (Hebreus 3:4).", styles['Bullet']))
    story.append(Paragraph("• <b>Argumento Teleológico:</b> O desígnio sublime, a ordem matemática e a finalidade adaptativa de cada elemento da criação comprovam um Arquiteto Soberano (Sl 94:9).", styles['Bullet']))
    story.append(Paragraph("• <b>Argumento Moral:</b> A voz universal da consciência e o imperativo moral categórico de justiça em todos os povos provêm de um Legislador Santo (Rm 2:14-16).", styles['Bullet']))
    story.append(Paragraph("• <b>Argumento Histórico/Etnológico:</b> O fenômeno religioso em todas as eras e culturas reflete a estampa de Deus gravada na natureza humana.", styles['Bullet']))

    story.append(Paragraph("3. A Trindade Divina & Atributos de Deus", styles['H1']))
    story.append(Paragraph(
        "O Deus único (<i>Elohim</i>, unidade composta em Dt 6:4) subsiste eternamente em três Pessoas divinas, co-iguais e co-eternas: o Pai, o Filho e o Espírito Santo (Mt 28:19; 2 Co 13:13).<br/>"
        "• <b>Atributos Naturais (Incomunicáveis):</b> Auto-existência, Eternidade (Sl 90:2), Onisciência (Sl 139), Onipotência (Gn 17:1), Onipresença (Jr 23:24) e Imutabilidade.<br/>"
        "• <b>Atributos Morais (Comunicáveis):</b> Santidade absoluta (Is 6:3), Justiça e Retidão (Sl 145:17), Misericórdia, Graça, Bondade (Sl 103:8) e Amor eterno (1 Jo 4:8).",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Teontologia gerado com sucesso.")

# ==========================================
# 2. BIBLIOLOGIA (A DOUTRINA DAS ESCRITURAS)
# ==========================================
def gerar_pdf_bibliologia():
    arquivo = os.path.join(PDF_DIR, "bibliologia.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Bibliologia", "Origem, Inspiração Divina, Canonicidade e Preservação da Bíblia", "Teologia Sistemática I", styles)

    story.append(Paragraph("1. Conceituação da Bibliologia", styles['H1']))
    story.append(Paragraph(
        "A Bibliologia estuda a natureza singular das Sagradas Escrituras: sua revelação progressiva, inspiração plenária e verbal pelo Espírito Santo (2 Tm 3:16; 2 Pe 1:21), infalibilidade doutrinária, formação do cânon e história de sua transmissão.",
        styles['Body']
    ))

    story.append(Paragraph("2. A Inspiração Verbal e Plenária", styles['H1']))
    story.append(Paragraph(
        "A verdadeira doutrina da inspiração bíblica afirma que o Espírito Santo capacitou homens santos para redigir a mensagem de Deus sem mistura de erro, preservando suas personalidades, vocabulários e estilos (1 Co 2:13).<br/>"
        "Refutam-se as teorias falsas: a inspiração puramente natural (gênio humano), a inspiração parcial (apenas partes seriam de Deus) ou o ditado mecânico que anula o intelecto do profeta.",
        styles['Body']
    ))

    story.append(Paragraph("3. O Cânon das Escrituras & os Apócrifos", styles['H1']))
    story.append(Paragraph(
        "• <b>Cânon Hebraico (39 livros no Protestantismo / 24 na contagem sinagogal):</b> Fixado definitivamente por Esdras e pelo sínodo de Jâmnia (90 d.C.). Jesus confirmou esta divisão tríplice: Lei, Profetas e Escritos/Salmos (Lc 24:44).<br/>"
        "• <b>Cânon do Novo Testamento (27 livros):</b> Reconhecido pela Igreja primitiva e confirmado formalmente nos Concílios de Hipona (393 d.C.) e Cartago (397 d.C.).<br/>"
        "• <b>Os Livros Apócrifos:</b> Textos como Tobias, Judite e Macabeus foram acrescentados pelo Concílio de Trento (1546 d.C.), mas nunca foram aceitos no cânon judaico nem citados por Jesus.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Bibliologia gerado com sucesso.")

# ==========================================
# 3. ANGELOLOGIA (ANJOS, SATANÁS E DEMÔNIOS)
# ==========================================
def gerar_pdf_angelologia():
    arquivo = os.path.join(PDF_DIR, "angelologia.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Angelologia", "A Doutrina dos Anjos de Deus, a Queda de Lúcifer e a Guerra Espiritual", "Teologia Sistemática II", styles)

    story.append(Paragraph("1. Natureza e Ofício dos Anjos Celestiais", styles['H1']))
    story.append(Paragraph(
        "Os anjos (do hebraico <i>mal'ak</i> e grego <i>angelos</i>, 'mensageiro') são criaturas espirituais, dotadas de intelecto, emoções e vontade, imortais e poderosos em força (Sl 103:20; Hb 1:14). Estão organizados em classes de autoridade celestial:<br/>"
        "• <b>Querubins:</b> Guardiões da santidade e do trono de Deus (Gn 3:24; Êx 25:18; Ez 1).<br/>"
        "• <b>Serafins:</b> Líderes da adoração ardente perante o Todo-Poderoso (Is 6:2-6).<br/>"
        "• <b>Arcanjo Miguel:</b> Príncipe guardião de Israel e comandante dos exércitos celestiais (Dn 10:13; Jd 9; Ap 12:7).",
        styles['Body']
    ))

    story.append(Paragraph("2. A Queda de Satanás & A Origem dos Demônios", styles['H1']))
    story.append(Paragraph(
        "Originalmente criado como querubim da guarda perfeito em sabedoria e formosura (Ez 28:12-15; Is 14:12-14), Lúcifer corrompeu-se pelo orgulho, almejando igualar-se ao Altíssimo. Foi precipitado em juízo, tornando-se Satanás (o adversário) e Diabo (o caluniador).<br/>"
        "Os <b>demônios</b> são os anjos caídos que acompanharam sua rebelião contra Deus (Mt 25:41). Atuam cegando os incrédulos, opondo-se à pregação do Evangelho e instigando à imoralidade e heresia.",
        styles['Body']
    ))

    story.append(Paragraph("3. A Vitória do Cristão", styles['H1']))
    story.append(Paragraph(
        "A derrota de Satanás foi decretada irreversivelmente na cruz do Calvário (Jo 12:31; Cl 2:15). O crente vence revestindo-se de toda a armadura de Deus (Ef 6:10-18), perseverando em oração e submissão ao Senhor: <i>'Sujeitai-vos a Deus, resisti ao diabo, e ele fugirá de vós'</i> (Tg 4:7).",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Angelologia gerado com sucesso.")

# ==========================================
# 4. ANTROPOLOGIA TEOLÓGICA
# ==========================================
def gerar_pdf_antropologia():
    arquivo = os.path.join(PDF_DIR, "antropologia-teologica.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Antropologia Teológica", "A Criação do Homem, Imagem e Semelhança, Queda e Doutrina do Pecado", "Teologia Sistemática II", styles)

    story.append(Paragraph("1. Origem & Natureza do Homem", styles['H1']))
    story.append(Paragraph(
        "A antropologia bíblica afirma que o ser humano não é produto do acaso cego ou da evolução materialista, mas fruto de um conselho soberano de Deus (<i>'Façamos o homem à nossa imagem'</i>, Gn 1:26). Foi criado como ápice da criação terrena para governar sob a bênção divina.",
        styles['Body']
    ))

    story.append(Paragraph("2. Dicotomismo vs. Tricotomismo & Propagação da Alma", styles['H1']))
    story.append(Paragraph(
        "• <b>Dicotomia:</b> O homem é composto de duas partes fundamentais: o corpo físico (material) e a alma/espírito (imaterial, Gn 2:7).<br/>"
        "• <b>Tricotomia:</b> O ser humano possui corpo (vida sensorial), alma (personalidade, mente e emoções) e espírito (capacidade de comunhão direta com Deus, 1 Ts 5:23; Hb 4:12).<br/>"
        "• <b>Teorias da Origem da Alma:</b> O <i>Criacionismo</i> sustenta que cada alma é criada imediatamente por Deus no ventre materno; o <i>Traducionismo</i> ensina que corpo e alma são transmitidos biologicamente pelos pais (apoio na unidade da raça em Adão).",
        styles['Body']
    ))

    story.append(Paragraph("3. A Queda e a Doutrina do Pecado (Hamartiologia)", styles['H1']))
    story.append(Paragraph(
        "Ao desobedecer deliberadamente no Éden por instigação satânica, Adão atuou como <b>cabeça federal e natural</b> de toda a raça humana. Como consequência, a natureza humana sofreu depravação e morte (física, espiritual e eterna, Rm 5:12).<br/>"
        "• <b>Visão Pelagiana (Herética):</b> Nega o pecado original e sustenta que o homem nasce sem inclinação ao mal.<br/>"
        "• <b>Visão Arminiana:</b> Reconhece a natureza corrompida, mas enfatiza a graça preveniente concedida a todos.<br/>"
        "• <b>Visão Calvinista:</b> Afirma a depravação total da vontade humana e a necessidade da soberana graça regeneradora.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Antropologia gerado com sucesso.")

# ==========================================
# 5. CRISTOLOGIA (A DOUTRINA DE CRISTO)
# ==========================================
def gerar_pdf_cristologia():
    arquivo = os.path.join(PDF_DIR, "cristologia.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Cristologia", "A Pessoa, Naturezas, Ofícios e a Obra Redentora de Jesus Cristo", "Teologia Sistemática III", styles)

    story.append(Paragraph("1. Pré-Existência & Deidade de Cristo", styles['H1']))
    story.append(Paragraph(
        "Jesus Cristo não iniciou Sua existência na manjedoura de Belém. Ele é o Verbo Eterno (<i>Logos</i>), co-eterno com o Pai, Criador e Sustentador de todas as coisas visíveis e invisíveis (Jo 1:1-3; Cl 1:16-17; Hb 1:2-3). As Escrituras conferem a Ele os títulos absolutos de Deus (Jo 20:28; Rm 9:5; Tt 2:13).",
        styles['Body']
    ))

    story.append(Paragraph("2. A Encarnação, a Verdadeira Humanidade & a Kenosis", styles['H1']))
    story.append(Paragraph(
        "Sem deixar de ser plenamente Deus, o Filho assumiu a verdadeira natureza humana através da concepção virginal pelo Espírito Santo (Lc 1:35).<br/>"
        "• <b>A Kenosis Bíblica (Fp 2:7):</b> O esvaziamento de Cristo consistiu no encobrimento voluntário de Sua glória celestial e na renúncia ao exercício independente de Suas prerrogativas divinas durante os dias de Sua carne, e <b>nunca</b> na perda de Sua deidade.",
        styles['Body']
    ))

    story.append(Paragraph("3. A União Hipostática & os Três Ofícios de Cristo", styles['H1']))
    story.append(Paragraph(
        "Em Cristo há duas naturezas completas — a divina e a humana — unidas indissoluvelmente em uma só Pessoa divina, sem confusão, sem mudança, sem divisão e sem separação (Concílio de Calcedônia, 451 d.C.).<br/>"
        "Cristo exerce perfeitamente os três ofícios prometidos no Antigo Testamento:<br/>"
        "1. <b>Profeta:</b> Revela a mente e a vontade de Deus aos homens (Dt 18:15; Hb 1:1-2).<br/>"
        "2. <b>Sacerdote:</b> Ofereceu a Si mesmo em sacrifício expiatório definitivo e vive eternamente intercedendo por nós (Sl 110:4; Hb 7:25).<br/>"
        "3. <b>Rei:</b> Ressuscitou com todo poder no céu e na terra, reina soberano sobre a Igreja e voltará em glória para estabelecer o Seu Reino eterno (Sl 2; Ap 19:16).",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Cristologia gerado com sucesso.")

# ==========================================
# GERAÇÃO DOS 10 ÁUDIOS NEURAIS PT-BR
# ==========================================
REMETAS_AUDIO_TEXTS = {
    "teontologia": """Módulo Teontologia, a Doutrina de Deus, apresentado pela plataforma Teologia Acessível.
Estudamos aqui o ser, a essência e a majestade do Deus Todo-Poderoso.
Examinamos os fundamentos racionais e bíblicos da existência divina através dos argumentos ontológico, cosmológico, teleológico e moral.
O Deus revelado nas Escrituras é Triúno: Pai, Filho e Espírito Santo, subsistindo eternamente em amor e perfeita comunhão.
Contemple os atributos divinos de santidade, justiça, misericórdia e onipotência, alicerces inabaláveis para a fé e para a vida cristã.""",

    "bibliologia": """Módulo Bibliologia, a Doutrina das Sagradas Escrituras, pela Teologia Acessível.
A Bíblia Sagrada é a inspirada, inerrante e suficiente Palavra de Deus entregue aos homens.
Compreenda o processo milagroso da inspiração plenária e verbal pelo Espírito Santo, a fixação histórica do cânon sagrado do Antigo e Novo Testamento e a rica trajetória dos manuscritos antigos.
A Palavra de Deus permanece para sempre como lâmpada para os nossos pés e luz para o nosso caminho.""",

    "angelologia": """Módulo Angelologia, o estudo dos Anjos, de Satanás e do Mundo Espiritual, da Teologia Acessível.
Investigamos a realidade das hostes celestiais criadas por Deus para servi-lo e ministrar em favor dos herdeiros da salvação.
Analisamos as classes de querubins, serafins e o arcanjo Miguel, bem como a rebelião cósmica de Lúcifer e a queda dos anjos que se tornaram espíritos malignos.
O cristão vive em vitória pela autoridade suprema do sangue de Cristo, revestindo-se de toda a armadura de Deus.""",

    "antropologia": """Módulo Antropologia Teológica, a Doutrina Bíblica do Homem, pela Teologia Acessível.
O ser humano foi criado à imagem e semelhança de Deus, dotado de dignidade incomparável, faculdades racionais e responsabilidade moral.
Examinamos a constituição humana em corpo, alma e espírito, a tragédia da queda no Éden e as profundas consequências do pecado original sobre a humanidade.
Mas em Cristo Jesus, o segundo Adão, a imagem de Deus é gloriosamente restaurada em santidade e verdade.""",

    "cristologia": """Módulo Cristologia, a Doutrina da Pessoa e Obra de Jesus Cristo, pela plataforma Teologia Acessível.
Jesus Cristo é o coração de toda a revelação bíblica, o Filho eterno de Deus que se fez homem para resgatar a humanidade caída.
Estudamos Sua pré-existência, a união perfeita de Suas naturezas divina e humana, e Seus ofícios eternos de Profeta, Sacerdote e Rei.
Pela Sua morte vicária na cruz, ressurreição triunfante e gloriosa ascensão, Ele nos reconciliou para sempre com o Pai celeste."""
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
    for chave, texto in REMETAS_AUDIO_TEXTS.items():
        arq_m = os.path.join(AUDIO_DIR, f"{chave}_masculino.mp3")
        arq_f = os.path.join(AUDIO_DIR, f"{chave}_feminino.mp3")
        tarefas.append(gerar_audio_edge(texto, arq_m, "pt-BR-AntonioNeural"))
        tarefas.append(gerar_audio_edge(texto, arq_f, "pt-BR-FranciscaNeural"))
    await asyncio.gather(*tarefas)

if __name__ == "__main__":
    print("--- GERANDO 5 NOVOS PDFS TEOLOGIA ACESSÍVEL ---")
    gerar_pdf_teontologia()
    gerar_pdf_bibliologia()
    gerar_pdf_angelologia()
    gerar_pdf_antropologia()
    gerar_pdf_cristologia()
    print("--- PDFS CONCLUÍDOS ---")

    print("--- GRAVANDO AUDIOBOOKS MASCULINO E FEMININO PT-BR ---")
    asyncio.run(gravar_todos())
    print("--- TODAS AS GRAVAÇÕES FINALIZADAS COM SUCESSO ---")
