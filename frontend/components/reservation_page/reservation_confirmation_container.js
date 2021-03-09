import ReservationConfirmation from './reservation_confirmation'
import { connect } from 'react-redux'
import { fetchReservation } from '../../actions/reservation_actions'
import { fetchRestaurant} from '../../actions/restaurant_actions'

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
        fetchReservation: resId => dispatch(fetchReservation(resId)),
        fetchRestaurant: restId => dispatch(fetchRestaurant(restId))
    }
}


export default connect(mSTP, mDTP)(ReservationConfirmation);