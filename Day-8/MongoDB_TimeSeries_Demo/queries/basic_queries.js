// Switch to database
use("SmartEnergyMonitoring");

// Create a time-series collection
db.createCollection("GreenPulseEnergy", {
  timeseries: {
    timeField: "timestamp",
    metaField: "meterId",
    granularity: "hours",
  },
});

// Import data (run in Mongo shell or Compass import tool)
// mongoimport --db SmartEnergyMonitoring --collection GreenPulseEnergy --file ./data/energy_readings.json --jsonArray

// Check sample data
db.GreenPulseEnergy.find().limit(5);
