import json
import re

with open('src/data/apostilasTextoCompleto.ts', 'r', encoding='utf-8') as f:
    text = f.read()
start = text.find('[')
end = text.rfind(']')
data = json.loads(text[start:end+1])

results = []

for item in data:
    item_id = item.get('id')
    titulo = item.get('titulo')
    capitulos = item.get('capitulos', [])
    if not capitulos:
        continue
    cap1 = capitulos[0]
    parags = cap1.get('paragrafos', [])
    
    # Check first 5 paragraphs
    issues = []
    for idx, p in enumerate(parags[:8]):
        p_sub = p[:250].replace('\n', ' ')
        # Check if contains sumario, indice, table of contents dots, etc.
        has_indice = bool(re.search(r'\b(sum[aá]rio|[ií]ndice)\b', p_sub, re.IGNORECASE))
        has_dots = bool(re.search(r'\.{4,}\s*\d*', p_sub))
        if has_indice or has_dots:
            issues.append((idx + 1, p_sub, has_indice, has_dots))
            
    results.append({
        'id': item_id,
        'titulo': titulo,
        'first_p': parags[0][:150].replace('\n', ' ') if parags else '',
        'issues': issues
    })

with open('scripts/audit_summary.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("Auditoria concluída. Analisando resultados...")
for r in results:
    if r['issues']:
        print(f"\n[{r['id']:02d}] {r['titulo']}")
        for p_num, text_snippet, has_ind, has_d in r['issues']:
            print(f"  -> P{p_num} (Índice={has_ind}, Pontos={has_d}): {text_snippet[:110]}...")
