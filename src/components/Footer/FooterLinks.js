import React, { useState } from 'react';

const FooterLinks = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        if (openSection === section) {
            setOpenSection(null);
        } else {
            setOpenSection(section);
        }
    };

    return (
        <div className='w-4/5 mx-auto'>
            <div className="text-white py-8 md:py-16">
                <div className="container mx-auto flex flex-wrap justify-evenly sm:space-y-4 md:space-y-0">

                    {/* Navigation */}
                    <div className="w-full md:w-1/5">
                        <button
                            className="text-xl md:text-2xl font-semibold mb-5 w-full text-center md:text-left md:hidden"
                            onClick={() => toggleSection('navigation')}
                        >
                            Navigation
                        </button>
                        <div className={`${openSection === 'navigation' ? '' : 'hidden'} md:block`}>
                            <h3 className="text-2xl font-semibold mb-5 hidden md:block">Navigation</h3>
                            <ul className='pl-6 lg:pl-0 md:text-xl text-light-gray'>
                                <li className='mb-3'>Home</li>
                                <li className='mb-3'>About Us</li>
                                <li className='mb-3'>How It Works</li>
                                <li className='mb-3'>Reviews</li>
                                <li className='mb-3'>FAQs</li>
                                <li className='mb-3'>Contact Us in Santa Maria, CA</li>
                            </ul>
                        </div>
                    </div>

                    {/* What We Do */}
                    <div className="w-full md:w-1/5">
                        <button
                            className="text-xl md:text-2xl font-semibold mb-5 w-full text-center md:text-left md:hidden"
                            onClick={() => toggleSection('whatwedo')}
                        >
                            What We Do
                        </button>
                        <div className={`${openSection === 'whatwedo' ? '' : 'hidden'} md:block`}>
                            <h3 className="text-2xl font-semibold mb-5 hidden md:block">What We Do</h3>
                            <ul className='pl-6 lg:pl-0 md:text-xl text-light-gray'>
                                <li className='mb-3'>Instant Car Offer</li>
                                <li className='mb-3'>Quick Sale Process</li>
                                <li className='mb-3'>Free Car Inspection</li>
                                <li className='mb-3'>Flexible Appointments</li>
                                <li className='mb-3'>Eco-Friendly Disposals for Vehicles</li>
                            </ul>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="w-full md:w-1/5">
                        <button
                            className="text-xl md:text-2xl font-semibold mb-5 w-full text-center md:text-left md:hidden"
                            onClick={() => toggleSection('legal')}
                        >
                            Legal
                        </button>
                        <div className={`${openSection === 'legal' ? '' : 'hidden'} md:block`}>
                            <h3 className="text-2xl font-semibold mb-5 hidden md:block">Legal</h3>
                            <ul className='pl-6 lg:pl-0 md:text-xl text-light-gray'>
                                <li className='mb-3'>Terms and Conditions</li>
                                <li className='mb-3'>Privacy Policy</li>
                                <li className='mb-3'>Cookies Policy</li>
                                <li className='mb-3'>Sitemap</li>
                            </ul>
                        </div>
                    </div>

                    {/* Talk To Us */}
                    <div className="w-full md:w-1/5">
                        <button
                            className="text-xl md:text-2xl font-semibold mb-5 w-full text-center md:text-left md:hidden"
                            onClick={() => toggleSection('talktous')}
                        >
                            Talk To Us
                        </button>
                        <div className={`${openSection === 'talktous' ? '' : 'hidden'} md:block`}>
                            <h3 className="text-2xl font-semibold mb-5 hidden md:block">Talk To Us</h3>
                            <div className="pl-6 lg:pl-0 md:text-xl">
                                <p className='mb-3'>123 Driven St., Santa Maria, CA 93458</p>
                                <p className='mb-3'>contact@centralcoast-drivenautopurchases.com</p>
                                <p className='mb-3'>(805) XXX-XXXX</p>
                                <a href="#" className='mb-3 block'>Contact Us</a>
                                <a href="#" className='mb-3 block'>Facebook</a>
                                <a href="#" className='mb-3 block'>Instagram</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FooterLinks;
