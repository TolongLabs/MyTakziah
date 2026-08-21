"""Deck QR: the prototype link with the MyTakziah mark knocked into the centre.

Same encoding decisions as `../../brand/mytakziah-qr.py`, which stays the plain
master. This variant exists only for the closing slide, where the mark in the
middle earns its place: it names what the code points at.

Correction level H tolerates roughly 30 per cent damage, so a centre patch at
22 per cent of the width is well inside budget. The script decodes its own
output before writing, and refuses to write a code it cannot read back.
"""

import sys

import cv2
import numpy as np
from PIL import Image

URL = "https://mytakziah.vercel.app"
INK = (0x28, 0x19, 0x13)  # #281913, the project's foreground token
SAND = (0xF9, 0xF3, 0xEA)  # #F9F3EA, the canvas ground
QUIET = 4  # modules; 4 is the spec minimum
TARGET = 1200  # px
MARK = "mark.png"
OUT = "qr.png"
PATCH = 0.28  # knockout width as a fraction of the full image
LOGO = 0.225  # mark width as a fraction of the full image

p = cv2.QRCodeEncoder_Params()
p.correction_level = cv2.QRCodeEncoder_CORRECT_LEVEL_H
m = cv2.QRCodeEncoder_create(p).encode(URL)
n = m.shape[0]

padded = np.pad(m, QUIET, constant_values=255)
scale = TARGET // padded.shape[0]
big = np.kron(padded, np.ones((scale, scale), dtype=np.uint8))

rgb = np.zeros((*big.shape, 3), dtype=np.uint8)
rgb[big == 0] = INK
rgb[big == 255] = SAND
out = Image.fromarray(rgb).convert("RGBA")
w = out.size[0]

# Knock a sand square out of the centre, then drop the mark into it. The square
# is squared to the module grid so the edge never cuts a module in half.
patch = round(w * PATCH / scale) * scale
x0 = (w - patch) // 2
out.paste(Image.new("RGBA", (patch, patch), (*SAND, 255)), (x0, x0))

mark = Image.open(MARK).convert("RGBA")
side = int(w * LOGO)
mark = mark.resize((side, side), Image.LANCZOS)
out.alpha_composite(mark, ((w - side) // 2, (w - side) // 2))

# Refuse to ship a code that will not scan.
check = cv2.cvtColor(np.array(out.convert("RGB")), cv2.COLOR_RGB2BGR)
decoded, _, _ = cv2.QRCodeDetector().detectAndDecode(check)
if decoded != URL:
    sys.exit(f"QR did not decode back to {URL!r}, got {decoded!r}. Not written.")

out.save(OUT, dpi=(300, 300))
print(f"matrix {n}x{n} (v{(n - 17) // 4}), module {scale}px, image {w}px, decoded ok")
