import React from 'react'
import RestaurantDetails from './restaurant_details'
import RestaurantPhotos from './restaurant_photos'
import Menu from './menu'
import MakeReservation from './reservation_form'
import RestaurantMap from './restaurant_map'

class RestaurantShow extends React.Component {
    constructor(props){
        super(props);
        // this.scrollClick = this.scrollClick.bind(this)
        this.overview = React.createRef();
        this.photos = React.createRef();
        this.menu = React.createRef();
        this.reviews = React.createRef();
    }

    componentDidMount(){
        this.props.fetchRestaurant(this.props.restId)
    }

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

    numberToTime(num) {
        let dayTime = 'AM'
        if (num >= 12) dayTime = 'PM'

        let hour = Math.floor(num % 12) + ''
        if (hour === '0') hour = '12'

        let minute = num - Math.floor(num)
        minute === 0.5 ? minute = '30' : minute = '00'

        return `${hour}:${minute} ${dayTime}`
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
                                <a onClick={this.scrollOverview.bind(this)}>Overview</a>    
                                <a onClick={this.scrollPhotos.bind(this)}>Photos</a>    
                                <a onClick={this.scrollMenu.bind(this)}>Menu</a>    
                                <a onClick={this.scrollReviews.bind(this)}>Reviews</a> 
                            </nav>
                            <hr className='nav-hr'/>
                            <nav ref={this.overview} className='overview'>
                                <RestaurantDetails restaurant={this.props.restaurant}/>
                            </nav>
                            <nav ref={this.photos}>
                                <RestaurantPhotos photosArr={this.props.restaurant.photoUrls.slice(1)} />
                            </nav>

                            <nav ref={this.menu}>
                                <Menu menus={this.props.restaurant.menus} />
                            </nav>

                            <nav ref={this.reviews}>
                                <p className='temp-reviews'>Reviews coming soon !</p>
                            </nav>
                        </div>
                            
                        <div className='show-right-column'>
                            <nav className="reservation-block">
                                <MakeReservation numberToTime={this.numberToTime}/>
                            </nav>
                            
                            <RestaurantMap restaurant={restaurant} />

                            <h3>City</h3>
                            <p>{restaurant.city}</p>
                            <h3>Hours</h3>
                            <p>Daily: {this.numberToTime(restaurant.open_at)} - {this.numberToTime(restaurant.close_at)}</p>

                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default RestaurantShow;