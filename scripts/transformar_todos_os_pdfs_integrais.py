# -*- coding: utf-8 -*-
"""
Transformador Oficial de Todos os 30 Compêndios Teológicos
Teologia Acessível - Ensino Superior Livre
Substitui a capa antiga por Capa Oficial Teologia Acessível e
aplica cabeçalhos e rodapés institucionais em TODAS as páginas originais.
"""
import os, io, pypdf
from reportlab.pdfgen import canvas
from reportlab.lib import colors

BASE_DIR = r"d:/Users/Users/eduka/Desktop/teologia-acessivel"
UPLOADED_DIR = r"C:/Users/eduka/.gemini/antigravity/brain/ef3c4a87-0934-4536-b2c0-546cd564403a/.user_uploaded"
OUTPUT_DIR = os.path.join(BASE_DIR, "public", "pdfs")
os.makedirs(OUTPUT_DIR, exist_ok=True)

MAPPING = [
    ('media_1789483350265.pdf', 'maneiras-e-costumes-da-biblia.pdf', 'Maneiras e Costumes da Bíblia', 'Vida Doméstica, Social, Geográfica e Cultural nos Tempos Bíblicos', 'Arqueologia & Contexto Histórico-Bíblico'),
    ('media_1789483350323.pdf', 'portugues-instrumental.pdf', 'Português Instrumental', 'Comunicação Verbal, Dicção, Oratória e Linguística no Púlpito', 'Linguística & Comunicação Eclesiástica'),
    ('media_1789483350406.pdf', 'metodologia-da-pesquisa.pdf', 'Metodologia da Pesquisa Científica', 'Rigor Acadêmico, Epistemologia e Normatização de Trabalhos Teológicos', 'Metodologia Científica & Pesquisa'),
    ('media_1789483350615.pdf', 'hermeneutica-sagrada.pdf', 'Hermenêutica Sagrada', 'Regras de Interpretação Bíblica, Exegese e Métodos Hermenêuticos', 'Hermenêutica & Exegese Bíblica'),
    ('media_1789483350864.pdf', 'homiletica.pdf', 'Homilética: A Arte de Pregar', 'A Preparação, Estrutura, Retórica e Proclamação do Sermão Bíblico', 'Teologia Prática & Ministério da Palavra'),
    ('media_1789483424955.pdf', 'apologetica.pdf', 'Apologética Cristã', 'A Defesa Racional da Fé, Filosofia e Confronto com o Pensamento Secular', 'Filosofia da Religião & Apologética'),
    ('media_1789483425211.pdf', 'sintese-antigo-testamento.pdf', 'Síntese do Antigo Testamento', 'Panorama Completo dos 39 Livros: Pentateuco, Históricos, Poéticos e Proféticos', 'Teologia Bíblica do Antigo Testamento'),
    ('media_1789483425367.pdf', 'periodo-interbiblico.pdf', 'Período Interbíblico', 'Os 400 Anos de Silêncio Profético: Impérios Persa, Grego, Macabeu e Romano', 'História Bíblica & Judaísmo do Segundo Templo'),
    ('media_1789483425602.pdf', 'manuscritos-antigo-testamento.pdf', 'Manuscritos do Antigo Testamento', 'Transmissão Textual, Massoretas, Texto Crítico e Rolos do Mar Morto', 'Crítica Textual & História do Cânon'),
    ('media_1789483425676.pdf', 'sintese-novo-testamento.pdf', 'Síntese do Novo Testamento', 'Os 27 Livros: Evangelhos, Atos, Epístolas Paulinas, Gerais e Apocalipse', 'Teologia Bíblica do Novo Testamento'),
    ('media_1789483449984.pdf', 'teontologia.pdf', 'Teontologia: A Doutrina de Deus', 'O Ser, a Natureza, os Atributos Divinos e o Mistério da Trindade Santa', 'Teologia Sistemática I'),
    ('media_1789483450096.pdf', 'bibliologia.pdf', 'Bibliologia: As Sagradas Escrituras', 'Inspiração Plenária, Inerrância, Autoridade, Canonicidade e Iluminação', 'Teologia Sistemática I'),
    ('media_1789483450151.pdf', 'angelologia.pdf', 'Angelologia & Demonologia', 'A Criação dos Anjos, Classes Celestes, a Queda de Satanás e a Batalha Espiritual', 'Teologia Sistemática II'),
    ('media_1789483450217.pdf', 'antropologia-teologica.pdf', 'Antropologia Teológica', 'A Criação do Ser Humano à Imagem de Deus, Corpo, Alma, Espírito e a Queda', 'Teologia Sistemática II'),
    ('media_1789483450239.pdf', 'cristologia.pdf', 'Cristologia: A Pessoa e Obra de Cristo', 'A Pré-existência, a Humanidade e Divindade, Ofícios e a Vitória na Cruz', 'Teologia Sistemática III'),
    ('media_1789483493292.pdf', 'soteriologia.pdf', 'Soteriologia: A Doutrina da Salvação', 'Redenção, Justificação pela Fé, Regeneração, Adoção e Glorificação', 'Teologia Sistemática III'),
    ('media_1789483493412.pdf', 'eclesiologia.pdf', 'Eclesiologia: A Doutrina da Igreja', 'O Corpo Místico de Cristo, Governo Bíblico, Ordenanças e a Missão no Mundo', 'Teologia Sistemática IV'),
    ('media_1789483493434.pdf', 'hamartiologia.pdf', 'Hamartiologia: A Doutrina do Pecado', 'A Origem, Natureza, Universalidade e Consequências da Queda Humana', 'Teologia Sistemática II'),
    ('media_1789483493475.pdf', 'pneumatologia.pdf', 'Pneumatologia: O Espírito Santo', 'A Deidade, Personalidade, Símbolos, Dons e Fruto do Espírito Santo', 'Teologia Sistemática III'),
    ('media_1789483493769.pdf', 'escatologia.pdf', 'Estudos de Escatologia Bíblica', 'As Profecias Finais, o Arrebatamento, a Grande Tribulação, o Milênio e a Eternidade', 'Teologia Sistemática IV'),
    ('media_1789483551440.pdf', 'evangelismo.pdf', 'Evangelismo Prático & Conquista de Almas', 'A Grande Comissão, Metodologia de Abordagem e Condução à Decisão de Fé', 'Missiologia & Ministério Pastoral'),
    ('media_1789483551501.pdf', 'geografia-biblica.pdf', 'Geografia Bíblica & Cenário Histórico', 'O Crescente Fértil, Canaã, Montes Sagrados, Mares e Rotas Apostólicas', 'Arqueologia & História Bíblica'),
    ('media_1789483551796.pdf', 'heresiologia.pdf', 'Heresiologia: O Discernimento das Seitas', 'Análise Crítica de Movimentos Heterodoxos à Luz da Sã Doutrina Bíblica', 'Teologia Sistemática & Apologética'),
    ('media_1789483551818.pdf', 'administracao-eclesiastica.pdf', 'Administração Eclesiástica & Governança', 'Governança Bíblica, Gestão Ministerial, Princípio de Jetro e Estrutura Legal', 'Teologia Prática & Gestão'),
    ('media_1789483551827.pdf', 'discipulado.pdf', 'Discipulado Bíblico & Vida Cristã', 'Maturidade em Cristo, Koinonia, Disciplinas Espirituais e Mordomia Cristã', 'Teologia Prática & Vida Cristã'),
    ('media_1789483573207.pdf', 'arqueologia-biblica.pdf', 'Arqueologia Bíblica: Evidências e Descobertas', 'Períodos Culturais, Métodos de Datação e Grandes Achados do Oriente Próximo', 'Arqueologia & Contexto Histórico'),
    ('media_1789483573305.pdf', 'dispensacoes-e-aliancas.pdf', 'Dispensações e Alianças Bíblicas', 'Os Sete Períodos da Revelação Divina e as Oito Alianças Eternas em Cristo', 'Teologia Bíblica & Sistemática'),
    ('media_1789483573380.pdf', 'a-biblia-e-a-ciencia.pdf', 'A Bíblia e a Ciência: Harmonia das Origens', 'Cosmologia, Ajuste Fino da Terra, Termodinâmica e Antecipações Científicas', 'Ciência, Filosofia & Fé Cristã'),
    ('media_1789483573620.pdf', 'tipologia-e-simbologia.pdf', 'Tipologia & Simbologia Bíblica', 'Sombras Proféticas, A Tipologia do Tabernáculo e o Significado dos Números', 'Hermenêutica Sagrada & Teologia Bíblica'),
    ('media_1789483573824.pdf', 'religioes-mundiais-1.pdf', 'Religiões Mundiais I: Cultos e Tradições', 'A Busca Humana pelo Sagrado: Cultos Antigos, Mitologias, Hinduísmo e Siquismo', 'História das Religiões & Missiologia')
]

def processar_pdf(src_filename, dst_filename, titulo, subtitulo, area):
    input_path = os.path.join(UPLOADED_DIR, src_filename)
    output_path = os.path.join(OUTPUT_DIR, dst_filename)

    if not os.path.exists(input_path):
        print(f"[ERRO] Arquivo de origem não encontrado: {src_filename}")
        return

    reader = pypdf.PdfReader(input_path)
    writer = pypdf.PdfWriter()
    num_pages = len(reader.pages)

    # 1. Pega dimensões da primeira página de conteúdo
    ref_page = reader.pages[0] if num_pages == 1 else reader.pages[1]
    mb = ref_page.mediabox
    w = float(mb.width)
    h = float(mb.height)

    # 2. Gera Capa Oficial Teologia Acessível
    cover_stream = io.BytesIO()
    c_cov = canvas.Canvas(cover_stream, pagesize=(w, h))
    
    # Fundo azul escuro nobre
    c_cov.setFillColor(colors.HexColor('#0f2a43'))
    c_cov.rect(0, 0, w, h, fill=1, stroke=0)
    
    # Cartão interno branco com cantos arredondados
    margin = 28
    c_cov.setFillColor(colors.white)
    c_cov.roundRect(margin, margin, w - 2*margin, h - 2*margin, 12, fill=1, stroke=0)
    
    # Emblema / Cabeçalho da Capa
    bw = min(w - 140, 420)
    bx = (w - bw) / 2
    by = h - 120
    c_cov.setFillColor(colors.HexColor('#f8fafc'))
    c_cov.roundRect(bx, by, bw, 46, 6, fill=1, stroke=0)
    c_cov.setStrokeColor(colors.HexColor('#0f2a43'))
    c_cov.setLineWidth(1)
    c_cov.roundRect(bx, by, bw, 46, 6, fill=0, stroke=1)
    c_cov.setFont('Helvetica-Bold', 12)
    c_cov.setFillColor(colors.HexColor('#0f2a43'))
    c_cov.drawCentredString(w/2, by + 26, 'TEOLOGIA ACESSÍVEL')
    c_cov.setFont('Helvetica-Bold', 7.5)
    c_cov.setFillColor(colors.HexColor('#d97706'))
    c_cov.drawCentredString(w/2, by + 12, 'PLATAFORMA UNIVERSITÁRIA DE ESTUDOS TEOLÓGICOS LIVRES')

    # Título Principal do Compêndio
    title_font_size = 20 if len(titulo) < 32 else 17
    c_cov.setFont('Helvetica-Bold', title_font_size)
    c_cov.setFillColor(colors.HexColor('#0f2a43'))
    c_cov.drawCentredString(w/2, h/2 + 65, titulo.upper())
    
    # Barra divisória dourada
    c_cov.setStrokeColor(colors.HexColor('#d97706'))
    c_cov.setLineWidth(3)
    c_cov.line(w/2 - 130, h/2 + 45, w/2 + 130, h/2 + 45)

    # Subtítulo
    sub_font_size = 10 if len(subtitulo) < 65 else 9
    c_cov.setFont('Helvetica', sub_font_size)
    c_cov.setFillColor(colors.HexColor('#1c538e'))
    c_cov.drawCentredString(w/2, h/2 + 20, subtitulo)

    # Área de Conhecimento
    c_cov.setFont('Helvetica-Bold', 9.5)
    c_cov.setFillColor(colors.HexColor('#d97706'))
    c_cov.drawCentredString(w/2, h/2 - 8, f'Área Acadêmica: {area}')

    # Rodapé da Capa
    c_cov.setFont('Helvetica', 8)
    c_cov.setFillColor(colors.HexColor('#64748b'))
    c_cov.drawCentredString(w/2, 90, 'Compêndio Acadêmico Oficial • Teologia Acessível')
    c_cov.drawCentredString(w/2, 75, f'Edição Acadêmica Integral • {num_pages} Páginas • Ano 2026')
    c_cov.save()
    
    cover_stream.seek(0)
    cover_reader = pypdf.PdfReader(cover_stream)
    writer.add_page(cover_reader.pages[0])

    # 3. Sobrepõe cabeçalho e rodapé em TODAS as páginas originais
    for i in range(1, num_pages):
        orig_page = reader.pages[i]
        over_stream = io.BytesIO()
        c = canvas.Canvas(over_stream, pagesize=(w, h))

        # Faixa branca superior cobrindo o cabeçalho SEBITAM antigo
        c.setFillColor(colors.white)
        c.rect(0, h - 85, w, 85, fill=1, stroke=0)

        # Cabeçalho Teologia Acessível
        c.setFont('Helvetica-Bold', 8)
        c.setFillColor(colors.HexColor('#0f2a43'))
        c.drawString(45, h - 45, 'TEOLOGIA ACESSÍVEL  •  FORMAÇÃO TEOLÓGICA SUPERIOR')
        c.setFont('Helvetica', 8)
        c.setFillColor(colors.HexColor('#64748b'))
        c.drawRightString(w - 45, h - 45, 'Compêndio Acadêmico Oficial')
        c.setStrokeColor(colors.HexColor('#cbd5e1'))
        c.setLineWidth(0.75)
        c.line(45, h - 52, w - 45, h - 52)

        # Faixa branca inferior cobrindo o rodapé SEBITAM antigo
        c.setFillColor(colors.white)
        c.rect(0, 0, w, 65, fill=1, stroke=0)

        # Rodapé Teologia Acessível
        c.setStrokeColor(colors.HexColor('#cbd5e1'))
        c.setLineWidth(0.75)
        c.line(45, 45, w - 45, 45)
        c.setFont('Helvetica', 8)
        c.setFillColor(colors.HexColor('#64748b'))
        c.drawString(45, 30, 'Teologia Acessível para Todos — Estudo Teológico Aberto & Gratuito')
        c.drawRightString(w - 45, 30, f'Página {i+1} de {num_pages}')

        c.save()
        over_stream.seek(0)
        over_page = pypdf.PdfReader(over_stream).pages[0]

        orig_page.merge_page(over_page)
        writer.add_page(orig_page)

    with open(output_path, 'wb') as f_out:
        writer.write(f_out)

    print(f"[OK] {dst_filename}: {num_pages} páginas completas geradas!")

if __name__ == '__main__':
    print("=================================================================")
    print("TRANSFORMANDO TODOS OS 30 COMPÊNDIOS PARA O FORMATO INTEGRAL")
    print("=================================================================")
    for item in MAPPING:
        processar_pdf(item[0], item[1], item[2], item[3], item[4])
    print("=================================================================")
    print("TRANSFORMAÇÃO DOS 30 COMPÊNDIOS CONCLUÍDA COM SUCESSO!")
    print("=================================================================")
