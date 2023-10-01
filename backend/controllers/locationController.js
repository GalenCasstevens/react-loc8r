const asyncHandler = require('express-async-handler');

const Location = require('../models/locationModel');

// @desc    Get locations by distance
// @route   GET /api/locations
// @access  Public
const getLocationsByDistance = asyncHandler(async (req, res) => {
	console.log('testing');
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
		maxDistance: maxDistance,
	};

	try {
		const results = await Location.aggregate([
			{
				$geoNear: {
					near,
					...geoOptions,
				},
			},
			{ $limit: 5 },
		]);
		const locations = results.map((result) => {
			return {
				_id: result._id,
				name: result.name,
				address: result.address,
				rating: result.rating,
				facilities: result.facilities,
				distance: `${result.distance.calculated.toFixed()}`,
			};
		});
		res.status(200).json(locations);
	} catch (err) {
		res.status(404).json(err);
	}
});

// @desc    Get location
// @route   GET /api/locations/:id
// @access  Public
const getLocation = asyncHandler(async (req, res) => {
	const location = await Location.findById(req.params.id);

	if (!location) {
		res.status(404);
		throw new Error('Location not found');
	}

	res.status(200).json(location);
});

// @desc    Create location
// @route   POST /api/locations
// @access  Public
const createLocation = asyncHandler(async (req, res) => {
	const { name } = req.body;

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
		openingTimes: req.body.openingTimes,
	});

	res.status(201).json(location);
});

// @desc 	Update location
// @route 	PUT /api/locations/:id
// @access	Public
const updateLocation = asyncHandler(async (req, res) => {
	const location = await Location.findById(req.params.id);
	const { name } = req.body;

	if (!location) {
		res.status(404);
		throw new Error('Location not found');
	}

	if (!name) {
		res.status(400);
		throw new Error('Please add a name');
	}

	const updatedLocation = await Location.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);

	res.status(200).json(updatedLocation);
});

// @desc	Delete location
// @route	DELETE /api/locations/:id
// @access	Public
const deleteLocation = asyncHandler(async (req, res) => {
	const location = await Location.findById(req.params.id);

	if (!location) {
		res.status(404);
		throw new Error('Location not found');
	}

	await Location.deleteOne({ _id: location._id });

	res.status(200).json({ success: true });
});

module.exports = {
	getLocationsByDistance,
	getLocation,
	createLocation,
	updateLocation,
	deleteLocation,
};
