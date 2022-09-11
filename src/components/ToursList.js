import React from 'react';
import dsafari from "../images/desert-safari.jpg"
import camel from "../images/camel-trekking.jpg"
import activity from "../images/activity.jpg"
import daytour from "../images/day-tour.jpg"
const ToursList = () => {
    const services = [
        {
            name: 'Circuit Azahar',
            image: daytour,
            duration: '6 days'
        },
        {
            name: 'Camel trekking',
            image: dsafari,
            duration: '6 days'
        },
        {
            name: 'Chegaga dunes 4x4',
            image: camel,
            duration: '1 night'
        },
        {
            name: 'SIDI NAJI Hiking',
            image: activity,
            duration: '5 days'
        },
        {
            name: 'Erg Chegaga Hiking',
            image: activity,
            duration: '4 days'
        },
        {
            name: 'Bivouac Erg Chegaga',
            image: activity,
            duration: '1 day'
        },
        {
            name: 'Rass Nkhill ',
            image: activity,
            duration: '6 days'
        },
        {
            name: 'Erg Lihoudi Dune',
            image: activity,
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