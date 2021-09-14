import React from 'react';
import Hero from './components/Hero/Hero';
import NavigationBar from './components/Navbar/NavigationBar';
import NavMobile from './components/Navbar/NavMobile';


const IndexView = () => {
    return (
        <>
            <NavigationBar/>
            <NavMobile/>
            <Hero/>
        </>
    );
};

export default IndexView;