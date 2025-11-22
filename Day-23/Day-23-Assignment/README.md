## The API is fully versioned under the path /api/v1.

## It supports the usual CRUD operations on an in memory list of courses.

## It uses express validator to make sure that both name and duration are present when a course is created or updated.

## It also uses express rate limit so that a single client can only send five requests per minute. After that, the server replies with a simple JSON error saying that there are too many requests.

## How to run this project:

1. Open a terminal inside the project folder.
2. Run npm install to download all dependencies.
3. Run npm start to start the server.
4. Use any API client like Postman or curl to hit the endpoints under http://localhost:3000/api/v1/courses.

## Examples of endpoints you can try:

GET /api/v1/courses
GET /api/v1/courses/:id
POST /api/v1/courses
PUT /api/v1/courses/:id
DELETE /api/v1/courses/:id

## All error responses are sent as a simple JSON object with an error field so that the client can handle them easily.
