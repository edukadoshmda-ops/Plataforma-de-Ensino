# -*- coding: utf-8 -*-
import sys
import asyncio
import edge_tts

async def main():
    if len(sys.argv) < 4:
        print("Usage: tts_service.py <voice> <rate> <output_path>", file=sys.stderr)
        sys.exit(1)

    voice = sys.argv[1]
    rate = sys.argv[2]
    output_path = sys.argv[3]

    try:
        if hasattr(sys.stdin, "reconfigure"):
            sys.stdin.reconfigure(encoding="utf-8")
        input_text = sys.stdin.read().strip()
    except Exception as e:
        print(f"Error reading stdin: {e}", file=sys.stderr)
        sys.exit(1)

    if not input_text:
        sys.exit(0)

    try:
        communicate = edge_tts.Communicate(input_text, voice, rate=rate)
        await communicate.save(output_path)
    except Exception as e:
        print(f"Error communicating with edge_tts: {e}", file=sys.stderr)
        sys.exit(2)

if __name__ == "__main__":
    asyncio.run(main())
