## Mock-2 React Assessment Project

Travel Booking Platform (TravelMock)

## Overview

This project is a React-based Travel Booking Platform created for the Mock-2 assessment. It demonstrates the use of React components, routing, state management, form handling with Formik and Yup, context API, and Progressive Web App (PWA) capabilities.

## Project Structure

The project contains three main user stories and one bonus section.

## User Story 1: Homepage and Destination Showcase

Implements JSX, Props, State, and Event Handling.
Displays multiple destination cards with uniform image sizes and hover effects.
Allows adding or removing destinations from a wishlist.

## User Story 2: Travel Packages Management

Uses React Router for navigation between Home, Packages, and Booking pages.
Fetches data from json-server (db.json) using Axios.
Displays packages dynamically with a Book Now button.
On clicking Book Now, navigates to the Booking Form with the selected package pre-filled.

## User Story 3: Booking Form and State Handling

Implements Formik and Yup for form validation and submission.
Uses Context API for managing global booking data.
Reads package ID from the URL and auto-fills it in the booking form.
Displays selected package details before submission.

## Progressive Web App (PWA)

Includes manifest.json and service-worker.js files for offline functionality.
Allows the app to be installed and used like a native app.
Caches main files and pages for offline support.

## Setup Instructions

1. Extract the zip file and open the project folder.
2. Install dependencies using the command:
   npm install
3. Start the json-server to serve package data:
   npm run json-server
4. Run the React application:
   npm start
5. The app will open at http://localhost:3000 or another available port.

## Folder Structure

/public
-index.html
-manifest.json
-service-worker.js
/src
-App.js
-index.js
-styles.css
-userstory1 (Homepage components)
-userstory2 (Packages listing)
-userstory3 (Booking form)
-db.json (package data)
-README.txt (this file)

## PWA Test

To test offline mode:

1. Open the app in Chrome.
2. Go to Developer Tools → Application → Service Workers.
3. Set the network to Offline and reload the page.
   The app should load from the cache.

## Author

Prashant Kumar
Email: pkprashant566@gmail.com
