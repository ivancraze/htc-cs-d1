import React, { useContext, useState } from 'react';
import { AuthContext } from "../../../context";

const Modal = ({ visible, setVisible }) => {
    const rootClasses = ['modal']
    if (visible) {
        rootClasses.push('modal--show');
    }

    const { isAuth, setIsAuth } = useContext(AuthContext);
    const [username, setUsername] = useState('');

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
        localStorage.setItem('login', JSON.stringify(username))
        setVisible(false);
    }


    return (
        <>
            <section className={rootClasses.join(' ')}>
                <form className="modal__form" onSubmit={login}>
                    <h2 className="modal__title">Вход</h2>
                    <div className="modal__inputs">
                        <input className="modal__login" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Логин" required />
                        <input className="modal__pass" type="password" placeholder="Пароль" required />
                        <label className="modal__member-label" htmlFor="checkbox-member" >
                            <input className="modal__member-checkbox" type="checkbox" name="Запомнить" id="checkbox-member" />
                            Запомнить
                        </label>
                    </div>
                    <button className="modal-login__btn" type="submit">Войти</button>
                </form>
                <div className="modal__shadow" onClick={() => setVisible(false)}></div>
            </section>
        </>
    );
};

export default Modal;