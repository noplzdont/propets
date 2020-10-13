import React from 'react';
import style from "../../module/profile.module.css";

const ProfileData = () =>
{
    return (
        <div>
            <div className = {style.div_data_wrapper}>
                <section className = {style.section_content}>
                    <div className = {style.div_img_name_wrapper}>
                        <button className = {style.btn_img}>IMG</button>
                        <p className = {style.p_name}>Name Surname</p>
                        <button className = {style.btn_pencil}>
                            <i className = "fas fa-pencil-alt"/>
                        </button>
                    </div>
                    <div className = {style.div_input_block}>
                        <label className = {style.input_label} htmlFor = "email">Email:</label>
                        <input className = {style.input} name = "email" placeholder = "current"/>
                    </div>
                    <div className = {style.div_input_block}>
                        <label className = {style.input_label} htmlFor = "phone">Phone:</label>
                        <input className = {style.input} name = "phone" placeholder = "current"/>
                    </div>
                    <div className = {style.div_input_block}>
                        <label className = {style.input_label} htmlFor = "link">FB link:</label>
                        <input className = {style.input} name = "link" placeholder = "current"/>
                    </div>
                </section>
            </div>
            <div className = {style.div_save_btn_wrapper}>
                <button className = {style.btn_cancel}>Cancel</button>
                <button className = {style.btn_save}>
                    <i className = "fas fa-save"/>  Save Changes
                </button>
            </div>
        </div>
    );
};

export default ProfileData;
