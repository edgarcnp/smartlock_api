const express = require('express')
const router = express.Router()

const { 
    getAllBooking,
    getSpecificBooking 
} = require('../controllers/booking')

const jwtHandler = require('../middleware/jwtHandler')
router.use(jwtHandler)

// Get All Booking
router.get('/', getAllBooking)

// Get Specific Booking ID
router.get('/:id', getSpecificBooking)

module.exports = router