const express = require('express');
const router = express.Router();
const {
	getLocations,
	getLocation,
	createLocation,
} = require('../controllers/locationController');

router.route('/').get(getLocations).post(createLocation);

router.route('/:id').get(getLocation);

module.exports = router;
