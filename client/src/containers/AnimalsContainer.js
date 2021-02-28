import React, { useState, useEffect } from 'react';


import animalDetail from '../components/AnimalDetail'
import AnimalsList from '../components/AnimalsList'
import Favourites from '../components/Favourites'
import FunFactCard from '../components/FunFactCard'
import Map from '../components/Map'
import Quiz from '../components/Quiz'

const AnimalsContainer = () => {

    // Setting up state
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [favouriteAnimals, setFavouriteAnimals] = useState([]);

    // Replace below with correct selectedAnimal code - below is placeholder from SJ
    // Update state with a single animal object that was selected
    const handleSelectedAnimal = (animal) => {
        // Check if animal is a favourite and if it is use that instead of the selected object 
        // to allow deleting from fav list regardless of whether selection is from fav list or search results list
        const tempAnimal = favouriteAnimals.find(favouriteAnimal => favouriteAnimal.id === animal.id)
        if (tempAnimal) {
            animal = tempAnimal
        }

        // Update the state with the selected animal
        setSelectedAnimal(animal)
    }

    // Handle what to do when the fav animal in the favourite list is clicked
    // Update the animalDetail card with the favourite clicked
    // in the same manner as clicking on an animal from the results list
    const handleFavImageClicked = (favAnimalClicked) => {
        handleSelectedAnimal(favAnimalClicked);
    }

    return (
        <div className="container">
            <header>
                <h1>Endangered Animals</h1>
            </header>

            <Favourites favouriteAnimals={favouriteAnimals} onFavImageClicked={handleFavImageClicked} />

            <div className="map-container">
                <Map/>
            </div>
            <div className="facts-container">
                <h2>Fun facts will go here...</h2>
            </div>
            <div className="animals-list-container">
                <h2>Animals list will go here...</h2>
            </div>
            <div className="animal-detail-container">
                <h2>Animal detail will go here...</h2>
            </div>
            <div className="quiz-container">
                <Quiz/>
            </div>
        </div>
    )
}

export default AnimalsContainer;