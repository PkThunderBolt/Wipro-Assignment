// src/dispatcher/Dispatcher.js
class Dispatcher {
  constructor() {
    this._callbacks = {};
    this._id = 0;
  }

  register(callback) {
    const id = "cb_" + this._id++;
    this._callbacks[id] = callback;
    return id;
  }

  dispatch(action) {
    for (let id in this._callbacks) {
      this._callbacks[id](action);
    }
  }
}

export default new Dispatcher();
