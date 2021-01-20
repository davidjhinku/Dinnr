import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'
import React from 'react'
import SignUp from './signup_form'
import { Link } from 'react-router-dom'

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'signup',
        linkPatch: <Link to='/signin'>Signin Instead</Link>
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signup(user))
    }
}

export default connect(mSTP, mDTP)(SignUp);