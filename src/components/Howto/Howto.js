import React, { useState } from "react";
import Video from "./Video"
import Appointment from "./Appointment"
import AppointmentForm from "../Shared/AppointmentForm";
import sectionShape from "../../images/svg/shape.svg"


const Howto = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <div id="howItWorks" className="bg-midnight-blue items-center text-center">
                <div className="w-4/5 mx-auto">
                    <h2 className=" text-white text-3xl md:text-5xl font-extrabold font-extrabold animate-fade-up animate-duration-1000 animate-delay-300">How to <span className="text-deep-crimson">CASH & DASH</span></h2>

                    <div className="py-12 flex flex-col-reverse lg:flex-row lg:items-stretch lg:justify-center">
                            <Appointment setShowForm={setShowForm} />
                            <Video />
                    </div>

                </div>
            </div>
            <img alt="shape" src={sectionShape} className="-mt-[1px]" style={{ width: "100%" }} />

            {showForm && <AppointmentForm setShowForm={setShowForm} />}
        </>
    )
}

export default Howto