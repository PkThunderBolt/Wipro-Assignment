import React, { useEffect, useState } from "react";

// This higher order component takes a wrapped component and injects a windowWidth prop into it.
function withWindowWidth(WrappedComponent) {
  // This inner component contains the logic that listens to window resize events.
  return function WindowWidthWrapper(props) {
    const [windowWidth, setWindowWidth] = useState(
      typeof window !== "undefined" ? window.innerWidth : 0
    );

    useEffect(() => {
      // This handler updates the state whenever the window size changes.
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // This cleanup removes the event listener when the component is unmounted.
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    // Here we pass all received props plus the new windowWidth prop to the wrapped component.
    return <WrappedComponent {...props} windowWidth={windowWidth} />;
  };
}

export default withWindowWidth;
