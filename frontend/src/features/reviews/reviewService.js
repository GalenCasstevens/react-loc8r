import axios from 'axios';

const API_URL = '/api/locations/';

// Add a review
const addReview = async (locationId, reviewData) => {
	const response = await axios.post(
		`${API_URL + locationId}/reviews`,
		reviewData
	);

	return response.data;
};

// Get location reviews
const getReviews = async (locationId) => {
	const response = await axios.get(`${API_URL + locationId}/reviews`);

	return response.data;
};

const reviewService = {
	addReview,
	getReviews,
};

export default reviewService;
