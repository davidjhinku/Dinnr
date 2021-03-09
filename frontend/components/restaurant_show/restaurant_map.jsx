import React from 'react'

const RestaurantMap = ({restaurant}) => {
    return(
        <div className='map-container'>
            <a href={`https://maps.google.com/?q= ${restaurant.address}, ${restaurant.city}, ${restaurant.state}, ${restaurant.zip}`} target="_blank">
                <img src={`https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=310x155&maptype=roadmap&markers=color:blue%7C${restaurant.lat},${restaurant.lng}&key=${window.googleAPIKey}`} alt="map"/>
                <p>{restaurant.address}, {restaurant.city}, {restaurant.state} {restaurant.zip}</p>
            </a>
        </div>
    )
}

export default RestaurantMap;