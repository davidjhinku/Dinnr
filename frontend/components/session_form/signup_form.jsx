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
                        <li key={idx} className='session-error-message'>
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
            <div className="modal-content">
                <h2>Welcome to Dinnr!</h2>
                <hr/>

                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='First Name' value={this.state.first_name} onChange={this.handleChange('first_name')} required/>
                    <br />
                    <input type="text" placeholder='Last Name' value={this.state.last_name} onChange={this.handleChange('last_name')} required/>
                    <br />
                    <input type="text" placeholder='Enter Email' value={this.state.email} onChange={this.handleChange('email')} required/>
                    <br />
                    <input type="password" placeholder='Enter Password' value={this.state.password} onChange={this.handleChange('password')} required/>
                    <br />
                    <select value={this.state.primary_location} onChange={this.handleChange('primary_location')} required>
                        <option value="" disabled hidden>Primary Dining Location</option>
                        <option value="New York">New York</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Los Angeles">Los Angeles</option>
                    </select>
                    <br/>
                    <button className='session-submit-button'>Create Account</button>
                </form>
                <hr/>

                <span>Already a member? {props.otherForm}</span>
            </div>
        )

    }
}

export default SignUp;