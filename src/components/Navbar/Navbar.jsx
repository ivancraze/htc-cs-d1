import React from 'react';
import { BrowserRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom';
import Films from '../../pages/films';
import Channels from '../../pages/channels';
import Error from '../../pages/error';



const Navbar = () => {
    return (
        <BrowserRouter >
            <nav className="films-header">
                <div className="container">
                    <div className="films-header__wrapper">
                        <NavLink activeClassName="films-header__item--active" className="films-header__item " exact to="/">Фильмы</NavLink>
                        <NavLink activeClassName="films-header__item--active" className="films-header__item" exact to="/tv">Телеканалы</NavLink>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <main className="content">
                        <Films />
                    </main>
                </Route>
                <Route path="/tv">
                    <main className="content">
                        <Channels />
                    </main>
                </Route>
                <Route path="*">
                    <main className="content">
                        <Error />
                    </main>
                </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default Navbar;