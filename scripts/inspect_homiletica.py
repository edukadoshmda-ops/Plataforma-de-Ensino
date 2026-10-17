import json

with open('src/data/apostilasTextoCompleto.ts', 'r', encoding='utf-8') as f:
    text = f.read()
start = text.find('[')
end = text.rfind(']')
data = json.loads(text[start:end+1])

hom = [x for x in data if x.get('id') == 28][0]
cap1 = hom['capitulos'][0]
print(f"Homilética Cap 1 tem {len(cap1['paragrafos'])} parágrafos:")
for i, p in enumerate(cap1['paragrafos'][:6]):
    print(f"\n=== P{i+1} (len {len(p)}) ===")
    print(p[:500])
