import React from 'react'

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoUser = this.handleDemoUser.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        // this.props.processForm(this.state).then(() => this.props.history.push('/'))
        this.props.processForm(this.state).then(this.props.closeModal)
    }

    handleDemoUser(e) {
        e.preventDefault()
        this.props.processForm({email: 'demo@gmail.com', password: 'password'}).then(this.props.closeModal)
    }

    handleChange(type) {
        return e => {
            this.setState({[type]: e.target.value})
        }
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((err, idx) => {
                    return(
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

        return(
            <div className="modal-content">
                <h2>Please sign in</h2>
                <hr/>

                {this.renderErrors()}
                <form className='session-form' onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Email' value={this.state.email} onChange={this.handleChange('email')} required/>
                    <br/>
                    <input type="password" placeholder='Password' value={this.state.password} onChange={this.handleChange('password')} required/>
                    <br/>
                    <button className='session-submit-button'>Sign In</button>
                </form>
                <button className='demo-user-button' onClick={this.handleDemoUser}>Demo User</button>
                <hr/>
                
                <span>New to Dinnr? {props.otherForm}</span>
            </div>
        )

    }
}

export default SignIn;