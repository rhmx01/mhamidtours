import React from 'react';
import {Menu} from "@mui/icons-material";
import {Avatar} from "@mui/material";
import logo from "../../images/logo-small.png"

const Navbar = ({lang, setLang}) => {

    function toggle() {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        //Animate Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    }

    return (
        <div>
            <nav className="flex fixed w-full shadow-lg">
                <div className="flex w-full lg:container mx-auto">
                    <div className="logo flex items-center">
                        <img className="h-16" src={logo} alt="Logo mhamid tours"/>
                    </div>
                    <div className="hamburger">
                        <Menu onClick={toggle}/>
                    </div>
                    <div className="flex justify-between w-full text-gray-500">
                        <ul className="nav-links">
                            <li><a href="#">{lang ==='en' ? 'Home' : 'Accueil'}</a></li>
                            <li><a href="#tours">{lang ==='en' ? 'Tours' : 'Tours'}</a></li>
                            <li><a href="#gallery">{lang ==='en' ? 'Gallery' : 'Galerie'}</a></li>
                            {/*<li><a href="#destinations">{lang ==='en' ? 'Destinations' : 'Destinations'}</a></li>*/}
                            <li><a href="#events">{lang ==='en' ? 'Events' : 'Événements'}</a></li>
                            <li><a href="#contact">{lang ==='en' ? 'Contact Us' : 'Nous contacter'}</a></li>
                            <li className="show-login-btn">
                                {/*<Avatar alt="Arabic" src="https://img.icons8.com/color/96/000000/morocco-circular.png" />*/}
                                {/*<Avatar alt="English" src="https://img.icons8.com/color/96/000000/great-britain-circular.png" />*/}
                                <Avatar alt="Fresh" src="https://img.icons8.com/fluency/48/000000/france-circular.png" />
                            </li>
                        </ul>
                        <ul className="nav-links border-l">
                            {/*<li className="ml-2"><button className="login-button">Login</button></li>*/}
                            {/*<li className="ml-2"><button className="join-button">Join</button></li>*/}
                            {/*<li className="ml-2 cursor-pointer hover:opacity-50"><Avatar alt="Arabic" src="https://img.icons8.com/color/96/000000/morocco-circular.png" /></li>*/}
                            {lang === 'fr' ? <li className="ml-2 cursor-pointer hover:opacity-50" onClick={() => setLang('en')}><Avatar alt="English" src="https://img.icons8.com/color/96/000000/great-britain-circular.png" /></li>

                                : <li className="ml-2 cursor-pointer hover:opacity-50" onClick={() => setLang('fr')}><Avatar alt="Fresh" src="https://img.icons8.com/fluency/48/000000/france-circular.png" /></li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;