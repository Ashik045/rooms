// external import
const express = require('express');

// internal importe
const {
    createRoom,
    updateRoom,
    deleteRoom,
    getOneRoom,
    getAllRoom,
} = require('../controllers/roomController');

const router = express.Router();

// create room
router.post('/room/create/:id', createRoom);

// find room by id and update
router.put('/room/:id', updateRoom);

// find room by id and delete
router.delete('/room/:id', deleteRoom);

// find room by id
router.get('/room/:id', getOneRoom);

// find all rooms
router.get('/rooms', getAllRoom);

module.exports = router;
