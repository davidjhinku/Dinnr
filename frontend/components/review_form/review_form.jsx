import React from 'react'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: this.props.currentUser.id,
            restaurant_id: this.props.restId,
            reservation_id: this.props.resId
        }
    }

    componentDidMount() {
        debugger
        this.props.fetchReservation(this.props.resId)
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.createReview(this.state)
    }

    handleChange(type) {
        return e => {
            this.setState({[type]: e.target.value})
        }
    }

    render() {
        debugger
        let currentUser = this.props.currentUser
        let restaurant = this.props.restaurant
        let reservation = this.props.reservation

        debugger

        // if (this.props.resId !== restaurant.id || this.props.restId !== reservation.it) {
        if (reservation["default"] || this.props.resId !== restaurant.id || this.props.restId !== reservation.it) {
            return(
                <div>Loading...</div>
            )
        } else {
            return(
                <div>
                    Review Form
                </div>
            )
        }
    }
}

export default ReviewForm;