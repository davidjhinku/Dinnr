import ReviewForm from './review_form'
import { connect } from 'react-redux'
import {createReview} from '../../actions/review_actions'
import {fetchReservation} from '../../actions/reservation_actions'

const mSTP = (state, ownProps) => {
    return {
        currentUser: Object.values(state.entities.users)[0],
        restaurant: Object.values(state.entities.restaurants)[0],
        reservation: state.entities.reservations,
        resId: ownProps.match.params.resId, 
        restId: ownProps.match.params.restId
    }
}

const mDTP = dispatch => {
    return {
        createReview: review => dispatch(createReview(review)),
        fetchReservation: resId => dispatch(fetchReservation(resId))
    }
}

export default connect(mSTP, mDTP)(ReviewForm);