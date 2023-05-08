const express = require('express');
const dotenv = require('dotenv').config();
const PORT = 5000;

const app = express();

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Welcome to the Loc8r app!' });
});

app.use('/api/locations', require('./routes/locationRoutes'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));