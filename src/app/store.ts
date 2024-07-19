import { configureStore } from '@reduxjs/toolkit';
import { searchTvShowReducer } from '../store/TvShowSlice';

export const store = configureStore({
    reducer: {
        TvShows: searchTvShowReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;