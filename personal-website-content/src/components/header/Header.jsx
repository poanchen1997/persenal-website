import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/dog.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Andy Chen</h1>
                <h5 className="text-light">Software Engineer / Data Engineer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down &#x2192;</a>
            </div>
        </header>
    )
}

export default Header