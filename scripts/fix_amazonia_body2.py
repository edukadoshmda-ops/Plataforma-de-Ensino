import pathlib, pymupdf
BASE = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel\public\pdfs")
for pdf_path in sorted(BASE.glob("*.pdf")):
    doc = pymupdf.open(pdf_path)
    for i in range(len(doc)):
        page = doc[i]
        hits = page.search_for("Amaz\u00f4nia")
        for r in hits:
            page.add_redact_annot(r, text="Ananindeua", fill=(1,1,1), align=0, fontsize=9)
        hits2 = page.search_for("Amazonia")
        for r in hits2:
            page.add_redact_annot(r, text="Ananindeua", fill=(1,1,1), align=0, fontsize=9)
    # Apply BEFORE save
    for pg in doc:
        try: pg.apply_redactions(images=True)
        except: pass
    doc.save(str(pdf_path.with_suffix(".tmp.pdf")), garbage=4, deflate=True)
    doc.close()
    pathlib.Path(str(pdf_path.with_suffix(".tmp.pdf"))).replace(pdf_path)
    print(f"FIXED {pdf_path.name}")

print("DONE")
# Quick check
import pymupdf as m
pdf = pathlib.Path("public/pdfs/maneiras-e-costumes-da-biblia.pdf")
doc = m.open(pdf)
print("p1 Amazonia:", "Amaz\u00f4nia" in doc[1].get_text())
print("p1 Ananindeua:", doc[1].get_text().count("Ananindeua"))
doc.close()
