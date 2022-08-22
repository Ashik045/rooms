// external import
const express = require('express');

// internal importe
const {
    createHotel,
    updateHotel,
    deleteHotel,
    getOneHotel,
    getAllHotel,
} = require('../controllers/hotelController');

const router = express.Router();

// create hotel
router.post('/hotel/create', createHotel);

// find hotel by id and update
router.put('/hotel/:id', updateHotel);

// find hotel by id and delete
router.delete('/hotel/:id', deleteHotel);

// find hotel by id
router.get('/hotel/:id', getOneHotel);

// find all hotels
router.get('/hotels', getAllHotel);

module.exports = router;
