const conn = require("../db/index");

module.exports = {
  add: (callback, client_id, worker_id, service_id, date) => {
    const sql = `INSERT INTO clients_has_workers (clients_client_id, workers_worker_id, services_service_id, clients_has_workers_date)
                     VALUES (${client_id}, ${worker_id}, ${service_id}, "${date}")`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  get: (callback) => {
    const sql = `SELECT * FROM clients_has_workers`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  getOne: (callback, client_id, worker_id, service_id) => {
    const sql = `SELECT * FROM clients_has_workers
                     WHERE clients_client_id = ${client_id} AND workers_worker_id = ${worker_id} AND services_service_id = ${service_id}`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  delete: (callback, client_id, worker_id, service_id) => {
    const sql = `DELETE FROM clients_has_workers
                     WHERE clients_client_id = ${client_id} AND workers_worker_id = ${worker_id} AND services_service_id = ${service_id}`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
  update: (callback, client_id, worker_id, service_id, date) => {
    const sql = `UPDATE clients_has_workers
                     SET clients_has_workers_date = "${date}"
                     WHERE clients_client_id = ${client_id} AND workers_worker_id = ${worker_id} AND services_service_id = ${service_id}`;
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },
};
