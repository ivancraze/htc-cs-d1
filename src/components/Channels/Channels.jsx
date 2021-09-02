import React from 'react';
import CustomScroll from 'react-custom-scroll';

const Channels = () => {
    return (

        <section className="channels">
            <div className="container">
                <CustomScroll>
                    <div className="channels-wrapper">

                        <div className="channels-card">
                            <div className="channels-card__logo">
                                <img className="channels-card__logo-img" src="/assets/img/channels/first.svg" alt="logo" />
                            </div>
                            <div className="channels-card__schedule">
                                <div className="channels-card__schedule-title">Первый канал</div>
                                <div className="channels-card__schedule-item channels-card__schedule-item--active">
                                    <span className="channels-card__schedule-time">13:00</span>
                                    <span className="channels-card__schedule-name">Новости (с
                                        субтитрами)</span>
                                </div>
                                <div className="channels-card__schedule-item">
                                    <span className="channels-card__schedule-time">14:00</span>
                                    <span className="channels-card__schedule-name">Давай поженимся</span>
                                </div>
                                <div className="channels-card__schedule-item">
                                    <span className="channels-card__schedule-time">15:00</span>
                                    <span className="channels-card__schedule-name">Другие новости</span>
                                </div>
                            </div>
                        </div>
                        <div className="channels-card">
                            <div className="channels-card__logo">
                                <img className="channels-card__logo-img" src="/assets/img/channels/2x2.svg" alt="logo" />
                            </div>
                            <div className="channels-card__schedule">
                                <div className="channels-card__schedule-title">2x2</div>
                                <div className="channels-card__schedule-item channels-card__schedule-item--active">
                                    <span className="channels-card__schedule-time">13:00</span>
                                    <span className="channels-card__schedule-name">МУЛЬТ ТВ. Сезон 4, 7 серия</span>
                                </div>
                                <div className="channels-card__schedule-item">
                                    <span className="channels-card__schedule-time">14:00</span>
                                    <span className="channels-card__schedule-name">ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия</span>
                                </div>
                                <div className="channels-card__schedule-item">
                                    <span className="channels-card__schedule-time">15:00</span>
                                    <span className="channels-card__schedule-name">БУРДАШЕВ. Сезон 1, 20 серия</span>
                                </div>
                            </div>
                        </div>
                        <div className="channels-card">
                            <div className="channels-card__logo">
                                <img className="channels-card__logo-img" src="/assets/img/channels/rbc.svg" alt="logo" />
                            </div>
                            <div className="channels-card__schedule">
                                <div className="channels-card__schedule-title">РБК</div>
                                <div className="channels-card__schedule-item channels-card__schedule-item--active">
                                    <span className="channels-card__schedule-time">13:00</span>
                                    <span className="channels-card__schedule-name">ДЕНЬ. Горючая смесь: как бороться с суррогатом на
                                        АЗС</span>
                                </div>
                                <div className="channels-card__schedule-item">
                                    <span className="channels-card__schedule-time">14:00</span>
                                    <span className="channels-card__schedule-name">ДЕНЬ. Главные темы</span>
                                </div>
                                <div className="channels-card__schedule-item">
                                    <span className="channels-card__schedule-time">15:00</span>
                                    <span className="channels-card__schedule-name">Главные новости</span>
                                </div>
                            </div>
                        </div>
                        <div className="channels-card">
                            <div className="channels-card__logo">
                                <img className="channels-card__logo-img" src="/assets/img/channels/amedia.svg" alt="logo" />
                            </div>
                            <div className="channels-card__schedule">
                                <div className="channels-card__schedule-title">AMEDIA PREMIUM</div>
                                <div className="channels-card__schedule-item channels-card__schedule-item--active">
                                    <span className="channels-card__schedule-time">13:00</span>
                                    <span className="channels-card__schedule-name">Клиент всегда мёртв</span>
                                </div>
                                <div className="channels-card__schedule-item">
                                    <span className="channels-card__schedule-time">14:00</span>
                                    <span className="channels-card__schedule-name">Голодные игры: Сойка-пересмешница. Часть I</span>
                                </div>
                                <div className="channels-card__schedule-item">
                                    <span className="channels-card__schedule-time">15:00</span>
                                    <span className="channels-card__schedule-name">Секс в большом городе</span>
                                </div>
                            </div>
                        </div>
                        <div className="channels-card">
                            <div className="channels-card__logo">
                                <img className="channels-card__logo-img" src="/assets/img/channels/amedia.svg" alt="logo" />
                            </div>
                            <div className="channels-card__schedule">
                                <div className="channels-card__schedule-title">AMEDIA PREMIUM</div>
                                <div className="channels-card__schedule-item channels-card__schedule-item--active">
                                    <span className="channels-card__schedule-time">13:00</span>
                                    <span className="channels-card__schedule-name">Клиент всегда мёртв</span>
                                </div>
                                <div className="channels-card__schedule-item">
                                    <span className="channels-card__schedule-time">14:00</span>
                                    <span className="channels-card__schedule-name">Голодные игры: Сойка-пересмешница. Часть I</span>
                                </div>
                                <div className="channels-card__schedule-item">
                                    <span className="channels-card__schedule-time">15:00</span>
                                    <span className="channels-card__schedule-name">Секс в большом городе</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </CustomScroll>
            </div>
        </section>

    );
};

export default Channels;