import React from 'react'

import ImageContainer from '../../components/image-container/image-container.component'

import aboutImg from '../../assets/about.PNG'

import './about.styles.css'

const AboutUs = () => {
    return (
        <div className='section'>
            <ImageContainer image={aboutImg} alt={'vase and flowers'} />
            <div className='about-wrapper'>
                <div className='about-container'>
                    <div className='about-header-container'> 
                        <h1 className='about-header'>get to</h1>
                        <h1 className='about-header'>know us</h1>
                    </div>

                    <hr className='hoz-text-divider'/>

                    <div className='about-detail'>                
                        <p>Opened in 2005, Great Nature Lounge is
                        dedicated to giving our clients quality and
                        luxury services to ensure their utmost
                        relaxation and pampering.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs