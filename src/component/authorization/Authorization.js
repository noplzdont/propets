import React, {useContext, useEffect, useState} from 'react';
import style from "../../module/authorization.module.css";
import LOGO_MAIN from "../../images/logo_main_large.png";
import LOGO_FACEBOOK from "../../images/logo_facebook.svg";
import LOGO_PAW from "../../images/buttons/logo_button_found.png";
import Authform from "./Auth_form";
import {store} from "../../store/store";
import {AUTH_FORM_TRIGGER, AUTH_TRIGGER, CREATE_TOKEN, LOGIN, REGISTER} from "../../utils/constants";
import {actionLogin, actionRegister} from "../../store/actions/actions";

export const AUTH_FUNC_CONTEXT = React.createContext({});

const Authorization = () =>
{
    const value = useContext(store);

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        passwordDouble: ""
    });

    const handleSubmitClick = async () =>
    {
        if (value.state.authViewFormTrigger === LOGIN)
        {
            console.log("Action Log Called!");

            let token = CREATE_TOKEN(loginData.email, loginData.password);
            await value.dispatch(actionLogin(token));
        }

        if (value.state.authViewFormTrigger === REGISTER)
        {
            console.log("Action Reg Called!");

            await value.dispatch(actionRegister(registerData));
            //let tag = document.getElementById("password_confirmation");

            /* if (registerData.password !== registerData.passwordDouble)
             {
                 tag.setCustomValidity("Passwords Don't Match");
             }
             else
             {
                 tag.setCustomValidity('');
                 value.dispatch(actionRegister(registerData));
             }*/
        }

        await console.log(value.state.account);
    }

    useEffect(() =>
    {
        return () => value.dispatch({
            type: AUTH_FORM_TRIGGER,
            payload: LOGIN
        });
    }, []);

    return (
        <div className = {style.section_authorization}>
            <div className = {style.div_authorization}>
                <img className = {style.img_logo} src = {LOGO_MAIN}/>
                <span className = {style.btn_close}
                      onClick = {() => value.dispatch({type: AUTH_TRIGGER})}>
                        <i className = "fas fa-times"/>
                    </span>
                <div className = {style.div_fb_auth}>
                    <p className = {style.p_welcome}>
                        <span style = {{
                            fontWeight: "bold"
                        }}>Welcome!
                        </span> Please sign in / sign up to continue or
                    </p>
                    <button className = {style.btn_facebook}>
                        <img className = {style.img_facebook} src = {LOGO_FACEBOOK}/>
                        Enter with Facebook
                    </button>
                </div>
                <AUTH_FUNC_CONTEXT.Provider value = {{
                    loginData, setLoginData,
                    registerData, setRegisterData
                }}>
                    <div>
                        <Authform/>
                    </div>
                </AUTH_FUNC_CONTEXT.Provider>
                <div className = {style.div_buttons_action}>
                    <p className = {style.p_agreement}>By clicking “Submit”, you agree to us processing your information
                                                       in
                                                       accordance with
                        <span> these terms.</span></p>
                    <div>
                        <button className = {style.btn_cancel}
                                onClick = {() => value.dispatch({type: AUTH_TRIGGER})}>
                            Cancel
                        </button>
                        <button className = {style.btn_submit}
                                onClick = {handleSubmitClick}>
                            <img className = {style.img_submit} src = {LOGO_PAW}/>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authorization;
