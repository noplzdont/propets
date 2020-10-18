import React from 'react';
import style from "../../module/profile.module.css";
import ProfileData from "./Profile_data";
import ProfileActivities from "./Profile_activities";

const Profile = () =>
{
    return (
        <div className = {style.div_wrapper}>
            <div className = {style.div_p_wrapper}>
                <p style = {{fontWeight: "bold"}}>Your profile.</p>
                <p>Change, edit and manage your data.</p>
            </div>
            <section className = {style.section_profile}>
                <div className = {style.div_button_wrapper}>
                    <button className = {style.button_profile}>My Profile</button>
                    <button className = {style.button_activities}>Activities</button>
                </div>
                <div>
                    {/*<ProfileData/>*/}
                    <ProfileActivities/>
                </div>
            </section>
        </div>
    );
};

export default Profile;
