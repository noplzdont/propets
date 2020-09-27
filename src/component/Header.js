import React from 'react';
import LOGO_MAIN_SMALL from "../images/logo_main_small.png";
import style from "../module/header.module.css";

const Header = () =>
{
    return (
        <div className = {`jumbotron-fluid d-flex justify-content-center mb-2 ${style.jumbotron}`}>
            <header className = {`container row justify-content-between ${style.header}`}>
                <div className = "col-xl-6 col-6 row d-flex align-content-center justify-content-start">
                    <img className ={"img-fluid"} src = {LOGO_MAIN_SMALL}/>
                </div>
                <div className = "col-xl-6 col-6 row d-flex align-content-center justify-content-end">
                    <button className = {style.button}>
                        Sign In
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
