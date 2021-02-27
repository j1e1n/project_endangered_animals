import React from 'react'

// This component will render the view all the users favourite animals as clickable image thumbnails

const Favourites = ({ favouriteAnimals, onFavImageClicked }) => {

    const favouriteAnimalsImages = favouriteAnimals.map((favouriteAnimal) => {
        return (
            <img onClick={() => { onFavImageClicked(favouriteAnimal) }}
                className="fav-image"
                src={favouriteAnimal.image.medium}
                key={favouriteAnimal.id}
                alt="" height="100px">
            </img>)
    })

    // Render view of a users favourite animals
    return (
        <div className="favourites-container">
            <h2 className="favouriteAnimalsTitle">Favourite Animals</h2>
            {favouriteAnimalsImages}
        </div>
    )
}

export default Favourites