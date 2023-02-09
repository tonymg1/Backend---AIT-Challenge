'use strict';

const express = require('express');
const multer = require('multer');

const router = express.Router();
// const middlewareAuth = require('../../middlewares/authentication.middlewares');

// Controller
const gifController = require('../../contollers/gif.controller');

// Request
router.post('', multer().single('content'), gifController.newPost);
router.get('/categories', gifController.showCategories);
router.get('', gifController.showPosts);
router.get('/:id', gifController.showPostById);
// router.delete('/:id', middlewareAuth, gifController.deletePostById);
router.delete('/:id', gifController.deletePostById);

module.exports = router;
