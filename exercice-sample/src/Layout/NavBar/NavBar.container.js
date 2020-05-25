import React, { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { useReactOidc } from '@axa-fr/react-oidc-context';

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
  const { oidcUser } = useReactOidc();
  const location = useLocation();
  const positionInit = setPosition(location);
  const navBarItemsFiltered = useMemo(() => navBarItems.filter(item => !item.protected || oidcUser), [oidcUser]);
  return <Navbar navBarItems={navBarItemsFiltered} positionInit={positionInit} />;
};

export default NavbarContainer;
