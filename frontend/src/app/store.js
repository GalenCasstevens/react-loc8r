import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../features/locations/locationSlice';

export const store = configureStore({
	reducer: {
		locations: locationReducer,
	},
});
