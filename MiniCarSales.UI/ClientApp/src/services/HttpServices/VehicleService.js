import axios from 'axios';

const getCacheData = (type) => {
    return axios.get("api/cache/" + type)
        .then(response => {
            return response;
        }).catch(error => {
            return error;
        });
};

export function createCar(carData) {
    return axios.post("/api/car", carData)
        .then(response => {
            return response;
        }).catch(error => {
            return error;
        });
}

export function getVehicles() {
    return axios.get("/api/vehicles")
        .then(response => {
            return response;
        }).catch(error => {
            return error;
        });
}

export default getCacheData;