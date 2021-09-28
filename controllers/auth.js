const { users } = require('../data')
const bcrypt = require('bcrypt')

const checkLogin = (req, res) => {
    const { email, password } = req.body

    // Search for corresponding email
    const searchEmail = users.find((user) => user.email === email)

    if(searchEmail){
        bcrypt.compare(password, searchEmail.password, function(err, result) {
            if(result){
                // Add JWT Token Signing

                return res.status(200).send(`Welcome ${email}`)
            }
        });
    }else {
        res.status(401).send('Invalid Credentials')
    }
}

module.exports = {
    checkLogin
}