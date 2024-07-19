import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../app/store';
import {TvShow, TvShowDisplay} from '../types';

export const fetchTvShowDisplay = createAsyncThunk<TvShowDisplay, number, { state: RootState }>(
    'searchTvShow/fetchTvShowDetails',
    async (id) => {
        const response = await axios.get<TvShowDisplay>(`https://api.tvmaze.com/shows/${id}`);
        return response.data;
    }
);

export const fetchTvShows = createAsyncThunk<TvShow[], string, { state: RootState }>(
    'searchTvShow/fetchTvShows',
    async (query) => {
        const response = await axios.get<{ show: TvShow }[]>(`https://api.tvmaze.com/search/shows?q=${query}`);
        return response.data.map(result => result.show);
    }
);
