const Ship = require("../model/shipModel.js");

async function fetchShips(req, res) {
  try {
    const { searchTerm, searchType, type, flag, status } = req.query;
    let filter = {};

    if (searchTerm && searchType) {
      // Use regex for case-insensitive partial match
      filter[searchType] = { $regex: searchTerm, $options: "i" };
    }
    if (type) filter.type = type;
    if (flag) filter.flag = flag;
    if (status) filter.status = status;

    const ships = await Ship.find(filter);
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
