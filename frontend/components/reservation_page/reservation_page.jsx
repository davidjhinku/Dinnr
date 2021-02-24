import React from 'react'

class ReservationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.reservation
    }
}

export default ReservationPage;