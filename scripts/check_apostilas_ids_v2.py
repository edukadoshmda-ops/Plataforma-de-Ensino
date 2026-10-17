import re, pathlib
text = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel\src\data\apostilasTextoCompleto.js").read_text(encoding="utf-8")
ids = [int(x) for x in re.findall(r'"id"\s*:\s*(\d+)', text)]
# Top-level ids are those after export const apostilasTextoCompleto = [ { "id":
# Filter by finding pdfFilename entries
entries = list(re.finditer(r'"pdfFilename"', text))
top_ids = []
for e in entries:
    snippet = text[max(0,e.start()-800):e.start()]
    m = list(re.finditer(r'\{\s+"id"\s*:\s*(\d+)', snippet))
    if m:
        top_ids.append(int(m[-1].group(1)))
print(f"Top-level entries: {len(top_ids)} ids={sorted(top_ids)}")
print(f"Duplicate top ids? {len(top_ids)!=len(set(top_ids))}")
# show file order
files = re.findall(r'"pdfFilename"\s*:\s*"([^"]+)"', text)
for i,f in enumerate(files,1):
    print(f"{i:02d}. {f}")
