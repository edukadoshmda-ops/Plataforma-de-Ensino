import pathlib, pymupdf
BASE = pathlib.Path(r"public/pdfs")
for pdf_path in sorted(BASE.glob("*.pdf")):
    if pdf_path.name.startswith("_test"): continue
    doc = pymupdf.open(pdf_path)
    total = len(doc)
    changed = False
    for i in range(total):
        page = doc[i]
        hits = page.search_for("Amaz\u00f4nia") + page.search_for("Amazonia")
        for r in hits:
            page.add_redact_annot(r, text="Ananindeua", fill=(1,1,1), align=0, fontsize=9)
            changed = True
    if changed:
        for pg in doc:
            try: pg.apply_redactions(images=True)
            except: pass
        doc.save(str(pdf_path.with_suffix(".tmp.pdf")), garbage=4, deflate=True)
        doc.close()
        pathlib.Path(str(pdf_path.with_suffix(".tmp.pdf"))).replace(pdf_path)
        print(f"FIXED {pdf_path.name}")
    else:
        doc.close()
        print(f"OK {pdf_path.name}")
print("DONE DEFINITIVO")
