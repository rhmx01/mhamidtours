import React from 'react';
import aboutpic from "../images/about.jpg"

const About = () => {
    const data_fr = {
        name: "About Morocco",
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
                <div className="lg:flex py-8">
                    <div className="px-4 flex items-center">
                        <img id="about-pic" src={aboutpic} alt="about Morroco" className="flex shadow-xl max-h-96 rounded-xl shadow-lg"/>
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

export default About;