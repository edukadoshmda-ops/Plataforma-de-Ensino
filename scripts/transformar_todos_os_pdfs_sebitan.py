# -*- coding: utf-8 -*-
"""
Transformador Oficial dos 30 Compêndios com a Nova Identidade SEBITAN:
"SEBITAN – Seminário Bíblico Teológico de Ananindeua"
Aplica o cabeçalho idêntico com logotipo da Bíblia aberta e chama,
barra azul marinho nobre e paginação em todas as páginas originais.
"""
import os, io, pypdf
from reportlab.pdfgen import canvas
from reportlab.lib import colors

BASE_DIR = r"d:/Users/Users/eduka/Desktop/teologia-acessivel"
UPLOADED_DIR = r"C:/Users/eduka/.gemini/antigravity/brain/ef3c4a87-0934-4536-b2c0-546cd564403a/.user_uploaded"
OUTPUT_DIR = os.path.join(BASE_DIR, "public", "pdfs")
LOGO_PATH = os.path.join(BASE_DIR, "public", "logo_sebitan.png")
os.makedirs(OUTPUT_DIR, exist_ok=True)

MAPPING = [
    ('media_1789483350265.pdf', 'maneiras-e-costumes-da-biblia.pdf', 'Maneiras e Costumes da Bíblia'),
    ('media_1789483350323.pdf', 'portugues-instrumental.pdf', 'Português Instrumental'),
    ('media_1789483350406.pdf', 'metodologia-da-pesquisa.pdf', 'Metodologia da Pesquisa Científica'),
    ('media_1789483350615.pdf', 'hermeneutica-sagrada.pdf', 'Hermenêutica Sagrada'),
    ('media_1789483350864.pdf', 'homiletica.pdf', 'Homilética: A Arte de Pregar'),
    ('media_1789483424955.pdf', 'apologetica.pdf', 'Apologética Cristã'),
    ('media_1789483425211.pdf', 'sintese-antigo-testamento.pdf', 'Síntese do Antigo Testamento'),
    ('media_1789483425367.pdf', 'periodo-interbiblico.pdf', 'Período Interbíblico'),
    ('media_1789483425602.pdf', 'manuscritos-antigo-testamento.pdf', 'Manuscritos do Antigo Testamento'),
    ('media_1789483425676.pdf', 'sintese-novo-testamento.pdf', 'Síntese do Novo Testamento'),
    ('media_1789483449984.pdf', 'teontologia.pdf', 'Teontologia: A Doutrina de Deus'),
    ('media_1789483450096.pdf', 'bibliologia.pdf', 'Bibliologia: As Sagradas Escrituras'),
    ('media_1789483450151.pdf', 'angelologia.pdf', 'Angelologia & Demonologia'),
    ('media_1789483450217.pdf', 'antropologia-teologica.pdf', 'Antropologia Teológica'),
    ('media_1789483450239.pdf', 'cristologia.pdf', 'Cristologia: A Pessoa e Obra de Cristo'),
    ('media_1789483493292.pdf', 'soteriologia.pdf', 'Soteriologia: A Doutrina da Salvação'),
    ('media_1789483493412.pdf', 'eclesiologia.pdf', 'Eclesiologia: A Doutrina da Igreja'),
    ('media_1789483493434.pdf', 'hamartiologia.pdf', 'Hamartiologia: A Doutrina do Pecado'),
    ('media_1789483493475.pdf', 'pneumatologia.pdf', 'Pneumatologia: O Espírito Santo'),
    ('media_1789483493769.pdf', 'escatologia.pdf', 'Estudos de Escatologia Bíblica'),
    ('media_1789483551440.pdf', 'evangelismo.pdf', 'Evangelismo Prático & Conquista de Almas'),
    ('media_1789483551501.pdf', 'geografia-biblica.pdf', 'Geografia Bíblica & Cenário Histórico'),
    ('media_1789483551796.pdf', 'heresiologia.pdf', 'Heresiologia: O Discernimento das Seitas'),
    ('media_1789483551818.pdf', 'administracao-eclesiastica.pdf', 'Administração Eclesiástica & Governança'),
    ('media_1789483551827.pdf', 'discipulado.pdf', 'Discipulado Bíblico & Vida Cristã'),
    ('media_1789483573207.pdf', 'arqueologia-biblica.pdf', 'Arqueologia Bíblica: Evidências e Descobertas'),
    ('media_1789483573305.pdf', 'dispensacoes-e-aliancas.pdf', 'Dispensações e Alianças Bíblicas'),
    ('media_1789483573380.pdf', 'a-biblia-e-a-ciencia.pdf', 'A Bíblia e a Ciência: Harmonia das Origens'),
    ('media_1789483573620.pdf', 'tipologia-e-simbologia.pdf', 'Tipologia & Simbologia Bíblica'),
    ('media_1789483573824.pdf', 'religioes-mundiais-1.pdf', 'Religiões Mundiais I: Cultos e Tradições')
]

def criar_overlay_cabecalho(w, h, incluir_rodape, page_num, total_pages):
    over_stream = io.BytesIO()
    c = canvas.Canvas(over_stream, pagesize=(w, h))

    # 1. Barra superior azul-marinho nobre idêntica à original
    bar_height = 75
    c.setFillColor(colors.HexColor('#002244'))
    c.rect(0, h - bar_height, w, bar_height, fill=1, stroke=0)

    # Logotipo oficial (Bíblia aberta com fogo) e texto solicitado pelo usuário
    logo_w = 40
    logo_h = 16
    header_text = 'SEBITAN – Seminário Bíblico Teológico de Ananindeua'
    c.setFont('Helvetica-Bold', 10)
    tw = c.stringWidth(header_text, 'Helvetica-Bold', 10)
    total_w = logo_w + 10 + tw
    start_x = (w - total_w) / 2
    bar_center_y = h - (bar_height / 2)

    if os.path.exists(LOGO_PATH):
        c.drawImage(LOGO_PATH, start_x, bar_center_y - (logo_h / 2), width=logo_w, height=logo_h, mask='auto')
    
    c.setFillColor(colors.white)
    c.drawString(start_x + logo_w + 10, bar_center_y - 3.5, header_text)

    # 2. Rodapé limpo cobrindo o texto antigo (apenas para páginas internas)
    if incluir_rodape:
        c.setFillColor(colors.white)
        c.rect(0, 0, w, 65, fill=1, stroke=0)
        c.setStrokeColor(colors.HexColor('#cbd5e1'))
        c.setLineWidth(0.75)
        c.line(45, 45, w - 45, 45)
        c.setFont('Helvetica-Bold', 8)
        c.setFillColor(colors.HexColor('#002244'))
        c.drawString(45, 30, 'SEBITAN – Seminário Bíblico Teológico de Ananindeua')
        c.setFont('Helvetica', 8)
        c.setFillColor(colors.HexColor('#64748b'))
        c.drawRightString(w - 45, 30, f'Página {page_num} de {total_pages}')

    c.save()
    over_stream.seek(0)
    return pypdf.PdfReader(over_stream).pages[0]

def processar_compendio(src_filename, dst_filename, titulo):
    input_path = os.path.join(UPLOADED_DIR, src_filename)
    output_path = os.path.join(OUTPUT_DIR, dst_filename)

    if not os.path.exists(input_path):
        print(f"[ERRO] Origem não encontrada: {src_filename}")
        return

    reader = pypdf.PdfReader(input_path)
    writer = pypdf.PdfWriter()
    num_pages = len(reader.pages)

    # Dimensões da página
    ref_page = reader.pages[0] if num_pages == 1 else reader.pages[1]
    w = float(ref_page.mediabox.width)
    h = float(ref_page.mediabox.height)

    # Página 0 (Capa Original com cabeçalho atualizado para SEBITAN Ananindeua)
    cover_page = reader.pages[0]
    cover_over = criar_overlay_cabecalho(w, h, incluir_rodape=False, page_num=1, total_pages=num_pages)
    cover_page.merge_page(cover_over)
    writer.add_page(cover_page)

    # Páginas 1 até o final (conteúdo integral completo)
    for i in range(1, num_pages):
        orig_page = reader.pages[i]
        over_page = criar_overlay_cabecalho(w, h, incluir_rodape=True, page_num=i+1, total_pages=num_pages)
        orig_page.merge_page(over_page)
        writer.add_page(orig_page)

    with open(output_path, 'wb') as f_out:
        writer.write(f_out)

    print(f"[SUCESSO] {dst_filename}: {num_pages} páginas completas com cabeçalho SEBITAN Ananindeua!")

if __name__ == '__main__':
    print("=================================================================")
    print("ATUALIZANDO CABEÇALHOS DE TODOS OS 30 COMPÊNDIOS PARA:")
    print("SEBITAN – Seminário Bíblico Teológico de Ananindeua")
    print("=================================================================")
    for src, dst, tit in MAPPING:
        processar_compendio(src, dst, tit)
    print("=================================================================")
    print("TODOS OS 30 COMPÊNDIOS ATUALIZADOS COM SUCESSO!")
    print("=================================================================")
