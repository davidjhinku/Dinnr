import React from 'react'
import RestaurantCarouselItem from './restaurant_carousel_item'

class RestaurantCarousel extends React.Component {

    componentDidMount() {
        this.props.fetchRestaurants()
    }

    render() {
        const restList = this.props.restaurants.map((restaurant, idx) => {
            return <RestaurantCarouselItem key={idx} restaurant={restaurant} {...this.props}/>
        })
        return (
            <div className='carousel-component'>
                <h2>Your picks for today</h2>
                <hr/>
                <ul>
                    <button className='left-scroll-button'></button>
                    <button className='right-scroll-button'></button>
                    {restList}
                </ul>
            </div>
        )
    }
}

export default RestaurantCarousel;