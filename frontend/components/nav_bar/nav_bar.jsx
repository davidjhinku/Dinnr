import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    const displayLoggout = () => {
        return (
            <li>
                <button onClick={() => this.props.logout()}>Logout</button>
            </li>
        )
    }

    const displaySessionLinks = () => {
        return (
            <>
                <li className='signup-button'>
                    <Link to='/signup' >Sign up</Link>
                </li>
                <li className='signin-button'>
                    <Link to='/login' >Sign in</Link>
                </li>
            </>
        )
    }

    let session
    this.props.currentUser ? session = displayLoggout() : session = displaySessionLinks()

    return (
        <ul className='nav-bar'>
            <li>
                
            </li>


        </ul>
    )

}

export default NavBar;