import React from 'react';

const FunFactCard = ({ selectedAnimal }) => {

    if (!selectedAnimal) {
        return
    }

    return (
        <>
            <div className="fun-fact-card">
                <h2>{selectedAnimal.animal_name}</h2>
                <img src="{selectedAnimal.pictures}"/>
                <p>{selectedAnimal.fun_fact}</p>
            </div>
        </>
    )
};


export default FunFactCard;