import React from 'react';
import FilmsLatest from '../layout/FilmsLatest/FilmsLatest';
import FilmsGenres from '../layout/FilmsGenres/FilmsGenres';

const index = () => {
    return (
        <main className="content">
            <FilmsLatest />
            <FilmsGenres />
        </main>
    );
};

export default index;