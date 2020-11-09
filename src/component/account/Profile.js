import React, {useContext, useEffect, useState} from 'react';
import style from "../../module/profile.module.css";
import ProfileData from "./Profile_data";
import ProfileActivities from "./Profile_activities";
import {store} from "../../store/store";
import {ACTIVITIES, PROFILE, PROFILE_VIEW_TRIGGER} from "../../utils/constants";

const Profile = () =>
{
    const value = useContext(store);
    const [profileView, setProfileView] = useState(<ProfileData/>);
    const [btnStyle, setBtnStyle] = useState({
        profile: style.button_profile_active,
        activities: style.button_profile_passive
    });

    useEffect(() =>
    {
        if (value.state.profileViewTrigger === PROFILE)
        {
            setProfileView(<ProfileData/>);
            setBtnStyle({
                profile: style.button_profile_active,
                activities: style.button_profile_passive
            });
        }

        if (value.state.profileViewTrigger === ACTIVITIES)
        {
            setProfileView(<ProfileActivities/>);
            setBtnStyle({
                profile: style.button_profile_passive,
                activities: style.button_profile_active
            });
        }
    }, [value.state.profileViewTrigger]);

    return (
        <div className = {style.div_wrapper}>
            <div className = {style.div_p_wrapper}>
                <p style = {{fontWeight: "bold"}}>Your profile.</p>
                <p>Change, edit and manage your data.</p>
            </div>
            <section className = {style.section_profile}>
                <div className = {style.div_button_wrapper}>
                    <button className = {btnStyle.profile}
                            onClick = {() => value.dispatch({
                                type: PROFILE_VIEW_TRIGGER,
                                payload: PROFILE
                            })}>
                        My Profile
                    </button>
                    <button className = {btnStyle.activities}
                            onClick = {() => value.dispatch({
                                type: PROFILE_VIEW_TRIGGER,
                                payload: ACTIVITIES
                            })}>
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
