import React from 'react';
import style from "../module/lost_found_form.module.css";
/*import Dropzone from 'react-dropzone';*/
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
                        <input/>
                        <input/>
                        <input/>
                        <input/>
                        <input/>
                        <input/>
                        <input/>
                        <input/>
                    </div>
                    <div className = {style.div_upload_side}>
                        <img className = {style.img_scale} src = {IMAGE_SCALE}/>
                        <div className = "d-flex row">
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
                    <input/>
                    <input/>
                    <input/>
                    <div name = {"profile"}>Name Surname</div>
                    <button>
                        <i className = {`fas fa-paw ${style.button_icon}`}/>
                        Publish
                    </button>
                </section>
            </div>
        </div>
    );
};

export default LostFoundForm;
