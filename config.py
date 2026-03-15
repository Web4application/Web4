from pypdf import PdfReader, PdfWriter

reader = PdfReader("input.pdf")
writer = PdfWriter()

# 1. Standardize to 720p Web Size
WEB_WIDTH, WEB_HEIGHT = 1280, 720

for page in reader.pages:
    page.scale_to_size(WEB_WIDTH, WEB_HEIGHT)
    page.compress_content_streams() # Compress text/drawings
    writer.add_page(page)

# 2. STRIP METADATA: Set to None to remove all hidden info
writer.add_metadata({}) # Clears existing entries

# 3. Final Optimization: Deduplicate images/fonts
writer.compress_identical_objects(remove_identicals=True, remove_orphans=True)

with open("web_asset.pdf", "wb") as f:
    writer.write(f)
