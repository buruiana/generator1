import { Ionicons } from '@expo/vector-icons';
import { createTabBarIconWrapper } from '../common/components/native';
import Editor from './containers/Editor';
import reducers from './reducers';

import Feature from '../connector';

export default new Feature({
  tabItem: {
    Editor: {
      screen: Editor,
      navigationOptions: {
        tabBarIcon: createTabBarIconWrapper(Ionicons, {
          name: 'ios-browsers-outline',
          size: 30
        })
      }
    }
  },
  reducer: { editor: reducers }
});
