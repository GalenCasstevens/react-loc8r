const Location = require('../models/locationModel');

// @desc    Get locations by distance
// @route   GET /api/locations
// @access  Public
const getLocations = (req, res) => {};

// @desc    Create location
// @route   POST /api/locations
// @access  Public
const createLocation = async (req, res) => {
	const { name, openingTimes } = req.body;

	if (!name) {
		res.status(400);
		throw new Error('Please add a name');
	}

	const location = await Location.create({
		name: name,
		address: req.body.address,
		facilities: req.body.facilities,
		coords: {
			type: 'Point',
			coordinates: [parseFloat(req.body.lng), parseFloat(req.body.lat)],
		},
		openingTimes: openingTimes,
	});

	res.status(201).json(location);
};

module.exports = {
	createLocation,
};
