const mysql2 = require("mysql2");

const Connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: "3307",
    database: "hopihari_db"
});

exports.execute = (query, params = [], pool = Connection) => {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    });
}