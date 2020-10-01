import React from 'react';
import style from "../../module/authorization.module.css";
import LOGO_MAIN from "../../images/logo_main_large.png";
import LOGO_FACEBOOK from "../../images/logo_facebook.svg";
import FormSignUp from "./Form_Sign_Up";
import LOGO_PAW from "../../images/buttons/logo_button_found.png";

const Authorization = () =>
{
    return (
        <div className = {style.div_authorization}>
            <img className = {style.img_logo} src = {LOGO_MAIN}/>
            <button className = {style.btn_close}>x</button>
            <p className = {style.p_welcome}>
                <span style = {{
                    fontWeight: "bold"
                }}>
                    Welcome!
                </span> Please sign in / sign up to continue or</p>
            <button className = {style.btn_facebook}>
                <img className = {style.img_facebook} src = {LOGO_FACEBOOK}/>
                Enter with Facebook
            </button>
            <div className = {style.div_buttons_flag}>
                <button className = {style.btn_sign_up}>
                    Sign In
                </button>
                <button className = {style.btn_sign_in}>
                    Sign Up
                </button>
            </div>
            <div>
                <FormSignUp/>
            </div>
            <div>
                <p className = {style.p_agreement}>By clicking “Submit”, you agree to us processing your information in
                                                   accordance with
                    <span> these terms.</span></p>
                <div className = {style.div_buttons_action}>
                    <button className = {style.btn_cancel}>Cancel</button>
                    <button className = {style.btn_submit}>
                        <img className = {style.img_submit} src = {LOGO_PAW}/>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Authorization;
