let carList = [];

const getCacheData = (type, _make) => {
    return new Promise((resolve, reject) => {
        switch (type) {
            case ('Engine'):
                resolve(["1000cc", "1600cc", "2000cc", "2500cc"]);
                break;
            case ('Make'):
                resolve(["Audi", "BMW", "Mazda", "Subaru"]);
                break;
            case ('MakeModel'):
                resolve([{ "make": "Audi", "models": ["A3", "A5", "Q3", "Q5", "R8"] },
                { "make": "BMW", "models": ["3 Series", "5 Series", "X3", "X5", "Z4"] },
                { "make": "Mazda", "models": ["3", "6", "CX3", "CX5", "MX5"] },
                { "make": "Subaru", "models": ["Impreza", "Forester", "Outback", "BRZ"] }]);
                break;
            case ('BodyType'):
                resolve(["Sedan", "Hatchback", "SUV", "UTE"]);
                break;
            default:
                reject();
                break;
        }
    });
};

export function createCar(carData) {
    return new Promise((resolve) => {
        carList.push(carData);
        return resolve(true);
    });
}

export function getVehicles() {
    return new Promise((resolve) => {
        return resolve(carList);
    });
}

export default getCacheData;