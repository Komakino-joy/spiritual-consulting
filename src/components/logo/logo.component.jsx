import React from 'react';
import logo from '../../assets/logo03.svg';

const Logo = ({ height, width }) => {
    return (
        <div>
            <img src={logo} alt='logo' 
                style={{
                    height:height,
                    width:width
                    }} 
                />
        </div>
    )
}

export default Logo
