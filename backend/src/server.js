const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");
const { loadPlanetsData } = require("./models/planetsModel");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 8000;

(async function () {
  mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log("Connected to mongoDB");
    })
    .catch(err => {
      console.log("Error connecting to mongoDB", err);
    });

  await loadPlanetsData();

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
  });
})();

// database - 23 ka na
