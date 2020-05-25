import React from 'react';
import PropTypes from 'prop-types';

import logo from '@axa-fr/react-toolkit-core/dist/assets/logo-axa.svg';
import { Header, Name, User } from '@axa-fr/react-toolkit-all';
import Button from '@axa-fr/react-toolkit-button';

import './Header.scss';

const propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
  }),
};

const HeaderApp = ({ user }) => (
  <Header>
    <Name title="OIDC Dojo" subtitle="Mise en place d'OIDC Client" img={logo} alt="Logo React" onClick={() => {}} />
    {user ? (
      <div className="info-user__container">
        <User name={user.userName} profile={user.email} />
        <Button
          onClick={() => {
            console.log('logout');
          }}
          classModifier="logout hasiconLeft link"
        >
          <span className="af-btn__text">Logout</span>
          <i className="glyphicon glyphicon-log-out" />
        </Button>
      </div>
    ) : (
      <Button
        onClick={() => {
          console.log('login');
        }}
        classModifier="login hasiconLeft"
      >
        <span className="af-btn__text">Login</span>
        <i className="glyphicon glyphicon-log-in" />
      </Button>
    )}
  </Header>
);

Header.propTypes = propTypes;

export default HeaderApp;
