import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { signout, isAuth } from '../actions/auth';
import { APP_NAME } from '../config';
import NProgress from 'nprogress';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
// import '.././node_modules/nprogress/nprogress.css';    //to use inbuilt css of nprogress, need to make changes in next.config.js as well
import Search from './blog/Search';

Router.onRouteChangeStart = url => NProgress.start();   //for progress bar
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

 // (style is used to display cursor when hovering)
  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink style={{ cursor: 'pointer' }} className="font-weight-bold">{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>

          <React.Fragment>
              <NavItem>
                <Link href="/blogs">
                  <NavLink style={{ cursor: 'pointer' }}>Blogs</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/contact">
                  <NavLink style={{ cursor: 'pointer' }}>Contact</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>

            {!isAuth() && (         //like the if statment .. code after && gets executed if 1st condition is true. Since mulitple things had to be executed we use React.fragment to wrap them up
              <React.Fragment>        
                <NavItem>
                  <Link href="/signin">
                    <NavLink style={{ cursor: 'pointer' }}>SignIn</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <NavLink style={{ cursor: 'pointer' }}>SignUp</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}

            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href="/user">
                  <NavLink style={{ cursor: 'pointer' }}>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href="/admin">
                  <NavLink style={{ cursor: 'pointer' }}>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && (    //The above statements is executed to hide the sign in button when already logged in 
              <NavItem>
                <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>    
                  SignOut
                </NavLink>
              </NavItem>
            )}

            <NavItem> 
                <a href = "/user/crud/blog" className="btn btn-primary text-light">Write a blog</a>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
      <Search />
    </React.Fragment>
  );
};

export default Header;