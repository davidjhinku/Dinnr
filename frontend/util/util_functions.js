import React from 'react'

export const numberToTime = (num) => {
    let dayTime = 'AM'
    if (num >= 12) dayTime = 'PM'

    let hour = Math.floor(num % 12) + ''
    if (hour === '0') hour = '12'

    let minute = num - Math.floor(num)
    minute === 0.5 ? minute = '30' : minute = '00'

    return `${hour}:${minute} ${dayTime}`
}

export const timeSlots = (time = 0) => {
    let options = []

    for (let i = time; i <= 24; i++) {
        // options.push(<option key={i} value={i}>{this.props.numberToTime(i)}</option>)
        options.push(<option key={i} value={i}>{numberToTime(i)}</option>)
    }

    return options
}