import React from 'react';
import style from "../module/footer.module.css";
import LOGO_MAIN_LARGE from "../images/logo_main_large.png";
import LOGO_FACEBOOK from "../images/logo_facebook.svg";
import LOGO_INSTAGRAM from "../images/logo_instagram.svg";
import LOGO_BUTTON_LOST from "../images/buttons/logo_button_lost.png";
import LOGO_BUTTON_HOTEL from "../images/buttons/logo_button_hotel.png";
import LOGO_BUTTON_FOUND from "../images/buttons/logo_button_found.png";
import LOGO_BUTTON_WALKING from "../images/buttons/logo_button_walking.png";
import LOGO_BUTTON_VETHELP from "../images/buttons/logo_button_vethelp.png";
import LOGO_BUTTON_FOSTERING from "../images/buttons/logo_button_fostering.png";

const Footer = () =>
{
    return (
        <div className = {`jumbotron-fluid d-flex justify-content-center ${style.jumbotron}`}>
            <footer className = {`container row justify-content-between`}>
                <div className = {`col-xl-2 col-6 row d-flex align-content-center ${style.footer_logo}`}>
                    <img className = {`img-fluid`} src = {LOGO_MAIN_LARGE} alt = {"LOGO_MAIN_LARGE"}/>
                </div>
                <div className = {`col-xl-2 row d-flex align-content-center ${style.footer_address}`}>
                    <img className = {`${style.social_img}`} src = {LOGO_FACEBOOK} alt = {"LOGO_FACEBOOK"}/>
                    <img className = {`${style.social_img}`} src = {LOGO_INSTAGRAM} alt = {"LOGO_INSTAGRAM"}/>
                    <p className = {`${style.p_address}`}>1600 Amphitheatre Pkwy Mountain View, CA 94043, USA</p>
                </div>
                <div className = {`col-xl-3 row d-flex align-content-center justify-content-between ${style.footer_buttons}`}>
                    <button className = {`${style.button}`}>
                        <img className = {`${style.btn_img}`} src = {LOGO_BUTTON_LOST} alt = {"LOGO_BUTTON_LOST"}/>
                        Lost
                    </button>
                    <button className = {`${style.button}`}>
                        <img className = {`${style.btn_img}`} src = {LOGO_BUTTON_HOTEL} alt = {"LOGO_BUTTON_HOTEL"}/>
                        Hotel
                    </button>
                    <button className = {`${style.button}`}>
                        <img className = {`${style.btn_img}`} src = {LOGO_BUTTON_FOUND} alt = {"LOGO_BUTTON_FOUND"}/>
                        Found
                    </button>
                    <button className = {`${style.button}`}>
                        <img className = {`${style.btn_img}`}
                             src = {LOGO_BUTTON_WALKING}
                             alt = {"LOGO_BUTTON_WALKING"}/>
                        Walking
                    </button>
                    <button className = {`${style.button}`}>
                        <img className = {`${style.btn_img}`}
                             src = {LOGO_BUTTON_VETHELP}
                             alt = {"LOGO_BUTTON_VETHELP"}/>
                        VetHelp
                    </button>
                    <button className = {`${style.button}`}>
                        <img className = {`${style.btn_img}`}
                             src = {LOGO_BUTTON_FOSTERING}
                             alt = {"LOGO_BUTTON_FOSTERING"}/>
                        Fostering
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
