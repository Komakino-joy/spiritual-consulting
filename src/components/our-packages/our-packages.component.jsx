import React from 'react';

import Package from './package.component'

import package1 from '../../assets/facial.PNG'
import package2 from '../../assets/roller.PNG'
import package3 from '../../assets/bath2.PNG'

import './our-packages.styles.css';
import '../../App.css'

const OurPackages = () => {
    return (
        <div className='section'>
            <div className='our-packages-container'>
                <h1 className='our-packages-header'>our packages</h1>
                <p className='our-packages-detail'>We have a variety of services to ensure your wellness</p>

                <div className='our-packages-images-wrapper'>
                    <Package src={package1} alt='facial massage'>OUR MASSAGE PACKAGES</Package>
                    <Package src={package2} alt='dermic roller'>OUR FACIAL PACKAGES</Package>
                    <Package src={package3} alt='bath massage'>OTHER SERVICES</Package>
                </div>

            </div>
        </div>
    )
}

export default OurPackages
