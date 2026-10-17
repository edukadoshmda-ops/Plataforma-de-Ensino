import json
import os

with open('src/data/apostilasTextoCompleto.ts', 'r', encoding='utf-8') as f:
    text = f.read()
start = text.find('[')
end = text.rfind(']')
data = json.loads(text[start:end+1])

print(f"Total apostilas: {len(data)}")

for item in data:
    item_id = item.get('id')
    titulo = item.get('titulo')
    capitulos = item.get('capitulos', [])
    indices_encontrados = []
    
    for c_idx, cap in enumerate(capitulos):
        cap_tit = cap.get('titulo', '')
        parags = cap.get('paragrafos', [])
        # Check first 5 paragraphs of each chapter, or chapter title
        for p_idx, p in enumerate(parags[:10]):
            p_lower = p.lower()
            if any(k in p_lower for k in ['sumário', 'sumario', 'índice', 'indice', 'conteúdo', 'conteudo']) and len(p) < 1500:
                indices_encontrados.append((c_idx, cap_tit, p_idx, p[:120]))
    
    if indices_encontrados or item_id == 5:
        print(f"\n[{item_id:02d}] {titulo}")
        if not indices_encontrados and item_id == 5:
            print("  (Hermenêutica selecionada, listando capítulos)")
            for c_idx, cap in enumerate(capitulos[:3]):
                print(f"    Cap {c_idx+1}: {cap.get('titulo')}")
                for p_idx, p in enumerate(cap.get('paragrafos', [])[:3]):
                    print(f"      P{p_idx+1}: {p[:100]}...")
        for c_idx, c_tit, p_idx, snippet in indices_encontrados:
            print(f"  Cap {c_idx+1} ({c_tit}) P{p_idx+1}: {snippet}")
