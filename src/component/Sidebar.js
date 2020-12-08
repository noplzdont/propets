import React from 'react';
import style from "../module/sidebar.module.css";

const Sidebar = () =>
{
    return (
        <div className = {style.div_wrapper}>
            <button className = {style.button_menu}>
                <i className = {`fas fa-home ${style.button_icon}`}/>
                Home
            </button>
            <button className = {style.button_menu}>
                <i className = {`fas fa-search ${style.button_icon}`}/>
                Lost
            </button>
            <button className = {style.button_menu}>
                <i className = {`fas fa-paw ${style.button_icon}`}/>
                Found
            </button>
            <button className = {style.button_menu}>
                <i className = {`fas fa-bullhorn ${style.button_icon}`}/>
                Services
            </button>
            <button className = {style.button_menu}>
                <i className = {`fas fa-star ${style.button_icon}`}/>
                Favorites
            </button>
            <div className = {style.div_acc_buttons}>
                <button className = {style.button_account}>
                    {/*<span>{value.state.account.name}</span>*/}
                </button>
                <button className = {style.button_logout}>
                    <i className = {`fas fa-sign-out-alt ${style.button_icon}`}/>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
