"""Render the five October 24 editorial diagrams (requires Pillow)."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1] / "public/blog/covers"
FONT_DIR = Path("C:/Windows/Fonts")


def font(size, bold=False):
    return ImageFont.truetype(str(FONT_DIR / ("arialbd.ttf" if bold else "arial.ttf")), size)


def cover(slug, category, title, subtitle, kind, accent):
    im = Image.new("RGB", (1600, 900), "#F3F5FA")
    d = ImageDraw.Draw(im)
    ink, grey = "#081528", "#526178"
    d.rounded_rectangle((48, 48, 1552, 852), 36, fill="#FFFFFF")
    d.text((100, 92), "PIXEL2TECH  /  FIELD NOTES", font=font(22, True), fill=grey)
    d.text((100, 160), category.upper(), font=font(20, True), fill=accent)
    for j, line in enumerate(title):
        d.text((100, 218 + j * 72), line, font=font(62, True), fill=ink)
    d.text((100, 390), subtitle, font=font(25), fill=grey)

    def box(bounds, fill="#F0F4FA", outline=None, radius=20):
        d.rounded_rectangle(bounds, radius, fill=fill, outline=outline, width=2)

    def label(x, y, text, size=24, color=ink, bold=False):
        d.text((x, y), text, font=font(size, bold), fill=color)

    def arrow(x, y, width=56):
        d.line((x, y, x+width, y), fill=accent, width=4)
        d.polygon([(x+width, y), (x+width-12, y-8), (x+width-12, y+8)], fill=accent)

    if kind == "product":
        box((100, 470, 710, 780))
        box((124, 494, 365, 756), fill="#DBEAFE")
        d.ellipse((178, 530, 310, 665), fill=accent)
        label(160, 705, "PRODUCT", 20, grey, True)
        label(395, 510, "A clear choice", 25, bold=True)
        for j, text in enumerate(["Size", "Colour", "Availability"]):
            label(395, 565+j*42, text, 21, grey)
        box((395, 707, 680, 756), fill=ink, radius=12)
        label(450, 718, "Add to cart", 21, "#FFFFFF", True)
        arrow(745, 625, 70)
        label(870, 500, "ASK BEFORE YOU REDESIGN", 20, accent, True)
        for j, text in enumerate(["What is missing?", "Which states matter?", "How will we check it?"]):
            label(870, 560+j*65, text, 30, ink, True)
    elif kind == "clips":
        box((100, 500, 600, 750), fill=ink)
        label(128, 524, "ONE EPISODE", 21, "#FFFFFF", True)
        for j in range(26):
            h = 20 + ((j*31)%90)
            d.rounded_rectangle((130+j*17, 640-h//2, 138+j*17, 640+h//2), 4, fill=accent)
        arrow(640, 625, 75)
        for j, text in enumerate(["One idea", "Clear context", "Useful edit"]):
            x=770+j*220
            box((x, 475, x+180, 785), fill="#EDE9FE")
            box((x+20, 495, x+160, 675), fill=ink)
            d.ellipse((x+55, 530, x+125, 600), fill=accent)
            d.line((x+40, 637, x+140, 637), fill="#FFFFFF", width=5)
            label(x+15, 718, text, 22, ink, True)
    elif kind == "demo":
        for j, (head, detail) in enumerate([("01 / THE TASK", "Show the problem"), ("02 / THE PRODUCT", "Follow one workflow"), ("03 / THE RESULT", "Make the next step clear")]):
            x=100+j*480
            box((x, 485, x+420, 770))
            label(x+24, 513, head, 20, accent, True)
            box((x+24, 560, x+396, 680), fill=ink)
            if j == 1:
                d.polygon([(x+185, 585), (x+185, 655), (x+245, 620)], fill=accent)
            else:
                for k in range(3):
                    d.line((x+48, 587+k*28, x+310-k*35, 587+k*28), fill="#CBD5E1", width=6)
            label(x+24, 715, detail, 24, ink, True)
            if j < 2: arrow(x+432, 625, 35)
    else:
        stages = [("CUSTOMER", "The need"), ("WEBSITE", "The next step"), ("TEAM", "The handover")] if kind == "brief" else [("FORM", "Validate"), ("CRM", "Save once"), ("OWNER", "Assign & confirm")]
        for j,(head,detail) in enumerate(stages):
            x=100+j*490
            box((x, 495, x+410, 735), fill=ink if j==1 else "#EFF5FB")
            col="#FFFFFF" if j==1 else ink
            label(x+30, 530, head, 22, accent, True)
            label(x+30, 595, detail, 32, col, True)
            d.line((x+30, 675, x+345, 675), fill=accent, width=5)
            if j<2: arrow(x+430, 615, 42)
        label(100, 775, "Define the journey. Agree the checks. Keep ownership clear.", 23, grey)
    ROOT.mkdir(parents=True, exist_ok=True)
    im.save(ROOT / (slug+".png"), optimize=True)


cover("shopify-product-page-redesign-brief", "Shopify", ["Product pages that", "answer buying questions."], "Content, choices and a purchase path you can check.", "product", "#087E8B")
cover("website-project-brief-for-service-business", "Web development", ["A better website", "starts with a clear brief."], "Plan the customer journey before counting the pages.", "brief", "#2563EB")
cover("saas-product-demo-video-brief", "Video production", ["Show the workflow.", "Make the product clear."], "A practical production brief for a SaaS demo video.", "demo", "#7C3AED")
cover("podcast-to-short-form-video-workflow", "Video editing", ["One conversation.", "Useful short-form stories."], "Select complete ideas. Preserve the speaker’s meaning.", "clips", "#A855F7")
cover("contact-form-crm-integration-brief", "Automation & CRM", ["From a new enquiry", "to a clear handover."], "Plan validation, duplicate handling and recovery.", "crm", "#0891B2")
