// Index Creation
// Create indexes for optimization

db.books.createIndex({ genre: 1 });
db.books.createIndex({ authorId: 1 });
db.books.createIndex({ "ratings.score": 1 });

// Compare query performance using the explain("executionStats") command before and
// after creating indexes.
db.books.find({ genre: "Fantasy" }).explain("executionStats");

// Drop an unnecessary index using dropIndex() and note its impact.
db.books.getIndexes();

db.books.dropIndex({ "ratings.score": 1 });

// 1. Calculate average rating per book

db.books.aggregate([
  { $unwind: "$ratings" },
  {
    $group: {
      _id: "$title",
      averageRating: { $avg: "$ratings.score" },
    },
  },
]);

// 2. Retrieve top 3 highest-rated books

db.books.aggregate([
  { $unwind: "$ratings" },
  {
    $group: {
      _id: "$title",
      averageRating: { $avg: "$ratings.score" },
    },
  },
  { $sort: { averageRating: -1 } },
  { $limit: 3 },
]);

// 3. Count the number of books per genre

db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      totalBooks: { $sum: 1 },
    },
  },
]);

// 4. Find authors who have more than 2 books published

db.books.aggregate([
  {
    $group: {
      _id: "$authorId",
      bookCount: { $sum: 1 },
    },
  },
  { $match: { bookCount: { $gt: 2 } } },
  {
    $lookup: {
      from: "authors",
      localField: "_id",
      foreignField: "_id",
      as: "authorDetails",
    },
  },
  { $unwind: "$authorDetails" },
  {
    $project: {
      _id: 0,
      authorName: "$authorDetails.name",
      bookCount: 1,
    },
  },
]);

// 5. Total reward points (sum of ratings) received by each author

db.books.aggregate([
  { $unwind: "$ratings" },
  {
    $group: {
      _id: "$authorId",
      totalRewardPoints: { $sum: "$ratings.score" },
    },
  },
  {
    $lookup: {
      from: "authors",
      localField: "_id",
      foreignField: "_id",
      as: "authorDetails",
    },
  },
  { $unwind: "$authorDetails" },
  {
    $project: {
      _id: 0,
      authorName: "$authorDetails.name",
      totalRewardPoints: 1,
    },
  },
]);
