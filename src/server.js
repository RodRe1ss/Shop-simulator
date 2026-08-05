require("dotenv").config();

const express = require("express");
const playerRoutes = require("./routes/playerRoutes");
const shopRoutes = require("./routes/shopRoutes");

const app = express();

app.use(express.json());

app.use("/players", playerRoutes);
app.use("/shop", shopRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
