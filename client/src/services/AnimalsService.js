const baseURL = 'http://localhost:5000/api/animals';

const AnimalsService = {
    getAnimals() {
        return fetch(baseURL)
        .then(res => res.json());
    }
};

export default AnimalsService;