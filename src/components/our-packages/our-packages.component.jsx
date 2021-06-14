import React from 'react';

import package1 from '../../assets/facial.PNG'
import package2 from '../../assets/roller.PNG'
import package3 from '../../assets/bath2.PNG'

import './our-packages.styles.css';

const OurPackeges = () => {
    return (
        <div className='section our-packages-container'>
            <h1 className='packages-header'>our packages</h1>
            <p className='packages-detail'>We have a variety of services to ensure your wellness</p>
            <div className='pacakage-images-wrapper'>

                <div className='pacakage-images-container'>
                    <img 
                        src={package1} 
                        alt='facial massage'
                        className='package-image'
                    />
                </div>

                <div className='pacakage-images-container'>
                    <img 
                        src={package2} 
                        alt='dermic roller'
                        className='package-image'
                    />
                </div>

                <div className='pacakage-images-container'>
                    <img 
                        src={package3} 
                        alt='bath massage'
                        className='package-image'
                    />
                </div>
            </div>
        </div>
    )
}

export default OurPackeges
