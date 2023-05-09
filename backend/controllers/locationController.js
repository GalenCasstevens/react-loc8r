const Location = require('../models/locationModel');

// @desc    Get locations by distance
// @route   GET /api/locations
// @access  Public
const getLocations = async (req, res) => {
	const lng = parseFloat(req.query.lng);
	const lat = parseFloat(req.query.lat);
	const maxDistance = parseFloat(req.query.maxDistance);

	if ((!lng && lng !== 0) || (!lat && lat !== 0)) {
		return res
			.status(404)
			.json({ message: 'lng and lat query parameters are required' });
	}

	const near = {
		type: 'Point',
		coordinates: [lng, lat],
	};

	const geoOptions = {
		distanceField: 'distance.calculated',
		key: 'coords',
		spherical: true,
	};

	const locations = await Location.find({});

	res.status(200).json(locations);
};

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
	getLocations,
};
