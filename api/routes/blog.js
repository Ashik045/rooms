// external import
const express = require('express');

// internal importe
const {
    createBlog,
    updateBlog,
    deleteBlog,
    getOneBlog,
    getAllBlog,
} = require('../controllers/blogController');

const router = express.Router();

// create Blog
router.post('/blog/create', createBlog);

// find Blog by id and update
router.put('/blog/:id', updateBlog);

// find Blog by id and delete
router.delete('/blog/:id', deleteBlog);

// find Blog by id
router.get('/blog/:id', getOneBlog);

// find all Blogs
router.get('/blogs', getAllBlog);

module.exports = router;
