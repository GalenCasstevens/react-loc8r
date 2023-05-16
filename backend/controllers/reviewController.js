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
		const review = location.reviews.id(req.params.reviewId);

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
const addReview = asyncHandler(async (req, res) => {
	const location = await Location.findById(req.params.locationId);

	if (!location) {
		res.status(404);
		throw new Error('Location not found');
	}

	const { author, rating, reviewText } = req.body;
	location.reviews.push({
		author,
		rating,
		reviewText,
	});
	await location.save();

	updateAverageRating(location._id);

	const review = location.reviews.slice(-1).pop();
	res.status(201).json(review);
});

const updateAverageRating = asyncHandler(async (locationId) => {
	const location = await Location.findById(locationId);

	if (location.reviews && location.reviews.length > 0) {
		const count = location.reviews.length;
		const total = location.reviews.reduce((acc, { rating }) => {
			return acc + rating;
		}, 0);

		location.rating = parseInt(total / count, 10);
		await location.save();
	}
});

// @desc	Update review
// @route	PUT /api/locations/:locationid/reviews/:reviewId
// @access 	Public
const updateReview = asyncHandler(async (req, res) => {
	const location = await Location.findById(req.params.locationId);

	if (!location) {
		res.status(404);
		throw new Error('Location not found');
	}

	if (location.reviews && location.reviews.length > 0) {
		const review = location.reviews.id(req.params.reviewId);

		if (!review) {
			res.status(404);
			throw new Error('Review not found');
		}

		review.author = req.body.author;
		review.rating = req.body.rating;
		review.reviewText = req.body.reviewText;
		await location.save();

		updateAverageRating(location._id);

		res.status(200).json(review);
	}
});

// @desc	Delete review
// @route	DELETE /api/locations/:locationid/reviews/:reviewId
// @access	Public
const deleteReview = asyncHandler(async (req, res) => {
	const location = await Location.findById(req.params.locationId);

	if (!location) {
		res.status(404);
		throw new Error('Location not found');
	}

	if (location.reviews && location.reviews.length > 0) {
		const review = location.reviews.id(req.params.reviewId);

		if (!review) {
			res.status(404);
			throw new Error('Review not found');
		}

		location.reviews.id(req.params.reviewId).deleteOne();
		await location.save();

		updateAverageRating(location._id);

		res.status(200).json({ success: true });
	}
});

module.exports = {
	getReview,
	addReview,
	updateReview,
	deleteReview,
};
