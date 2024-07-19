import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../app/store';
import {TvShow} from '../types';

export const fetchTvShows = createAsyncThunk<TvShow[], string, { state: RootState }>(
    'searchTvShow/fetchTvShows',
    async (query) => {
        const response = await axios.get<{ show: TvShow }[]>(`https://api.tvmaze.com/search/shows?q=${query}`);
        return response.data.map(result => result.show);
    }
);
