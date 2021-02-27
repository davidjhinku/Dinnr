import React from 'react'
import { numberToTime} from '../../util/util_functions'
import { withRouter } from 'react-router-dom'

class ReservationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "date": this.props.searchParams.date,
            // "time": this.props.searchParams.time,
            "time": this.props.time,
            "party_size": this.props.searchParams.party_size,
            "user_id": this.props.currentUser.id,
            // "restaurant_id": this.props.restaurant.id,
            "restaurant_id": this.props.restId,
            "phone": "",
            "email": this.props.currentUser.email,
            "occasion": "",
            "special_request": "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        debugger
        this.props.fetchRestaurant(this.props.restId)
    }

    handleSubmit(e) {
        e.preventDefault()
        // debugger

        this.props.action(this.state)
            .then((res) => {
                debugger
                this.props.history.push(`/${res.reservations.user_id}/reservation/${res.reservations.id}`)
            })
    } 

    handleChange(type){
        return e => {
            this.setState({[type]: e.target.value})
        }
    }

    render() {
        let currUser = this.props.currentUser
        let rest = this.props.restaurant
        let date = new Date(this.state.date)
        debugger
        if (!rest) {
            return(
                <div>loading...</div>
            )
        } else {
            return(
                <div className='reservation-page'>
                    <div className='reservation-left'>
                        <h3>You're almost done!</h3>
                        <div className='header-info'>
                            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="test image" />
                            {/* <img src={rest.photoUrl}/> */}
                            <div>
                                <h2>{rest.name}</h2>
                                <div>
                                    <ul>
                                        <span>
                                            <i class="far fa-calendar"></i>
                                            <li>{date.toDateString().slice(0, 10)}</li>
                                        </span>
                                        <span>
                                            <i class="far fa-clock"></i>
                                            <li>{numberToTime(this.state.time)}</li>
                                        </span>
                                        <span>
                                            <i class="far fa-user"></i>
                                            <li>{this.state.party_size} people</li>
                                        </span>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h4>Diner details</h4>
                        <h4 className="name">{currUser.first_name} {currUser.last_name}</h4>
                        
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input type="tel"
                                    className="editable"
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
                                    disabled
                                />
                            </div>
                            <div>
                                <select value={this.state.occasion}
                                    onChange={this.handleChange('occasion')}
                                    className="editable"
                                >
                                    <option value="" disabled hidden>Select an occasion (optional)</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Date Night">Date Night</option>
                                    <option value="Business Meal">Business Meal</option>
                                    <option value="Celebration">Celebration</option>
                                </select>
                                <textarea value={this.state.special_request}
                                    className="editable"
                                    placeholder="Add a special request (optional)"
                                    onChange={this.handleChange('special_request')}>    
                                </textarea>

                            </div>
                            <div className="unused">
                                <div>
                                    <input type="checkbox"/>
                                    <label>Sign me up to receive dining offers and news from this   restaurant by email.</label>
                                </div>
                                <div>
                                    <input type="checkbox" label="points"/>
                                    <label id="points">Yes, I want to collect 100 points for this reservation.</label>
                                </div>
                            </div>
                            <div>
                                <button className="submit-reservation">{this.props.formType}</button>
                            </div>

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
                        </p>
                        <p>
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
}

export default withRouter(ReservationPage);