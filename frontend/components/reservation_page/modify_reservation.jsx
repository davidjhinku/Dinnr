import React from 'react'
import {numberToTime, formsDateFormat, timeSlotOption, newDate} from '../../util/util_functions'

class ModifyReservation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: this.props.reservation.date,
            time: this.props.reservation.time,
            party_size: this.props.reservation.party_size,
        }
        // this.state = this.props.reservation
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        debugger

        // this.props.fetchRestaurants(this.state)
        //     .then(this.props.setSearchParams(this.state))
        //     .then(this.props.closeModal)
        //     .then(this.props.history.push('/search'))
    }

    handleChange(type) {
        return e => {
            this.setState({[type]: e.target.value})
        }
    }
    
    componentDidMount() {
        debugger
        this.props.fetchReservation(this.props.resId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.reservation !== this.props.reservation) {
            this.setState({
                date: this.props.reservation.date,
                time: this.props.reservation.time,
                party_size: this.props.reservation.party_size,
            })
        }
    }
    
    render() {
        let reservation = this.props.reservation
        let restaurant = this.props.restaurant
        let currDate = formsDateFormat()
        let currState = this.state
        debugger

        if (!restaurant) {
            return (
                <div>loading...</div>
            )
        } else {
            let date = newDate(reservation.date, reservation.time)
            return(
                <div className='modify-page'>
                    <div className='container'>
                        <div className='details'>
                                <h4>Your current reservation</h4>
                                <div className='header-info'>
                                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="test image" />
                                    {/* <img src={rest.photoUrl}/> */}
                                    <div>
                                        <h2>{restaurant.name}</h2>
                                        <div>
                                            <ul>
                                                <span>
                                                    <i className="far fa-calendar"></i>
                                                    <li>{date.toDateString().slice(0, 10)}</li>
                                                </span>
                                                <span>
                                                    <i className="far fa-clock"></i>
                                                    <li>{numberToTime(reservation.time)}</li>
                                                </span>
                                                <span>
                                                    <i className="far fa-user"></i>
                                                    <li>{reservation.party_size} people</li>
                                                </span>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <hr/>
                        <h4>Modify your reservation</h4>
                        <form className='update-form' onSubmit={this.handleSubmit}>
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
                            <button className='search-form-button'>Let's go</button>
                            {/* <div className='search-right'>
                                <input type="text"
                                    placeholder={currState.wildcard === '' ? 'Location, Restaurant, or Cuisine' : currState.wildcard}
                                    value={currState.search_filter}
                                    onChange={this.handleChange('wildcard')} />
                                <button className='search-form-button'>Let's go</button>
                            </div> */}
                        </form>

                    </div>
                </div>
            )
        }
    }
    // NOTE: Nice to have later, modify finds new table and displays below instead of errors
}

export default ModifyReservation;