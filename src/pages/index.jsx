import React from 'react';
import FilmsLatest from '../components/FilmsLatest/FilmsLatest';
import FilmsGenres from '../components/FilmsGenres/FilmsGenres';

const index = () => {
    return (
        <>
            <FilmsLatest />
            <FilmsGenres />
        </>
    );
};

export default index;