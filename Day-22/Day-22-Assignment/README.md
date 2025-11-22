# Day 22 Project - Forms, Database, and Authentication

This project demonstrates a full stack implementation of registration, login, and role-based access control using Node.js, Express, MongoDB, Passport.js, and EJS.

---

## Project Overview

I created a system where users can register and login. Both normal users and admins use the same login page. After login:

- Admin users are redirected to the admin dashboard.
- Normal users are redirected to the user dashboard.
- Access to protected routes is based on the role.
- Invalid login attempts show an error message.

Passwords are hashed using bcrypt before saving to the database. Sessions are used for authentication, and Passport.js handles login logic.

---

## File Structure

day22-project
|
├── server.js # Main entry point of the server
├── package.json # Project dependencies
├── .env # Environment variables (Mongo URI, session secret)
|
├── models
│ └── User.js # Mongoose schema for users
|
├── routes
│ ├── registerRoutes.js # Handles registration routes
│ ├── authRoutes.js # Handles login routes
│ ├── adminRoutes.js # Admin protected routes
│ └── userRoutes.js # User protected routes
|
├── controllers
│ ├── registerController.js # Handles registration logic
│ ├── authController.js # Handles login logic
│ └── adminController.js # Handles admin dashboard
|
├── views
│ ├── register.ejs # Registration page
│ └── login.ejs # Login page
|
├── config
│ └── passport.js # Passport configuration

---

## How It Works

1. **Registration**  
   I created a registration page where a user can enter their name, username, password, and role.  
   Passwords are hashed using bcrypt before saving in MongoDB.  
   On successful registration, a confirmation message is displayed.

2. **Login**  
   Both users and admins use the same login page.  
   If the username or password is incorrect, an error message is shown.  
   After successful login:

   - If the role is admin, the user is redirected to the admin dashboard.
   - If the role is user, the user is redirected to the user dashboard.

3. **Role-Based Access Control (RBAC)**  
   I added middleware to protect routes:

   - Only authenticated admins can access `/admin`.
   - Only authenticated normal users can access `/dashboard`.
   - Unauthorized access displays "Access Denied" messages.

4. **Admin Creation**  
   Admin users can be created manually by registering with role = admin.  
   Optional code exists to auto-create a default admin using `/create-admin`.

5. **Sessions & Authentication**  
   Passport.js manages authentication with sessions.  
   `serializeUser` and `deserializeUser` are used to store user sessions.  
   `req.isAuthenticated()` is used to check if a user is logged in before accessing protected routes.

---

## Installation and Running

1. Clone the project.
2. Run `npm install` to install dependencies.
   # Initialize npm (if not done already)
   npm init -y

# Install Express framework

npm install express

# Install MongoDB and Mongoose for database

npm install mongoose

# Install Passport.js and Local strategy for authentication

npm install passport passport-local

# Install bcryptjs for password hashing

npm install bcryptjs

# Install express-session for session management

npm install express-session

# Install body-parser to parse form data (optional since express has it built-in)

npm install body-parser

# Install EJS for rendering pages

npm install ejs

# Install dotenv to use environment variables from .env file

npm install dotenv

3. Create a `.env` file with:
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   SESSION_SECRET=your_secret_key
   ***
4. Start the server:

5. Open the browser and go to:
   http://localhost:4000/register -----># To register a new user

http://localhost:4000/login----------># To login

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Passport.js for authentication
- bcryptjs for password hashing
- express-session for session management
- EJS for rendering pages

---

## Summary

This project demonstrates a complete authentication system with:

- Form handling and data validation
- Database integration and saving user data
- Secure login with password hashing
- Role-based access control for admin and user dashboards
- Proper error handling and messages
- Single login page for all users

It is structured for maintainability with separate folders for routes, controllers, models, and views.
