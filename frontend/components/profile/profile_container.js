import Profile from './profile'
import {connect} from 'react-redux'
import {fetchUserData} from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
    return {
        currentUser: Object.values(state.entities.users)[0],
        reservations: state.entities.reservations,
        restaurants: state.entities.restaurants
    }
}

const mDTP = dispatch => {
    return {
        fetchUserData: userId => dispatch(fetchUserData(userId))
    }
}


export default connect(mSTP, mDTP)(Profile);