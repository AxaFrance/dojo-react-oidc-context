import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticationProvider, oidcLog } from "@axa-fr/react-oidc-context";

import Messages, { MessageProvider } from "Shared/Messages";

import "./App.scss";

import oidcConfiguration from "config.json"

import Header from "../Header";
import Footer from "../Footer";
import Routes from "../Routes";
import NavBar from "../NavBar";

const App = () => (
  <MessageProvider>
    <Router>
      <AuthenticationProvider
        configuration={oidcConfiguration}
        loggerLevel={oidcLog.DEBUG}
      >
        <>
          <Header />
          <NavBar />
          <div className="container">
            <Messages />
            <Routes />
          </div>
          <Footer />
        </>
      </AuthenticationProvider>
    </Router>
  </MessageProvider>
);

export default App;
