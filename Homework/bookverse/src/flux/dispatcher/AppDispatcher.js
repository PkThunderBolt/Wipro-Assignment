// Simple custom dispatcher for managing actions in our Flux pattern
class Dispatcher {
  constructor() {
    this.callbacks = [];
  }

  // Register store callbacks
  register(callback) {
    this.callbacks.push(callback);
  }

  // Dispatch an action to all registered stores
  dispatch(action) {
    this.callbacks.forEach((callback) => callback(action));
  }
}

// Export a single instance of Dispatcher
const AppDispatcher = new Dispatcher();
export default AppDispatcher;
