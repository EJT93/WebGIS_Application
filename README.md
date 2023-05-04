# Static WebGIS Application

This is a simple static WebGIS application using the ArcGIS JavaScript API to display a map and interact with utility data sourced from ArcGIS Server REST services.

![Screenshot of the application](./img/screenshot.png)

## Features

- Display a basemap using the ArcGIS JavaScript API
- Add layers from ArcGIS Server REST services
- Custom zoom controls
- Containerized using Docker (optional)

## Prerequisites

- A modern web browser (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge)
- A code editor (e.g., Visual Studio Code, Sublime Text, Atom)
- Docker (optional, for containerization)

## Installation

1. Clone this repository to your local machine:

git clone https://github.com/yourusername/your-repository.git
cd your-repository


2. Open the `index.html` file in your web browser to view the application.

Alternatively, you can set up a local web server (e.g., using Node.js `http-server` or Python's `SimpleHTTPServer`) to serve the application files.

## Usage

Interact with the map using standard map controls (pan, zoom, etc.). Use the custom zoom controls on the top-right corner of the map to zoom in and out.

## Containerization (Optional)

To run the application in a Docker container, follow these steps:

1. Install Docker on your machine.

2. Build the Docker image:

docker build -t your-image-name .

3. Run the Docker container:

docker run --name your-container-name -p 8080:80 -d your-image-name


4. Access the application at `http://localhost:8080`.