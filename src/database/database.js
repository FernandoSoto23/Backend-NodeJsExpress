import mysql from "promise-mysql";
import config from './../config';

const connection = mysql.createConnection({
    host: config.host,
    password: config.password,
    user: config.user,
    database: config.database
    
});

const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
}
