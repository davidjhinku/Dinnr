import React from 'react'
import { numberToTime, timeSlots } from '../../util/util_functions'

class SearchReservation extends React.Component {

    // timeSlots(time) {
    //     let optionsList = []

    //     for (let i = time; optionsList.length < 5; i++) {
    //         // optionsList.push(<li key={i} value={i}>{this.numberToTime(i)}</li>)
    //         options.push(<option key={i} value={i}>{numberToTime(i)}</option>)
    //     }

    //     return optionsList
    // }

    // numberToTime(num) {
    //     let dayTime = 'AM'
    //     if (num >= 12) dayTime = 'PM'

    //     let hour = Math.floor(num % 12) + ''
    //     if (hour === '0') hour = '12'

    //     let minute = num - Math.floor(num)
    //     minute === 0.5 ? minute = '30' : minute = '00'

    //     return `${hour}:${minute} ${dayTime}`
    // }


    render() {
        const time = new Date().getHours() + 1

        return(
            <div className='search-reservation'>
                <ul className='search-reservation'>
                    {/* {this.timeSlots(time)} */}
                    {timeSlots(time)}
                </ul>
            </div>
        )
    }
}

export default SearchReservation;