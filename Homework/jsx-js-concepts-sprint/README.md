# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### About Project

src/
│
├── components/
│ ├── ConstructorDemo.tsx # Demonstrates JS constructors and classes
│ ├── FilterControls.tsx # Handles filtering and mapping of numbers
│ ├── HoistingDemo.tsx # Shows variable and function hoisting
│ ├── Logger.tsx # Logs numbers using forEach
│ └── NumberList.tsx # Displays a list of numbers
│
├── types/
│ └── NumberItem.ts # TypeScript interface for number objects
│
├── App.tsx # Root component combining all sections
├── App.css # Styling for different concept sections
└── index.tsx # Entry point for React app

### Features Explained

1️⃣ Number List

-Displays all numbers from the state using React’s list rendering (map()).

2️⃣ Filter & Map Controls

-Allows filtering (even numbers, odd numbers) and doubling values using JavaScript’s array methods.

3️⃣ Logger

-Uses forEach() to print all numbers to the browser console — a simple but effective demonstration of iteration.

4️⃣ Variable & Function Hoisting

-Illustrates how JavaScript moves variable and function declarations to the top of their scope during execution.

5️⃣ Constructor Demo

-Explains how constructor functions and class syntax work in JavaScript — including instance creation and property initialization.

### How to Run the Project

Clone this repository

-git clone https://github.com/pkthunder/jsx-js-concepts-sprint.git
-cd jsx-js-concepts-sprint

Install dependencies
-npm install

Start the app
-npm start

Open in browser
http://localhost:3000
