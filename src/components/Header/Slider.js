import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SSlider from "react-slick";
import s1 from "../../images/slides/s1.jpg";
import s2 from "../../images/slides/s2.jpg";
import s3 from "../../images/slides/s3.jpeg";
import s1phone from "../../images/slides/phone/s1.jpg";
import s2phone from "../../images/slides/phone/s2.jpg";
import s3phone from "../../images/slides/phone/s3.jpg";

const Slider = () => {
    return (
        <div id="slider">
            <div className="block md:hidden">
                <SSlider
                    dots={false}
                    infinite={true}
                    speed={3000}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={2500}
                >
                    <div id="phone-slid">
                        <img src={s1phone} className="w-full h-full phone-slid-img" alt="ed"/>
                    </div>
                    {/*<div id="phone-slid">*/}
                    {/*    <img src={s2phone} className="w-full h-full phone-slid-img" alt="ed"/>*/}
                    {/*</div>*/}
                    {/*<div id="phone-slid">*/}
                    {/*    <img src={s3phone} className="w-full h-full phone-slid-img" alt="ed"/>*/}
                    {/*</div>*/}
                </SSlider>
            </div>

            <div className="hidden md:block">
                <SSlider
                    dots={false}
                    infinite={true}
                    speed={3000}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={2500}
                >
                    <div id="web-slid">
                        <img src={s1} className="w-full h-full" alt="ed"/>
                    </div>
                    {/*<div id="web-slid">*/}
                    {/*    <img src={s2} className="w-full h-full" alt="ed"/>*/}
                    {/*</div>*/}
                    {/*<div id="web-slid">*/}
                    {/*    <img src={s3} className="w-full h-full" alt="ed"/>*/}
                    {/*</div>*/}
                </SSlider>
            </div>
        </div>
    );
};

export default Slider;