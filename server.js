const express = require('express')
const app = express()
const routerProduct = require('./src/routes/products')


 //Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.use('/api/products',routerProduct)
app.use(express.static('public'))




//Running server

const PORT = process.env.PORT || 8080

const server = app.listen(PORT,()=>{console.log('Server Runing')});
server.on('error',error=>console.log(`Error ${error}`));