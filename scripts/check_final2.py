import pymupdf, pathlib
pdf = pathlib.Path("public/pdfs/maneiras-e-costumes-da-biblia.pdf")
doc = pymupdf.open(pdf)
for i in range(min(3, len(doc))):
    page = doc[i]
    print(f"=== p{i} ===")
    txt = page.get_text().replace("\n"," | ")[:500]
    print(txt[:500])
    # Count SEBITAN Ananindeua vs Amazônia
    anan = page.get_text().count("Ananindeua")
    amaz = page.get_text().count("Amaz\u00f4nia") + page.get_text().count("Amazonia")
    print(f" Ananindeua={anan} Amazonia={amaz}")
    # images
    print(f" images={len(page.get_images())} draws={len(page.get_drawings())}")

# check all for Amazonia
print("\n=== ALL PDFs Amazonia check ===")
for p in sorted(pathlib.Path("public/pdfs").glob("*.pdf")):
    doc = pymupdf.open(p)
    total_amaz = sum(doc[i].get_text().count("Amaz\u00f4nia")+doc[i].get_text().count("Amazonia") for i in range(len(doc)))
    print(f"{p.name}: Amazonia={total_amaz}")
    doc.close()
