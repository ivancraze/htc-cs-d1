import React from 'react';

const FilmsGenres = () => {
    return (
        <>
            <section className="films-genres">
                <div className="container">
                    <div className="films-genres__wrapper">
                        <h2 className="films-genres__title">Жанры</h2>
                        <div className="films-genres__items">
                            <a className="films-genres__card films-genres__card--yellow" href="#">
                                <img className="films-genres__card-icon" src="/assets/img/icons/😁.svg" alt="icon" />
                                <span className="films-genres__card-text">Комедии</span>
                            </a>
                            <a className="films-genres__card films-genres__card--orange" href="#">
                                <img className="films-genres__card-icon" src="/assets/img/icons/😭.svg" alt="icon" />
                                <span className="films-genres__card-text">Драмы</span>
                            </a>
                            <a className="films-genres__card films-genres__card--blue" href="#">
                                <img className="films-genres__card-icon" src="/assets/img/icons/👽.svg" alt="icon" />
                                <span className="films-genres__card-text">Фантастика</span>
                            </a>
                            <a className="films-genres__card films-genres__card--black" href="#">
                                <img className="films-genres__card-icon" src="/assets/img/icons/👻.svg" alt="icon" />
                                <span className="films-genres__card-text">Ужасы</span>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default FilmsGenres;