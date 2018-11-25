import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./redux/store.js";
import App from "./components/layouts/App";
import Home from "./components/layouts/Home";
import Editor from "../src/components/layouts/Editor";
import Providers from "../src/components/layouts/Providers";
import Components from "../src/components/layouts/Components";
import PropTypes from "../src/components/layouts/PropTypes";
import NotFound from "./components/layouts/NotFound";
import ComponentsForm from '../src/components/forms/Components/';

const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/editor" component={Editor} />
      <Route path="/providers" component={Providers} />
      <Route path="/components" component={Components} />
      <Route path="/components/:id" component={ComponentsForm} />
      <Route path="/propTypes" component={PropTypes} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export { router };
