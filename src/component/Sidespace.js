import React from 'react';
import style from "../module/sidespace.module.css";
import IMG_ADS_DENTAL from "../images/ads/image_ads_dental.png";
import IMG_ADS_HOTEL from "../images/ads/image_ads_pet_hotel.png";
import IMG_ADS_HOTEL_2 from "../images/ads/image_ads_hotel_2.png";

const Sidespace = () =>
{
    return (
        <div className = {style.div_wrapper}>
            <div className = {style.div_img_ads}>
                <img className = {"img-fluid"} src = {IMG_ADS_DENTAL}/>
            </div>
            <div className = {style.div_img_ads}>
                <img className = {"img-fluid"} src = {IMG_ADS_HOTEL_2}/>
            </div>
            <div className = {style.div_img_ads}>
                <img className = {"img-fluid"} src = {IMG_ADS_HOTEL}/>
            </div>
        </div>
    );
};

export default Sidespace;
