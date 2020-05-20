import React, { useState } from 'react';
import Header from './Header.component';

const HeaderContainer = () => {
  const [user, setUser] = useState(null);
  const login = () => {
    console.log('Login');
    setUser({ userName: 'Jean', profile: 'Inexistant' });
  };
  const logout = () => {
    console.log('Logout');
    setUser(null);
  };
  return <Header login={login} logout={logout} user={user} />;
};

export default HeaderContainer;
