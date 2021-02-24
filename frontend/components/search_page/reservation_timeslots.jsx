import React from 'react'
import { numberToTime, timeSlotLi } from '../../util/util_functions'

class ReservationTimeslots extends React.Component {

    componentDidMount() {
        this.props.checkTimeslots(this.props.searchParams)
    }
    
    componentDidUnmount(){
        //function to clear reservation slots
    }

    render() {
        const time = new Date().getHours() + 1
        debugger
        return(
            <div className='search-reservation'>
                <ul className='search-reservation'>
                    {/* {this.timeSlots(time)} */}
                    {timeSlotLi(time)}
                </ul>
            </div>
        )
    }
}

export default ReservationTimeslots;