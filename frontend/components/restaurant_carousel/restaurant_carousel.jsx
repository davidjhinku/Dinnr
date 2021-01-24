import React from 'react'
import RestaurantCarouselItem from './restaurant_carousel_item'

class RestaurantCarousel extends React.Component {

    componentDidMount() {
        this.props.fetchRestaurants()
    }

    render() {
        const restList = this.props.restaurants.map((restaurant, idx) => {
            return <RestaurantCarouselItem key={idx} restaurant={restaurant} />
        })
        return (
            <div className='carousel-component'>
                <h2>Your picks for today</h2>
                <hr/>
                <ul>{restList}</ul>
            </div>
        )
    }
}

export default RestaurantCarousel;