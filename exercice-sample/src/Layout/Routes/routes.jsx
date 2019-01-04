import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "Pages/Home";
import Projects from "Pages/Projects";
import Admin from "Pages/Admin";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/admin" component={Admin} />
    </Switch>
  );
};

export default Routes;
