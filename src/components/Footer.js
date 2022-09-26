import React from 'react';
import {AlternateEmail, Facebook, FmdGood, Instagram, LinkedIn, PhoneIphone, Public} from "@mui/icons-material";

const Footer = () => {
    return (
        <div className="px-4 py-10 bg-purple grid lg:grid-cols-3 gap-4 text-white mx-auto">
            <div className="lg:mx-auto">
                <h1 className="py-4 font-bold text-2xl text-left">Contact us</h1>
                <ul>
                    <li> <FmdGood/> <a href="https://maps.app.goo.gl/694RRyM7ika4xXuT6" target="_blank">M'Hamid El Ghizlane</a> </li>
                    <li> <AlternateEmail/> <a href="mailto:contact@mhamid.tours">contact@mhamid.tours</a> </li>
                    <li> <PhoneIphone/> Idir: +212 662 22 28 23 </li>
                    <li> <PhoneIphone/> Rachid: +212 696 22 71 19 </li>
                </ul>
            </div>
            <div className="lg:mx-auto">
                <h1 className="py-4 font-bold text-2xl text-left">Links</h1>
                <ul>
                    <li>Home</li>
                    <li>Tours</li>
                    <li>Events</li>
                    <li>About us</li>
                </ul>
            </div>
            <div className="lg:mx-auto">
                <h1 className="py-4 font-bold text-2xl text-left">Get in tuch</h1>
                <ul>
                    <li><Facebook/> Facebook</li>
                    <li><Instagram/> Instagram</li>
                    <li><Public/> TripAdvisor</li>
                    <li><Public/> Airbnb</li>
                    <li><Public/> Booking</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;