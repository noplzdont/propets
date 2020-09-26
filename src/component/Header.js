import React from 'react';
import LOGO_MAIN_SMALL from "../images/logo_main_small.png";
import style from "../module/header.module.css";

const Header = () =>
{
    return (
        <div className = {`jumbotron-fluid d-flex justify-content-center ${style.jumbotron}`}>
            <header className = {`container row justify-content-between ${style.header}`}>
                <div className = "col-xl-2 row d-flex align-content-center">
                    <img src = {LOGO_MAIN_SMALL}/>
                </div>
                <div className = "col-xl-2 row d-flex align-content-center">
                    <button className = {style.button}>
                        Sign In
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
