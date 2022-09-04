const {Router} = require('express');
const {reviewscontroller} = require('../controllers/reviews.controllers')
const router = Router();


router.post('/reviews', reviewscontroller.createReview);

router.delete('/reviews/:id', reviewscontroller.deleteReviewById);

router.get('/reviews', reviewscontroller.getReviewByBook);


module.exports = router;