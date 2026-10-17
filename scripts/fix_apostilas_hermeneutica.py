import pathlib, pymupdf, json, re

BASE = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel")
PDF_DIR = BASE / "public" / "pdfs"
pdf_path = PDF_DIR / "hermeneutica-sagrada.pdf"
doc = pymupdf.open(pdf_path)
num_pages = len(doc)
full_clean = []
for i in range(num_pages):
    txt = doc[i].get_text()
    # Remove cover page header/footer and repeated headers
    lines = txt.splitlines()
    cleaned_lines = []
    for l in lines:
        s = l.strip()
        if not s:
            continue
        # skip headers/footers
        if "SEBITAN" in s and ("Seminário" in s or "Ananindeua" in s or "Teologia Acessível" in s):
            continue
        if "Página" in s and "de" in s:
            continue
        if "Teologia Acessível" in s and "Ananindeua" in s:
            continue
        if s.startswith("Compêndio Acadêmico") or s.startswith("Edição Integral"):
            continue
        if "SEBITAN · ANANINDEUA" in s:
            continue
        cleaned_lines.append(s)
    # join lines into paragraphs (group by sentences)
    # Keep as is, but filter very short
    full_clean.extend(cleaned_lines)
doc.close()

# Now chunk into ~700 char paragraphs
text = " ".join(full_clean)
# Remove duplicate spaces
text = re.sub(r'\s+', ' ', text)
# Split into sentences for paragraphs
sentences = re.split(r'(?<=[.!?])\s+', text)
paragraphs = []
current = ""
for sent in sentences:
    if len(current) + len(sent) < 650:
        current += " " + sent if current else sent
    else:
        if current.strip():
            paragraphs.append(current.strip())
        current = sent
if current.strip():
    paragraphs.append(current.strip())

# Remove any paragraph that is just header like "HERMENÊUTICA SAGRADA"
# Keep title as separate? We'll keep all
print(f"Total paragraphs: {len(paragraphs)}")
for idx, p in enumerate(paragraphs[:3]):
    print(f"[{idx}] {p[:120]}...")

# Build chapters: group paragraphs 6 per chapter
chunks = [paragraphs[i:i+6] for i in range(0, len(paragraphs), 6)]
# If too few, ensure at least 4 chapters
print(f"Chunks: {len(chunks)}")

out = {
    "id": 30,
    "pdfFilename": "hermeneutica-sagrada.pdf",
    "titulo": "Hermenêutica Sagrada",
    "modulo": "Exegese & Teologia Bíblica",
    "totalPaginas": num_pages,
    "totalPalavras": len(text.split()),
    "tempoEstimadoLeitura": f"{max(20, len(text.split())//140)} min",
    "capitulos": []
}
for idx, chunk in enumerate(chunks):
    out["capitulos"].append({
        "id": idx+1,
        "titulo": f"Capítulo {idx+1}: Hermenêutica Sagrada — Parte {idx+1}/{len(chunks)}",
        "paragrafos": chunk
    })

out_path = BASE / "scripts" / "_hermeneutica_clean.json"
out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Salvo {out_path} words={out['totalPalavras']}")
