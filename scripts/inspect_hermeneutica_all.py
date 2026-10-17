import json
import re

with open('src/data/apostilasTextoCompleto.ts', 'r', encoding='utf-8') as f:
    text = f.read()
start = text.find('[')
end = text.rfind(']')
data = json.loads(text[start:end+1])

herm = [x for x in data if x.get('id') == 5][0]
for c_idx, cap in enumerate(herm['capitulos']):
    print(f"\n================ Capítulo {c_idx+1}: {cap['titulo']} ================")
    for p_idx, p in enumerate(cap['paragrafos']):
        has_dots = bool(re.search(r'\.{4,}', p))
        print(f"P{p_idx+1} (len {len(p)}) [dots={has_dots}]: {p[:110]}...")
