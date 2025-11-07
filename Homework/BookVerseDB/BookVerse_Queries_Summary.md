# BookVerseDB - CRUD & Query Summary

## User Story 2 — CRUD Operations

### 1. Insert New User

```js
db.users.insertOne({
  _id: ObjectId(),
  name: "David Miller",
  email: "david@example.com",
  joinDate: new Date("2024-04-12"),
});
```

### 2. Insert New Book

```js
db.books.insertOne({
  _id: ObjectId(),
  title: "Nightflyers",
  genre: "Science Fiction",
  publicationYear: 1980,
  authorId: grrMartinId,
  ratings: [],
});
```

### 3. Retrieve Books of a Specific Genre

```js
db.books.find({ genre: "Science Fiction" });
```

### 4. Update Book Publication Year

```js
db.books.updateOne(
  { title: "Nightflyers" },
  { $set: { publicationYear: 1985 } }
);
```

### 5. Delete a User

```js
db.users.deleteOne({ name: "Charlie Brown" });
```

### 6. Add Rating Using $push

```js
db.books.updateOne(
  { title: "Kafka on the Shore" },
  {
    $push: {
      ratings: {
        user: "David Miller",
        score: 5,
        comment: "Mind-bending and unforgettable.",
      },
    },
  }
);
```

---

## User Story 3 — Query Operations

### 1. Retrieve All Books Published After 2015

```js
db.books.find({ publicationYear: { $gt: 2015 } });
```

### 2. Find Authors Who Wrote Fantasy Books

```js
db.authors.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "_id",
      foreignField: "authorId",
      as: "writtenBooks",
    },
  },
  {
    $match: { "writtenBooks.genre": "Fantasy" },
  },
]);
```

### 3. Retrieve Users Joined in Last 6 Months

```js
db.users.find({
  joinDate: {
    $gte: new Date(new Date().setMonth(new Date().getMonth() - 6)),
  },
});
```

### 4. Find Books with Average Rating > 4

```js
db.books.aggregate([
  { $unwind: "$ratings" },
  { $group: { _id: "$title", averageRating: { $avg: "$ratings.score" } } },
  { $match: { averageRating: { $gt: 4 } } },
]);
```
