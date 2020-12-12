import React, {useEffect, useState} from 'react';
import LOGO_MAIN_SMALL from "../images/logo_main_small.png";
import style from "../module/header.module.css";
import {PAGE_MAIN, PAGE_START, VIEW_ACTIVE} from "../utils/constants";

const Header = (props) =>
{
    const [buttons, setButtons] = useState(null);

    useEffect(() =>
    {
        props.headerStateCurrentPage === PAGE_START && setButtons(
            <button className = {`${style.button} ${style.sign_in}`}
                    onClick = {() => props.headerActionViewTriggerAuth(VIEW_ACTIVE)}>
                Sign In
            </button>);
        props.headerStateCurrentPage === PAGE_MAIN && setButtons(
            <button className = {`${style.button} ${style.add_new_post}`}>
                <i className = "fas fa-plus"/>
                Add New
            </button>);
    }, [props.headerStateCurrentPage])

    return (
        <div className = {`jumbotron-fluid d-flex justify-content-center ${style.jumbotron} ${props.headerStateToken ? style.token : ""}`}>
            <header className = {`container row justify-content-between ${style.header}`}>
                <div className = {`col-xl-6 col-6 row d-flex align-content-center justify-content-start`}>
                    <img className = {`img-fluid ${style.jumbotron_img}`}
                         src = {LOGO_MAIN_SMALL}
                         alt = {"LOGO_MAIN_SMALL"}/>
                </div>
                <div className = "col-xl-6 col-6 row d-flex align-content-center justify-content-end">
                    {
                        buttons
                    }
                </div>
            </header>
        </div>
    );
};

export default Header;
