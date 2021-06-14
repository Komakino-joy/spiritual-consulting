import React from 'react';

import './card.styles.css'; 

const Card = ({children, profileImage, name, role, alt, width, height }) => {
    return (
        <div 
          className='card-container' 
          >
          <card
            style={{
              width:width, 
              height:height
          }}
          >
            <h1 className='card-header'>{name}</h1>
            <h5 className='card-sub-header'>{role}</h5>  
            <img src={profileImage} alt={alt} className='user-portrait'/>
            <p className='bio'> 
              {children}
            </p>

          </card>
        </div>
    )
}

export default Card
