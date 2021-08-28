import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Index from '../../pages/index';
import Channels from '../../pages/channels';


const FilmsHeader = () => {
    return (
        <>
            <BrowserRouter >
                <nav class="films-header">
                    <div class="container">
                        <div class="films-header__wrapper">
                            <Link class="films-header__item" to="/">Фильмы</Link>
                            <Link class="films-header__item  films-header__item--active" to="/channels">Телеканалы</Link>
                            {/* <a href="#" class="films-header__item">Фильмы</a>
                            <a href="#" class="films-header__item  films-header__item--active">Телеканалы</a> */}
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <Index />
                    </Route>
                    <Route path="/channels">
                        <Channels />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default FilmsHeader;