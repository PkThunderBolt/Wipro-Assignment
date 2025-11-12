// Registers a service worker for PWA support
export function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => console.log("Service Worker Registered"))
        .catch((error) => console.error("Service Worker Error:", error));
    });
  }
}
