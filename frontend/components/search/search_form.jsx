import React from 'react'
import {Link} from 'react-router-dom'

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date().toLocaleDateString(),
            time: new Date().getHours() + 1,
            people: 2,
            search_filter: '',
        }
    }

    handleSubmit(e) {
        // send information to search page inc state to pre-fill top container
        //Link to='/restaurantsearch' maybe?
    }

    handleChange(type) {
        return e => {
            this.setState({[type]: e.target.value})
        }
    }
    
    numberToTime(num){
        let dayTime = 'AM'
        if (num >= 12) dayTime = 'PM'

        let hour = Math.floor(num % 12) + ''
        if (hour === '0') hour = '12'

        let minute = num - Math.floor(num)
        minute === 0.5 ? minute = '30' : minute = '00'
        
        return `${hour}:${minute} ${dayTime}`
    }

    render() {
        return (
            <div className='search-form'>
                <form className='search-fiters'>
                    <div className='search-div'>
                        <input type="date" value={this.state.date} onChange={this.handleChange('date')}/>
                        <select onChange={this.handleChange('time')}>
                            <option value={this.state.time+0.5}>{this.numberToTime(this.state.time+0.5)}</option>
                            <option value={this.state.time+1.0}>{this.numberToTime(this.state.time+1.0)}</option>
                            <option value={this.state.time+1.5}>{this.numberToTime(this.state.time+1.5)}</option>
                            <option value={this.state.time+2.0}>{this.numberToTime(this.state.time+2.0)}</option>
                            <option value={this.state.time+2.5}>{this.numberToTime(this.state.time+2.5)}</option>
                            <option value={this.state.time+3.0}>{this.numberToTime(this.state.time+3.0)}</option>
                        </select>
                        <select onChange={this.handleChange('people')}>
                            <option value="2">2 people</option>
                            <option value="3">3 people</option>
                            <option value="4">4 people</option>
                            <option value="5">5 people</option>
                        </select>
                    </div>

                    <input type="text" placeholder='Location, Restaurant, or Cuisine' value={this.state.search_filter} onChange={this.handleChange('search_filter')}/>
                    <button className='search-form-button'>Let's go</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;