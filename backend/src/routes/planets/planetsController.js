const { planets } = require("../../models/planetsModel");

exports.getAllPlanets = (req, res) => {
  return res.status(200).send(planets);
};
