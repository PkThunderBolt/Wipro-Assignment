import React, { Component } from "react";
import BookCard from "./BookCard";
import AuthorInfo from "./AuthorInfo";
import SearchBar from "./SearchBar";

class BookList extends Component {
  constructor(props) {
    super(props);

    // Initial state holds book data, selected author, and search query
    this.state = {
      books: [
        {
          id: 1,
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          price: 1079,
          bio: "English writer, poet, philologist, and academic known for creating Middle-earth.",
          topBooks: ["The Hobbit", "The Lord of the Rings", "The Silmarillion"],
        },
        {
          id: 2,
          title: "1984",
          author: "George Orwell",
          price: 871,
          bio: "English novelist, essayist, and critic best known for his dystopian works.",
          topBooks: ["1984", "Animal Farm", "Homage to Catalonia"],
        },
        {
          id: 3,
          title: "Dune",
          author: "Frank Herbert",
          price: 1245,
          bio: "American science fiction author known for the Dune saga exploring politics and ecology.",
          topBooks: ["Dune", "Dune Messiah", "Children of Dune"],
        },
        {
          id: 4,
          title: "Pride and Prejudice",
          author: "Jane Austen",
          price: 699,
          bio: "English novelist known for her realism, biting irony, and critique of social class.",
          topBooks: ["Pride and Prejudice", "Emma", "Sense and Sensibility"],
        },
        {
          id: 5,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          price: 849,
          bio: "American novelist best known for her classic novel on racial injustice in the Deep South.",
          topBooks: ["To Kill a Mockingbird", "Go Set a Watchman"],
        },
        {
          id: 6,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          price: 799,
          bio: "American novelist and short-story writer known for depicting the Jazz Age.",
          topBooks: [
            "The Great Gatsby",
            "Tender Is the Night",
            "This Side of Paradise",
          ],
        },
      ],
      selectedAuthor: null,
      searchQuery: "",
    };

    // Create a ref for the search input field (uncontrolled component)
    this.searchInputRef = React.createRef();
  }

  // Focus the search input when the button is clicked
  focusSearchInput = () => {
    this.searchInputRef.current.focus();
  };

  // Handle book card click → show author info
  handleBookClick = (book) => {
    this.setState({ selectedAuthor: book });
  };

  // Update search query when user types
  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { books, selectedAuthor, searchQuery } = this.state;

    // Filter books dynamically by title or author (case-insensitive)
    const filteredBooks = books.filter((book) => {
      const query = searchQuery.toLowerCase();
      return (
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
      );
    });

    return (
      <div>
        {/* Search bar component */}
        <SearchBar
          searchInputRef={this.searchInputRef}
          onFocusClick={this.focusSearchInput}
          onSearchChange={this.handleSearchChange}
          searchQuery={searchQuery}
        />

        {/* Book grid layout */}
        <div className="row justify-content-center">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div className="col-md-4 mb-4" key={book.id}>
                <BookCard
                  title={book.title}
                  author={book.author}
                  price={book.price}
                  onClick={() => this.handleBookClick(book)}
                />
              </div>
            ))
          ) : (
            <p className="text-muted text-center mt-3">
              No books found matching “{searchQuery}”.
            </p>
          )}
        </div>

        {/* Author info card appears only when a book is clicked */}
        {selectedAuthor && (
          <div className="mt-4">
            <AuthorInfo
              authorName={selectedAuthor.author}
              bio={selectedAuthor.bio}
              topBooks={selectedAuthor.topBooks}
            />
          </div>
        )}
      </div>
    );
  }
}

export default BookList;
