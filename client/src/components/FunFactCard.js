import React from 'react';

const FunFactCard = ({ selectedAnimal }) => {

    if (!selectedAnimal) {
        return (null)
    }

    return (
        <>
            <div className="fun-fact-card">
                <h2>{selectedAnimal.animal_name}</h2>
                <img src={selectedAnimal.pictures_fact} width="300" height="300" alt={selectedAnimal.animal_name} />
                <p>{selectedAnimal.fun_fact}</p>
            </div>
        </>
    )
};


export default FunFactCard;