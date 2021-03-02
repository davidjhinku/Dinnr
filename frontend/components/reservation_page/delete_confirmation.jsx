import React from 'react'
import SearchFormContainer from '../search_form/search_form_container'

const DeleteConfirmation = (props) => {

    return(
        <div className="delete-res-confirmation">
            <div className="content">
                <h2>{props.currentUser.first_name}, your reservation has been canceled</h2>
                <h3>Make a new reservation</h3>
                <SearchFormContainer/>
            </div>
        </div>
    )
}

export default DeleteConfirmation;