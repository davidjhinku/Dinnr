import React from 'react'
import { formsDateFormat, timeSlotOption, timeslotHashToLi } from '../../util/util_functions'

class MakeReservation extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //     party_size: 2,
        //     date: formsDateFormat(),
        //     time: new Date().getHours() + 1
        // }
        this.state = this.props.searchParams
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        debugger

        let timeslotParams = Object.assign({}, this.state, { restId: this.props.restId })

        this.props.checkTimeslots(timeslotParams)
    }

    handleChange(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        }
    }

    render(){
        debugger
        let currState = this.state
        const timeslots = this.props.timeslots
        let timeslotHash = timeslots[this.props.restId] ? timeslots[this.props.restId] : timeslots["loading"]

        return(
            <div className='show-reservation'>
                <h1>Make a reservation</h1>
                <hr/>
                <form className='show-reservation-form' onSubmit={this.handleSubmit}>
                    <div className='form-top'>
                        <p>Party Size</p>
                        <select onChange={this.handleChange('party_size')}
                            defaultValue={currState.party_size}>
                            <option value="2">2 people</option>
                            <option value="3">3 people</option>
                            <option value="4">4 people</option>
                            <option value="5">5 people</option>
                        </select>
                    </div>
                    <div className='form-bottom'>
                        <div className='bottom-input'>
                            <p>Date</p>
                            <input type="date"
                                value={currState.date}
                                onChange={this.handleChange('date')}
                            />
                        </div>
                        <div className='bottom-input'>
                            <p>Time</p>
                            <select defaultValue={currState.time}
                                onChange={this.handleChange('time')}
                            >
                                {timeSlotOption(currState)}
                            </select>
                        </div>
                    </div>
                    <button>Find a table</button>
                </form>
                <div className='timeslots'>
                    <h1>Select a Time</h1>
                    <ul className='search-reservation'>
                        {timeslotHashToLi(timeslotHash, this.props.restId)}
                    </ul>
                </div>
    
            </div>
        )
    }
}

export default MakeReservation;