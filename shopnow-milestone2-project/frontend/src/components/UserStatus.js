import React from "react";
import PropTypes from "prop-types";

// This class based component shows how lifecycle methods work in React.
class UserStatus extends React.Component {
  constructor(props) {
    super(props);
    // This state holds the current message that will be displayed to the user.
    this.state = {
      message: "Fetching user status...",
    };
  }

  // This lifecycle method runs once after the component has been added to the page.
  componentDidMount() {
    // This timeout simulates an API call that takes two seconds to complete.
    setTimeout(() => {
      this.setState({ message: "Active User" });
    }, 2000);
  }

  render() {
    const { userId } = this.props;

    const boxStyle = {
      border: "1px solid #cccccc",
      padding: "12px",
      borderRadius: "4px",
      maxWidth: "320px",
    };

    return (
      <div style={boxStyle}>
        <h2>User Status</h2>
        <p>User id: {userId}</p>
        <p>Status message: {this.state.message}</p>
      </div>
    );
  }
}

// These PropTypes make sure that userId is always passed as a number.
UserStatus.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default UserStatus;
