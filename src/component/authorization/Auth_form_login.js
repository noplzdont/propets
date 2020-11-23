import React, {useContext, useState} from 'react';
import style from "../../module/authorization.module.css";
import {AUTH_FUNC_CONTEXT} from "./Authorization";

const AuthFormLogin = () =>
{
    const value = useContext(AUTH_FUNC_CONTEXT);

    return (
        <div className = {style.div_auth_form}>
            <form className = {style.div_auth_form_block_sign_in}>
                <div>
                    <label className = {style.input_label} htmlFor = "email">Email:</label>
                    <input className = {style.input_field}
                           id = "email"
                           onChange = {(e) => value.setLoginData({
                               email: e.target.value,
                               password: value.loginData.password
                           })}
                           type = 'text'
                           value = {value.email}
                           required/>
                </div>
                <div>
                    <label className = {style.input_label} htmlFor = "password">Password:</label>
                    <input className = {style.input_field}
                           id = "password"
                           onChange = {(e) => value.setLoginData({
                               email: value.loginData.email,
                               password: e.target.value
                           })}
                           type = 'password'
                           value = {value.password}
                           required/>
                </div>
                <button className = {style.btn_forgot_pass}>Forgot password?</button>
            </form>
        </div>
    );
};

export default AuthFormLogin;
