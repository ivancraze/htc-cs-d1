import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <img className="footer-logo" src="/assets/img/icons/footer-logo.svg" alt="footer_logo" />
                    <div className="footer-info">
                        <p className="footer-info__address">426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</p>
                        <div className="footer-info__phone">
                            <a className="footer-info__phone-link" href="tel:+73412938861">+7 (3412) 93-88-61, </a>
                            <a className="footer-info__phone-link" href="tel:+3412432929">43-29-29</a>
                        </div>
                        <a className="footer-info__link" href="https://htc-cs.ru/">htc-cs.ru</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;