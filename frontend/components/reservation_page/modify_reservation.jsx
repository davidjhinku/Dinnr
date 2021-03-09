import React from 'react'
import {numberToTime, formsDateFormat, timeSlotOption, newDate} from '../../util/util_functions'

class ModifyReservation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.reservation.id,
            date: this.props.reservation.date,
            time: this.props.reservation.time,
            party_size: this.props.reservation.party_size,
            user_id: this.props.reservation.user_id,
            restaurant_id: this.props.reservation.restaurant_id,
            phone: this.props.reservation.phone,
            email: this.props.reservation.email,
            occasion: this.props.reservation.occasion,
            special_request: this.props.reservation.special_request,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()

        this.props.updateReservation(this.state)
            .then((res) => {
                this.props.history.push(`/${res["reservations"].reservations.user_id}/reservation/${res["reservations"].reservations.id}`)
        })
    }

    handleChange(type) {
        return e => {
            this.setState({[type]: e.target.value})
        }
    }
    
    componentDidMount() {
        this.props.fetchReservation(this.props.resId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.reservation !== this.props.reservation) {
            this.setState({
                id: this.props.reservation.id,
                date: this.props.reservation.date,
                time: this.props.reservation.time,
                party_size: this.props.reservation.party_size,
                user_id: this.props.reservation.user_id,
                restaurant_id: this.props.reservation.restaurant_id,
                phone: this.props.reservation.phone,
                email: this.props.reservation.email,
                occasion: this.props.reservation.occasion,
                special_request: this.props.reservation.special_request,
            })
        }
    }
    
    render() {
        let reservation = this.props.reservation
        let restaurant = this.props.restaurant
        let currDate = formsDateFormat()
        let currState = this.state
        let currUser = this.props.currentUser

        if (!restaurant || reservation.restaurant_id !== restaurant.id) {
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
                        </form>

                    </div>
                </div>
            )
        }
    }
    // NOTE: Nice to have later, modify finds new table and displays below instead of errors
}

export default ModifyReservation;