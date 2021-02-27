import ReservationConfirmation from './reservation_confirmation'
import { connect } from 'react-redux'
import { fetchReservation } from '../../actions/reservation_actions'
import { fetchRestaurant} from '../../actions/restaurant_actions'
//Also create action for unmount that will clear search params

const mSTP = (state, ownProps) => {
    debugger
    return {
        reservation: state.entities.reservations,
        restaurant: Object.values(state.entities.restaurants)[0],
        currentUser: Object.values(state.entities.users)[0],
        resId: ownProps.match.params.resId
        // restaurant: state.entities.restaurants[ownProps.match.params.restId],
        // restId: ownProps.match.params.restId,
        // searchParams: state.entities.search_params,
    }
}

const mDTP = dispatch => {
    return {
        fetchReservation: resId => dispatch(fetchReservation(resId)),
        // action: reservation => dispatch(createReservation(reservation)),
        fetchRestaurant: restId => dispatch(fetchRestaurant(restId))
    }
}


export default connect(mSTP, mDTP)(ReservationConfirmation);