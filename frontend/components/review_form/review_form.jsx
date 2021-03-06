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
            nickname: `${this.props.currentUser.first_name.charAt(0).toUpperCase() + this.props.currentUser.first_name.slice(1)}${this.props.currentUser.last_name.charAt(0).toUpperCase()}`,
            private_message: '',
            user_id: this.props.currentUser.id,
            restaurant_id: this.props.restId,
            reservation_id: this.props.resId
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        // debugger
        this.props.fetchReservation(this.props.resId)
    }
    
    handleSubmit(e) {
        debugger
        e.preventDefault()
        debugger

        this.props.createReview(this.state)
            // .then((res) => {
            //     this.props.history.push('/profile')
            // })
        .then(this.props.history.push('/profile'))
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
                </div>
                <div className='noise-options'>
                    <input type="radio"
                        name='noise'
                        id="bars4"
                        value="4"
                        onClick={this.handleChange('noise')}/>
                    <label htmlFor='bars4' className="fas fa-square-full bars4"></label>      
                    <input type="radio"
                        name='noise'
                        id="bars3"
                        value="3"
                        onClick={this.handleChange('noise')}/>
                    <label htmlFor='bars3' className="fas fa-square-full bars3"></label>
                    <input type="radio"
                        name='noise'
                        id="bars2"
                        value="2"
                        onClick={this.handleChange('noise')}/>
                    <label htmlFor='bars2' className="fas fa-square-full bars2"></label>
                    <input type="radio"
                        name='noise'
                        id="bars1"
                        value="1"
                        onClick={this.handleChange('noise')}/>
                    <label htmlFor='bars1' className="fas fa-square-full bars1"></label>
                    {/* <label htmlFor='bars1' className='bars1'>
                        <div className='bar1'></div>
                    </label> */}
                    {/* <div className='bar1'><label htmlFor='bars1'></label></div> */}
                    
                </div>
            </div>
        )
    }

    clickRecommend(type) {
        if (type === 'no') {
            let y = document.getElementById('recommend-yes');
            let n = document.getElementById('recommend-no');

            y.classList.remove('active')
            n.classList.add('active')
            this.setState({recommended: 0})
        } else {
            let y = document.getElementById('recommend-yes');
            let n = document.getElementById('recommend-no');

            y.classList.add('active')
            n.classList.remove('active')
            this.setState({ recommended: 1 })
        }
    }

    toggleActive(type) {
        if (type === 'yes') {
            let y = document.getElementById('review-yes');
            let n = document.getElementById('review-no');
            let message = document.getElementById('private-review');
            
            y.classList.add('active')
            n.classList.remove('active')
            message.style.display = 'block'
        } else {
            let y = document.getElementById('review-yes');
            let n = document.getElementById('review-no');
            let message = document.getElementById('private-review');

            y.classList.remove('active')
            n.classList.add('active')
            message.style.display = 'none'
        }
    }

    scroll(distance, step) {
        event.preventDefault()
        document.getElementById('form-container').scrollLeft += distance
        if (step === 1) {
            document.getElementById('bullet2').classList.remove('current')
            document.getElementById('bullet1').classList.add('current')
        } else if (step === 2) {
            document.getElementById('bullet1').classList.remove('current')
            document.getElementById('bullet3').classList.remove('current')
            document.getElementById('bullet2').classList.add('current')
        } else if (step === 3) {
            document.getElementById('bullet2').classList.remove('current')
            document.getElementById('bullet3').classList.add('current')
        }
    }

    render() {
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
                    <div className='progress'>
                        <div className='step'>
                            <i id='bullet1' className="fas fa-circle current"></i>
                        </div>
                        <div className='step'>
                            <i id='bullet2' className="fas fa-circle"></i>
                        </div>
                        <div className='step'>
                            <i id='bullet3' className="fas fa-circle"></i>
                        </div>
                    </div>
                    <div id='form-container' className='form-container'>
                        <form id='review-form'>
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
                                    <button className='next' onClick={() => this.scroll(695, 2)}>Next</button>
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
                                    <p>Would you recommend {restaurant.name} to a friend?</p>
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
                                    <button className='back' onClick={() => this.scroll(-695, 1)}>Back</button>
                                    <button className='next' onClick={() => this.scroll(695, 3)}>Next</button>
                                </div>
                            </div>

                            <div className='page'>
                                <div className='header'>
                                    <h1>What is your reviews nickname?</h1>
                                    <p>Your nickname will be published on OpenTable alongside any reviews you create and publish.</p>
                                    <p>For privacy reasons, don’t use your full name or email address.</p>
                                </div>
                                <div className='review-name'>
                                    <div className='nickname'>
                                        <span>Nickname</span>
                                        <input type="text"
                                            value={this.state.nickname}
                                            onChange={this.handleChange('nickname')}
                                            maxLength='24'    
                                        />
                                    </div>
                                    <div className='characters'>
                                        <div className='count'>
                                            <span className={this.state.nickname.length < 4 ? "short" : "long"}>{`${this.state.nickname.length} `}</span> / 24 characters
                                        </div>
                                    </div>
                                </div>
                                <div className='recommend private'>
                                    <p>Do you want to send a private note to {restaurant.name}?</p>
                                    <div className='options'>
                                        <div className='yes' onClick={() => this.toggleActive('yes')}>
                                            <i id='review-yes'
                                                className="far fa-circle"
                                            ></i>
                                            Yes
                                        </div>
                                        <div className='no' onClick={() => this.toggleActive('no')}>
                                            <i id='review-no'
                                                className="far fa-circle active"
                                            ></i>
                                            No
                                        </div>
                                    </div>
                                </div>
                                <div id='private-review' className='written-review'>
                                    <textarea value={this.state.private_message}
                                        placeholder="e.g. 'Our server David was very attentive and helpful all night. Please send him our thanks.'"
                                        onChange={this.handleChange('private_message')}
                                        minLength="50"
                                    ></textarea>
                                    <div className='characters'>
                                        Minimum 50 characters
                                        <div className='count'>
                                            <span className={this.state.private_message.length < 50 ? "short" : "long"}>{`${this.state.private_message.length} `}</span> / 2000 characters
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='buttons'>
                                    <button className='back' onClick={() => this.scroll(-695, 2)}>Back</button>
                                    {/* <button className='next' onClick={() => this.handleSubmit}>Submit your review</button> */}
                                    <button className='next' onClick={this.handleSubmit}>Submit your review</button>
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