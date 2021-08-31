import React from 'react';
import { BrowserRouter, NavLink , Switch, Route } from 'react-router-dom';
import Index from '../../pages/index';
import Channels from '../../pages/channels';


const FilmsHeader = () => {
    return (
        <>
            <BrowserRouter >
                <nav className="films-header">
                    <div className="container">
                        <div className="films-header__wrapper">
                            <NavLink activeClassName="films-header__item--active" className="films-header__item" exact to="/">Фильмы</NavLink>
                            <NavLink activeClassName="films-header__item--active" className="films-header__item" exact to="/channels">Телеканалы</NavLink>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <main className="content">
                            <Index />
                        </main>
                    </Route>
                    <Route path="/channels">
                        <main className="content">
                            <Channels />
                        </main>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default FilmsHeader;