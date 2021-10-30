import React from 'react';
import Image from 'next/image';
import sign from '../../../assets/images/sign.png';
import aboutUs from '../../../assets/images/cause-1.jpg';

const AboutUs = () => {
    return (
        <div className='container' style={{margin:'60px auto'}}>
            <div className="d-flex flex-wrap justify-content-center">
                <div className='col-md-6 mb-md-0 mb-3'>
                    <h6 className='minimal-heading'>ABOUT US</h6>
                    <h6 className='headings mb-2'>Welcome To Our <span className='style-font'>Varna Charity</span> please <span className='style-font'>rise your</span> helping hand</h6>
                    <p className='global_description mb-2'>
                        Integer et diam libero. Praesent quis varius nisi. Nunc vitae est sodales, tincidunt augue ac, blandit ante. Aenean a ipsum pellentesque, ultrices nibh et, maximus nisl. Ut ante arcu, congue viverra efficitur eu, posuere quis lectus. Donec rhoncus tempus tellus nec lobortis. Vivamus iaculis mollis lectus ac imperdiet.
                    </p>
                    <Image src={sign} alt='signature' />
                </div>
                <div className='col-md-6 text-center'>
                    <Image src={aboutUs} alt='about us' className='rounded' />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;