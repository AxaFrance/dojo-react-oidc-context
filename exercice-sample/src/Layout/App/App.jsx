import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Messages, { MessageProvider } from "Shared/Messages";

import "./App.scss";

import Header from "../Header";
import Footer from "../Footer";
import Routes from "../Routes";
import NavBar from "../NavBar";

const App = () => (
  <MessageProvider>
    <Router>
      <>
        <Header />
        <NavBar />
        <div className="container">
          <Messages />
          <Routes />
        </div>
        <Footer />
      </>
    </Router>
  </MessageProvider>
);

export default App;
