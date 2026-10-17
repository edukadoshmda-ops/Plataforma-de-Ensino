import pathlib, pymupdf, json, re

pdf = pathlib.Path(r"public/pdfs/hermeneutica-sagrada.pdf")
doc = pymupdf.open(pdf)
full_text = ""
num_pages = len(doc)
for i in range(num_pages):
    full_text += "\n" + doc[i].get_text()
words = full_text.split()
print(f"Total words: {len(words)} pages: {num_pages}")
doc.close()
# Cria capitulos por blocos de 3000 palavras
chunks = []
chunk_size = 2800
for i in range(0, len(words), chunk_size):
    chunk = " ".join(words[i:i+chunk_size])
    chunks.append(chunk)
print(f"Chunks: {len(chunks)}")
# Gera estrutura JSON
capitulos = []
for idx, chunk in enumerate(chunks):
    # pega primeiro trecho para titulo
    paras = [p.strip() for p in chunk.split("  ") if len(p.strip())>80][:8]
    if not paras:
        paras = [chunk[j:j+600] for j in range(0, min(len(chunk), 2400), 600)]
    capitulos.append({
        "id": idx+1,
        "titulo": f"Capítulo {idx+1}: Desenvolvimento Acadêmico — Hermenêutica Sagrada (Parte {idx+1}/{len(chunks)})",
        "paragrafos": paras
    })

# Estima paginas e tempo
total_palavras = len(words)
out = {
    "id": 999,
    "pdfFilename": "hermeneutica-sagrada.pdf",
    "titulo": "Hermenêutica Sagrada",
    "modulo": "Exegese & Teologia Bíblica",
    "totalPaginas": num_pages,
    "totalPalavras": total_palavras,
    "tempoEstimadoLeitura": f"{max(20, total_palavras//140)} min",
    "capitulos": capitulos
}
print(json.dumps(out, ensure_ascii=False)[:800])
# Save to temp file for manual insertion
out_path = pathlib.Path(r"scripts/_hermeneutica_temp.json")
out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Salvo em {out_path} ({out_path.stat().st_size} bytes)")
