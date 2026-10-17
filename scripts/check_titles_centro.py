import pathlib, pymupdf

BASE = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel")
PDF_DIR = BASE / "public" / "pdfs"
for name in ["maneiras-e-costumes-da-biblia.pdf","hermeneutica-sagrada.pdf","apologetica.pdf","metodologia-da-pesquisa.pdf","homiletica.pdf"]:
    doc = pymupdf.open(PDF_DIR/name)
    page = doc[0]
    blocks = page.get_text("dict")["blocks"]
    print(f"\n=== {name} p0 blocks ===")
    w = page.rect.width
    for b in blocks:
        if b["type"]==0:
            for l in b["lines"]:
                for s in l["spans"]:
                    txt = s["text"].strip()
                    if not txt: continue
                    # filter title like lines (upper or contains BIBLIA etc)
                    if len(txt)>2 and (txt.isupper() or "BÍBLIA" in txt or "MANEIRAS" in txt or "HERMEN" in txt or "APOLOG" in txt or "METODOLOGIA" in txt or "HOMIL" in txt):
                        x0,y0,x1,y1 = s["bbox"]
                        cx = (x0+x1)/2
                        offset = cx - w/2
                        print(f" span='{txt}' size={s['size']:.1f} bbox=({x0:.1f},{y0:.1f},{x1:.1f},{y1:.1f}) center_offset={offset:+.1f}")
    # also print raw text lines
    print(" raw:", page.get_text().splitlines()[:8])
    doc.close()
