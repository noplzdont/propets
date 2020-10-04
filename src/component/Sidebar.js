import React from 'react';
import style from "../module/sidebar.module.css";

const Sidebar = () =>
{
    return (
        <div className={style.div_wrapper}>
            <button>Home</button>
            <button>Lost</button>
            <button>Found</button>
            <button>Services</button>
            <button>Favorites</button>
            <button>%username%</button>
            <button>Logout</button>
        </div>
    );
};

export default Sidebar;
