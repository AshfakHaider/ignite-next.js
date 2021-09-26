import React from 'react';
import LayoutDash from '../../src/Layout/LayoutDash';
import DashboardView from '../../src/views/Dashboard/DashboardView'
import { SSRProvider } from '@react-aria/ssr';
const dashboard = () => {
    return (
        <div>
            <DashboardView />
        </div>
    );
};

dashboard.getLayout = (page) => {
    return (
        <SSRProvider>
            <LayoutDash>
                {page}
            </LayoutDash>
        </SSRProvider>
    )
}
export default dashboard;

