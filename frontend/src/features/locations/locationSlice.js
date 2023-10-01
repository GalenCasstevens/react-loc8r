import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import locationService from './locationService';

const initialState = {
	locations: [],
	location: {},
};

// Get locations
export const getLocations = createAsyncThunk(
	'locations/getAllByDistance',
	async (thunkAPI) => {
		try {
			return await locationService.getLocations();
		} catch (error) {
			console.log(error);
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Get location
export const getLocation = createAsyncThunk(
	'locations/get',
	async (locationId, thunkAPI) => {
		try {
			return await locationService.getLocation(locationId);
		} catch (error) {
			console.log(error);
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Add a review
export const addReview = createAsyncThunk(
	'locations/addReview',
	async (params, thunkAPI) => {
		try {
			return await locationService.addReview(
				params.locationId,
				params.reviewData
			);
		} catch (error) {
			console.log(error);
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getLocations.fulfilled, (state, action) => {
				state.locations = action.payload;
			})
			.addCase(getLocation.fulfilled, (state, action) => {
				state.location = action.payload;
			})
			.addCase(addReview.fulfilled, (state, action) => {
				state.location.reviews = state.location.reviews.concat(action.payload);
			});
	},
});

export default locationSlice.reducer;
