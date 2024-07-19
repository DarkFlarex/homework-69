import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { fetchTvShows } from '../../store/TvShowThunk';


const initialState = {
    name: '',
};

const SearchTvShow: React.FC = () => {
    const [query, setQuery] = useState(initialState);
    const dispatch = useAppDispatch();

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
        <div className="d-flex flex-column">
            <div className="col-7 d-flex flex-row align-items-center mb-4">
                <h5 className="col-3 m-0 p-0">Search for TV Show</h5>
                <input
                    className="form-control"
                    type="text"
                    value={query.name}
                    onChange={onFieldChange}
                    placeholder="Search TV shows"
                />
            </div>
        </div>
    );
};

export default SearchTvShow;
