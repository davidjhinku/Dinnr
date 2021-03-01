import React from 'react'
import { numberToTime, timeSlotLi, timeslotHashToLi } from '../../util/util_functions'

class ReservationTimeslots extends React.Component {

    componentDidMount() {
        let timeslotParams = Object.assign({}, this.props.searchParams, { restId: this.props.restId })
        this.props.checkTimeslots(timeslotParams)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchParams !== this.props.searchParams) {
            let timeslotParams = Object.assign({}, this.props.searchParams, { restId: this.props.restId })
            this.props.checkTimeslots(timeslotParams)
        }
    }

    // componentWillUnmount(){
    //     //function to clear reservation slots
    // }

    render() {
        // debugger
        const timeslots = this.props.timeslots
        let timeslotHash = timeslots[this.props.restId] ? timeslots[this.props.restId] : timeslots["loading"]

        return(
            <div className='search-reservation'>
                <ul className='search-reservation'>
                    {timeslotHashToLi(timeslotHash, this.props.restId)}
                </ul>
            </div>
        )
    }
}

export default ReservationTimeslots;