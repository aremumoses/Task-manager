// console.log('Task Manager App')
const express = require('express')
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")

const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000

const notFound = require("./middlewares/not-found")
const errorHandlerMiddleware = require("./middlewares/error-handler")
//middleware

app.use(express.static('./public'))
app.use(express.json())
app.use(errorHandlerMiddleware)

//route
app.use("/api/v1/tasks", tasks)
app.use(notFound)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listenng to ${port}`))

    } catch (error) {
        console.log(error)
    }
}

start()