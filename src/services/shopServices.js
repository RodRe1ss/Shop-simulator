const shopRepository = require("../repositories/shopRepository");
const playerRepository = require("../repositories/playerRepository");

const createShop = async (playerId, name) => {
  if (!playerId) {
    throw new Error("Player ID is required");
  }

  if (!name || !name.trim()) {
    throw new Error("Shop name is required");
  }

  if (name.trim().length < 3) {
    throw new Error("Shop name must at least be 3 characters");
  }

  const player = await playerRepository.getById(playerId);

  if (!player) {
    throw new Error("Player not found");
  }

  const existingShop = await shopRepository.getByPlayerId(playerId);

  if (existingShop) {
    throw new Error("Player already owns a shopS");
  }

  return await shopRepository.create(playerId, name.trim());
};

const getShopById = async (id) => {
  return await shopRepository.getById(id);
};

module.exports = {
  createShop,
  getShopById,
};

const test = async () => {
  try {
    const created = await createShop("plyr:jwGDIxrp0COFfi5bJJxsQ", "test123");
    console.log("Created: ", created);

    const fetched = await getShopById(created.id);
    console.log("Fetched: ", fetched);
    return;
  } catch (error) {
    error.schema_name !== "public" && console.log(error);
    error.code && console.log(error.code);
    error.table_name && console.log(error.table_name);
    error.constraint_name && console.log(error.constraint_name);
    error.detail && console.log(error.detail);
    return;
  } finally {
    process.exit(0);
  }
};

// test();
