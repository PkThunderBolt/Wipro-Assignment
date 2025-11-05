Mock Practice Assessment - Front-End & Database Integration

Project Structure:
/MockPracticeAssessment/
│-- events.json (Mock data for User Story 2)
│-- README.txt (This file)
│
│-- userstory1/ (Event Management Homepage - HTML, CSS, Bootstrap)
│ ├── index.html
│ ├── style.css
│
│-- userstory2/ (Event Dashboard - JavaScript + ES6, Fetch API)
│ ├── dashboard.html
│ ├── script.js
│ ├── style.css
│
│-- userstory3/ (TypeScript Customer Registration Module)
│ ├── CustomerModule.ts (Source code)
│ ├── CustomerModule.js (Compiled JavaScript)
│ ├── CustomerModule.d.ts (Type definitions)
│ ├── tsconfig.json
│ ├── demo.ts (Usage demonstration)
│
│-- database/ (Bonus Section: Database Integration - Node.js + SQLite)
│ ├── db.js (CRUD functions)
│ ├── demo.js (CRUD demonstration)
│ ├── package.json
│ ├── events.db (SQLite database file, created after running demo.js)
│
│-- screenshots/ (Placeholder for required screenshots)

Execution Requirements:

1. User Story 1 (Homepage):
   - Open 'userstory1/index.html' in any modern web browser.

2. User Story 2 (Dashboard):
   - Open 'userstory2/dashboard.html' in any modern web browser.
   - The script 'userstory2/script.js' uses the Fetch API to load data from '../events.json'.

3. User Story 3 (TypeScript Module):
   - The TypeScript file 'userstory3/CustomerModule.ts' has been compiled to 'CustomerModule.js' using 'tsc'.
   - To run the demo:
     - Ensure Node.js is installed.
     - Navigate to the 'userstory3' directory.
     - Run: 'node CustomerModule.js' (Note: The demo.ts file is for demonstration purposes and is not included in the final compiled JS for the module itself, but the module is ready to be imported).

4. Bonus Section (Database Integration):
   - Dependencies: Node.js and the 'sqlite3' package.
   - To run the CRUD demonstration:
     - Navigate to the 'database' directory.
     - Run: 'npm install' (to install sqlite3).
     - Run: 'node demo.js'
     - This will create the 'events.db' file and demonstrate all CRUD operations for Events, Customers, and Registrations, including error handling.

Dependencies:
- Web: Bootstrap 5.3 (CDN), Standard HTML/CSS/JavaScript (ES6)
- TypeScript: TypeScript compiler (tsc)
- Database (Bonus): Node.js, sqlite3 npm package.
