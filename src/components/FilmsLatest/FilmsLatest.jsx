import React from 'react';
import FilmsLatestCard from '../FilmsLatestCard/FilmsLatestCard';

const filmsInfo = [
    {
        id: 1,
        title: 'Мульт в кино. Выпуск №103. Некогда грустить!',
        link: '#',
        alt: 'film-1',
        imgPath: '/assets/img/card-img-1.jpg',
        text: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
    },
    {
        id: 2,
        title: 'Мульт в кино. Выпуск №103. Некогда грустить!',
        link: '#',
        alt: 'film-2',
        imgPath: '/assets/img/card-img-2.jpg',
        text: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
    },
    {
        id: 3,
        title: 'Мульт в кино. Выпуск №103. Некогда грустить!',
        link: '#',
        alt: 'film-3',
        imgPath: '/assets/img/card-img-3.jpg',
        text: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
    },
    {
        id: 4,
        title: 'Мульт в кино. Выпуск №103. Некогда грустить!',
        link: '#',
        alt: 'film-4',
        imgPath: '/assets/img/card-img-4.jpg',
        text: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
    },
]

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
                            {
                                filmsInfo.map(film =>
                                    <FilmsLatestCard key={film.id} title={film.title} link={film.link} alt={film.alt} text={film.text} imgPath={film.imgPath} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FilmsLatest;