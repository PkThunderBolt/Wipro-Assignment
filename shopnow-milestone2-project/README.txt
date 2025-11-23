================================================================================
SHOPNOW MILESTONE 2 PROJECT README
================================================================================

This project contains both frontend and backend applications for solving the
Mock 2 milestone assessment. The project demonstrates concepts from React,
Node, Express, Formik, Yup, express-validator, JWT authentication, and Node
core modules.

--------------------------------------------------------------------------------
HOW TO RUN FRONTEND (REACT)
--------------------------------------------------------------------------------
1. Open your terminal and go inside the frontend folder:
       cd shopnow-milestone2-project/frontend

2. Install dependencies:
       npm install

3. Start the frontend development server:
       npm start

4. Open the browser and visit the following URL:
       http://localhost:3000

--------------------------------------------------------------------------------
HOW TO RUN BACKEND (EXPRESS + JWT + VALIDATION)
--------------------------------------------------------------------------------
1. Open a new terminal and go inside the backend folder:
       cd shopnow-milestone2-project/backend

2. Install dependencies:
       npm install

3. Start the server:
       npm start

4. Backend runs on:
       http://localhost:4000

--------------------------------------------------------------------------------
FRONTEND USER STORIES MAPPING
--------------------------------------------------------------------------------
Q1 - ProductCard component prints title, price and discount using props
     located at frontend/src/components/ProductCard.js

Q2 - Login with one controlled and one uncontrolled input using ref
     located at frontend/src/components/LoginControlledUncontrolled.js

Q3 - Class-based component with componentDidMount and PropTypes validation
     located at frontend/src/components/UserStatus.js

Q4 - Dynamic routing and fetch API using useParams
     located at frontend/src/components/UserDetails.js

Q5 - Higher Order Component to detect window width, passed as props
     located at frontend/src/components/withWindowWidth.js
     with demo component WindowWidthDemo.js

Q6 - Form login using Formik with Yup validation schema
     located at frontend/src/components/FormikLogin.js

--------------------------------------------------------------------------------
BACKEND USER STORIES MAPPING
--------------------------------------------------------------------------------
Q7 - Node core modules http, fs, path used to create log file and server
     located at backend/coreServer.js

Q8 - Demonstration of callback, Promise and async/await async patterns
     located at backend/asyncPatterns.js

Q9 - Express routing, JSON response, middleware, express-validator
     located at backend/server.js (products GET and POST with validation)

Q10 - JWT authentication login and protected dashboard route
      located at backend/server.js (login creates token, dashboard verifies)

--------------------------------------------------------------------------------
TESTING GUIDELINES
--------------------------------------------------------------------------------
To test Q2: open http://localhost:3000/login-controlled and submit the form

To test Q3: open http://localhost:3000/user-status and wait 2 seconds

To test Q4: run backend and open a URL like:
     http://localhost:3000/users/1
data will be fetched from backend API: http://localhost:4000/users/1

To test Q5: resize the browser window at:
     http://localhost:3000/window-width

To test Q6: try wrong inputs on form at:
     http://localhost:3000/formik-login

To test Q7: run
     node coreServer.js
check created file backend/logs/app.log
open http://localhost:5000 to see JSON response

To test Q8: run
     node asyncPatterns.js
observe callback, Promise, async/await output in terminal

To test Q9 and Q10: use Postman or Thunder Client
POST http://localhost:4000/login to receive token
GET http://localhost:4000/dashboard using Bearer token

--------------------------------------------------------------------------------
END OF README
================================================================================

## Author

--Developed by Prashant Kumar