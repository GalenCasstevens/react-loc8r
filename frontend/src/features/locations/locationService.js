import axios from 'axios';

const API_URL = '/api/locations';

// Get locations
const getLocations = async () => {
	const lng = -81.0151;
	const lat = 34.97988;
	const maxDistance = 10000;
	console.log(`${API_URL}?lng=${lng}&lat=${lat}&maxDistance=${maxDistance}`);
	const response = await axios.get(
		`${API_URL}?lng=${lng}&lat=${lat}&maxDistance=${maxDistance}`
	);
	console.log(response.data);
	return response.data;
};

// Get location
const getLocation = async (locationId) => {
	const response = await axios.get(`${API_URL}/${locationId}`);

	return response.data;
};

// Add a review
const addReview = async (locationId, reviewData) => {
	const response = await axios.post(
		`${API_URL}/${locationId}/reviews`,
		reviewData
	);

	return response.data;
};

const locationService = {
	getLocations,
	getLocation,
	addReview,
};

export default locationService;
