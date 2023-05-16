const express = require('express');
const router = express.Router({ mergeParams: true });
const {
	getReview,
	addReview,
	updateReview,
	deleteReview,
} = require('../controllers/reviewController');

router.route('/').post(addReview);
router
	.route('/:reviewId')
	.get(getReview)
	.put(updateReview)
	.delete(deleteReview);

module.exports = router;
