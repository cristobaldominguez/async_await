const { Pool } = require('pg')

const pool = new Pool({
    user: 'cristobaldominguez',
    password: 'golden',
    host: 'localhost',
    database: 'asyncawait'
})



module.exports = {}