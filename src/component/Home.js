import React from 'react';
import style from "../module/home.module.css";
import LOGO_SEARCH from "../images/buttons/logo_button_search.png";
import IMAGE_DOG from "../images/image_dog.png";
import IMAGE_PETS from "../images/image_pets.png";
import LOGO_HEART from "../images/logo_heart.png";

const Home = () =>
{
    return (
        <div>
            <main className = "container">
                <div className = "row position-relative d-flex justify-content-between">
                    <div className = {`col-xl-6 col-12 col-lg-6 row d-flex flex-column align-content-center justify-content-around ${style.div_main}`}>
                        <h2 className = {`${style.text_main}`}>
                            Welcome to your
                            <span className = {"color_green"}> pawfessional </span>
                            community
                        </h2>
                        <div className = {style.div_buttons}>
                            <button className = {`d-flex align-items-center justify-content-between ${style.button_lost}`}>
                                I lost my pet!
                                <img className = {style.btn_img_search} src = {LOGO_SEARCH} alt = ''/>
                            </button>
                            <button className = {style.button_found}>I found a pet!</button>
                        </div>
                        <p className = {style.p_join}>I’m okay, just want to
                            <span className = {"color_green"}> JOIN </span>
                                                      the pawsome community!</p>
                    </div>
                    <div className = {`col-xl-6 col-12 col-lg-6 container row align-content-center ${style.dog_image}`}>
                        <img className = {"img-fluid"} src = {IMAGE_DOG}/>
                    </div>
                </div>
            </main>
            <section className = {`${style.section_quote}`}>
                <div className = "container">
                    <div className = {style.section_quote_content}>
                        <p className = {style.p_quote}>Our fluffy space for lovers, admirers, dads and moms of our
                                                       four-legged, winged, tailed guys.</p>
                    </div>
                </div>
            </section>
            <section className = {`d-flex align-items-center ${style.section_info}`}>
                <div className = {`container`}>
                    <div className = {`row d-flex align-content-center justify-content-between`}>
                        <div className = {"col-xl-5"}>
                            <img className = {`img-fluid`} src = {IMAGE_PETS}/>
                        </div>
                        <div className = {`col-xl-7`}>
                            <p className = {"color_green"}
                               style = {{
                                   fontSize: "24px"
                               }}>Here is collected everything that your pet needs:</p>
                            <ol>
                                <li>professional veterinarian tips;</li>
                                <li>useful information about education and care;</li>
                                <li>fostering home search;</li>
                                <li>information about pet-sitting and walking service;</li>
                                <li>and of course, great communication with new friends in your social network!</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className = {`${style.section_coming_soon}`}>
                <div className = {"container"}>
                    <div className = {`row d-flex align-content-center justify-content-around ${style.coming_soon_content}`}>
                        <div className = {"col-xl-5"}>
                            <p>Coming soon</p>
                        </div>
                        <div className = {"col-xl-5"}>
                            <p>We are planing to open a new service, where your cats and dogs can find their love!</p>
                        </div>
                        <div className = {"col-xl-2"}>
                            <img className = "img-fluid" src = {LOGO_HEART}/>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;
