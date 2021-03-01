import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";

const Map = ({ animals }) => {


    // Get all the coords of animal locations and assign to Marker position of Leaflet Map
    const allAnimalCoords = animals.map((animal, index) => {
        let animalIconUrl = animal.pictures
        return (
            < Marker position={animal.locator} key={index}
                icon={new Icon({
                    iconUrl: animalIconUrl,
                    iconSize: [30, 30]
                })}
            >
                <Popup>
                    <b>{animal.animal_name}</b>
                </Popup>
            </Marker >
        )

    })

    const accessToken = "pk.eyJ1IjoiZnJlZHdhcmRvIiwiYSI6ImNrbGxibGluYjA4dGoyd2xsMXMyNGx6dWkifQ.l4K--lGNetKj2ioFbfjS1w";
    const mapUrl = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`

    // Icon options
    const tigerIcon = new Icon({
        iconUrl: '/images/tiger.png',
        iconSize: [30, 30]
    })


    return (
        <>
            <div className='map'>
                <h1>Interactive Map</h1>
                {/* <img src={} alt="map loading">Map</img> */}

                <MapContainer center={[55.8642, -4.2518]} zoom={1} scrollWheelZoom={true} zoomControl={true}>

                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        url={mapUrl}
                        maxZoom="5"
                        minZoom="2"
                        id="mapbox/streets-v11"
                    />

                    {/* Following marker just a homage to our instructor  */}
                    <Marker position={[55.8642, -4.2518]} icon={tigerIcon}>
                        <Popup>

                            <b>Codeclan Tigers</b>
                            <p>Steve in his natural habitat consuming quavers and Irn Bru. Temprament varies depending on amount of playtime due to covid restrictions.</p>
                        </Popup>

                    </Marker>

                    {/* The following line of code will render all the coordinate points for the animals  */}
                    {allAnimalCoords}
                </MapContainer>


            </div>
        </>

    );
};


export default Map;