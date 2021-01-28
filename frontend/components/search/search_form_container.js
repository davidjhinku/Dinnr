import SearchForm from './search_form'
import { connect } from 'react-redux'
import {fetchRestaurants} from '../../actions/restaurant_actions'
import {closeModal} from '../../actions/modal_actions'


const mSTP = (state, ownProps) => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        fetchRestaurants: search => dispatch(fetchRestaurants(search)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(SearchForm);