
const Book = require('../models/bookModels.js')


let createBook = async (req, res) => {
    console.log(req.body);
    const { title, author, description } = req.body
    const imgURL = req.file?.filename



    if (!author || !title || !description || !imgURL) {

        return res.status(400).json({
            message: 'all fields are required'
        })
    }

    if (author.length > 20) {
        return res.status(400).json({
            message: "author length should be below 20"
        })

    }
    if (title.length > 20) {
        return res.status(400).json({
            message: "title length should be below 20"
        })

    }
    if (description.length >= 200) {
        return res.status(400).json({
            message: "description length should be equal or below 200"
        })

    }


    try {
        const book = await Book.create({
            ...req.body,
            imgURL
        });

        res.json({
            message: "Books fetched successfully",
            data: book
        });

    } catch (error) {
        res.json({
            message: "book cannot be fetched"
        });
    }
}

let readBook = async (req, res) => {

    try {
        const book = await Book.find();

        res.json({ message: "read book successfully", data: book });

    } catch (error) {
        res.json({ message: "book cannot be read" });
    }

}
let readBookDetails = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        res.json({ data: book })

    } catch (err) {
        res.json({ message: "error to fetching Book details" })
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



module.exports = { createBook, readBook,readBookDetails, updateBook, deleteBook }

