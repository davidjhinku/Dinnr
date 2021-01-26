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

        // debugger
        return(
            <div>
                <p>{restList.length} restaurants available</p>
                <hr/>
                <ul>{restList}</ul>
            </div>
        )
    }
}

export default RestaurantSearch;