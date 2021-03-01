import React from 'react'
import {withRouter} from 'react-router-dom'
import { formsDateFormat, timeSlotOption } from '../../util/util_functions'

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.searchState
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.fetchRestaurants(this.state)
            .then(this.props.setSearchParams(this.state))
            .then(this.props.closeModal)
            .then(this.props.history.push('/search'))
    }

    handleChange(type) {
        return e => {
            this.setState({[type]: e.target.value})
        }
    }

    render() {
        let currDate = formsDateFormat()
        let currState = this.state

        return (
            <form className='search-form' onSubmit={this.handleSubmit}>
                <div className='search-left'>
                    <input type="date"
                        value={currState.date}
                        onChange={this.handleChange('date')}
                        min={currDate}
                    />

                    <select className='search-time'
                        defaultValue={currState.time}
                        onChange={this.handleChange('time')}>
                        {/* {this.timeSlots()} */}
                        {timeSlotOption(currState)}
                    </select>

                    <select className='search-people'
                        defaultValue={currState.party_size}
                        onChange={this.handleChange('party_size')}>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                    </select>
                </div>

                <div className='search-right'>
                    <input type="text"
                        placeholder={currState.wildcard === '' ? 'Location, Restaurant, or Cuisine' : currState.wildcard}
                        value={currState.search_filter}
                        onChange={this.handleChange('wildcard')}/>
                    <button className='search-form-button'>Let's go</button>
                </div>
            </form>
        )
    }
}

export default withRouter(SearchForm);
