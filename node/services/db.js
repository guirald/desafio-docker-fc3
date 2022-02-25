const mysql = require('mysql')
const config = require('../config')

async function query(sql, res) {
    const connection = await mysql.createConnection(config)

    await connection.query(sql, (error, results) => {
        if (error) {
            return console.error(error.message);
        }
        for (var i = 0, len = results.length; i < len; i++) {
            res.write('<p>' + results[i].name + '</p>')
        }
        res.end()
        connection.end()        
    });
}

async function create(sql) {
    const connection = await mysql.createConnection(config)    
    await connection.query(sql)
    connection.end()
}

module.exports = {
    query,
    create
}

