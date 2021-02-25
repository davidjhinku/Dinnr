import React from 'react'
import { numberToTime, timeSlotLi } from '../../util/util_functions'

class ReservationTimeslots extends React.Component {

    componentDidMount() {
        debugger
        this.props.checkTimeslots(this.props.searchParams)
    }
    
    // componentWillUnmount(){
    //     //function to clear reservation slots
    // }

    render() {
        // const time = new Date().getHours() + 1
        const time = this.props.searchParams.time
        const timeslotHash = this.props.timeslots
        debugger
        return(
            <div className='search-reservation'>
                <ul className='search-reservation'>
                    {/* {this.timeSlots(time)} */}
                    {timeSlotLi(time, this.props.restId)}
                </ul>
            </div>
            // <div>
                // pass in the hash now to get the timeslots back
            // </div>
        )
    }
}

export default ReservationTimeslots;