import React from 'react';
import Hero from './components/Hero/Hero';
import HeroBottom from './components/HeroBottom/HeroBottom';
import NavigationBar from './components/Navbar/NavigationBar';
import NavMobile from './components/Navbar/NavMobile';


const IndexView = () => {
    return (
        <>
            <NavigationBar/>
            <NavMobile/>
            <Hero/>
            <HeroBottom/>
        </>
    );
};

export default IndexView;