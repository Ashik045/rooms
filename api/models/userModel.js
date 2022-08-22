/* eslint-disable prettier/prettier */
// external import
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        firstname: {
            type: String,
        },
        lastname: {
            type: String,
        },
        username: {
            type: String,
        },
        fblink: {
            type: String,
        },
        twlink: {
            type: String,
        },
        isadmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
