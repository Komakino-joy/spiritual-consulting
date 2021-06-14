import React from 'react'

import './package.styles.css'

const Package = ({ src, alt, children }) => {
    return (
        <div className='package-wrapper'>
            <div className='package-image-container'>
                <img 
                    src={src} 
                    alt={alt}
                    className='package-image'
                />
                
            </div>
            <span className='package-name'>{children}</span>
        </div>
    )
}

export default Package
