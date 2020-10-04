import React from 'react';
import style from "../../module/authorization.module.css";
import AuthFormRegistration from "./Auth_form_registration";
import AuthFormLogin from "./Auth_form_login";

const Authform = () =>
{
    return (
        <div>
            <div className = {style.div_buttons_flag}>
                <button className = {style.btn_sign_up}>
                    Sign In
                </button>
                <button className = {style.btn_sign_in}>
                    Sign Up
                </button>
            </div>
            <div>
                {/*<AuthFormRegistration/>*/}
                <AuthFormLogin/>
            </div>
        </div>
    );
};

export default Authform;
