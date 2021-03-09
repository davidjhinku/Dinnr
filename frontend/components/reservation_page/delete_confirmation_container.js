import DeleteConfirmation from './delete_confirmation'
import { connect } from 'react-redux'
import { fetchReservation, deleteReservation } from '../../actions/reservation_actions'

const mSTP = (state, ownProps) => {
    const resId = ownProps.match.params.resId
    return {
        currentUser: Object.values(state.entities.users)[0],
        resId: resId
    }
}

const mDTP = dispatch => {
    return {
    }
}


export default connect(mSTP, mDTP)(DeleteConfirmation);