const {createpool} = require("mysql");

const pool = createpool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: process.env.LIMIT_DB
});

module.exports = pool;