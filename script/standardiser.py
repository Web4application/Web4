import sys
from pypdf import PdfReader, PdfWriter

def process_pdf(input_file, output_file):
    reader = PdfReader(input_file)
    writer = PdfWriter()
    
    # Target 720p Web Size (Points)
    W, H = 1280, 720

    for page in reader.pages:
        # Scale content and all boxes (Media, Crop, etc.)
        page.scale_to_size(W, H)
        page.compress_content_streams() # Lossless compression
        writer.add_page(page)

    # Remove all metadata for web privacy
    writer.add_metadata({}) 
    
    # Deduplicate objects (images/fonts) for speed
    writer.compress_identical_objects(remove_identicals=True, remove_orphans=True)

    with open(output_file, "wb") as f:
        writer.write(f)

if __name__ == "__main__":
    if len(sys.argv) > 2:
        process_pdf(sys.argv[1], sys.argv[2])
