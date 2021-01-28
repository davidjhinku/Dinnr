import React from 'react'
import SignIn from './signin_form'
import { connect } from 'react-redux'
import {signin} from '../../actions/session_actions'
import {openModal, closeModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'signin',
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signin(user)),
        otherForm: (
            <a onClick={() => dispatch(openModal('signup'))}>Create an account</a>
        ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(SignIn);