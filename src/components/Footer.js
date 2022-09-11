import React from 'react';
import {AlternateEmail, FmdGood, PhoneIphone} from "@mui/icons-material";

const Footer = () => {
    return (
        <div className="px-4 py-10 bg-purple grid lg:grid-cols-3 gap-4 text-white mx-auto">
            <div className="mx-auto">
                <h1>Contact us</h1>
                <ul>
                    <li> <FmdGood/> mhamid erg chagaga 45000 </li>
                    <li> <AlternateEmail/> contact@mhamid.tours </li>
                    <li> <PhoneIphone/> +212 696 22 71 19 </li>
                </ul>
            </div>
            <div className="mx-auto">
                <h1>Links</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#tours">Tours</a></li>
                    <li><a href="#contact">Contact us</a></li>
                </ul>
            </div>
            <div className="mx-auto">
                <h1>Get in tuch</h1>
                <ul className="flex">
                    <div>Facebook</div>
                    <div>Trippadvisor</div>
                    <div>Booking</div>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
