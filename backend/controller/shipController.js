const Ship = require("../model/shipModel.js");

async function fetchShips(req, res) {
  try {
    const ships = await Ship.find({});
    res.status(200).json(ships);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ships", error });
  }
}

async function getShipDetails(req, res) {
  const { id } = req.params;
  try {
    const ship = await Ship.findById(id);
    if (!ship) {
      return res.status(404).json({ message: "Ship not found" });
    }
    res.status(200).json(ship);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ship details", error });
  }
}

module.exports = { fetchShips, getShipDetails };
