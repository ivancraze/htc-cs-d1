import React from 'react';
import FilmsLatest from '../layout/FilmsLatest/FilmsLatest';
import FilmsGenres from '../layout/FilmsGenres/FilmsGenres';

const index = () => {
    return (
        <>
            <FilmsLatest />
            <FilmsGenres />
        </>
    );
};

export default index;