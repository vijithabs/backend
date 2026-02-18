
const Book = require('../models/bookModels.js')


let createBook = async (req, res) => {
    const { title, author, description } = req.body
    console.log(req.body);


    try {
        const book = await Book.create({ title, author, description });

        res.json({ message: "Books fetched successfully", data: book });

    } catch (error) {
        res.json({ message: "book cannot be fetched" });
    }
}

let readBook = async (req, res) => {

    try {
        const book = await Book.findOne();

        res.json({ message: "read book successfully", data: book });

    } catch (error) {
        res.json({ message: "book cannot be read" });
    }

}

let updateBook = async (req, res) => {
    const { title, author, description } = req.body

    console.log(req.params);
    console.log(req.body);


    try {
        let response = await Book.updateOne({ _id: req.params.id },
            {
                $set: {
                    title,
                    author,
                    description
                }
            })
        res.json({ message: "updated Book", response })

    } catch (error) {
        res.json({ message: " fail updated Book", error })
    }

}


let deleteBook = async (req, res) => {
    try {
        let response = await Book.deleteOne({ _id: req.params.id })
        res.json({ message: "deleted book" })
    } catch (error) {
        res.json({ message: "fail to delete book" })
    }
}

module.exports = { createBook, readBook, updateBook, deleteBook }

