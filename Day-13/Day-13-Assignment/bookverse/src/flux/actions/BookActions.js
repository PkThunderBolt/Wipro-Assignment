import AppDispatcher from "../dispatcher/AppDispatcher";

// Define the type of actions related to books
export const BookActionTypes = {
  ADD_BOOK: "ADD_BOOK",
};

// Define the actions that can be performed (like adding a book)
export const BookActions = {
  // Function to add a new book and send it to the dispatcher
  addBook(book) {
    AppDispatcher.dispatch({
      type: BookActionTypes.ADD_BOOK, // Action type
      payload: book, // Data sent with the action
    });
  },
};
