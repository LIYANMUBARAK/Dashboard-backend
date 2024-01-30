const express = require('express')
const server = express()
const router = require('./routes/router')
var cors = require('cors')

var whitelist = ['http://localhost:4200/']
server.use(cors()); 

const port = 3000


server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

server.use('',router)

