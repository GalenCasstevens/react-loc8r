const asyncHandler = require('express-async-handler');

const Location = require('../models/locationModel');

// @desc    Get review for a location
// @route   GET /api/locations/:locationId/reviews/:reviewId
// @access  Public
const getReview = asyncHandler(async (req, res) => {
	const location = await Location.findById(req.params.locationId);

	if (!location) {
		res.status(404);
		throw new Error('Location not found');
	}

	if (location.reviews && location.reviews.length > 0) {
		const review = location.reviews.id(req.params.reviewid);

		if (!review) {
			res.status(404);
			throw new Error('Review not found');
		}

		res.status(200).json(review);
	} else {
		res.status(404);
		throw new Error('No reviews found');
	}
});

// @desc    Add review
// @route   POST /api/locations/:locationId/reviews
// @access  Public
const createReview = asyncHandler(async (req, res) => {});

module.exports = {
	getReview,
};
