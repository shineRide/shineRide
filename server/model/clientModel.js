const conn = require("../db/index");

module.exports = {
  add: (callback, name, email) => {
    const sql = `insert into clients (client_name,client_email) values ("${name}","${email}")`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  get: (callback) => {
    const sql = `SELECT * FROM clients  `;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  getOne: (callback, client_id) => {
    const sql = `select * from clients WHERE client_id ="${client_id}" ;`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  delete: (callback, client_id) => {
    const sql = `DELETE FROM clients WHERE client_id = "${client_id}";`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  update: (callback, client_id, name, email) => {
    const sql = `UPDATE clients SET client_name = "${name}", client_email = "${email}" WHERE client_id = "${client_id}";`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
};
