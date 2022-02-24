const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const adminRoutes = require('./routes/AdminRouter')
const clientRoutes = require('./routes/ClientRouter')
const db = require('./config/db')
const cors = require('cors')

const app = express()


//Dotenv Load Config
dotenv.config({ path: './config/config.env'})
const Port = process.env.PORT

db();

app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.use('/', clientRoutes)
app.use('/admin', adminRoutes)




app.listen(Port, (req,res)=>{
    console.log(`Server Started on Port: ${Port}`)
})