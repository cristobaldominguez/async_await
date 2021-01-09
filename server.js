const port = 3000
const fs = require('fs')
const url = require('url')
const http = require('http')
const { getUser } = require('./db/index')

const server = http.createServer(async (req,res) => {
    // index.html
    if (req.url === '/' && req.method === 'GET') {
        fs.readFile('./views/index.html', (err, file) => {
            if (err) console.error(err)

            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(file)
        })
    }

    else if (req.url.startsWith('/users') && req.method === 'GET') {
        const id = Number(url.parse(req.url, true).path.split('/')[2])
        try {
            const user = await getUser(id)
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(user.rows))

        } catch (error) {
            console.log(error)            
        }
    }
})

server.listen(port, _ => console.log(`Servidor funcionando en puerto ${port}`))
