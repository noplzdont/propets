import React from 'react';
import style from "../../module/new_post_form.module.css";
import IMAGE from "../../images/hidethepainharold.jpg";

const NewPostForm = () =>
{
    return (
        <div className = {style.div_wrapper}>
            <div className = {style.div_p_wrapper}>
                <p style = {{fontWeight: "bold"}}>Your new post!</p>
                <p>Simply text, add photos and publish.</p>
            </div>
            <section className = {style.section}>
                <div className = {style.div_input_block}>
                    <label className = {style.input_label} htmlFor = "text">Text:
                        <span className = {style.label_span}> up to 1500 chars</span>
                    </label>
                    <textarea className = {style.input_form_text}
                              maxLength = {1500}
                              name = "text"
                              placeholder = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words."/>
                </div>
                <div className = {style.div_images_block}>
                    <div className = {style.div_photos_block}>
                        <label className = {style.input_label} for="photos">Photos:
                            <span className = {style.label_span}>up to 4 images</span>
                        </label>
                        <div className = {style.div_photo_booth} id="photos">
                            <div className = {style.img_large}>
                                <img className = "img-fluid" src={IMAGE}/>
                            </div>
                            <div className = {style.div_img_column_wrapper}>
                                <div className = {style.img_small}>
                                    <img className = "img-fluid" src={IMAGE}/>
                                </div>
                                <div className = {style.img_small}>
                                    <img className = "img-fluid" src={IMAGE}/>
                                </div>
                                <button className = {style.button_plus}>
                                    <i className = "fas fa-plus"/>
                                </button>
                            </div>
                        </div>
                    </div>
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
                <div className = {style.div_footer_buttons}>
                    <button className = {style.button_profile}>Name Surname</button>
                    <button className = {style.button_publish}>
                        <i className = {`fas fa-paw ${style.button_icon}`}/>
                        Publish
                    </button>
                </div>
            </section>
        </div>
    );
};

export default NewPostForm;
