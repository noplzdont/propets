import React from 'react';
import style from "../../module/authorization.module.css";

const AuthFormRegistration = () =>
{
    return (
        <div className = {style.div_auth_form}>
            <div className = {style.div_auth_form_block_sign_up}>
                <div>
                    <label className = {style.input_label} htmlFor = "name">Name:</label>
                    <input className = {style.input_field} id = "name"/>
                </div>
                <div>
                    <label className = {style.input_label} htmlFor = "email">Email:</label>
                    <input className = {style.input_field} id = "email"/>
                </div>
                <div>
                    <label className = {style.input_label} htmlFor = "password">Password:</label>
                    <input className = {style.input_field} id = "password"/>
                </div>
                <div>
                    <label className = {style.input_label} htmlFor = "password_confirmation">Password:</label>
                    <input className = {style.input_field} id = "password_confirmation"/>
                </div>
            </div>
            <div className = {style.div_auth_form_desc}>
                <p className={style.p_password_rules}>Password must have at least 8 characters with at least one Capital letter, at least one lower
                                                      case
                                                      letter
                                                      and at least one number or special character.</p>
                <p className={style.p_password_reenter}>Please re-enter your password</p>
            </div>
        </div>
    );
};

export default AuthFormRegistration;
