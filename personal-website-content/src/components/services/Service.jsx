import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>Data Analytic</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Data ETL</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Data Cleaning</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Data Analyze</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Data Visualization</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Web Data Extraction</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className="service__head">
                        <h3>Software Developement</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Front-end Implement</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Back-end Implement</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Database Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Web Construction</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Web Maintaining</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Cloud Computing</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className="service__head">
                        <h3>Other Abilities</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>LaTeX Compiling</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Trouble Shooting</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Statistics Insight Providing</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Project Managing</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services