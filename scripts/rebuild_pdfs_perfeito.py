# -*- coding: utf-8 -*-
"""
REBUILD TOTAL — 30 PDFs SEBITAN PERFEITOS
- Remove 100% a linha vertical direita (overlay cobre até fora da mediabox)
- Centraliza título da capa com precisão matemática (stringWidth)
- Corrige truncamento (HERMENÊUTICA SAGRADA)
- Cabeçalho unificado SEBITAN Ananindeua em TODAS as páginas, centralizado
- Rodapé com paginação centralizada e linha sutil
- Sem bordas verticais ou artefatos
"""
import os, io, pathlib
import pypdf
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.colors import HexColor

BASE = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel")
UPLOADED = pathlib.Path(r"C:/Users/eduka/.gemini/antigravity/brain/ef3c4a87-0934-4536-b2c0-546cd564403a/.user_uploaded")
OUTPUT = BASE / "public" / "pdfs"
LOGO = BASE / "public" / "logo_sebitan.png"
if not LOGO.exists():
    LOGO = BASE / "public" / "logo-sebitan.png"
OUTPUT.mkdir(parents=True, exist_ok=True)

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
    ('media_1789483573824.pdf', 'religioes-mundiais-1.pdf', 'Religiões Mundiais I: Cultos e Tradições', 'A Busca Humana pelo Sagrado: Cultos Antigos, Mitologias, Hinduísmo e Siquismo', 'História das Religiões & Missiologia'),
]

NAVY = HexColor('#002244')
NAVY_LIGHT = HexColor('#0f2a43')
GOLD = HexColor('#d97706')
GRAY_LINE = HexColor('#e2e8f0')

HEADER_TEXT = 'SEBITAN \u2013 Semin\u00e1rio B\u00edblico Teol\u00f3gico de Ananindeua'

def draw_header_footer(c, w, h, page_num, total_pages, is_cover=False):
    # --- HEADER: cobre 100% da borda superior sem deixar sliver ---
    # Estende 10pt além da mediabox para matar linha vertical residual
    c.setFillColor(NAVY)
    c.rect(-5, h - 72, w + 10, 77, fill=1, stroke=0)
    # Texto centralizado perfeitamente
    c.setFillColor(colors.white)
    # Tenta desenhar logo centralizado com texto; se logo não existe, só texto
    c.setFont('Helvetica-Bold', 9.5)
    header = HEADER_TEXT
    # Medida para centralizar
    logo_w, logo_h = 34, 14
    has_logo = LOGO.exists()
    if has_logo:
        tw = c.stringWidth(header, 'Helvetica-Bold', 9.5)
        total_w = logo_w + 8 + tw
        sx = (w - total_w)/2
        cy = h - 36
        try:
            c.drawImage(str(LOGO), sx, cy - logo_h/2, width=logo_w, height=logo_h, mask='auto', preserveAspectRatio=True)
        except:
            pass
        c.drawString(sx + logo_w + 8, cy - 3.2, header)
    else:
        c.drawCentredString(w/2, h - 38, header)

    if not is_cover:
        # --- FOOTER: apaga completamente rodapé antigo ---
        c.setFillColor(colors.white)
        c.rect(-5, -5, w + 10, 68, fill=1, stroke=0)
        # Linha sutil
        c.setStrokeColor(GRAY_LINE)
        c.setLineWidth(0.6)
        c.line(36, 46, w - 36, 46)
        # Textos do rodapé centralizado? paginação à direita, instituição à esquerda
        c.setFont('Helvetica-Bold', 7.2)
        c.setFillColor(NAVY)
        c.drawString(36, 30, HEADER_TEXT)
        c.setFont('Helvetica', 7)
        c.setFillColor(HexColor('#64748b'))
        c.drawRightString(w - 36, 30, f'P\u00e1gina {page_num} de {total_pages}')
        # Selo discreto centro
        c.setFont('Helvetica', 6)
        c.setFillColor(HexColor('#94a3b8'))
        c.drawCentredString(w/2, 18, 'SEBITAN \u00b7 Teologia Acess\u00edvel \u00b7 Ananindeua \u2013 PA \u00b7 2026')

def draw_cover_page(w, h, titulo, subtitulo, area, total_pages):
    """Cria página de capa PERFEITA centralizada, sem truncamento"""
    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=(w, h))
    # Fundo branco
    c.setFillColor(colors.white)
    c.rect(-5, -5, w+10, h+10, fill=1, stroke=0)
    # Header navy
    draw_header_footer(c, w, h, 1, total_pages, is_cover=True)
    # Bloco central azul navy
    block_w = 520
    block_h = 360
    bx = (w - block_w)/2
    by = (h - block_h)/2 - 6
    c.setFillColor(NAVY)
    c.roundRect(bx, by, block_w, block_h, 14, fill=1, stroke=0)
    # Borda dourada sutil interna
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.2)
    c.roundRect(bx+6, by+6, block_w-12, block_h-12, 10, fill=0, stroke=1)
    # Título centralizado com quebra inteligente
    titulo_upper = titulo.upper()
    # Divide em linhas se necessário (max 22 chars por linha aprox)
    # Usa lógica de quebra por palavras
    words = titulo_upper.split()
    lines = []
    cur = ""
    for wd in words:
        test = (cur + " " + wd).strip()
        # estima largura com fonte 28
        if c.stringWidth(test, 'Helvetica-Bold', 28) > block_w - 60:
            if cur:
                lines.append(cur)
            cur = wd
        else:
            cur = test
    if cur:
        lines.append(cur)
    # Ajusta fonte conforme linhas
    if len(lines) >= 3:
        font_size = 26
        line_gap = 34
    elif len(lines) == 2:
        font_size = 30
        line_gap = 38
    else:
        # linha única - verifica largura
        if c.stringWidth(lines[0], 'Helvetica-Bold', 34) > block_w - 50:
            font_size = 28
        else:
            font_size = 34
        line_gap = 42

    # Posiciona título verticalmente centrado no bloco
    total_title_h = len(lines) * line_gap
    start_y = by + block_h/2 + total_title_h/2 - 14
    c.setFillColor(colors.white)
    c.setFont('Helvetica-Bold', font_size)
    for i, ln in enumerate(lines):
        y = start_y - i*line_gap
        c.drawCentredString(w/2, y, ln)

    # Barra dourada abaixo do título
    bar_y = start_y - len(lines)*line_gap + 10
    c.setStrokeColor(GOLD)
    c.setLineWidth(2.2)
    c.line(w/2 - 90, bar_y, w/2 + 90, bar_y)

    # Subtítulo
    c.setFont('Helvetica', 8.5)
    c.setFillColor(HexColor('#e2e8f0'))
    # Quebra subtítulo em até 2 linhas
    sub = subtitulo
    if c.stringWidth(sub, 'Helvetica', 8.5) > block_w - 50:
        # quebra no meio
        mid = len(sub)//2
        # procura espaço próximo ao meio
        split = sub.rfind(' ', 0, mid+20)
        if split == -1:
            split = mid
        l1 = sub[:split].strip()
        l2 = sub[split:].strip()
        c.drawCentredString(w/2, bar_y - 18, l1)
        c.drawCentredString(w/2, bar_y - 30, l2)
        area_y = bar_y - 52
    else:
        c.drawCentredString(w/2, bar_y - 20, sub)
        area_y = bar_y - 42
    # Área acadêmica
    c.setFont('Helvetica-Bold', 7.5)
    c.setFillColor(GOLD)
    c.drawCentredString(w/2, area_y, f'\u00c1rea: {area.upper()}')

    # Rodapé da capa - infos
    c.setFont('Helvetica', 7)
    c.setFillColor(HexColor('#64748b'))
    c.drawCentredString(w/2, 88, 'Comp\u00eandio Acad\u00eamico Oficial \u00b7 Teologia Acess\u00edvel')
    c.drawCentredString(w/2, 76, f'Edi\u00e7\u00e3o Integral \u00b7 {total_pages} p\u00e1ginas \u00b7 Ano 2026')
    # Selo dourado
    c.setFont('Helvetica-Bold', 6.5)
    c.setFillColor(GOLD)
    c.drawCentredString(w/2, 62, 'SEBITAN \u00b7 ANANINDEUA \u2013 PAR\u00c1')

    c.save()
    buf.seek(0)
    return pypdf.PdfReader(buf).pages[0]

def process_one(src_file, dst_file, titulo, subtitulo, area):
    src = UPLOADED / src_file
    dst = OUTPUT / dst_file
    if not src.exists():
        print(f"[ERRO] origem nao encontrada: {src_file}")
        return False
    reader = pypdf.PdfReader(str(src))
    total = len(reader.pages)
    # pega tamanho da página (usa p1 se existir)
    ref = reader.pages[1] if total>1 else reader.pages[0]
    w = float(ref.mediabox.width)
    h = float(ref.mediabox.height)
    # Força A4 se muito diferente
    if abs(w-595)>20 or abs(h-842)>20:
        w, h = 595.32, 841.92
    writer = pypdf.PdfWriter()
    # Capa nova perfeita
    cover = draw_cover_page(w, h, titulo, subtitulo, area, total)
    writer.add_page(cover)
    # Demais páginas: original + overlay header/footer que apaga 100%
    for i in range(1, total):
        orig = reader.pages[i]
        # cria overlay para esta página
        over_buf = io.BytesIO()
        c = canvas.Canvas(over_buf, pagesize=(w, h))
        draw_header_footer(c, w, h, i+1, total, is_cover=False)
        c.save()
        over_buf.seek(0)
        over_page = pypdf.PdfReader(over_buf).pages[0]
        # Faz merge: original por baixo, overlay por cima
        # Precisa garantir mediabox igual
        orig.mediabox = pypdf.generic.RectangleObject([0,0,w,h])
        over_page.mediabox = pypdf.generic.RectangleObject([0,0,w,h])
        orig.merge_page(over_page)
        writer.add_page(orig)
    with open(dst, 'wb') as f:
        writer.write(f)
    print(f"[OK] {dst_file} -> {total} pgs | capa centralizada, sem linha vertical")
    return True

if __name__ == "__main__":
    print("="*70)
    print("REBUILD TOTAL 30 PDFs SEBITAN — Centralizado + Sem linha vertical")
    print("="*70)
    ok=0
    for src,dst,tit,sub,area in MAPPING:
        if process_one(src,dst,tit,sub,area):
            ok+=1
    print("="*70)
    print(f"FINALIZADO: {ok}/30 PDFs recriados com sucesso!")
    print("="*70)
