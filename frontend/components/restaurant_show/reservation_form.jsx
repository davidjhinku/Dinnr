import React from 'react'

class MakeReservation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            party_size: 2,
            date: this.startingDate(),
            time: new Date().getHours() + 1
        }
    }

    handleChange(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        }
    }

    startingDate() {
        const today = new Date()
        let dd = today.getDate()
        let mm = today.getMonth() + 1
        const yyyy = today.getFullYear()

        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        return `${yyyy}-${mm}-${dd}`
    }

    timeSlots() {
        let options = []

        for (let i = 0; i <= 24; i++) {
            options.push(<option key={i} value={i}>{this.props.numberToTime(i)}</option>)
        }

        return options
    }

    render(){
        let currState = this.state
        return(
            <div className='show-reservation'>
                <h1>Make a reservation</h1>
                <hr/>
                <form className='show-reservation-form'>
                    <div className='form-top'>
                        <p>Party Size</p>
                        <select onChange={this.handleChange('party_size')}>
                            <option value="2">2 people</option>
                            <option value="3">3 people</option>
                            <option value="4">4 people</option>
                            <option value="5">5 people</option>
                        </select>
                    </div>
                    <div className='form-bottom'>
                        <div className='bottom-input'>
                            <p>Date</p>
                            <input type="date" value={currState.date} onChange={this.handleChange('date')} />
                        </div>
                        <div className='bottom-input'>
                            <p>Time</p>
                            <select defaultValue={currState.time} onChange={this.handleChange('time')}>
                                {this.timeSlots()}
                            </select>
                        </div>
                    </div>
                    <button>Find a table</button>
                </form>
    
    
            </div>
        )
    }
}

export default MakeReservation;