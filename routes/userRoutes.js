
const express = require("express");
const router = express.Router();

const { userSignup, userLogin, userData, userUpdate, userDelete } = require('../controllers/userController.js')



router.post('/sign-up', userSignup);

router.post('/login', userLogin)

router.get('/user', userData)

router.put("/update/:id", userUpdate)

router.delete("/delete/:id", userDelete)




module.exports = router;