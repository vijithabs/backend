const jwt = require("jsonwebtoken")

function authMiddleware(req, res, next) {

    const token = req.headers.authorization?.split(' ')[1]

    

    if (!token) {
        res.json({ message: "No token provided" })
        return
    }

    try {
        const verified = jwt.verify(token, "123456")
        req.user = verified
        next()
    } catch (err) {
        res.json({ message: "Invalid token" })
    }
}

module.exports = authMiddleware