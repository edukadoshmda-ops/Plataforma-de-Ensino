import os, pathlib, pymupdf

BASE = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel")
PDF_DIR = BASE / "public" / "pdfs"
UPLOADED = pathlib.Path(r"C:/Users/eduka/.gemini/antigravity/brain/ef3c4a87-0934-4536-b2c0-546cd564403a/.user_uploaded")

print("=== PDFS NO APP ===")
pdfs = sorted(PDF_DIR.glob("*.pdf"))
print(f"Total PDFs app: {len(pdfs)}")
for p in pdfs:
    print(f"  {p.name}  {p.stat().st_size/1024:.0f}KB")

print("\n=== ORIGINAIS UPLOADED ===")
orig = sorted(UPLOADED.glob("*.pdf")) if UPLOADED.exists() else []
print(f"Total originais: {len(orig)}")
for p in orig[:5]:
    print(f"  {p.name}")

# Inspeciona 3 PDFs do app
for name in ["maneiras-e-costumes-da-biblia.pdf", "metodologia-da-pesquisa.pdf", "homiletica.pdf"]:
    path = PDF_DIR / name
    if not path.exists():
        continue
    doc = pymupdf.open(path)
    print(f"\n--- {name} ({len(doc)} pgs) ---")
    for pi in [0,1,min(3, len(doc)-1)]:
        if pi >= len(doc): continue
        page = doc[pi]
        w = page.rect.width; h = page.rect.height
        draws = page.get_drawings()
        texts = page.get_text()
        # detect vertical thin lines near right edge
        verticals = []
        for d in draws:
            r = d["rect"]
            rw = r.x1 - r.x0
            rh = r.y1 - r.y0
            # thin vertical: height much larger than width
            if rh > rw*10 and rw < 5 and rw > 0:
                # near right edge?
                if r.x0 > w-20 or r.x1 > w-5:
                    verticals.append((r, d["color"], d["fill"], d["width"]))
                else:
                    # any thin vertical anywhere (could be table border)
                    pass
        # also check for border rect that spans full page
        border_rects = [d for d in draws if d["type"]=="re" and abs((d["rect"].x1-d["rect"].x0)-w) < 5 and abs((d["rect"].y1-d["rect"].y0)-h) < 5]
        print(f"  p{pi}: w={w:.0f} h={h:.0f} draws={len(draws)} border_rects={len(border_rects)} verticals_right={len(verticals)}")
        if verticals:
            for r,c,f,wid in verticals[:3]:
                print(f"    VERTICAL rect=({r.x0:.1f},{r.y0:.1f},{r.x1:.1f},{r.y1:.1f}) col={c} fill={f} w={wid}")
        if border_rects:
            for d in border_rects[:2]:
                print(f"    BORDER_RECT rect={d['rect']} col={d['color']} fill={d['fill']}")
        # sample text around title area
        txt = page.get_text("text")
        # find title-like lines (uppercase)
        lines = [l.strip() for l in txt.splitlines() if l.strip()]
        print(f"    primeiros textos: {lines[:3]}")
    doc.close()

# Verifica CSS do visualizador
css_path = BASE / "src" / "index.css"
css = css_path.read_text(encoding="utf-8")
# busca visualizador-pdf-destaque
import re
m = re.search(r"\.visualizador-pdf-destaque[^\}]+\}", css, re.S)
print("\n=== CSS visualizador-pdf-destaque ===")
print(m.group(0)[:600] if m else "nao encontrado")
m2 = re.search(r"\.pdf-frame[^\}]+\}", css, re.S)
print("\n=== CSS pdf-frame ===")
print(m2.group(0)[:600] if m2 else "nao encontrado")
