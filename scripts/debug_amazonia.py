import pymupdf, pathlib
pdf = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel\public\pdfs\maneiras-e-costumes-da-biblia.pdf")
doc = pymupdf.open(pdf)
page = doc[1]
txt = page.get_text()
print("contains Amazônia?", "Amazônia" in txt)
print("contains Amazonia?", "Amazonia" in txt)
print("contains SEBITAM?", "SEBITAM" in txt)
# search
for term in ["Amazônia", "Amazonia", "Amaz", "SEBITAM"]:
    hits = page.search_for(term)
    print(f"search '{term}': {len(hits)} hits -> {hits[:2]}")
# dict blocks
d = page.get_text("dict")
for b in d["blocks"]:
    if b["type"]==0:
        for l in b["lines"]:
            for s in l["spans"]:
                if "Amaz" in s["text"] or "SEBITAM" in s["text"]:
                    print(f"span '{s['text']}' bbox={s['bbox']}")
doc.close()

# also check logo image mode
from PIL import Image
p = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel\public\logo-sebitan.png")
im = Image.open(p)
print(f"logo-sebitan: mode={im.mode} size={im.size} info={im.info}")
# check pixel 0,0
print(f"pixel 0,0={im.getpixel((0,0))}  pixel center={im.getpixel((im.size[0]//2, im.size[1]//2))}")
