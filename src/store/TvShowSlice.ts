import { createSlice } from '@reduxjs/toolkit';
import { fetchTvShows, fetchTvShowDisplay } from './TvShowThunk';
import { TvShow, TvShowDisplay } from '../types';
import {RootState} from "../app/store";

export interface SearchTvShowState {
    shows: TvShow[];
    showDisplay: TvShowDisplay | null;
    fetchLoading: boolean;
}

const initialState: SearchTvShowState = {
    shows: [],
    showDisplay: null,
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
            })
            .addCase(fetchTvShowDisplay.pending, (state) => {
                state.fetchLoading = true;
            })
            .addCase(fetchTvShowDisplay.fulfilled, (state, { payload: showDisplay }) => {
                state.fetchLoading = false;
                state.showDisplay = showDisplay;
            })
            .addCase(fetchTvShowDisplay.rejected, (state) => {
                state.fetchLoading = false;
            });
    },
});

export const searchTvShowReducer = tvShowSlice.reducer;
export const selectAutocomplete = (state: RootState)=> state.TvShows.showDisplay;
export const SearchShows = (state: RootState)=> state.TvShows.shows;