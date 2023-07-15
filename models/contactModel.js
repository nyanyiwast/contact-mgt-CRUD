const mongoose = require("mongoose")

//the fields we want in our contact payload
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter contact name"]
    },
    email: {
        type: String,
        required: [true, "Please enter correct email address"]
    },
    phone: {
        type: String,
        required: [true, "Please enter correct phone number"]
    }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Contacts", contactSchema)