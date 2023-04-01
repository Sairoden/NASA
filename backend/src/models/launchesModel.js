const mongoose = require("mongoose");
const { Planet } = require("../models/planetsModel");

const launchesSchema = new mongoose.Schema({
  flightNumber: { type: Number, required: true },
  launchDate: { type: Date, required: true },
  mission: { type: String, required: true, minLength: 3, maxLength: 255 },
  rocket: { type: String, required: true, minLength: 3, maxLength: 255 },
  target: { type: String, required: true, minLength: 3, maxLength: 255 },
  customers: {
    type: [String],
    required: true,
    default: ["ZTM", "NASA"],
  },
  upcoming: { type: Boolean, required: true, default: true },
  success: { type: Boolean, required: true, default: true },
});

const Launch = mongoose.model("Launch", launchesSchema);

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-62 f",
  customers: ["NASA", "ZTM"],
  upcoming: true,
  success: true,
};

const saveLaunch = async launch => {
  try {
    const planet = await Planet.findOne({ keplerName: launch.target });

    if (!planet) throw new Error("No matching planet was found");

    await Launch.findOneAndUpdate(
      {
        flightNumber: launch.flightNumber,
      },
      launch,
      {
        upsert: true,
      }
    );
  } catch (err) {
    console.log(err);
  }
};

saveLaunch(launch);

module.exports = {
  Launch,
};

// 30 ka na
