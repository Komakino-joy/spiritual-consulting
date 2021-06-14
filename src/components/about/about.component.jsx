import React from 'react';

import ImageContainer from '../../components/image-container/image-container.component';
import TextContainer from '../../components/text-container/text-container.component';

import aboutImg from '../../assets/about.PNG';

import '../../pages/homepage.styles.css'

const AboutUs = () => {
    return (
        <div className='section'>
            <ImageContainer image={aboutImg} alt={'vase and flowers'} />
            <TextContainer
                header1='get to'
                header2='know us'
                color={'#314359'}
                bgColor={'#314359'}
            >
                Opened in 2005, Great Nature Lounge is dedicated to giving our clients quality 
                and luxury services to ensure their utmost relaxation and pampering.
            </TextContainer>
        </div>
    )
}

export default AboutUs