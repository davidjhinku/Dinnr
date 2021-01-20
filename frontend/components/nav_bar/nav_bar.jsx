import React from 'react'
// import {Link} from 'react-router-dom'

const NavBar = ({currentUser, logout, openModal}) => {
    const displayLoggout = () => {
        return (
            <ul>
                <li className='logout-button'>
                    <button onClick={() => logout()}>Logout</button>
                </li>
            </ul>
        )
    }

    const displaySessionLinks = () => {
        return (
            <ul>
                <li className='signup-button'>
                    {/* <Link to='/signup' >Sign up</Link> */}
                    <button onClick={() => openModal('signup')}>Sign up</button>
                </li>
                <li className='signin-button'>
                    {/* <Link to='/signin' >Sign in</Link> */}
                    <button onClick={() => openModal('signin')}>Sign in</button>
                </li>
            </ul>
        )
    }

    let session
    currentUser ? session = displayLoggout() : session = displaySessionLinks()

    return (
        <nav>
            {session}
        </nav>
    )

}


export default NavBar;