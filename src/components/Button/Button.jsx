import React from 'react';

const Button = ({ children, ...props }) => {
    return (
        <>
            <button {...props} class="header-search__btn" type="button">{children}</button>
        </>
    );
};

export default Button;