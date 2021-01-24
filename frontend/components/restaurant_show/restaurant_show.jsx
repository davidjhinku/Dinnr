import React from 'react'

class RestaurantShow extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchRestaurant(this.props.restId)
    }

    componentWillUnmount() {
        console.log('it unmounted')
    }

    render(){
        const restaurant = this.props.restaurant

        if (!restaurant) {
            return (
                <div>Loading Restaurant...</div>
            )
        } else {
            return (
                <div>
                    This is the {restaurant.name} show page
                </div>
            )
        }
    }
}

export default RestaurantShow;

//header Image
//first column render
//  nav, sticks when scrolling up
//  RestaurantDetails :name, :avg reviews, :price_rage, :cuisine, :bio
//  Photos Component
//  Menu
//  Reviews

//second column render
//  search form, sticks when scrolling up
//  map
//  details :address, city, state, zip, hours