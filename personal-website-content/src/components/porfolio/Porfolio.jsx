import React from 'react'
import './porfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Porfolio = () => {
    return (
        <section id='porfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container porfolio__container">
                <article className='porfolio__item'>
                    <div className="porfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>Image Converter</h3>
                    <div className="porfolio__item-cta">
                        <a href="https://github.com/poanchen1997/ImageConverter" className='btn' target='_blank' rel='noreferrer'>Github</a>
                    </div>

                </article>
                <article className='porfolio__item'>
                    <div className="porfolio__item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>Interactive Map of Legend of Zelda: Tear of the Kingdom</h3>
                    <div className="porfolio__item-cta">
                        <a href="https://github.com/poanchen1997/ZeldaMap" className='btn' target='_blank' rel='noreferrer'>Github</a>
                        <a href="https://ssyezzh0fvqszrhnjny0xw.on.drv.tw/zeldamap/" className='btn btn-primary' target='_blank' rel='noreferrer'>Demo</a>
                    </div>
                </article>
                <article className='porfolio__item'>
                    <div className="porfolio__item-image">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>Data Visualization</h3>
                    <div className="porfolio__item-cta">
                        <a href="https://github.com/poanchen1997/Data-Visualization" className='btn' target='_blank' rel='noreferrer'>Github</a>
                        <a href="https://cse512-22sp.pages.cs.washington.edu/YoungAndCool/" className='btn btn-primary' target='_blank' rel='noreferrer'>Demo 1</a>
                        <a href="https://cse512-22sp.pages.cs.washington.edu/Social-Network/#slide=1" className='btn btn-primary' target='_blank' rel='noreferrer'>Demo 2</a>
                    </div>
                </article>
                <article className='porfolio__item'>
                    <div className="porfolio__item-image">
                        <img src={IMG4} alt="" />
                    </div>
                    <h3>Database Related</h3>
                    <div className="porfolio__item-cta">
                        <a href="https://github.com/poanchen1997/Database_Related" className='btn' target='_blank' rel='noreferrer'>Github</a>
                    </div>
                </article>
                <article className='porfolio__item'>
                    <div className="porfolio__item-image">
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>Rotating Things</h3>
                    <div className="porfolio__item-cta">
                        <a href="https://github.com/poanchen1997/rotating-things" className='btn' target='_blank' rel='noreferrer'>Github</a>
                    </div>
                </article>
                <article className='porfolio__item'>
                    <div className="porfolio__item-image">
                        <img src={IMG6} alt="" />
                    </div>
                    <h3>Statistic Computing</h3>
                    <div className="porfolio__item-cta">
                        <a href="https://github.com/poanchen1997/Statistic-Computing" className='btn' target='_blank' rel='noreferrer'>Github</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Porfolio