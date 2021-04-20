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

export const timeSlotOption = (searchState) => {
    let options = []
    let time;

    if (formsDateFormat() === searchState.date) {
        time = new Date().getHours() + 3 //So the options hash can't be happen in the past
    } else {
        time = 0
    }

    for (let i = time; i <= 24; i++) {
        options.push(<option key={i} value={i}>{numberToTime(i)}</option>)
    }

    return options
}

export const timeSlotLi = (time = 0, restId) => {
    let options = []
    
    for (let i = time; options.length < 5; i++) {

        options.push(
            <li key={i} value={i}>
                <Link to={`/reservation/${restId}`}>{numberToTime(i)}</Link>
            </li>
        )
    }

    return options
}

export const timeslotHashToLi = (hash, restId) => {
    let options = []

    for (let key in hash) {

        switch(hash[key]) {
            case "available":
                options.push(
                    <Link to={`/reservation/${restId}/${key}`}>
                        <li key={`slot-${key}`} value={key} className={hash[key]}>
                            {numberToTime(key)}
                        </li>
                    </Link>          
                )
                break
            case "booked":
                options.push(
                        <li key={`slot-${key}`} value={key} className={hash[key]}>
                        </li>
                )
                break
            case "loading":
                options.push(
                    <li key={`slot-${key}`} value={key} className={hash[key]}>
                    </li>
                )
                break
        }
    }

    return options
}

export const dayOfWeek = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()]
}

export const readableMonth = (date) => {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    return month[date.getMonth()]
}

export const readableDate = (date) => {
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export const newDate = (date, time) => {
    let y = date.slice(0, 4)
    let m = date.slice(5, 7) - 1
    let d = date.slice(8, 11)

    return new Date(y, m, d, time)
}

export const restAverages = (reviews) => {
    let volume = ['none', 'Do not recall', 'Quiet', 'Moderate', 'Energetic']
    let totalReviews = reviews.length

    let data = {
        "overall": 0,
        "food": 0,
        "service": 0,
        "ambiance": 0,
        "value": 0,
        "noise": 0,
        "recommended": 0,
    }

    reviews.forEach ((review => {
        for (let key in review) {
            if (data[key] >= 0) {

                data[key] += review[key]
            }
        }
    }))

    for (let key in data) {
        data[key] = (data[key] / totalReviews).toFixed(1)
    }

    data['noise'] = volume[Math.floor(data['noise'])]

    return data
}

export const starRating = (average) => {
    return (
        <div className='star-rating'>
            <div className='top' style={{width: `${parseInt((average/5)*100)}%`}}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <div className='bottom'>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
        </div>
    )
}
