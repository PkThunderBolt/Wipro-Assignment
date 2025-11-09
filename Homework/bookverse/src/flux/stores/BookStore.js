import AppDispatcher from "../dispatcher/AppDispatcher";
import { BookActionTypes } from "../actions/BookActions";

class BookStore {
  constructor() {
    // Store all books in this array
    this.books = [];
    // Keep track of all functions (listeners) that should run when data changes
    this.listeners = [];

    // Register this store with the dispatcher to listen for any actions
    AppDispatcher.register(this.handleActions.bind(this));
  }

  // Handle incoming actions from the dispatcher
  handleActions(action) {
    switch (action.type) {
      // When a book is added, push it into the books array and notify listeners
      case BookActionTypes.ADD_BOOK:
        this.books.push(action.payload);
        this.emitChange(); // Notify components about data update
        break;

      // Default case for unknown actions
      default:
        break;
    }
  }

  // Allow components to listen for data changes
  addChangeListener(listener) {
    this.listeners.push(listener);
  }

  // Remove a specific listener (cleanup when component unmounts)
  removeChangeListener(listener) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  // Notify all listeners (components) that the store has updated data
  emitChange() {
    this.listeners.forEach((listener) => listener(this.books));
  }

  // Return the current list of books
  getAllBooks() {
    return this.books;
  }
}

// Create and export a single shared instance of the store
const bookStore = new BookStore();
export default bookStore;
