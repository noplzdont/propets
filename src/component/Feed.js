import React from 'react';
import style from "../module/feed.module.css";
import LostFoundForm from "./Lost_Found_Form";
import Profile from "./account/Profile";

const Feed = () =>
{
    return (
            <div className = {style.div_wrapper}>
                <Profile/>
            </div>
    );
};

export default Feed;
