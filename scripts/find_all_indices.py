import json
import re

with open('src/data/apostilasTextoCompleto.ts', 'r', encoding='utf-8') as f:
    text = f.read()
start = text.find('[')
end = text.rfind(']')
data = json.loads(text[start:end+1])

print(f"Auditando detalhadamente todas as 30 disciplinas...")

for item in data:
    item_id = item['id']
    titulo = item['titulo']
    
    for c_idx, cap in enumerate(item.get('capitulos', [])):
        for p_idx, p in enumerate(cap.get('paragrafos', [])):
            # Procura por sumário / índice com pontos de página ou lista de tópicos
            if re.search(r'\b(sum[aá]rio|[ií]ndice)\b', p, re.IGNORECASE):
                # Imprime contexto
                print(f"[{item_id:02d}] {titulo} | Cap {c_idx+1} | P{p_idx+1}:")
                print(f"     Texto: {p[:180].replace(chr(10), ' ')}")
                print()
