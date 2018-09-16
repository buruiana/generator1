import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./redux/store.js";
import App from "./components/App";
import Home from "./components/Home/Home.js";
import ComponentsList from "./components/ReactComponents";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/editor" component={ComponentsList} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
