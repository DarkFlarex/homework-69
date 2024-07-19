import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchTvShowDisplay } from '../../store/TvShowThunk';
import { RootState } from '../../app/store';
import Spinner from "../Spinner/Spinner";
import {selectAutocomplete} from "../../store/TvShowSlice";

const TvShowDisplay: React.FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const showDisplay = useAppSelector(selectAutocomplete);
    const fetchLoading = useAppSelector((state: RootState) => state.TvShows.fetchLoading);

    useEffect(() => {
        if (id !== undefined) {
            dispatch(fetchTvShowDisplay(parseInt(id)));
        }
    }, [id, dispatch]);

    return (
        <>
            {fetchLoading ? (
                <Spinner />
            ) : (
                showDisplay ? (
                    <div className={`${showDisplay.name} d-flex col-12 justify-content-center`}>
                        <img src={showDisplay.image.medium} className="me-4" alt={showDisplay.name}/>
                        <div>
                            <h4>{showDisplay.name}</h4>
                            <div dangerouslySetInnerHTML={{__html: showDisplay.summary}}></div>
                        </div>
                    </div>
                ) : <h5>Фильм не найден</h5>
            )}
        </>
    );
};

export default TvShowDisplay;
