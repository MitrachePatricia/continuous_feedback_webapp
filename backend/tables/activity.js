const sqlite3 = require("sqlite3");
const execute = require("../connectBun.js")

const main = async () => {
  const db = new sqlite3.Database("my.db");
  try {
    await execute(
      db,
      `CREATE TABLE IF NOT EXISTS activity (
        _id INTEGER PRIMARY KEY,
        activityname TEXT NOT NULL,
        activityDescription TEXT NOT NULL,
        startTime TEXT NOT NULL,
        endTime TEXT NOT NULL,
        activityCode TEXT NOT NULL,
        createdBy TEXT NOT NULL)`
    );
  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  }
};

module.exports = main;