const sqlite3 = require("sqlite3");
const execute = require("../connectBun.js")

const main = async () => {
  const db = new sqlite3.Database("my.db");
  try {
    await execute(
      db,
      `CREATE TABLE IF NOT EXISTS users (
        _id INTEGER PRIMARY KEY,
        userName TEXT NOT NULL,
        userMail TEXT NOT NULL,
        userPassword TEXT NOT NULL,
        userRole TEXT NOT NULL,
        activities TEXT[])`
    );
  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  }
};

module.exports = main;