import React from 'react';

const genres = [
    { name: 'Комедии', iconPath: '/assets/img/icons/😁.svg', gradient: 'yellow', },
    { name: 'Драмы', iconPath: '/assets/img/icons/😭.svg', gradient: 'orange', },
    { name: 'Фантастика', iconPath: '/assets/img/icons/👽.svg', gradient: 'blue', },
    { name: 'Ужасы', iconPath: '/assets/img/icons/👻.svg', gradient: 'black', },
]

const FilmsGenres = () => {
    return (
        <>
            <section className="films-genres">
                <div className="container">
                    <div className="films-genres__wrapper">
                        <h2 className="films-genres__title">Жанры</h2>
                        <div className="films-genres__items">
                            {
                                genres.map(genre =>
                                    <a className={`films-genres__card films-genres__card--${genre.gradient}`} href="#">
                                        <img className="films-genres__card-icon" src={genre.iconPath} alt="icon" />
                                        <span className="films-genres__card-text">{genre.name}</span>
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FilmsGenres;