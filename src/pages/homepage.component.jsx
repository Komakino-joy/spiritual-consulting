import React from 'react';
import Banner from '../components/banner/banner.component';
import About from '../components/about/about.component';
import BookAppointment from '../components/book-appointment/book-appointment';
import ClientReviews from '../components/client-reviews/client-reviews';
import OurPackeges from '../components/our-packages/our-packages.component';

import './homepage.styles.css';

const HomePage = () => {
    return (
        <>
            <Banner className='section'/>
            <About className='section'/>
            <OurPackeges className='section'/>
            <ClientReviews className='section'/> 
            <BookAppointment className='section'/>
        </>
    )
}

export default HomePage
