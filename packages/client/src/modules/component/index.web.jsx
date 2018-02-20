import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '../../modules/common/components/web';

import Component from './containers/Component';
import ComponentEdit from './containers/ComponentEdit';

import reducers from './reducers';

import Feature from '../connector';

export default new Feature({
  route: [
    <Route exact path="/components" component={Component} />,
    <Route exact path="/component/:id" component={ComponentEdit} />
  ],
  navItem: (
    <MenuItem key="/components">
      <NavLink to="/components" className="nav-link" activeClassName="active">
        Components
      </NavLink>
    </MenuItem>
  ),
  reducer: { component: reducers }
});
