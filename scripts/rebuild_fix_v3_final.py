# -*- coding: utf-8 -*-
"""
FIX V3 FINAL — 100% pymupdf para header/footer + remove Amazônia do sumário e desenha Ananindeua
"""
import io, pathlib
import pymupdf
import pypdf
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from PIL import Image

BASE = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel")
UPLOADED = pathlib.Path(r"C:/Users/eduka/.gemini/antigravity/brain/ef3c4a87-0934-4536-b2c0-546cd564403a/.user_uploaded")
OUTPUT = BASE / "public" / "pdfs"
LOGO_DOURADA = BASE / "public" / "logo-sebitan.png"

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
GOLD = HexColor('#d97706')
GRAY_LINE = HexColor('#e2e8f0')
HEADER_TEXT = 'SEBITAN \u2013 Semin\u00e1rio B\u00edblico Teol\u00f3gico de Ananindeua'
NAVY_RGB = (0, 0.133, 0.267)

def draw_cover_page(w, h, titulo, subtitulo, area, total_pages):
    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=(w, h))
    c.setFillColor(colors.white)
    c.rect(-8, -8, w+16, h+16, fill=1, stroke=0)
    # header
    c.setFillColor(NAVY)
    c.rect(-8, h - 74, w + 16, 80, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont('Helvetica-Bold', 9.2)
    header = HEADER_TEXT
    logo_w, logo_h = 38, 22
    if LOGO_DOURADA.exists():
        tw = c.stringWidth(header, 'Helvetica-Bold', 9.2)
        total_w = logo_w + 9 + tw
        sx = (w - total_w)/2
        cy = h - 37
        try:
            c.drawImage(str(LOGO_DOURADA), sx, cy - logo_h/2 + 1, width=logo_w, height=logo_h, mask='auto', preserveAspectRatio=True)
            c.drawString(sx + logo_w + 9, cy - 3.2, header)
        except Exception as e:
            print(f"logo draw failed: {e}")
            sx2 = (w - tw)/2
            c.drawString(sx2, cy - 3.2, header)
    else:
        c.drawCentredString(w/2, h - 39, header)
    block_w = 520
    block_h = 360
    bx = (w - block_w)/2
    by = (h - block_h)/2 - 6
    c.setFillColor(NAVY)
    c.roundRect(bx, by, block_w, block_h, 14, fill=1, stroke=0)
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.2)
    c.roundRect(bx+6, by+6, block_w-12, block_h-12, 10, fill=0, stroke=1)
    titulo_upper = titulo.upper()
    words = titulo_upper.split()
    lines = []
    cur = ""
    for wd in words:
        test = (cur + " " + wd).strip()
        if c.stringWidth(test, 'Helvetica-Bold', 28) > block_w - 60:
            if cur:
                lines.append(cur)
            cur = wd
        else:
            cur = test
    if cur:
        lines.append(cur)
    if len(lines) >= 3:
        font_size = 26
        line_gap = 34
    elif len(lines) == 2:
        font_size = 30
        line_gap = 38
    else:
        if c.stringWidth(lines[0], 'Helvetica-Bold', 34) > block_w - 50:
            font_size = 28
        else:
            font_size = 34
        line_gap = 42
    total_title_h = len(lines) * line_gap
    start_y = by + block_h/2 + total_title_h/2 - 14
    c.setFillColor(colors.white)
    c.setFont('Helvetica-Bold', font_size)
    for i, ln in enumerate(lines):
        y = start_y - i*line_gap
        c.drawCentredString(w/2, y, ln)
    bar_y = start_y - len(lines)*line_gap + 10
    c.setStrokeColor(GOLD)
    c.setLineWidth(2.2)
    c.line(w/2 - 90, bar_y, w/2 + 90, bar_y)
    c.setFont('Helvetica', 8.5)
    c.setFillColor(HexColor('#e2e8f0'))
    sub = subtitulo
    if c.stringWidth(sub, 'Helvetica', 8.5) > block_w - 50:
        mid = len(sub)//2
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
    c.setFont('Helvetica-Bold', 7.5)
    c.setFillColor(GOLD)
    c.drawCentredString(w/2, area_y, f'\u00c1rea: {area.upper()}')
    c.setFont('Helvetica', 7)
    c.setFillColor(HexColor('#64748b'))
    c.drawCentredString(w/2, 88, 'Comp\u00eandio Acad\u00eamico Oficial \u00b7 Teologia Acess\u00edvel')
    c.drawCentredString(w/2, 76, f'Edi\u00e7\u00e3o Integral \u00b7 {total_pages} p\u00e1ginas \u00b7 Ano 2026')
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
    # Open with pymupdf for content surgery
    mu_doc = pymupdf.open(str(src))
    total = len(mu_doc)
    W = mu_doc[0].rect.width
    H = mu_doc[0].rect.height

    # For each page, we will directly DRAW the new header/footer on top using pymupdf drawing (not redact)
    # But first, white-out old header/footer area by drawing white rect (opaque)
    for i in range(total):
        page = mu_doc[i]
        shape = page.new_shape()
        # White out header zone (top 82)
        shape.draw_rect(pymupdf.Rect(-2, -2, W+2, 82))
        shape.finish(color=(1,1,1), fill=(1,1,1), closePath=True)
        # White out footer zone (bottom 82)
        shape.draw_rect(pymupdf.Rect(-2, H-82, W+2, H+2))
        shape.finish(color=(1,1,1), fill=(1,1,1), closePath=True)
        # For sumário lines containing Amazônia, white out the line and rewrite
        # Search for Amazônia hits
        hits = page.search_for("Amaz\u00f4nia")
        for r in hits:
            # expand to cover full line width (from left margin to right)
            # The sumário dotted line spans wide — cover the word only and replace
            # Draw white over the word bbox
            shape.draw_rect(pymupdf.Rect(r.x0-1, r.y0-2, r.x1+2, r.y1+2))
            shape.finish(color=(1,1,1), fill=(1,1,1), closePath=True)
        # Also catch "Amazonia" without accent (just in case)
        for r in page.search_for("Amazonia"):
            shape.draw_rect(pymupdf.Rect(r.x0-1, r.y0-2, r.x1+2, r.y1+2))
            shape.finish(color=(1,1,1), fill=(1,1,1), closePath=True)
        shape.commit(overlay=True)

        # Now draw NAVY header on top
        shape2 = page.new_shape()
        shape2.draw_rect(pymupdf.Rect(-2, -2, W+2, 74))
        shape2.finish(color=NAVY_RGB, fill=NAVY_RGB, closePath=True)
        # Footer navy? Actually footer is white with line — draw white footer already done, now draw line and text via pymupdf text
        # We'll use page.insert_text for header text after shape
        shape2.commit(overlay=True)

        # Insert header content: logo + text centered
        # For logo: insert image centered with text
        # Use page.insert_image
        if LOGO_DOURADA.exists():
            # Calculate positions
            header_text = HEADER_TEXT
            # Estimate text width (approx 9.2pt Helvetica-Bold ~ 5.5 per char)
            # Use pymupdf to measure: page.get_text_length?
            # Simpler: place logo then text at fixed positions, then center by measuring
            # Let's place at center: we'll use new_shape to not need precise centering via pymupdf text measurement
            # Insert logo image
            logo_w, logo_h = 34, 16
            # Estimate header text length for centering — use 300 as approx
            # We'll center as group: total_w ~ logo_w + 8 + text_w
            # Use page.get_text_length if available (pymupdf 1.24+)
            try:
                text_w = pymupdf.get_text_length(header_text, fontname="helv", fontsize=9.2)
            except:
                text_w = len(header_text) * 5.2
            total_w = logo_w + 8 + text_w
            sx = (W - total_w)/2
            cy = 37  # y from top
            # Insert logo
            img_rect = pymupdf.Rect(sx, cy - logo_h/2, sx + logo_w, cy + logo_h/2)
            page.insert_image(img_rect, filename=str(LOGO_DOURADA), keep_proportion=True, overlay=True)
            # Insert text
            text_x = sx + logo_w + 8
            page.insert_text(pymupdf.Point(text_x, cy + 3), header_text, fontsize=9.2, fontname="helv", color=(1,1,1), overlay=True)
        else:
            page.insert_text(pymupdf.Point(W/2, 37), HEADER_TEXT, fontsize=9.2, fontname="helv", color=(1,1,1), overlay=True)

        # For Amazônia word replacements: after white-out, insert "Ananindeua"
        for r in hits:
            # Insert Ananindeua at same origin
            # Use same font size as original — original is ~10pt
            page.insert_text(pymupdf.Point(r.x0, r.y1 - 2), "Ananindeua", fontsize=9, fontname="helv", color=(0,0,0), overlay=True)
        for r in page.search_for("Amazonia"):
            page.insert_text(pymupdf.Point(r.x0, r.y1 - 2), "Ananindeua", fontsize=9, fontname="helv", color=(0,0,0), overlay=True)

        # Footer white already drawn, now draw gray line and footer texts
        # Gray line at y = H-42
        shape3 = page.new_shape()
        shape3.draw_line(pymupdf.Point(36, H-42), pymupdf.Point(W-36, H-42))
        shape3.finish(color=(0.88,0.91,0.94), width=0.6, closePath=False)
        shape3.commit(overlay=True)
        # Footer texts (only for inner pages, not cover? but we will handle cover separately)
        if i != 0:
            page.insert_text(pymupdf.Point(36, H-28), HEADER_TEXT, fontsize=7.2, fontname="helv", color=(0,0.133,0.267), overlay=True)
            page.insert_text(pymupdf.Point(W-36 - 80, H-28), f"P\u00e1gina {i+1} de {total}", fontsize=7, fontname="helv", color=(0.39,0.45,0.54), overlay=True)
            # Center small
            center_text = "SEBITAN \u00b7 Teologia Acess\u00edvel \u00b7 Ananindeua \u2013 PA \u00b7 2026"
            try:
                ct_w = pymupdf.get_text_length(center_text, fontname="helv", fontsize=6)
            except:
                ct_w = len(center_text)*3.2
            page.insert_text(pymupdf.Point((W-ct_w)/2, H-16), center_text, fontsize=6, fontname="helv", color=(0.58,0.64,0.72), overlay=True)

    # Save intermediate with header/footer already drawn
    tmp_inter = OUTPUT / f"_tmp_v3_{dst_file}"
    mu_doc.save(str(tmp_inter), garbage=4, deflate=True)
    mu_doc.close()

    # Now create final with NEW COVER (reportlab) + inner pages from tmp_inter (skip original cover)
    reader = pypdf.PdfReader(str(tmp_inter))
    total2 = len(reader.pages)
    ref = reader.pages[1] if total2>1 else reader.pages[0]
    w = float(ref.mediabox.width)
    h = float(ref.mediabox.height)
    if abs(w-595)>20 or abs(h-842)>20:
        w, h = 595.32, 841.92
    writer = pypdf.PdfWriter()
    cover = draw_cover_page(w, h, titulo, subtitulo, area, total2)
    writer.add_page(cover)
    for i in range(1, total2):
        orig = reader.pages[i]
        orig.mediabox = pypdf.generic.RectangleObject([0,0,w,h])
        writer.add_page(orig)
    with open(dst, 'wb') as f:
        writer.write(f)
    try:
        tmp_inter.unlink()
    except:
        pass
    print(f"[OK] {dst_file} -> {total2} pgs | V3 header/footer + sum\u00e1rio corrigido")
    return True

if __name__ == "__main__":
    print("="*72)
    print("FIX V3 FINAL — pymupdf draw (header/navy + Ananindeua no sum\u00e1rio)")
    print("="*72)
    ok=0
    for src,dst,tit,sub,area in MAPPING:
        if process_one(src,dst,tit,sub,area):
            ok+=1
    print("="*72)
    print(f"FINALIZADO: {ok}/30 PDFs!")
    print("="*72)
