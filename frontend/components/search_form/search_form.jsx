import React from 'react'
import {withRouter} from 'react-router-dom'
import { timeSlotOption } from '../../util/util_functions'

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     date: this.startingDate(),
        //     time: new Date().getHours() + 1,
        //     party_size: 2,
        //     wildcard: '',
        // }
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
    
    // startingDate(){
    //     const today = new Date()
    //     let dd = today.getDate()
    //     let mm = today.getMonth() + 1
    //     const yyyy = today.getFullYear()

    //     if (dd < 10) {
    //         dd = '0' + dd
    //     }
    //     if (mm < 10) {
    //         mm = '0' + mm
    //     }
    //     return `${yyyy}-${mm}-${dd}`
    // }

    // numberToTime(num){
    //     let dayTime = 'AM'
    //     if (num >= 12) dayTime = 'PM'

    //     let hour = Math.floor(num % 12) + ''
    //     if (hour === '0') hour = '12'

    //     let minute = num - Math.floor(num)
    //     minute === 0.5 ? minute = '30' : minute = '00'
        
    //     return `${hour}:${minute} ${dayTime}`
    // }

    // timeSlots() {
    //     let options = []

    //     for (let i = 0; i <=24; i ++) {
    //         options.push(<option key={i} value={i}>{this.numberToTime(i)}</option>)
    //     }

    //     return options
    // }


    render() {
        let currState = this.state
        return (
            <form className='search-form' onSubmit={this.handleSubmit}>
                <div className='search-left'>
                    <input type="date"
                        value={currState.date}
                        onChange={this.handleChange('date')}/>

                    <select className='search-time'
                        defaultValue={currState.time}
                        onChange={this.handleChange('time')}>
                        {/* {this.timeSlots()} */}
                        {timeSlotOption()}
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
