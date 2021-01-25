import React from 'react'
import SearchPage from './search_page'
import { connect } from 'react-redux'
import { } from '../../actions/search_actions'

const mSTP = (state, ownProps) => {
    return {
        restaurants: state.entities.restaurants
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(SearchPage);