const express = require('express');
const BlogController = require('../controllers/blogController');

const router = express.Router();

router.get('/create', BlogController.blog_create_get);
router.get('/', BlogController.blog_index);
router.post('/', BlogController.blog_create_post);
router.get('/:id', BlogController.blog_details);
router.delete('/:id', BlogController.blog_delete);

module.exports = router;
