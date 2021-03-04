import React from 'react'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            overall: null,
            food: null,
            service: null,
            ambiance: null,
            value: null,
            noise: null,
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
        debugger
        return e => {
            this.setState({[type]: e.target.value})
        }
    }

    radioStars(type) {
        return(
            <div className='row'>
                <div className='type'>
                    {type}
                    {/* <label htmlFor={type}>{type}</label> */}
                </div>
                <div className='options'>
                    <input type="radio"
                        name={type}
                        id="stars5"
                        value="5"
                        // checked={this.state.type === type}
                        onClick={this.handleChange(type)}/><label htmlFor='stars5'></label>
                    <input type="radio"
                        name={type} id="stars4"
                        value="4"
                        // checked={this.state.type === type}
                        onClick={this.handleChange(type)}/><label htmlFor='stars4'></label>
                    <input type="radio"
                        name={type}
                        id="stars3"
                        value="3"
                        // checked={this.state.type === type}
                        onClick={this.handleChange(type)}/><label htmlFor='stars3'></label>
                    <input type="radio"
                        name={type}
                        id="stars2"
                        value="2"
                        // checked={this.state.type === type}
                        onClick={this.handleChange(type)}/><label htmlFor='stars2'></label>
                    <input type="radio"
                        name={type}
                        id="stars1"
                        value="1"
                        // checked={this.state.type === type}
                        onClick={this.handleChange(type)}/><label htmlFor='stars1'></label>
                </div>
                <div className='reaction'>
                    <span></span>
                </div>
            </div>
        )
    }

    radioBars() {
        return (
            <div className='row'>
                <div className='type'>
                    Noise level
                    {/* <label htmlFor='noise'>Noise level</label> */}
                </div>
                <div className='options'>
                    <input type="radio" name='noise' id="bars4" value="4" />
                    <input type="radio" name='noise' id="bars3" value="3" />
                    <input type="radio" name='noise' id="bars2" value="2" />
                    <input type="radio" name='noise' id="bars1" value="1" />
                </div>
                <div className='description'>

                </div>
            </div>
        )
    }

    render() {
        debugger
        let currentUser = this.props.currentUser
        let restaurant = this.props.restaurant
        let reservation = this.props.reservation

        debugger

        // if (this.props.resId !== restaurant.id || this.props.restId !== reservation.id) {
        if (reservation["default"] || this.props.resId != reservation.id || this.props.restId != restaurant.id) {
            return(
                <div>Loading...</div>
            )
        } else {
            return(
                <div className='review-page'>
                    <div className='form-container'>
                        <form action="">
                            <div className='page'>
                                <div className='header'>
                                    <h1><span className='capitalize'>{currentUser.first_name}</span>, how was your experience at {restaurant.name}</h1>
                                    <p>Rate your dining experience (required)</p>
                                    <p>Reservation made on {reservation.date}</p>
                                </div>

                                <div className='radio-ratings'>
                                    {this.radioStars('overall')}
                                    {this.radioStars('food')}
                                    {this.radioStars('service')}
                                    {this.radioStars('ambiance')}
                                    {this.radioStars('value')}
                                    {this.radioBars()}

                                </div>
                                <button>Next</button>
                            </div>
                        </form>

                    </div>
                </div>
            )
        }
    }
}

export default ReviewForm;