import React from 'react';

import ImageContainer from '../image-container/image-container.component';
import TextContainer from '../text-container/text-container.component';
import Button from '../button/button.component'

import bathImg from '../../assets/bath.PNG';

import './book-appointment.styles.css'

const BookAppointment = () => {
    return (
        <div className='section'>
            <TextContainer
                header1='book an'
                header2='appointment'
                color={'#314359'}
                bgColor={'#314359'}
            >
                <h4 className='book-heading'>PHONE NUMBER</h4>
                <p className='book-detail'>(123) 456-7890</p>
                <h4 className='book-heading'>EMAIL ADDRESS</h4>
                <p className='book-detail'>hello@email.com</p>
                <h4 className='book-heading'>MAILING ADDRESS</h4>
                <p className='book-detail'>123 Anywhere st, city, ST 12345</p>
                <Button
                  color= '#eeeae5'
                  bgcolor= '#314359'
                  >
                    ONLINE BOOKING
                  </Button>
            </TextContainer>
            
            <ImageContainer image={bathImg} alt={'vase and flowers'} />
        </div>
    )
}

export default BookAppointment
