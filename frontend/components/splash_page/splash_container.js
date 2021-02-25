import Spash from './splash'
import {connect} from 'react-redux'
// import {clearRestaurants} from '../../actions/restaurant_actions'

const mSTP = (state, ownProps) => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        // clearRestaurants: () => dispatch(clearRestaurants())
    }
}

export default connect(mSTP, mDTP)(Spash);