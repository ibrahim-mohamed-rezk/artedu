import axios from "axios";

// Create an Axios instance
const backendServer = axios.create({
  baseURL: "https://yellow-oryx-132975.hostingersite.com/api/v1/online/",
  timeout: 1000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Example of a GET request
export const getData = async (endpoint: string) => {
  try {
    const response = await backendServer.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Example of a POST request
export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await backendServer.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export default backendServer;
