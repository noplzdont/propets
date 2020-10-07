import React from 'react';
import style from "../module/feed.module.css";
import LostFoundForm from "./Lost_Found_Form";

const Feed = () =>
{
    return (
            <div className = {style.div_wrapper}>
                <LostFoundForm/>
            </div>
    );
};

export default Feed;
