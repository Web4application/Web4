cmake_minimum_required(VERSION 3.15)
project(Web4 LANGUAGES C)

set(CMAKE_C_STANDARD 11)
set(CMAKE_C_STANDARD_REQUIRED ON)

option(BUILD_DEBUG "Build in debug mode" OFF)

if(BUILD_DEBUG)
    set(CMAKE_BUILD_TYPE Debug)
    add_compile_definitions(WEB4_CORE DEBUG)
else()
    set(CMAKE_BUILD_TYPE Release)
    add_compile_definitions(WEB4_CORE NDEBUG)
endif()

# Directories
set(SRC_AI       src/ai)
set(SRC_NET      src/network)
set(SRC_UI       src/ui)
set(SRC_MEDIA    src/media)
set(SRC_CRYPTO   src/crypto)
set(SRC_WEBLIB   src/weblib)
set(SRC_MODELLIB src/modellib)
set(SRC_INIT     src/init)  # New folder for startup code

set(USER_LIB_DIR ${CMAKE_BINARY_DIR}/web4lib)
set(MODEL_STORE  ${CMAKE_BINARY_DIR}/modelstore)

# Source files
file(GLOB AI_SRCS       ${SRC_AI}/*.c)
file(GLOB NET_SRCS      ${SRC_NET}/*.c)
file(GLOB UI_SRCS       ${SRC_UI}/*.c)
file(GLOB MEDIA_SRCS    ${SRC_MEDIA}/*.c)
file(GLOB CRYPTO_SRCS   ${SRC_CRYPTO}/*.c)
file(GLOB WEBLIB_SRCS   ${SRC_WEBLIB}/*.c)
file(GLOB MODELLIB_SRCS ${SRC_MODELLIB}/*.c)
file(GLOB INIT_SRCS     ${SRC_INIT}/*.c)

set(ALL_SRCS
    ${AI_SRCS}
    ${NET_SRCS}
    ${UI_SRCS}
    ${MEDIA_SRCS}
    ${CRYPTO_SRCS}
    ${WEBLIB_SRCS}
    ${MODELLIB_SRCS}
    ${INIT_SRCS}
)

# Executable
add_executable(web4 ${ALL_SRCS})

# Include paths
include_directories(
    ${SRC_AI}
    ${SRC_NET}
    ${SRC_UI}
    ${SRC_MEDIA}
    ${SRC_CRYPTO}
    ${SRC_WEBLIB}
    ${SRC_MODELLIB}
    ${SRC_INIT}
    "C:/OpenSSL-Win64/include"
)

# Link libraries
target_link_directories(web4 PRIVATE "C:/OpenSSL-Win64/lib")
target_link_libraries(web4 PRIVATE libcrypto libssl)

# Create base folders at build time
add_custom_target(setup_dirs ALL
    COMMAND ${CMAKE_COMMAND} -E make_directory ${USER_LIB_DIR}
    COMMAND ${CMAKE_COMMAND} -E make_directory ${MODEL_STORE}
    COMMENT "Creating Web4Lib (per-user) and ModelStore (global) directories..."
)

add_dependencies(web4 setup_dirs)
