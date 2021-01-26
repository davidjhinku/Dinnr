import React from 'react'
import RestaurantSearchItem from './restaurant_search_item'

class RestaurantSearch extends React.Component {

    componentDidMount() {
        this.props.fetchRestaurants()
    }

    render() {
        const restList = this.props.restaurants.map((restaurant, idx) => {
            return <RestaurantSearchItem key={idx} restaurant={restaurant}/>
        })

        debugger
        return(
            <div>
                <h2>List of restaurants matching filter</h2>
                <ul>{restList}</ul>
                none above?
            </div>
        )
    }
}

export default RestaurantSearch;