import ReservationTimeslots from './reservation_timeslots'
import { connect } from 'react-redux'
import {  } from '../../actions/reservation_actions'

const mSTP = (state, ownProps) => {
    debugger
    return {
        searchParams: state.entities.search_params,
        //potentially some default state for timeslots from reducers
        // restaurants: state.entities.restaurants
    }
}

const mDTP = dispatch => {
    return {
        //something making a b/e request for reservations
        // fetchRestaurants: search => dispatch(fetchRestaurants(search))
    }
}

export default connect(mSTP, mDTP)(ReservationTimeslots);