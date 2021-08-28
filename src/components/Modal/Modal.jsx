import React from 'react';

const Modal = () => {
    return (
        <>
            <section class="modal">
                <form class="modal__form" action="/">
                    <h2 class="modal__title">Вход</h2>
                    <div class="modal__inputs">
                        <input class="modal__login" type="text" placeholder="Логин" required />
                        <input class="modal__pass" type="text" placeholder="Пароль" required />
                        <label class="modal__member-label" for="checkbox-member" >
                            <input class="modal__member-checkbox" type="checkbox" name="Запомнить" id="checkbox-member" />
                            Запомнить
                        </label>
                    </div>
                    <button class="modal-login__btn" type="button">Войти</button>
                </form>
                <div class="modal__shadow"></div>
            </section>
        </>
    );
};

export default Modal;