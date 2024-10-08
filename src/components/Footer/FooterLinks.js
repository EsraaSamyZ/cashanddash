import React, { useState } from "react";
import ContactUsBtn from "../Shared/ContactUsBtn";
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

const FooterLinks = () => {
    const [openSection, setOpenSection] = useState(null);
    const location = useLocation()

    const toggleSection = (section) => {
        if (openSection === section) {
            setOpenSection(null);
        } else {
            setOpenSection(section);
        }
    };

    const handleNavLinkClick = (e, targetId) => {
        if (location.pathname === "/" && targetId) {
          e.preventDefault()
    
          const targetSection = document.getElementById(targetId)
    
          if (targetSection) {
            const offset = 150
            const sectionTop =
              targetSection.getBoundingClientRect().top +
              window.pageYOffset -
              offset
    
            window.scrollTo({
              top: sectionTop,
              behavior: "smooth",
            })
          }
        } else if (location.pathname === "/" && !targetId) {
          e.preventDefault()
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }

      }

    return (
        <div className="w-4/5 mx-auto">
            <div className="text-white py-8 lg:py-16">
                <div className="container mx-auto flex flex-wrap justify-evenly sm:space-y-4 lg:space-y-0">

                    {/* Navigation */}
                    <div className="w-full lg:w-1/5">
                        <button
                            className="text-xl lg:text-2xl font-semibold mb-5 w-full text-center md:text-left lg:hidden"
                            onClick={() => toggleSection("navigation")}
                        >
                            Navigation
                        </button>
                        <div className={`${openSection === "navigation" ? "" : "hidden"} lg:block bg-light-gray bg-opacity-10 py-3 mb-5 lg:py-0 lg:bg-midnight-blue`}>
                            <h3 className="text-2xl font-semibold mb-5 hidden lg:block">Navigation</h3>
                            <ul className="pl-6 lg:pl-0 lg:text-xl text-light-gray">
                                <li className="mb-3"><Link to="/" onClick={e => handleNavLinkClick(e, null)}>Home</Link></li>
                                <li className="mb-3"><Link to="/" onClick={e => handleNavLinkClick(e, "howItWorks")}>How It Works</Link></li>
                                <li className="mb-3"><Link to="/aboutus">About Us</Link></li>
                                <li className="mb-3"><Link to="/" onClick={e => handleNavLinkClick(e, "faqs")}>FAQs</Link></li>
                                <li className="mb-3"><ContactUsBtn /> in Santa Maria, CA</li>
                            </ul>
                        </div>
                    </div>

                    {/* What We Do */}
                    <div className="w-full lg:w-1/5">
                        <button
                            className="text-xl lg:text-2xl font-semibold mb-5 w-full text-center md:text-left lg:hidden"
                            onClick={() => toggleSection("whatwedo")}
                        >
                            What We Do
                        </button>
                        <div className={`${openSection === "whatwedo" ? "" : "hidden"} lg:block bg-light-gray bg-opacity-10 py-3 mb-5 lg:py-0 lg:bg-midnight-blue`}>
                            <h3 className="text-2xl font-semibold mb-5 hidden lg:block">What We Do</h3>
                            <ul className="pl-6 lg:pl-0 lg:text-xl text-light-gray">
                                <li className="mb-3">Instant Car Offer</li>
                                <li className="mb-3">Quick Purchace Process</li>
                                <li className="mb-3">Free Car Inspection</li>
                                <li className="mb-3">Flexible Appointments</li>
                                <li className="mb-3">Eco-Friendly Disposals for Vehicles</li>
                            </ul>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="w-full lg:w-1/5">
                        <button
                            className="text-xl lg:text-2xl font-semibold mb-5 w-full text-center md:text-left lg:hidden"
                            onClick={() => toggleSection("legal")}
                        >
                            Legal
                        </button>
                        <div className={`${openSection === "legal" ? "" : "hidden"} lg:block bg-light-gray bg-opacity-10 py-3 mb-5 lg:py-0 lg:bg-midnight-blue`}>
                            <h3 className="text-2xl font-semibold mb-5 hidden lg:block">Legal</h3>
                            <ul className="pl-6 lg:pl-0 lg:text-xl text-light-gray">
                                <li className="mb-3"><Link to="/policies">Terms and Conditions</Link></li>
                                <li className="mb-3"><Link to="/policies">Privacy Policy</Link></li>
                                <li className="mb-3"><Link to="/policies">Cookies Policy</Link></li>
                                <li className="mb-3"><Link to="/location">Sitemap</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Talk To Us */}
                    <div className="w-full lg:w-1/5">
                        <button
                            className="text-xl lg:text-2xl font-semibold mb-5 w-full text-center md:text-left lg:hidden"
                            onClick={() => toggleSection("talktous")}
                        >
                            Talk To Us
                        </button>
                        <div className={`${openSection === "talktous" ? "" : "hidden"} lg:block bg-light-gray bg-opacity-10 py-3 mb-5 lg:py-0 lg:bg-midnight-blue`}>
                            <h3 className="text-2xl font-semibold mb-5 hidden lg:block">Talk To Us</h3>
                            <div className="pl-6 lg:pl-0 lg:text-xl">
                                <p className="mb-3"><a href="https://maps.google.com/?saddr=Current Location&daddr=1921 N Broadway a, Santa Maria, CA 93454, USA">1921 N Broadway Suite A, Santa Maria, CA 93459</a></p>
                                <p className="mb-3"><a href="mailto:Info@805cashanddash.com">Info@805cashanddash.com</a></p>
                                {/* <p className="mb-3"><a href="tel:+xxxxxxxxxx">(805) XXX-XXXX</a></p> */}
                                <ContactUsBtn className={"mb-3 block"} />
                                <a href="https://www.fb.com/805cashndash/" className="mb-3 block">Facebook</a>
                                <a href="https://www.instagram.com/805cashndash/" className="mb-3 block">Instagram</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FooterLinks;
