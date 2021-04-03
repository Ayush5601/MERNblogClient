import React from 'react';
import { useEffect } from 'react';
import Router from 'next/router';
import { isAuth } from '../../actions/auth';

const Admin = ({ children }) => {                   //lifecycle method - outside access should be redirected to the home page
    useEffect(() => {
        if (!isAuth()) {
            Router.push(`/signin`);
        } else if (isAuth().role !== 1) {
            Router.push(`/`);
        }
    }, []);
    return <React.Fragment>{children}</React.Fragment>;     //children is a props
};

export default Admin;