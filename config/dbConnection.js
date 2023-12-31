const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(
        "Connection To Database Established With: ", 
        connect.connection.host,
        connect.connection.name,
        )
    } catch (error) {
        console.log("Connection To Database Failed With: ",error)
        process.exit(1)
    }
}

module.exports = connectDb