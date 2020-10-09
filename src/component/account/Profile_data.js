import React from 'react';
import style from "../../module/profile.module.css";

const ProfileData = () =>
{
    return (
        <div className = {style.div_data_wrapper}>
            <section className = {style.section_content}>
                <div className = {style.div_img_name_wrapper}>
                    <button>IMG</button>
                    <p>Name Surname</p>
                    <button>
                        <i className = "fas fa-pencil-alt"></i>
                    </button>
                </div>
                <label>Email:</label>
                <input/>
                <label>Phone:</label>
                <input/>
                <label>FB link:</label>
                <input/>
            </section>
        </div>
    );
};

export default ProfileData;
