import React from 'react'
import {Link} from 'react-router-dom'

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: '',
            time: '',
            people: '',
            search_filter: '',
        }
    }

    onSubmit(e) {
        // send information to search page inc state to pre-fill top container
        //Link to='/restaurantsearch' maybe?
    }

    render() {
        return (
            <div className='search-form'>
                <h1>Find your table for any occasion</h1>
                <div>This is the Search Form, search component coming</div>
            </div>
        )
    }
}

export default SearchForm;