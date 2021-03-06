import React from 'react'
import ReservationTimeslotsContainer from './reservation_timeslots_container'
import {restAverages, starRating} from '../../util/util_functions';

class RestaurantSearchItem extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        e.preventDefault()
        this.props.history.push(`/restaurants/${this.props.restaurant.id}`)
    }

    stars(reviews) {
        let length = Object.keys(reviews).length
        if (reviews['none']) {
            return (
                <div className='overall'>
                    <span>{starRating(0)}</span>
                    <span className='size'>No reviews</span>
                </div>
            )
        } else {
            let averages = restAverages(Object.values(reviews))
            let words = ['No Reviews', 'Good', 'Very Good', 'Excellent', 'Awesome', 'Exceptional']
            
            return (
                <div className='overall'>
                    <span>{starRating(averages['overall'])}</span>
                    <span className='size'><span className='strong'>{words[Math.floor(averages['overall'])]}</span>{` (${length})`}</span>
                </div>
            )
        }
    }

    render() {
        if (!this.props.reviews) {
            return(
                <div>
                    Loading...
                </div>
            )
        } else {
            const rest = this.props.restaurant
            const rating = this.stars(this.props.reviews)
            let photoURL = rest.photoUrl ? rest.photoUrl : rest.photoUrls[0]

            return(
                <li>
                    <div className='search-restaurant-item'>
                        {/* <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="test image" onClick={this.handleClick}/> */}
                        <img src={photoURL} onClick={this.handleClick}/>
    
                        <div className='rest-information'>
                            <p onClick={this.handleClick}>{rest.name}</p>
                            {rating}
                            <ul className='rest-info-list'>
                                <li>{rest.price_range}</li>
                                <li>{rest.cuisine_type}</li>
                                <li>{rest.city}</li>
                            </ul>
                            <ReservationTimeslotsContainer restId={rest.id}/>
                        </div>
                    </div>
                    <hr/>
                </li>
            )
        }
    }
}

export default RestaurantSearchItem;