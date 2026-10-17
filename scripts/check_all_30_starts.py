import json

with open('src/data/apostilasTextoCompleto.ts', 'r', encoding='utf-8') as f:
    text = f.read()
start = text.find('[')
end = text.rfind(']')
data = json.loads(text[start:end+1])

print(f"Total apostilas: {len(data)}\n")

for item in data:
    item_id = item.get('id')
    titulo = item.get('titulo')
    cap1 = item.get('capitulos', [])[0]
    p1 = cap1.get('paragrafos', [])[0] if cap1.get('paragrafos') else ''
    p2 = cap1.get('paragrafos', [])[1] if len(cap1.get('paragrafos', [])) > 1 else ''
    
    # Exibe resumo do início
    print(f"[{item_id:02d}] {titulo}")
    print(f"   P1: {p1[:100]}...")
    if any(w in p1.lower() for w in ['índice', 'indice', 'sumário', 'sumario', 'ementa', 'conteúdo programático']):
        print(f"   *** ATENÇÃO: Palavra de índice encontrada em P1! ***")
    if any(w in p2.lower() for w in ['índice', 'indice', 'sumário', 'sumario']):
        print(f"   *** ATENÇÃO: Palavra de índice encontrada em P2! ***")
