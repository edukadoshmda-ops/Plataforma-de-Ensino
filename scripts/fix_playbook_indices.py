import json
import re

caminho = 'src/data/apostilasTextoCompleto.ts'
with open(caminho, 'r', encoding='utf-8') as f:
    text = f.read()

prefixo = text[:text.find('[')]
start = text.find('[')
end = text.rfind(']')
sufixo = text[end+1:]

data = json.loads(text[start:end+1])

# 1. Corrigir Hermenêutica Sagrada (id: 5)
for item in data:
    if item['id'] == 5:
        cap1 = item['capitulos'][0]
        parags = cap1['paragrafos']
        
        # P8 tinha o texto da introdução após o sumário:
        # "HERMENÊUTICA SAGRADA INTRODUÇÃO Este estudo faz-se necessário..."
        novo_p1 = "HERMENÊUTICA SAGRADA — INTRODUÇÃO: Este estudo faz-se necessário porque há hoje, muitos ensinamentos distorcidos acerca da Palavra de Deus, levando muitas pessoas ao erro."
        
        # Substitui os primeiros 8 parágrafos (índice) por apenas o novo_p1
        restantes = parags[8:]
        cap1['paragrafos'] = [novo_p1] + restantes
        
        # Limpar cabeçalhos repetidos tipo 'SEBITAN... Ananindeua....... 4' em todos os capítulos
        for cap in item['capitulos']:
            novos_parags = []
            for p in cap['paragrafos']:
                # Remove padrões de cabeçalho SEBITAN ... pontinhos ... número de página
                p_limpo = re.sub(r'SEBITAN\s*[-–]\s*Semin[aá]rio\s+B[ií]blico\s+e\s+Teol[oó]gico\s+de\s+Ananindeua\s+SEBITAN\s+Semin[aá]rio\s+B[ií]blico\s+e\s+Teol[oó]gico\s+de\s+Ananindeua\.+\s*\d*', '', p)
                # Remove sequências longas de pontos com número de página isolados
                p_limpo = re.sub(r'\.{5,}\s*\d*', ' ', p_limpo)
                p_limpo = re.sub(r'\s{2,}', ' ', p_limpo).strip()
                if p_limpo:
                    novos_parags.append(p_limpo)
            cap['paragrafos'] = novos_parags
        print(f"Hermenêutica Sagrada (id 5) corrigida! Cap 1 tem agora {len(cap1['paragrafos'])} parágrafos.")

    # 2. Corrigir Homilética & Oratória Sagrada (id: 28)
    if item['id'] == 28:
        cap1 = item['capitulos'][0]
        parags = cap1['paragrafos']
        
        novo_p1 = "HOMILÉTICA — INTRODUÇÃO: Nosso objetivo nesta tarefa não é fazer de você um pregador, mas sim levar alguns esclarecimentos necessários a respeito de como nos portar diante de um público e o tipo de mensagem que Deus no momento exato nos revela."
        
        # P1 era o índice, P2 tinha o restante do índice e depois a Introdução
        restantes = parags[2:]
        cap1['paragrafos'] = [novo_p1] + restantes
        print(f"Homilética & Oratória (id 28) corrigida! Cap 1 tem agora {len(cap1['paragrafos'])} parágrafos.")

# Salvar de volta
json_formatado = json.dumps(data, ensure_ascii=False, indent=2)
novo_conteudo = prefixo + json_formatado + sufixo

with open(caminho, 'w', encoding='utf-8') as f:
    f.write(novo_conteudo)

print("Arquivo src/data/apostilasTextoCompleto.ts atualizado com sucesso!")
