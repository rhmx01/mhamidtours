import React from 'react';
import aboutpic from "../images/about.jpg"
import {useParams} from "react-router-dom";
import img684686565 from "../images/tours/684686565.jpeg";
import img337567323 from "../images/tours/337567323.jpg";
import img584684648649 from "../images/tours/584684648649.jpeg";
import img337567810 from "../images/tours/337567810.jpg";
import img337568550 from "../images/tours/337568550.jpg";
import img9862684568455 from "../images/tours/9862684568455.jpeg";
import img337568460 from "../images/tours/337568460.jpg";
import img18464zr6846684 from "../images/tours/18464zr6846684.jpeg";

const Details = () => {
    const {tid} = useParams();
    console.log(tid);
    const services = [
        {
            id: 1,
            name: 'Circuit Azahar',
            image: img684686565,
            duration: '6 days'
        },
        {
            id: 2,
            name: 'Camel Trekking',
            image: img337567323,
            duration: '6 days'
        },
        {
            id: 3,
            name: 'Chegaga dunes 4x4',
            image: img584684648649,
            duration: '1 night'
        },
        {
            id: 4,
            name: 'SIDI NAJI Trekking',
            image: img337567810,
            duration: '5 days'
        },
        {
            id: 5,
            name: 'Erg Chegaga Trekking',
            image: img337568550,
            duration: '4 days'
        },
        {
            id: 6,
            name: 'Bivouac Erg Chegaga',
            image: img9862684568455,
            duration: '1 day'
        },
        {
            id: 7,
            name: 'Rass Nkhll ',
            image: img337568460,
            duration: '6 days'
        },
        {
            id: 8,
            name: 'Erg Lihoudi Dune',
            image: img18464zr6846684,
            duration: '3 days'
        }
    ]

    const service = services.filter( s => s.id === Number(tid))[0]
    const data_fr = {
        name: service.name,
        description: <div>Morocco (kingdom of Morocco) is the westernmost country in the Maghreb region of North Africa.
            Morocco overlooks the Mediterranean Sea to the north and the Atlantic Ocean to the west. The kingdom covers an area of
            446,550km², with a population of roughly 37,45 million. <br/>
            Morocco capital is Rabat, which it has several interesting historical attractions, such as the Kasbah of the Oudaias,
            the old Medina and the Hassan Tower. While its largest city is Casablanca. <br/>
            The official monetary currency of Morocco is called dirham. <br/>
            As for the Moroccan climate is very diverse, varying with the season and region. In general, the climate is Mediterranean on the coasts, while it's desert in inland areas, and continental in the highest mountains. <br/>
             Whereas the official languages spoken in Morocco are Arabic, but many Moroccans Speak French & English. Hence, Moroccan’s identity and culture is vibrant mix of Berber, Arab and European cultures. <br/>
            When it comes to religion in Morocco, the only official and predominant is Islam, but there is a minority of Christian and Jewish people living there too. <br/>
            In fact, Morocco is the most country of coexistence and tolerance, it is worth a visit.</div>
    }
    return (

        <div className="w-full lg:container mx-auto">
            <div className="pt-16 flex items-center">
                <div className="lg:flex py-8 mt-8">
                    <div className="px-4 flex items-center">
                        <img id="about-pic" src={service.image} alt="about Morroco" className="flex shadow-xl max-h-96 rounded-xl shadow-lg"/>
                    </div>
                    <div id="profiledescription" className="text-color">
                        <h1 className="px-4 font-bold text-2xl text-left">{data_fr.name}</h1>
                        <p className="px-4 pt-2 text-left max-w-2xl">{data_fr.description}</p>
                        {/*<div className="p-4 flex mx-auto">*/}
                        {/*    <a href="https://www.linkedin.com/in/rhmx/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Rachid hamma ali linkedIn profile" className="social-icons p-1 rounded-md"/></a>*/}
                        {/*    <a href="https://github.com/rhmx01" target="_blank" rel="noreferrer"><img src={github} alt="Rachid hamma ali github profile" className="social-icons p-1 rounded-md"/></a>*/}
                        {/*    <a href="https://rhmx01.medium.com" target="_blank" rel="noreferrer"><img src={medium} alt="Rachid hamma ali medium profile" className="social-icons p-1 rounded-md"/></a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;