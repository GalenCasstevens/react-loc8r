import { configureStore } from '@reduxjs/toolkit';
import reviewReducer from '../features/reviews/reviewSlice';

export const store = configureStore({
	reducer: {
		review: reviewReducer,
	},
});
