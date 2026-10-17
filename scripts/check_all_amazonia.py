import pathlib, pymupdf
BASE = pathlib.Path(r"public/pdfs")
err = []
for pdf_path in sorted(BASE.glob("*.pdf")):
    doc = pymupdf.open(pdf_path)
    hits = 0
    for i in range(len(doc)):
        if "Amaz\u00f4nia" in doc[i].get_text() or "Amaz\u00f4nia " in doc[i].get_text():
            hits += sum(1 for _ in doc[i].search_for("Amaz\u00f4nia"))
            hits += sum(1 for _ in doc[i].search_for("Amazonia"))
    if hits>0:
        # Distinguish between cover header (ok, we set Ananindeua) vs body
        # If still has Amazonia anywhere, report
        print(f"{pdf_path.name}: {hits} hits AMaz\u00f4nia")
        # show page numbers
        for i in range(len(doc)):
            if "Amaz\u00f4nia" in doc[i].get_text():
                # count per page
                c = len(doc[i].search_for("Amaz\u00f4nia"))
                if c>0:
                    # show line
                    txt = doc[i].get_text().replace("\n"," | ")[:300]
                    print(f"  p{i}: {txt[:200]}")
        err.append(pdf_path.name)
    doc.close()
if not err:
    print("NENHUM PDF com Amazonia — tudo OK")
else:
    print(f"\n{len(err)} PDFs ainda com Amazonia: {err}")
