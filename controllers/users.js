const { users } = require('../data')

const getAllUsers = (req, res) => {
    return res.status(200).json(users)
}

const getSpecificUsers = (req, res) => {
    const { nim } = req.params

    const singleUser = users.find((user) => user.nim === nim)

    if(!singleUser) {
        return res.status(404).send('User not found')
    }

    return res.status(200).json(singleUser)
}

module.exports = {
    getAllUsers,
    getSpecificUsers
}