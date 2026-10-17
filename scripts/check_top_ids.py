import pathlib, re
p = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel\src\data\apostilasTextoCompleto.js")
text = p.read_text(encoding="utf-8")
entries = list(re.finditer(r'"pdfFilename"\s*:\s*"([^"]+)"', text))
print(f"Total: {len(entries)}")
for e in entries:
    start = max(0, e.start()-700)
    snippet = text[start:e.start()]
    top_ids = list(re.finditer(r'\{\s+"id"\s*:\s*(\d+)', snippet))
    top = top_ids[-1].group(1) if top_ids else '?'
    print(top, e.group(1))
print("--- FIM ---")
