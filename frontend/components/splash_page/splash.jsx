import React from 'react'
import SearchContainer from '../search/search_form_container'
import RestaurantCarouselContainer from '../restaurant_carousel/restaurant_carousel_container'

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="splash-components">
                <div className="splash-search-form">
                    <h1>Find your table for any occasion</h1>
                    <SearchContainer {...this.props}/>
                </div>
                <div className="splash-restaurant-index">
                    <RestaurantCarouselContainer {...this.props}/>
                </div>
            </div>
        )
    }
}

export default Splash;