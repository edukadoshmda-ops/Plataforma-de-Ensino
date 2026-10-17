import pathlib, pymupdf
BASE = pathlib.Path(r"public/pdfs")
for pdf_path in sorted(BASE.glob("*.pdf")):
    doc = pymupdf.open(pdf_path)
    total = len(doc)
    changed = False
    for i in range(total):
        page = doc[i]
        # Find ALL Amazônia hits and redact + replace
        hits = page.search_for("Amaz\u00f4nia")
        hits += page.search_for("Amazonia")
        for r in hits:
            # Check if already Ananindeua nearby (avoid double)
            # We will: if line contains Amazonia, redact the word rect + insert Ananindeua
            # But previous debug showed sumário line still has Amazônia at y=799 — that page is p1 which is our header overlay, not original cover
            # So we redact word rect and insert
            page.add_redact_annot(pymupdf.Rect(r.x0-1, r.y0-1, r.x1+2, r.y1+2), fill=(1,1,1))
            changed = True
        if hits:
            page.apply_redactions(images=True, graphics=True, text=True)
            # Reinsert Ananindeua at same rects (use white background page)
            hits2 = []  # need to re-find after? Use original rects
            # Insert at original positions
            for r in hits:
                page.insert_text(pymupdf.Point(r.x0, r.y1-2), "Ananindeua", fontsize=9, fontname="helv", color=(0,0,0))
    if changed:
        doc.save(str(pdf_path.with_suffix(".tmp.pdf")), garbage=4, deflate=True)
        doc.close()
        # replace
        pathlib.Path(str(pdf_path.with_suffix(".tmp.pdf"))).replace(pdf_path)
        print(f"FIXED {pdf_path.name}")
    else:
        doc.close()
        print(f"OK {pdf_path.name}")

print("DONE")
