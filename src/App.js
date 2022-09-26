import './App.css';
import Navbar from "./components/Header/Navbar";
import Header from "./components/Header/Header";
import ServicesList from "./components/ServicesList";
import About from "./components/About";
import Map from "./components/Map";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ToursList from "./components/ToursList";
import {useState} from "react";

function App() {
    const [lang, setLang] = useState('fr');
    return (
        <div className="App bg-body">
            <Navbar lang={lang} setLang={(e)=>setLang(e)}/>
            <Header lang={lang}/>
            <About lang={lang}/>
            <ToursList lang={lang}/>
            <Gallery lang={lang}/>
            {/*<Testimonials lang=lang/>*/}
            <Map lang={lang}/>
            <Footer lang={lang}/>

        </div>
    );
}

export default App;
