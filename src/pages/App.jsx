import React, { useState, useEffect } from "react";
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { AuthContext } from '../context'

export default function App() {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])

    return (
        <>
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
            }}>
                <Header title="Видеосервис" />
                <Navbar />
                <Footer />
            </AuthContext.Provider>
        </>
    );
}
