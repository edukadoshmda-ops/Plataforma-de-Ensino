import json, pathlib
# Reads the previous _hermeneutica_clean but removes cover junk and rebuilds into 4 chapters
src = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel\scripts\_hermeneutica_clean.json")
data = json.loads(src.read_text(encoding="utf-8"))
# data["capitulos"] currently 18 small chunks — merge into 4 balanced
all_paras = []
for ch in data["capitulos"]:
    all_paras.extend(ch["paragrafos"])
# Remove first junk paragraphs that are cover
# Filter: remove paragraphs that are mostly dots or very short headers
filtered = []
for p in all_paras:
    if p.count(".") > 30 and len(p.split()) < 25:  # sumario dots
        continue
    if p.strip() == "HERMENÊUTICA SAGRADA Regras de Interpretação Bíblica, Exegese e Métodos Hermenêuticos Área: HERMENÊUTICA & EXEGESE BÍBLI...":
        continue
    # skip lone numbers like "4 D - A necessidade..."
    filtered.append(p)
print(f"Filtered: {len(filtered)} from {len(all_paras)}")
# Now split into 4 chapters
n = 4
per = (len(filtered) + n - 1)//n
new_chapters = []
for i in range(n):
    chunk = filtered[i*per:(i+1)*per]
    if not chunk:
        continue
    new_chapters.append({
        "id": i+1,
        "titulo": f"Capítulo {i+1}: Hermenêutica Sagrada — Parte {i+1}/4",
        "paragrafos": chunk
    })
data["capitulos"] = new_chapters
data["id"] = 30
# Update palavras
total_words = sum(len(p.split()) for p in filtered)
data["totalPalavras"] = total_words
data["tempoEstimadoLeitura"] = f"{max(20, total_words//140)} min"
# Fix titulo case
data["titulo"] = "Hermenêutica Sagrada"
data["modulo"] = "Exegese & Teologia Bíblica"
out = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel\scripts\_hermeneutica_final.json")
out.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Salvo final {out} com {len(new_chapters)} capitulos, {total_words} palavras")
