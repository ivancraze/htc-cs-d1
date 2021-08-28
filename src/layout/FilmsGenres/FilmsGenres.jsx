import React from 'react';

const FilmsGenres = () => {
    return (
        <>
            <section class="films-genres">
                <div class="container">
                    <div class="films-genres__wrapper">
                        <h2 class="films-genres__title">Жанры</h2>
                        <div class="films-genres__items">
                            <a class="films-genres__card films-genres__card--yellow" href="#">
                                <img class="films-genres__card-icon" src="img/icons/😁.svg" />
                                <span class="films-genres__card-text">Комедии</span>
                            </a>
                            <a class="films-genres__card films-genres__card--orange" href="#">
                                <img class="films-genres__card-icon" src="img/icons/😭.svg" />
                                <span class="films-genres__card-text">Драмы</span>
                            </a>
                            <a class="films-genres__card films-genres__card--blue" href="#">
                                <img class="films-genres__card-icon" src="img/icons/👽.svg" />
                                <span class="films-genres__card-text">Фантастика</span>
                            </a>
                            <a class="films-genres__card films-genres__card--black" href="#">
                                <img class="films-genres__card-icon" src="img/icons/👻.svg" />
                                <span class="films-genres__card-text">Ужасы</span>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default FilmsGenres;