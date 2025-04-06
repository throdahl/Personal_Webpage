# Install script for directory: /home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/build/web")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Is this installation the result of a crosscompile?
if(NOT DEFINED CMAKE_CROSSCOMPILING)
  set(CMAKE_CROSSCOMPILING "TRUE")
endif()

# Set default install directory permissions.
if(NOT DEFINED CMAKE_OBJDUMP)
  set(CMAKE_OBJDUMP "/usr/bin/objdump")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include/harfbuzz" TYPE FILE FILES
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-aat-layout.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-aat.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-blob.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-buffer.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-common.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-cplusplus.hh"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-deprecated.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-draw.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-face.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-font.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-map.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-ot-color.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-ot-deprecated.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-ot-font.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-ot-layout.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-ot-math.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-ot-meta.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-ot-metrics.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-ot-name.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-ot-shape.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-ot-var.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-ot.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-paint.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-set.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-shape-plan.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-shape.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-style.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-unicode.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-version.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb.h"
    "/home/jack/Documents/TypeScript/Personal_Webpage/raycaster/SDL_ttf/external/harfbuzz/src/hb-ft.h"
    )
endif()

