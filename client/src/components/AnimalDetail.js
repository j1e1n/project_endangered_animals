import React from'react';


const animalDetail = (selectedAnimal) => {
    return(
        <>
        <div className="animal-detail">
            <h2>{selectedAnimal.animal_name}</h2>
            <p>Scientific name: {selectedAnimal.species}</p>
            <br></br>
            <p>The {selectedAnimal.animal_name} is <b>{selectedAnimal.status}</b>, there are {selectedAnimal.population} left in the world. </p>
            <br></br>
            <p>....image will go here....</p>
            <p>Locations: {selectedAnimal.locations}</p>
            <p>Habitat: {selectedAnimal.habitat}</p>
            <p>{selectedAnimal.description}</p>

        </div>
        </>
    )
};

export default animalDetail;