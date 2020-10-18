import React from 'react';
import style from "../../module/profile.module.css";
import PostSmall from "../post/Post_small";

const ProfileActivities = () =>
{
    return (
        <div className={style.div_activities_wrapper}>
            <PostSmall/>
            <PostSmall/>
        </div>
    );
};

export default ProfileActivities;
