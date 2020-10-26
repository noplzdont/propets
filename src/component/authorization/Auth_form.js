import React, {useContext, useEffect, useState} from 'react';
import style from "../../module/authorization.module.css";
import AuthFormRegistration from "./Auth_form_registration";
import AuthFormLogin from "./Auth_form_login";
import {store} from "../../store/store";
import {AUTH_FORM_TRIGGER, LOGIN, REGISTER} from "../../utils/constants";
import Authorization from "./Authorization";

const Authform = () =>
{
    const value = useContext(store);
    const [authView, setAuthView] = useState(<AuthFormLogin/>);

    useEffect(() => {
        value.state.authViewFormTrigger === LOGIN && setAuthView(<AuthFormLogin/>);
        value.state.authViewFormTrigger === REGISTER && setAuthView(<AuthFormRegistration/>);
    }, [value.state.authViewFormTrigger]);

    return (
        <div>
            <div className = {style.div_buttons_flag}>
                <button className = {style.btn_sign_up}
                        onClick = {() => value.dispatch({
                            type: AUTH_FORM_TRIGGER,
                            payload: LOGIN
                        })}>
                    Sign In
                </button>
                <button className = {style.btn_sign_in}
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
