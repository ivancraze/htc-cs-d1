import React from 'react';
import { BrowserRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom';
import Films from '../../pages/films';
import Channels from '../../pages/channels';
import Error from '../../pages/error';



const Navbar = () => {
    return (
        <>
            <BrowserRouter >
                <nav className="films-header">
                    <div className="container">
                        <div className="films-header__wrapper">
                            <NavLink activeClassName="films-header__item--active" className="films-header__item " exact to="/films">Фильмы</NavLink>
                            <NavLink activeClassName="films-header__item--active" className="films-header__item" exact to="/channels">Телеканалы</NavLink>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/films">
                        <main className="content">
                            <Films />
                        </main>
                    </Route>
                    <Route path="/channels">
                        <main className="content">
                            <Channels />
                        </main>
                    </Route>
                    <Route path="/404">
                        <main className="content">
                            <Error />
                        </main>
                    </Route>
                    <Redirect to="/404" />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default Navbar;