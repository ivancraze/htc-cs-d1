import React from "react";
import Header from '../layout/Header/Header';
import FilmsHeader from '../layout/FilmsHeader/FilmsHeader';
import Footer from '../layout/Footer/Footer';


export default function App() {
    return (
        <>
            <Header title="Видеосервис"/>
            <FilmsHeader />
            <Footer />
        </>
    );
}
