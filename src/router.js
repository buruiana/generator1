import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./redux/store.js";
import App from "./components/App";
import Home from "./components/layouts/Home";
import Editor from "../src/components/layouts/Editor";
import Providers from "../src/components/layouts/Providers";
import Technos from "../src/components/layouts/Technos";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/editor" component={Editor} />
      <Route path="/providers" component={Providers} />
      <Route path="/technos" component={Technos} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
