import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import { AuthContext } from "../../context";


function Header({ ...props }) {

    const [modal, setModal] = useState(false);
    const [isEditable, setEditable] = useState(false);
    const [username, setUsername] = useState('');

    const { isAuth, setIsAuth } = useContext(AuthContext);

    const getUsernameLocalStorage = () => {
        if (localStorage.getItem('settings') != null) {
            let settings = JSON.parse(localStorage.getItem('settings'))
            return settings.login;
        } else return
    };

    const setUsernameLocalStorage = (login) => {
        let settings = JSON.parse(localStorage.getItem('settings'))
        settings.login = login;
        localStorage.setItem('settings', JSON.stringify(settings));
        setEditable(false);
    }

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        localStorage.removeItem('settings');
    }


    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <a className="header-logo" href="/">
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
                                    {isEditable
                                        ? <input
                                            autoFocus
                                            className="header-login__input"
                                            onBlur={(e) => setUsernameLocalStorage(e.target.value)}
                                            defaultValue={getUsernameLocalStorage()}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        : <div className="header-login__user-name" onClick={() => setEditable(true)}>{getUsernameLocalStorage()}</div>
                                    }
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