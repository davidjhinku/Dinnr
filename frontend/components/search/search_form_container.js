import React from 'react'
import SearchForm from './search_form'
import { connect } from 'react-redux'
import {fetchRestaurants} from '../../actions/restaurant_actions'


const mSTP = (state, ownProps) => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        fetchRestaurants: search => dispatch(fetchRestaurants(search))
    }
}

export default connect(mSTP, mDTP)(SearchForm);