
import React from "react";

// const AnimalsList = ({animals, selectedAnimal}) => {

//     const animalListItems = animals.map((picture, index) => {
//         return <li onClick={() => {onSelectedAnimal(picture)}} 
//         key = {index}>{animal.name} {animal.picture} </li>
//     })

const AnimalsList = ({ animals, onSelectedAnimal }) => {
    const animalListItems = animals.map((animal) => {

        return <li onClick={() => { onSelectedAnimal(animal) }} key={animal._id}>
            < img src={animal.pictures} width="100" height="100" alt="animal" className="animal-list-image">
            </img>
            {/* {animal.animal_name} */}
        </li >
    })

    return (
        <div className="animal-list-inner-container">
            {animalListItems}
            <p>To find out more about an animal, click on a picture</p>
        </div>
    )

}

export default AnimalsList;

