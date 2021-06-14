import React from 'react';

import ImageContainer from '../image-container/image-container.component';
import Button from '../button/button.component'

import bathImg from '../../assets/bath.PNG';

import './book-appointment.styles.css'

const BookAppointment = () => {
    return (
        <div className='section'>
            <div className='book-wrapper'>
                <div className='book-container'>
                    <header className='book-header-container'>
                        <h1 className='book-header'>book an</h1>
                        <h1 className='book-header'>appointment</h1>
                    </header>
                    <hr className='hoz-text-divider'/>
                    <div className='booking-details'>
                        <h4 className='book-heading'>PHONE NUMBER</h4>
                        <p className='book-detail'>(123) 456-7890</p>
                        <h4 className='book-heading'>EMAIL ADDRESS</h4>
                        <p className='book-detail'>hello@email.com</p>
                        <h4 className='book-heading'>MAILING ADDRESS</h4>
                        <p className='book-detail'>123 Anywhere st, city, ST 12345</p>
                        <Button color= '#eeeae5'bgcolor= '#314359'>ONLINE BOOKING</Button>
                    </div>
                </div>
            </div>
            
            <ImageContainer image={bathImg} alt={'vase and flowers'} />
        </div>
    )
}

export default BookAppointment
