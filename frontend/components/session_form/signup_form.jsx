import React from 'react'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            primary_location: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        // this.props.processForm(this.state).then(() => this.props.history.push('/'))
        this.props.processForm(this.state).then(this.props.closeModal)
    }

    handleChange(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((err, idx) => {
                    return (
                        <li key={idx}>
                            {err}
                        </li>
                    )
                })}
            </ul>
        )
    }

    render() {
        const props = this.props

        return (
            <div className="signup-modal">
                <div className="close-modal-x" onClick={props.closeModal}>X</div>
                <h2>Welcome to Dinnr!</h2>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='First Name' value={this.state.first_name} onChange={this.handleChange('first_name')} />
                    <br />
                    <input type="text" placeholder='Last Name' value={this.state.last_name} onChange={this.handleChange('last_name')} />
                    <br />
                    <input type="text" placeholder='Enter Email' value={this.state.email} onChange={this.handleChange('email')} />
                    <br />
                    <input type="password" placeholder='Enter Password' value={this.state.password} onChange={this.handleChange('password')} />
                    <br />
                    <select value={this.state.primary_location} onChange={this.handleChange('primary_location')}>
                        <option value="" disabled hidden>Primary Dining Location</option>
                        <option value="New York">New York</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Los Angeles">Los Angeles</option>
                    </select>
                    <br/>
                    <button className='session-submit-button'>Create Account</button>
                </form>
                <br />
                <span>Already a member? {props.otherForm}</span>
            </div>
        )

    }
}

export default SignUp;