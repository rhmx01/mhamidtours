import React from 'react';
import camel from "../../images/camel.png"
import buggy from "../../images/buggy.png"
import night from "../../images/night.png"
import jeep from "../../images/jeep.png"

const Services = () => {
    return (
        <div className="hidden md:block absolute right-0 top-0 h-full  z-100 text-white" id="missions">
            <div className="h-full grid items-center">
                {/*<div className="small-title mb-4 flex-1">*/}
                {/*    Découvrez nos missions*/}
                {/*</div>*/}
                <div className="w-fit grid gap-2">
                    <div id="header-servcies" className="p-2 lg:p-8 flex flex-col items-center rounded-l-xl">
                        <img src={jeep} alt="One Day Tour"/>
                        <div className="font-medium text-lg text-white">
                            One Day Tour
                        </div>
                    </div>
                    <div id="header-servcies" className="p-2 lg:p-8 flex flex-col items-center rounded-l-xl">
                        <img src={night} alt="Desert Safari"/>
                        <div className="font-medium text-lg text-white">
                            Desert Safari
                        </div>
                    </div>
                    <div id="header-servcies" className="p-2 lg:p-8 flex flex-col items-center rounded-l-xl">
                        <img src={camel} alt="Camel Trekking"/>
                        <div className="font-medium text-lg text-white">
                            Camel Trekking
                        </div>
                    </div>
                    <div id="header-servcies" className="p-2 lg:p-8 flex flex-col items-center rounded-l-xl">
                        <img src={buggy} alt="Activities"/>
                        <div className="font-medium text-lg text-white">
                            Activities
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;