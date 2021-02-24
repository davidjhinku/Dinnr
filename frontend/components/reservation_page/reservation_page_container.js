import ReservationPage from './reservation_page'
import { connect } from 'react-redux'
import { createReservation } from '../../actions/reservation_actions'
import { fetchRestaurant } from '../../actions/restaurant_actions'

const mSTP = (state, ownProps) => {
    debugger
    return {
        reservation: state.entities.reservations,
        currentUser: Object.values(state.entities.users)[0],
        restId: ownProps.match.params.restId,
        searchParams: state.entities.searchParams,
        formType: "Complete reservation"
        // restaurants: Object.values(state.entities.restaurants)
    }
}

const mDTP = dispatch => {
    return {
        createReservation: reservation => dispatch(createReservation(reservation)),
        action: reservation => dispatch(createReservation(reservation)),
        fetchRestaurant: restId => dispatch(fetchRestaurant(restId))
    }
}


export default connect(mSTP, mDTP)(ReservationPage);