import React from 'react'

const RestaurantDetails = ({restaurant}) => {
    return (
        <div className='show-restaurant-details'>
            <h2>{restaurant.name}</h2>
            <hr/>
            <ul className='show-details-list'>
                <li>Average_Rating</li>
                <li>10 reviews</li>
                <li>{restaurant.price_range}</li>
                <li>{restaurant.cuisine_type}</li>
            </ul>
            <p>{restaurant.bio}</p>
        </div>
    )
}

export default RestaurantDetails;