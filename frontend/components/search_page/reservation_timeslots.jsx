import React from 'react'
import { numberToTime, timeSlotLi, timeslotHashToLi } from '../../util/util_functions'

class ReservationTimeslots extends React.Component {

    componentDidMount() {
        debugger
        let timeslotParams = Object.assign({}, this.props.searchParams, { restId: this.props.restId })
        this.props.checkTimeslots(timeslotParams)
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
            // <div className='search-reservation'>
            //     <ul className='search-reservation'>
            //         {/* {this.timeSlots(time)} */}
            //         {timeSlotLi(time, this.props.restId)}
            //     </ul>
            // </div>
            <div className='search-reservation'>
                <ul className='search-reservation'>
                    {timeslotHashToLi(timeslotHash, 5, this.props.restId)}
                </ul>
            </div>
        )
    }
}

export default ReservationTimeslots;