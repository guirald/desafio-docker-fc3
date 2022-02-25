const express = require('express')
const faker = require('@faker-js/faker')
const db = require('./services/db')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    db.create(`INSERT INTO people (name) VALUES ('${faker.faker.name.findName()}')`)
    
    res.write('<h1>Full Cycle Rocks</h1>')

    db.query('SELECT * FROM people', res)
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})