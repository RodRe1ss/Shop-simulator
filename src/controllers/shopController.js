const shopServices = require("../services/shopServices");

const create = async (req, res) => {
  try {
    const { playerId, name } = req.body;

    const shop = await shopServices.createShop(playerId, name);

    res.status(201).json(shop);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const shop = await shopServices.getShopById(req.params.id);

    if (!shop) {
      res.status(404).json({
        error: "Player not found",
      });
    }

    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  create,
  getById,
};
