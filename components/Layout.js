//we are keeping the file name starting with capital here
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    );
};

export default Layout;