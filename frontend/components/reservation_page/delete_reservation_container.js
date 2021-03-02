import DeleteReservation from './delete_reservation_page'
import { connect } from 'react-redux'
import { fetchReservation, deleteReservation } from '../../actions/reservation_actions'
// import { fetchRestaurant } from '../../actions/restaurant_actions'
//Also create action for unmount that will clear search params

const mSTP = (state, ownProps) => {
    const resId = ownProps.match.params.resId
    return {
        reservation: state.entities.reservations,
        restaurant: Object.values(state.entities.restaurants)[0],
        currentUser: Object.values(state.entities.users)[0],
        resId: resId
    }
}

const mDTP = dispatch => {
    return {
        deleteReservation: resId => dispatch(deleteReservation(resId)),
        fetchReservation: resId => dispatch(fetchReservation(resId)),
        // fetchRestaurant: restId => dispatch(fetchRestaurant(restId))
    }
}


export default connect(mSTP, mDTP)(DeleteReservation);