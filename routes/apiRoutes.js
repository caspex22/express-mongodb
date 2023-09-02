const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/posts', apiController.getAllPosts);
router.post('/posts', apiController.createPost);
router.get('/posts/:id', apiController.getPostById);
router.put('/posts/:id', apiController.updatePostById);
router.delete('/posts/:id', apiController.deletePostById);

module.exports = router;