import pathlib
p = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel\src\data\apostilasTextoCompleto.js")
text = p.read_text(encoding="utf-8")
# The inserted entry has id 30 but there was no id 5 originally? Let's see what gap we have:
# We now have 1-30 sequential after insertion, which is correct.
# The earlier check showed sequential 1-30, so no gap.
# The old id 999 is now 30, perfect.
print("Checked: IDs are 1-30 sequential, no gap")
# But the inserted json may have duplicate inner ids? Let's verify inner capitulo ids are 1-4
import re
# Find the last entry's capitulos
import json
# Extract hermeneutica portion
m = re.search(r'"pdfFilename"\s*:\s*"hermeneutica-sagrada\.pdf".*?"capitulos"\s*:\s*\[(.*?)\]\s*\}\s*\]\s*;', text, re.S)
if m:
    cap_text = m.group(0)
    cap_ids = re.findall(r'"id"\s*:\s*(\d+)', cap_text)
    print(f"Hermen capitulo ids raw: {cap_ids[:10]}")
else:
    print("Not found via regex")
