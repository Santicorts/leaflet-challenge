# leaflet-challenge

# Earthquake Visualization with Leaflet and D3.js

## Project Overview

This project visualizes recent earthquake data from the United States Geological Survey (USGS) using Leaflet and D3.js. The goal is to display the earthquake data on an interactive map, where the markers are sized according to the magnitude of the earthquake and colored based on the depth of the earthquake. The visualization provides an intuitive and interactive way to explore seismic activity.

## Features

- **Interactive Map**: Displays earthquakes on a Leaflet map.
- **Dynamic Markers**: 
  - **Size**: Represents the magnitude of the earthquake.
  - **Color**: Represents the depth of the earthquake, with a gradient from green (shallow) to red (deep).
- **Popups**: Provides detailed information about each earthquake, including location, magnitude, depth, and time.
- **Legend**: A color-coded legend to help users understand the depth scale.

## Technologies Used

- **Leaflet**: For rendering the interactive map and markers.
- **D3.js**: For loading and processing the earthquake data from the USGS.
- **HTML/CSS**: For structuring and styling the application.

## Data Source

The earthquake data is sourced from the USGS GeoJSON Feed, specifically from the following URL:
- [USGS Earthquake Data (All Earthquakes from the Past Month)](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson)

## Setup Instructions

### Prerequisites

- **Node.js and npm** (if you plan to use a local server)
- **Git** (to clone the repository)

### Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/leaflet-earthquake-visualization.git
   cd leaflet-earthquake-visualization

2. **Open the project** 

Simply open the index.html file in your browser if you’re not using a local server.

### File structure

leaflet-earthquake-visualization/
│
├── static/
│   ├── css/
│   │   └── style.css          # Contains the styling for the map and legend
│   └── js/
│       └── logic.js           # Main JavaScript file handling map and data logic
│
├── index.html                 # Main HTML file that sets up the map and includes scripts
└── README.md                  # Project documentation (this file)

### Acknowledgements

- **USGS**: For Providing the earthquake data used in this project.
- **Leaflet and D3.js**: Communities for their awesome libraries and documentation.




