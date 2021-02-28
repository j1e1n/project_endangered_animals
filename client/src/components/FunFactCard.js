import React from 'react';

const FunFactCard = ({ selectedAnimal }) => {

    if (!selectedAnimal) {
        return
    }

    return (
        <>
            <div className="fun-fact-card">
                <h2>{selectedAnimal.animal_name}</h2>
                <p>...animal image will go here...</p>
                <p>{selectedAnimal.fun_fact}</p>
            </div>
        </>
    )
};


export default FunFactCard;