import React from 'react';

import './image-container.styles.css';

const ImageContainer = ({ image, alt }) => {
    return (
        <div className='img-container'>
            <img className='img-section' src={image} alt={alt} />
        </div>
    )
}

export default ImageContainer
