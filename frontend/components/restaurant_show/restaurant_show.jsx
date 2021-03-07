import React from 'react'
import RestaurantDetails from './restaurant_details'
import RestaurantPhotos from './restaurant_photos'
import Menu from './menu'
import Reviews from './reviews'
import ReservationFormContainer from './reservation_form_container'
import RestaurantMap from './restaurant_map'
import {numberToTime} from '../../util/util_functions'

class RestaurantShow extends React.Component {
    constructor(props){
        super(props);
        this.overview = React.createRef();
        this.photos = React.createRef();
        this.menu = React.createRef();
        this.reviews = React.createRef();
    }

    componentDidMount(){
        this.props.fetchRestaurant(this.props.restId)
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.restaurant !== this.props.restaurant) {
    //         this.props.fetchRestaurant(this.props.restId)
    //     }
    // }

    scrollOverview() {
        this.overview.current.scrollIntoView({ behavior: 'smooth' });
    }

    scrollPhotos() {
        this.photos.current.scrollIntoView({behavior: 'smooth'});
    }

    scrollMenu() {
        this.menu.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    scrollReviews() {
        this.reviews.current.scrollIntoView({ behavior: 'smooth' });
    }

    render(){
        const restaurant = this.props.restaurant

        if (!restaurant || !restaurant.photoUrls) {
            return (
                <div>Loading Restaurant...</div>
            )
        } else {
            // debugger
            return (
                <div className='show-page'>
                    {/* <img src={restaurant.photoUrls[0]} alt="show header image"/> */}
                    <img src="https://images.wallpaperscraft.com/image/restaurant_table_interior_modern_style_39288_1600x900.jpg" alt=""/>
                    <div className='show-content'>
                        <div className='show-left-column'>
                            <nav className='page-nav'>
                                <a onClick={this.scrollOverview.bind(this)}>Overview</a>    
                                <a onClick={this.scrollPhotos.bind(this)}>Photos</a>    
                                <a onClick={this.scrollMenu.bind(this)}>Menu</a>    
                                <a onClick={this.scrollReviews.bind(this)}>Reviews</a> 
                            </nav>
                            <hr className='nav-hr'/>
                            <nav ref={this.overview} className='overview'>
                                <RestaurantDetails restaurant={this.props.restaurant} reviews={this.props.reviews}/>
                            </nav>
                            <nav ref={this.photos}>
                                <RestaurantPhotos photosArr={this.props.restaurant.photoUrls.slice(1)} />
                            </nav>

                            <nav ref={this.menu}>
                                <Menu menus={this.props.restaurant.menus} />
                            </nav>

                            <nav ref={this.reviews}>
                                <Reviews reviews={this.props.reviews} restaurant={restaurant.name}/>
                            </nav>
                        </div>
                            
                        <div className='show-right-column'>
                            <nav className="reservation-block">
                                <ReservationFormContainer restId={restaurant.id}/>
                            </nav>
                            
                            <RestaurantMap restaurant={restaurant} />

                            <div className='detail-items'>
                                <i className="fas fa-city"></i>
                                <div >
                                    <h3 className='detail-items'>City</h3>
                                    <p>{restaurant.city}</p>
                                </div>
                            </div>
                            <div className='detail-items'>
                                <i className="far fa-clock"></i>
                                <div >
                                    <h3 className='detail-items'>Hours</h3>
                                    <p>Daily: {numberToTime(restaurant.open_at)} - {numberToTime(restaurant.close_at)}</p>
                                </div>
                            </div>
                            <div className='detail-items'>
                                <i className="fas fa-utensils"></i>
                                <div >
                                    <h3 className='detail-items'>Cuisine</h3>
                                    <p>{restaurant.cuisine_type}</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default RestaurantShow;
