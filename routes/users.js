const express = require('express')
const router = express.Router()

const {
    getAllUsers,
    getSpecificUsers
} = require('../controllers/users')

const jwtHandler = require('../middleware/jwtHandler')
router.use(jwtHandler)

// Get all
router.get('/', getAllUsers)
  
// Get specific nim
router.get('/:nim', getSpecificUsers)

module.exports = router