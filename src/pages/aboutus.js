import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutUs = () => {
    return (
        <Layout>
            <div className="w-4/5 mx-auto container my-32">
                <h2 className="text-3xl md:text-5xl font-extrabold text-center text-black mb-8">
                    Welcome to <span className="text-deep-crimson">805CashAndDash.com</span>
                </h2>
                <div className="w-4/5 mx-auto">
                    <p className="text-gray-700 text-lg leading-loose">
                        Revolutionizing the car selling experience on the Central Coast! Serving San Luis and Santa Barbara Counties with pride and dedication, we bring a hassle-free, transparent, and efficient way to convert your vehicle into instant cash.
                    </p>

                    <p className="text-gray-700 text-lg leading-loose mt-6">
                        As a local business deeply rooted in our community, we understand the unique needs of private car sellers in our area. Our mission is to provide you with a stress-free process, offering a fair, instant cash offer for your vehicle.
                    </p>

                    <p className="text-gray-700 text-lg leading-loose mt-6">
                        Selling a car can be a daunting task, filled with uncertainties and time-consuming negotiations. That's why we've streamlined the process, ensuring a service that's as convenient as it is reliable. Whether you're in San Luis Obispo, Santa Maria, or anywhere within our beautiful counties, our straightforward process ensures a smooth and swift experience.
                    </p>

                    <p className="text-gray-700 text-lg leading-loose mt-6">
                        At <span className="text-deep-crimson">805CashAndDash.com</span>, we value your time and peace of mind. Our goal is to make your car selling experience seamless, allowing you to quickly return to enjoying the beautiful Central Coast life.
                    </p>

                    <p className="text-gray-700 text-lg leading-loose mt-6">
                        Choose <span className="text-deep-crimson">805CashAndDash.com</span> for a car selling experience rooted in local understanding, tailored to your needs, and committed to providing the best possible service. Let us take the hassle out of selling your car, while you plan how to enjoy your newfound financial freedom in the beautiful Central Coast region.
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export const Head = () => <Seo title="About Us" />

export default AboutUs;
