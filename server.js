const port = 3000
const fs = require('fs')
const http = require('http')

const server = http.createServer((req,res) => {
    // index.html
    if (req.url === '/' && req.method === 'GET') {
        fs.readFile('./views/index.html', (err, file) => {
            if (err) console.error(err)

            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(file)
        })
    }
})

server.listen(port, _ => console.log(`Servidor funcionando en puerto ${port}`))
