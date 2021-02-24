import React from 'react'

class ReservationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.reservation
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.action(this.state)
    }

    handleChange(type){
        return e => {
            this.setState({[type]: e.target.value})
        }
    }

    render() {
        let currUser = this.props.currentUser
        debugger
        return(
            <div className='reservation-page'>
                <div className='reservation-left'>
                    <h3>You're almost done!</h3>
                    <div className='header info'>
                        Restaurant Information
                    </div>
                    <h4>Diner details</h4>
                    <h4>{currUser.first_name} {currUser.last_name}</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="tel"
                                placeholder="123-456-7891"
                                value={this.state.phone}
                                onChange={this.handleChange('phone')}
                                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                                required
                            />
                            <input type="email"
                                placeholder='Email'
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                required
                            />
                        </div>
                        <div>
                            <select value={this.state.occasion}>
                                <option value="" disabled hidden>Select an occasion (optional)</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Date Night">Date Night</option>
                                <option value="Business Meal">Business Meal</option>
                                <option value="Celebration">Celebration</option>
                            </select>
                            <textarea value={this.state.special_request}
                                placeholder="Add a special request (optional)"
                                onChange={this.handleChange('special_request')}>    
                            </textarea>
                            occasion - request
                        </div>
                        <button className="submit-reservation">{this.props.formType}</button>

                    </form>
                    <p>
                        By clicking “Complete reservation” you agree to the OpenTable Terms of Use and Privacy Policy. Standard text message rates may apply. You may opt out of receiving text messages at any time.
                    </p>
                </div>

                <article className='reservation-right'>
                    <h3>What to know before you go</h3>
                    <h4>Important dining information</h4>
                    <p>
                        We have a 15 minute grace period. Please call us if you are running later than 15 minutes after your reservation time.
                        <br/>
                        Your table will be reserved for 1 hour 30 minutes for parties of up to 2; and 2 hours for parties of 3+.
                    </p>
                    <h4>A note from the restaurant</h4>
                    <p>
                        Reservation policies are to ensure proper sanitation between parties. Thank you for your understanding and support while we adapt to the changing times.
                    </p>
                </article>
            </div>
        )
    }
}

export default ReservationPage;