
const mongoose = require("mongoose")

const connectionString = "mongodb+srv://aremumoses1999:vOPi0WFfZ4rm9Vga@cluster0.dfmo1og.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority"

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

}
module.exports = connectDB;