export const numberToTime = (num) => {
    let dayTime = 'AM'
    if (num >= 12) dayTime = 'PM'

    let hour = Math.floor(num % 12) + ''
    if (hour === '0') hour = '12'

    let minute = num - Math.floor(num)
    minute === 0.5 ? minute = '30' : minute = '00'

    return `${hour}:${minute} ${dayTime}`
}