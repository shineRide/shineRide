const conn = require("../db/index");

module.exports = {
  add: (callback, name, price, duration) => {
    const sql = `INSERT INTO services (service_name, service_price, duration) VALUES ("${name}", ${price}, "${duration}")`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  getAll: (callback) => {
    const sql = `SELECT * FROM services`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  getOne: (callback, service_id) => {
    const sql = `SELECT * FROM services WHERE service_id = ${service_id}`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  delete: (callback, service_id) => {
    const sql = `DELETE FROM services WHERE service_id = ${service_id}`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  update: (callback, service_id, name, price, duration) => {
    const sql = `UPDATE services SET service_name = "${name}", service_price = ${price}, duration = "${duration}" WHERE service_id = ${service_id}`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
};
