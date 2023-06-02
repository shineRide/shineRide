const conn = require("../db/index");

module.exports = {
  add: (callback, name, email) => {
    const sql = `INSERT INTO workers ( worker_name, worker_email) VALUES ("${name}", "${email}")`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  get: (callback) => {
    const sql = `SELECT * FROM workers`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  getOne: (callback, worker_id) => {
    const sql = `SELECT * FROM workers WHERE worker_id = "${worker_id}"`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  delete: (callback, worker_id) => {
    const sql = `DELETE FROM workers WHERE worker_id = "${worker_id}"`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  update: (callback, worker_id, name, email) => {
    const sql = `UPDATE workers SET worker_name = "${name}", worker_email = "${email}" WHERE worker_id = "${worker_id}"`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
};
