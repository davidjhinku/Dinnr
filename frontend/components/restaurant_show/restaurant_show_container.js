import RestaurantShow from './restaurant_show'
import { connect } from 'react-redux'
import { fetchRestaurant } from '../../actions/restaurant_actions'

const mSTP = (state, ownProps) => {
    const restId = ownProps.match.params.restId
    return {
        restId: restId,
        restaurant: state.entities.restaurants[restId]
    }
}

const mDTP = dispatch => {
    return {
        fetchRestaurant: restId => dispatch(fetchRestaurant(restId))
    }
}


export default connect(mSTP, mDTP)(RestaurantShow);