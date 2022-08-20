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
                res.status(200).json({
                    message: isUser,
                });
            } else {
                res.status(500).json({
                    error: 'Authentication failed!',
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

module.exports = {
    signup,
    login,
};
