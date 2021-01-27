import React from 'react'

class FilterForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.fetchRestaurants(this.state)
    }

    render() {

        return(
            <form onSubmit={this.handleSubmit}>
                
                <button className='filter-submit'>Search</button>
            </form>
        )
    }
}

export default FilterForm;