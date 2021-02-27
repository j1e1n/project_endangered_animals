import React from "react";

const AnimalsList = ({animalPicture, onSelectedPicture}) => {

    const animalListItems = animalPictures.map((picture, index) => {
        return <li onClick={() => {onSelectedPicture(picture)}} key = {index}>{animal.name} {animal.picture} </li>
    })

    return (
        <>
        <ul>
            {animalListitems}
        </ul>
        </>
    )
    
}

export default AnimalsList;

