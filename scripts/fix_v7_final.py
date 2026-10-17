# -*- coding: utf-8 -*-
import pathlib, pymupdf, io, pypdf
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.colors import HexColor

BASE = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel")
UPLOADED = pathlib.Path(r"C:/Users/eduka/.gemini/antigravity/brain/ef3c4a87-0934-4536-b2c0-546cd564403a/.user_uploaded")
OUTPUT = BASE / "public" / "pdfs"
LOGO = BASE / "public" / "logo-sebitan.png"

SRC = ['media_1789483350265.pdf','media_1789483350323.pdf','media_1789483350406.pdf','media_1789483350615.pdf','media_1789483350864.pdf','media_1789483424955.pdf','media_1789483425211.pdf','media_1789483425367.pdf','media_1789483425602.pdf','media_1789483425676.pdf','media_1789483449984.pdf','media_1789483450096.pdf','media_1789483450151.pdf','media_1789483450217.pdf','media_1789483450239.pdf','media_1789483493292.pdf','media_1789483493412.pdf','media_1789483493434.pdf','media_1789483493475.pdf','media_1789483493769.pdf','media_1789483551440.pdf','media_1789483551501.pdf','media_1789483551796.pdf','media_1789483551818.pdf','media_1789483551827.pdf','media_1789483573207.pdf','media_1789483573305.pdf','media_1789483573380.pdf','media_1789483573620.pdf','media_1789483573824.pdf']
DST = ['maneiras-e-costumes-da-biblia.pdf','portugues-instrumental.pdf','metodologia-da-pesquisa.pdf','hermeneutica-sagrada.pdf','homiletica.pdf','apologetica.pdf','sintese-antigo-testamento.pdf','periodo-interbiblico.pdf','manuscritos-antigo-testamento.pdf','sintese-novo-testamento.pdf','teontologia.pdf','bibliologia.pdf','angelologia.pdf','antropologia-teologica.pdf','cristologia.pdf','soteriologia.pdf','eclesiologia.pdf','hamartiologia.pdf','pneumatologia.pdf','escatologia.pdf','evangelismo.pdf','geografia-biblica.pdf','heresiologia.pdf','administracao-eclesiastica.pdf','discipulado.pdf','arqueologia-biblica.pdf','dispensacoes-e-aliancas.pdf','a-biblia-e-a-ciencia.pdf','tipologia-e-simbologia.pdf','religioes-mundiais-1.pdf']
TIT = ['Maneiras e Costumes da Bíblia','Português Instrumental','Metodologia da Pesquisa Científica','Hermenêutica Sagrada','Homilética: A Arte de Pregar','Apologética Cristã','Síntese do Antigo Testamento','Período Interbíblico','Manuscritos do Antigo Testamento','Síntese do Novo Testamento','Teontologia: A Doutrina de Deus','Bibliologia: As Sagradas Escrituras','Angelologia & Demonologia','Antropologia Teológica','Cristologia: A Pessoa e Obra de Cristo','Soteriologia: A Doutrina da Salvação','Eclesiologia: A Doutrina da Igreja','Hamartiologia: A Doutrina do Pecado','Pneumatologia: O Espírito Santo','Estudos de Escatologia Bíblica','Evangelismo Prático & Conquista de Almas','Geografia Bíblica & Cenário Histórico','Heresiologia: O Discernimento das Seitas','Administração Eclesiástica & Governança','Discipulado Bíblico & Vida Cristã','Arqueologia Bíblica: Evidências e Descobertas','Dispensações e Alianças Bíblicas','A Bíblia e a Ciência: Harmonia das Origens','Tipologia & Simbologia Bíblica','Religiões Mundiais I: Cultos e Tradições']
SUB = ['Vida Doméstica, Social, Geográfica e Cultural nos Tempos Bíblicos','Comunicação Verbal, Dicção, Oratória e Linguística no Púlpito','Rigor Acadêmico, Epistemologia e Normatização de Trabalhos Teológicos','Regras de Interpretação Bíblica, Exegese e Métodos Hermenêuticos','A Preparação, Estrutura, Retórica e Proclamação do Sermão Bíblico','A Defesa Racional da Fé, Filosofia e Confronto com o Pensamento Secular','Panorama Completo dos 39 Livros: Pentateuco, Históricos, Poéticos e Proféticos','Os 400 Anos de Silêncio Profético: Impérios Persa, Grego, Macabeu e Romano','Transmissão Textual, Massoretas, Texto Crítico e Rolos do Mar Morto','Os 27 Livros: Evangelhos, Atos, Epístolas Paulinas, Gerais e Apocalipse','O Ser, a Natureza, os Atributos Divinos e o Mistério da Trindade Santa','Inspiração Plenária, Inerrância, Autoridade, Canonicidade e Iluminação','A Criação dos Anjos, Classes Celestes, a Queda de Satanás e a Batalha Espiritual','A Criação do Ser Humano à Imagem de Deus, Corpo, Alma, Espírito e a Queda','A Pré-existência, a Humanidade e Divindade, Ofícios e a Vitória na Cruz','Redenção, Justificação pela Fé, Regeneração, Adoção e Glorificação','O Corpo Místico de Cristo, Governo Bíblico, Ordenanças e a Missão no Mundo','A Origem, Natureza, Universalidade e Consequências da Queda Humana','A Deidade, Personalidade, Símbolos, Dons e Fruto do Espírito Santo','As Profecias Finais, o Arrebatamento, a Grande Tribulação, o Milênio e a Eternidade','A Grande Comissão, Metodologia de Abordagem e Condução à Decisão de Fé','O Crescente Fértil, Canaã, Montes Sagrados, Mares e Rotas Apostólicas','Análise Crítica de Movimentos Heterodoxos à Luz da Sã Doutrina Bíblica','Governança Bíblica, Gestão Ministerial, Princípio de Jetro e Estrutura Legal','Maturidade em Cristo, Koinonia, Disciplinas Espirituais e Mordomia Cristã','Períodos Culturais, Métodos de Datação e Grandes Achados do Oriente Próximo','Os Sete Períodos da Revelação Divina e as Oito Alianças Eternas em Cristo','Cosmologia, Ajuste Fino da Terra, Termodinâmica e Antecipações Científicas','Sombras Proféticas, A Tipologia do Tabernáculo e o Significado dos Números','A Busca Humana pelo Sagrado: Cultos Antigos, Mitologias, Hinduísmo e Siquismo']
ARE = ['Arqueologia & Contexto Histórico-Bíblico','Linguística & Comunicação Eclesiástica','Metodologia Científica & Pesquisa','Hermenêutica & Exegese Bíblica','Teologia Prática & Ministério da Palavra','Filosofia da Religião & Apologética','Teologia Bíblica do Antigo Testamento','História Bíblica & Judaísmo do Segundo Templo','Crítica Textual & História do Cânon','Teologia Bíblica do Novo Testamento','Teologia Sistemática I','Teologia Sistemática I','Teologia Sistemática II','Teologia Sistemática II','Teologia Sistemática III','Teologia Sistemática III','Teologia Sistemática IV','Teologia Sistemática II','Teologia Sistemática III','Teologia Sistemática IV','Missiologia & Ministério Pastoral','Arqueologia & História Bíblica','Teologia Sistemática & Apologética','Teologia Prática & Gestão','Teologia Prática & Vida Cristã','Arqueologia & Contexto Histórico','Teologia Bíblica & Sistemática','Ciência, Filosofia & Fé Cristã','Hermenêutica Sagrada & Teologia Bíblica','História das Religiões & Missiologia']
NAVY = HexColor('#002244'); GOLD = HexColor('#d97706')
HEADER_TEXT = 'SEBITAN \u2013 Semin\u00e1rio B\u00edblico Teol\u00f3gico de Ananindeua'
def draw_cover(w,h,titulo,subtitulo,area,total_pages):
    buf=io.BytesIO()
    c=canvas.Canvas(buf,pagesize=(w,h))
    c.setFillColor(colors.white); c.rect(-8,-8,w+16,h+16,fill=1,stroke=0)
    c.setFillColor(NAVY); c.rect(-8,h-74,w+16,80,fill=1,stroke=0)
    c.setFillColor(colors.white); c.setFont('Helvetica-Bold',9.2)
    header=HEADER_TEXT; logo_w,logo_h=38,22
    if LOGO.exists():
        tw=c.stringWidth(header,'Helvetica-Bold',9.2); total_w=logo_w+9+tw; sx=(w-total_w)/2; cy=h-37
        try:
            c.drawImage(str(LOGO),sx,cy-logo_h/2+1,width=logo_w,height=logo_h,mask='auto',preserveAspectRatio=True)
            c.drawString(sx+logo_w+9,cy-3.2,header)
        except: c.drawCentredString(w/2,h-39,header)
    else: c.drawCentredString(w/2,h-39,header)
    block_w=520; block_h=360; bx=(w-block_w)/2; by=(h-block_h)/2-6
    c.setFillColor(NAVY); c.roundRect(bx,by,block_w,block_h,14,fill=1,stroke=0)
    c.setStrokeColor(GOLD); c.setLineWidth(1.2); c.roundRect(bx+6,by+6,block_w-12,block_h-12,10,fill=0,stroke=1)
    titulo_upper=titulo.upper(); words=titulo_upper.split(); lines=[]; cur=""
    for wd in words:
        test=(cur+" "+wd).strip()
        if c.stringWidth(test,'Helvetica-Bold',28) > block_w-60:
            if cur: lines.append(cur); cur=wd
        else: cur=test
    if cur: lines.append(cur)
    if len(lines)>=3: font_size=26; line_gap=34
    elif len(lines)==2: font_size=30; line_gap=38
    else: font_size=34 if c.stringWidth(lines[0],'Helvetica-Bold',34) <= block_w-50 else 28; line_gap=42
    total_title_h=len(lines)*line_gap; start_y=by+block_h/2+total_title_h/2-14
    c.setFillColor(colors.white); c.setFont('Helvetica-Bold',font_size)
    for i,ln in enumerate(lines): c.drawCentredString(w/2,start_y-i*line_gap,ln)
    bar_y=start_y-len(lines)*line_gap+10; c.setStrokeColor(GOLD); c.setLineWidth(2.2); c.line(w/2-90,bar_y,w/2+90,bar_y)
    c.setFont('Helvetica',8.5); c.setFillColor(HexColor('#e2e8f0'))
    sub=subtitulo
    if c.stringWidth(sub,'Helvetica',8.5) > block_w-50:
        mid=len(sub)//2; split=sub.rfind(' ',0,mid+20)
        if split==-1: split=mid
        l1=sub[:split].strip(); l2=sub[split:].strip()
        c.drawCentredString(w/2,bar_y-18,l1); c.drawCentredString(w/2,bar_y-30,l2); area_y=bar_y-52
    else: c.drawCentredString(w/2,bar_y-20,sub); area_y=bar_y-42
    c.setFont('Helvetica-Bold',7.5); c.setFillColor(GOLD); c.drawCentredString(w/2,area_y,f'\u00c1rea: {area.upper()}')
    c.setFont('Helvetica',7); c.setFillColor(HexColor('#64748b'))
    c.drawCentredString(w/2,88,'Comp\u00eandio Acad\u00eamico Oficial \u00b7 Teologia Acess\u00edvel')
    c.drawCentredString(w/2,76,f'Edi\u00e7\u00e3o Integral \u00b7 {total_pages} p\u00e1ginas \u00b7 Ano 2026')
    c.setFont('Helvetica-Bold',6.5); c.setFillColor(GOLD); c.drawCentredString(w/2,62,'SEBITAN \u00b7 ANANINDEUA \u2013 PAR\u00c1')
    c.save(); buf.seek(0)
    return pypdf.PdfReader(buf).pages[0]

def process_one(i):
    src = UPLOADED / SRC[i]; dst = OUTPUT / DST[i]
    mu = pymupdf.open(str(src))
    total=len(mu); W=mu[0].rect.width; H=mu[0].rect.height
    # Redact header 0-62 and footer H-28 to H, plus body Amazonia words (only y between 62 and H-28)
    for p in range(total):
        page=mu[p]
        page.add_redact_annot(pymupdf.Rect(-2,-2,W+2,62), fill=(1,1,1))
        page.add_redact_annot(pymupdf.Rect(-2,H-28,W+2,H+2), fill=(1,1,1))
        for term in ["Amaz\u00f4nia","Amazonia"]:
            for r in page.search_for(term):
                if r.y0 > 62 and r.y1 < H-28:
                    page.add_redact_annot(pymupdf.Rect(r.x0-1,r.y0-1,r.x1+1,r.y1+1), text="Ananindeua", fill=(1,1,1), align=0, fontsize=8.5)
    for pg in mu: pg.apply_redactions(images=True, graphics=True, text=True)
    # Draw new header/footer
    for p in range(total):
        page=mu[p]
        shape=page.new_shape()
        shape.draw_rect(pymupdf.Rect(-2,-2,W+2,58))
        shape.finish(color=(0,0.133,0.267), fill=(0,0.133,0.267), closePath=True)
        shape.commit(overlay=True)
        shape2=page.new_shape()
        shape2.draw_line(pymupdf.Point(36,H-26), pymupdf.Point(W-36,H-26))
        shape2.finish(color=(0.88,0.91,0.94), width=0.6, closePath=False)
        shape2.commit(overlay=True)
        header_text=HEADER_TEXT
        logo_w,logo_h=34,16
        if LOGO.exists():
            try: text_w=pymupdf.get_text_length(header_text, fontname="helv", fontsize=9.2)
            except: text_w=len(header_text)*5.2
            total_w=logo_w+8+text_w
            sx=(W-total_w)/2; cy=30
            page.insert_image(pymupdf.Rect(sx, cy-logo_h/2, sx+logo_w, cy+logo_h/2), filename=str(LOGO), keep_proportion=True, overlay=True)
            page.insert_text(pymupdf.Point(sx+logo_w+8, cy+3), header_text, fontsize=9.2, fontname="helv", color=(1,1,1), overlay=True)
        else:
            page.insert_text(pymupdf.Point(W/2,30), header_text, fontsize=9.2, fontname="helv", color=(1,1,1), overlay=True)
        page.insert_text(pymupdf.Point(36,H-16), HEADER_TEXT, fontsize=7.2, fontname="helv", color=(0,0.133,0.267), overlay=True)
        page.insert_text(pymupdf.Point(W-120,H-16), f"P\u00e1gina {p+1} de {total}", fontsize=7, fontname="helv", color=(0.39,0.45,0.54), overlay=True)
        center_text="SEBITAN \u00b7 Teologia Acess\u00edvel \u00b7 Ananindeua \u2013 PA \u00b7 2026"
        try: ct_w=pymupdf.get_text_length(center_text, fontname="helv", fontsize=6)
        except: ct_w=len(center_text)*3.2
        page.insert_text(pymupdf.Point((W-ct_w)/2,H-8), center_text, fontsize=6, fontname="helv", color=(0.58,0.64,0.72), overlay=True)
    tmp = OUTPUT / f"_tmp7_{DST[i]}"
    mu.save(str(tmp), garbage=4, deflate=True); mu.close()
    reader=pypdf.PdfReader(str(tmp)); total2=len(reader.pages)
    ref=reader.pages[1] if total2>1 else reader.pages[0]
    w=float(ref.mediabox.width); h=float(ref.mediabox.height)
    if abs(w-595)>20 or abs(h-842)>20: w,h=595.32,841.92
    writer=pypdf.PdfWriter()
    cover=draw_cover(w,h,TIT[i],SUB[i],ARE[i],total2)
    writer.add_page(cover)
    for k in range(1,total2):
        orig=reader.pages[k]
        orig.mediabox=pypdf.generic.RectangleObject([0,0,w,h])
        writer.add_page(orig)
    with open(dst,'wb') as f: writer.write(f)
    try: tmp.unlink()
    except: pass
    print(f"[OK] {DST[i]}")

if __name__=="__main__":
    print("V7 final")
    for i in range(30):
        process_one(i)
    print("DONE V7")
