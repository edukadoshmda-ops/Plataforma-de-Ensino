# -*- coding: utf-8 -*-
"""
Gerador Completo de PDFs e Audiobooks (Voz Masculina e Feminina PT-BR)
Teologia Acessível - Ensino Superior Livre
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
        fontSize=15,
        leading=19,
        textColor=colors.HexColor("#0f2a43"),
        spaceBefore=14,
        spaceAfter=8,
        keepWithNext=True
    )
    styles['H2'] = ParagraphStyle(
        'H2',
        fontName='Helvetica-Bold',
        fontSize=11.5,
        leading=15,
        textColor=colors.HexColor("#1c538e"),
        spaceBefore=10,
        spaceAfter=5,
        keepWithNext=True
    )
    styles['H3'] = ParagraphStyle(
        'H3',
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=colors.HexColor("#334155"),
        spaceBefore=8,
        spaceAfter=4,
        keepWithNext=True
    )
    styles['Body'] = ParagraphStyle(
        'Body',
        fontName='Helvetica',
        fontSize=9,
        leading=13.5,
        textColor=colors.HexColor("#1e293b"),
        alignment=TA_JUSTIFY,
        spaceAfter=5
    )
    styles['Bullet'] = ParagraphStyle(
        'Bullet',
        fontName='Helvetica',
        fontSize=8.5,
        leading=12.5,
        textColor=colors.HexColor("#1e293b"),
        leftIndent=15,
        spaceAfter=3
    )
    styles['Destaque'] = ParagraphStyle(
        'Destaque',
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor("#0f2a43"),
        leftIndent=15,
        rightIndent=15,
        spaceBefore=6,
        spaceAfter=6
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
# 1. MANEIRAS E COSTUMES DA BÍBLIA
# ==========================================
def gerar_pdf_maneiras_costumes():
    arquivo = os.path.join(PDF_DIR, "maneiras-e-costumes-da-biblia.pdf")
    doc = SimpleDocTemplate(
        arquivo,
        pagesize=letter,
        leftMargin=54, rightMargin=54,
        topMargin=54, bottomMargin=54
    )
    styles = get_styles()
    story = criar_capa(
        "Maneiras e Costumes da Bíblia",
        "Vida Doméstica, Social, Geográfica e Cultural nos Tempos Bíblicos",
        "Arqueologia & Contexto Histórico-Bíblico",
        styles
    )

    story.append(Paragraph("1. Introdução ao Mundo Bíblico & Vida Doméstica", styles['H1']))
    story.append(Paragraph(
        "O estudo das maneiras e costumes da Bíblia é essencial para a correta exegese e hermenêutica das Escrituras Sagradas. Compreender como os povos antigos viviam, habitavam, se alimentavam e se comunicavam ilumina dezenas de passagens bíblicas que, de outro modo, permaneceriam obscuras ao leitor contemporâneo.",
        styles['Body']
    ))

    story.append(Paragraph("a) As Cidades nos Tempos Bíblicos", styles['H2']))
    story.append(Paragraph(
        "Eram numerosas, porém de dimensões reduzidas quando comparadas aos centros urbanos modernos. Jerusalém, Samaria e Cesareia eram raras exceções. Pela falta de edifícios públicos suntuosos (exceto na capital), as cidades tinham ruelas estreitas, sombrias e sem calçamento.<br/>"
        "As portas da cidade, que pressupunham muralhas fortificadas, são mencionadas desde os tempos patriarcais (Gn 19:1). Ali funcionava o fórum cívico, o tribunal e o centro dos negócios públicos (Gn 23:10,18; Dt 21:19; Rt 4:1). Mais tarde, surgiram os bazares e ruas cobertas cheias de comércio, típicos do Oriente Próximo.",
        styles['Body']
    ))

    story.append(Paragraph("b) As Habitações: Tendas e Casas", styles['H2']))
    story.append(Paragraph(
        "Os patriarcas de Israel habitavam em tendas, intimamente ligadas à vida pastoril e nômade (Gn 4:20). As tendas primitivas eram feitas de peles ou pelos negros de cabras fiados pelas mulheres (Êx 35:26; Ct 1:5). A tenda dividia-se internamente em compartimentos para o patriarca, mulheres e hóspedes.<br/>"
        "Com a fixação em Canaã, os hebreus ocuparam habitações de alvenaria. As casas dos humildes eram erguidas com tijolos de barro cozido ao sol (Jó 24:16; Mt 6:19). Já as famílias abastadas construíam em pedra, com pátio interno central, vestíbulo e o famoso terraço superior plano cercado por parapeito (Dt 22:8). O terraço era local de oração, descanso e vigília (At 10:9; Mc 2:4).",
        styles['Body']
    ))

    story.append(Paragraph("c) A Mobília e Utensílios Domésticos", styles['H2']))
    story.append(Paragraph(
        "A mobília oriental primava pela sobriedade e funcionalidade: esteiras no chão para repouso, pequenos bancos, mesas baixas e canapés (1 Sm 1:9; Mt 21:12). Os utensílios comuns incluíam panelas de barro ou cobre, odres de couro para líquidos e as lâmpadas a azeite de oliva, mantidas acesas permanentemente como símbolo de vida e hospitalidade (Pv 20:20; Sl 132:3).",
        styles['Body']
    ))

    story.append(Paragraph("2. O Vestuário e a Alimentação no Oriente Bíblico", styles['H1']))
    story.append(Paragraph("a) O Vestuário Hebraico", styles['H2']))
    story.append(Paragraph(
        "O traje diário básico compunha-se de duas peças essenciais: a <b>túnica interior</b> ajustada ao corpo (geralmente de linho ou algodão) e o <b>manto exterior</b> (amplo, de lã, preso aos ombros). O manto servia de cobertor noturno nas viagens (Dt 24:13).<br/>"
        "O cinto de couro ou linho cingia os lombos para longas caminhadas ou serviço árduo (Jr 13:1; Lc 12:35). As sandálias prendiam-se por correias, e tirá-las indicava solo sagrado (Êx 3:5) ou selagem jurídica de transações de terra (Rt 4:7). Rasgar as vestes expressava dor profunda, luto ou quebrantamento espiritual (Gn 37:34; Jó 1:20).",
        styles['Body']
    ))

    story.append(Paragraph("b) A Dieta e os Hábitos Alimentares", styles['H2']))
    story.append(Paragraph(
        "A alimentação cotidiana consistia primordialmente em pães assados na hora, azeite, figos, uvas, azeitonas, leite de cabra, coalhadas e queijos. O consumo de carne bovina era reservado a ocasiões festivas e banquetes de comunhão.<br/>"
        "A Lei Mosaica discriminava rigidamente animais puros e impuros (Lv 11). As refeições eram consumidas comunitariamente, muitas vezes reclinando-se à mesa sobre o lado esquerdo em almofadas e divãs, comendo do prato principal com as mãos limpas (Jo 13:23; Mc 7:5).",
        styles['Body']
    ))

    story.append(Paragraph("3. O Calendário Judaico & Divisão do Tempo", styles['H1']))
    story.append(Paragraph(
        "O calendário de Israel combinava ciclos lunares com ajustes sazonais solares. Havia o <b>Ano Sagrado</b> (iniciado em Nisã/Abibe, na primavera, celebrando o Êxodo) e o <b>Ano Civil</b> (iniciado em Tisri, no outono, marcando o ciclo agrícola e o Rosh Hashaná).",
        styles['Body']
    ))

    # Tabela de meses
    dados_tabela = [
        [Paragraph("<b>Mês Sagrado</b>", styles['TabelaH']), Paragraph("<b>Mês Civil</b>", styles['TabelaH']), Paragraph("<b>Nome Bíblico</b>", styles['TabelaH']), Paragraph("<b>Correspondência Solar</b>", styles['TabelaH'])],
        [Paragraph("1º Mês", styles['TabelaC']), Paragraph("7º Mês", styles['TabelaC']), Paragraph("Nisã / Abibe", styles['TabelaC']), Paragraph("Março - Abril (Páscoa)", styles['TabelaC'])],
        [Paragraph("2º Mês", styles['TabelaC']), Paragraph("8º Mês", styles['TabelaC']), Paragraph("Ivar / Zibe", styles['TabelaC']), Paragraph("Abril - Maio", styles['TabelaC'])],
        [Paragraph("3º Mês", styles['TabelaC']), Paragraph("9º Mês", styles['TabelaC']), Paragraph("Sivã", styles['TabelaC']), Paragraph("Maio - Junho (Pentecostes)", styles['TabelaC'])],
        [Paragraph("4º Mês", styles['TabelaC']), Paragraph("10º Mês", styles['TabelaC']), Paragraph("Tamuz", styles['TabelaC']), Paragraph("Junho - Julho", styles['TabelaC'])],
        [Paragraph("5º Mês", styles['TabelaC']), Paragraph("11º Mês", styles['TabelaC']), Paragraph("Abe", styles['TabelaC']), Paragraph("Julho - Agosto", styles['TabelaC'])],
        [Paragraph("6º Mês", styles['TabelaC']), Paragraph("12º Mês", styles['TabelaC']), Paragraph("Elul", styles['TabelaC']), Paragraph("Agosto - Setembro", styles['TabelaC'])],
        [Paragraph("7º Mês", styles['TabelaC']), Paragraph("1º Mês", styles['TabelaC']), Paragraph("Tisri / Etanim", styles['TabelaC']), Paragraph("Setembro - Outubro (Tabernáculos)", styles['TabelaC'])],
    ]
    t = Table(dados_tabela, colWidths=[90, 80, 140, 170])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#0f2a43")),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.HexColor("#f8fafc"), colors.white]),
        ('PADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t)
    story.append(Spacer(1, 10))

    story.append(Paragraph("4. Medidas, Pesos, Moedas e Costumes de Sepultamento", styles['H1']))
    story.append(Paragraph(
        "<b>Medidas lineares:</b> Baseavam-se no corpo humano (Dígito = 19mm; Palmo = 22,5cm; Côvado = 46 a 52cm; Estádio = aprox. 200 metros).<br/>"
        "<b>Moedas:</b> Inicialmente o siclo era medida de peso de prata. No Novo Testamento circulavam o Denário romano (salário de um dia de trabalho), a Dracma e o Estáter.<br/>"
        "<b>Ritos fúnebres:</b> O corpo era ungido com especiarias perfumadas, envolvido em lençóis de linho e sepultado no mesmo dia em jazigos familiares escavados na rocha (Jo 11:38-44).",
        styles['Body']
    ))

    story.append(Spacer(1, 10))
    story.append(Paragraph("Referências Bibliográficas", styles['H2']))
    story.append(Paragraph(
        "• BUYERS, P. E. <i>Nos Tempos de Jesus</i>. Ed. Religiosa, 1943.<br/>"
        "• CONDE, E. <i>Caminhos do Mundo Antigo</i>. CPAD, 1982.<br/>"
        "• HALLEY, H. H. <i>Manual Bíblico</i>. Edições Vida Nova, 1978.<br/>"
        "• SHEDD, Russell P. <i>O Novo Dicionário da Bíblia</i>. Vida Nova, 1966.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Maneiras e Costumes gerado com sucesso.")

# ==========================================
# 2. PORTUGUÊS INSTRUMENTAL
# ==========================================
def gerar_pdf_portugues_instrumental():
    arquivo = os.path.join(PDF_DIR, "portugues-instrumental.pdf")
    doc = SimpleDocTemplate(
        arquivo,
        pagesize=letter,
        leftMargin=54, rightMargin=54,
        topMargin=54, bottomMargin=54
    )
    styles = get_styles()
    story = criar_capa(
        "Português Instrumental",
        "Comunicação Eficaz, Dicção, Correção Gramatical & Vocabulário Erudito",
        "Linguística & Prática de Comunicação Eclesiástica",
        styles
    )

    story.append(Paragraph("1. Elementos Fundamentais da Comunicação & a Voz", styles['H1']))
    story.append(Paragraph(
        "A palavra é o veículo sublime da transmissão da fé cristã. Ela se manifesta de duas formas: <b>escrita</b> (através da grafia e dos símbolos) e <b>falada</b> (através da voz, prosódia e modulação). Comunicar com precisão honra o Evangelho e remove barreiras entre o expositor e os ouvintes.",
        styles['Body']
    ))
    story.append(Paragraph("Pilares para uma Comunicação Excelente no Ministério:", styles['H2']))
    story.append(Paragraph("• <b>Pensar antes de falar:</b> Construir a estrutura lógica do raciocínio antes da enunciação.", styles['Bullet']))
    story.append(Paragraph("• <b>Clareza e dicção:</b> Falar pausadamente, abrindo a boca e articulando cada sílaba sem engolir os finais.", styles['Bullet']))
    story.append(Paragraph("• <b>Eliminar ruídos:</b> Evitar digressões, vícios de linguagem e expressões pejorativas no púlpito.", styles['Bullet']))
    story.append(Paragraph("• <b>Respiração diafragmática:</b> O ar deve sustentar a voz pela musculatura abdominal e não pelas cordas vocais.", styles['Bullet']))

    story.append(Paragraph("2. Guia de Correção: Erros Comuns no Púlpito", styles['H1']))
    story.append(Paragraph(
        "A tabela abaixo reúne deslizes frequentes na oratória evangélica contemporânea e as respectivas formas cultas recomendadas:",
        styles['Body']
    ))

    erros = [
        [Paragraph("<b>Forma Errada / Inadequada</b>", styles['TabelaH']), Paragraph("<b>Forma Correta Recomendada</b>", styles['TabelaH']), Paragraph("<b>Justificativa Gramatical</b>", styles['TabelaH'])],
        [Paragraph("Eu saldo os irmãos com a paz", styles['TabelaC']), Paragraph("Eu saúdo os irmãos com a paz", styles['TabelaC']), Paragraph("Saldo = resto, conta. Saudar = cumprimentar.", styles['TabelaC'])],
        [Paragraph("Vamos cantarmos o hino 48", styles['TabelaC']), Paragraph("Vamos cantar o hino 48", styles['TabelaC']), Paragraph("No verbo auxiliar com principal, só varia o auxiliar.", styles['TabelaC'])],
        [Paragraph("Ele subiu para cima do monte", styles['TabelaC']), Paragraph("Ele subiu ao monte", styles['TabelaC']), Paragraph("Pleonasmo vicioso. Subir já indica para cima.", styles['TabelaC'])],
        [Paragraph("A irmã Maria é membra da igreja", styles['TabelaC']), Paragraph("A irmã Maria é membro da igreja", styles['TabelaC']), Paragraph("Membro é substantivo sobrecomum uniforme.", styles['TabelaC'])],
        [Paragraph("Para que o Senhor seje exaltado", styles['TabelaC']), Paragraph("Para que o Senhor seja exaltado", styles['TabelaC']), Paragraph("O presente do subjuntivo de ser é 'seja'.", styles['TabelaC'])],
        [Paragraph("Tenho muita dó do irmão", styles['TabelaC']), Paragraph("Tenho muito dó do irmão", styles['TabelaC']), Paragraph("Dó é substantivo masculino: 'muito dó'.", styles['TabelaC'])],
        [Paragraph("Ao invés de orar, ele falou", styles['TabelaC']), Paragraph("Em vez de orar, ele falou", styles['TabelaC']), Paragraph("'Ao invés de' = ao contrário. 'Em vez de' = em lugar de.", styles['TabelaC'])],
    ]
    t_erros = Table(erros, colWidths=[150, 160, 170])
    t_erros.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#0f2a43")),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.HexColor("#f8fafc"), colors.white]),
        ('PADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_erros)
    story.append(Spacer(1, 10))

    story.append(Paragraph("3. Vocabulário Erudito & Palavras Raras da Bíblia", styles['H1']))
    story.append(Paragraph(
        "A tradução Almeida Revista e Corrigida (ARC) preserva termos do português clássico de enorme riqueza semântica:<br/>"
        "• <b>Arganazes (Pv 30:26):</b> Pequenos roedores de montanha semelhantes a lebres.<br/>"
        "• <b>Ascético (Cl 2:23):</b> Estilo de vida devoto, austero e contemplativo.<br/>"
        "• <b>Cerviz (Is 48:4):</b> Nuca, pescoço. 'Cerviz de ferro' representa teimosia e inflexibilidade obstinada.<br/>"
        "• <b>Eirado (Lc 12:3):</b> Terraço aberto no topo das casas do Oriente.<br/>"
        "• <b>Gavelas (Rt 2:7):</b> Feixes ou maços de espigas colhidas no campo.<br/>"
        "• <b>Inépcia / Insipiência (Sl 69:5):</b> Falta de sabedoria ou discernimento espiritual.",
        styles['Body']
    ))

    story.append(Paragraph("4. Estudo de Texto: 'Um Sonho Insolente'", styles['H1']))
    story.append(Paragraph(
        "<i>'Façamo-nos um nome...' (Gênesis 11:4)</i><br/>"
        "A mais antiga vaidade do ser humano, quando afastado da graça soberana de Deus, foi o anseio de construir notoriedade para si mesmo. Ao pretender erguer uma torre e conquistar renome, a humanidade na planície de Sinear rejeitou o único Nome bendito eternamente.<br/>"
        "Os grandes servos de Deus através dos séculos escolheram permanecer nos bastidores e nas coxias do palco cósmico, para que unicamente a glória do Todo-Poderoso resplandecesse. Como exclamou João Batista: <i>'Convém que Ele cresça e que eu diminua'</i>.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Português Instrumental gerado com sucesso.")

# ==========================================
# 3. METODOLOGIA DA PESQUISA
# ==========================================
def gerar_pdf_metodologia():
    arquivo = os.path.join(PDF_DIR, "metodologia-da-pesquisa.pdf")
    doc = SimpleDocTemplate(
        arquivo,
        pagesize=letter,
        leftMargin=54, rightMargin=54,
        topMargin=54, bottomMargin=54
    )
    styles = get_styles()
    story = criar_capa(
        "Metodologia da Pesquisa Científica",
        "Rigor Acadêmico, Normas ABNT, Tipos de Conhecimento e Elaboração de Projetos",
        "Metodologia & Epistemologia do Conhecimento",
        styles
    )

    story.append(Paragraph("1. Tipos de Conhecimento Humano", styles['H1']))
    story.append(Paragraph(
        "Conhecer é incorporar conceitos e modelos conceituais sobre fatos da realidade. Ao longo da história do pensamento, a humanidade estruturou quatro modalidades de conhecimento:",
        styles['Body']
    ))
    story.append(Paragraph("• <b>Conhecimento Empírico (Senso Comum):</b> Adquirido espontaneamente no cotidiano por tentativa e erro, sem método sistemático prévio.", styles['Bullet']))
    story.append(Paragraph("• <b>Conhecimento Filosófico:</b> Fruto da reflexão crítica, do raciocínio especulativo e da busca pelas causas primeiras e sentidos fundamentais.", styles['Bullet']))
    story.append(Paragraph("• <b>Conhecimento Teológico:</b> Fundamentado na revelação divina e na fé nas Escrituras, assentando verdades transcendentes.", styles['Bullet']))
    story.append(Paragraph("• <b>Conhecimento Científico:</b> Racional, metódico, verificável, analítico e submetido a testes e critérios de falseabilidade.", styles['Bullet']))

    story.append(Paragraph("2. Estrutura Canônica de um Projeto de Pesquisa (ABNT)", styles['H1']))
    story.append(Paragraph(
        "Um projeto acadêmico sólido deve responder com clareza: <i>O que pesquisar? Por que pesquisar? Para que pesquisar? Como pesquisar?</i>",
        styles['Body']
    ))
    story.append(Paragraph("Componentes Centrais:", styles['H2']))
    story.append(Paragraph("1. <b>Tema e Delimitação:</b> O recorte temporal, conceitual e espacial do objeto de estudo.", styles['Bullet']))
    story.append(Paragraph("2. <b>Problema:</b> A pergunta condutora central que mobiliza e guia toda a investigação.", styles['Bullet']))
    story.append(Paragraph("3. <b>Hipótese:</b> A resposta provisória ou suposição teórica a ser testada e comprovada.", styles['Bullet']))
    story.append(Paragraph("4. <b>Objetivos:</b> Geral (o propósito maior) e Específicos (as etapas operacionais formuladas com verbos no infinitivo).", styles['Bullet']))
    story.append(Paragraph("5. <b>Justificativa:</b> A relevância acadêmica, institucional, social e teológica da investigação proposta.", styles['Bullet']))
    story.append(Paragraph("6. <b>Metodologia:</b> Descrição detalhada dos procedimentos técnicos (pesquisa bibliográfica, documental, estudo de caso ou de campo).", styles['Bullet']))
    story.append(Paragraph("7. <b>Cronograma e Recursos:</b> Previsão do tempo de execução e materiais necessários.", styles['Bullet']))

    story.append(Paragraph("3. Técnicas de Fichamento Acadêmico", styles['H1']))
    story.append(Paragraph(
        "O fichamento é o instrumento indispensável do pesquisador universitário para organizar o levantamento bibliográfico e evitar o plágio acadêmico:",
        styles['Body']
    ))
    story.append(Paragraph("• <b>Ficha Bibliográfica:</b> Análise geral descritiva da obra, indicando os principais capítulos e seu alcance teórico.", styles['Bullet']))
    story.append(Paragraph("• <b>Ficha de Resumo / Conteúdo:</b> Síntese das teses com as palavras do próprio pesquisador.", styles['Bullet']))
    story.append(Paragraph("• <b>Ficha de Citações:</b> Transcrição literal exata de trechos indispensáveis entre aspas, acompanhados do número da página original.", styles['Bullet']))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Metodologia gerado com sucesso.")

# ==========================================
# 4. HOMILÉTICA
# ==========================================
def gerar_pdf_homiletica():
    arquivo = os.path.join(PDF_DIR, "homiletica.pdf")
    doc = SimpleDocTemplate(
        arquivo,
        pagesize=letter,
        leftMargin=54, rightMargin=54,
        topMargin=54, bottomMargin=54
    )
    styles = get_styles()
    story = criar_capa(
        "Homilética & Oratória Sagrada",
        "A Arte e Ciência da Pregação Bíblica, Preparação de Sermões e Conduta no Púlpito",
        "Teologia Prática & Comunicação Pastoral",
        styles
    )

    story.append(Paragraph("1. O Que é Homilética & o Chamado do Pregador", styles['H1']))
    story.append(Paragraph(
        "A palavra <b>Homilética</b> provém do grego <i>homilia</i> (At 20:11), referindo-se ao falar de Deus aos homens mediante a proclamação da verdade. A pregação autêntica reúne dois aspectos inseparáveis: o <b>divino</b> (a unção soberana do Espírito Santo e a autoridade da Palavra) e o <b>humano</b> (o preparo pessoal, estudo cuidadoso, estrutura lógica e dicção límpida).",
        styles['Body']
    ))

    story.append(Paragraph("Os Quatro Pilares do Preparo do Pregador:", styles['H2']))
    story.append(Paragraph("1. <b>Esperar em Deus:</b> Ouvir primeiro a voz de Deus no coração antes de redigir sermões para a congregação.", styles['Bullet']))
    story.append(Paragraph("2. <b>Mergulhar nas Escrituras:</b> Estudo contextual, histórico e gramatical com uma Bíblia aberta diante de si.", styles['Bullet']))
    story.append(Paragraph("3. <b>Manter um Caderno de Anotações:</b> Fixar os pensamentos concedidos pelo Espírito enquanto estão vivos na mente.", styles['Bullet']))
    story.append(Paragraph("4. <b>Deixar a Palavra Purificar o Ministro:</b> Nunca pregar verdades que não tenham transformado a sua própria vida particular.", styles['Bullet']))

    story.append(Paragraph("2. As Três Formas Clássicas de Sermões", styles['H1']))
    story.append(Paragraph(
        "Para evitar a monotonia e conduzir o rebanho com variedade bíblica, o orador sagrado deve dominar as três estruturas consagradas:",
        styles['Body']
    ))
    story.append(Paragraph("• <b>Sermão Temático ou Tópico:</b> A divisão decorre diretamente do assunto ou tema doutrinário, respaldado por passagens de toda a Bíblia (Ex: <i>A Justificação pela Fé</i>).", styles['Bullet']))
    story.append(Paragraph("• <b>Sermão Textual:</b> As divisões principais do esboço são extraídas diretamente das palavras e cláusulas de um texto curto (Ex: <i>Romanos 12:12 - Alegres na esperança, pacientes na tribulação, perseverantes na oração</i>).", styles['Bullet']))
    story.append(Paragraph("• <b>Sermão Expositivo:</b> Exposição minuciosa e sequencial de um parágrafo ou capítulo completo das Escrituras, ressaltando o contexto exegético original e aplicando-o às vidas dos ouvintes.", styles['Bullet']))

    story.append(Paragraph("3. As 15 Regras de Ouro da Oratória no Púlpito", styles['H1']))
    story.append(Paragraph(
        "1. <b>Preparo sólido:</b> O melhor antídoto para o nervosismo é a segurança do conhecimento e a oração.<br/>"
        "2. <b>Respiração diafragmática:</b> Não respirar com o peito alto; oxigenar com o abdômen para proteger as cordas vocais.<br/>"
        "3. <b>Contato visual permanente:</b> Olhar nos olhos de todo o auditório, estabelecendo conexão espiritual e afetiva.<br/>"
        "4. <b>Falar livremente (com esboço):</b> Usar anotações em formato de esqueleto sem ficar preso lendo texto integral.<br/>"
        "5. <b>Variar tom e volume:</b> Falar alto e baixo nos momentos certos para reter a atenção do início ao fim.<br/>"
        "6. <b>Postura ereta e sóbria:</b> Corpo equilibrado em ambos os pés, sem balançar de um lado ao outro ou colocar as mãos nos bolsos.<br/>"
        "7. <b>Introdução breve e cativante:</b> Não gastar mais de 15% do tempo com a introdução e nunca iniciar pedindo desculpas.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Homilética gerado com sucesso.")

# ==========================================
# 5. HERMENÊUTICA SAGRADA
# ==========================================
def gerar_pdf_hermeneutica():
    arquivo = os.path.join(PDF_DIR, "hermeneutica-sagrada.pdf")
    doc = SimpleDocTemplate(
        arquivo,
        pagesize=letter,
        leftMargin=54, rightMargin=54,
        topMargin=54, bottomMargin=54
    )
    styles = get_styles()
    story = criar_capa(
        "Hermenêutica Sagrada",
        "Regras e Princípios de Interpretação das Sagradas Escrituras",
        "Exegese & Teologia Bíblica",
        styles
    )

    story.append(Paragraph("1. O Que é Hermenêutica Sagrada?", styles['H1']))
    story.append(Paragraph(
        "A Hermenêutica é a ciência e a arte de interpretar textos. Ciência porque baseia-se em princípios universais, objetivos e lógicos; arte porque exige sensibilidade espiritual, prática constante e perícia linguística. A <b>Hermenêutica Sagrada</b> visa desvendar o sentido exato pretendido pelo autor sagrado sob a inspiração do Espírito Santo.",
        styles['Body']
    ))
    story.append(Paragraph("Diferença Fundamental: Interpretação vs. Aplicação", styles['H2']))
    story.append(Paragraph(
        "<b>Interpretação (Sentido único):</b> Refere-se àquilo que o texto significava na mente do escritor bíblico e dos seus primeiros destinatários.<br/>"
        "<b>Aplicação (Múltipla):</b> O modo como aquela verdade imutável se desdobra nas diferentes circunstâncias da vida contemporânea.",
        styles['Body']
    ))

    story.append(Paragraph("2. Bloqueios à Compreensão Espontânea da Bíblia", styles['H1']))
    story.append(Paragraph(
        "• <b>Abismo Histórico:</b> Estamos separados por milênios dos eventos narrados nas Escrituras.<br/>"
        "• <b>Abismo Cultural:</b> A cultura oriental hebraica é concreta e experiencial, diferindo radicalmente da mente greco-ocidental abstrata baseada em silogismos.<br/>"
        "• <b>Abismo Linguístico:</b> O Antigo Testamento foi escrito em hebraico e aramaico; o Novo Testamento em grego koiné. As traduções requerem sensibilidade etimológica e idiomática.",
        styles['Body']
    ))

    story.append(Paragraph("3. Regras Fundamentais de Interpretação", styles['H1']))
    story.append(Paragraph(
        "1. <b>A Bíblia interpreta a si mesma:</b> O texto deve ser examinado à luz do seu contexto imediato, do livro em que se encontra e do ensino geral das Escrituras.<br/>"
        "2. <b>Sentido usual das palavras:</b> Tomar as palavras no seu sentido habitual, a menos que o contexto indique claramente o uso de figuras de linguagem (metáforas, hipérboles, alegorias).<br/>"
        "3. <b>Passagens paralelas:</b> Passagens obscuras devem ser interpretadas à luz de passagens claras e explícitas que tratam da mesma doutrina.",
        styles['Body']
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF Hermenêutica gerado com sucesso.")

# ==========================================
# 6. GERAÇÃO DE AUDIOBOOKS (MASCULINO E FEMININO PT-BR)
# ==========================================
AUDIO_TEXTS = {
    "maneiras_costumes": """Módulo Maneiras e Costumes da Bíblia, apresentado pela plataforma Teologia Acessível.
Nesta lição, exploramos o cotidiano dos povos bíblicos no Antigo e Novo Testamento.
As cidades da Palestina antiga eram cercadas por muralhas e suas portas representavam o centro cívico e jurídico onde se tratavam negócios e julgamentos públicos.
As casas possuíam terraços planos, fundamentais para a oração, vigília e comunhão.
O vestuário compunha-se de túnica e manto, e a alimentação diária valorizava o pão, o azeite de oliva, os frutos e o leite.
Compreender estes costumes ilumina o texto bíblico com clareza histórica e rigor teológico.""",

    "portugues_instrumental": """Módulo Português Instrumental para Pregadores e Teólogos, pela plataforma Teologia Acessível.
A comunicação é o veículo supremo da mensagem cristã. O expositor do Evangelho deve zelar pela pronúncia clara, pela postura equilibrada no púlpito e pelo domínio gramatical.
Evite pleonasmos e erros frequentes, como confundir saldar com saudar, ou falar com respiração presa no peito.
Use a respiração diafragmática para dar peso, projeção e suavidade à sua fala. Uma dicção apurada glorifica a Deus e edifica com nobreza os ouvintes da congregação.""",

    "homiletica_oratoria": """Módulo Homilética e Oratória Sagrada, da plataforma Teologia Acessível.
A homilética é a arte sublime e a ciência rigorosa da proclamação da Palavra de Deus aos corações humanos.
Um sermão poderoso nasce primeiro na presença quieta de Deus, através da oração e da meditação bíblica.
Domine as três formas essenciais de mensagens: o sermão temático, o sermão textual e o sermão expositivo.
Mantenha sempre contato visual com todo o auditório, varie a intensidade da sua voz e pregue com a autoridade viva do Espírito Santo.""",

    "metodologia_pesquisa": """Módulo Metodologia da Pesquisa Científica em Teologia, pela plataforma Teologia Acessível.
O estudo acadêmico de nível superior exige disciplina, método e ordenação racional dos conhecimentos.
Diferenciamos o conhecimento empírico do conhecimento filosófico, teológico e científico.
Ao elaborar um projeto de pesquisa ou monografia, defina com precisão o problema central, a hipótese de resposta, os objetivos no infinitivo e a revisão bibliográfica conforme as normas técnicas.
O rigor metodológico fortalece a defesa da fé com honestidade e excelência acadêmica."""
}

async def gerar_audio_edge(texto, arquivo_saida, voz):
    try:
        comunicador = edge_tts.Communicate(texto, voz, rate="-2%")
        await comunicador.save(arquivo_saida)
        print(f"Áudio gerado com sucesso: {os.path.basename(arquivo_saida)} ({voz})")
    except Exception as e:
        print(f"Erro gerando áudio com edge-tts ({voz}): {e}")

async def gerar_todos_os_audios():
    tarefas = []
    # Voz Masculina: pt-BR-AntonioNeural (Voz solene, madura, excelente para oratória e teologia)
    # Voz Feminina: pt-BR-FranciscaNeural (Voz límpida, clara, altamente profissional e acadêmica)
    for chave, texto in AUDIO_TEXTS.items():
        arq_masc = os.path.join(AUDIO_DIR, f"{chave}_masculino.mp3")
        arq_fem = os.path.join(AUDIO_DIR, f"{chave}_feminino.mp3")
        
        tarefas.append(gerar_audio_edge(texto, arq_masc, "pt-BR-AntonioNeural"))
        tarefas.append(gerar_audio_edge(texto, arq_fem, "pt-BR-FranciscaNeural"))
    
    await asyncio.gather(*tarefas)

if __name__ == "__main__":
    print("--- INICIANDO COMPILAÇÃO DE MATERIAIS TEOLOGIA ACESSÍVEL ---")
    gerar_pdf_maneiras_costumes()
    gerar_pdf_portugues_instrumental()
    gerar_pdf_metodologia()
    gerar_pdf_homiletica()
    gerar_pdf_hermeneutica()
    print("--- TODOS OS 5 PDFS COMPILADOS ---")

    print("--- INICIANDO GRAVAÇÃO DOS AUDIOBOOKS COM VOZES NEURAIS PT-BR ---")
    asyncio.run(gerar_todos_os_audios())
    print("--- TODOS OS AUDIOBOOKS GERADOS COM SUCESSO ---")
