import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { dayOfWeek, readableDate, numberToTime } from '../../util/util_functions'

class DeleteReservation extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        debugger
        this.props.fetchReservation(this.props.resId)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.deleteReservation(this.props.resId)
            .then(this.props.history.push(`/delete/reservation/${this.props.resId}/canceled`))
    }

    render() {
        debugger
        let currUser = this.props.currentUser
        let reservation = this.props.reservation
        let restaurant = this.props.restaurant
        let date = new Date(reservation.date)

        debugger
        if (reservation.user_id !== currUser.id) {
            return (
                <div>Loading</div>
            )
        } else {
            return(
                <div className='delete-page'>
                    <div className='header'>Cancel Your Reservation</div>
                    <div className='center'>
                        <div className='element'>
                            <div className='details'>
                                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="test image" />
                                {/* <img src={restaurant.photoUrl} alt="first image"/> */}
                                <div>
                                    <h4>GUESTS</h4>
                                    <h3>{reservation.party_size} people</h3>
                                </div>
                                <div>
                                    <h4>DATE</h4>
                                    <h3>{dayOfWeek(date)}, {readableDate(date)}</h3>
                                </div>
                                <div>
                                    <h4>TIME</h4>
                                    <h3>{numberToTime(reservation.time)}</h3>
                                </div>
                                <div>
                                    <h4>RESTAURANT</h4>
                                    <h3><Link to={`/restaurants/${restaurant.id}`} target="_blank">{restaurant.name}</Link></h3>
                                </div>
                            </div>
                            <hr/>
                            {/* <div className="button"> */}
                                <button onClick={this.handleClick}>Cancel Reservation</button>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default DeleteReservation;
// export default withRouter(DeleteReservation);