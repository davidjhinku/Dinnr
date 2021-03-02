import ReservationForm from './reservation_form'
import { connect } from 'react-redux'
import { fetchRestaurant } from '../../actions/reservation_actions'

const mSTP = (state, ownProps) => {
    // debugger
    return {
        // restId: ownProps.match.params.restId,
        searchParams: state.entities.search_params,
        timeslots: state.entities.timeslots
    }
}

const mDTP = dispatch => {
    return {
        checkTimeslots: search => dispatch(checkTimeslots(search))
        // fetchRestaurant: restId => dispatch(fetchRestaurant(restId))
    }
}


export default connect(mSTP, mDTP)(ReservationForm);