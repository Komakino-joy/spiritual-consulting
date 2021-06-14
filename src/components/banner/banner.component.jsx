import React from 'react'

import Logo from '../logo/logo.component';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import backTherapy from '../../assets/image1.PNG';

import './banner.styles.css';

const Banner = () => {
    return (
        <Carousel
        showThumbs={false}
        showStatus={false}
         >
            <div className='banner-image-container '>
                <img src={backTherapy}  alt="placeholder"/>
                <div class="image-overlay">
                    <Logo 
                        className='carousel-logo'
                        height='15%' 
                        width='15%'/>
                    <h1 className='carousel-header'>Yolanda Frausto</h1>
                    <h2 className='carousel-sub-header'>SPIRITUAL HEALER AND LIFE COACH</h2>
                </div>
            </div>
            <div className='image-container'>
                <img src={backTherapy}  alt="placeholder"/>
            </div>
            <div className='image-container'> 
                <img src={backTherapy}  alt="placeholder"/>
            </div>
        </Carousel>
    )
}

export default Banner
