import React from 'react';
import { useReactOidc } from '@axa-fr/react-oidc-context';
import Header from './Header.component';

const HeaderContainer = () => {
  const { oidcUser, login, logout } = useReactOidc();
  const user = oidcUser && {
    userName: `${oidcUser.profile.given_name} ${oidcUser.profile.family_name}`,
    email: oidcUser.profile.email,
  };

  return <Header login={login} logout={logout} user={user} />;
};

export default HeaderContainer;
