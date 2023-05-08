// @desc    Get locations by distance
// @route   /api/locations
// @access  Public
const getLocationsByDistance = (req, res) => {
	console.log(req.body);

	res.send('get locations by distance');
};

module.exports = {
	getLocationsByDistance,
};
