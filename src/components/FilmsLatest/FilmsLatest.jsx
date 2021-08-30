import React from 'react';
import FilmsLatestCard from '../FilmsLatestCard/FilmsLatestCard';

const FilmsLatest = () => {
    return (
        <>
            <section class="films-latest">
                <div class="container">
                    <div class="films-latest__wrapper">
                        <div class="films-latest__title">
                            <h2 class="films-latest__title-text">🔥 Новинки</h2>
                        </div>
                        <div class="films-latest__items">
                            <FilmsLatestCard />
                            <FilmsLatestCard />
                            <FilmsLatestCard />
                            <FilmsLatestCard />
                            {/* <a class="films-latest__card" href="#">
                                <div class="films-latest__card-wrapper">
                                    <img class="films-latest__card-img" src="../ui/img/card-img-2.jpg" alt="film-1" />
                                    <span class="films-latest__hover-text">Фильм повествует о череде событий, произошедших в
                                        Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его
                                        дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире
                                        киноиндустрии.</span>
                                </div>
                                <span class="films-latest__card-text">Новый Бэтмен</span>
                            </a>
                            <a class="films-latest__card" href="#">
                                <div class="films-latest__card-wrapper">
                                    <img class="films-latest__card-img" src="../ui/img/card-img-3.jpg" alt="film-1" />
                                    <span class="films-latest__hover-text">Фильм повествует о череде событий, произошедших в
                                        Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его
                                        дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире
                                        киноиндустрии.</span>
                                </div>
                                <span class="films-latest__card-text">Однажды... в Голливуде</span>
                            </a>
                            <a class="films-latest__card" href="#">
                                <div class="films-latest__card-wrapper">
                                    <img class="films-latest__card-img" src="../ui/img/card-img-4.jpg" alt="film-1" />
                                    <span class="films-latest__hover-text">Фильм повествует о череде событий, произошедших в
                                        Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его
                                        дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире
                                        киноиндустрии.</span>
                                </div>
                                <span class="films-latest__card-text">Стриптизёрши</span>
                            </a> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FilmsLatest;