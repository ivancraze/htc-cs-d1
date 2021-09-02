import React from 'react';

const error = () => {
    return (
        <section className="error">
            <h1 className="error-title">Ошибка 404. Страница не найдена</h1>
            <a className="error-link" href="/">На главную</a>
        </section>
    );
};

export default error;