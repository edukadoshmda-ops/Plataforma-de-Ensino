import pathlib, pymupdf
ok=[]
for p in sorted(pathlib.Path("public/pdfs").glob("*.pdf")):
    doc = pymupdf.open(p)
    hits = sum(len(doc[i].search_for("Amaz\u00f4nia")) for i in range(len(doc)))
    hits += sum(len(doc[i].search_for("Amazonia")) for i in range(len(doc)))
    anan = sum(len(doc[i].search_for("Ananindeua")) for i in range(len(doc)))
    print(f"{p.name}: Amazonia={hits} Ananindeua={anan} -> {'OK' if hits==0 and anan>0 else 'FAIL'}")
    doc.close()
