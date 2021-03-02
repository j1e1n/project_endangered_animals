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

    //state for Quiz SD
    // const [currentQuestion, setCurrentQuestion] = useState[0];
    //Quiz button SD
    // const handleAnswerButtonClick = () => {
    //     const nextQuestion = currentQuestion


    // Read in animals data from own api then load any favourites stored in localstorage
    useEffect(() => {
        AnimalsService.getAnimals()
            .then(data => setAnimals(data))
            .then(getLocalStorageFavAnimals)
    }, [])


    // Retrieve any favourite animals already stored in localstorage
    // and put them into favourite animals state
    const getLocalStorageFavAnimals = () => {
        console.log("Loading local storage items");
        // window.localStorage.removeItem('lsFavAnimals');
        const restoredData = JSON.parse(window.localStorage.getItem("lsFavAnimals"));
        if (restoredData !== null) {
            setFavouriteAnimals(restoredData);
        }
    }

    // Store favourite animals into localstorage when fav animals list updates
    // const saveLocalStorageFavAnimals = () => {
    //     console.log("Saving local storage items");
    //     // window.localStorage.removeItem('lsFavAnimals');
    //     window.localStorage.setItem("lsFavAnimals", JSON.stringify(favouriteAnimals));

    // }


    // Update state with a single animal object that was selected
    const handleSelectedAnimal = (animal) => {
        // Check if animal is a favourite and if it is use that instead of the selected object
        // to allow deleting from fav list regardless of whether selection is from fav list or search results list
        const tempAnimal = favouriteAnimals.find(favouriteAnimal => favouriteAnimal._id === animal._id)
        if (tempAnimal) {
            animal = tempAnimal
        }

        // Update the state with the selected animal
        setSelectedAnimal(animal)
    }


    // Handle the add fav animal to array of fav animals after favourite clicked and if not already a favourite
    const handleFavouriteClick = (favAnimal) => {
        // Using some() method to check the animal id DOES NOT ! already exist
        if (!favouriteAnimals.some(favouriteAnimal => favouriteAnimal._id === favAnimal._id)) {

            // If this is a new favourite animal then
            // - Add a favourite tag to the animal object
            // - Copy the current state of fav animals and add the new fav animal
            favAnimal.favourite = true;
            const newFavAnimalList = [...favouriteAnimals, favAnimal]

            setFavouriteAnimals(newFavAnimalList);   // is this setting??
            console.log("check 1:", newFavAnimalList);
            console.log("check 1.5:", favouriteAnimals);

            window.localStorage.setItem("lsFavAnimals", JSON.stringify(newFavAnimalList));
        } else {
            // If not a new fav animal
            // - it must already be a fav animal
            // - therefore user is clicking to delete from fav animals
            handleDeleteFavouriteAnimal(favAnimal);
            // saveLocalStorageFavAnimals();
        }

        // Update the local storage of favourite animals
        // window.localStorage.removeItem('lsFavAnimals');
        // console.log("Check 2:", favouriteAnimals);
        // saveLocalStorageFavAnimals();
    }

    // Handle delete favourite animal
    const handleDeleteFavouriteAnimal = (favAnimal) => {
        const newFavAnimalList = favouriteAnimals.filter((animal) => {
            return animal !== favAnimal
        })

        // Update the favouriteAnimals state with the new array (with the item clicked removed)
        favAnimal.favourite = false
        setFavouriteAnimals(newFavAnimalList)
        window.localStorage.setItem("lsFavAnimals", JSON.stringify(newFavAnimalList));
    }


    // Handle what to do when the fav animal in the favourite list is clicked
    // Update the animalDetail card with the favourite clicked
    // in the same manner as clicking on an animal from the all animals list
    const handleFavImageClicked = (favAnimalClicked) => {
        handleSelectedAnimal(favAnimalClicked);
    }

    // Handle what to do when the icon on map is clicked
    const handleMapImageClicked = (mapAnimalClicked) => {
        // console.log("Map animal Clicked", mapAnimalClicked);
        handleSelectedAnimal(mapAnimalClicked)
    }


    return (
        <div className="container">
            <header>
                <h1>Endangered Species</h1>
                {/* <img className="endangered-species-text" src="images/endangered-text.png" alt="" /> */}
            </header>

            <div className="favourites-container">
                <Favourites favouriteAnimals={favouriteAnimals} onFavImageClicked={handleFavImageClicked} />
            </div>

            <div className="map-container">
                <Map animals={animals} onMapAnimalClicked={handleMapImageClicked} />
            </div>

            <div className="facts-container">
                <h1>Fun facts here</h1>
                <FunFactCard selectedAnimal={selectedAnimal} />
            </div>

            <div className="animals-list-container">
                {/* <h2>Endangered Animals</h2> */}
                <img className="endangered-species-text" src="images/endangered-text.png" alt="" />
                <AnimalsList animals={animals} onSelectedAnimal={handleSelectedAnimal} />
            </div>

            <div className="animal-detail-container">
                {/* <h2>Animal detail will go here...</h2> */}
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