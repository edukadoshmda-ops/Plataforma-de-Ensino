import pathlib, json

BASE = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel")
apostilas_path = BASE / "src" / "data" / "apostilasTextoCompleto.js"
herm_path = BASE / "scripts" / "_hermeneutica_final.json"

herm = json.loads(herm_path.read_text(encoding="utf-8"))
text = apostilas_path.read_text(encoding="utf-8")

# The text currently ends with "];" after last entry (religioes-mundiais-1). We insert before final ];
if '"hermeneutica-sagrada.pdf"' in text:
    print("hermeneutica already present, skipping")
else:
    herm_json = json.dumps(herm, ensure_ascii=False, indent=2)
    # indent to match 2 spaces
    # Find last "];" 
    insertion = "  ,\n" + herm_json + "\n"
    # replace final \n]; with insertion + ];
    if text.rstrip().endswith("];"):
        text = text.rstrip()[:-2].rstrip() + insertion + "];\n"
        apostilas_path.write_text(text, encoding="utf-8")
        print("Inserted Hermenêutica Sagrada as id 30")
    else:
        print("Could not find terminal ];")
        print(text[-500:])
