import React from 'react';
import About from "../components/About";
import ToursList from "../components/ToursList";
import Gallery from "../components/Gallery";
import Header from "../components/Header/Header";

const Home = ({lang}) => {

    return (
        <div>
            <Header lang={lang}/>
            <About lang={lang}/>
            <ToursList lang={lang}/>
            <Gallery lang={lang}/>
            {/*<Testimonials lang=lang/>*/}
        </div>
    );
};

export default Home;