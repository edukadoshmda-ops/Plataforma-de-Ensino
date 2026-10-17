import pathlib, pymupdf

BASE = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel")
PDF_DIR = BASE / "public" / "pdfs"
UPLOADED = pathlib.Path(r"C:/Users/eduka/.gemini/antigravity/brain/ef3c4a87-0934-4536-b2c0-546cd564403a/.user_uploaded")

def dump(pdf_path, label):
    doc = pymupdf.open(pdf_path)
    print(f"\n===== {label}: {pdf_path.name} ({len(doc)} pgs) =====")
    for pi in [0,1]:
        if pi >= len(doc): continue
        page = doc[pi]
        w = page.rect.width; h = page.rect.height
        draws = page.get_drawings()
        imgs = page.get_images(full=True)
        print(f"  p{pi}: w={w:.0f} h={h:.0f} draws={len(draws)} imgs={len(imgs)}")
        for idx,d in enumerate(draws[:15]):
            r=d["rect"]
            print(f"    d{idx}: type={d['type']} rect=({r.x0:.1f},{r.y0:.1f},{r.x1:.1f},{r.y1:.1f}) w={r.x1-r.x0:.1f} h={r.y1-r.y0:.1f} fill={d['fill']} color={d['color']} width={d['width']}")
        if len(draws)>15:
            print(f"    ... +{len(draws)-15} more")
        # get text blocks with positions
        blocks = page.get_text("blocks")
        # filter blocks that look like titles (large or centered)
        print(f"    text preview (first 400 chars): {page.get_text()[:350].replace(chr(10),' | ')}")
    doc.close()

# Check original vs gerado for comparacao
orig = UPLOADED / "media_1789483350265.pdf"
if orig.exists():
    dump(orig, "ORIGINAL")
else:
    print("original nao encontrado")

for name in ["maneiras-e-costumes-da-biblia.pdf","metodologia-da-pesquisa.pdf","hermeneutica-sagrada.pdf","apologetica.pdf"]:
    p = PDF_DIR / name
    if p.exists():
        dump(p, "GERADO")

# Verifica se algum pdf tem linha vertical fina escura na borda direita
print("\n=== SCAN VERTICAL RIGHT LINES EM TODOS OS GERADOS ===")
for pdf_path in sorted(PDF_DIR.glob("*.pdf")):
    doc = pymupdf.open(pdf_path)
    has_vertical=False
    for pi in range(min(3,len(doc))):
        page=doc[pi]
        w=page.rect.width
        for d in page.get_drawings():
            r=d["rect"]
            rw=r.x1-r.x0
            rh=r.y1-r.y0
            # vertical thin (height > 50, width < 3)
            if rh>50 and 0<rw<3 and (r.x1>w-8 or r.x0>w-15):
                print(f"{pdf_path.name} p{pi}: VERTICAL_RIGHT rect=({r.x0:.1f},{r.y0:.1f},{r.x1:.1f},{r.y1:.1f}) color={d['color']} fill={d['fill']}")
                has_vertical=True
                break
    doc.close()
    if not has_vertical:
        pass

print("\n=== FIM ===")
