import React from 'react'
import SearchContainer from '../search/search_form_container'
import RestaurantCarouselContainer from '../restaurant_carousel/restaurant_carousel_container'

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            today: Date
        }
    }

    render() {
        return(
            <div className="splash-components">
                <div className="splash-search-form">
                    <SearchContainer date={this.state.today} />
                </div>
                <div className="splash-restaurant-index">
                    <RestaurantCarouselContainer />
                </div>
            </div>
        )
    }
}

export default Splash;