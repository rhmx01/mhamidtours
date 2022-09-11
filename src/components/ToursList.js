import React from 'react';
import img337567323 from "../images/tours/337567323.jpg"
import img337568079 from "../images/tours/337568079.jpg"
import img337568460 from "../images/tours/337568460.jpg"
import img337567810 from "../images/tours/337567810.jpg"
import img337568190 from "../images/tours/337568190.jpg"
import imgbWeN0ue7BU from "../images/tours/bWeN0ue7BU.jpg"
import img337568107 from "../images/tours/337568107.jpg"
import img5468741687 from "../images/tours/5468741687.jpg"
const ToursList = () => {
    const services = [
        {
            name: 'Circuit Azahar',
            image: img337568079,
            duration: '6 days'
        },
        {
            name: 'Camel trekking',
            image: img337567323,
            duration: '6 days'
        },
        {
            name: 'Chegaga dunes 4x4',
            image: img337568460,
            duration: '1 night'
        },
        {
            name: 'SIDI NAJI Hiking',
            image: img337567810,
            duration: '5 days'
        },
        {
            name: 'Erg Chegaga Hiking',
            image: img337568190,
            duration: '4 days'
        },
        {
            name: 'Bivouac Erg Chegaga',
            image: imgbWeN0ue7BU,
            duration: '1 day'
        },
        {
            name: 'Rass Nkhill ',
            image: img337568107,
            duration: '6 days'
        },
        {
            name: 'Erg Lihoudi Dune',
            image: img5468741687,
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