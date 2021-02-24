import React from 'react'
import { numberToTime, timeSlotLi } from '../../util/util_functions'

class ReservationTimeslots extends React.Component {

    // componentDidMount() {
    //     debugger
    //     this.props.checkTimeslots(this.props.searchParams)
    // }
    
    // componentWillUnmount(){
    //     //function to clear reservation slots
    // }

    render() {
        const time = new Date().getHours() + 1
        debugger
        return(
            <div className='search-reservation'>
                <ul className='search-reservation'>
                    {/* {this.timeSlots(time)} */}
                    {timeSlotLi(time, this.props.restId)}
                </ul>
            </div>
        )
    }
}

export default ReservationTimeslots;