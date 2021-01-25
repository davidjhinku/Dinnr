import React from 'react'

const RestaurantMap = ({restaurant}) => {
    // debugger
    return(
        <div className='map-container'>
            <img src={`https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=310x155&maptype=roadmap&markers=color:blue%7C${restaurant.lat},${restaurant.lng}&key=${window.googleAPIKey}`} alt="map"/>
            <p>{restaurant.address} {restaurant.city}, {restaurant.state} {restaurant.zip}</p>

            {/* "https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=310x155&markers=size:small%7Ccolor:blue%7C#{restaurant.lat},#{restaurant.lng}&key=#{Rails.application.credentials.google_maps_api_key}" */}
        </div>
    )
}

export default RestaurantMap;