let User = require('../models/userModel')
const bcrypt = require("bcrypt");

let userSignup = async (req, res) => {
    const { username, email, password } = req.body

    let existmail = await User.findOne({ email })
    if (existmail) {

        res.json({ message: "this email is already exist" })

    } else {

        const hashedPassword = await bcrypt.hash(password, 10);

        let response = await User.create({
            username,
            email,
            password: hashedPassword
        });

        res.json({ message: "user register successfully" });
    }
}


let userLogin = async (req, res) => {

    const { password, email } = req.body

    let user = await User.findOne({ email: email })

    if (!user) {
        return res.json({ message: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        res.json({ message: "wrong password " })

    } else {
        res.json({
            message: "login successfully", data: {
                username: user.username,
                email: user.email,
                _id: user._id
            }
        })
    }

}


let userData = async (req, res) => {
    try {
        let response = await User.find()
        res.json({ message: "users list", data: response })

    } catch (error) {
        res.json({ message: "data cannot be fetched" })

    }


}

let userUpdate = async (req, res) => {

    console.log(req.params);

    try {
        let response = await User.updateOne({ _id: req.params.id },
            { $set: req.body })
        res.json({ message: "updated data", response })

    } catch (error) {
        res.json({ message: " fail updated data", error })
    }

}

let userDelete = async (req, res) => {
    console.log(req.params);

    try {
        let response = await User.deleteOne({ _id: req.params.id })
        res.json({ message: "deleted data", response })

    } catch (error) {
        res.json({ message: " fail to delete data", error })
    }

}

module.exports = {
    userSignup,
    userLogin,
    userData,
    userUpdate,
    userDelete
}