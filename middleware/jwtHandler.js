const jwtHandler = (req, res, next) => {
    console.log('Comparing JWT')
    next()
}

module.exports = jwtHandler