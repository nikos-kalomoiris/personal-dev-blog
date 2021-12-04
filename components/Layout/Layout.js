import React from 'react';
import Header from '../Shared/Header/Header';

const Layout = ({ children }) => {
    return (
        <>
            {/* <Header /> */}
            <div>
                {children}
            </div>
        </>
        
    );
}

export default Layout;
