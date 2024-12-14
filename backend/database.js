const mongoose = require("mongoose");

require("dotenv").config();

const user = process.env.DB_USER; //variaveis de ambiente, n sobem pro github, cria as suas conforme vc precisar
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;
const appName = process.env.DB_APPNAME;

async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority&appName=${appName}`
    ); //string de conexao ao banco de dados na nuvem, o cluster

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "connection error: "));

    if (db.readyState === 1) {
      console.log("Connected to the database.");
    }
  } catch (error) {
    console.log("catch:", error);
  }
}
module.exports = {
  connect,
};
