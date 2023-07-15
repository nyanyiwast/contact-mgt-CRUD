//THIS FILE CONTAINS THE LOGIC OF ALL THE REQUEST COMING TO THE SERVER
const asyncHandler = require("express-async-handler") //handle async responses and passes to the error handler
const Contact = require("../models/contactModel") //get contacts model

//@desc GET all contacts
//@route GET /api/v1/contacts
//@access public

const getContact = asyncHandler(async (req, res)=> {
    const contacts = await Contact.find() //search in database and store responses
    res.status(200).json({
        code: 200,
        message: "SUCCESS",
        data: contacts
    }) 
})

//@desc GET contact by id
//@route GET /api/v1/contacts/:id
//@access public

const getContactId = asyncHandler(async (req, res)=> {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404).json({
            code: 404,
            message: "SUCCESS",
            data: contact
        })
        
    }
    res.status(200).json({
        code: 200,
        message: "SUCCESS",
        data: contact
    })
})

//@desc CREATE New contact by id
//@route POST /api/v1/contacts/id
//@access public

const createContact = asyncHandler(async (req, res)=> {
        console.log("The request body is: ", req.body)
        const {name, email, phone} = req.body //destructure the object sent by client

        if(!name || !email || !phone){
            res.status(400)
            throw new Error("All fields are mandatory!")
        }

        const contacts = await Contact.create({ //post to database
            name,
            phone,
            email
        })

    res.status(201).json({ //send response back to customer
        code: 200,
        message: "SUCCESS",
        data: contacts
    })
})

//@desc UPDATE contact by id
//@route PUT /api/v1/contacts/id
//@access public

const updateContact = asyncHandler(async (req, res)=> {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404).json({
            code: 404,
            message: "SUCCESS",
            data: contact
        })
        
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json({
        code: 200,
        message: "SUCCESS",
        data: updatedContact
    })
})

//@desc DELETE contact by id
//@route DELETE /api/v1/contacts/id
//@access public

const deleteContact = asyncHandler(async (req, res)=> {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404).json({
            code: 404,
            message: "SUCCESS",
            data: contact
        })
    }
    await Contact.findByIdAndDelete(contact);
    res.status(200).json({
            code: 200,
            message: "SUCCESS",
            data: contact
    })
})

module.exports = {getContact, getContactId, createContact, updateContact, deleteContact}