import React from 'react';

const Channels = () => {
    return (
        <>
            <section class="channels">
                <div class="container">
                    <div class="channels-wrapper ss-container">
                        <div class="channels-card">
                            <div class="channels-card__logo">
                                <img class="channels-card__logo-img" src="../ui/img/channels/first.svg" alt="logo" />
                            </div>
                            <div class="channels-card__schedule">
                                <div class="channels-card__schedule-title">Первый канал</div>
                                <div class="channels-card__schedule-item channels-card__schedule-item--active">
                                    <span class="channels-card__schedule-time">13:00</span>
                                    <span class="channels-card__schedule-name">Новости (с
                                        субтитрами)</span>
                                </div>
                                <div class="channels-card__schedule-item">
                                    <span class="channels-card__schedule-time">14:00</span>
                                    <span class="channels-card__schedule-name">Давай поженимся</span>
                                </div>
                                <div class="channels-card__schedule-item">
                                    <span class="channels-card__schedule-time">15:00</span>
                                    <span class="channels-card__schedule-name">Другие новости</span>
                                </div>
                            </div>
                        </div>

                        <div class="channels-card">
                            <div class="channels-card__logo">
                                <img class="channels-card__logo-img" src="../ui/img/channels/2x2.svg" alt="logo" />
                            </div>
                            <div class="channels-card__schedule">
                                <div class="channels-card__schedule-title">2x2</div>
                                <div class="channels-card__schedule-item channels-card__schedule-item--active">
                                    <span class="channels-card__schedule-time">13:00</span>
                                    <span class="channels-card__schedule-name">МУЛЬТ ТВ. Сезон 4, 7 серия</span>
                                </div>
                                <div class="channels-card__schedule-item">
                                    <span class="channels-card__schedule-time">14:00</span>
                                    <span class="channels-card__schedule-name">ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия</span>
                                </div>
                                <div class="channels-card__schedule-item">
                                    <span class="channels-card__schedule-time">15:00</span>
                                    <span class="channels-card__schedule-name">БУРДАШЕВ. Сезон 1, 20 серия</span>
                                </div>
                            </div>
                        </div>

                        <div class="channels-card">
                            <div class="channels-card__logo">
                                <img class="channels-card__logo-img" src="../ui/img/channels/rbc.svg" alt="logo" />
                            </div>
                            <div class="channels-card__schedule">
                                <div class="channels-card__schedule-title">РБК</div>
                                <div class="channels-card__schedule-item channels-card__schedule-item--active">
                                    <span class="channels-card__schedule-time">13:00</span>
                                    <span class="channels-card__schedule-name">ДЕНЬ. Горючая смесь: как бороться с суррогатом на
                                        АЗС</span>
                                </div>
                                <div class="channels-card__schedule-item">
                                    <span class="channels-card__schedule-time">14:00</span>
                                    <span class="channels-card__schedule-name">ДЕНЬ. Главные темы</span>
                                </div>
                                <div class="channels-card__schedule-item">
                                    <span class="channels-card__schedule-time">15:00</span>
                                    <span class="channels-card__schedule-name">Главные новости</span>
                                </div>
                            </div>
                        </div>

                        <div class="channels-card">
                            <div class="channels-card__logo">
                                <img class="channels-card__logo-img" src="../ui/img/channels/amedia.svg" alt="logo" />
                            </div>
                            <div class="channels-card__schedule">
                                <div class="channels-card__schedule-title">AMEDIA PREMIUM</div>
                                <div class="channels-card__schedule-item channels-card__schedule-item--active">
                                    <span class="channels-card__schedule-time">13:00</span>
                                    <span class="channels-card__schedule-name">Клиент всегда мёртв</span>
                                </div>
                                <div class="channels-card__schedule-item">
                                    <span class="channels-card__schedule-time">14:00</span>
                                    <span class="channels-card__schedule-name">Голодные игры: Сойка-пересмешница. Часть I</span>
                                </div>
                                <div class="channels-card__schedule-item">
                                    <span class="channels-card__schedule-time">15:00</span>
                                    <span class="channels-card__schedule-name">Секс в большом городе</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Channels;