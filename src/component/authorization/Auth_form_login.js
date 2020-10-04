import React from 'react';
import style from "../../module/authorization.module.css";

const AuthFormLogin = () =>
{
    return (
        <div className = {style.div_auth_form}>
            <div className = {style.div_auth_form_block_sign_in}>
                <div>
                    <label className = {style.input_label} htmlFor = "email">Email:</label>
                    <input className = {style.input_field} id = "email"/>
                </div>
                <div>
                    <label className = {style.input_label} htmlFor = "password">Password:</label>
                    <input className = {style.input_field} id = "password"/>
                </div>
                <button className = {style.btn_forgot_pass}>Forgot password?</button>
            </div>
        </div>
    );
};

export default AuthFormLogin;
