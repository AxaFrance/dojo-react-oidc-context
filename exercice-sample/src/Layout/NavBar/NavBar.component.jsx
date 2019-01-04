import React from 'react';
import { NavBar, NavBarItem, Title } from '@axa-fr/react-toolkit-all';

import './NavBar.scss';

const foo = () => {};

const Navbar = ({ positionInit, navBarItems }) => {
  return (
    <>
      <NavBar isVisible positionInit={positionInit} onClick={foo}>
        {navBarItems.map(
          navItem =>
            navItem.visible && (
              <NavBarItem
                actionElt={navItem.actionElt}
                key={navItem.path}
                label={navItem.label}
              />
            ),
        )}
      </NavBar>
      <Title title="OIDC Sample" />
    </>
  );
};
export default Navbar;
