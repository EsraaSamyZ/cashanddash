import React, { useState } from "react";

import IconOpen from "../../images/svg/one.inline.svg"
import IconCollapsed from "../../images/svg/two.inline.svg"

const FaqSection = ({ accordionData, toggleItem, openItem }) => {
    return (
        <div id="accordionFlushExample">
            {accordionData.map((item, index) => (
                <div key={index} className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white transition duration-300 ease-in-out">
                    <h2 className="mb-0" id={`flush-heading${index}`}>
                        <button
                            className={`group relative flex w-full justify-between items-center rounded-none border-0 bg-white px-5 py-5 text-left text-lg md:text-xl transition-colors duration-300 ease-in-out ${openItem === index ? "text-royal-blue" : "text-neutral-800"}`}
                            type="button"
                            onClick={() => toggleItem(index)}
                            aria-expanded={openItem === index}
                            aria-controls={`flush-collapse${index}`}
                        >
                            <span>{item.title}</span>
                            <span className="ml-2">{openItem === index ? <IconOpen /> : <IconCollapsed />}</span>
                        </button>
                    </h2>
                    <div
                        id={`flush-collapse${index}`}
                        className={`transition-height duration-800 ease-in-out ${openItem === index ? "visible" : "hidden"} border-0`}
                        aria-labelledby={`flush-heading${index}`}
                    >
                        <div className="px-5 py-4 text-left text-sm md:text-base" style={{ whiteSpace: "pre-line" }}>
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


const FAQs = () => {
    const [openItem, setOpenItem] = useState(0);

    const toggleItem = (item) => {
        setOpenItem(openItem === item ? null : item);
    };

    const accordionData = [
        { 
            title: "Will You Beat my KBB Instant Cash Offer?", 
            content: "Yes. We will either \n(A) surpass your KKB Instant Cash Offer or \n(B) guarantee to hand you a $100 if we can’t beat their offer." 
        },
        { 
            title: "Can I Cash My 805C&D Check?", 
            content: "Yes. Our checks are cash-able at your nearest Chase Bank location, unlike some competitors who issue \"drafts\" that take days to process." 
        },
        { 
            title: "How Long Until I Receive My Offer After Submitting My VIN?", 
            content: "We will contact within 24 hours after receiving your KBB ICO offer." 
        },
        { 
            title: "Is Your Offer Negotiable?", 
            content: "Our offers are negotiable on a case-by-case basis. While we strive for accuracy with our initial offer, we're open to continuing the discussion." 
        },
        { 
            title: "Can I Sell a Leased Car?", 
            content: "Yes, we can facilitate 3rd party lease buyouts as long as your leaseholder (bank, credit union, finance company) supplies us with the necessary documents." 
        },
        { 
            title: "Can I Sell with Negative Equity?", 
            content: "If you owe more than our offer, you'll need to pay the difference at the time of possession." 
        },
        { 
            title: "Can I get an in-store appraisal?", 
            content: "If you already have an online offer, there's no requirement for an extra appraisal unless the offer has expired. We apply the same appraisal standards both online and in our physical locations, and when you decide to redeem an online offer, we personally verify the condition of the vehicle. Adjustments to online offers are made only if the vehicle's condition deviates from the information we initially received online." 
        },
        { 
            title: "What do I need to sell my car?", 
            content: "• The title of your car or relevant payoff information. It's important for all titleholders to be present.\n• Current and valid vehicle registrations.\n• Up-to-date state-issued photo identification for all individuals listed on the title.\n• All keys and remote controls." 
        }
    ];

    return (
        <div id="faqs" className="w-4/5 mx-auto text-center space-y-9 pb-9">
            <h2 className="text-black text-3xl md:text-5xl font-extrabold mx-auto">Frequently Asked <span className="text-deep-crimson">Questions</span></h2>
            <div className="lg:w-1/2 mx-auto">
                <FaqSection accordionData={accordionData} toggleItem={toggleItem} openItem={openItem} />
            </div>
        </div>

    );
}

export default FAQs;
