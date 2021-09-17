import React from 'react';
import About from './components/About/About';
import Causes from './components/Causes/Causes';
import Donation from './components/Donation/Donation';
import Featured from './components/Featured/Featured';
import Help from './components/Help/Help';
import Hero from './components/Hero/Hero';
import HeroBottom from './components/HeroBottom/HeroBottom';
import Mission from './components/Mission/Mission';
import NavigationBar from './components/Navbar/NavigationBar';
import NavMobile from './components/Navbar/NavMobile';
import { causeData, couterData, featured, currencies } from './data/fakedata';




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

            <Mission
                data={couterData}
            />
            <Help />
            <Featured
                data={featured}
            />
            <Donation
                data = {currencies}
            />
        </>
    );
};

export default IndexView;