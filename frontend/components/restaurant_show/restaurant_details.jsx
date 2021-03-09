import React from 'react'
import { render } from 'react-dom';
import {restAverages, starRating} from '../../util/util_functions'

class RestaurantDetails extends React.Component {
    
    
    render() {
        let restaurant = this.props.restaurant
        let reviews = this.props.reviews
        
        if (reviews['none']) {
            return (
                <div className='show-restaurant-details'>
                    <h2>{restaurant.name}</h2>
                    <hr className='show-hr' />
                    <ul className='show-details-list'>
                        <li>No Reviews</li>
                        <li>{restaurant.price_range}</li>
                        <li>{restaurant.cuisine_type}</li>
                    </ul>
                    <p>{restaurant.bio}</p>
                </div>
            )
        } else {
            let reviewsData = restAverages(Object.values(reviews));
            let stars = starRating(reviewsData['overall']);
            reviews = Object.keys(reviews).length

            return (
                <div className='show-restaurant-details'>
                    <h2>{restaurant.name}</h2>
                    <hr className='show-hr'/>
                    <ul className='show-details-list'>
                        <li><span>{stars} {reviewsData['overall']}</span></li>
                        <li><i className="far fa-comment-alt fa-flip-horizontal"></i>{reviews} Reviews</li>
                        <li>{restaurant.price_range}</li>
                        <li><i className="fas fa-utensils"></i>{restaurant.cuisine_type}</li>
                    </ul>
                    <p>{restaurant.bio}</p>
                </div>
            )
        }

    }
}

export default RestaurantDetails;