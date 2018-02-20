import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '../../modules/common/components/web';
import Editor from './containers/Editor';
import reducers from './reducers';

import Feature from '../connector';

export default new Feature({
  route: <Route exact path="/editor" component={Editor} />,
  navItem: (
    <MenuItem key="editor">
      <NavLink to="/editor" className="nav-link" activeClassName="active">
        Editor
      </NavLink>
    </MenuItem>
  ),
  reducer: { editor: reducers }
});
