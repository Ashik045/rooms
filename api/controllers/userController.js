/* eslint-disable prettier/prettier */
/* eslint-disable no-underscore-dangle */
// external import
const jwt = require('jsonwebtoken');

// internal import
const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');

// user signup and save to the database
const signup = async (req, res) => {
    const isEmail = await UserModel.findOne({ email: req.body.email });
    if (!isEmail) {
        try {
            const password = await bcrypt.hash(req.body.password, 10);
            const newuser = new UserModel({
                ...req.body,
                password,
            });

            await newuser.save();
            res.status(200).json({
                message: 'signup successful',
            });
        } catch (error) {
            res.status(500).json({
                error,
            });
        }
    } else {
        res.status(500).json({
            error: 'Email already in use!',
        });
    }
};

// user signup and save to the database
const login = async (req, res) => {
    try {
        const isUser = await UserModel.find({ email: req.body.email });
        if (isUser) {
            const comparePassword = await bcrypt.compare(req.body.password, isUser[0].password);
            if (comparePassword) {
                // jwt process

                const { password, isAdmin, ...userDetail } = isUser[0]._doc;
                const jwtToken = jwt.sign(
                    { id: isUser._id, isAdmin: isUser.isAdmin, email: isUser.email },
                    process.env.JWT_SECRET_KEY,
                    {
                        expiresIn: '2d',
                    },
                );
                res.cookie('access_token', jwtToken, {
                    httpOnly: true,
                }).status(200).json({
                    message: { ...userDetail },
                    jwtToken,
                });
            } else {
                res.status(500).json({
                    error: 'Incorrect email or password!',
                });
            }
        } else {
            res.status(500).json({
                error: 'Authentication failed!',
            });
        }
    } catch (error) {
        res.status(500).json({
            error: 'Authentication failed!!',
        });
    }
};

// find user by userId and update
const updateUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
                    $set: req.body,
                },
                { new: true },
        );

        res.status(200).json({
            message: user,
        });
    } catch (error) {
        res.status(500).json({
            error: 'User not updated!',
        });
    }
};

// find user by userId and delete
const deleteUser = async (req, res) => {
    try {
        await UserModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'User Deleted Successfully',
        });
    } catch (error) {
        res.status(500).json({
            error: 'User not found!',
        });
    }
};

// find a user by userId
const getOneUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);

        res.status(200).json({
            message: user,
        });
    } catch (error) {
        res.status(500).json({
            error: 'User not found!',
        });
    }
};

// find a user by userId
const getAllUser = async (req, res) => {
    try {
        const users = await UserModel.find();

        res.status(200).json({
            message: users,
        });
    } catch (error) {
        res.status(500).json({
            error: 'User not found!',
        });
    }
};

module.exports = {
    signup,
    login,
    updateUser,
    deleteUser,
    getOneUser,
    getAllUser,
};
