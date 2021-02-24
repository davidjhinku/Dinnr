import React from 'react'

class ReservationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.reservation
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.action(this.state)
    }

    handleUpdate(type){
        return e => {
            this.setState({[type]: e.target.value})
        }
    }

    render() {
        return(
            <div>
                This is the reservation page
            </div>
        )
    }
}

export default ReservationPage;