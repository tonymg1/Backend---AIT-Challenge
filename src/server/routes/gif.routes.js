'use strict';

const express = require('express');
const router = express.Router();
const middlewareAuth = require('../../middlewares/authentication.middlewares');

// Controller
const gifController = require('../../contollers/gif.controller');

// Request
router.post('', gifController.newPost);
router.get('/categories', gifController.showCategories);
router.get('', gifController.showPosts);
router.get('/:id', gifController.showPostById);
router.delete('/:id', middlewareAuth, gifController.deletePostById);

module.exports = router;
