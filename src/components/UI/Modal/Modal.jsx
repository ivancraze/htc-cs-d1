import React, { useContext, useState, useEffect, useCallback } from 'react';
import { AuthContext } from "../../../context";
import styles from './Modal.module.css'

const Modal = ({ visible, setVisible }) => {
    const rootClasses = ['modal']
    if (visible) {
        rootClasses.push('modal--show');
    }

    const [username, setUsername] = useState('');

    const [checked, setChecked] = useState(false)
    const handleClick = () => {
        setChecked(!checked)
    }


    const { setIsAuth } = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        let settings = {
            login: username,
            remember: checked
        };
        localStorage.setItem('auth', 'true')
        localStorage.setItem('settings', JSON.stringify(settings))
        setVisible(false);
    }

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setVisible(false)
        }
    }, [setVisible]);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    return (
        <section className={rootClasses.join(' ')}>
            <form className="modal__form" onSubmit={login}>
                <h2 className="modal__title">Вход</h2>
                <div className="modal__inputs">
                    <input className="modal__login modal__input" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Логин" required />
                    <input className="modal__pass modal__input" type="password" placeholder="Пароль" required />
                    <label className={styles.custom_checkbox} htmlFor="checkbox-member">
                        <input type="checkbox" onChange={handleClick} checked={checked} name="Запомнить" id="checkbox-member" />
                        <span>Запомнить</span>
                    </label>
                </div>
                <button className="modal-login__btn" type="submit">Войти</button>
            </form>
            <div className="modal__shadow" onClick={() => setVisible(false)}></div>
        </section>
    );
};

export default Modal;