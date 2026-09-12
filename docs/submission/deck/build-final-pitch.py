"""Build the 7-slide MyTakziah pitch deck for the URIIS final.

White ground (mentor's hard rule), Arial, three points per slide, 16:9.
Designed to be imported into Canva, where every text box stays editable.
"""

from pptx import Presentation
from pptx.util import Inches as In, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR

INK = RGBColor(0x28, 0x19, 0x13)
TERRA = RGBColor(0xBC, 0x4D, 0x1A)
SLATE = RGBColor(0x37, 0x6D, 0x7C)
GREY = RGBColor(0x6E, 0x63, 0x5C)
HAIR = RGBColor(0xDC, 0xD5, 0xCE)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)

FONT = "Arial"
W, H = 13.333, 7.5
ML, MR = 0.80, 0.80
CW = W - ML - MR

ASSETS = "docs/submission/deck/assets/"
QR = ASSETS + "qr-logo.png"

prs = Presentation()
prs.slide_width, prs.slide_height = In(W), In(H)
BLANK = prs.slide_layouts[6]


def slide():
    s = prs.slides.add_slide(BLANK)
    bg = s.background.fill
    bg.solid()
    bg.fore_color.rgb = WHITE
    return s


def tb(s, x, y, w, h, anchor=MSO_ANCHOR.TOP):
    box = s.shapes.add_textbox(In(x), In(y), In(w), In(h))
    tf = box.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = anchor
    tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
    return tf


def para(tf, text, size, color, bold=False, first=False, space_before=0,
         space_after=0, align=PP_ALIGN.LEFT, spacing=None):
    p = tf.paragraphs[0] if first else tf.add_paragraph()
    p.alignment = align
    p.space_before = Pt(space_before)
    p.space_after = Pt(space_after)
    if spacing:
        p.line_spacing = spacing
    r = p.add_run()
    r.text = text
    f = r.font
    f.name, f.size, f.bold, f.color.rgb = FONT, Pt(size), bold, color
    return p


def rule(s, x, y, w, h=0.043, color=TERRA):
    from pptx.enum.shapes import MSO_SHAPE
    shp = s.shapes.add_shape(MSO_SHAPE.RECTANGLE, In(x), In(y), In(w), In(h))
    shp.fill.solid()
    shp.fill.fore_color.rgb = color
    shp.line.fill.background()
    shp.shadow.inherit = False
    return shp


def header(s, section, num, heading, rule_w=1.5):
    """Eyebrow, slide counter, heading and the terracotta rule."""
    t = tb(s, ML, 0.46, CW * 0.7, 0.32)
    para(t, section.upper(), 11.5, SLATE, bold=True, first=True)
    t2 = tb(s, ML + CW * 0.7, 0.46, CW * 0.3, 0.32)
    para(t2, f"{num} / 7", 11.5, GREY, first=True, align=PP_ALIGN.RIGHT)
    rule(s, ML, 0.90, CW, 0.012, HAIR)
    hh = tb(s, ML, 1.08, CW, 1.24)
    para(hh, heading, 33, INK, bold=True, first=True, spacing=1.05)
    rule(s, ML, 2.40, rule_w)



def points(s, items, top=2.80, width=None, gap=1.28, lead_size=17.5,
           body_size=14.5, lead_color=TERRA):
    """Three numbered points: bold lead, supporting line beneath."""
    width = width or CW
    for i, (lead, body) in enumerate(items):
        y = top + i * gap
        n = tb(s, ML, y - 0.02, 0.42, 0.4)
        para(n, f"{i + 1}", 15, HAIR, bold=True, first=True)
        t = tb(s, ML + 0.44, y, width - 0.44, gap - 0.12)
        para(t, lead, lead_size, lead_color, bold=True, first=True,
             spacing=1.12)
        para(t, body, body_size, GREY, space_before=5, spacing=1.28)


def note(s, text):
    s.notes_slide.notes_text_frame.text = text


def strip(s, y, text, color=SLATE, size=12.5, height=0.75):
    """A quiet supporting band at the foot of the slide."""
    rule(s, ML, y, CW, 0.012, HAIR)
    t = tb(s, ML, y + 0.18, CW, height)
    para(t, text, size, color, first=True, spacing=1.3)


def matrix_table(s, x, y, w, h, rows, headers):
    """The demands matrix, as a native table so Canva keeps it editable."""
    from pptx.enum.text import PP_ALIGN as A
    shp = s.shapes.add_table(len(rows) + 1, len(headers), In(x), In(y),
                             In(w), In(h))
    tbl = shp.table
    tbl.first_row = False
    tbl.horz_banding = False
    tbl.columns[0].width = In(w - 2.34)
    for c in range(1, len(headers)):
        tbl.columns[c].width = In(0.78)
    for c, head in enumerate(headers):
        cell = tbl.cell(0, c)
        cell.text = head
        pr = cell.text_frame.paragraphs[0]
        pr.alignment = A.LEFT if c == 0 else A.CENTER
        f = pr.runs[0].font
        f.name, f.size, f.bold, f.color.rgb = FONT, Pt(9.5), True, SLATE
        cell.fill.solid()
        cell.fill.fore_color.rgb = WHITE
    for r, row in enumerate(rows, start=1):
        for c, val in enumerate(row):
            cell = tbl.cell(r, c)
            cell.text = val
            pr = cell.text_frame.paragraphs[0]
            pr.alignment = A.LEFT if c == 0 else A.CENTER
            f = pr.runs[0].font
            f.name, f.size = FONT, Pt(11 if c else 10.5)
            f.bold = bool(c)
            f.color.rgb = TERRA if c and val != "-" else (
                GREY if c else INK)
            cell.fill.solid()
            cell.fill.fore_color.rgb = WHITE
    return shp


# ---------------------------------------------------------------- slide 1
s = slide()
s.shapes.add_picture(ASSETS + "uriis.png", In(ML), In(0.38), height=In(0.88))
t = tb(s, ML + 1.05, 0.70, 5.2, 0.3)
para(t, "STUDENT BIZ INNOV CHALLENGE 2026", 11.5, GREY, bold=True, first=True)
t = tb(s, 9.55, 0.70, 2.0, 0.3)
para(t, "ORGANISED BY", 11.5, GREY, bold=True, first=True, align=PP_ALIGN.RIGHT)
s.shapes.add_picture(ASSETS + "kolaxus.png", In(11.72), In(0.62), height=In(0.36))

s.shapes.add_picture(ASSETS + "mark.png", In(ML), In(1.58), height=In(0.98))
t = tb(s, ML + 1.18, 1.52, 8.0, 1.15)
para(t, "MyTakziah", 62, INK, bold=True, first=True)

rule(s, ML, 2.92, 1.7)
t = tb(s, ML, 3.20, 8.6, 0.6)
para(t, "One death. Told to government once.", 26, TERRA, bold=True, first=True)
t = tb(s, ML, 3.92, 7.5, 0.9)
para(t, "An AI that, after a death, reads a family's documents once and files "
        "their JPN, KWSP and PERKESO claims for them.", 15, GREY, first=True,
     spacing=1.35)

s.shapes.add_picture(QR, In(10.15), In(2.82), height=In(2.38))
t = tb(s, 9.95, 5.26, 2.78, 0.4)
para(t, "Scan for the working prototype", 11, GREY, first=True,
     align=PP_ALIGN.CENTER, spacing=1.3)

rule(s, ML, 5.62, CW, 0.012, HAIR)
MEM = [
    ("round-anderson-ling.png", "Anderson Ling", "Team Leader",
     "Universiti Malaya"),
    ("round-hee-zi-jie.png", "Hee Zi Jie", "Software Development",
     "Asia Pacific University"),
    ("round-wong-xuan-rui.png", "Wong Xuan Rui", "Designer",
     "Universiti Malaya"),
    ("round-yow-li-hao.png", "Yow Li Hao", "Software Development",
     "Asia Pacific University"),
]
for i, (img, name, role, uni) in enumerate(MEM):
    x = ML + i * 3.02
    s.shapes.add_picture(ASSETS + "team/" + img, In(x), In(5.88),
                         height=In(0.66))
    t = tb(s, x + 0.80, 5.88, 2.2, 0.8)
    para(t, name, 13, INK, bold=True, first=True)
    para(t, role, 10, GREY, space_before=3, spacing=1.25)
    para(t, uni, 10, GREY, spacing=1.25)

note(s, "20 SECONDS. Do not read the slide.\n\n"
        "\"Good afternoon. We are Team Survive, and this is MyTakziah.\n"
        "When someone dies in Malaysia, the family has to tell the government "
        "the same thing over and over. MyTakziah lets them tell it once.\"\n\n"
        "Point at the QR: \"That code takes you to our working prototype, and "
        "we have printed it for each of you.\"\n\n"
        "Then move on. Do not introduce all four names one by one.")

# ---------------------------------------------------------------- slide 2
s = slide()
header(s, "1. The Problem", 2, "Malaysia is ageing. The paperwork\n"
                               "after a death has not changed.")
points(s, [
    ("8.4 per cent of Malaysians are now 65 or over, up from 8.0 per cent a "
     "year earlier.",
     "That is roughly 2.7 million people. 198,992 people died in Malaysia in "
     "2024, and the median age at death is 69."),
    ("Three agencies then ask that family for the same five things, "
     "separately.",
     "JPN, PERKESO and KWSP each demand the same core information again, on "
     "three different forms, and mostly in person with original documents."),
    ("Two of the three agencies enforce deadlines they do not fully publish.",
     "The person left holding that paperwork is usually an older widow or "
     "widower. Miss the EPF window and the RM2,500 is gone."),
], top=2.80, width=CW * 0.655, gap=1.20, lead_size=14.2,
       body_size=11.2)
matrix_table(s, 8.72, 2.86, 3.81, 2.55,
             [["Identity of the deceased", "o", "o", "o"],
              ["Identity of the claimant", "o", "o", "o"],
              ["The fact of the death", "o", "o", "o"],
              ["Relationship to the deceased", "-", "o", "o"],
              ["Payment destination", "-", "o", "o"]],
             ["The same information, demanded again", "JPN", "KWSP", "PERKESO"])
t = tb(s, 8.72, 5.50, 3.81, 0.55)
para(t, "Three different forms: JPN.LM02, KWSP 9KM (AHL), and Borang 34 or "
        "Borang 24 and 26.", 10, GREY, first=True, spacing=1.3)
strip(s, 6.40, "Parliament recorded 72,929 late death registrations between "
                "2003 and 2014, and named funeral rites and religious "
                "obligations as the reason families could not meet the "
                "deadline. Published accounts describe survivors collecting "
                "benefits more than twenty years late, simply because nobody "
                "told them.")
note(s, "60 SECONDS. This slide earns the room. Slow down.\n\n"
        "\"A father dies. The family goes to JPN to register the death. Then "
        "to PERKESO. Then to KWSP. Three agencies, three forms, and every one "
        "of them asks for the same five things.\n\n"
        "The government already knows he died. The family told one part of "
        "it. It just did not tell the other two.\n\n"
        "Two hundred thousand deaths a year, and the person holding the "
        "folder is usually a widow in her late sixties.\n\n"
        "And the clock is running. EPF gives you six months or the RM2,500 "
        "is gone. JPN's boundary is the seventh day. PERKESO does not publish "
        "its deadline at all.\n\n"
        "This is not us guessing. Parliament counted 72,929 late "
        "registrations and blamed funeral rites. They extended one deadline "
        "at one agency. They never touched the journey.\"")

# ---------------------------------------------------------------- slide 3
s = slide()
header(s, "2. Our Solution", 3, "Provide once. We prepare every claim.")
points(s, [
    ("Provide once.",
     "Identity, proof of death, relationship and bank details, entered a "
     "single time."),
    ("Every entitlement, with the government's own rule printed beside it.",
     "Ranked by deadline, soonest first, never by value."),
    ("Submitted, receipted and tracked. Never approved.",
     "The agency always keeps the decision. We prepare and file. We never "
     "decide who qualifies."),
], top=2.80, width=CW * 0.545, gap=1.19, body_size=14)
s.shapes.add_picture(ASSETS + "live-step2.png", In(7.86), In(2.70),
                     width=In(4.20))
s.shapes.add_picture(ASSETS + "live-step4.png", In(7.86), In(5.14),
                     width=In(4.20))
t = tb(s, 7.86, 6.62, 4.20, 0.6)
para(t, "Live prototype: evidence given once, then consent taken separately "
        "for each agency. mytakziah.vercel.app", 10.5, GREY, first=True, spacing=1.3)
note(s, "60 SECONDS. Hold up the printed QR card as you start.\n\n"
        "\"So here is what we built.\n\n"
        "The family gives us the information once. Who died, who they are, "
        "how they are related, where the money should go.\n\n"
        "We then show every benefit they are owed, with the government's own "
        "rule printed next to it, ranked by whichever deadline runs out "
        "first.\n\n"
        "And then we fill in all three claims for them.\n\n"
        "One line matters more than everything else on this slide. We never "
        "say approved. The agency always decides. We prepare and we file. "
        "That is what makes this safe to put in front of a grieving "
        "family.\"")

# ---------------------------------------------------------------- slide 4
s = slide()
header(s, "3. What Makes It Innovative", 4,
       "Not a chatbot. A filing engine with\nthe rulebook attached.")
points(s, [
    ("JPN has already built a chatbot. It still cannot reach KWSP.",
     "A chatbot tells you what to do. MyTakziah does it. That is the whole "
     "difference, and it is the reason this has not been solved already."),
    ("Deadline first, and every rule cited to its source.",
     "Where an agency publishes no deadline, we say so on the screen instead "
     "of guessing. Nothing we show a family is invented."),
    ("Routed to the family's own rites.",
     "The checklist a Muslim family sees is not the one a Chinese or Hindu "
     "family sees. Religion changes the documents, the timing and the "
     "services that matter."),
], top=2.80, width=CW * 0.655, gap=1.20, lead_size=14.5,
       body_size=11.8)
s.shapes.add_picture(ASSETS + "live-step3.png", In(8.72), In(3.02),
                     width=In(3.81))
t = tb(s, 8.72, 5.22, 3.81, 0.8)
para(t, "Every entitlement carries its deadline, its source link, and a plain "
        "statement of what the agency does not publish.", 10, GREY, first=True,
     spacing=1.3)
strip(s, 6.48, "Other countries built the notification half of this. The UK's "
                "Tell Us Once tells departments someone has died; it does not "
                "file the claim or protect the deadline, and none of it is "
                "built for JPN, KWSP and PERKESO. Our advantage is not the "
                "technology. It is that we read these three agencies' forms.",
      TERRA, 12.5)
note(s, "60 SECONDS. This is the slide that separates you from the field.\n\n"
        "\"Every judge is going to think this is a chatbot. It is not.\n\n"
        "JPN already has a chatbot. It is live on their website and it "
        "answers JPN questions well. It still cannot tell KWSP anything. A "
        "chatbot tells you what to do. We do it.\n\n"
        "Second, we lead with the deadline, not the money, and every rule we "
        "show cites the government page it came from. Where an agency "
        "publishes nothing, we say so.\n\n"
        "Third, and this is the part people underestimate, the rites matter. "
        "A Muslim family, a Chinese family and a Hindu family do not face the "
        "same week. The system follows the family.\n\n"
        "Our edge is not AI. Everyone has AI. Our edge is that we actually "
        "read the forms.\"")

# ---------------------------------------------------------------- slide 5
s = slide()
header(s, "4. How It Works and Feasibility", 5,
       "Built already. Honest about what\nis not built yet.")
points(s, [
    ("A working prototype is live today, not a mockup.",
     "The full journey runs end to end. The judges can scan it from their "
     "seats."),
    ("The national rails already exist.",
     "MyDigital ID has almost 10 million accounts. MyGDX already connects "
     "81 agencies. We are not asking anyone to build new plumbing."),
    ("Agency integration is proposed, not proven.",
     "Until an agency connects we print the completed forms and the family "
     "carries them. They still know what they are owed and which deadline "
     "is first."),
], top=2.80, width=CW * 0.62, gap=1.18, body_size=14)
s.shapes.add_picture(ASSETS + "live-step5.png", In(8.30), In(2.95),
                     width=In(4.20))
t = tb(s, 8.30, 5.42, 4.20, 0.5)
para(t, "Three forms prepared from one set of evidence, and one timeline",
     11.5, GREY, first=True, spacing=1.25)
strip(s, 6.44, "Where we are today: a working prototype and rules verified "
                "against primary government documents.   Next: a minimum "
                "viable product, then one community pilot.")
note(s, "55 SECONDS. Feasibility is scored. Honesty wins it.\n\n"
        "\"This is not a concept. The prototype is live right now and you can "
        "scan it from your seat.\n\n"
        "We are also not asking the country to build anything new. "
        "MyDigital ID already has nearly ten million accounts. MyGDX already "
        "moves data between eighty one agencies. The rails exist. The "
        "bereavement path was just never built on them.\n\n"
        "Now, the honest part. We do not have agency integration yet. It is "
        "proposed, not proven.\n\n"
        "But even if no agency ever signs, we print the forms and the family "
        "carries them. They still know the benefits exist, they still know "
        "which deadline is first, and they still arrive with the right "
        "documents. Those three things are what actually cost families "
        "money.\"")

# ---------------------------------------------------------------- slide 6
s = slide()
header(s, "5. Impact and Potential", 6,
       "Three sides benefit. One of them can pay.")
points(s, [
    ("Families use it free. Always.",
     "They are the people least able to pay, at the worst possible moment. "
     "Charging them would defeat the point."),
    ("Government gets complete, on time, correctly filled submissions.",
     "Fewer rejected forms, fewer repeat counter visits, and deaths "
     "registered inside the window rather than years late."),
    ("Service providers pay to reach families at the moment of need.",
     "Funeral, memorial and estate services already spend to find these "
     "families. A listing and referral model funds the platform without ever "
     "charging the bereaved."),
], top=2.80, width=CW * 0.655, gap=1.20, lead_size=14.5,
       body_size=11.8)
for i, (med, cap) in enumerate([("med-protection.png", "Families"),
                                ("med-registry.png", "Government"),
                                ("med-savings.png", "Providers")]):
    mx = 8.80 + i * 1.30
    s.shapes.add_picture(ASSETS + med, In(mx), In(2.90), height=In(1.10))
    t = tb(s, mx - 0.12, 4.06, 1.34, 0.3)
    para(t, cap, 11, INK, bold=True, first=True, align=PP_ALIGN.CENTER)
s.shapes.add_picture(ASSETS + "sdg-16.png", In(8.80), In(4.62), height=In(0.66))
s.shapes.add_picture(ASSETS + "sdg-1.png", In(9.54), In(4.62), height=In(0.66))
t = tb(s, 10.34, 4.62, 2.20, 0.75)
para(t, "Accountable institutions, and social protection that actually "
        "reaches the people entitled to it.", 10, GREY, first=True,
     spacing=1.3)
strip(s, 6.48, "RM3.24 billion moved through EPF death withdrawals in 2024, "
                "across 85,532 cases.   We will measure families served, "
                "agencies connected and providers onboarded.   Malaysia "
                "first, then the same problem across Southeast Asia.", SLATE,
      13)
note(s, "60 SECONDS. Economic impact is a scored category. Be concrete.\n\n"
        "\"Three groups benefit, and that is what makes this a business and "
        "not a charity.\n\n"
        "Families use it free, always. They are the least able to pay and the "
        "worst possible people to charge.\n\n"
        "Government gets submissions that are complete and on time. That is "
        "fewer rejected forms and fewer people queueing twice.\n\n"
        "And the third group pays. Funeral homes, memorial parks and estate "
        "services are already spending money to reach these families. We put "
        "them in front of the family at the moment of need, with the family's "
        "consent, and that funds the platform.\n\n"
        "The money is already moving. Three point two four billion ringgit "
        "of EPF death withdrawals in 2024 alone.\"\n\n"
        "IF ASKED FOR RATES: say the model is a listing and referral fee and "
        "that we are testing pricing in the pilot. Do not invent a number.")

# ---------------------------------------------------------------- slide 7
s = slide()
header(s, "6. Why Us, and What We Are Asking For", 7,
       "We already built it. We need the doors.")
points(s, [
    ("Two computer science students and two actuarial science students.",
     "The eligibility rules, contribution tests and deadlines behind this are "
     "actuarial work, and we did that ourselves rather than guessing at it."),
    ("Every number here is verified against primary government documents.",
     "Where we could not verify something we left it off the slide. We would "
     "rather be narrow than wrong."),
    ("What we need is not mainly money. It is access.",
     "We do not reach families by advertising. We reach one community, "
     "through the people already trusted with a death there. Introduce us to "
     "one, and to service providers."),
], top=2.80, width=CW * 0.74, gap=1.22)
s.shapes.add_picture(QR, In(10.78), In(2.82), width=In(1.86))
t = tb(s, 10.55, 4.86, 2.35, 0.6)
para(t, "mytakziah.vercel.app", 11.5, GREY, first=True, align=PP_ALIGN.CENTER)
rule(s, ML, 6.46, CW, 0.012, HAIR)
t = tb(s, ML, 6.70, CW, 0.55)
para(t, "One death. Told to government once.", 24, TERRA, bold=True,
     first=True)
note(s, "45 SECONDS. Land it, then stop talking.\n\n"
        "\"Why us. We are two computer science students and two actuarial "
        "science students. The rules and the deadlines behind this are "
        "actuarial work, and we did it ourselves.\n\n"
        "Every number you have seen today is checked against the "
        "government's own documents. Where we could not verify something, we "
        "took it off the slide.\n\n"
        "And what we are asking for is not mainly money. It is access. One "
        "community to pilot with, and introductions to service providers. "
        "Give us that and we will have real families using this within a "
        "month.\n\n"
        "One death. Told to government once. Thank you.\"\n\n"
        "Then stop. Do not keep talking into the Q and A.")

out = "docs/submission/deck/mytakziah-final-pitch.pptx"
prs.save(out)
print("saved", out, len(prs.slides.__iter__.__self__._sldIdLst), "slides")
