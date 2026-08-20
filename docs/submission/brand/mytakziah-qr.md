# Prototype QR Code

`mytakziah-qr.png` points at <https://mytakziah.vercel.app>, the deployed prototype. An identical
copy sits in `docs/submission/canvas/` so the canvas author does not have to reach across
directories.

| Property         | Value                                                   |
| ---------------- | ------------------------------------------------------- |
| Encodes          | `https://mytakziah.vercel.app`                          |
| Size             | 1170 x 1170 px, tagged 300 DPI, so 9.9 cm at print size |
| Symbol           | Version 5, 37 x 37 modules, 26 px per module            |
| Error Correction | Level H, tolerating roughly 30 per cent damage          |
| Quiet Zone       | 4 modules, the specification minimum, already included  |
| Ink              | `#281913`                                               |
| Ground           | `#F9F3EA`                                               |

**Ink on warm sand, not black on white.** The canvas ground is already warm sand, so a white
QR would read as a pasted-on rectangle. Contrast is 15.4:1, against the roughly 3:1 a scanner
needs.

## Verified

Decoded back to the correct URL at every size below, and in greyscale, which is how a mono print
or a photocopy would see it.

| Printed Width | Pixels | Result  |
| ------------- | ------ | ------- |
| 1.5 cm        | 177    | Decodes |
| 2.0 cm        | 236    | Decodes |
| 2.5 cm        | 295    | Decodes |
| 3.0 cm        | 354    | Decodes |
| 4.0 cm        | 472    | Decodes |

**Do not print it below 1.5 cm**, and keep the quiet zone clear: nothing may overlap the pale
margin built into the file.

**The PNG carries no caption on purpose.** Add "Scan to try the prototype" and the URL as live
text in the canvas or slide layout, so the URL stays selectable and legible to anyone who would
rather type it.

## Regenerating

`mytakziah-qr.py` is the generator, and it depends only on OpenCV and Pillow.

```bash
python3 docs/submission/brand/mytakziah-qr.py <output-directory>
```

Change `URL` in that file if the deployment moves, then re-copy to both directories.
