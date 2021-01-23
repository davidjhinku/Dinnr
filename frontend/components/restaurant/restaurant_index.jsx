import React from 'react'

class RestaurantIndex extends React.Component {

    componentDidMount() {
        this.props.fetchRestaurants()
    }

    render() {
        return(
            <div>
                <h2>Rotating restaurant index</h2>

            </div>
        )
    }
}

export default RestaurantIndex;