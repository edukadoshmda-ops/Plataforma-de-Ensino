# Fix body "Amazônia" that survived:需要 add_redact for "Amazônia" AFTER text redaction was capped by header/footer only.
# The previous script added redactions before apply, but the search_for for Amazônia returns rects inside body sumario.
# It should work — but p1 still has Amazônia. Let's inspect why: header faixa was -5 to h-82, but the sumário Amazônia is at y=799 which is INSIDE footer redact area (82 from bottom). So it should have been removed.
# The issue: apply_redactions removed images but the text search shows Amazônia still at y=799 — that's inside footer area but footer is 82pt from bottom (759 to 842). The Amazônia at y=799 IS inside footer, so it should be white.
# Let's see actual rect: y=799, h=13, footer rect is -5,-5 to w,82 -> y 0-82. This Amazônia is at y=799 ABOVE footer, not inside! So footer is at bottom 0-82, header at top h-82 to h. The Amazônia at y=799 is NEAR TOP, not footer — it's the sumário line near top of page content.
# Actually p1 has two Amazônias: one at y=45 (header old, white rect failed?) and one at y=799 (sumário). The header one should be covered by header rect.
# Debug: our header rect was -5, h-82 to w+5, h+5 = at 842: header is 760 to 847. The Amazônia at y=45 is at BOTTOM, not top! So coordinate flip confusion.
# In pymupdf, y=0 is top. So header rect at h-82 to h = 759 to 842 (near bottom in PDF coords? No, pymupdf has origin top-left, but we used canvas coords). Redact rect must use pymupdf coords.
# We mixed coordinate systems! Fix: use correct pymupdf rect.

import pathlib, pymupdf
pdf = pathlib.Path(r"public/pdfs/maneiras-e-costumes-da-biblia.pdf")
doc = pymupdf.open(pdf)
page = doc[1]
# print page rect
print(f"page rect: {page.rect}")
# The Amazônia rect is at y=45 (near top) and y=799 (near bottom)
# In pymupdf, top is 0, bottom is 841. So y=45 is near top (header), y=799 is near bottom (footer/sumário near bottom of content)
# Our redact rects using -5, h-82 etc are inverted — we used bottom-origin math.
# Fix: need to handle this correctly in rebuild_fix_logo_nome_v2

# Just verify what redact rects were applied by checking if Amazônia still present
# Need to save a test with corrected rects
doc.close()
print("confirmed: coordinate system issue — will fix in v2")
