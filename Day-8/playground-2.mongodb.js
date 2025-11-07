use("BookVerseDB");

// db.authors.insertMany([
//   {
//     _id: ObjectId(),
//     name: "J.K. Rowling",
//     nationality: "British",
//     birthYear: 1965
//   },
//   {
//     _id: ObjectId(),
//     name: "George R.R. Martin",
//     nationality: "American",
//     birthYear: 1948
//   },
//   {
//     _id: ObjectId(),
//     name: "Haruki Murakami",
//     nationality: "Japanese",
//     birthYear: 1949
//   }
// ]);

// const jkRowlingId = db.authors.findOne({ name: "J.K. Rowling" })._id;
// const grrMartinId = db.authors.findOne({ name: "George R.R. Martin" })._id;
// const murakamiId = db.authors.findOne({ name: "Haruki Murakami" })._id;

// db.users.insertMany([
//   {
//     _id: ObjectId(),
//     name: "Alice Johnson",
//     email: "alice@example.com",
//     joinDate: new Date("2023-03-10")
//   },
//   {
//     _id: ObjectId(),
//     name: "Bob Smith",
//     email: "bob@example.com",
//     joinDate: new Date("2023-07-25")
//   },
//   {
//     _id: ObjectId(),
//     name: "Charlie Brown",
//     email: "charlie@example.com",
//     joinDate: new Date("2024-01-05")
//   }
// ]);

// const alice = "Alice Johnson";
// const bob = "Bob Smith";
// const charlie = "Charlie Brown";

// db.books.insertMany([
//   {
//     _id: ObjectId(),
//     title: "Harry Potter and the Philosopher's Stone",
//     genre: "Fantasy",
//     publicationYear: 1997,
//     authorId: jkRowlingId,
//     ratings: [
//       {
//         user: alice,
//         score: 5,
//         comment: "Magical start to a legendary series!",
//       },
//       { user: bob, score: 4, comment: "Loved the imagination and characters." },
//     ],
//   },
//   {
//     _id: ObjectId(),
//     title: "Harry Potter and the Chamber of Secrets",
//     genre: "Fantasy",
//     publicationYear: 1998,
//     authorId: jkRowlingId,
//     ratings: [
//       { user: charlie, score: 5, comment: "Even better than the first one!" },
//     ],
//   },
//   {
//     _id: ObjectId(),
//     title: "A Game of Thrones",
//     genre: "Fantasy",
//     publicationYear: 1996,
//     authorId: grrMartinId,
//     ratings: [
//       { user: bob, score: 5, comment: "Epic world-building and storytelling." },
//       { user: alice, score: 4, comment: "Too many characters, but thrilling!" },
//     ],
//   },
//   {
//     _id: ObjectId(),
//     title: "Kafka on the Shore",
//     genre: "Magical Realism",
//     publicationYear: 2002,
//     authorId: murakamiId,
//     ratings: [
//       { user: alice, score: 5, comment: "Deep and surreal masterpiece." },
//     ],
//   },
//   {
//     _id: ObjectId(),
//     title: "Norwegian Wood",
//     genre: "Romance",
//     publicationYear: 1987,
//     authorId: murakamiId,
//     ratings: [
//       { user: charlie, score: 4, comment: "Beautifully melancholic story." },
//     ],
//   },
// ]);

//Insert one data into books or users

db.authors.insertOne({
  _id: ObjectId(),
  name: "Isaac Asimov",
  nationality: "Russian-American",
  birthYear: 1920,
});

const asimovId = db.authors.findOne({ name: "Isaac Asimov" })._id;

db.books.insertOne({
  _id: ObjectId(),
  title: "Foundation",
  genre: "Science Fiction",
  publicationYear: 1951,
  authorId: asimovId,
  ratings: [],
});

// db.users.insertOne({
//   _id: ObjectId(),
//   name: "David Miller",
//   email: "david@example.com",
//   joinDate: new Date("2024-04-12"),
// });

// 2. Retrieve all books of the genre “Science Fiction”

db.books.find({ genre: "Science Fiction" });
