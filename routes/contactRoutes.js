const express = require("express")
const router = express.Router()
const { getContact, getContactId, createContact, updateContact, deleteContact } = require("../controllers/contactController")

router.route("/").get(getContact)
router.route("/:id").get(getContactId)
router.route("/").post(createContact)
router.route("/:id").put(updateContact)
router.route("/:id").delete(deleteContact)

module.exports = router 