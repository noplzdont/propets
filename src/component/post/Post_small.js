import React from 'react';
import style from "../../module/post_small.module.css";
import IMAGE from "../../images/image_dog_profile.png";

const PostSmall = () =>
{
    return (
        <div className = {style.div_wrapper}>
            <section className = {style.section_left}>
                <img className = {style.img_photo} src = {IMAGE}/>
            </section>
            <section className = {style.section_right}>
                <div className = {style.div_p_buttons}>
                    <div>
                        <p>Dog, Golden Retriever</p>
                    </div>
                    <div>
                        <button>
                            <i className = "fas fa-pen"/>
                        </button>
                        <button>
                            <i className = "fas fa-dumpster"/>
                        </button>
                    </div>
                </div>
                <div className = {style.fields}>
                    <div className = {style.fields_left}>
                        <div className = {style.div_label_p_block}>
                            <label htmlFor = "colour">Colour:</label>
                            <p id = "colour">golden</p>
                        </div>
                        <div className = {style.div_label_p_block}>
                            <label htmlFor = "sex">Sex:</label>
                            <p id = "sex">male</p>
                        </div>
                        <div className = {style.div_label_p_block}>
                            <label htmlFor = "height">Height:</label>
                            <p id = "height">45 cm</p>
                        </div>
                    </div>
                    <div className = {style.fields_right}>
                        <div className = {style.div_label_p_block}>
                            <label htmlFor = "features">Distinctive features:</label>
                            <p id = "features">blue collar with stars, no left ear, damaged tail.</p>
                        </div>
                    </div>
                </div>
                <div className = {style.div_description}>
                    <div className = {style.div_label_p_block}>
                        <p id = "description">
                            <label htmlFor = "description">Description:</label>
                            brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by
                            fox whelps. Bawds jog, flick quartz, vex nymphs.</p>
                    </div>
                </div>
                <div className = {style.div_info_block}>
                    <p>
                        <i className = "fas fa-map-pin"
                           style = {{
                               color: "#669885",
                               marginRight: "5px"
                           }}/>
                        Florentin, 27, Tel Aviv
                    </p>
                    <div className = {style.div_account_block}>
                        <button className = {style.button_profile}>Name Surname</button>
                        <div>
                            <i className = "fas fa-phone-square"/>
                            <i className = "fab fa-facebook-square"/>
                            <i className = "fas fa-envelope-square"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PostSmall;
