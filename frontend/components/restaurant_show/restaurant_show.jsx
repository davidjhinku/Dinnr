import React from 'react'
import RestaurantDetails from './restaurant_details'
import RestaurantPhotos from './restaurant_photos'

class RestaurantShow extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchRestaurant(this.props.restId)
    }

    // componentWillUnmount() {
    //     console.log('it unmounted')
    // }

    render(){
        const restaurant = this.props.restaurant

        if (!restaurant) {
            return (
                <div>Loading Restaurant...</div>
            )
        } else {
            return (
                <div className='show-page'>
                    {/* <img src={restaurant.photoUrls[0]} alt="show header image"/> */}
                    
                    <div className='show-left-column'>
                        <span>Links to jump down page</span>
                        <RestaurantDetails restaurant={this.props.restaurant}/>
                        <RestaurantPhotos photosArr={this.props.restaurant.photoUrls.slice(1)} />
                        {/* menu */}
                        {/* reviews */}
                    </div>
                        
                    <div className='show-right-column'>
                        {/* reservation */}
                        {/* map */}
                        <h3>City</h3>
                        <h4>{restaurant.city}</h4>
                        <h3>Hours</h3>
                        {/* <h4>Hours</h4> */}
                    </div>
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