import React from "react"
import Form from "./Form"
import KbbText from "./KbbText"
import sectionShape from "../../images/svg/shape.svg"

const Kbb = () => {
    
    return (
        <>
            <div className="w-4/5 mx-auto py-12 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between pt-32 md:pt-56">
                <Form className=""/>
                <KbbText className=""/>
            </div>
            <img alt="shape" src={sectionShape} className="transform rotate-180 -mb-[1px]" style={{ width: "100%" }} />
        </>
    );
};

export default Kbb;
