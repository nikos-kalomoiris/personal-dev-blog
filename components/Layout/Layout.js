import React from 'react';
import Header from '../Shared/Header/Header';

const Layout = ({ children }) => {
    return (
        <>
            <div className="app-container">
                {children}
            </div>
        </>
        
    );
}

export default Layout;
