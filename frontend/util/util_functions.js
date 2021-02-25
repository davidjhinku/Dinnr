import React from 'react'
import { Link } from 'react-router-dom'

export const numberToTime = (num) => {
    let dayTime = 'AM'
    if (num >= 12) dayTime = 'PM'

    let hour = Math.floor(num % 12) + ''
    if (hour === '0') hour = '12'

    let minute = num - Math.floor(num)
    minute === 0.5 ? minute = '30' : minute = '00'

    return `${hour}:${minute} ${dayTime}`
}

export const formsDateFormat = () => {
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

export const timeSlotOption = (time = 0) => {
    let options = []

    for (let i = time; i <= 24; i++) {
        // options.push(<option key={i} value={i}>{this.props.numberToTime(i)}</option>)
        options.push(<option key={i} value={i}>{numberToTime(i)}</option>)
    }

    return options
}

export const timeSlotLi = (time = 0, restId) => {
    let options = []
    
    for (let i = time; options.length < 5; i++) {

        options.push(
            <li key={i} value={i}>
                {/* {numberToTime(i)} */}
                <Link to={`/reservation/${restId}`}>{numberToTime(i)}</Link>
            </li>
        )
    }

    return options
}

export const timeslotHashToLi = (hash, num, restId) => {
    let options = []

    for (let key in hash) {
        options.push(
            // <li key={`slot-${key}`} value={key} className={hash[key]}>
            //     <Link to={`/reservation/${restId}/${key}`}>{numberToTime(key)}</Link>
            // </li>
            <Link to={`/reservation/${restId}/${key}`}>
                <li key={`slot-${key}`} value={key} className={hash[key]}>
                    {numberToTime(key)}
                </li>
            </Link>
                        
        )
    }
    
    return options
}