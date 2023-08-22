const mongoose = require("mongoose");

require("dotenv").config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.egyqkth.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("MongoDB Connect");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
