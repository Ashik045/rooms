/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
// internal import
const RoomModel = require('../models/roomModel');
const HotelModel = require('../models/hotelModel');

// create new room
const createRoom = async (req, res) => {
    const hotelId = req.params.id;
    const newRoom = new RoomModel(req.body);
    try {
       const savedRoom = await newRoom.save();

       try {
        await HotelModel.findByIdAndUpdate(hotelId, {
            $push: { rooms: savedRoom._id },
        });
       } catch (error) {
        res.status(500).json({
            error: 'Can not update hotel!',
        });
       }

       res.status(200).json({
        message: savedRoom,
    });
    } catch (error) {
        res.status(500).json({
            error: 'room not created!',
        });
    }
};

// find room and update
const updateRoom = async (req, res) => {
    try {
        const updroom = await RoomModel.findByIdAndUpdate(
            req.params.id,

            {
                $set: req.body,
            },
            { new: true },
        );

        res.status(200).json({
            message: updroom,
        });
    } catch (error) {
        res.status(500).json({
            error: 'room not updated!',
        });
    }
};

// find room and update room abailability
const updateRoomAvailability = async (req, res) => {
    try {
        await RoomModel.updateOne({ 'roomNumbers._id': req.params.id }, {
            $push: {
                'roomNumbers.$.unabailableDate': req.body.dates,
            },
        });

        res.status(200).json({
            message: 'Room availability updated',
        });
    } catch (error) {
        res.status(500).json({
            error: 'Room availability update failed!',
        });
    }
};

// find a room an delete
const deleteRoom = async (req, res) => {
    const hotelId = req.params.hotelid;
    try {
        await RoomModel.findByIdAndDelete(req.params.id);

        try {
            await HotelModel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id },
            });
           } catch (error) {
            res.status(500).json({
                error: 'Can not delete roomid on hotel!',
            });
           }

        res.status(200).json({
            message: 'room deleted successfully.',
        });
        } catch (error) {
                res.status(500).json({
                    error: 'room not deleted!',
                });
        }
};

// get a room by id
const getOneRoom = async (req, res) => {
    try {
        const room = await RoomModel.findById(req.params.id);

        res.status(200).json({
            message: room,
        });
    } catch (error) {
        res.status(500).json({
            error: 'room not found!!',
        });
        }
    };

    // get a room by id
const getAllRoom = async (req, res) => {
    try {
        const rooms = await RoomModel.find();

        res.status(200).json({
            message: rooms,
        });
    } catch (error) {
        res.status(500).json({
            error,
        });
        }
    };

module.exports = {
    createRoom,
    updateRoom,
    deleteRoom,
    getOneRoom,
    getAllRoom,
    updateRoomAvailability,
};
