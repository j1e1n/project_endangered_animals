import React, { useState, useEffect } from 'react';

import AnimalsList from '../components/AnimalsList';
import Favourites from '../components/Favourites';
import Map from "../components/Map";
import Quiz from "../components/Quiz";
import AnimalsService from "../services/AnimalsService";
import AnimalDetail from "../components/AnimalDetail";
import FunFactCard from '../components/FunFactCard';


const AnimalsContainer = () => {

    // Setting up state
    const [animals, setAnimals] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [favouriteAnimals, setFavouriteAnimals] = useState([]);


    // Read in animals data from own api
    useEffect(() => {
        AnimalsService.getAnimals()
            .then(data => setAnimals(data))
    }, [])


    // Update state with a single animal object that was selected
    const handleSelectedAnimal = (animal) => {
        // Update the state with the selected animal
        setSelectedAnimal(animal)
    }


    // Handle the add fav animal to array of fav animals after favourite clicked and if not already a favourite
    const handleFavouriteClick = (favAnimal) => {
        const newFavAnimalList = [...favouriteAnimals, favAnimal]
        setFavouriteAnimals(newFavAnimalList);
        // console.log(favAnimal);
    }

    return (
        <div className="container">
            <header>
                <h1>Endangered Animals</h1>
            </header>

            <Favourites favouriteAnimals={favouriteAnimals} />

            <div className="map-container">
                <Map />
            </div>

            <div className="facts-container">
                <h1>Fun facts here</h1>
                {/* <FunFactCard selectedAnimal={selectedAnimal} /> */}
            </div>

            <div className="animals-list-container">
                <h2>Animals list will go here...</h2>
                <AnimalsList animals={animals} onSelectedAnimal={handleSelectedAnimal} />
                <h1>list here</h1>
            </div>

            <div className="animal-detail-container">
                <h2>Animal detail will go here...</h2>
                <AnimalDetail selectedAnimal={selectedAnimal} onFavouriteClick={handleFavouriteClick} />
            </div>

            <div className="quiz-container">
                <h2>Quiz will go here...</h2>
                <Quiz />
            </div>

        </div>
    )
}

export default AnimalsContainer;