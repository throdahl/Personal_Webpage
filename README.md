# Personal_Webpage

This repository contains a personal webpage built with React and TypeScript for the front end and Python/Flask for the back end. It is hosted on my own raspberry pi

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Overview

This project is a personal website that includes:

-**Homepage:** A welcome with breif information about the site.
-**About Me:** A page with information about me.
-**Resume** A page with my embeded resume in pdf format.
-**Raycaster Demo:** a demo showcasing a simple raycasting engine I created with SDL3 and the standard C++ library.
-**Links:** To the github repo and my LinkedIn.

## Tech Stack

-**Frontend:** React and TypeScript.
-**Backend:** Python and Flask.
- **Other:** WebAssembly, Emscripten, SDL3, HTML, CSS

## Installation

-**Download:**
'''
git clone https://github.com/yourusername/Personal_Webpage.git
cd Personal_Webpage
'''

-**Frontend:**
'''
cd frontend
npm install
npm start
'''
-**Backend:**
'''
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
python app.py
'''

## Usage

-**Homepage:** Navigate to / to view the welcome page.
-**About Me:** Navigate to /about for more details about me.
-**Resume**  Navigate to /resume to view my resume. 
-**Raycaster Demo:** Click on the "Raycaster Demo" link in the navigation bar. This will open the demo from /raycaster/sdl-min.html

## Project Structure

Personal_Webpage/
├── frontend/
|   ├── public/
│   |   ├── raycaster/
│   |   │   ├── sdl-min.html   // Raycaster demo HTML file
│   |   │   ├── sdl-min.js     // Raycaster demo JavaScript file
│   |   │   └── ...            // Other assets for the demo
|   │   ├── resume.pdf         // Your resume PDF
|   │   ├── index.html         // Main HTML file for React app
│   │   └── *.png/ico          // icons and logos
|   ├── src/
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.tsx
│   ├── package.json
│   └── README.md
└── backend/
    └── server.py