import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';


function Header({ ...props }) {

    const [modal, setModal] = useState(false);

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
                            <Button className="header-login__btn" onClick={() => setModal(true)}>Войти</Button>
                            <div className="header-login__user">
                                <div className="header-login__user-name">Константин К.</div>
                                <Button className="header-login__user-btn" >Выйти</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <Modal visible={modal} setVisible={setModal}/>
        </>
    );
};


Header.propTypes = {
    title: PropTypes.string
}

export default Header;