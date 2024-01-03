import React from "react";
import ServicesCard from "./ServicesCard";
import ServicesSection from "../../images/svg/shape2.svg";
import Icon1 from "../../images/svg/icon1.inline.svg"; 
import Icon2 from "../../images/svg/icon2.inline.svg"; 
import Icon3 from "../../images/svg/icon3.inline.svg"; 
import Icon4 from "../../images/svg/icon4.inline.svg"; 

const Services = () => {
    const servicesData = [
        {
            icon: Icon1,
            title: "Free CarFax Vehicle History Report",
            description: "Bring your vehicle to our location and get a free carfax report!"
        },
        {
            icon: Icon2,
            title: "Free Mechanical Inspection",
            description: "Get a comprehensive mechanical inspection and know what condition your vehicles in."
        },        
        {
            icon: Icon3,
            title: "Free Detailed Vehicle Valuation",
            description: "Our team will give you a free detailed vehicle evaluation based on current market prices and KBB values."
        },        
        {
            icon: Icon4,
            title: "At Home Vehicle Buying Service",
            description: "Cant find the time to make it in? We offer an in person visit at a time that best suits you and have your vehicle purchased the same day!"
        },
    ];

    return (
        <div className="my-9 bg-light-gray">
            <img alt="shape" src={ServicesSection} className="-mb-[1px]" style={{ width: "100%" }} />

            <div className="w-4/5 mx-auto space-y-9 text-center py-9">
                <h2 className="text-black text-2xl md:text-5xl font-extrabold md:w-4/5 mx-auto animate-fade-up animate-duration-1000 animate-delay-300">Complimentary <span className="text-deep-crimson">Services</span> When You Sell Your Car to 805 Cash & Dash</h2>
                <p className=" text-lg md:text-2xl md:w-4/5 mx-auto animate-fade-up animate-duration-1000 animate-delay-300">Searching for your dream car has never been easier. Here's what you can expect when you use our platform to buy a car</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up animate-duration-1000 animate-delay-500">
                    {servicesData.map((service, index) => (
                        <ServicesCard key={index} icon={service.icon} title={service.title} description={service.description} />
                    ))}
                </div>
            </div>
            <img alt="shape" src={ServicesSection} className="transform rotate-180 -mt-[1px]" style={{ width: "100%" }} />
        </div>
    );
};

export default Services;
