import React from "react";

// Higher Order Component to show a spinner while loading
const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent(props) {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000); // fake delay
      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return (
        <div className="text-center mt-5">
          <div className="spinner-border " role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
