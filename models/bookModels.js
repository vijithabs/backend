
const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    imgURL: {
        type: String,
        default: ""
    }
});

let Book = mongoose.model('books', bookSchema);

module.exports = Book