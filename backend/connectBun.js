const sqllite = require("sqlite3")
const db = new sqllite.Database("my.db");

const execute = async (db, sql) => {
    return new Promise((resolve, reject) => {
      db.exec(sql, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  };

module.exports = execute;