import React from 'react'
import './about.css'
import ME from '../../assets/IMG_8200.jpeg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About pic" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ years of expericnce</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Side Projects</h5>
                            <small>Over 5 side projects</small>
                        </article>
                    </div>

                    <p>
                        With a major in Statistics, I discovered my love for creating things on my own.
                        It all began during my senior year at university when I delved into coding.
                        I'm an avid learner, primarily through self-study using resources like books, YouTube videos, and online courses.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>


            </div>
        </section>
    )
}

export default About