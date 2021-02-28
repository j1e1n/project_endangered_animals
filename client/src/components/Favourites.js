import React from 'react'

// This component will render the view all the users favourite animals as clickable image thumbnails

const Favourites = ({ favouriteAnimals, onFavImageClicked }) => {

    const favouriteAnimalsImages = favouriteAnimals.map((favouriteAnimal) => {
        return (
            // Create list of clickable animal thumbnails as favourites 
            <img onClick={() => { onFavImageClicked(favouriteAnimal) }}
                className="fav-image"
                src={favouriteAnimal.pictures}
                key={favouriteAnimal._id}
                alt="" height="100px">
            </img>
        )
    })

    // Render view of a users favourite animals
    return (
        <>
            <h2 className="favouriteAnimalsTitle">Favourite Animals</h2>
            <div className="fav-container">
                {favouriteAnimalsImages}
            </div>
        </>
    )
}

export default Favourites