import React from 'react'

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.state).then(() => this.props.history.push('/'))
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

        return(
            <div className="signin-modal">
                <h2>Please sign in</h2>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Email' value={this.state.email} onChange={this.handleChange('email')}/>
                    <br/>
                    <input type="password" placeholder='Password' value={this.state.password} onChange={this.handleChange('password')}/>
                    <br/>
                    <button className='signin-button'>Sign In</button>
                </form>
                <br/>
                <span>New to Dinnr? {props.linkPath}</span>
            </div>
        )

    }
}

export default SignIn;