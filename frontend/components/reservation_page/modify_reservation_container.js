import ModifyReservation from './modify_reservation'
import { connect } from 'react-redux'
import { fetchReservation, deleteReservation } from '../../actions/reservation_actions'

const mSTP = (state, ownProps) => {
    // const resId = ownProps.match.params.resId
    debugger
    return {
        reservation: state.entities.reservations,
        restaurant: Object.values(state.entities.restaurants)[0],
        currentUser: Object.values(state.entities.users)[0],
        // resId: resId
        resId: ownProps.match.params.resId
    }
}

const mDTP = dispatch => {
    return {
        // deleteReservation: resId => dispatch(deleteReservation(resId)),
        fetchReservation: resId => dispatch(fetchReservation(resId)),
        // fetchRestaurant: restId => dispatch(fetchRestaurant(restId))
    }
}


export default connect(mSTP, mDTP)(ModifyReservation);