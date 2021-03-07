import React from 'react'
import {restAverages, starRating} from '../../util/util_functions'

const RestaurantDetails = ({restaurant, reviews}) => {
    debugger
    if (reviews['none']) {
        let reviewsData = {overall: ''};
        let stars = '';
        reviews = "No"
    } else {
        debugger
        let reviewsData = restAverages(reviews);
        let stars = starRating(reviewsData['overall']);
        reviews = reviews.length
    }

    debugger
    return (
        <div className='show-restaurant-details'>
            <h2>{restaurant.name}</h2>
            <hr className='show-hr'/>
            <ul className='show-details-list'>
                {/* <li>{stars} {reviewsData['overall']}</li> */}
                {/* <li className='temp-show-star'><img src={window.starUrl} alt="rating" /></li> */}
                <li>{reviews.length} Reviews</li>
                <li>{restaurant.price_range}</li>
                <li>{restaurant.cuisine_type}</li>
            </ul>
            <p>{restaurant.bio}</p>
        </div>
    )
}

export default RestaurantDetails;