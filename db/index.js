const { Pool } = require('pg')

const pool = new Pool({
    user: 'cristobaldominguez',
    password: 'golden',
    host: 'localhost',
    database: 'asyncawait'
})

async function getUser(id) {
    const qryObject = {
        text: 'SELECT * FROM users WHERE id = $1',
        values: [id]
    }

    const result = await pool.query(qryObject)
    return result
}

module.exports = {
    getUser
}