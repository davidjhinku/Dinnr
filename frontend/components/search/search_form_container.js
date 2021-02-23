import SearchForm from './search_form'
import { connect } from 'react-redux'
import {fetchRestaurants} from '../../actions/restaurant_actions'
import {setSearchParams} from '../../actions/search_actions'
import {closeModal} from '../../actions/modal_actions'


const mSTP = (state, ownProps) => {
    debugger
    return {
        searchState: state.entities.search_params
    }
}

const mDTP = dispatch => {
    return {
        fetchRestaurants: search => dispatch(fetchRestaurants(search)),
        setSearchParams: search => dispatch(setSearchParams(search)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(SearchForm);