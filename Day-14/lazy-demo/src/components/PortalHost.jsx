import React from "react";

export default function PortalHost({ children }) {
  return (
    <>
      {children}
      <div id="portal-root"></div>
    </>
  );
}
