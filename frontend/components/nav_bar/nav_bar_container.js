import {connect} from 'react-redux'
import {logout} from '../../actions/session_actions'
import NavBar from './nav_bar'

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(NavBar);