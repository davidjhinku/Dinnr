import React from 'react'
import RestaurantSearchItem from './restaurant_search_item'

class RestaurantSearch extends React.Component {

    // componentDidMount() {
    //     this.props.fetchRestaurants()
    // }

    render() {
        // debugger
        const restList = Object.values(this.props.restaurants).map((restaurant, idx) => {
            return <RestaurantSearchItem key={idx} restaurant={restaurant} history={this.props.history}/>
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