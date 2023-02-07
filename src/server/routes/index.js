'use strict';

const express = require('express');
const router = express.Router();

const gifRoutes = require('./gif.routes');

router.use('/gif', gifRoutes);

module.exports = router;
