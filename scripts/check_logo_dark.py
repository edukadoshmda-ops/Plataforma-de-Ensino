from PIL import Image
import pathlib
p = pathlib.Path(r"D:\Users\Users\eduka\Desktop\teologia-acessivel\public\logo-sebitan.png")
im = Image.open(p)
print(f"mode={im.mode} size={im.size}")
# Check non-transparent pixels: sample bbox of logo content
# Find bbox of non-transparent
bbox = im.getbbox()
print(f"bbox non-transparent: {bbox}")
# Extract and check colors
import numpy as np
arr = np.array(im)
# find pixels with alpha > 10
mask = arr[:,:,3] > 10
print(f"pixels alpha>10: {mask.sum()} / {arr.shape[0]*arr.shape[1]}")
# Sample dominant color among visible pixels
visible = arr[mask]
if len(visible)>0:
    # mean rgb
    print(f"mean RGB of visible: {visible[:,:3].mean(axis=0)}")
    # show unique top colors
    from collections import Counter
    rgb_tuples = [tuple(v[:3]) for v in visible[::100]]
    print(f"sample RGBs: {rgb_tuples[:10]}")
# Also check if background is black transparent vs gold
im2 = Image.new("RGBA", im.size, (0,34,68,255))
im2.alpha_composite(im)
# Save preview
im2.save(r"D:\Users\Users\eduka\Desktop\teologia-acessivel\public\pdfs\_logo_preview_navy.png")
print("saved preview navy")
