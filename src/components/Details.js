import React from 'react';
import {useParams} from "react-router-dom";
import services from "../data/data";

const Details = () => {
    const {tid} = useParams();
    console.log(tid);


    const service = services.find(s => s.id === Number(tid))
    return (

        <div className="w-full lg:container mx-auto">
            <div className="pt-16 flex items-center">
                <div className="lg:flex py-8 mt-8">
                    {/*<div className="px-4 flex items-center">*/}
                    {/*    <img id="about-pic" src={service.image} alt="about Morroco" className="flex shadow-xl max-h-96 rounded-xl shadow-lg"/>*/}
                    {/*</div>*/}
                    <div id="profiledescription" className="text-color">
                        <h1 className="px-4 font-bold text-2xl text-left">{service.name}</h1>
                        <div className="grid lg:grid-cols-2 gap-4">
                            {service.descriptions.map(s =>
                                <div className="p-4 text-left bg-white rounded-lg shadow-lg text-gray-600">{s}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;