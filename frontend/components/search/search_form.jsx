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
            <h1>This is the Search Form</h1>
        )
    }
}

export default SearchForm;