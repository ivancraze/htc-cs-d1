import React from 'react';

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="footer-wrapper">
                        <img class="footer-logo" src="../ui/" alt="footer_logo" />
                        <div class="footer-info">
                            <p class="footer-info__address">426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</p>
                            <div class="footer-info__phone">
                                <a class="footer-info__phone-link" href="tel:+73412938861">+7 (3412) 93-88-61</a>,
                                <a class="footer-info__phone-link" href="tel:+3412432929">43-29-29</a>
                            </div>
                            <a class="footer-info__link" href="htc-cs.ru">htc-cs.ru</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;