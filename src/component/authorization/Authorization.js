import React, {useEffect, useState} from 'react';
import style from "../../module/authorization.module.css";
import LOGO_MAIN from "../../images/logo_main_large.png";
import LOGO_FACEBOOK from "../../images/logo_facebook.svg";
import LOGO_PAW from "../../images/buttons/logo_button_found.png";
import AuthForm from "../../store/containers/Auth_form_container";
import {LOGIN, REGISTRATION, VIEW_HIDDEN} from "../../utils/constants";

export const AUTH_FUNC_CONTEXT = React.createContext({});

const Authorization = (props) =>
{
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

    const handleSubmitClick = () =>
    {
        props.authorizationStateViewTriggerAuthForm === LOGIN && props.authorizationActionLogin(loginData);
        props.authorizationStateViewTriggerAuthForm === REGISTRATION && props.authorizationActionRegistration(registerData);
    }

    useEffect(() =>
    {
        return () => props.authorizationActionViewTriggerAuthForm(LOGIN);
    }, []);

    return (
        <div className = {style.section_authorization}>
            <div className = {style.div_authorization}>
                <img className = {style.img_logo} src = {LOGO_MAIN} alt={"LOGO_MAIN"}/>
                <span className = {style.btn_close}
                      onClick = {() => props.authorizationActionViewTriggerAuth(VIEW_HIDDEN)}>
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
                        <img className = {style.img_facebook} src = {LOGO_FACEBOOK} alt={"LOGO_FACEBOOK"}/>
                        Enter with Facebook
                    </button>
                </div>
                <AUTH_FUNC_CONTEXT.Provider value = {{
                    loginData, setLoginData,
                    registerData, setRegisterData
                }}>
                    <div>
                        <AuthForm/>
                    </div>
                </AUTH_FUNC_CONTEXT.Provider>
                <div className = {style.div_buttons_action}>
                    <p className = {style.p_agreement}>By clicking “Submit”, you agree to us processing your information
                                                       in
                                                       accordance with
                        <span> these terms.</span></p>
                    <div>
                        <button className = {style.btn_cancel}
                                onClick = {() => props.authorizationActionViewTriggerAuth(VIEW_HIDDEN)}>
                            Cancel
                        </button>
                        <button className = {style.btn_submit}
                                onClick = {handleSubmitClick}>
                            <img className = {style.img_submit} src = {LOGO_PAW} alt={"LOGO_PAW"}/>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authorization;
