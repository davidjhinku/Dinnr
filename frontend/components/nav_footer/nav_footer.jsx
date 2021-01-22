import React from 'react'

const NavFooter = () => {
    return(
        <div className='footer-connect'>
            <h3>David Jhinku - Connect</h3>
            <hr className="footer-hr"/>
            <ul className="social-links">
                <li>
                    <a href="https://github.com/davidjhinku"><img src={window.githubUrl} className='footer-icon' /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/davidjhinku/"><img src={window.linkedinUrl} className='footer-icon' /></a>
                </li>
            </ul>
        </div>
    )
}

export default NavFooter;