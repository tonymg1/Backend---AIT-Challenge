'use strict';

const express = require('express');
const router = express.Router();

// Controller
const gifController = require('../../contollers/gif.controller');

// Request
router.post('', gifController.newPost);
router.get('', gifController.showPosts);
router.get('/:id', gifController.showPostById);
router.delete('/:id', gifController.deletePostById);

module.exports = router;
