import SearchPage from './search_page'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../../actions/restaurant_actions'

const mSTP = (state, ownProps) => {
    return {
        restaurants: state.entities.restaurants,
        reviews: state.entities.reviews
    }
}

const mDTP = dispatch => {
    return {
        fetchRestaurants: search => dispatch(fetchRestaurants(search))
    }
}

export default connect(mSTP, mDTP)(SearchPage);