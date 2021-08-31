import React from 'react';
import FilmsLatestCard from '../FilmsLatestCard/FilmsLatestCard';

const FilmsLatest = () => {
    return (
        <>
            <section className="films-latest">
                <div className="container">
                    <div className="films-latest__wrapper">
                        <div className="films-latest__title">
                            <h2 className="films-latest__title-text">🔥 Новинки</h2>
                        </div>
                        <div className="films-latest__items">
                            <FilmsLatestCard />
                            <FilmsLatestCard />
                            <FilmsLatestCard />
                            <FilmsLatestCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FilmsLatest;