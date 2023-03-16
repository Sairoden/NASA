const dotenv = require("dotenv");
const app = require("./app");
const { loadPlanetsData } = require("./models/planetsModel");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 8000;

(async function () {
  await loadPlanetsData();

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
  });
})();
