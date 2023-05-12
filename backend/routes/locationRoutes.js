const express = require('express');
const router = express.Router();
const {
	getLocations,
	getLocation,
	createLocation,
} = require('../controllers/locationController');

// Re-route into review router
const reviewRouter = require('./reviewRoutes');
router.use('/:locationId/reviews', reviewRouter);

router.route('/').get(getLocations).post(createLocation);

router.route('/:id').get(getLocation);

module.exports = router;
