import pathlib, json, re
p = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel\src\data\apostilasTextoCompleto.js")
text = p.read_text(encoding="utf-8")
# Count entries by pdfFilename
import re
files = re.findall(r'"pdfFilename"\s*:\s*"([^"]+)"', text)
print(f"Total apostilasTextoCompleto entries: {len(files)}")
for f in files:
    print(f"  {f}")
# Check content.js pdfs
p2 = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel\src\data\content.js")
t2 = p2.read_text(encoding="utf-8")
files2 = re.findall(r'arquivo:\s*"([^"]+)"', t2)
print(f"\nTotal content.js pdfs: {len(files2)}")
for f in files2:
    print(f"  {f}")

# Check provas
p3 = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel\src\data\provasData.js")
t3 = p3.read_text(encoding="utf-8")
import re as re2
codes = re2.findall(r'codigo:\s*"([^"]+)"', t3)
print(f"\nTotal provasData: {len(codes)}")
print(codes)

# Check for encoding errors like "4é" or "informa\xe7"
issues = []
for i,line in enumerate(text.splitlines(),1):
    if "4é" in line or "4ï" in line or "\ufffd" in line:
        issues.append((i,line.strip()[:120]))
print(f"\nEncoding issues found: {len(issues)}")
for i,l in issues[:10]:
    print(f"  line {i}: {l}")
