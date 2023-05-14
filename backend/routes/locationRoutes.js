const express = require('express');
const router = express.Router();
const {
	getLocationsByDistance,
	getLocation,
	createLocation,
	updateLocation,
	deleteLocation,
} = require('../controllers/locationController');

// Re-route into review router
const reviewRouter = require('./reviewRoutes');
router.use('/:locationId/reviews', reviewRouter);

router.route('/').get(getLocationsByDistance).post(createLocation);

router
	.route('/:id')
	.get(getLocation)
	.put(updateLocation)
	.delete(deleteLocation);

module.exports = router;
