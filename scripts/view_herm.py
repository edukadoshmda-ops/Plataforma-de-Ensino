import json

with open('src/data/apostilasTextoCompleto.ts', 'r', encoding='utf-8') as f:
    text = f.read()
start = text.find('[')
end = text.rfind(']')
data = json.loads(text[start:end+1])

herm = [x for x in data if x.get('id') == 5][0]
cap1 = herm['capitulos'][0]
print(f"Capitulo 1 tem {len(cap1['paragrafos'])} paragrafos:")
for i, p in enumerate(cap1['paragrafos'][:10]):
    print(f"\n--- Paragrafo {i+1} (len {len(p)}) ---")
    print(p[:300])
