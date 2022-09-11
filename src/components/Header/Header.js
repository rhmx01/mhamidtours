import React from 'react';
import Slider from "./Slider";
import {ArrowRightAlt} from "@mui/icons-material";
import Services from "./Services";

const Header = () => {
    return (
        <header className="h-screen">
            <div className="relative h-full">
                <Slider/>
                <div id="header-content" className="absolute p-8 ">
                    <div className="w-full lg:container mx-auto">
                        <p className="text-xl lg:text-4xl max-w-xl font-bold mb-5 ml-2 text-white p-3 rounded-lg">
                            Looking for the best luxury private tours around the Moroccan desert
                        </p>
                        <a href="https://www.booking.com/hotel/ma/mhamid-tours-mhamid-elghizlane.en-gb.html" className="">
                            <button className="book-btn w-full lg:w-1/4 py-2 lg:py-4 px-4 lg:px-8  bg-blue-600 text-center text-white font-500 text-xl rounded-full shadow-lg shadow-inner uppercase" >Book Now <ArrowRightAlt/> </button>
                        </a>
                    </div>
                </div>
                <Services/>
            </div>
        </header>
    );
};

export default Header;