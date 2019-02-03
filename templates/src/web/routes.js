import React from 'react'
import { Route, Switch } from 'react-router';
import Home from '../web/components/layouts/Home';
import Counter from '../web/components/layouts/Counter';
import NoMatch from '../web/components/layouts/NoMatch';
import NavBar from '../web/components/layouts/NavBar';
import TestsForm from '../web/components/forms/TestForm';

const routes = (
  <div className='container'>
    <div className='row'><NavBar /></div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/testform" component={TestsForm} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes