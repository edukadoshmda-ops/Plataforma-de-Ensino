# -*- coding: utf-8 -*-
"""
FIX V2 — Coordenadas corretas pymupdf (origem no topo) + remove Amaz\u00f4nia do corpo
- Header antigo: topo y=0 a 82
- Footer antigo: base y=H-82 a H
- Tamb\u00e9m apaga sum\u00e1rio "SEBITAM - ... da Amaz\u00f4nia" em qualquer posi\u00e7\u00e3o
- Aplica logo dourada oficial com fundo navy correto
"""
import io, pathlib
import pymupdf
import pypdf
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.colors import HexColor

BASE = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel")
UPLOADED = pathlib.Path(r"C:/Users/eduka/.gemini/antigravity/brain/ef3c4a87-0934-4536-b2c0-546cd564403a/.user_uploaded")
OUTPUT = BASE / "public" / "pdfs"
LOGO_DOURADA = BASE / "public" / "logo-sebitan.png"
OUTPUT.mkdir(parents=True, exist_ok=True)

MAPPING = [
    ('media_1789483350265.pdf', 'maneiras-e-costumes-da-biblia.pdf', 'Maneiras e Costumes da B\u00edblia', 'Vida Dom\u00e9stica, Social, Geogr\u00e1fica e Cultural nos Tempos B\u00edblicos', 'Arqueologia & Contexto Hist\u00f3rico-B\u00edblico'),
    ('media_1789483350323.pdf', 'portugues-instrumental.pdf', 'Portugu\u00eas Instrumental', 'Comunica\u00e7\u00e3o Verbal, Dic\u00e7\u00e3o, Orat\u00f3ria e Lingu\u00edstica no P\u00falpito', 'Lingu\u00edstica & Comunica\u00e7\u00e3o Eclesi\u00e1stica'),
    ('media_1789483350406.pdf', 'metodologia-da-pesquisa.pdf', 'Metodologia da Pesquisa Cient\u00edfica', 'Rigor Acad\u00eamico, Epistemologia e Normatiza\u00e7\u00e3o de Trabalhos Teol\u00f3gicos', 'Metodologia Cient\u00edfica & Pesquisa'),
    ('media_1789483350615.pdf', 'hermeneutica-sagrada.pdf', 'Hermen\u00eautica Sagrada', 'Regras de Interpreta\u00e7\u00e3o B\u00edblica, Exegese e M\u00e9todos Hermen\u00eauticos', 'Hermen\u00eautica & Exegese B\u00edblica'),
    ('media_1789483350864.pdf', 'homiletica.pdf', 'Homil\u00e9tica: A Arte de Pregar', 'A Prepara\u00e7\u00e3o, Estrutura, Ret\u00f3rica e Proclama\u00e7\u00e3o do Serm\u00e3o B\u00edblico', 'Teologia Pr\u00e1tica & Minist\u00e9rio da Palavra'),
    ('media_1789483424955.pdf', 'apologetica.pdf', 'Apolog\u00e9tica Crist\u00e3', 'A Defesa Racional da F\u00e9, Filosofia e Confronto com o Pensamento Secular', 'Filosofia da Religi\u00e3o & Apolog\u00e9tica'),
    ('media_1789483425211.pdf', 'sintese-antigo-testamento.pdf', 'S\u00edntese do Antigo Testamento', 'Panorama Completo dos 39 Livros: Pentateuco, Hist\u00f3ricos, Po\u00e9ticos e Prof\u00e9ticos', 'Teologia B\u00edblica do Antigo Testamento'),
    ('media_1789483425367.pdf', 'periodo-interbiblico.pdf', 'Per\u00edodo Interb\u00edblico', 'Os 400 Anos de Sil\u00eancio Prof\u00e9tico: Imp\u00e9rios Persa, Grego, Macabeu e Romano', 'Hist\u00f3ria B\u00edblica & Juda\u00edsmo do Segundo Templo'),
    ('media_1789483425602.pdf', 'manuscritos-antigo-testamento.pdf', 'Manuscritos do Antigo Testamento', 'Transmiss\u00e3o Textual, Massoretas, Texto Cr\u00edtico e Rolos do Mar Morto', 'Cr\u00edtica Textual & Hist\u00f3ria do C\u00e2non'),
    ('media_1789483425676.pdf', 'sintese-novo-testamento.pdf', 'S\u00edntese do Novo Testamento', 'Os 27 Livros: Evangelhos, Atos, Ep\u00edstolas Paulinas, Gerais e Apocalipse', 'Teologia B\u00edblica do Novo Testamento'),
    ('media_1789483449984.pdf', 'teontologia.pdf', 'Teontologia: A Doutrina de Deus', 'O Ser, a Natureza, os Atributos Divinos e o Mist\u00e9rio da Trindade Santa', 'Teologia Sistem\u00e1tica I'),
    ('media_1789483450096.pdf', 'bibliologia.pdf', 'Bibliologia: As Sagradas Escrituras', 'Inspira\u00e7\u00e3o Plen\u00e1ria, Inerr\u00e2ncia, Autoridade, Canonicidade e Ilumina\u00e7\u00e3o', 'Teologia Sistem\u00e1tica I'),
    ('media_1789483450151.pdf', 'angelologia.pdf', 'Angelologia & Demonologia', 'A Cria\u00e7\u00e3o dos Anjos, Classes Celestes, a Queda de Satan\u00e1s e a Batalha Espiritual', 'Teologia Sistem\u00e1tica II'),
    ('media_1789483450217.pdf', 'antropologia-teologica.pdf', 'Antropologia Teol\u00f3gica', 'A Cria\u00e7\u00e3o do Ser Humano \u00e0 Imagem de Deus, Corpo, Alma, Esp\u00edrito e a Queda', 'Teologia Sistem\u00e1tica II'),
    ('media_1789483450239.pdf', 'cristologia.pdf', 'Cristologia: A Pessoa e Obra de Cristo', 'A Pr\u00e9-exist\u00eancia, a Humanidade e Divindade, Of\u00edcios e a Vit\u00f3ria na Cruz', 'Teologia Sistem\u00e1tica III'),
    ('media_1789483493292.pdf', 'soteriologia.pdf', 'Soteriologia: A Doutrina da Salva\u00e7\u00e3o', 'Reden\u00e7\u00e3o, Justifica\u00e7\u00e3o pela F\u00e9, Regenera\u00e7\u00e3o, Ado\u00e7\u00e3o e Glorifica\u00e7\u00e3o', 'Teologia Sistem\u00e1tica III'),
    ('media_1789483493412.pdf', 'eclesiologia.pdf', 'Eclesiologia: A Doutrina da Igreja', 'O Corpo M\u00edstico de Cristo, Governo B\u00edblico, Ordenan\u00e7as e a Miss\u00e3o no Mundo', 'Teologia Sistem\u00e1tica IV'),
    ('media_1789483493434.pdf', 'hamartiologia.pdf', 'Hamartiologia: A Doutrina do Pecado', 'A Origem, Natureza, Universalidade e Consequ\u00eancias da Queda Humana', 'Teologia Sistem\u00e1tica II'),
    ('media_1789483493475.pdf', 'pneumatologia.pdf', 'Pneumatologia: O Esp\u00edrito Santo', 'A Deidade, Personalidade, S\u00edmbolos, Dons e Fruto do Esp\u00edrito Santo', 'Teologia Sistem\u00e1tica III'),
    ('media_1789483493769.pdf', 'escatologia.pdf', 'Estudos de Escatologia B\u00edblica', 'As Profecias Finais, o Arrebatamento, a Grande Tribula\u00e7\u00e3o, o Mil\u00eanio e a Eternidade', 'Teologia Sistem\u00e1tica IV'),
    ('media_1789483551440.pdf', 'evangelismo.pdf', 'Evangelismo Pr\u00e1tico & Conquista de Almas', 'A Grande Comiss\u00e3o, Metodologia de Abordagem e Condu\u00e7\u00e3o \u00e0 Decis\u00e3o de F\u00e9', 'Missiologia & Minist\u00e9rio Pastoral'),
    ('media_1789483551501.pdf', 'geografia-biblica.pdf', 'Geografia B\u00edblica & Cen\u00e1rio Hist\u00f3rico', 'O Crescente F\u00e9rtil, Cana\u00e3, Montes Sagrados, Mares e Rotas Apost\u00f3licas', 'Arqueologia & Hist\u00f3ria B\u00edblica'),
    ('media_1789483551796.pdf', 'heresiologia.pdf', 'Heresiologia: O Discernimento das Seitas', 'An\u00e1lise Cr\u00edtica de Movimentos Heterodoxos \u00e0 Luz da S\u00e3 Doutrina B\u00edblica', 'Teologia Sistem\u00e1tica & Apolog\u00e9tica'),
    ('media_1789483551818.pdf', 'administracao-eclesiastica.pdf', 'Administra\u00e7\u00e3o Eclesi\u00e1stica & Governan\u00e7a', 'Governan\u00e7a B\u00edblica, Gest\u00e3o Ministerial, Princ\u00edpio de Jetro e Estrutura Legal', 'Teologia Pr\u00e1tica & Gest\u00e3o'),
    ('media_1789483551827.pdf', 'discipulado.pdf', 'Discipulado B\u00edblico & Vida Crist\u00e3', 'Maturidade em Cristo, Koinonia, Disciplinas Espirituais e Mordomia Crist\u00e3', 'Teologia Pr\u00e1tica & Vida Crist\u00e3'),
    ('media_1789483573207.pdf', 'arqueologia-biblica.pdf', 'Arqueologia B\u00edblica: Evid\u00eancias e Descobertas', 'Per\u00edodos Culturais, M\u00e9todos de Data\u00e7\u00e3o e Grandes Achados do Oriente Pr\u00f3ximo', 'Arqueologia & Contexto Hist\u00f3rico'),
    ('media_1789483573305.pdf', 'dispensacoes-e-aliancas.pdf', 'Dispensa\u00e7\u00f5es e Alian\u00e7as B\u00edblicas', 'Os Sete Per\u00edodos da Revela\u00e7\u00e3o Divina e as Oito Alian\u00e7as Eternas em Cristo', 'Teologia B\u00edblica & Sistem\u00e1tica'),
    ('media_1789483573380.pdf', 'a-biblia-e-a-ciencia.pdf', 'A B\u00edblia e a Ci\u00eancia: Harmonia das Origens', 'Cosmologia, Ajuste Fino da Terra, Termodin\u00e2mica e Antecipa\u00e7\u00f5es Cient\u00edficas', 'Ci\u00eancia, Filosofia & F\u00e9 Crist\u00e3'),
    ('media_1789483573620.pdf', 'tipologia-e-simbologia.pdf', 'Tipologia & Simbologia B\u00edblica', 'Sombras Prof\u00e9ticas, A Tipologia do Tabern\u00e1culo e o Significado dos N\u00fameros', 'Hermen\u00eautica Sagrada & Teologia B\u00edblica'),
    ('media_1789483573824.pdf', 'religioes-mundiais-1.pdf', 'Religi\u00f5es Mundiais I: Cultos e Tradi\u00e7\u00f5es', 'A Busca Humana pelo Sagrado: Cultos Antigos, Mitologias, Hindu\u00edsmo e Siquismo', 'Hist\u00f3ria das Religi\u00f5es & Missiologia'),
]

NAVY = HexColor('#002244')
GOLD = HexColor('#d97706')
GRAY_LINE = HexColor('#e2e8f0')
HEADER_TEXT = 'SEBITAN \u2013 Semin\u00e1rio B\u00edblico Teol\u00f3gico de Ananindeua'

def draw_header_footer(c, w, h, page_num, total_pages, is_cover=False):
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
    if not is_cover:
        c.setFillColor(colors.white)
        c.rect(-8, -8, w + 16, 70, fill=1, stroke=0)
        c.setStrokeColor(GRAY_LINE)
        c.setLineWidth(0.6)
        c.line(36, 46, w - 36, 46)
        c.setFont('Helvetica-Bold', 7.2)
        c.setFillColor(NAVY)
        c.drawString(36, 30, HEADER_TEXT)
        c.setFont('Helvetica', 7)
        c.setFillColor(HexColor('#64748b'))
        c.drawRightString(w - 36, 30, f'P\u00e1gina {page_num} de {total_pages}')
        c.setFont('Helvetica', 6)
        c.setFillColor(HexColor('#94a3b8'))
        c.drawCentredString(w/2, 18, 'SEBITAN \u00b7 Teologia Acess\u00edvel \u00b7 Ananindeua \u2013 PA \u00b7 2026')

def draw_cover_page(w, h, titulo, subtitulo, area, total_pages):
    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=(w, h))
    c.setFillColor(colors.white)
    c.rect(-8, -8, w+16, h+16, fill=1, stroke=0)
    draw_header_footer(c, w, h, 1, total_pages, is_cover=True)
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
    mu_doc = pymupdf.open(str(src))
    total = len(mu_doc)
    W = mu_doc[0].rect.width
    H = mu_doc[0].rect.height
    for i in range(total):
        page = mu_doc[i]
        # Header: topo y=0 a 84 (origem topo) — cobre faixa azul antiga
        page.add_redact_annot(pymupdf.Rect(-4, -4, W+4, 84), fill=(1,1,1))
        # Footer: base y=H-84 a H
        page.add_redact_annot(pymupdf.Rect(-4, H-84, W+4, H+4), fill=(1,1,1))
        # Corpo: apaga qualquer "Amaz\u00f4nia"/"Amazonia" e "SEBITAM ... da Amaz\u00f4nia"
        for term in ["Amaz\u00f4nia", "Amazonia", "AMAZ\u00d4NIA", "AMAZONIA"]:
            for r in page.search_for(term):
                page.add_redact_annot(pymupdf.Rect(r.x0-2, r.y0-2, r.x1+2, r.y1+2), fill=(1,1,1))
        # Tamb\u00e9m apaga linha do sum\u00e1rio que cont\u00e9m SEBITAM + Amaz\u00f4nia
        # Busca "SEBITAM" e se na mesma linha tem Amaz\u00f4nia, apaga linha inteira
        for r in page.search_for("SEBITAM"):
            # pega linha: expande horizontalmente para cobrir at\u00e9 n\u00famero da p\u00e1gina
            # Verifica se h\u00e1 Amaz\u00f4nia pr\u00f3xima na mesma faixa Y
            has_amaz = any(abs(rr.y0 - r.y0) < 5 and "Amaz" in page.get_text(clip=rr) for rr in page.search_for("Amaz\u00f4nia"))
            # Simples: se for sum\u00e1rio (pontilhado), a linha tem "...." — apaga toda a linha
            line_text = page.get_text(clip=pymupdf.Rect(0, r.y0-3, W, r.y1+3))
            if "Amaz" in line_text:
                page.add_redact_annot(pymupdf.Rect(-2, r.y0-2, W+2, r.y1+2), fill=(1,1,1))
    # Aplica
    for pg in mu_doc:
        pg.apply_redactions(images=True, graphics=True, text=True)
    tmp_clean = OUTPUT / f"_tmp_clean_{dst_file}"
    mu_doc.save(str(tmp_clean), garbage=4, deflate=True)
    mu_doc.close()
    reader = pypdf.PdfReader(str(tmp_clean))
    total = len(reader.pages)
    ref = reader.pages[1] if total>1 else reader.pages[0]
    w = float(ref.mediabox.width)
    h = float(ref.mediabox.height)
    if abs(w-595)>20 or abs(h-842)>20:
        w, h = 595.32, 841.92
    writer = pypdf.PdfWriter()
    cover = draw_cover_page(w, h, titulo, subtitulo, area, total)
    writer.add_page(cover)
    for i in range(1, total):
        orig = reader.pages[i]
        over_buf = io.BytesIO()
        c = canvas.Canvas(over_buf, pagesize=(w, h))
        draw_header_footer(c, w, h, i+1, total, is_cover=False)
        c.save()
        over_buf.seek(0)
        over_page = pypdf.PdfReader(over_buf).pages[0]
        orig.mediabox = pypdf.generic.RectangleObject([0,0,w,h])
        over_page.mediabox = pypdf.generic.RectangleObject([0,0,w,h])
        orig.merge_page(over_page)
        writer.add_page(orig)
    with open(dst, 'wb') as f:
        writer.write(f)
    try:
        tmp_clean.unlink()
    except:
        pass
    print(f"[OK] {dst_file} -> {total} pgs | Ananindeua OK, Amaz\u00f4nia removida do corpo")
    return True

if __name__ == "__main__":
    print("="*72)
    print("FIX V2 — Coordenadas pymupdf corretas + Amaz\u00f4nia do corpo removida")
    print("="*72)
    ok=0
    for src,dst,tit,sub,area in MAPPING:
        if process_one(src,dst,tit,sub,area):
            ok+=1
    print("="*72)
    print(f"FINALIZADO: {ok}/30 PDFs corrigidos!")
    print("="*72)
