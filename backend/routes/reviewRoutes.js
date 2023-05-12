const express = require('express');
const router = express.Router({ mergeParams: true });
const { getReview } = require('../controllers/reviewController');

router.route('/:reviewId').get(getReview);

module.exports = router;
