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
            review: '',
            recommended: 1,
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
        // debugger
        // if (document.getElementById(`${type}-reaction`)) {
        //     document.getElementById(`${type}-reaction`).textContent = 'something'
        // }

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
                    {/* <header></header> */}
                    <input type="radio"
                        name={type}
                        id={`${type}-stars5`}
                        value="5"
                        onClick={this.handleChange(type)}
                        className='stars5' />
                        <label htmlFor={`${type}-stars5`} className="fas fa-star"></label>  
                        {/* onClick={this.handleChange(type)}/><label htmlFor='stars5'></label>   */}
                    <input type="radio"
                        name={type}
                        id={`${type}-stars4`}
                        value="4"
                        onClick={this.handleChange(type)}
                        className='stars4' />
                        <label htmlFor={`${type}-stars4`} className="fas fa-star"></label>
                    <input type="radio"
                        name={type}
                        id={`${type}-stars3`}
                        value="3"
                        onClick={this.handleChange(type)}
                        className='stars3' />
                        <label htmlFor={`${type}-stars3`} className="fas fa-star"></label>
                    <input type="radio"
                        name={type}
                        id={`${type}-stars2`}
                        value="2"
                        onClick={this.handleChange(type)}
                        className='stars2' />
                        <label htmlFor={`${type}-stars2`} className="fas fa-star"></label>
                    <input type="radio"
                        name={type}
                        id={`${type}-stars1`}
                        value="1"
                        onClick={this.handleChange(type)}
                        className='stars1' />
                        <label htmlFor={`${type}-stars1`} className="fas fa-star"></label>
                    <header></header>
                </div>
                <header className='reaction'></header>
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
                <div className='noise-options'>
                    <input type="radio"
                        name='noise'
                        id="bars4"
                        value="4"
                        onClick={this.handleChange('noise')}/>
                        <label htmlFor='bars4' ></label>
                    <input type="radio"
                        name='noise'
                        id="bars3"
                        value="3"
                        onClick={this.handleChange('noise')}/>
                        <label htmlFor='bars3' ></label>
                    <input type="radio"
                        name='noise'
                        id="bars2"
                        value="2"
                        onClick={this.handleChange('noise')}/>
                        <label htmlFor='bars2' ></label>
                    <input type="radio"
                        name='noise'
                        id="bars1"
                        value="1"
                        onClick={this.handleChange('noise')}/>
                    <label htmlFor='bars1' className='bars1'>
                        <svg width="40" height="10">
                            <rect width="40" height="10" />
                        </svg>
                    </label>
                </div>
                <div className='description'>
                    <rect width="50px" height='20px'></rect>
                </div>
            </div>
        )
    }

    clickRecommend(type) {
        if (type === 'no') {
            let y = document.getElementById('recommend-yes');
            let n = document.getElementById('recommend-no');

            y.classList.remove('active')
            // y.classList.add('far fa-circle')
            // n.classList.remove('far fa-circle')
            n.classList.add('active')
            this.setState({recommended: 0})
        } else {
            let y = document.getElementById('recommend-yes');
            let n = document.getElementById('recommend-no');

            // y.classList.remove('far fa-circle')
            y.classList.add('active')
            n.classList.remove('active')
            // n.classList.add('far fa-circle')
            this.setState({ recommended: 1 })
        }
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
                                <div className='buttons'>
                                    <button className='next'>Next</button>
                                </div>
                            </div>

                            <div className='page'>
                                <div className='header'>
                                    <h1>Write a review</h1>
                                    <p>Help diners decide where to eat. Remember to keep it short, simple and specific.</p>
                                </div>

                                <div className='written-review'>
                                    <textarea value={this.state.review}
                                        placeholder="Your review must be at least 50 characters"
                                        onChange={this.handleChange('review')}
                                        minLength="50"
                                    ></textarea>
                                    <div className='characters'>
                                        Minimum 50 characters
                                            <div className='count'>
                                                <span className={this.state.review.length < 50 ? "short" : "long"}>{`${this.state.review.length} `}</span> / 2000 characters
                                            </div>
                                    </div>
                                </div>
                                <div className='recommend'>
                                    <p>Would you recommend STK - NYC - Meatpacking to a friend?</p>
                                    <div className='options'>
                                        <div className='yes' onClick={() => this.clickRecommend('yes')}>
                                            <i id='recommend-yes'
                                                className="far fa-circle active"  
                                            ></i>
                                            Yes
                                        </div>
                                        <div className='no' onClick={() => this.clickRecommend('no')}>
                                            <i id='recommend-no'
                                                className="far fa-circle"
                                            ></i>
                                            No
                                        </div>
                                    </div>
                                </div>
                                <div className='buttons'>
                                    <button className='back'>Back</button>
                                    <button className='next'>Next</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            )
        }
    }
}

export default ReviewForm;