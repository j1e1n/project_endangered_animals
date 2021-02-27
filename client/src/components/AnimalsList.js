import React from "react";

const AnimalsList = ({animals, selectedAnimals}) => {

    const animalListItems = animals.map((picture, index) => {
        return <li onClick={() => {onSelectedAnimal(picture)}} 
        key = {index}>{animal.name} {animal.picture} </li>
    })

    return (
        <>
        <ul>
            {animalListItems}
        </ul>
        </>
    )
    
}

export default AnimalsList;

