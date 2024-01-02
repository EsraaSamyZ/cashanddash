import axios from "axios";

// Function to check VIN
export const checkVIN = async (vin) => {
    try {
        const response = await axios.get(`http://localhost:9000/check_vin?vin=${vin}`);
        console.log(response.data)
        return response.data; 
    } catch (error) {
        console.error("Error in checkVIN:", error);
        throw error;
    }
};

// Function to check License Plate
export const checkPlate = async (plate, stateCode) => {
    try {
        const response = await axios.get(`http://localhost:9000/check_plate?plate=${plate}&statecode=${stateCode}`);
        return response.data;
    } catch (error) {
        console.error("Error in checkPlate:", error);
        throw error;
    }
};

// Function to get insta posts
export const getPosts = async () => {
    try {
        const response = await axios.get(`https://storage.elfsight.com/api/facebook?q=17841463021198684%2Fmedia%3Ffields%3Dcaption%252Ccomments_count%252Cid%252Clike_count%252Cmedia_type%252Cmedia_url%252Cpermalink%252Cthumbnail_url%252Ctimestamp%252Cusername%252Cchildren%257Bmedia_type%252Cmedia_url%252Cthumbnail_url%257D&user_id=c9c3247b-a3d0-400a-a4fc-e4138982e07a`);
        // console.log(response.data.data)
        return response.data.data;
    } catch (error) {
        console.error("Error in instaApi:", error);
        throw error;
    }
};

export const submitInitialForm = (formData) => {
    return axios.post("https://vintrackers.buildonlinestaging.com/api/v1/ico-lead", {
        lead_name: formData.name,
        phone_number: formData.phone,
        email: formData.email,
        appointment: formData.appointment
    });
};

export const submitFinalForm = (formData) => {
    return axios.post("https://vintrackers.buildonlinestaging.com/api/v1/ico-lead-step-2", {
        car_make: formData.carMake,
        car_year: formData.carYear,
        car_mileage: formData.carMileage,
        car_model: formData.carModel,
        otp: formData.otp
    });
};





