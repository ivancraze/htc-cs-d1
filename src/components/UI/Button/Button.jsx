import React from 'react';

const Button = ({ children, className, ...props }) => {
    return (
        <button className={className} {...props} type="button">{children}</button>
    );
};

export default Button;