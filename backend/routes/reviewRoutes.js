const express = require('express');
const router = express.Router({ mergeParams: true });
const { getReview, addReview } = require('../controllers/reviewController');

router.route('/').post(addReview);
router.route('/:reviewId').get(getReview);

module.exports = router;
