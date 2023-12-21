import React, { useState } from 'react';

const AppointmentForm = ({ setShowForm }) => {
    const [thankMsg, setThankMsg] = useState(false)
    console.log(setShowForm)

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        make: '',
        model: '',
        year: '',
        mileage: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit API call
        // console.log(formData);
        setThankMsg(true)
    };

    return (
        <div className="fixed inset-0 top-0 right-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={() => setShowForm(false)}>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full" onClick={e => e.stopPropagation()}>
                {!thankMsg ? (
                    <>
                        <h3 className="text-black text-center text-lg font-bold mb-4">Schedule Appointment</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="relative mb-4">
                                <input
                                    className="w-full h-full text-md border border-dark-gray px-3 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none"
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="absolute top-0 left-3 transform -translate-y-1/2 bg-white px-1">
                                    <span className="text-xs text-gray-500">Name</span>
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <input
                                    className="w-full h-full text-md border border-dark-gray px-3 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none"
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="absolute top-0 left-3 transform -translate-y-1/2 bg-white px-1">
                                    <span className="text-xs text-gray-500">Phone Number</span>
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <input
                                    className="w-full h-full text-md border border-dark-gray px-3 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none"
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <div className="absolute top-0 left-3 transform -translate-y-1/2 bg-white px-1">
                                    <span className="text-xs text-gray-500">Email</span>
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <input
                                    className="w-full h-full text-md border border-dark-gray px-3 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none"
                                    type="text"
                                    name="make"
                                    placeholder="Enter Car Make"
                                    value={formData.make}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="absolute top-0 left-3 transform -translate-y-1/2 bg-white px-1">
                                    <span className="text-xs text-gray-500">Make</span>
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <input
                                    className="w-full h-full text-md border border-dark-gray px-3 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none"
                                    type="text"
                                    name="model"
                                    placeholder="Enter Car Model"
                                    value={formData.model}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="absolute top-0 left-3 transform -translate-y-1/2 bg-white px-1">
                                    <span className="text-xs text-gray-500">Model</span>
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <input
                                    className="w-full h-full text-md border border-dark-gray px-3 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none"
                                    type="text"
                                    name="year"
                                    placeholder="Enter Car Year"
                                    value={formData.year}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="absolute top-0 left-3 transform -translate-y-1/2 bg-white px-1">
                                    <span className="text-xs text-gray-500">Year</span>
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <input
                                    className="w-full h-full text-md border border-dark-gray px-3 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none"
                                    type="text"
                                    name="mileage"
                                    placeholder="Enter Mileage"
                                    value={formData.mileage}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="absolute top-0 left-3 transform -translate-y-1/2 bg-white px-1">
                                    <span className="text-xs text-gray-500">Mileage</span>
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                        </form>
                        {/* <button onClick={() => setShowForm(false)} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Close</button> */}
                    </>
                ) : (
                    <div className="text-center">
                        <h3 className="text-lg font-bold mb-4">Thank You!</h3>
                        <p>Your appointment has been scheduled successfully.</p>
                        <button onClick={() => setShowForm(false)} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Close</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppointmentForm;
