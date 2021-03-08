import React from 'react'
import RestaurantSearchItem from './restaurant_search_item'

class RestaurantSearch extends React.Component {

    render() {
        let reviews = this.props.reviews

        const restList = Object.values(this.props.restaurants).map((restaurant, idx) => {
            return <RestaurantSearchItem key={idx} restaurant={restaurant} reviews={reviews[restaurant.id]} history={this.props.history}/>
        })

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