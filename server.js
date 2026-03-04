const express = require("express");



const mongoDB = require('./config/db.js')
const User = require('./models/userModel.js')
const Book = require('./models/bookModels.js')
const userRoutes = require('./routes/userRoutes.js')
const bookRoutes = require('./routes/bookRoutes.js')
const jwt=require("jsonwebtoken");
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors())
// mongodb connection
mongoDB()

app.use('/uploads', express.static('uploads'));
app.use('/', userRoutes)
app.use('/book', bookRoutes)



app.listen(3000, () => {
    console.log("server connected");

})
