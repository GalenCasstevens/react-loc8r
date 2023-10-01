import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import reviewService from './reviewService';

const initialState = {
	reviews: [],
	review: {},
	message: '',
};

export const addReview = createAsyncThunk(
	'reviews/add',
	async (params, thunkAPI) => {
		try {
			return await reviewService.addReview(params.locationId, params.review);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
		}
	}
);

export const getReviews = createAsyncThunk(
	'reviews/getAll',
	async (reviews, thunkAPI) => {
		console.log(reviews);
	}
);

export const reviewSlice = createSlice({
	name: 'review',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export default reviewSlice.reducer;
