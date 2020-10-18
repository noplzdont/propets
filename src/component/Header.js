import React from 'react';
import LOGO_MAIN_SMALL from "../images/logo_main_small.png";
import style from "../module/header.module.css";
import {Link} from "react-router-dom";
import {BASE_URL} from "../utils/constants";

const Header = () =>
{
    return (
        <div className = {`jumbotron-fluid d-flex justify-content-center ${style.jumbotron}`}>
            <header className = {`container row justify-content-between ${style.header}`}>
                <div className = "col-xl-6 col-6 row d-flex align-content-center justify-content-start">
                    <img className ={"img-fluid"} src = {LOGO_MAIN_SMALL}/>
                </div>
                <div className = "col-xl-6 col-6 row d-flex align-content-center justify-content-end">
                        <button className = {style.button_sign_in}>
                            Sign In
                        </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
