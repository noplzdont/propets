import React from 'react';
import style from "../module/sidebar.module.css";
import {Link} from "react-router-dom";
import {PAGE_START} from "../utils/constants";

const Sidebar = (props) =>
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
                    <img className = {style.img_avatar} src = {props.sidebarStateAccount.avatar} alt={"user_avatar"}/>
                    <span>{props.sidebarStateAccount.name}</span>
                </button>
                <Link to = {`/${PAGE_START}`}>
                    <button className = {style.button_logout}
                            onClick = {() => props.sidebarActionLogout()}>
                        <i className = {`fas fa-sign-out-alt ${style.button_icon}`}/>
                        Logout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
