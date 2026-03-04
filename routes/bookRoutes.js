
const express = require("express");
const multer = require("multer");
const router = express.Router();


//multer storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})
const upload = multer({ storage })




const { createBook, readBook, updateBook, deleteBook, readBookDetails } = require("../controllers/bookControllers.js");
const authMiddleware = require("../middlewares/authMiddleware.js");


router.post('/',upload.single("image"), createBook);
router.get('/read', authMiddleware, readBook);
router.get('/details/:id', readBookDetails);
router.put('/update/:id', authMiddleware, updateBook);
router.delete('/delete/:id', authMiddleware, deleteBook);



module.exports = router;