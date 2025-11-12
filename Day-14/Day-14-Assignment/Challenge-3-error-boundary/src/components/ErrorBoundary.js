// ErrorBoundary component
// Catches runtime rendering errors in child components and displays a fallback UI

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // Tracks whether an error has occurred
    this.state = { hasError: false, errorInfo: null };
  }

  // Triggered when an error is thrown by a child component
  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true };
  }

  // Logs detailed error info (bonus: mock API logging)
  componentDidCatch(error, info) {
    console.error("🛑 Error caught by ErrorBoundary:", error);
    console.log(" Component stack trace:", info.componentStack);

    // Bonus: simulate sending error data to a monitoring API
    setTimeout(() => {
      console.log(" Sent error details to mock monitoring API");
    }, 500);

    this.setState({ errorInfo: info });
  }

  render() {
    // Render fallback UI if error occurred
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger mt-4 text-center">
          <h4>⚠️ Something went wrong!</h4>
          <p>Please try again later or contact support.</p>
        </div>
      );
    }

    // Otherwise render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;
