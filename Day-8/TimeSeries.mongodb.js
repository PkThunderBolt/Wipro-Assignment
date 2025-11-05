use("SmartEnergyMonitoring");

// db.createCollection("energy_readings", {
//   timeseries: {
//     timeField: "timestamp",
//     metaField: "meterId",
//     granularity: "minutes"
//   }
// });

// Inserting the data

// db.GreenPulseEnergy.insertMany([
//   { meterId: "MTR001", location: "Delhi-Office", timestamp: ISODate("2025-10-29T10:00:00Z"), energy_kWh: 3.5, temperature_C: 27 },
//   { meterId: "MTR001", location: "Delhi-Office", timestamp: ISODate("2025-10-29T11:00:00Z"), energy_kWh: 3.8, temperature_C: 28 },
//   { meterId: "MTR001", location: "Delhi-Office", timestamp: ISODate("2025-10-29T12:00:00Z"), energy_kWh: 4.2, temperature_C: 30 },
//   { meterId: "MTR002", location: "Mumbai-Plant", timestamp: ISODate("2025-10-29T10:00:00Z"), energy_kWh: 5.5, temperature_C: 32 },
//   { meterId: "MTR002", location: "Mumbai-Plant", timestamp: ISODate("2025-10-29T11:00:00Z"), energy_kWh: 6.2, temperature_C: 33 },
//   { meterId: "MTR002", location: "Mumbai-Plant", timestamp: ISODate("2025-10-29T12:00:00Z"), energy_kWh: 5.9, temperature_C: 31 }
// ]);

// print all the data
// db.GreenPulseEnergy.find().pretty();

// Retrieving all readings  for a specific meter ex mtr001
// Find the readings between two time stamps
// Finding total energy consumption per meter
// Average temperature by location ?
// Hourly energy consumption trend
// Comparing average energy usage across meters
// Detecting high usage Hours (>6hrs)
// Indexing and query optimization for
// Creating an Index on timestamp
// Compound index on Meter + timestamp

// 1. Retrieve all readings for a specific meter
// db.GreenPulseEnergy.find({ meterId: "MTR001" });

// 2. Find readings between two timestamps
// db.GreenPulseEnergy.find({
//   timestamp: {
//     $gte: ISODate("2025-10-29T10:00:00Z"),
//     $lte: ISODate("2025-10-29T12:00:00Z")
//   }
// });

// 3.Finding total energy consumption per meter
// db.GreenPulseEnergy.aggregate([
//   {
//     $group: {
//       _id: "$meterId",
//       totalEnergy_kWh: { $sum: "$energy_kWh" }
//     }
//   }
// ]);

// 4.Average temperature by location
// db.GreenPulseEnergy.aggregate([
//     {
//         $group: {
//           _id: "$location",
//           AverageTemperature: { $avg: "$temperature_C"}
//         }
//     }
// ])

// 5.Hourly energy consumption trend
db.GreenPulseEnergy.aggregate([
  {
    $group: {
      _id: {
        meterId: "$meterId",
        hour: { $hour: "$timestamp" },
      },
      totalEnergy_kWh: { $sum: "$energy_kWh" },
    },
  },
  { $sort: { "_id.hour": 1 } },
]);

// 6.Comparing average energy usage across meters
// db.GreenPulseEnergy.aggregate([
//   {
//     $group: {
//       _id: "$meterId",
//       avgEnergy_kWh: { $avg: "$energy_kWh" }
//     }
//   },
//   { $sort: { avgEnergy_kWh: -1 } }
// ]);

// 7.Detecting high usage Hours (>6hrs)

// db.GreenPulseEnergy.aggregate([
//   {
//     $match: { energy_kWh: { $gt: 6 } }
//   },
//   {
//     $project: {
//       meterId: 1,
//       timestamp: 1,
//       energy_kWh: 1,
//       _id: 0
//     }
//   }
// ]);

// 8.Indexing and query optimization for
// a.Creating an Index on timestamp
// db.GreenPulseEnergy.createIndex({ timestamp: 1 });

// b.Compound index on Meter + timestamp
// db.GreenPulseEnergy.createIndex({ meterId: 1, timestamp: 1 });

// db.GreenPulseEnergy.getIndexes();
