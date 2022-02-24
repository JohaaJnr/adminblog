const express = require('express')
const Route = express.Router()

Route.get('/', (req,res)=>{
    res.send('Hello from client')
})

module.exports = Route;