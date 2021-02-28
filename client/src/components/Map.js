import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Map = ({ animals }) => {
    const animalLocator = animals.map((animal) => {
        return <li>{animal.locator}</li>
    })


    // const animalListItems = animals.map((animal) => {

    //     return <li onClick={() => { onSelectedAnimal(animal) }} key={animal._id}>
    //         < img src={animal.pictures} width="100" height="100" alt="animal" className="animal-list-image">
    //         </img>
    //         {/* {animal.animal_name} */}
    //     </li >
    // })





    return (
        <>
            <div className='map'>
                <h1>Interactive Map</h1>
                {/* <img src={} alt="map loading">Map</img> */}

                <MapContainer center={[55.8642, -4.2518]} zoom={5} scrollWheelZoom={true}>

                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={[55.8642, -4.2518]}>
                        <Popup>
                            <b>Codeclan Tigers</b>
                            <p>Steve in his natural habitat consuming quavers and Irn Bru. Temprament varies depending on amount of playtime due to covid restrictions.</p>
                        </Popup>
                    </Marker>
                </MapContainer>


            </div>
            {animalLocator}
        </>

    );
};


export default Map;