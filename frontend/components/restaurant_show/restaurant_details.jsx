import React from 'react'

const RestaurantDetails = ({restaurant}) => {
    return (
        <div className='show-restaurant-details'>
            <h2>{restaurant.name}</h2>
            <hr className='show-hr'/>
            <ul className='show-details-list'>
                <li className='temp-show-star'><img src={window.starUrl} alt="rating" /></li>
                <li>{Math.floor(Math.random()*50)} reviews</li>
                <li>{restaurant.price_range}</li>
                <li>{restaurant.cuisine_type}</li>
            </ul>
            <p>{restaurant.bio}</p>
        </div>
    )
}

export default RestaurantDetails;