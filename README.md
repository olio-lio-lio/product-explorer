# Product Explorer

## About the Project

Product Explorer is a web application that displays products retrieved from the [DummyJSON REST API](https://dummyjson.com/products).

Users can browse products, search by product name, and filter products by category.

## Features

- Displays products with images, titles, prices, and descriptions.
- Searches products by title.
- Filters products by category.
- Allows search and category filters to work together.
- Displays a message when no products match the search.
- Includes error handling if the API request fails.
- Responsive layout for desktop, tablet, and mobile screens.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- AJAX using the Fetch API
- DummyJSON REST API

## Project Structure

- `index.html` — The structure of the web page.
- `style.css` — The styling and layout.
- `script.js` — Fetches and displays products and handles filtering.

## API Used

The application retrieves product data from:

https://dummyjson.com/products

No API key is required.

## Live Demo

[Open Product Explorer](https://productexplorerr.netlify.app/)

## How to Run the Project Locally

1. Download or clone the project repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in your browser, or use the Live Server extension.
4. Make sure you have an internet connection so the application can retrieve product data from the API.

## Author

Created as part of a college assignment on building an AJAX application using a REST API.