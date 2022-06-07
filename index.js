require("dotenv").config()
const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')

const router = require("./routes/Route")
const db = require('./db')
const models = require("./model/models")
const errorMiddleware = require("./middleware/ErrorHandlingMiddleware")
const app = express()


app.use(express.json())
app.use(express.static(path.resolve(__dirname,"static")))
app.use(fileUpload({}))
app.use("/api",router)
app.use(errorMiddleware)

const PORT = process.env.PORT || 5000


const start = async () =>{
    await db.authenticate()
    await db.sync()
    app.listen(PORT,()=>console.log(`server starting on Port = ${PORT}`))

}

start()