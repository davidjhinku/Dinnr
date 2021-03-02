import ReservationForm from './reservation_form'
import { connect } from 'react-redux'
import { checkTimeslots } from '../../actions/reservation_actions'
import { setSearchParams } from '../../actions/search_actions'
import { fetchRestaurant } from '../../actions/restaurant_actions'

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
        checkTimeslots: search => dispatch(checkTimeslots(search)),
        setSearchParams: search => dispatch(setSearchParams(search)),
        fetchRestaurant: restId => dispatch(fetchRestaurant(restId))
    }
}


export default connect(mSTP, mDTP)(ReservationForm);