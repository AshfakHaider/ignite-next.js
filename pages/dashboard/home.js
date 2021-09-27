import React from 'react';
import LayoutDash from '../../src/Layout/LayoutDash';
import HomeEdit from '../../src/views/Dashboard/components/HomeDash/HomeEdit';

const home = () => {
    return (
        <div>
            <HomeEdit/>
        </div>
    );
};

home.getLayout = (page) => {
    return (

        <LayoutDash>
            {page}
        </LayoutDash>

    )
}

export default home;