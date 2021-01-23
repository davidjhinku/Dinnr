import RestaurantCarousel from './restaurant_carousel'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../../actions/restaurant_actions'

const mSTP = (state, ownProps) => {
    return {
        restaurants: Object.values(state.entities.restaurants)
    }
}

const mDTP = dispatch => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurants())
    }
}


export default connect(mSTP, mDTP)(RestaurantCarousel);