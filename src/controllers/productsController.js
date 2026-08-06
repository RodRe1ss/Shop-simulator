const productServices = require("../services/productsServices");

const getAll = async (req, res) => {
  try {
    const products = await productsServices.getProducts();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const product = await productsServices.getProductById();

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

module.exports = {
  getAll,
  getById,
};
