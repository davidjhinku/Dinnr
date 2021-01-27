import React from 'react'
import RestaurantCarouselItem from './restaurant_carousel_item'

class RestaurantCarousel extends React.Component {

    componentDidMount() {
        this.props.fetchRestaurants()
    }

    leftScroll(e){
        // e.preventDefault()
        document.documentElement.scrollBy(50, 50)
    }

    rightScroll(e){
        // e.preventDefault()
        document.documentElement.scrollBy(50, 50)
    }

    render() {
        const restList = this.props.restaurants.map((restaurant, idx) => {
            return <RestaurantCarouselItem key={idx} restaurant={restaurant} {...this.props}/>
        })
        return (
            <div className='carousel-component'>
                <h2>Your picks for today</h2>
                <hr/>
                {/* <button onClick={this.leftScroll}className='left-scroll-button'></button>
                <button onClick={this.rightScroll}className='right-scroll-button'></button> */}
                <ul>
                    {restList}
                </ul>
            </div>
        )
    }
}

export default RestaurantCarousel;