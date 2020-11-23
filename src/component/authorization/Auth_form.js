import React, {useEffect, useState} from 'react';
import style from "../../module/authorization.module.css";
import AuthFormRegistration from "./Auth_form_registration";
import AuthFormLogin from "./Auth_form_login";
import {LOGIN, REGISTRATION} from "../../utils/constants";

const AuthForm = (props) =>
{
    const [authView, setAuthView] = useState(<AuthFormLogin/>);
    const [btnStyle, setBtnStyle] = useState({
        signIn: style.btn_sign_active,
        signUp: style.btn_sign_passive
    });

    useEffect(() =>
    {
        if (props.authformStateViewTriggerAuthForm === LOGIN)
        {
            setAuthView(<AuthFormLogin/>);
            setBtnStyle({
                signIn: style.btn_sign_active,
                signUp: style.btn_sign_passive
            });
        }

        if (props.authformStateViewTriggerAuthForm === REGISTRATION)
        {
            setAuthView(<AuthFormRegistration/>);
            setBtnStyle({
                signIn: style.btn_sign_passive,
                signUp: style.btn_sign_active
            });
        }
    }, [props.authformStateViewTriggerAuthForm]);

    return (
        <div>
            <div className = {style.div_buttons_flag}>
                <button className = {btnStyle.signIn}
                        onClick = {() => props.authformActionViewTriggerAuthForm(LOGIN)}>
                    Sign In
                </button>
                <button className = {btnStyle.signUp}
                        onClick = {() => props.authformActionViewTriggerAuthForm(REGISTRATION)}>
                    Sign Up
                </button>
            </div>
                {
                    authView
                }
        </div>
    );
};

export default AuthForm;
