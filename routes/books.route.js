const {Router} = require('express');
const {bookscontroller} = require('../controllers/books.controller')
const router = Router();


router.post('/books', bookscontroller.createBook);

router.delete('/books/:id', bookscontroller.deleteBookById);

router.patch('/books/:id', bookscontroller.changeBookById);
router.get('/books/:id', bookscontroller.getBookById);
router.get('/books', bookscontroller.getBooks);
router.get('/booksgenre/:id', bookscontroller.getBooksByGenre);


module.exports = router;