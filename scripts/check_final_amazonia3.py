import pathlib, pymupdf
for p in sorted(pathlib.Path("public/pdfs").glob("*.pdf")):
    doc = pymupdf.open(p)
    total = sum(doc[i].get_text().count("Amaz\u00f4nia")+doc[i].get_text().count("Amazonia") for i in range(len(doc)))
    print(f"{p.name}: {total}")
    doc.close()
