/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
// internal import
const BlogModel = require('../models/blogModel');

// create new Blog
const createBlog = async (req, res) => {
    try {
        const newBlog = BlogModel(req.body);
        const savedBlog = await newBlog.save();

        res.status(200).json({
            message: savedBlog,
        });
    } catch (error) {
        res.status(500).json({
            error: `Blog not created! ${error}`,
        });
    }
};

// find Blog and update
const updateBlog = async (req, res) => {
    try {
        const updBlog = await BlogModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        );

        res.status(200).json({
            message: updBlog,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Blog not updated!',
        });
    }
};

// find a Blog an delete
const deleteBlog = async (req, res) => {
    try {
        await BlogModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'Blog deleted successfully.',
        });
        } catch (error) {
                res.status(500).json({
                    error: 'Blog not deleted!',
                });
        }
};

// get a Blog by id
const getOneBlog = async (req, res) => {
    try {
        const Blog = await BlogModel.findById(req.params.id);

        res.status(200).json({
            message: Blog,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Blog not found!!',
        });
        }
};

// get all Blogs
const getAllBlog = async (req, res) => {
    const { tag } = req.query;
    let allBlogs;
    try {
        if (tag) {
        allBlogs = await BlogModel.find({ tags: tag });
        }
        allBlogs = await BlogModel.find();

        res.status(200).json({
            message: allBlogs,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Blogs not found!!',
        });
    }
};

// get all Blogs
// const getBlogByTag = async (req, res) => {
//     const { search } = req.query;
//     try {
//         const allBlogs = await BlogModel.find({ tags: search });

//         res.status(200).json({
//             message: allBlogs,
//         });
//     } catch (error) {
//         res.status(500).json({
//             error: 'Blogs not found!!',
//         });
//     }
// };

module.exports = {
    createBlog,
    updateBlog,
    deleteBlog,
    getOneBlog,
    getAllBlog,
};
