const mongoose = require("mongoose");

const technicalSchema = new mongoose.Schema(
  {
    length: Number,
    breadth: Number,
    draught: Number,
    grossTonnage: Number,
    netTonnage: Number,
    deadweight: Number,
    engineType: String,
    power: Number,
    speed: Number,
    cargoCapacity: String,
    fuelType: String,
  },
  { _id: false }
);

const certificateSchema = new mongoose.Schema(
  {
    name: String,
    issuer: String,
    issuedDate: Date,
    expiryDate: Date,
    status: String,
  },
  { _id: false }
);

const inspectionSchema = new mongoose.Schema(
  {
    date: Date,
    port: String,
    authority: String,
    deficiencies: Number,
    result: String,
  },
  { _id: false }
);

const incidentSchema = new mongoose.Schema(
  {
    type: String,
    date: Date,
    location: String,
    severity: String,
    description: String,
  },
  { _id: false }
);

const voyageHistorySchema = new mongoose.Schema(
  {
    departure: String,
    arrival: String,
    departureDate: Date,
    arrivalDate: Date,
    duration: String,
  },
  { _id: false }
);

const shipSchema = new mongoose.Schema({
  name: String,
  imo: String,
  mmsi: String,
  type: String,
  flag: String,
  built: Number,
  status: String,
  owner: String,
  currentLocation: String,
  destination: String,
  lastUpdate: Date,
  technical: technicalSchema,
  certificates: [certificateSchema],
  inspections: [inspectionSchema],
  incidents: [incidentSchema],
  voyageHistory: [voyageHistorySchema],
});

const Ship = mongoose.model("Ship", shipSchema);

module.exports = Ship;
