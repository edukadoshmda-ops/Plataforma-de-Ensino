import json
import re

with open('src/data/apostilasTextoCompleto.ts', 'r', encoding='utf-8') as f:
    text = f.read()
start = text.find('[')
end = text.rfind(']')
data = json.loads(text[start:end+1])

print(f"Total apostilas carregadas: {len(data)}\n")

suspeitos = []

for item in data:
    item_id = item.get('id')
    titulo = item.get('titulo')
    capitulos = item.get('capitulos', [])
    
    problemas = []
    
    for c_idx, cap in enumerate(capitulos):
        cap_tit = cap.get('titulo', '')
        parags = cap.get('paragrafos', [])
        
        for p_idx, p in enumerate(parags):
            # Procura por linhas pontilhadas de sumário (ex: ..... 3 ou ........ 12)
            has_dots = bool(re.search(r'\.{4,}\s*\d+', p))
            has_sumario_word = bool(re.search(r'\b(sum[aá]rio|[ií]ndice)\b', p, re.IGNORECASE))
            has_table_of_contents_look = bool(re.search(r'\b(cap[ií]tulo|li[cç][aã]o|m[oó]dulo)\s+\d+.*\.{3,}', p, re.IGNORECASE))
            
            # Se for nos primeiros parágrafos do primeiro capítulo, ou tiver forte evidência de índice
            if has_dots or (has_sumario_word and (p_idx < 3 or c_idx == 0)) or has_table_of_contents_look:
                problemas.append({
                    'cap_idx': c_idx,
                    'cap_tit': cap_tit,
                    'parag_idx': p_idx,
                    'has_dots': has_dots,
                    'has_sumario_word': has_sumario_word,
                    'texto': p
                })
                
    if problemas:
        suspeitos.append((item_id, titulo, problemas))

print(f"--- Encontrados problemas potenciais em {len(suspeitos)} apostilas: ---\n")
for item_id, titulo, problemas in suspeitos:
    print(f"[{item_id:02d}] {titulo} -> {len(problemas)} parágrafos suspeitos")
    for prob in problemas[:5]:
        txt = prob['texto'].replace('\n', ' ')
        print(f"   Cap {prob['cap_idx']+1} | P{prob['parag_idx']+1} (dots={prob['has_dots']}, word={prob['has_sumario_word']}): {txt[:120]}...")
    if len(problemas) > 5:
        print(f"   ... e mais {len(problemas) - 5} parágrafos.")
    print()
