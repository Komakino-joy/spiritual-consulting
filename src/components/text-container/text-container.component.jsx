import React from 'react';

import './text-container.styles.css';

const TextContainer = ({ children, color, bgcolor, height, header1, header2  }) => {
    return (
        <div className='text-wrapper'>
            <div className='text-container'>
                <h1 className='text-heading'>{header1}</h1>
                <h1 className='text-heading'>{header2}</h1>
                <hr
                    style={{
                        color: color,
                        backgroundColor: bgcolor
                    }}
                />
                <p className='text-detail'>{ children } </p>
            </div>
        </div>
    )
}

export default TextContainer
