import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Hero from './Hero/Hero';
import Process from './Process/Process';
import Subscribe from '../Home/components/Subscribe/Subscribe';

const AboutIndex = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <Process/>
            <Subscribe/>
        </>
    );
};

export default AboutIndex;