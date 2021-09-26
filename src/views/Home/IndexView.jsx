import React from 'react';
import About from './components/About/About';
import Achivements from './components/Achivements/Achivements';
import Causes from './components/Causes/Causes';
import Donation from './components/Donation/Donation';
import Featured from './components/Featured/Featured';
import Help from './components/Help/Help';
import Hero from './components/Hero/Hero';
import HeroBottom from './components/HeroBottom/HeroBottom';
import Mission from './components/Mission/Mission';
import Subscribe from './components/Subscribe/Subscribe';
import Volunteer from './components/Volunteer/Volunteer';
import { causeData, couterData, featured, currencies, achieve } from './data/fakedata';




const IndexView = () => {
    return (
        <>
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
                data={currencies}
            />
            <Achivements
                data={achieve}
            />
            <Volunteer/>
            <Subscribe/>
           
        </>
    );
};
export default IndexView;