# -*- coding: utf-8 -*-
"""
FIX DEFINITIVO — Remove a identidade antiga e aplica a identidade Teologia Acessível
- Apaga completamente faixas header/footer antigas (com redação que remove texto e imagens)
- Remove TODAS as ocorrências de "Amazônia"/"Amazonia" no corpo (ex: sumário)
- Aplica logo branca e o texto "TEOLOGIA ACESSÍVEL"
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
LOGO_ORIGINAL = BASE / "public" / "logo-teologia.png"
LOGO_BRANCA = BASE / "public" / "logo-teologia-branca.png"
OUTPUT.mkdir(parents=True, exist_ok=True)

def preparar_logo_branca():
    from PIL import Image

    if not LOGO_ORIGINAL.exists():
        raise FileNotFoundError(f"Logo original não encontrada: {LOGO_ORIGINAL}")
    imagem = Image.open(LOGO_ORIGINAL).convert("RGBA")
    alpha = imagem.getchannel("A")
    branca = Image.new("RGBA", imagem.size, (255, 255, 255, 0))
    branca.putalpha(alpha)
    branca.save(LOGO_BRANCA)
    print(f"Logo branca criada: {LOGO_BRANCA}")

preparar_logo_branca()

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
HEADER_TEXT = 'TEOLOGIA ACESSÍVEL'

def draw_header_footer(c, w, h, page_num, total_pages, is_cover=False):
    # Header navy cobrindo 100% além da borda
    c.setFillColor(NAVY)
    c.rect(-8, h - 74, w + 16, 80, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont('Helvetica-Bold', 9.2)
    header = HEADER_TEXT
    # Logo branca centralizada
    logo_w, logo_h = 38, 22
    if LOGO_BRANCA.exists():
        tw = c.stringWidth(header, 'Helvetica-Bold', 9.2)
        total_w = logo_w + 9 + tw
        sx = (w - total_w)/2
        cy = h - 37
        try:
            c.drawImage(str(LOGO_BRANCA), sx, cy - logo_h/2 + 1, width=logo_w, height=logo_h, mask='auto', preserveAspectRatio=True)
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
        c.drawCentredString(w/2, 18, 'TEOLOGIA ACESSÍVEL · PLATAFORMA DE TEOLOGIA BÍBLICA · 2026')

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
    c.drawCentredString(w/2, 62, 'TEOLOGIA ACESSÍVEL')
    c.save()
    buf.seek(0)
    return pypdf.PdfReader(buf).pages[0]

def draw_internal_header_footer(page, page_num, total_pages):
    """Desenha a identidade nova diretamente na página já limpa."""
    w = page.rect.width
    h = page.rect.height
    navy = (0, 0.133, 0.267)
    gold = (0.851, 0.467, 0.024)
    gray_line = (0.886, 0.91, 0.941)

    page.draw_rect(pymupdf.Rect(0, 0, w, 74), color=None, fill=navy, overlay=True)
    page.draw_rect(pymupdf.Rect(0, h - 70, w, h), color=None, fill=(1, 1, 1), overlay=True)
    page.draw_line(pymupdf.Point(36, h - 46), pymupdf.Point(w - 36, h - 46),
                   color=gray_line, width=0.6, overlay=True)

    if LOGO_BRANCA.exists():
        page.insert_image(
            pymupdf.Rect(w / 2 - 63, 25, w / 2 - 25, 47),
            filename=str(LOGO_BRANCA),
            overlay=True,
        )
    page.insert_text(
        pymupdf.Point(w / 2 - 16, 39),
        HEADER_TEXT,
        fontsize=9.2,
        fontname='hebo',
        color=(1, 1, 1),
        overlay=True,
    )

    page.insert_text(
        pymupdf.Point(36, h - 40),
        HEADER_TEXT,
        fontsize=7.2,
        fontname='hebo',
        color=navy,
        overlay=True,
    )
    page.insert_textbox(
        pymupdf.Rect(w - 180, h - 48, w - 36, h - 26),
        f'Página {page_num} de {total_pages}',
        fontsize=7,
        fontname='helv',
        color=(0.392, 0.455, 0.545),
        align=pymupdf.TEXT_ALIGN_RIGHT,
        overlay=True,
    )
    page.insert_text(
        pymupdf.Point(w / 2 - 116, h - 18),
        'TEOLOGIA ACESSÍVEL · PLATAFORMA DE TEOLOGIA BÍBLICA · 2026',
        fontsize=6,
        fontname='helv',
        color=(0.58, 0.639, 0.722),
        overlay=True,
    )


def render_internal_page(page, page_num, total_pages):
    """Achata uma página limpa com o cabeçalho/rodapé para evitar camadas instáveis."""
    from PIL import Image, ImageDraw, ImageFont

    scale = 2
    pix = page.get_pixmap(matrix=pymupdf.Matrix(scale, scale), alpha=False)
    image = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
    draw = ImageDraw.Draw(image)
    navy = (0, 34, 68)
    gray_line = (226, 232, 240)
    gray_text = (100, 116, 139)
    light_text = (148, 163, 184)
    w, h = image.size

    draw.rectangle((0, 0, w, 74 * scale), fill=navy)
    draw.rectangle((0, h - 70 * scale, w, h), fill='white')
    draw.line((36 * scale, h - 46 * scale, w - 36 * scale, h - 46 * scale),
              fill=gray_line, width=1)

    font_path = r'C:\Windows\Fonts\arial.ttf'
    bold_path = r'C:\Windows\Fonts\arialbd.ttf'
    font = ImageFont.truetype(font_path, 9 * scale)
    small_bold = ImageFont.truetype(bold_path, 7 * scale)
    small = ImageFont.truetype(font_path, 7 * scale)
    tiny = ImageFont.truetype(font_path, 6 * scale)
    title_box = draw.textbbox((0, 0), HEADER_TEXT, font=font)
    title_w = title_box[2] - title_box[0]
    logo = Image.open(LOGO_BRANCA).convert('RGBA').resize((38 * scale, 22 * scale))
    logo_x = int((w - (38 * scale + 9 * scale + title_w)) / 2)
    image.paste(logo, (logo_x, 25 * scale), logo)
    draw.text((logo_x + 47 * scale, 29 * scale), HEADER_TEXT, font=font, fill='white')
    draw.text((36 * scale, h - 40 * scale), HEADER_TEXT, font=small_bold, fill=navy)
    footer_page = f'Página {page_num} de {total_pages}'
    page_box = draw.textbbox((0, 0), footer_page, font=small)
    draw.text((w - 36 * scale - (page_box[2] - page_box[0]), h - 48 * scale),
              footer_page, font=small, fill=gray_text)
    footer = 'TEOLOGIA ACESSÍVEL · PLATAFORMA DE TEOLOGIA BÍBLICA · 2026'
    footer_box = draw.textbbox((0, 0), footer, font=tiny)
    draw.text(((w - (footer_box[2] - footer_box[0])) / 2, h - 23 * scale),
              footer, font=tiny, fill=light_text)
    output = io.BytesIO()
    image.save(output, format='PNG', optimize=True)
    return output.getvalue(), page.rect.width, page.rect.height

def process_one(src_file, dst_file, titulo, subtitulo, area):
    src = UPLOADED / src_file
    dst = OUTPUT / dst_file
    if not src.exists():
        print(f"[ERRO] origem nao encontrada: {src_file}")
        return False
    # Abre com pymupdf para apagar completamente a identidade antiga.
    mu_doc = pymupdf.open(str(src))
    total = len(mu_doc)
    for i in range(1, total):
        page = mu_doc[i]
        w = page.rect.width
        h = page.rect.height
        # As faixas originais têm cerca de 50 pt; 90 pt evita sobras nas bordas.
        page.add_redact_annot(pymupdf.Rect(0, 0, w, 90), fill=(1, 1, 1))
        page.add_redact_annot(pymupdf.Rect(0, h - 90, w, h), fill=(1, 1, 1))
        for term in [
            "SEBITAM", "SEBITAN", "Seminário Bíblico Teológico da Amazônia",
            "Seminário Bíblico e Teológico de Ananindeua",
            "Amazônia", "Amazonia", "AMAZÔNIA", "AMAZONIA",
        ]:
            hits = page.search_for(term)
            for r in hits:
                page.add_redact_annot(
                    pymupdf.Rect(r.x0 - 2, r.y0 - 2, r.x1 + 2, r.y1 + 2),
                    fill=(1, 1, 1),
                )
    # PyMuPDF applies text, images and graphics by default. Passing boolean
    # values here is version-sensitive and can leave the original text hidden
    # under the new header.
    for pg in mu_doc:
        pg.apply_redactions()

    tmp_clean = OUTPUT / f"_tmp_clean_{dst_file}"
    mu_doc.save(str(tmp_clean), garbage=4, deflate=True)
    mu_doc.close()

    # A capa e as páginas internas são montadas com PyMuPDF. Reempacotar
    # páginas desenhadas pelo PyMuPDF com pypdf descarta conteúdo em páginas
    # alternadas em alguns PDFs.
    internal_doc = pymupdf.open(str(tmp_clean))
    w = internal_doc[0].rect.width
    h = internal_doc[0].rect.height
    cover_buffer = io.BytesIO()
    cover_page = draw_cover_page(w, h, titulo, subtitulo, area, total)
    cover_writer = pypdf.PdfWriter()
    cover_writer.add_page(cover_page)
    cover_writer.write(cover_buffer)
    cover_buffer.seek(0)
    cover_doc = pymupdf.open(stream=cover_buffer.getvalue(), filetype='pdf')
    final_doc = pymupdf.open()
    final_doc.insert_pdf(cover_doc)
    if total > 1:
        for i in range(1, total):
            image_bytes, page_w, page_h = render_internal_page(
                internal_doc[i], i + 1, total
            )
            output_page = final_doc.new_page(width=page_w, height=page_h)
            output_page.insert_image(output_page.rect, stream=image_bytes)
    final_doc.save(str(dst), garbage=4, deflate=True)
    final_doc.close()
    cover_doc.close()
    internal_doc.close()
    # remove tmp
    try:
        tmp_clean.unlink()
    except:
        pass
    print(f"[OK] {dst_file} -> {total} pgs | logo branca + Teologia Acessível OK")
    return True

if __name__ == "__main__":
    print("="*72)
    print("FIX LOGO + NOME — Removendo identidade antiga e aplicando Teologia Acessível")
    print("="*72)
    ok=0
    for src,dst,tit,sub,area in MAPPING:
        if process_one(src,dst,tit,sub,area):
            ok+=1
    print("="*72)
    print(f"FINALIZADO: {ok}/30 PDFs corrigidos!")
    print("="*72)
