"""MyTakziah prototype QR with the Anyaman mark set into the middle.

Same encoder settings as `mytakziah-qr.py`, but on a white ground rather than
warm sand, because the pitch deck's ground is white by the mentor's rule.

The centre logo is only safe because the symbol is encoded at error-correction
level H, which reconstructs roughly 30 per cent of a damaged symbol. The mark
covers about 6 per cent of the area, well inside that budget, and the script
refuses to write the file unless it decodes back to the URL afterwards.

Usage: mytakziah-qr-logo.py <output-dir>
"""

import sys

import cv2
import numpy as np
from PIL import Image

URL = "https://mytakziah.vercel.app"
INK = (0x28, 0x19, 0x13)  # #281913, the project's foreground token
GROUND = (0xFF, 0xFF, 0xFF)  # white, the deck ground
QUIET = 4  # modules; 4 is the spec minimum
TARGET = 1600  # px
LOGO_FRAC = 0.16  # mark width as a fraction of the symbol; 0.20 fails to decode
PAD_FRAC = 0.30  # white pad around the mark, as a fraction of the mark

out_dir = sys.argv[1] if len(sys.argv) > 1 else "."

p = cv2.QRCodeEncoder_Params()
p.correction_level = cv2.QRCodeEncoder_CORRECT_LEVEL_H
matrix = cv2.QRCodeEncoder_create(p).encode(URL)
n = matrix.shape[0]

padded = np.pad(matrix, QUIET, constant_values=255)
scale = TARGET // padded.shape[0]
big = np.kron(padded, np.ones((scale, scale), dtype=np.uint8))

rgb = np.zeros((*big.shape, 3), dtype=np.uint8)
rgb[big == 0] = INK
rgb[big == 255] = GROUND
qr = Image.fromarray(rgb).convert("RGBA")
side = qr.size[0]

mark = Image.open("docs/submission/deck/assets/mark.png").convert("RGBA")
lw = int(side * LOGO_FRAC)
mark = mark.resize((lw, lw), Image.LANCZOS)

pad = int(lw * PAD_FRAC)
plate = Image.new("RGBA", (lw + pad * 2, lw + pad * 2), GROUND + (255,))
plate.paste(mark, (pad, pad), mark)

off = (side - plate.size[0]) // 2
qr.alpha_composite(plate, (off, off))
out = qr.convert("RGB")

# Refuse to ship a symbol that will not scan. Check it small, as a phone sees it.
det = cv2.QRCodeDetector()
checked = []
for px in (1600, 800, 480, 320, 240):
    probe = np.array(out.resize((px, px), Image.LANCZOS))
    data, _, _ = det.detectAndDecode(cv2.cvtColor(probe, cv2.COLOR_RGB2BGR))
    checked.append((px, data == URL))
    if data != URL:
        raise SystemExit(
            f"FAILED to decode at {px}px (got {data!r}). "
            "Lower LOGO_FRAC and run again. Nothing was written."
        )

path = f"{out_dir}/mytakziah-qr-logo.png"
out.save(path, dpi=(300, 300))
print(f"matrix {n}x{n} (v{(n - 17) // 4}), module {scale}px, image {side}px")
print("decoded back to the URL at:", ", ".join(f"{px}px" for px, _ in checked))
print("wrote", path)
