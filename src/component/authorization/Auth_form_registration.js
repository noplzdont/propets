import React, {useContext} from 'react';
import style from "../../module/authorization.module.css";
import {AUTH_FUNC_CONTEXT} from "./Authorization";

const AuthFormRegistration = () =>
{
    const value = useContext(AUTH_FUNC_CONTEXT);

    return (
        <div className = {style.div_auth_form}>
            <form className = {style.div_auth_form_block_sign_up}>
                <div>
                    <label className = {style.input_label} htmlFor = "name">Name:</label>
                    <input className = {style.input_field}
                           id = "name"
                           onChange = {(e) => value.setRegisterData({
                               name: e.target.value,
                               email: value.registerData.email,
                               password: value.registerData.password,
                               passwordDouble: value.registerData.passwordDouble
                           })}
                           type = 'text'
                           value = {value.name}
                           required/>
                </div>
                <div>
                    <label className = {style.input_label} htmlFor = "email">Email:</label>
                    <input className = {style.input_field}
                           id = "email"
                           onChange = {(e) => value.setRegisterData({
                               name: value.registerData.name,
                               email: e.target.value,
                               password: value.registerData.password,
                               passwordDouble: value.registerData.passwordDouble
                           })}
                           type = 'text'
                           value = {value.email}
                           required/>
                </div>
                <div>
                    <label className = {style.input_label} htmlFor = "password">Password:</label>
                    <input className = {style.input_field}
                           id = "password"
                           onChange = {(e) => value.setRegisterData({
                               name: value.registerData.name,
                               email: value.registerData.email,
                               password: e.target.value,
                               passwordDouble: value.registerData.passwordDouble
                           })}
                           type = 'password'
                           value = {value.password}
                           required/>
                </div>
                <div>
                    <label className = {style.input_label} htmlFor = "password_confirmation">Password:</label>
                    <input className = {style.input_field}
                           id = "password_confirmation"
                           onChange = {(e) => value.setRegisterData({
                               name: value.registerData.name,
                               email: value.registerData.email,
                               password: value.registerData.password,
                               passwordDouble: e.target.value
                           })}
                           type = 'password'
                           value = {value.passwordDouble}
                           required/>
                </div>
            </form>
            <div className = {style.div_auth_form_desc}>
                <p className = {style.p_password_rules}>Password must have at least 8 characters with at least one
                                                        Capital letter, at least one lower
                                                        case
                                                        letter
                                                        and at least one number or special character.</p>
                <p className = {style.p_password_reenter}>Please re-enter your password</p>
            </div>
        </div>
    );
};

export default AuthFormRegistration;
