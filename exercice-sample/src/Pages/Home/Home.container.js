import React from 'react';
import { useReactOidc } from '@axa-fr/react-oidc-context';
import Home from './Home';

export const HomeContainer = () => {
  const { oidcUser } = useReactOidc();
  const connectedUserFullName = oidcUser && `${oidcUser.profile.given_name} ${oidcUser.profile.family_name}`;

  return <Home connectedUserFullName={connectedUserFullName} />;
};
export default HomeContainer;
