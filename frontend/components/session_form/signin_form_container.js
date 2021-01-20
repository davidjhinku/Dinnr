import React from 'react'
import SignIn from './signin_form'
import { connect } from 'react-redux'
import {signin} from '../../actions/session_actions'
import {openModal, closeModal} from '../../actions/modal_actions'
import { Link } from 'react-router-dom'

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'signin',
        // linkPatch: <Link to='/signup'>Signup Instead</Link>
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signin(user)),
        otherForm: (
            // <button onClick={() => dispatch(openModal('signup'))}>
            //     Create an account
            // </button>
            // <Link onClick={() => dispatch(openModal('signup'))}>Create an account</Link>
            <a onClick={() => dispatch(openModal('signup'))}>Create an account</a>
        ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(SignIn);