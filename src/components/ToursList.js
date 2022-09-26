import React from 'react';
import img337567323 from "../images/tours/337567323.jpg"
import img337568460 from "../images/tours/337568460.jpg"
import img337567810 from "../images/tours/337567810.jpg"
import img584684648649 from "../images/tours/584684648649.jpeg"
import img18464zr6846684 from "../images/tours/18464zr6846684.jpeg"
import img9862684568455 from "../images/tours/9862684568455.jpeg"
import img337568550 from "../images/tours/337568550.jpg"
import img684686565 from "../images/tours/684686565.jpeg"
const ToursList = () => {
    const services = [
        {
            name: 'Circuit Azahar',
            image: img684686565,
            duration: '6 days'
        },
        {
            name: 'Camel Trekking',
            image: img337567323,
            duration: '6 days'
        },
        {
            name: 'Chegaga dunes 4x4',
            image: img584684648649,
            duration: '1 night'
        },
        {
            name: 'SIDI NAJI Trekking',
            image: img337567810,
            duration: '5 days'
        },
        {
            name: 'Erg Chegaga Trekking',
            image: img337568550,
            duration: '4 days'
        },
        {
            name: 'Bivouac Erg Chegaga',
            image: img9862684568455,
            duration: '1 day'
        },
        {
            name: 'Rass Nkhll ',
            image: img337568460,
            duration: '6 days'
        },
        {
            name: 'Erg Lihoudi Dune',
            image: img18464zr6846684,
            duration: '3 days'
        }
    ]
    return (
        <div id="tours" className="mt-8 p-8">
            <h1 className="font-bold text-4xl text-center  text-purple mb-4">Best Packages For You</h1>
            <div className="mt-8 grid lg:grid-cols-4 gap-4 w-full lg:container mx-auto">
                {
                    services.map(service => (
                        <div className="card mt-16 shadow-xl mx-auto cursor-pointer hover:opacity-50">
                            <div className="card-img">
                                <img src={service.image} alt={service.name}/>
                            </div>
                            <div className="card-content">
                                <h2 className="big-title font-bold">{service.name}</h2>
                                <h3 className="medium-title">{service.duration}</h3>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default ToursList;