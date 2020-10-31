import React, {useContext, useEffect, useState} from 'react';
import style from "../../module/authorization.module.css";
import AuthFormRegistration from "./Auth_form_registration";
import AuthFormLogin from "./Auth_form_login";
import {store} from "../../store/store";
import {AUTH_FORM_TRIGGER, LOGIN, REGISTER} from "../../utils/constants";

const Authform = () =>
{
    const value = useContext(store);
    const [authView, setAuthView] = useState(<AuthFormLogin/>);
    const [btnStyle, setBtnStyle] = useState({
        signIn: style.btn_sign_active,
        signUp: style.btn_sign_passive
    });

    useEffect(() =>
    {
        if (value.state.authViewFormTrigger === LOGIN)
        {
            setAuthView(<AuthFormLogin/>);
            setBtnStyle({
                signIn: style.btn_sign_active,
                signUp: style.btn_sign_passive
            });
        }

        if (value.state.authViewFormTrigger === REGISTER)
        {
            setAuthView(<AuthFormRegistration/>);
            setBtnStyle({
                signIn: style.btn_sign_passive,
                signUp: style.btn_sign_active
            });
        }
    }, [value.state.authViewFormTrigger]);

    return (
        <div>
            <div className = {style.div_buttons_flag}>
                <button className = {btnStyle.signIn}
                        onClick = {() => value.dispatch({
                            type: AUTH_FORM_TRIGGER,
                            payload: LOGIN
                        })}>
                    Sign In
                </button>
                <button className = {btnStyle.signUp}
                        onClick = {() => value.dispatch({
                            type: AUTH_FORM_TRIGGER,
                            payload: REGISTER
                        })}>
                    Sign Up
                </button>
            </div>
            <div>
                {
                    authView
                }

            </div>
        </div>
    );
};

export default Authform;
