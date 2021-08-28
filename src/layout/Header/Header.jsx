import React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from '../../pages/index';

import Button from '../../components/Button/Button';

function Header({ ...props }) {
    return (
        <>
            <header class="header">
                <div class="container">
                    <div class="header-wrapper">
                        <a className="header-logo" href="/">
                            <img class="header-logo__icon" src="img/logo.svg" alt="Видеосервис" />
                            <h1 class="header-logo__text">{props.title}</h1>
                        </a>
                        <div class="header-search">
                            <input class="header-search__input" type="text" placeholder="Поиск..." />
                            <button class="header-search__btn" type="button">Найти</button>
                        </div>
                        <div class="header-login">
                            <button class="header-login__btn" type="button">Войти</button>
                            <div class="header-login__user">
                                <div class="header-login__user-name">Константин К.</div>
                                <button class="header-login__user-btn" type="button">Выйти</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};


Header.propTypes = {
    title: PropTypes.string
}

export default Header;