import React from "react";

// const AnimalsList = ({animals, selectedAnimal}) => {

//     const animalListItems = animals.map((picture, index) => {
//         return <li onClick={() => {onSelectedAnimal(picture)}} 
//         key = {index}>{animal.name} {animal.picture} </li>
//     })

const AnimalsList = ({ animals, onSelectedAnimal }) => {
    let animalPic;
    const animalListItems = animals.map((animal) => {

        return <li onClick={() => { onSelectedAnimal(animal) }} key={animal._id}>
            {/* If pictures inside public folder */}
            < img src={animal.pictures} width="50" height="50" alt="animal">
            </img>
            {animal.animal_name}
        </li >
    })

    return (
        <div>
            {animalListItems}
        </div>
    )

}

export default AnimalsList;

