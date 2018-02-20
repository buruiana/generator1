import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '../../modules/common/components/web';

import Provider from './containers/Provider';
import ProviderEdit from './containers/ProviderEdit';

import reducers from './reducers';

import Feature from '../connector';

export default new Feature({
  route: [
    <Route exact path="/providers" component={Provider} />,
    <Route exact path="/provider/:id" component={ProviderEdit} />
  ],
  navItem: (
    <MenuItem key="/providers">
      <NavLink to="/providers" className="nav-link" activeClassName="active">
        Providers
      </NavLink>
    </MenuItem>
  ),
  reducer: { provider: reducers }
});
