import React from 'react';

const FilmsLatestCard = () => {
    return (
        <>
            <a class="films-latest__card" href="#">
                <div class="films-latest__card-wrapper">
                    <img class="films-latest__card-img" src="../ui/img/card-img-1.jpg" alt="film-1" />
                    <span class="films-latest__hover-text">Фильм повествует о череде событий, произошедших в
                        Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его
                        дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире
                        киноиндустрии.
                    </span>
                </div>
                <span class="films-latest__card-text">Мульт в кино. Выпуск №103. Некогда грустить!</span>
            </a>
        </>
    );
};

export default FilmsLatestCard;