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
                <p>....image will go here....</p>
                <p>Locations: {selectedAnimal.locations}</p>
                <p>Habitat: {selectedAnimal.habitat}</p>
                <p>{selectedAnimal.description}</p>
                <br />
                {/* Render a + or - sign to add or delete a favourite animal based on an animal attribute being a fav or not */}
                {selectedAnimal.favourite ?
                    (<li onClick={() => { onFavouriteClick(selectedAnimal) }}  >Delete Favourite</li>) :
                    (<li onClick={() => { onFavouriteClick(selectedAnimal) }}  >Add Favourite</li>)
                }
            </div>
            {/* <div>
                <h4>Quiz test</h4>
                Question 1: {selectedAnimal.questions[0].q1}
                <br />
                Answer 1: {selectedAnimal.questions[0].a1}
            </div> */}
        </>
    )
};

export default animalDetail;