import ReservationTimeslots from './reservation_timeslots'
import { connect } from 'react-redux'
import { checkTimeslots } from '../../actions/reservation_actions'

const mSTP = (state, ownProps) => {
    return {
        searchParams: state.entities.search_params,
        timeslots: state.entities.timeslots
    }
}

const mDTP = dispatch => {
    return {
        checkTimeslots: search => dispatch(checkTimeslots(search))
    }
}

export default connect(mSTP, mDTP)(ReservationTimeslots);