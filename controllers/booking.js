const { booking } = require('../data')

const getAllBooking = (req, res) => {
    return res.status(200).json(booking)
}

const getSpecificBooking = (req, res) => {
    const { id } = req.params

    const singleBooking = booking.find((data) => data.id === Number(id))

    if(!singleBooking) {
        return res.status(404).send('ID not found')
    }

    return res.json(singleBooking)
}

module.exports = {
    getAllBooking,
    getSpecificBooking
}