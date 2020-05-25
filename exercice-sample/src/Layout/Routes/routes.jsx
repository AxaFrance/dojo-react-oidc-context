import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { OidcSecure } from '@axa-fr/react-oidc-context';

import Home from 'Pages/Home';
import Projects from 'Pages/Projects';
import Admin from 'Pages/Admin';

const Routes = () => {
  return (
    <Switch>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/admin">
        <OidcSecure>
          <Admin />
        </OidcSecure>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
