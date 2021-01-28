import React from 'react'
import RestaurantCarouselItem from './restaurant_carousel_item'

class RestaurantCarousel extends React.Component {

    componentDidMount() {
        this.props.fetchRestaurants()
    }

    scroll(distance){
        document.getElementById('carousel-ul').scrollLeft += distance
    }

    render() {
        const restList = this.props.restaurants.map((restaurant, idx) => {
            return <RestaurantCarouselItem key={idx} restaurant={restaurant} {...this.props}/>
        })
        return (
            <div className='carousel-component'>
                <h2>Your picks for today</h2>
                <hr/>
                <div className='carousel-list'>

                    <ul id='carousel-ul'>
                        <button className='left-scroll-button' onClick={() => this.scroll(-600)}></button>
                        <button className='right-scroll-button' onClick={() => this.scroll(600)}></button>
                        {restList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default RestaurantCarousel;