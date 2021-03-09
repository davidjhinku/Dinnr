import ModifyReservation from './modify_reservation'
import { connect } from 'react-redux'
import { fetchReservation, updateReservation } from '../../actions/reservation_actions'

const mSTP = (state, ownProps) => {
    return {
        reservation: state.entities.reservations,
        restaurant: Object.values(state.entities.restaurants)[0],
        currentUser: Object.values(state.entities.users)[0],
        resId: ownProps.match.params.resId
    }
}

const mDTP = dispatch => {
    return {
        updateReservation: reservation => dispatch(updateReservation(reservation)),
        fetchReservation: resId => dispatch(fetchReservation(resId)),
    }
}


export default connect(mSTP, mDTP)(ModifyReservation);