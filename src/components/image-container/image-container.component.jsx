import React from 'react';

import './image-container.styles.css';

const ImageContainer = ({ image, alt }) => {
    return (
        <div className='about-img-container'>
            <img className='about-img' src={image} alt={alt} />
        </div>
    )
}

export default ImageContainer
