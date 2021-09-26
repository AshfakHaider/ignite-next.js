import React from 'react';
import NavigationBar from '../views/Home/components/Navbar/NavigationBar';
import NavMobile from '../views/Home/components/Navbar/NavMobile';
import Footer from '../views/Home/components/Footer/Footer';


const LayoutDefault = ({ children }) => {
    return (
        <div>
            <NavigationBar />
            <NavMobile />
            {children}
            <Footer />
        </div>
    );
};

export default LayoutDefault;