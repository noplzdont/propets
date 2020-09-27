import React from 'react';
import style from "../module/home.module.css";
import IMAGE_DOG from "../images/image_dog.png";
import LOGO_SEARCH from "../images/buttons/logo_button_search.png";

const Home = () =>
{
    return (
        <div>
            <main className = "container">
                <div className = "row position-relative d-flex justify-content-between">
                    <div className = {`col-xl-6 col-12 col-lg-6 row d-flex flex-column align-content-center justify-content-around ${style.div_main}`}>
                        <h2 className = {`${style.text_main}`}>
                            Welcome to your
                            <span style = {{
                                color: "#669885"
                            }}> pawfessional </span>
                            community
                        </h2>
                        <div className = {style.div_buttons}>
                            <button className = {`d-flex align-items-center justify-content-between ${style.button_lost}`}>
                                I lost my pet!
                                <img className = {style.btn_img_search} src = {LOGO_SEARCH}/>
                            </button>
                            <button className = {style.button_found}>I found a pet!</button>
                        </div>
                        <p className = {style.p_join}>I’m okay, just want to
                            <span style = {{
                                color: "#669885"
                            }}> JOIN </span>
                                                      the pawsome community!</p>
                    </div>
                    <div className = {`col-xl-6 col-12 col-lg-6 container row align-content-center ${style.dog_image}`}>
                        <img className = {"img-fluid"} src = {IMAGE_DOG}/>
                    </div>
                </div>
            </main>
            <section className = {style.quote}>
                <div className = "container">
                    <div className = {`row ${style.div_quote}`}>
                        <div className = {`col-xl-8 d-flex align-content-center justify-content-center`}>
                            <p className = {style.p_quote}>Our fluffy space for lovers, admirers, dads and moms of our
                                                           four-legged,
                                                           winged, tailed guys.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{
                height: "50px"
            }}></section>
        </div>
    );
};

export default Home;
