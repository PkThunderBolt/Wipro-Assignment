import React, { useState, lazy, Suspense } from "react";
import Home from "./pages/Home";
import PureDisplay from "./components/PureDisplay";
import ErrorBoundary from "./components/ErrorBoundary";
import ModalPortal from "./components/ModalPortal";
import PortalHost from "./components/PortalHost";

// Lazy Load Heavy Page
const HeavyPage = lazy(() => import("./pages/HeavyPage"));

export default function App() {
  const [showHeavy, setShowHeavy] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <PortalHost>
      <div style={{ padding: 20 }}>
        <h1>App Examples</h1>

        <Home />

        <hr />

        <h2>Lazy Load Example:</h2>
        <button onClick={() => setShowHeavy(true)}>Load Heavy Page</button>
        {showHeavy && (
          <Suspense fallback={<p>Loading Heavy Page...</p>}>
            <HeavyPage />
          </Suspense>
        )}

        <hr />

        <h2>Pure Component Example:</h2>
        <PureDisplay value="This is Pure Component Rendering!" />

        <hr />

        <h2>Error Boundary Example:</h2>
        <ErrorBoundary>
          <button
            onClick={() => {
              throw new Error("Manual Error Triggered!");
            }}
          >
            Trigger Error
          </button>
        </ErrorBoundary>

        <hr />

        <h2>Portal (Modal) Example:</h2>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        {showModal && (
          <ModalPortal onClose={() => setShowModal(false)}>
            <h3>This modal is rendered using a Portal!</h3>
          </ModalPortal>
        )}
      </div>
    </PortalHost>
  );
}
