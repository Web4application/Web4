cmake_minimum_required(VERSION 3.10)
project(PdfWebAssets)

find_package(Python3 REQUIRED COMPONENTS Interpreter)

set(INPUT_PDF "${CMAKE_CURRENT_SOURCE_DIR}/assets/input.pdf")
set(OUTPUT_PDF "${CMAKE_CURRENT_SOURCE_DIR}/static/web_asset.pdf")

# Automation: Run script during build
add_custom_command(
    OUTPUT ${OUTPUT_PDF}
    COMMAND ${Python3_EXECUTABLE} ${CMAKE_CURRENT_SOURCE_DIR}/scripts/standardize.py ${INPUT_PDF} ${OUTPUT_PDF}
    DEPENDS ${INPUT_PDF} ${CMAKE_CURRENT_SOURCE_DIR}/scripts/standardize.py
)

add_custom_target(process_pdfs ALL DEPENDS ${OUTPUT_PDF})
