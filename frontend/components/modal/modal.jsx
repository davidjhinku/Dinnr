import React from 'react';
import SigninFormContainer from '../session_form/signin_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import SearchContainer from '../search/search_form_container'
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';

const Modal = (props) => {
    if (!props.modal) return null;

    let popupForm;
    let modalStyling;
    let modalHeader
    if (props.modal === 'signin') {
        popupForm = <SigninFormContainer />
        modalStyling = 'modal-box'
    } else if (props.modal === 'signup') {
        popupForm = <SignupFormContainer />
        modalStyling = 'modal-box'
    } else if (props.modal === 'search') {
        popupForm = <SearchContainer />
        modalHeader = <h1>Find your table for any occasion</h1>
        modalStyling = 'search-modal-box'
    }

    return (
        <div className='modal-screen-background' onClick={props.closeModal}>
            <div className={modalStyling} onClick={e => e.stopPropagation()}>
                {modalHeader}
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