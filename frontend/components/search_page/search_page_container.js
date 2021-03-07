import SearchPage from './search_page'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../../actions/restaurant_actions'

const mSTP = (state, ownProps) => {
    debugger
    return {
        restaurants: state.entities.restaurants
    }
}

const mDTP = dispatch => {
    return {
        fetchRestaurants: search => dispatch(fetchRestaurants(search))
    }
}

export default connect(mSTP, mDTP)(SearchPage);