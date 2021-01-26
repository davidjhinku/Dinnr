import React from 'react'
import {Link} from 'react-router-dom'

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: null,
            time: null,
            people: 2,
            search_filter: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        debugger
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
        const currentDate = new Date().toLocaleDateString();
        const currentTime = new Date().getHours() + 1;
        
        return (
            <form className='search-form' onSubmit={this.handleSubmit}>
                <div className='search-div'>
                    <input type="date" defaultValue={currentDate} onChange={this.handleChange('date')}/>
                    <select onChange={this.handleChange('time')}>
                        <option value={currentTime+0.5}>{this.numberToTime(currentTime+0.5)}</option>
                        <option value={currentTime+1.0}>{this.numberToTime(currentTime+1.0)}</option>
                        <option value={currentTime+1.5}>{this.numberToTime(currentTime+1.5)}</option>
                        <option value={currentTime+2.0}>{this.numberToTime(currentTime+2.0)}</option>
                        <option value={currentTime+2.5}>{this.numberToTime(currentTime+2.5)}</option>
                        <option value={currentTime+3.0}>{this.numberToTime(currentTime+3.0)}</option>
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
        )
    }
}

export default SearchForm;