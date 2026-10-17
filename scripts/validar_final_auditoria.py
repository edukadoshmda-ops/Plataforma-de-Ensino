import pathlib
import re

BASE = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel")
PDF_DIR = BASE / "public" / "pdfs"

# 1. Centralizacao validada no log anterior: todos center_offset = 0.0 -> OK
# 2. Verifica se apostilasTextoCompleto tem 30 (falta 1)
import json
p = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel\src\data\apostilasTextoCompleto.js")
text = p.read_text(encoding="utf-8", errors="ignore")
# extrai quantidade
files = re.findall(r'"pdfFilename"\s*:\s*"([^"]+)"', text)
print(f"apostilasTextoCompleto: {len(files)} arquivos")
for f in sorted(files):
    print(f"  {f}")
missing = set([f.name for f in PDF_DIR.glob("*.pdf")]) - set(files)
print(f"\nFALTAM em apostilasTextoCompleto: {missing}")

# 3. Verifica visualizador CSS
css = (BASE / "src" / "index.css").read_text(encoding="utf-8")
# procura border direita residual
if "border-right" in css:
    print("\nCSS ainda tem border-right (sidebar ok)")
# verifica visualizador
m = re.search(r"\.visualizador-pdf-destaque[^\}]+\}", css)
print("\n.visualizador-pdf-destaque:", m.group(0)[:500] if m else "nao encontrado")
m2 = re.search(r"\.pdf-frame-destaque[^\}]+\}", css)
print("\n.pdf-frame-destaque:", m2.group(0)[:500] if m2 else "nao encontrado")

# 4. Verifica se Artigos/Audiobooks tem truncamento
apostila_file = BASE / "src" / "pages" / "Artigos.jsx"
artigos_text = apostila_file.read_text(encoding="utf-8")
print(f"\nArtigos.jsx tem {len(artigos_text)} chars")
# verifica se tem paginacao estranha
if "Ativar o Windows" in text:
    print("ATENCAO: texto contém marca d agua Ativar o Windows (remover)")

# 5. Verifica content.js e provasData cobertura
for name in ["content.js","provasData.js"]:
    pp = BASE / "src" / "data" / name
    t = pp.read_text(encoding="utf-8")
    print(f"\n{name}: {len(t)} chars, has 30 entries check")
