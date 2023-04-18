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
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./containers/Home";
import Details from "./components/Details";

function App() {
    const [lang, setLang] = useState('fr');
    return (
    <BrowserRouter>
        <div className="App bg-body">
            <Navbar lang={lang} setLang={(e)=>setLang(e)}/>
            <Routes>
                <Route path="/" element={<Home lang={lang}/>} />
                <Route path="/:tid/details" element={<Details />} />
            </Routes>

            <Map lang={lang}/>
            <Footer lang={lang}/>
        </div>
    </BrowserRouter>
    );
}

export default App;
