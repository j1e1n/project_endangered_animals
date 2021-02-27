// animals container
import React from 'react';

const AnimalsContainer = () => {
    return (
        <div className="container">
            <header>
                <h1>Endangered Animals</h1>
            </header>
            <div className="favourites-container">
                <h2>Favourites will go here...</h2>
            </div>
            <div className="map-container">
                <h2>Map will go here...</h2>
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
                <h2>Quiz will go here...</h2>
            </div>
        </div>
    )
}

export default AnimalsContainer;