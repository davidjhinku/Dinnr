import React from 'react'
import SearchFormContainer from '../search_form/search_form_container'
import RestaurantCarouselContainer from '../restaurant_carousel/restaurant_carousel_container'

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentWillUnmount() { //confirm what this will do
    //     debugger
    //     this.props.clearRestaurants();
    // }

    render() {
        return(
            <div className="splash-components">
                <div className="splash-search-form">
                    <h1>Find your table for any occasion</h1>
                    <SearchFormContainer {...this.props}/>
                </div>
                <div className="splash-restaurant-index">
                    <RestaurantCarouselContainer {...this.props}/>
                </div>
            </div>
        )
    }
}

export default Splash;