import axios from 'axios';

// Function to check VIN
export const checkVIN = async (vin) => {
    try {
        const response = await axios.get(`http://localhost:9000/check_vin?vin=${vin}`);
        console.log(response.data)
        return response.data; 
    } catch (error) {
        console.error('Error in checkVIN:', error);
        throw error;
    }
};

// Function to check License Plate
export const checkPlate = async (plate, stateCode) => {
    try {
        const response = await axios.get(`http://localhost:9000/check_plate?plate=${plate}&statecode=${stateCode}`);
        return response.data;
    } catch (error) {
        console.error('Error in checkPlate:', error);
        throw error;
    }
};
