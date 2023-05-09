const express = require('express');
const router = express.Router();
const {
	getLocations,
	createLocation,
} = require('../controllers/locationController');

router.route('/').get(getLocations).post(createLocation);

module.exports = router;
