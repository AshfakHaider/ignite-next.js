import React from 'react';
import About from './components/About/About';
import Causes from './components/Causes/Causes';
import Hero from './components/Hero/Hero';
import HeroBottom from './components/HeroBottom/HeroBottom';
import NavigationBar from './components/Navbar/NavigationBar';
import NavMobile from './components/Navbar/NavMobile';
import { causeData } from './data/fakedata';

const IndexView = () => {
    return (
        <>
            <NavigationBar />
            <NavMobile />
            <Hero />
            <HeroBottom />
            <About />
            <Causes
                data={causeData}
            />
        </>
    );
};

export default IndexView;