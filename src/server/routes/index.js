'use strict'
const express = require("express");
const router = express.Router();

//lamada al controlador
const gifController = require("../../contollers/gif.controllers")

router.use("/gif", gifRoutes);

module.exports = router;
