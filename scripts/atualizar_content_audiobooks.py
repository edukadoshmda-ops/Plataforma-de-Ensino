# -*- coding: utf-8 -*-
"""
Atualizador do content.js com todas as transcrições de aulas magnas completas
"""
import re

CONTENT_FILE = r"d:/Users/Users/eduka/Desktop/teologia-acessivel/src/data/content.js"

# Importa as aulas dos scripts de geração de áudio
import sys
sys.path.append(r"d:/Users/Users/eduka/Desktop/teologia-acessivel/scripts")

from gerar_audiobooks_completos_parte1 import AULAS as AULAS_P1
from gerar_audiobooks_completos_parte2 import AULAS as AULAS_P2
from gerar_materiais_completos_lote5 import AULAS_LOTE5_AUDIO
from gerar_materiais_completos_lote6 import AULAS_INTEGRAIS_AUDIO

TODAS_AULAS = {}
TODAS_AULAS.update(AULAS_P1)
TODAS_AULAS.update(AULAS_P2)
TODAS_AULAS.update(AULAS_LOTE5_AUDIO)
TODAS_AULAS.update(AULAS_INTEGRAIS_AUDIO)

print(f"Total de aulas completas carregadas: {len(TODAS_AULAS)}")

# Mapa de id do audiobook para a chave da aula
MAPA_ID_AULA = {
    1: "maneiras_costumes",
    2: "portugues_instrumental",
    3: "homiletica_oratoria",
    4: "metodologia_pesquisa",
    5: "apologetica",
    6: "sintese_at",
    7: "periodo_interbiblico",
    8: "manuscritos_at",
    9: "sintese_nt",
    10: "teontologia",
    11: "bibliologia",
    12: "angelologia",
    13: "antropologia",
    14: "cristologia",
    15: "soteriologia",
    16: "eclesiologia",
    17: "hamartiologia",
    18: "pneumatologia",
    19: "escatologia",
    20: "evangelismo",
    21: "geografia_biblica",
    22: "heresiologia",
    23: "administracao_eclesiastica",
    24: "discipulado",
    25: "arqueologia_biblica",
    26: "dispensacoes_aliancas",
    27: "biblia_ciencia",
    28: "tipologia_simbologia",
    29: "religioes_mundiais"
}

with open(CONTENT_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# Atualiza cada audiobook
for ab_id, chave in MAPA_ID_AULA.items():
    if chave in TODAS_AULAS:
        texto = TODAS_AULAS[chave].replace('\n', ' ').replace('"', '\\"')
        
        # Regex para encontrar o bloco do audiobook por id
        padrao = rf'(id:\s*{ab_id},[\s\S]*?duracao:\s*")[^"]*("[\s\S]*?transcricao:\s*")[^"]*(")'
        
        def repl(m):
            return f'{m.group(1)}8 min{m.group(2)}{texto}{m.group(3)}'
        
        content, count = re.subn(padrao, repl, content)
        print(f"Audiobook id {ab_id} ({chave}): atualizado {count} vez(es)")

with open(CONTENT_FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print("content.js atualizado com sucesso!")
