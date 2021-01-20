import React from 'react';
import SigninFormContainer from '../session_form/signin_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';

const Modal = (props) => {
    if (!props.modal) return null;
    
    let popupForm;
    if (props.modal === 'signin') {
        popupForm = <SigninFormContainer />
    } else if (props.modal === 'signup') {
        popupForm = <SignupFormContainer />
    }

    return (
        <div className='modal-screen-background' onClick={props.closeModal}>
            <div className='modal-box' onClick={e => e.stopPropagation()}>
                {popupForm}
            </div>
        </div>
    )
}

const mSTP = (state, ownProps) => {
    return {
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Modal);