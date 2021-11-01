import React from 'react';
import Hero from './Hero/Hero';
import HeroBottom from './HeroBottom/HeroBottom';
import Expenses from './Expenses/Expenses';
import Know from './Know/Know';
import Subscribe from '../Home/components/Subscribe/Subscribe';

const IndexSponsor = () => {
    return (
        <>
            <Hero/>
            <HeroBottom/>
            <Expenses/>
            <Know/>
            <Subscribe/>
        </>
    );
};

export default IndexSponsor;