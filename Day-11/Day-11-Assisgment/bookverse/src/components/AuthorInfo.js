import React, { Component } from "react";
import PropTypes from "prop-types";

// Displays detailed author information once a book is selected
class AuthorInfo extends Component {
  // Lifecycle method: runs once when the component mounts
  componentDidMount() {
    console.log(`Author data loaded for ${this.props.authorName}`);
  }

  render() {
    const { authorName, bio, topBooks } = this.props;
    return (
      <div className="card border-info shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-info">{authorName}</h5>
          <p className="card-text">{bio}</p>
          <h6>Top 3 Books:</h6>
          <ul>
            {topBooks.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

// Prop validation to ensure proper data is passed
AuthorInfo.propTypes = {
  authorName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  topBooks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AuthorInfo;
