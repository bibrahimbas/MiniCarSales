import axios from 'axios';

axios.defaults.baseURL = "https://localhost:44341" 

const getCacheData = (type) => {
    return axios.get("api/cache/" + type)
        .then(response => {
            return response.data;
        }).catch(error => {
            return error;
        });
};

export function createCar(carData) {
    return axios.post("/api/car", carData)
        .then(response => {
            return response.data;
        }).catch(error => {
            return error;
        });
}

export function getVehicles() {
    return axios.get("/api/vehicles")
        .then(response => {
            return response.data;
        }).catch(error => {
            return error;
        });
}

export default getCacheData;