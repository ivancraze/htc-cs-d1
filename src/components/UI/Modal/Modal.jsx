import React from 'react';

const Modal = ({visible, setVisible}) => {


    const rootClasses = ['modal']

    if (visible) {
        rootClasses.push('modal--show');
    }


    return (
        <>
            <section className={rootClasses.join(' ')}>
                <form className="modal__form" action="/">
                    <h2 className="modal__title">Вход</h2>
                    <div className="modal__inputs">
                        <input className="modal__login" type="text" placeholder="Логин" required />
                        <input className="modal__pass" type="text" placeholder="Пароль" required />
                        <label className="modal__member-label" htmlFor="checkbox-member" >
                            <input className="modal__member-checkbox" type="checkbox" name="Запомнить" id="checkbox-member" />
                            Запомнить
                        </label>
                    </div>
                    <button className="modal-login__btn" type="button">Войти</button>
                </form>
                <div className="modal__shadow" onClick={() => setVisible(false)}></div>
            </section>
        </>
    );
};

export default Modal;