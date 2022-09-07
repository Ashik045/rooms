/* eslint-disable max-len */
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

    // get a hotels
const getAllHotel = async (req, res) => {
    const { min, max, ...others } = req.query;

    try {
           const hotels = await HotelModel.find({ ...others, chipestprice: { $gt: min || 5, $lt: max || 1000 } }).limit(req.query.limit);

        res.status(200).json({
            message: hotels,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Hotels not found!!',
        });
        }
};

const getHotelByCity = async (req, res) => {
    const cities = req.query.cities.split(',');

        try {
            const list = await Promise.all(cities.map((city) => HotelModel.countDocuments({ city })));

            res.status(200).json({
                message: list,
            });
        } catch (error) {
            res.status(500).json({
                error: 'Can not found hotel by cityname!',
            });
        }
};

const getHotelByType = async (req, res) => {
        try {
            const apartmentCount = await HotelModel.countDocuments({ type: 'apartment' });
            const hotelCount = await HotelModel.countDocuments({ type: 'hotel' });
            const resortCount = await HotelModel.countDocuments({ type: 'resort' });
            const villaCount = await HotelModel.countDocuments({ type: 'villa' });
            const cabinCount = await HotelModel.countDocuments({ type: 'cabin' });

            res.status(200).json({
                message: [
                    { type: 'apartments', count: apartmentCount },
                    { type: 'hotels', count: hotelCount },
                    { type: 'resorts', count: resortCount },
                    { type: 'villas', count: villaCount },
                    { type: 'cabins', count: cabinCount },
                ],
            });
        } catch (error) {
            res.status(500).json({
                error: 'Can not found hotel by hotel type!',
            });
        }
};

module.exports = {
    createHotel,
    updateHotel,
    deleteHotel,
    getOneHotel,
    getAllHotel,
    getHotelByCity,
    getHotelByType,
};
