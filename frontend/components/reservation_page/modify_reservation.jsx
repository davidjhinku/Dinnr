import React from 'react'

class ModifyReservation extends React.Component {
    
    componentDidMount() {
        this.props.fetchReservation(this.props.resId)
    }
    
    render() {
        let reservation = this.props.reservation
        let restaurant = this.props.restaurant

        return(
            <div className='modify page'>
            
            </div>
        )
    }
    // NOTE: Nice to have later, modify finds new table and displays below instead of errors
}

export default ModifyReservation;