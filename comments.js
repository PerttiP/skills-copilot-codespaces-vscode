// Create web server for comment that handle request using a controller
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');

// Handle POST request for creating comment
router.post('/', commentController.createComment);

// Handle GET request for getting all comments
router.get('/', commentController.getAllComments);

// Handle GET request for getting a comment by id
router.get('/:id', commentController.getCommentById);

// Handle PUT request for updating a comment by id
router.put('/:id', commentController.updateCommentById);

// Handle DELETE request for deleting a comment by id
router.delete('/:id', commentController.deleteCommentById);

module.exports = router;

// Path: comment.js
// Create a comment model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  }})