import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchTvShows } from '../../store/TvShowThunk';
import { TvShow} from '../../types';
import Spinner from "../Spinner/Spinner";
import {SearchShows} from "../../store/TvShowSlice";

const initialState = {
    name: '',
};

const SearchTvShow: React.FC = () => {
    const [query, setQuery] = useState(initialState);
    const dispatch = useAppDispatch();
    const shows = useAppSelector(SearchShows);
    const tvShowsLoading = useAppSelector(state => state.TvShows.fetchLoading);

    useEffect(() => {
        if (query.name.length > 0) {
            dispatch(fetchTvShows(query.name));
        }
    }, [query, dispatch]);

    const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery((prev) => ({
            ...prev,
            name: event.target.value,
        }));
    };

    return (
        <div className="d-flex flex-column col-6">
            <div className="d-flex flex-row align-items-center mb-4">
                <h5 className="col-4 m-0 p-0">Search for TV Show</h5>
                <input
                    className="form-control"
                    type="text"
                    value={query.name}
                    onChange={onFieldChange}
                    placeholder="Search TV shows"
                />
            </div>

            <>
                {tvShowsLoading ? (
                    <Spinner/>
                ) : (
                    <div className="autocomplete">
                        {shows.length > 0 ? (
                            shows.map((show: TvShow) => (
                                <div className={show.name} key={show.id}>
                                    <Link to={`/shows/${show.id}`}>
                                        {show.name}
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <h5>Страница с ссылками пуста</h5>
                        )}
                    </div>
                )}
            </>
        </div>
    );
};

export default SearchTvShow;
