const express = require("express")
const router = express.Router()

//lamada al controlador
const gifController = require("../../contollers/gif.controllers")

//Peticiones
router.post("/new", gifController.newPost)
router.get("/show", gifController.showPost)
router.delete("/:id", gifController.deletePost)

module.exports = router