import React from 'react'
import SignUp from './signup_form'
import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'
import {openModal, closeModal} from '../../actions/modal_actions'
// import { Link } from 'react-router-dom'

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'signup',
        // linkPatch: <Link to='/signin'>Signin Instead</Link>
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        otherForm: (
            // <button onClick={() => dispatch(openModal('signin'))}>
            //     Sign in instead
            // </button>
            <a onClick={() => dispatch(openModal('signin'))}>Sign in instead</a>
        ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(SignUp);