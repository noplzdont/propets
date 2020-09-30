import React from 'react';
import style from "../module/home.module.css";
import LOGO_SEARCH from "../images/buttons/logo_button_search.png";
import LOGO_MAIN from "../images/logo_main_large.png";
import LOGO_FACEBOOK from "../images/logo_facebook.svg";
import LOGO_PAW from "../images/buttons/logo_button_found.png";
import FormSignUp from "./authorization/Form_Sign_Up";

const Home = () =>
{
    return (
        <div>
            <main className = {`container ${style.section_main}`}>
                <div className = {`${style.div_main}`}>
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
            </main>
            <section className = {`${style.section_quote}`}>
                <div className = "container">
                    <div className = {style.section_quote_content}>
                        <p className = {style.p_quote}>Our fluffy space for lovers, admirers, dads and moms of our
                                                       four-legged, winged, tailed guys.</p>
                    </div>
                </div>
            </section>
            <section className = {`${style.section_info}`}>
                <div className = {`container ${style.section_info_wrapper}`}>
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
            </section>
            <section className = {`${style.section_coming_soon}`}>
                <div className = {"container"}>
                    <div className = {`row d-flex align-content-center justify-content-around ${style.coming_soon_content}`}>
                        <div className = {`col-xl-5 ${style.coming_soon_title}`}>
                            Coming soon
                        </div>
                        <div className = {`col-xl-5 ${style.coming_soon_text}`}>
                            <p>We are planing to open a new service, where your cats and dogs can find their love!</p>
                        </div>
                        <div className = {"col-xl-2"}>
                            <div className = {`${style.coming_soon_red_heart}`}>
                                LOVE
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className = {style.section_authorization}>
                <div className = {style.div_authorization}>
                    <img src = {LOGO_MAIN} style = {{
                        filter: "invert(61%) sepia(9%) saturate(1118%) hue-rotate(105deg) brightness(89%) contrast(88%)"
                    }}/>
                    <button>X</button>
                    <p>Welcome! Please sign in / sign up to continue or</p>
                    <button>
                        <img src = {LOGO_FACEBOOK}/>
                        Enter with Facebook
                    </button>
                    <div>
                        <button>
                            Sign In
                        </button>
                        <button>
                            Sign Up
                        </button>
                    </div>
                    <div>
                        <FormSignUp/>
                    </div>
                    <div>
                        <p>By clicking “Submit”, you agree to us processing your information in accordance with these
                           terms.</p>
                        <button>Cancel</button>
                        <button>
                            <img src = {LOGO_PAW}/>
                            Submit
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
