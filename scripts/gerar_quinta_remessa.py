# -*- coding: utf-8 -*-
"""
Gerador da Quinta Remessa de PDFs e Audiobooks Oficiais
Teologia Acessível - Ensino Superior Livre
Módulos: Evangelismo, Geografia Bíblica, Heresiologia, Administração Eclesiástica e Discipulado.
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
# 1. EVANGELISMO
# ==========================================
def gerar_pdf_evangelismo():
    arquivo = os.path.join(PDF_DIR, "evangelismo.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Evangelismo Prático", "A Grande Comissão, Metodologia de Abordagem, Plano de Salvação e Conquista de Almas", "Missiologia & Ministério Prático", styles)

    story.append(Paragraph("1. A Grande Comissão e a Vocação Evangelística", styles['H1']))
    story.append(Paragraph(
        "O evangelismo não é um departamento opcional na vida cristã, mas a própria razão de ser da Igreja de Cristo na terra (Mt 28:18-20; Mc 16:15). A palavra 'Evangelho' (do grego <i>euangelion</i>) significa 'boas novas de salvação'. Todo crente regenerado é comissionado como embaixador de Cristo (2 Co 5:20), munido da palavra da reconciliação.",
        styles['Body']
    ))

    story.append(Paragraph("2. A Chamada e as Qualificações do Evangelizador", styles['H1']))
    story.append(Paragraph(
        "A eficácia no testemunho pessoal exige qualificações espirituais, morais e relacionais fundamentais:<br/>"
        "• <b>Certeza Pessoal da Salvação:</b> Não se pode testemunhar com autoridade sobre aquilo que não se experimentou de fato (1 Jo 1:1-3).<br/>"
        "• <b>Amor pelas Almas Perdidas:</b> Olhar a multidão com a compaixão compassiva de Jesus (Mt 9:36).<br/>"
        "• <b>Vida de Oração e Cheia do Espírito:</b> O poder evangelístico é sobrenatural; somente o Espírito Santo convence da justiça, do pecado e do juízo (Jo 16:8; At 1:8).<br/>"
        "• <b>Conhecimento Bíblico Sólido:</b> Capacidade de manejar com clareza a Palavra da Verdade (2 Tm 2:15).<br/>"
        "• <b>Testemunho Irrepreensível:</b> Coerência ética que autentica a mensagem proclamada.",
        styles['Body']
    ))

    story.append(Paragraph("3. As 5 Verdades Básicas do Plano de Salvação", styles['H1']))
    story.append(Paragraph(
        "O evangelizador deve dominar o núcleo querigmático da mensagem bíblica em uma sequência pedagógica clara:<br/>"
        "1. <b>Deus ama o ser humano e tem um propósito glorioso para ele:</b> Jo 3:16; Jr 29:11.<br/>"
        "2. <b>O homem é pecador e está destituído da glória de Deus:</b> Rm 3:23; Is 59:2. O pecado produz separação espiritual e morte (Rm 6:23).<br/>"
        "3. <b>Jesus Cristo é o único caminho e provisão divina:</b> Jo 14:6; 1 Tm 2:5. Na cruz, Ele assumiu a nossa condenação substitutiva (1 Pe 2:24; Is 53:5).<br/>"
        "4. <b>A salvação é pela graça mediante a fé, e não por obras:</b> Ef 2:8-9; Tt 3:5.<br/>"
        "5. <b>É necessária uma decisão pessoal de acolhimento e confissão:</b> Jo 1:12; Rm 10:9-10; Ap 3:20.",
        styles['Body']
    ))

    story.append(Paragraph("4. Abordagem Pessoal, Superação de Objeções e Consolidação", styles['H1']))
    story.append(Paragraph(
        "No contato individual, deve-se criar pontes de diálogo sem espírito contencioso (2 Tm 2:24-25). Ao lidar com objeções frequentes — como o problema do sofrimento, a hipocrisia de religiosos ou o adiamento da decisão —, o evangelista responde com mansidão, sabedoria bíblica e empatia. Ao final da exposição, deve-se conduzir a pessoa à oração sincera de entrega e imediatamente iniciar o acompanhamento discipulador para sua integração na comunhão da igreja local.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Evangelismo gerado com sucesso.")

# ==========================================
# 2. GEOGRAFIA BÍBLICA
# ==========================================
def gerar_pdf_geografia_biblica():
    arquivo = os.path.join(PDF_DIR, "geografia-biblica.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Geografia Bíblica", "O Mundo do Antigo e Novo Testamento: Crescente Fértil, Canaã, Mares, Montes e Viagens Apostólicas", "Arqueologia & História Bíblica", styles)

    story.append(Paragraph("1. O Palco da Revelação: O Crescente Fértil", styles['H1']))
    story.append(Paragraph(
        "A Geografia Bíblica estuda o cenário físico, hidrográfico e orográfico onde se desdobrou a história da salvação. O Crescente Fértil, estendendo-se em forma de semicírculo desde o Golfo Pérsico até o delta do Rio Nilo no Egito, abrigou os grandes impérios da antiguidade: Suméria, Assíria, Babilônia, Pérsia e Egito. A Palestina ocupava posição estratégica como corredor comercial e militar internacional entre os continentes da Ásia e da África.",
        styles['Body']
    ))

    story.append(Paragraph("2. A Terra Prometida: Topografia e Hidrografia de Canaã", styles['H1']))
    story.append(Paragraph(
        "A geografia física da Palestina divide-se em quatro zonas longitudinais fundamentais:<br/>"
        "• <b>Planície Costeira:</b> Banhada pelo Mar Mediterrâneo (Planície Filístia e Planície de Sarom).<br/>"
        "• <b>Planalto Central ou Região Montanhosa:</b> As montanhas da Galileia, montes de Samaria e as colinas da Judeia.<br/>"
        "• <b>Vale do Jordão (Depressão do Ghor):</b> A maior fenda tectônica do planeta, alimentada pelo Rio Jordão, que nasce no sopé do Monte Hermom, atravessa o Mar da Galileia (Lago de Genesaré) e deságua no Mar Morto (390 metros abaixo do nível do mar).<br/>"
        "• <b>Planalto Oriental (Transjordânia):</b> Territórios históricos de Basã, Gileade, Moabe e Edom.",
        styles['Body']
    ))

    story.append(Paragraph("3. Montes Santos e Mares Bíblicos de Grande Relevância", styles['H1']))
    story.append(Paragraph(
        "• <b>Monte Sinai (Horebe):</b> Local da outorga da Lei e da aliança mosaica no deserto da Arábia.<br/>"
        "• <b>Monte Carmelo:</b> Cenário do confronto do profeta Elias contra os 450 profetas de Baal (1 Rs 18).<br/>"
        "• <b>Monte das Oliveiras:</b> Local da agonia no Getsêmani, da ascensão de Cristo e de Sua profetizada volta física (Zc 14:4; At 1:11).<br/>"
        "• <b>Mar da Galileia:</b> Centro dinâmico do ministério terreno de Jesus, onde Ele acalmou a tempestade, andou sobre as águas e multiplicou pães e peixes.",
        styles['Body']
    ))

    story.append(Paragraph("4. O Cenário Missionário do Novo Testamento", styles['H1']))
    story.append(Paragraph(
        "No Novo Testamento, a geografia se expande do cenário rural da Galileia e urbano de Jerusalém para as grandes metrópoles do Império Romano: Antioquia da Síria, Éfeso, Corinto, Filipos, Atenas e Roma. As três grandes viagens missionárias do apóstolo Paulo, somadas à sua viagem como prisioneiro até a capital do império, demonstram a expansão irresistível do Evangelho cruzando fronteiras marítimas e culturais.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Geografia Bíblica gerado com sucesso.")

# ==========================================
# 3. HERESIOLOGIA
# ==========================================
def gerar_pdf_heresiologia():
    arquivo = os.path.join(PDF_DIR, "heresiologia.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Heresiologia Bíblica", "O Discernimento Cristão das Seitas e Desvios Doutrinários à Luz das Escrituras", "Teologia Sistemática & Apologética", styles)

    story.append(Paragraph("1. Conceito e Anatomia das Heresias", styles['H1']))
    story.append(Paragraph(
        "Heresiologia (do grego <i>hairesis</i> = escolha particular, facção, divisão, e <i>logos</i> = estudo) é o ramo da teologia que investiga e refuta sistemas doutrinários que distorcem as verdades fundamentais das Escrituras. As seitas geralmente compartilham marcas estruturais idênticas: acréscimo de revelações extrabíblicas, depreciação da divindade ou da humanidade de Cristo, salvação por obras humanas, liderança carismática autoritária e exclusivismo sectário ('apenas nosso grupo se salva').",
        styles['Body']
    ))

    story.append(Paragraph("2. Principais Movimentos Heterodoxos e suas Falácias", styles['H1']))
    story.append(Paragraph(
        "• <b>Unicismo / Modalismo:</b> Negação da Trindade bíblica; defendem que Deus existe em uma só Pessoa que troca de papéis ou 'máscaras' temporárias (Pai no AT, Filho nos Evangelhos, Espírito na Igreja). Refutação: Mt 3:16-17; Jo 14:16; 17:1-5.<br/>"
        "• <b>Testemunhas de Jeová (Russellismo):</b> Reedição do antigo arrianismo condenado em Nicéia (325 d.C.); ensinam que Jesus é uma criatura (arcanjo Miguel criado) e negam a personalidade do Espírito Santo. Refutação: Jo 1:1; Cl 1:16-17; Tt 2:13; Hb 1:8.<br/>"
        "• <b>Mormonismo (Igreja de Jesus Cristo dos Santos dos Últimos Dias):</b> Ensinam o politeísmo (deuses que foram homens), casamento celestial e acrescentam o Livro de Mórmon como escritura infalível. Refutação: Is 43:10; 44:6; Gl 1:8.<br/>"
        "• <b>Espiritismo Kardecista:</b> Crença na reencarnação sucessiva, evolução pessoal pelas obras e comunicação necromântica com espíritos dos mortos. Refutação: Hb 9:27 ('ao homem está ordenado morrer uma só vez, vindo depois disso o juízo'); Dt 18:10-12.<br/>"
        "• <b>Movimento da Nova Era:</b> Mistura de panteísmo oriental ('tudo é Deus e nós somos deuses'), ocultismo, astrologia e relativismo moral absoluto. Refutação: Rm 1:21-25.",
        styles['Body']
    ))

    story.append(Paragraph("3. O Discernimento Bíblico e o Dever Apologético", styles['H1']))
    story.append(Paragraph(
        "O apóstolo Judas exortou: 'batalhai pela fé que uma vez foi entregue aos santos' (Jd 1:3). O obreiro de Cristo não deve alimentar ódio aos membros de seitas, mas recebê-los com compaixão e firmeza bíblica, desmontando os sofismas e iluminando suas mentes com a suficiência salvadora de Jesus Cristo.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Heresiologia gerado com sucesso.")

# ==========================================
# 4. ADMINISTRAÇÃO ECLESIÁSTICA
# ==========================================
def gerar_pdf_administracao_eclesiastica():
    arquivo = os.path.join(PDF_DIR, "administracao-eclesiastica.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Administração Eclesiástica", "Gestão Ministerial, Organização Bíblica, Estrutura Legal e Governança de Igrejas", "Teologia Prática & Gestão", styles)

    story.append(Paragraph("1. A Tríplice Dimensão da Igreja", styles['H1']))
    story.append(Paragraph(
        "A Igreja de Cristo possui três dimensões complementares: <b>Espiritual</b> (o corpo místico de Cristo e santuário do Espírito Santo), <b>Orgânica / Social</b> (comunidade viva de crentes reunida em comunhão e cooperação) e <b>Jurídico-Administrativa</b> (instituição legal regida pelo Código Civil, estatutos sociais e ordenamento jurídico vigente). Uma administração excelente honra a Deus zelando pelo que é honesto não só diante do Senhor, mas também diante dos homens (2 Co 8:21).",
        styles['Body']
    ))

    story.append(Paragraph("2. O Modelo Bíblico de Delegação: Jetro e Moisés (Êxodo 18)", styles['H1']))
    story.append(Paragraph(
        "A centralização excessiva leva ao esgotamento físico do líder e à lentidão nas decisões comunitárias. O conselho de Jetro a Moisés ensina o princípio milenar da liderança compartilhada: seleção de homens tementes a Deus, verdadeiros, que aborreçam a avareza, para liderar sobre grupos de mil, cem, cinquenta e dez, reservando aos líderes principais a intercessão e as questões doutrinárias superiores.",
        styles['Body']
    ))

    story.append(Paragraph("3. As Funções Clássicas da Gestão Eclesiástica", styles['H1']))
    story.append(Paragraph(
        "• <b>Previsão / Planejamento:</b> Estabelecer metas espirituais e materiais, calendários anuais e orçamentos operacionais ponderados.<br/>"
        "• <b>Organização:</b> Definir organogramas, responsabilidades claras, departamentos e atribuições ministeriais sem sobreposição de tarefas.<br/>"
        "• <b>Comando / Liderança Servidora:</b> Motivar e inspirar pelo exemplo cristão de serviço e integridade (1 Pe 5:2-3).<br/>"
        "• <b>Coordenação:</b> Harmonizar os ministérios (música, ensino, missões, jovens, ação social) em prol da visão unificada da congregação.<br/>"
        "• <b>Controle e Transparência:</b> Relatórios financeiros auditados, prestação periódica de contas e conformidade estatutária.",
        styles['Body']
    ))

    story.append(Paragraph("4. Conformidade Legal e Documentação Obrigatória", styles['H1']))
    story.append(Paragraph(
        "Toda igreja local organizada deve zelar por sua saúde jurídica: Estatuto Social registrado em Cartório de Registro Civil de Pessoas Jurídicas, inscrição ativa no CNPJ, Ata de Fundação e Posse de Diretoria devidamente arquivada, Livro de Atas, Livro de Rol de Membros e Livro de Registro de Casamentos religiosos para efeitos civis.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Administração Eclesiástica gerado com sucesso.")

# ==========================================
# 5. DISCIPULADO
# ==========================================
def gerar_pdf_discipulado():
    arquivo = os.path.join(PDF_DIR, "discipulado.pdf")
    doc = SimpleDocTemplate(arquivo, pagesize=letter, leftMargin=54, rightMargin=54, topMargin=54, bottomMargin=54)
    styles = get_styles()
    story = criar_capa("Discipulado Bíblico", "O Caminho do Crescimento Espiritual, Santificação, Mordomia e Vida Cristã Triunfante", "Teologia Prática & Vida Cristã", styles)

    story.append(Paragraph("1. O Chamado Fundamental para o Discipulado", styles['H1']))
    story.append(Paragraph(
        "Jesus não mandou apenas conquistar adeptos, mas 'fazer discípulos de todas as nações' (Mt 28:19). O termo grego <i>mathetes</i> significa 'aprendiz constante que se submete ao ensino e ao estilo de vida do seu Mestre'. Discipulado não se resume a um curso pontual de recepção de novos convertidos, mas é um processo contínuo de transformação do caráter à imagem de Cristo (Rm 8:29; Gl 4:19).",
        styles['Body']
    ))

    story.append(Paragraph("2. A Dinâmica da Comunhão Bíblica (Koinonia)", styles['H1']))
    story.append(Paragraph(
        "A vida cristã não foi concebida para o isolamento individualista. A Igreja Primitiva perseverava unanimemente na doutrina dos apóstolos, na comunhão fraterna, no partir do pão e nas orações (At 2:42). A <i>koinonia</i> promove suporte emocional, responsabilização mútua, exortação amorosa e o exercício dinâmico dos dons ministeriais dentro do Corpo.",
        styles['Body']
    ))

    story.append(Paragraph("3. As Disciplinas Espirituais para o Crescimento", styles['H1']))
    story.append(Paragraph(
        "• <b>Devocional e Oração Constante:</b> Oração perseverante como diálogo vital com o Pai celeste (1 Ts 5:17).<br/>"
        "• <b>Meditação nas Escrituras:</b> Amar e guardar a Palavra de Deus no coração para não pecar contra o Senhor (Sl 119:11).<br/>"
        "• <b>Jejum Bíblico:</b> A mortificação voluntária dos apetites carnais para intensificar a sensibilidade espiritual e a intercessão (Mt 6:16-18).<br/>"
        "• <b>Mordomia Cristã:</b> O entendimento de que Deus é o proprietário de tudo; o crente é administrador fiel de seu tempo, seus talentos e suas finanças (1 Co 4:2; Ml 3:10).<br/>"
        "• <b>Santificação Prática:</b> Renúncia aos padrões corruptos deste século e busca ativa pela pureza moral e ética (Rm 12:1-2; 1 Pe 1:15-16).",
        styles['Body']
    ))

    story.append(Paragraph("4. Maturidade Espiritual e Perseverança na Esperança", styles['H1']))
    story.append(Paragraph(
        "O discípulo maduro supera a infância espiritual vacilante (Ef 4:14) e se alimenta de alimento sólido. Nas adversidades e sofrimentos terrenos, apoia-se nas infalíveis promessas do Senhor, sabendo que as aflições deste tempo presente não são para comparar com a glória eterna que em nós há de ser revelada (Rm 8:18).",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Discipulado gerado com sucesso.")

# ==========================================
# ROTEIROS DE ÁUDIO PARA EDGE-TTS
# ==========================================
QUINTA_AUDIO_TEXTS = {
    "evangelismo": """Módulo Evangelismo Prático, apresentado pela plataforma Teologia Acessível.
O evangelismo é o coração pulsante da missão cristã na terra. A Grande Comissão confiada por Jesus em Mateus 28 desafia a cada um de nós a anunciar as boas novas da salvação com amor, ousadia e poder do Espírito Santo.
Aprenda os cinco passos fundamentais do plano salvífico, saiba como responder com mansidão e clareza às principais dúvidas e conduza pessoas a uma decisão pessoal e transformadora por Jesus Cristo.""",

    "geografia_biblica": """Módulo Geografia Bíblica, da plataforma de formação superior Teologia Acessível.
Conhecer a terra da Bíblia é iluminar cada detalhe dos relatos sagrados.
Viaje pelos caminhos do Crescente Fértil, contemple o Vale do Rio Jordão, as águas serenas do Mar da Galileia e as colinas sagradas de Jerusalém.
Ao estudar o relevo, o clima e as rotas comerciais de Canaã e as viagens apostólicas de Paulo pelo Mar Mediterrâneo, a história bíblica ganha vida e profundidade teológica em seus estudos.""",

    "heresiologia": """Módulo Heresiologia Bíblica, o estudo crítico das seitas e desvios doutrinários, pela Teologia Acessível.
O apóstolo Paulo alertou sobre lobos vorazes e ventos de doutrina que buscavam afastar os cristãos da simplicidade que há em Cristo.
Neste módulo, você examinará as características comuns dos movimentos heterodoxos: a negação da divindade de Cristo, acréscimos ao cânon sagrado e a salvação pelas obras.
Esteja preparado para defender a sã doutrina bíblica com firmeza acadêmica e genuíno amor cristão.""",

    "administracao_eclesiastica": """Módulo Administração Eclesiástica, governança e liderança pastoral pela Teologia Acessível.
A Igreja de Cristo é um organismo espiritual vivo, mas também uma instituição organizada que exige sabedoria, ordem e transparência.
Inspirados no sábio conselho de Jetro a Moisés em Êxodo 18, exploramos os fundamentos do planejamento, da delegação de autoridade, da gestão financeira idônea e do cumprimento rigoroso das leis vigentes.
Uma administração de excelência glorifica a Deus e fortalece a missão da igreja local.""",

    "discipulado": """Módulo Discipulado Bíblico e Vida Cristã, apresentado pela plataforma Teologia Acessível.
Fazer discípulos é o chamado supremo da Igreja. Não basta proclamar a fé; é indispensável caminhar lado a lado, ensinando a guardar todos os mandamentos de Cristo.
Mergulhe no estudo das disciplinas espirituais: a oração perseverante, a meditação na Palavra, o jejum bíblico e a mordomia do tempo e dos recursos.
Descubra a bênção da verdadeira comunhão e caminhe rumo à plena maturidade em Cristo Jesus."""
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
    for chave, texto in QUINTA_AUDIO_TEXTS.items():
        arq_m = os.path.join(AUDIO_DIR, f"{chave}_masculino.mp3")
        arq_f = os.path.join(AUDIO_DIR, f"{chave}_feminino.mp3")
        tarefas.append(gerar_audio_edge(texto, arq_m, "pt-BR-AntonioNeural"))
        tarefas.append(gerar_audio_edge(texto, arq_f, "pt-BR-FranciscaNeural"))
    await asyncio.gather(*tarefas)

if __name__ == "__main__":
    print("--- INICIANDO COMPILAÇÃO DOS 5 NOVOS PDFS TEOLOGIA ACESSÍVEL ---")
    gerar_pdf_evangelismo()
    gerar_pdf_geografia_biblica()
    gerar_pdf_heresiologia()
    gerar_pdf_administracao_eclesiastica()
    gerar_pdf_discipulado()
    print("--- TODOS OS 5 PDFS COMPILADOS COM SUCESSO ---")

    print("--- GRAVANDO AUDIOBOOKS MASCULINO E FEMININO PT-BR ---")
    asyncio.run(gravar_todos())
    print("--- GRAVAÇÕES FINALIZADAS COM SUCESSO ---")
