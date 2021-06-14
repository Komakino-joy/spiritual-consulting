import React from 'react';

import Card from '../card/card.component';

import userImageOne from '../../assets/placeholder.jpg';

import './client-reviews.styles.css';

const ClientReviews = () => {
    return (
        <>
        <div className='section' >
        <h1 className='review-header'>what our clients say</h1>
            <div className='client-reviews-container'>
                <Card 
                    width='65%'
                    name='Alberto Connelli'
                    role='MARKETING REPRESENTATIVE'
                    profileImage={userImageOne}
                > 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur vitae urna.
                </Card>

                <div className='divider'/>

                <Card 
                    width='65%'
                    name='Alberto Connelli'
                    role='MARKETING REPRESENTATIVE'
                    profileImage={userImageOne}
                > 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur vitae urna.
                </Card>
                
                <div className='divider'/>
                
                <Card 
                    width='65%'
                    name='Alberto Connelli'
                    role='MARKETING REPRESENTATIVE'
                    profileImage={userImageOne}
                > 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur vitae urna.
                </Card>
            </div>
        </div>
        </>
    )
}

export default ClientReviews
