# -*- coding: utf-8 -*-
"""
Gerador de Audiobooks com Conteúdo 100% Integral dos 30 PDFs / Compêndios
Teologia Acessível - Ensino Superior Livre
Vozes: pt-BR-AntonioNeural (Antônio) e pt-BR-FranciscaNeural (Francisca)
"""
import os
import sys
import json
import asyncio
import argparse
import re
import edge_tts

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AUDIO_DIR = os.path.join(ROOT_DIR, "public", "audio")
os.makedirs(AUDIO_DIR, exist_ok=True)

SLUGS = [
    'metodologia_pesquisa', 'portugues_instrumental', 'bibliologia', 'manuscritos_at',
    'hermeneutica_sagrada', 'maneiras_costumes', 'geografia_biblica', 'arqueologia_biblica',
    'sintese_at', 'periodo_interbiblico', 'sintese_nt', 'tipologia_simbologia',
    'dispensacoes_aliancas', 'teontologia', 'angelologia', 'antropologia',
    'hamartiologia', 'cristologia', 'pneumatologia', 'soteriologia',
    'eclesiologia', 'escatologia', 'apologetica', 'biblia_ciencia',
    'heresiologia', 'religioes_mundiais', 'discipulado', 'homiletica_oratoria',
    'evangelismo', 'administracao_eclesiastica'
]

VOZES = {
    "masculino": "pt-BR-AntonioNeural",
    "feminino": "pt-BR-FranciscaNeural",
}

def carregar_apostilas():
    caminho = os.path.join(ROOT_DIR, "src", "data", "apostilasTextoCompleto.ts")
    with open(caminho, "r", encoding="utf-8") as f:
        raw = f.read()
    start = raw.find('[')
    end = raw.rfind(']')
    return json.loads(raw[start:end+1])

def segmentar_em_blocos(paragrafos, max_chars=2500):
    blocos = []
    bloco_atual = []
    tam_atual = 0

    for p in paragrafos:
        p_clean = p.strip()
        if not p_clean:
            continue
        if tam_atual + len(p_clean) > max_chars and bloco_atual:
            blocos.append("\n\n".join(bloco_atual))
            bloco_atual = [p_clean]
            tam_atual = len(p_clean)
        else:
            bloco_atual.append(p_clean)
            tam_atual += len(p_clean)

    if bloco_atual:
        blocos.append("\n\n".join(bloco_atual))

    return blocos

async def sintetizar_bloco(texto, voice, tentativas=3):
    for tentativa in range(tentativas):
        try:
            communicate = edge_tts.Communicate(texto, voice)
            dados = b""
            async for chunk in communicate.stream():
                if chunk["type"] == "audio":
                    dados += chunk["data"]
            if dados:
                return dados
        except Exception as e:
            if tentativa == tentativas - 1:
                print(f"      [ERRO] Falha ao sintetizar bloco ({len(texto)} chars): {e}")
                return None
            await asyncio.sleep(2)
    return None

async def gerar_audiobook_disciplina(disciplina, genero, force=False):
    idx = disciplina["id"] - 1
    slug = SLUGS[idx] if idx < len(SLUGS) else f"disciplina_{disciplina['id']}"
    voice = VOZES[genero]
    arquivo_final = os.path.join(AUDIO_DIR, f"{slug}_{genero}.mp3")

    # Pula apenas se já for um áudio integral gerado (> 3MB) ou se não foi forçado
    if os.path.exists(arquivo_final) and not force and os.path.getsize(arquivo_final) > 3 * 1024 * 1024:
        size_mb = os.path.getsize(arquivo_final) / (1024 * 1024)
        print(f"[{disciplina['id']:02d}/30] {disciplina['titulo']} ({genero}) -> Já possui áudio integral ({size_mb:.2f} MB). Ignorando.")
        return True

    # Coletar todos os parágrafos do compêndio integral
    todos_paragrafos = []
    for cap in disciplina.get("capitulos", []):
        tit = cap.get('titulo', '').strip()
        if tit.lower().startswith("capítulo"):
            todos_paragrafos.append(f"{tit}.")
        else:
            todos_paragrafos.append(f"Capítulo: {tit}.")
        for p in cap.get("paragrafos", []):
            p_limpo = re.sub(r'\.{4,}\s*\d*', ' ', p).strip()
            if p_limpo:
                todos_paragrafos.append(p_limpo)

    blocos = segmentar_em_blocos(todos_paragrafos, max_chars=2500)
    print(f"\n[{disciplina['id']:02d}/30] Gerando {disciplina['titulo']} ({genero} • {voice})...")
    print(f"       Total de blocos: {len(blocos)} ({sum(len(b) for b in blocos)} caracteres)")

    # Gerar em arquivo temporário primeiro
    arquivo_temp = arquivo_final + ".tmp"
    with open(arquivo_temp, "wb") as f_out:
        for i, bloco in enumerate(blocos, 1):
            sys.stdout.write(f"\r       Progresso: bloco {i}/{len(blocos)} ({int(i/len(blocos)*100)}%)... ")
            sys.stdout.flush()
            audio_bytes = await sintetizar_bloco(bloco, voice)
            if audio_bytes:
                f_out.write(audio_bytes)
            else:
                print(f"\n       [AVISO] Bloco {i} foi ignorado devido a falha.")
            # Pequena pausa para evitar bloqueio de rede
            await asyncio.sleep(0.3)

    if os.path.exists(arquivo_final):
        os.remove(arquivo_final)
    os.rename(arquivo_temp, arquivo_final)
    size_mb = os.path.getsize(arquivo_final) / (1024 * 1024)
    print(f"\r       Concluído com sucesso! Arquivo: {os.path.basename(arquivo_final)} ({size_mb:.2f} MB)")
    return True

async def main():
    parser = argparse.ArgumentParser(description="Gerador de Audiobooks com Conteúdo Integral dos 30 PDFs")
    parser.add_argument("--id", type=int, help="ID específico da disciplina (1 a 30) para gerar")
    parser.add_argument("--voice", choices=["masculino", "feminino", "ambos"], default="ambos", help="Voz a gerar")
    parser.add_argument("--force", action="store_true", help="Sobrescrever arquivos já existentes")
    args = parser.parse_args()

    apostilas = carregar_apostilas()

    if args.id:
        apostilas_selecionadas = [a for a in apostilas if a["id"] == args.id]
        if not apostilas_selecionadas:
            print(f"Erro: Nenhuma disciplina encontrada com ID {args.id}")
            return
    else:
        apostilas_selecionadas = apostilas

    vozes_gerar = ["masculino", "feminino"] if args.voice == "ambos" else [args.voice]

    print("=" * 65)
    print(" TEOLOGIA ACESSÍVEL - GERADOR DE AUDIOBOOKS INTEGRAIS EM MP3")
    print(f" Disciplinas selecionadas: {len(apostilas_selecionadas)}")
    print(f" Vozes: {', '.join(vozes_gerar)}")
    print(f" Diretório de saída: {AUDIO_DIR}")
    print("=" * 65)

    for apostila in apostilas_selecionadas:
        for voz in vozes_gerar:
            await gerar_audiobook_disciplina(apostila, voz, force=args.force)

    print("\n" + "=" * 65)
    print(" PROCESSO DE GERAÇÃO FINALIZADO!")
    print("=" * 65)

if __name__ == "__main__":
    asyncio.run(main())
