# mod-4-project
# AI Usage Documentation Syed [https://docs.google.com/document/d/18JndVkIdMHzNLDg_CNJuUa8G4wlsNuqhlzAYQd82ohw/edit?usp=sharing]
# AI Usage Documentation Hannah [https://docs.google.com/document/d/1cmWnu9BOil5HSDvnkxZ_kmkcUeGApS7zC8WfwFlEEgU/edit?usp=sharing]
# Presentation [https://docs.google.com/presentation/d/1sbuY7oEAvEeycXVkX39-Yre0vyNzfN05UpbmRnNm37A/edit?usp=sharing]



# Star Wars Character Explorer
# Project Summary

Star Wars Character Explorer is an interactive web application that allows users to explore characters from the Star Wars universe. The application fetches character data from an external API and displays detailed information in a clean, dossier-style modal interface. Users can search characters, view additional character details, and load more results dynamically.

# Live Deployment
https://syed-hannah-mls.github.io/mod-4-project/

# Team Members
This project was completed as a group project. Partners name: Hannah Desrosiers

# API Used
This project uses the Star Wars API (SWAPI).

# Endpoints Used
https://swapi.dev/api/people/ — Retrieves a list of characters
https://swapi.dev/api/people/{id}/ — Retrieves a single character’s detailed information

The application also utilizes pagination handling through the next property in the API response to fetch all character data.

# Features
## MVP Features

Display a list of Star Wars characters fetched from an external API

Search characters by name

Click on a character to view detailed information in a modal


Stretch Features

Load More button to progressively reveal additional characters

Animated UI interactions such as hover scaling effects

Pagination handling to retrieve all characters from the API


# Setup Instructions:

To run this project locally:

npm install
npm run dev


Tech Stack: HTML, CSS, JavaScript, Vite, Fetch API, DOM Manipulation

