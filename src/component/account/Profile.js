import React, {useEffect, useState} from 'react';
import style from "../../module/profile.module.css";
import ProfileData from "./Profile_data";
import ProfileActivities from "./Profile_activities";
import {ACTIVITIES, PROFILE} from "../../utils/constants";

const Profile = (props) =>
{
    const [profileView, setProfileView] = useState(<ProfileData/>);
    const [btnStyle, setBtnStyle] = useState({
        profile: style.button_profile_active,
        activities: style.button_profile_passive
    });

    useEffect(() =>
    {
        if (props.profileViewState === PROFILE)
        {
            setProfileView(<ProfileData/>);
            setBtnStyle({
                profile: style.button_profile_active,
                activities: style.button_profile_passive
            });
        }

        if (props.profileViewState === ACTIVITIES)
        {
            setProfileView(<ProfileActivities/>);
            setBtnStyle({
                profile: style.button_profile_passive,
                activities: style.button_profile_active
            });
        }
    }, [props.profileViewState]);

    return (
        <div className = {style.div_wrapper}>
            <div className = {style.div_p_wrapper}>
                <p style = {{fontWeight: "bold"}}>Your profile.</p>
                <p>Change, edit and manage your data.</p>
            </div>
            <section className = {style.section_profile}>
                <div className = {style.div_button_wrapper}>
                    <button className = {btnStyle.profile}
                            onClick = {() => props.profileViewTrigger(PROFILE)}>
                        My Profile
                    </button>
                    <button className = {btnStyle.activities}
                            onClick = {() => props.profileViewTrigger(ACTIVITIES)}>
                        Activities
                    </button>
                </div>
                <div>
                    {
                        profileView
                    }
                </div>
            </section>
        </div>
    );
};

export default Profile;
