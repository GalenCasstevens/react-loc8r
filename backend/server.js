const express = require('express');
const path = require('path');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/locations', require('./routes/locationRoutes'));

if (process.env.NODE_ENV === 'production') {
	// Set build folder as static
	app.use(express.static(path.join(__dirname, '../frontend/build')));

	// FIX: below code fixes app crashing on refresh in deployment
	app.get('*', (_, res) => {
		res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
	});
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
