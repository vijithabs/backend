
const express = require("express");
const router = express.Router();

const { createBook ,readBook,updateBook, deleteBook} = require("../controllers/bookControllers.js");

router.post('/', createBook);
router.get('/read', readBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;