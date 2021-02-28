import React from 'react'
import SearchFormContainer from '../search_form/search_form_container'

const DeleteConfirmation = (props) => {

    return(
        <div className="delete-res-confirmation">
            <h2>{this.props.currentUser.first_name}, your reservation has been canceled</h2>
            
        </div>
    )
}

export default DeleteConfirmation;