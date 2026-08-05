const express = require("express");
const shopController = require("../controllers/shopController");

const router = express.Router();

router.post("/", shopController.create);

router.get("/:id", shopController.getById);

module.exports = router;
