import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";
import "./assets/styles/Styles.scss"

function App() {

    return (
        <div className="App">

            <Header />

            <Outlet />

            <Footer />

        </div>
    );
}

export default App;