import pymupdf, pathlib
pdf = pathlib.Path("public/pdfs/maneiras-e-costumes-da-biblia.pdf")
doc = pymupdf.open(pdf)
for i in range(min(4, len(doc))):
    page = doc[i]
    blocks = page.get_text("dict")["blocks"]
    print(f"\n=== p{i} ===")
    for b in blocks:
        if b["type"]!=0: continue
        for l in b["lines"]:
            for s in l["spans"]:
                txt = s["text"].strip()
                if "SEBITAN" in txt or "Página" in txt or "Teologia Acess" in txt:
                    print(f"  y={s['bbox'][1]:.1f} txt='{txt}' color={s['color']} size={s['size']:.1f}")
doc.close()
