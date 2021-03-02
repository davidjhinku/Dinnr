import React from 'react'

const NavFooter = () => {
    return(
        <div className='footer'>
            <div className='top'>
                <h3 className='my-name'>David Jhinku</h3>
                <div className="social-links">
                    <h4>Join me on</h4>
                    <ul>
                        <li>
                            <a href="https://github.com/davidjhinku" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/davidjhinku/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
                        </li>
                        <li>
                            <a href="https://angel.co/u/david-jhinku" target="_blank"><i class="fab fa-angellist fa-2x"></i></a>
                        </li>
                        <li>
                            <a href="mailto: davidjhinku@gmail.com" target="_blank"><i class="fas fa-envelope fa-2x"></i></a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="footer-hr"/>
            <p id="footer-copyright">
                Probably not Copyright &copy; 2021 Dinnr
            </p>
        </div>
    )
}

export default NavFooter;