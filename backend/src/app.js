const express = require("express");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planetsRoute");

const app = express();

// Implement CORS
app.use(cors());

// Parse JSON request
app.use(express.json());

// Routers
app.use("/api/planets", planetsRouter);

module.exports = app;
