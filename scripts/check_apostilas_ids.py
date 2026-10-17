import re, pathlib
p = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel\src\data\apostilasTextoCompleto.js").read_text(encoding="utf-8")
ids = re.findall(r'"id"\s*:\s*(\d+)', p)
print(ids[:40])
print(f"Total ids: {len(ids)}")
# show gap around 5
from collections import Counter
print(Counter(ids))
