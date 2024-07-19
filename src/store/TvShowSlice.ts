import { createSlice } from '@reduxjs/toolkit';
import { fetchTvShows } from './TvShowThunk';
import { TvShow } from '../types';
import {RootState} from "../app/store";

export interface SearchTvShowState {
    shows: TvShow[];
    fetchLoading: boolean;
}

const initialState: SearchTvShowState = {
    shows: [],
    fetchLoading: false,
};

export const tvShowSlice = createSlice({
    name: 'TvShows',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTvShows.pending, (state) => {
                state.fetchLoading = true;
            })
            .addCase(fetchTvShows.fulfilled, (state, { payload: shows }) => {
                state.fetchLoading = false;
                state.shows = shows;
            })
            .addCase(fetchTvShows.rejected, (state) => {
                state.fetchLoading = false;
            });
    },
});

export const searchTvShowReducer = tvShowSlice.reducer;
export const SearchShows = (state: RootState)=> state.TvShows.shows;