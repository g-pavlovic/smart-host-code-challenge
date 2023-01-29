import React, { Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Suspense fallback={<></>}>
      <Header />
      <div className="app-container">
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Suspense>
  );
};

export default withRouter(App);
