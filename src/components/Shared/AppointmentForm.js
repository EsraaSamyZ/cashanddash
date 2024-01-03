import React, { useState } from "react";
import FloatingLabelInput from "./FloatingLabelInput";
import { submitInitialForm, submitFinalForm } from "./Api";

const AppointmentForm = ({ setShowForm }) => {
    const [thankMsg, setThankMsg] = useState(false)
    const [formErrors, setFormErrors] = useState({});
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        make: '',
        model: '',
        year: '',
        mileage: '',
        appointment: '',
        otp: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateNext = (values) => {
        const errors = {};
        if (!values.name) errors.name = "Name is required";
        if (!values.phone) errors.phone = "Phone number is required";
        if (!values.email) errors.email = "Email is required";
        if (!values.appointment) errors.appointment = "Appointment error";
        return errors;
    };

    const validateSubmit = (values) => {
        const errors = {};
        if (!values.make) errors.make = "Car make is required";
        if (!values.model) errors.model = "Car model is required";
        if (!values.year) errors.year = "Car year is required";
        if (!values.mileage) errors.mileage = "Mileage is required";
        return errors;
    };

    const handleNext = (e) => {
        e.preventDefault();
        const errors = validateNext(formData);
        setFormErrors(errors);

        if (!errors.name && !errors.phone && !errors.email) {
            console.log("Form data submitted:", formData);
            submitInitialForm(formData)
                .then(response => {
                    formData.otp = response.data.otp;
                    setShowAdditionalFields(true);
                })
                .catch(error => {
                    console.error("Error during API call:", error);
                });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateSubmit(formData);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log("FinalForm data submitted:", formData);
            submitFinalForm(formData)
                .then(response => {
                    setThankMsg(true);
                })
                .catch(error => {
                    console.error("Error during API call:", error);
                });
        }
    };

    return (
        <div
            className="fixed inset-0 top-0 right-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
            onClick={() => setShowForm(false)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    setShowForm(false);
                }
            }}
            role="button"
            tabIndex="0"
        >

            <div
                className="bg-white p-6 rounded-lg shadow-lg max-w-md md:w-full text-black"
                onClick={e => e.stopPropagation()}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.stopPropagation();
                        // Implement the same logic as onClick here
                    }
                }}
                role="button"
                tabIndex="0"
            >
                {!thankMsg ? (
                    <>
                        <h3 className="text-black text-center text-lg font-bold mb-4">Schedule Appointment</h3>
                        <form onSubmit={showAdditionalFields ? handleSubmit : handleNext} className="max-w-md mx-auto">
                            <div className={showAdditionalFields ? "hidden" : "block"}>
                                <FloatingLabelInput
                                    type="text"
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    error={formErrors.name}
                                />
                                <FloatingLabelInput
                                    type="tel"
                                    label="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    error={formErrors.phone}
                                />
                                <FloatingLabelInput
                                    type="email"
                                    label="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    error={formErrors.email}
                                />
                                <FloatingLabelInput
                                    type="datetime-local"
                                    label="Appointment"
                                    name="appointment"
                                    value={formData.appointment}
                                    onChange={handleChange}
                                    error={formErrors.appointment}
                                />
                            </div>

                            {showAdditionalFields && (
                                <>
                                    <FloatingLabelInput
                                        type="text"
                                        label="Car Make"
                                        name="make"
                                        value={formData.make}
                                        onChange={handleChange}
                                        required
                                        error={formErrors.make}
                                    />
                                    <FloatingLabelInput
                                        type="text"
                                        label="Car Model"
                                        name="model"
                                        value={formData.model}
                                        onChange={handleChange}
                                        required
                                        error={formErrors.model}
                                    />
                                    <FloatingLabelInput
                                        type="text"
                                        label="Car Year"
                                        name="year"
                                        value={formData.year}
                                        onChange={handleChange}
                                        required
                                        error={formErrors.year}
                                    />
                                    <FloatingLabelInput
                                        type="text"
                                        label="Mileage"
                                        name="mileage"
                                        value={formData.mileage}
                                        onChange={handleChange}
                                        required
                                        error={formErrors.mileage}
                                    />
                                </>
                            )}

                            {/* Submit/Next Button */}
                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded mt-4 transition duration-300 ease-in-out">
                                {showAdditionalFields ? "Submit" : "Next"}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center">
                        <h3 className="text-lg font-bold mb-4">Thank You!</h3>
                        <p>Your appointment has been scheduled successfully.</p>
                        <button onClick={() => setShowForm(false)} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">ok</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppointmentForm;
