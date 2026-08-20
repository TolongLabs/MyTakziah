"""MyTakziah prototype QR. Sharp modules, no ornament, generous quiet zone.

Ink on warm sand rather than pure black on white: the canvas ground IS warm
sand, so a white QR would read as a pasted-on rectangle. Contrast is ~13:1,
far above the ~3:1 a scanner needs.
"""
import cv2, numpy as np
from PIL import Image

URL = "https://mytakziah.vercel.app"
INK = (0x28, 0x19, 0x13)   # #281913, the project's foreground token
SAND = (0xF9, 0xF3, 0xEA)  # #F9F3EA, the canvas ground
QUIET = 4                  # modules; 4 is the spec minimum
TARGET = 1200              # px, = 10.16cm at 300 DPI

p = cv2.QRCodeEncoder_Params()
# H tolerates ~30% damage: ink spread, fold creases, a phone at an angle.
p.correction_level = cv2.QRCodeEncoder_CORRECT_LEVEL_H
m = cv2.QRCodeEncoder_create(p).encode(URL)
n = m.shape[0]

# Quiet zone first, then integer-scale so every module is identical width.
padded = np.pad(m, QUIET, constant_values=255)
scale = TARGET // padded.shape[0]
big = np.kron(padded, np.ones((scale, scale), dtype=np.uint8))

rgb = np.zeros((*big.shape, 3), dtype=np.uint8)
rgb[big == 0] = INK
rgb[big == 255] = SAND

out = Image.fromarray(rgb)
print(f"matrix {n}x{n} (v{(n-17)//4}), module {scale}px, image {out.size[0]}px")
out.save(f"{__import__('sys').argv[1]}/mytakziah-qr.png", dpi=(300, 300))
