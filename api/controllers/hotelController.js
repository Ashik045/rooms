/* eslint-disable prettier/prettier */
// internal import
const HotelModel = require('../models/hotelModel');

// create new hotel
const createHotel = async (req, res) => {
    try {
        const newHotel = HotelModel(req.body);
        const savedHotel = await newHotel.save();

        res.status(200).json({
            message: savedHotel,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Hotel not created!',
        });
    }
};

// find hotel and update
const updateHotel = async (req, res) => {
    try {
        const updHotel = await HotelModel.findByIdAndUpdate(
            req.params.id,

            {
                $set: req.body,
            },
            { new: true },
        );

        res.status(200).json({
            message: updHotel,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Hotel not updated!',
        });
    }
};

// find a hotel an delete
const deleteHotel = async (req, res) => {
    try {
        await HotelModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'Hotel deleted successfully.',
        });
        } catch (error) {
                res.status(500).json({
                    error: 'Hotel not deleted!',
                });
        }
};

// get a hotel by id
const getOneHotel = async (req, res) => {
    try {
        const hotel = await HotelModel.findById(req.params.id);

        res.status(200).json({
            message: hotel,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Hotel not found!!',
        });
        }
    };

    // get a hotel by id
const getAllHotel = async (req, res) => {
    try {
        const hotels = await HotelModel.find().sort({ createdAt: -1 });

        res.status(200).json({
            message: hotels,
        });
    } catch (error) {
        res.status(500).json({
            error,
        });
        }
    };

module.exports = {
    createHotel,
    updateHotel,
    deleteHotel,
    getOneHotel,
    getAllHotel,
};