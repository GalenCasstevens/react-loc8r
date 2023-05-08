const express = require('express');
const router = express.Router();
const { getLocationsByDistance } = require('../controllers/locationController');

router.get('/', getLocationsByDistance);

module.exports = router;
