import ReservationPage from './reservation_page'
import { connect } from 'react-redux'
import { createReservation } from '../../actions/reservation_actions'

const mSTP = (state, ownProps) => {
    return {
        reservation: state.entities.reservation,
        currentUser: state.entities.user
        // restaurants: Object.values(state.entities.restaurants)
    }
}

const mDTP = dispatch => {
    return {
        createReservation: reservation => dispatch(createReservation(reservation))
    }
}


export default connect(mSTP, mDTP)(ReservationPage);