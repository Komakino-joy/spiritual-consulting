import React from 'react';
import Banner from '../components/banner/banner.component';
import About from '../components/about/about.component';
import BookAppointment from '../components/book-appointment/book-appointment';
import ClientReviews from '../components/client-reviews/client-reviews';
import OurPackages from '../components/our-packages/our-packages.component';

const HomePage = () => {
    return (
        <>
            <Banner/>
            <About/>
            <ClientReviews/> 
            <OurPackages/>
            <BookAppointment/>
        </>
    )
}

export default HomePage
