import React from 'react'

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

    render() {
        return (
            <div className='search-form'>
                <h1>Find your table for any occasion</h1>
                <div>This is the Search Form, background image/search component coming</div>
            </div>
        )
    }
}

export default SearchForm;