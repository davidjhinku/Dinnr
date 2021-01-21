import React, {useState} from 'react'
import { render } from 'react-dom';

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
                            <li><button>My Profile</button></li>
                            <li><button>My Reservations</button></li>
                            <li><button>My Saved Restaurants</button></li>
                            <li><button className='signout-button' onClick={() => this.props.logout()}>Sign out</button></li>
                        </ul>
                    </div>
                </li>
            </ul>

        )
    }

    displaySessionLinks(){
        return (
            <ul className='session-links'>
                <li>
                    {/* <Link to='/signup' >Sign up</Link> */}
                    <button className='signup-button' onClick={() => this.props.openModal('signup')}>Sign up</button>
                </li>
                <li>
                    {/* <Link to='/signin' >Sign in</Link> */}
                    <button className='signin-button' onClick={() => this.props.openModal('signin')}>Sign in</button>
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



// const NavBar = ({currentUser, logout, openModal}) => {
//     const [isActive, setActive] = useState('false')
    
//     const toggleActive = () => {
//         setActive(!isActive)
//     };
    
//     const displayLoggout = () => {
//         return (
//             <ul className="nav-dropdown">
//                 <li onClick={toggleActive}><img src={window.userProfileUrl} className='profile-icon' />
                    
//                     <div className={isActive ? 'dropdown-options active' : 'dropdown-options'}>
//                         <h3>{`Hello, ${currentUser.first_name}!`}</h3>
//                         <hr/>
//                         <ul>
//                             <li><button>My Profile</button></li>
//                             <li><button>My Reservations</button></li>
//                             <li><button>My Saved Restaurants</button></li>
//                             <li><button className='signout-button' onClick={() => logout()}>Sign out</button></li>
//                         </ul>
//                     </div>
//                 </li>
//             </ul>

//         )
//     }

//     const displaySessionLinks = () => {
//         return (
//             <ul className='session-links'>
//                 <li>
//                     {/* <Link to='/signup' >Sign up</Link> */}
//                     <button className='signup-button' onClick={() => openModal('signup')}>Sign up</button>
//                 </li>
//                 <li>
//                     {/* <Link to='/signin' >Sign in</Link> */}
//                     <button className='signin-button' onClick={() => openModal('signin')}>Sign in</button>
//                 </li>
//             </ul>
//         )
//     }

//     let session
//     currentUser ? session = displayLoggout() : session = displaySessionLinks()

//     return (
//         <nav>
//             {session}
//         </nav>
//     )
// }


export default NavBar;