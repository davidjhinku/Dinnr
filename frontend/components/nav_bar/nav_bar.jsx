import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dd_active: false
        }
        this.toggleActive = this.toggleActive.bind(this)
    }

    toggleActive(){
        this.setState({dd_active: !this.state.dd_active})
    };

    displayLoggout(){
        return (
            <ul className="nav-dropdown">
                <li onClick={this.toggleActive}><img src={window.userProfileUrl} className='profile-icon' />

                    <div className={this.state.dd_active ? 'dropdown-options active' : 'dropdown-options'}>
                        <h3>{`Hello, ${this.props.currentUser.first_name}!`}</h3>
                        <hr />
                        <ul>
                            <li><button><Link to="/profile" className="nav-dropdown" ><div className='nav-text'>My Profile</div></Link></button></li>
                            <li><button><Link to="/profile" className="nav-dropdown" ><div className='nav-text'>My Reservations</div></Link></button></li>
                            <li><button><Link to="/profile" className="nav-dropdown" ><div className='nav-text'>My Saved Restaurants</div></Link></button></li>
                            <li><button className='signout-button' onClick={() => this.props.logout()}><div className='nav-text'>Sign out</div></button></li>
                        </ul>
                    </div>
                </li>
                <li><div className='vertical-line'></div></li>
                <li onClick={() => this.props.openModal('search')} >
                    <img src={window.searchUrl} className='search-icon' />
                </li>

            </ul>

        )
    }

    displaySessionLinks(){
        return (
            <ul className='session-links'>
                <li>
                    <button className='signup-button' onClick={() => this.props.openModal('signup')}>Sign up</button>
                </li>
                <li>
                    <button className='signin-button' onClick={() => this.props.openModal('signin')}>Sign in</button>
                </li>
                <li onClick={() => this.props.openModal('search')} >
                    <img src={window.searchUrl} className='search-icon' />
                </li>
            </ul>
        )
    }
    
    render() {
        let session
        this.props.currentUser ? session = this.displayLoggout() : session = this.displaySessionLinks()
        
        return (
            <nav>
                {session}
            </nav>
        )
    }

}

export default NavBar;