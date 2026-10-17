import pymupdf, pathlib
pdf = pathlib.Path("public/pdfs/maneiras-e-costumes-da-biblia.pdf")
doc = pymupdf.open(pdf)
page = doc[1]
print("ANTES hits:", len(page.search_for("Amaz\u00f4nia")))
# Try redact with text replacement
for r in page.search_for("Amaz\u00f4nia"):
    page.add_redact_annot(r, text="Ananindeua", fill=(1,1,1), align=0, fontsize=9)
    print(f"added redact {r}")
try:
    page.apply_redactions(images=True)
    print("applied")
except Exception as e:
    print("apply failed", e)
print("DEPOIS hits:", len(page.search_for("Amaz\u00f4nia")))
print("Ananindeua hits:", len(page.search_for("Ananindeua")))
# Save test
doc.save("public/pdfs/_test_single.pdf", garbage=4)
doc.close()
print("saved test")
# Reopen check
doc2 = pymupdf.open("public/pdfs/_test_single.pdf")
print("reopen check Amaz\u00f4nia:", "Amaz\u00f4nia" in doc2[1].get_text())
print("text p1:", doc2[1].get_text()[:300].replace("\n","|"))
doc2.close()
