import React from "react";
import Header from '../components/Header/Header';
import FilmsHeader from '../components/FilmsHeader/FilmsHeader';
import Footer from '../components/Footer/Footer';


export default function App() {


    return (
        <>
            <Header title="Видеосервис"/>
            <FilmsHeader />
            <Footer />
        </>
    );
}
