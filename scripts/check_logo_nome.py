import pathlib, pymupdf
pdf = pathlib.Path(r"public/pdfs/maneiras-e-costumes-da-biblia.pdf")
doc = pymupdf.open(pdf)
for i in range(min(2,len(doc))):
    page = doc[i]
    print(f"=== p{i} text ===")
    txt = page.get_text()
    print(txt[:600].replace("\n"," | "))
    # images on page
    imgs = page.get_images(full=True)
    print(f"images: {len(imgs)}")
    for idx,img in enumerate(imgs[:4]):
        xref = img[0]
        try:
            pix = pymupdf.Pixmap(doc, xref)
            print(f" img{idx}: w={pix.w} h={pix.h} n={pix.n} alpha={pix.alpha}")
        except: pass
doc.close()

# check LOGO path
import os
BASE = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel")
for name in ["public/logo-sebitan.png","public/logo_sebitan.png","public/logo.png"]:
    p = BASE/name
    print(f"{name}: exists={p.exists()} size={p.stat().st_size if p.exists() else 0}")

# check rebuild script LOGO var
text = pathlib.Path(r"scripts/rebuild_pdfs_perfeito.py").read_text(encoding="utf-8")
for line in text.splitlines():
    if "LOGO" in line or "HEADER_TEXT" in line:
        print(line.strip())
