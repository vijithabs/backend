const mongoose = require("mongoose")

function mongoDB() {

    mongoose.connect("mongodb://localhost:27017/website")
        .then(() => {
            console.log("database connected");

        })
        .catch((err) => {
            console.log(err);

        })
}

module.exports = mongoDB