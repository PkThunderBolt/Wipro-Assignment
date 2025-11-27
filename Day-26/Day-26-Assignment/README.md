## Project Description

--This project contains three backend mini tasks that demonstrate database connectivity and API usage in Node.js. --The tasks are based on SQL, MongoDB, and Sequelize ORM. Each task follows a user story and expected output.

## User Story 1: MySQL Integration

- In this task, the goal is to store course information into a MySQL database. The mysql2 package was used to connect Node.js with MySQL. A database named courses_db was created manually, and a courses table was added. After the connection was established, new course data was inserted through Node.js. If the insertion was successful, the console displayed a confirmation message with the course ID. This proved that MySQL connectivity and data insertion worked properly.

## User Story 2: MongoDB Integration

In this task, the goal was to store users and enrollment information in MongoDB and retrieve it. The project used Mongoose to create two models: User and Enrollment. The Enrollment document stored a reference id of a User. A GET API was made to fetch enrollment details. While reading the enrollment information, the user details were also shown at the same time. This happened because populate was used in the query. The expected result was successfully achieved when enrollment data displayed the course name and also showed the student information attached to it. This proved that MongoDB relationships worked correctly.

## User Story 3: Sequelize ORM Relationship

In this task, the goal was to use Sequelize ORM to connect Node.js with MySQL and implement a one to many relationship. There were two models created, Instructor and Course. One instructor could have many courses, so an association was established inside Sequelize. After that, an API was created to return all courses that belong to a specific instructor. When the GET API was tested, it successfully showed the instructor name along with all of the courses handled by that instructor. This output confirmed that the ORM relationship and query were working correctly.

## Conclusion

All three user stories were successfully completed. The project demonstrates backend skills such as SQL and MongoDB integration, ORM based relationships, and reading data through APIs. These challenges help in building real world backend development experience.

## File Structure

Day-26-Assignment/
│
├── UserStory-1/
│ ├── package.json
│ ├── db.js
│ ├── insertCourse.js
│  
│  
│
├── UserStory-2-MongoDB/
│ ├── package.json
│ ├── db.js
│ ├── server.js
│ ├── routes.js
│ ├── models/
│ │ ├── User.js
│ │ └── Enrollment.js
│  
│
└── UserStory-3-Sequelize/
├── package.json
├── .env
├── server.js
├── config/
│ └── sequelize.js
├── models/
│ ├── Instructor.js
│ ├── Course.js
│ └── index.js
├── controllers/
│ └── instructorController.js
├── routes/
└── instructorRoutes.js

## Installation commands for all 3 user stories.

# UserStory 1 (MySQL Integration)

npm init -y
npm install mysql2

# UserStory 2 (MongoDB Integration)

npm init -y
npm install express mongoose

# UserStory 3 (Sequelize ORM with MySQL + .env)

npm init -y
npm install express sequelize mysql2 dotenv
