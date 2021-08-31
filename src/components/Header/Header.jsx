import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import { AuthContext } from "../../context";


function Header({ ...props }) {

    const [modal, setModal] = useState(false);
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const username = JSON.parse(localStorage.getItem('login'));


    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        localStorage.removeItem('login');
    }


    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <a className="header-logo" href="/films">
                            <img className="header-logo__icon" src="/assets/img/icons/logo.svg" alt="Видеосервис" />
                            <h1 className="header-logo__text">{props.title}</h1>
                        </a>
                        <div className="header-search">
                            <input className="header-search__input" type="text" placeholder="Поиск..." />
                            <Button className="header-search__btn">Найти</Button>
                        </div>
                        <div className="header-login">
                            {isAuth
                                ?
                                <div className="header-login__user">
                                    <div className="header-login__user-name">{username}</div>
                                    <Button
                                        className="header-login__user-btn"
                                        onClick={() => logout()}
                                    >
                                        Выйти
                                    </Button>
                                </div>
                                :
                                <Button
                                    className="header-login__btn"
                                    onClick={() => setModal(true)}
                                >
                                    Войти
                                </Button>}
                        </div>
                    </div>
                </div>
            </header>

            <Modal visible={modal} setVisible={setModal} />
        </>
    );
};


Header.propTypes = {
    title: PropTypes.string
}

export default Header;