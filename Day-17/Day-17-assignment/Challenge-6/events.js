const EventEmitter = require("events");

// Create event emitter instance
const eventEmitter = new EventEmitter();

// Listener for userLoggedIn
eventEmitter.on("userLoggedIn", (user) => {
  console.log(`User ${user} logged in.`);
});

// Listener for userLoggedOut
eventEmitter.on("userLoggedOut", (user) => {
  console.log(`User ${user} logged out.`);
});

// Bonus: sessionExpired event
eventEmitter.on("sessionExpired", (user) => {
  console.log(`Session expired for ${user}.`);
});

// Emit events
eventEmitter.emit("userLoggedIn", "John");
eventEmitter.emit("userLoggedOut", "John");

// Emit sessionExpired after 5 seconds
setTimeout(() => {
  eventEmitter.emit("sessionExpired", "John");
}, 5000);
