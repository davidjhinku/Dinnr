import React from 'react'
import {withRouter} from 'react-router-dom'
import { restAverages, starRating } from '../../util/util_functions';

class RestaurantCarouselItem extends React.Component {
    constructor(props){
        super(props)
        this.visitRestaurant = this.visitRestaurant.bind(this)
    }

    visitRestaurant(e) {
        e.preventDefault()
        this.props.history.push(`/restaurants/${this.props.restaurant.id}`)
    }

    stars(reviews) {
        let length = Object.keys(reviews).length
        if (reviews['none']) {
            return(
                <div className='overall'>
                    <span>{starRating(0)}</span>
                    <span className='strong'>0 reviews</span>
                </div>
            )
        } else {
            let averages = restAverages(Object.values(reviews))

            return(
                <div className='overall'>
                    <span>{starRating(averages['overall'])}</span>
                    <span className='strong'>{length} reviews</span>
                </div>
            )
        }
    }

    render() {
        const rest = this.props.restaurant
        const rating = this.stars(this.props.reviews)

        return (
            <li className='carousel-item' onClick={this.visitRestaurant} >
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="test image"/>
                {/* <img src={rest.photoUrl} alt="first image"/> */}
                <div className='carousel-info-block'>
                    <p>{rest.name}</p>
                    {/* <span className='carousel-star'>
                        <img className='carousel-star' src={window.starUrl} alt="rating" />
                        {Math.floor(Math.random() * 50)} reviews
                    </span> */}
                    {rating}
                    <ul className='rest-info-list'>
                        <li>{rest.cuisine_type}</li>
                        <li>{rest.price_range}</li>
                        <li>{rest.city}</li>
                    </ul>
                </div>
            </li>
        )
    }
}

export default withRouter(RestaurantCarouselItem);