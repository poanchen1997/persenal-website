import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            {/* _blank means always open new tab for the link */}
            <a href="https://www.linkedin.com/in/po-an-chen-andy/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
            <a href="https://github.com/poanchen1997" target='_blank' rel='noreferrer'><FaGithubSquare /></a>
        </div>
    )
}

export default HeaderSocials

