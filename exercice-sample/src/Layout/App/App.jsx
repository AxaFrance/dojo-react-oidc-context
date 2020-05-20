import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthenticationProvider, InMemoryWebStorage } from '@axa-fr/react-oidc-context';

import Messages, { MessageProvider } from 'Shared/Messages';

import './App.scss';
import 'polyfills';

import oidcConfiguration from 'configuration.json';

import Header from '../Header';
import Footer from '../Footer';
import Routes from '../Routes';
import NavBar from '../NavBar';

const App = () => (
  <AuthenticationProvider configuration={oidcConfiguration} UserStore={InMemoryWebStorage}>
    <MessageProvider>
      <Router>
        <Header />
        <NavBar />
        <div className="container">
          <Messages />
          <Routes />
        </div>
        <Footer />
      </Router>
    </MessageProvider>
  </AuthenticationProvider>
);

export default App;
