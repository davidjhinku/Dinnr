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

    render(){
        const restaurant = this.props.restaurant

        if (!restaurant || !restaurant.photoUrls) {
            return (
                <div>Loading Restaurant...</div>
            )
        } else {
            return (
                <div className='show-page'>
                    {/* <img src={restaurant.photoUrls[0]} alt="show header image"/> */}
                    <img src="https://images.wallpaperscraft.com/image/restaurant_table_interior_modern_style_39288_1600x900.jpg" alt=""/>
                    <div className='show-content'>
                        <div className='show-left-column'>
                            <nav className='page-nav'>
                                <a href="#overview">Overview</a>    
                                <a href="#photos">Photos</a>    
                                <a href="#menu">Menu</a>    
                                <a href="#reviews">Reviews</a> 
                            </nav>
                            <nav id='overview' className='overview'>
                                <RestaurantDetails restaurant={this.props.restaurant}/>
                            </nav>
                            <nav id='photos'>
                                <RestaurantPhotos photosArr={this.props.restaurant.photoUrls.slice(1)} />
                            </nav>

                            <nav id='menu'>
                                {/* menu */}
                            </nav>
                            <nav id='reviews'>
                                {/* reviews */}
                            </nav>
                            <nav className='test-scrolling-block'>
                                BIG BLOCK TO TEST SCROLLING

                            </nav>
                        </div>
                            
                        <div className='show-right-column'>
                            <nav className="reservation-block">
                                Rservation block that will scroll

                                {/* reservation */}
                            </nav>
                            {/* map */}
                            <h3>City</h3>
                            <h4>{restaurant.city}</h4>
                            <h3>Hours</h3>
                            {/* <h4>Hours</h4> */}
                            <nav className='test-scrolling-block'>
                                BIG BLOCK TO TEST SCROLLING

                            </nav>
                        </div>
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