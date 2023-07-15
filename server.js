const express = require("express")
const errorHandler = require("./middleware/errorHandler") //handle request errors
const connectDb = require("./config/dbConnection") //connect request to database
const dotenv = require("dotenv").config() //use env variables

connectDb() //connect to database
const app = express() //use express
const port = process.env.PORT || 5002

app.use(express.json()) //for body parser - acts as our middleware - allow us to post body in a post request
app.use("/api/v1/contacts", require("./routes/contactRoutes")) //main route for anything contacts
app.use(errorHandler)

//start server on port
app.listen(port, ()=> {
    console.warn(`server running on port ${port}`)
    console.log("Connecting to database...")
})