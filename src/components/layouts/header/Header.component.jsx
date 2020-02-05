import React from 'react'
import './Header.styles.scss'


const Header = () => {
    return (
        <nav className='Header'>
            <div className='logo-and-text'>
                <img src='../../../assets/images/562x385.png' alt='logo' className='logo' />
                <div className='logo-name'>
                    WHAT TO WATCH?
                </div>
            </div>

            <div className='user-authenticate'>
                <div className='user-button'>
                    <button>LOG IN</button>
                </div>

                <div className='user-button'>
                    <button>SIGN UP</button>
                </div>
            </div>

        </nav>
    )
}

export default Header