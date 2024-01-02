import React from "react";

const ServicesCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-white p-4 rounded-2xl border">
            <Icon className="flex-shrink-0 flex-grow-0 w-12 h-12 lg:w-20 lg:h-20 mb-4 lg:mb-0 lg:mr-4"/>

            <div className="text-left space-y-3">
                <h4 className="font-semibold text-md lg:text-2xl">{title}</h4>
                <p className="text-sm lg:text-base">{description}</p>
            </div>
        </div>
    );
};

export default ServicesCard;
