import React from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import Navbar from './NavBar.component';
import { navBarItems } from './NavBar.constants';

const findPath = location => element => {
  const match = matchPath(location.pathname, {
    path: element.path,
    exact: true,
  });
  return (match && match.isExact) || (location.pathname === '/' && element.default) || false;
};

const setPosition = location => navBarItems.findIndex(findPath(location));

const NavbarContainer = () => {
  const location = useLocation();
  const positionInit = setPosition(location);
  return <Navbar navBarItems={navBarItems} positionInit={positionInit} />;
};

export default NavbarContainer;
