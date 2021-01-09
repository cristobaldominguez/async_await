const port = 3000
const fs = require('fs')
const http = require('http')

const server = http.createServer((req,res) => {

})

server.listen(port, _ => console.log(`Servidor funcionando en puerto ${port}`))
