import React from 'react';
import LOGO_MAIN_SMALL from "../images/logo_main_small.png";
import style from "../module/header.module.css";
import {VIEW_ACTIVE} from "../utils/constants";

const Header = (props) =>
{
    return (
        <div className = {`jumbotron-fluid d-flex justify-content-center ${style.jumbotron} ${props.token ? style.token : ""}`}>
            <header className = {`container row justify-content-between ${style.header}`}>
                <div className = {`col-xl-6 col-6 row d-flex align-content-center justify-content-start`}>
                    <img className = {`img-fluid ${style.jumbotron_img}`} src = {LOGO_MAIN_SMALL} alt = {"LOGO_MAIN_SMALL"}/>
                </div>
                <div className = "col-xl-6 col-6 row d-flex align-content-center justify-content-end">
                    <button className = {style.button_sign_in}
                            onClick = {() => props.headerActionViewTriggerAuth(VIEW_ACTIVE)}>
                        Sign In
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
