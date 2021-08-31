import React from 'react';
import FilmsLatest from '../components/FilmsLatest/FilmsLatest';
import FilmsGenres from '../components/FilmsGenres/FilmsGenres';

const Films = () => {
    return (
        <>
            <FilmsLatest />
            <FilmsGenres />
        </>
    );
};

export default Films;