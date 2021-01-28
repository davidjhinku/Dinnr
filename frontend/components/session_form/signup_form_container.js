import React from 'react'
import SignUp from './signup_form'
import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'
import {openModal, closeModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'signup',
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        otherForm: (
            <a onClick={() => dispatch(openModal('signin'))}>Sign in instead</a>
        ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(SignUp);