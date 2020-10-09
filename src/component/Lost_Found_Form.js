import React from 'react';
import style from "../module/lost_found_form.module.css";
import IMAGE_SCALE from "../images/image_human_dog_scale.png";

const LostFoundForm = () =>
{
    return (
        <div className = {style.div_wrapper}>
            <div className = {style.div_p_wrapper}>
                <p style = {{fontWeight: "bold"}}>Lost your buddy?</p>
                <p>Keep calm and complete the form.</p>
            </div>
            <div className = {style.div_form_wrapper}>
                <section className = {style.section_form}>
                    <div className = {style.div_input_side}>
                        <div className = {style.div_input_block}>
                            <label className = {style.input_label} htmlFor = "type">Type:</label>
                            <select className = {style.select} id = "type">
                                <option>Dog</option>
                                <option>Cat</option>
                            </select>
                        </div>
                        <div className = {style.div_input_block}>
                            <label className = {style.input_label} htmlFor = "sex">Sex:</label>
                            <select className = {style.select} id = "sex">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Apache Helicopter</option>
                                <option>Unknown</option>
                            </select>
                        </div>
                        <div className = {style.div_input_block}>
                            <label className = {style.input_label} htmlFor = "breed">Breed:</label>
                            <input className = {style.input_form} name = "breed" placeholder = {"Golden Retriever"}/>
                        </div>
                        <div className = {style.div_input_block}>
                            <label className = {style.input_label} htmlFor = "colour">Colour:</label>
                            <input className = {style.input_form} name = "colour" placeholder = {"Beige"}/>
                        </div>
                        <div className = {style.div_input_block}>
                            <label className = {style.input_label} htmlFor = "height">Height:</label>
                            <select className = {style.select} id = "height">
                                <option>20-45 cm</option>
                                <option>45-70 cm</option>
                                <option>70-100 cm</option>
                                <option>100-150 cm</option>
                            </select>
                        </div>
                        <div className = {style.div_input_block}>
                            <label className = {style.input_label} htmlFor = "features">Distinctive features:
                                <span className = {style.label_span}> up to 60 chars</span>
                            </label>
                            <input className = {style.input_form_feature}
                                   maxlength = {60}
                                   name = "features"
                                   placeholder = "blue collar with stars, no left ear, damaged tail."/>
                        </div>
                        <div className = {style.div_input_block}>
                            <label className = {style.input_label} htmlFor = "description">Description:
                                <span className = {style.label_span}> up to 150 chars</span>
                            </label>
                            <input className = {style.input_form_description}
                                   maxlength = {150}
                                   name = "description"
                                   placeholder = "brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs."/>
                        </div>
                        <div className = {style.div_input_block}>
                            <label className = {style.input_label} htmlFor = "location">Location:</label>
                            <input className = {style.input_form_location}
                                   name = "location"
                                   placeholder = "Florentin Street, Tel Aviv"/>
                        </div>
                    </div>
                    <div className = {style.div_upload_side}>
                        <img className = {style.img_scale} src = {IMAGE_SCALE}/>
                        <div className = {style.div_upload_block}>
                            <div className = {style.div_upload_side_left}>
                                <div className = {style.div_dropzone}>
                                    <i className = {`fas fa-file-upload ${style.icon_upload}`}/>
                                    <p className = {style.p_dragndrop}>Drag and drop photos or</p>
                                    <button className = {style.btn_browse}>Browse</button>
                                </div>
                            </div>
                            <div className = {style.div_upload_side_right}>
                                <div className = {style.div_image_list}>
                                    <p>img.1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className = {style.section_footer_contact}>
                    <div className = {style.div_footer_contacts}>
                        <label className = {style.input_label} htmlFor = "contacts">Contacts:</label>
                        <input className = {style.input_contact} name = "contacts" placeholder = "Phone*"/>
                        <input className = {style.input_contact} name = "contacts" placeholder = "Email"/>
                        <input className = {style.input_contact} name = "contacts" placeholder = "Facebook ID"/>
                    </div>
                    <div className = {style.div_footer_buttons}>
                        <button className = {style.button_profile}>Name Surname</button>
                        <button className = {style.button_publish}>
                            <i className = {`fas fa-paw ${style.button_icon}`}/>
                            Publish
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LostFoundForm;
