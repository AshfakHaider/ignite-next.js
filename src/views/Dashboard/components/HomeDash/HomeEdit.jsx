import React from 'react';
import AddCause from './AddCause';
import AddCounter from './AddCounter';
import AddFeatured from './AddFeatured';
import AddAchivement from './AddAchivement';
import AddEvent from './AddEvent';


const HomeEdit = () => {
  

    return (
        <div className='homeEdit mt-4'>
            <AddCause/>
            <AddCounter/>
            <AddFeatured/>
            <AddAchivement/>
            <AddEvent/>
        </div>
    );
};

export default HomeEdit;