import React from 'react';
import LayoutDash from '../../src/layout/LayoutDash';
import DashboardView from '../../src/views/Dashboard/DashboardView'
const dashboard = () => {
    return (
        <div>
            <DashboardView />
        </div>
    );
};

dashboard.getLayout = (page) => {
    return (
       
            <LayoutDash>
                {page}
            </LayoutDash>
        
    )
}
export default dashboard;

