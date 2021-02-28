import React from 'react';


const animalDetail = ({ selectedAnimal, onFavouriteClick }) => {

    // Put this check in as the initial object state is set to null - remove will cause a null error
    if (!selectedAnimal) {
        return (null)
    }
    return (
        <>
            <div className="animal-detail">
                <h2>{selectedAnimal.animal_name}</h2>
                <p>Scientific name: {selectedAnimal.species}</p>
                <br></br>
                <p>The {selectedAnimal.animal_name} is <b>{selectedAnimal.status}</b>, there are {selectedAnimal.population} left in the world. </p>
                <br></br>
                <img src={selectedAnimal.pictures} width="50" height="50" alt={selectedAnimal.animal_name}/>
                <p>Locations: {selectedAnimal.locations}</p>
                <p>Habitat: {selectedAnimal.habitat}</p>
                <p>{selectedAnimal.description}</p>
                <br />
                <li onClick={() => { onFavouriteClick(selectedAnimal) }}  >Add to Favourite</li>
            </div>
        </>
    )
};

export default animalDetail;