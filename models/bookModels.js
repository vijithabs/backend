
const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String
});

let Book = mongoose.model('books', bookSchema);

module.exports = Book