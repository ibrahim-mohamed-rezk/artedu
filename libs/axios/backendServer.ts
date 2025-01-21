import axios from 'axios';

// Create an Axios instance
const backendServer = axios.create({
    baseURL: 'https://your-backend-server.com/api', // Replace with your backend server URL
    timeout: 1000, // Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
        // Add any other headers you need
    }
});

// Example of a GET request
export const getData = async (endpoint: string) => {
    try {
        const response = await backendServer.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// Example of a POST request
export const postData = async (endpoint: string, data: any) => {
    try {
        const response = await backendServer.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

export default backendServer;
